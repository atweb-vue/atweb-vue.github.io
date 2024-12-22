(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Webamp = factory());
})(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function getAugmentedNamespace(n) {
	  if (n.__esModule) return n;
	  var f = n.default;
		if (typeof f == "function") {
			var a = function a () {
				if (this instanceof a) {
	        return Reflect.construct(f, arguments, this.constructor);
				}
				return f.apply(this, arguments);
			};
			a.prototype = f.prototype;
	  } else a = {};
	  Object.defineProperty(a, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	var jsxRuntime = {exports: {}};

	var reactJsxRuntime_production_min = {};

	var react = {exports: {}};

	var react_production_min = {};

	/**
	 * @license React
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var l$4 = Symbol.for("react.element"),
	  n$5 = Symbol.for("react.portal"),
	  p$6 = Symbol.for("react.fragment"),
	  q$5 = Symbol.for("react.strict_mode"),
	  r$3 = Symbol.for("react.profiler"),
	  t$4 = Symbol.for("react.provider"),
	  u$3 = Symbol.for("react.context"),
	  v$4 = Symbol.for("react.forward_ref"),
	  w$2 = Symbol.for("react.suspense"),
	  x$1 = Symbol.for("react.memo"),
	  y$1 = Symbol.for("react.lazy"),
	  z$2 = Symbol.iterator;
	function A$2(a) {
	  if (null === a || "object" !== typeof a) return null;
	  a = z$2 && a[z$2] || a["@@iterator"];
	  return "function" === typeof a ? a : null;
	}
	var B$1 = {
	    isMounted: function () {
	      return !1;
	    },
	    enqueueForceUpdate: function () {},
	    enqueueReplaceState: function () {},
	    enqueueSetState: function () {}
	  },
	  C$1 = Object.assign,
	  D$1 = {};
	function E$1(a, b, e) {
	  this.props = a;
	  this.context = b;
	  this.refs = D$1;
	  this.updater = e || B$1;
	}
	E$1.prototype.isReactComponent = {};
	E$1.prototype.setState = function (a, b) {
	  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
	  this.updater.enqueueSetState(this, a, b, "setState");
	};
	E$1.prototype.forceUpdate = function (a) {
	  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
	};
	function F() {}
	F.prototype = E$1.prototype;
	function G$1(a, b, e) {
	  this.props = a;
	  this.context = b;
	  this.refs = D$1;
	  this.updater = e || B$1;
	}
	var H$1 = G$1.prototype = new F();
	H$1.constructor = G$1;
	C$1(H$1, E$1.prototype);
	H$1.isPureReactComponent = !0;
	var I$1 = Array.isArray,
	  J = Object.prototype.hasOwnProperty,
	  K$1 = {
	    current: null
	  },
	  L$1 = {
	    key: !0,
	    ref: !0,
	    __self: !0,
	    __source: !0
	  };
	function M$1(a, b, e) {
	  var d,
	    c = {},
	    k = null,
	    h = null;
	  if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L$1.hasOwnProperty(d) && (c[d] = b[d]);
	  var g = arguments.length - 2;
	  if (1 === g) c.children = e;else if (1 < g) {
	    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
	    c.children = f;
	  }
	  if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
	  return {
	    $$typeof: l$4,
	    type: a,
	    key: k,
	    ref: h,
	    props: c,
	    _owner: K$1.current
	  };
	}
	function N$1(a, b) {
	  return {
	    $$typeof: l$4,
	    type: a.type,
	    key: b,
	    ref: a.ref,
	    props: a.props,
	    _owner: a._owner
	  };
	}
	function O$1(a) {
	  return "object" === typeof a && null !== a && a.$$typeof === l$4;
	}
	function escape(a) {
	  var b = {
	    "=": "=0",
	    ":": "=2"
	  };
	  return "$" + a.replace(/[=:]/g, function (a) {
	    return b[a];
	  });
	}
	var P$1 = /\/+/g;
	function Q$1(a, b) {
	  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
	}
	function R$1(a, b, e, d, c) {
	  var k = typeof a;
	  if ("undefined" === k || "boolean" === k) a = null;
	  var h = !1;
	  if (null === a) h = !0;else switch (k) {
	    case "string":
	    case "number":
	      h = !0;
	      break;
	    case "object":
	      switch (a.$$typeof) {
	        case l$4:
	        case n$5:
	          h = !0;
	      }
	  }
	  if (h) return h = a, c = c(h), a = "" === d ? "." + Q$1(h, 0) : d, I$1(c) ? (e = "", null != a && (e = a.replace(P$1, "$&/") + "/"), R$1(c, b, e, "", function (a) {
	    return a;
	  })) : null != c && (O$1(c) && (c = N$1(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P$1, "$&/") + "/") + a)), b.push(c)), 1;
	  h = 0;
	  d = "" === d ? "." : d + ":";
	  if (I$1(a)) for (var g = 0; g < a.length; g++) {
	    k = a[g];
	    var f = d + Q$1(k, g);
	    h += R$1(k, b, e, f, c);
	  } else if (f = A$2(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q$1(k, g++), h += R$1(k, b, e, f, c);else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
	  return h;
	}
	function S$1(a, b, e) {
	  if (null == a) return a;
	  var d = [],
	    c = 0;
	  R$1(a, d, "", "", function (a) {
	    return b.call(e, a, c++);
	  });
	  return d;
	}
	function T$1(a) {
	  if (-1 === a._status) {
	    var b = a._result;
	    b = b();
	    b.then(function (b) {
	      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
	    }, function (b) {
	      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
	    });
	    -1 === a._status && (a._status = 0, a._result = b);
	  }
	  if (1 === a._status) return a._result.default;
	  throw a._result;
	}
	var U$1 = {
	    current: null
	  },
	  V$1 = {
	    transition: null
	  },
	  W$1 = {
	    ReactCurrentDispatcher: U$1,
	    ReactCurrentBatchConfig: V$1,
	    ReactCurrentOwner: K$1
	  };
	react_production_min.Children = {
	  map: S$1,
	  forEach: function (a, b, e) {
	    S$1(a, function () {
	      b.apply(this, arguments);
	    }, e);
	  },
	  count: function (a) {
	    var b = 0;
	    S$1(a, function () {
	      b++;
	    });
	    return b;
	  },
	  toArray: function (a) {
	    return S$1(a, function (a) {
	      return a;
	    }) || [];
	  },
	  only: function (a) {
	    if (!O$1(a)) throw Error("React.Children.only expected to receive a single React element child.");
	    return a;
	  }
	};
	react_production_min.Component = E$1;
	react_production_min.Fragment = p$6;
	react_production_min.Profiler = r$3;
	react_production_min.PureComponent = G$1;
	react_production_min.StrictMode = q$5;
	react_production_min.Suspense = w$2;
	react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
	react_production_min.cloneElement = function (a, b, e) {
	  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
	  var d = C$1({}, a.props),
	    c = a.key,
	    k = a.ref,
	    h = a._owner;
	  if (null != b) {
	    void 0 !== b.ref && (k = b.ref, h = K$1.current);
	    void 0 !== b.key && (c = "" + b.key);
	    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
	    for (f in b) J.call(b, f) && !L$1.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
	  }
	  var f = arguments.length - 2;
	  if (1 === f) d.children = e;else if (1 < f) {
	    g = Array(f);
	    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
	    d.children = g;
	  }
	  return {
	    $$typeof: l$4,
	    type: a.type,
	    key: c,
	    ref: k,
	    props: d,
	    _owner: h
	  };
	};
	react_production_min.createContext = function (a) {
	  a = {
	    $$typeof: u$3,
	    _currentValue: a,
	    _currentValue2: a,
	    _threadCount: 0,
	    Provider: null,
	    Consumer: null,
	    _defaultValue: null,
	    _globalName: null
	  };
	  a.Provider = {
	    $$typeof: t$4,
	    _context: a
	  };
	  return a.Consumer = a;
	};
	react_production_min.createElement = M$1;
	react_production_min.createFactory = function (a) {
	  var b = M$1.bind(null, a);
	  b.type = a;
	  return b;
	};
	react_production_min.createRef = function () {
	  return {
	    current: null
	  };
	};
	react_production_min.forwardRef = function (a) {
	  return {
	    $$typeof: v$4,
	    render: a
	  };
	};
	react_production_min.isValidElement = O$1;
	react_production_min.lazy = function (a) {
	  return {
	    $$typeof: y$1,
	    _payload: {
	      _status: -1,
	      _result: a
	    },
	    _init: T$1
	  };
	};
	react_production_min.memo = function (a, b) {
	  return {
	    $$typeof: x$1,
	    type: a,
	    compare: void 0 === b ? null : b
	  };
	};
	react_production_min.startTransition = function (a) {
	  var b = V$1.transition;
	  V$1.transition = {};
	  try {
	    a();
	  } finally {
	    V$1.transition = b;
	  }
	};
	react_production_min.unstable_act = function () {
	  throw Error("act(...) is not supported in production builds of React.");
	};
	react_production_min.useCallback = function (a, b) {
	  return U$1.current.useCallback(a, b);
	};
	react_production_min.useContext = function (a) {
	  return U$1.current.useContext(a);
	};
	react_production_min.useDebugValue = function () {};
	react_production_min.useDeferredValue = function (a) {
	  return U$1.current.useDeferredValue(a);
	};
	react_production_min.useEffect = function (a, b) {
	  return U$1.current.useEffect(a, b);
	};
	react_production_min.useId = function () {
	  return U$1.current.useId();
	};
	react_production_min.useImperativeHandle = function (a, b, e) {
	  return U$1.current.useImperativeHandle(a, b, e);
	};
	react_production_min.useInsertionEffect = function (a, b) {
	  return U$1.current.useInsertionEffect(a, b);
	};
	react_production_min.useLayoutEffect = function (a, b) {
	  return U$1.current.useLayoutEffect(a, b);
	};
	react_production_min.useMemo = function (a, b) {
	  return U$1.current.useMemo(a, b);
	};
	react_production_min.useReducer = function (a, b, e) {
	  return U$1.current.useReducer(a, b, e);
	};
	react_production_min.useRef = function (a) {
	  return U$1.current.useRef(a);
	};
	react_production_min.useState = function (a) {
	  return U$1.current.useState(a);
	};
	react_production_min.useSyncExternalStore = function (a, b, e) {
	  return U$1.current.useSyncExternalStore(a, b, e);
	};
	react_production_min.useTransition = function () {
	  return U$1.current.useTransition();
	};
	react_production_min.version = "18.2.0";

	{
	  react.exports = react_production_min;
	}
	var reactExports = react.exports;

	/**
	 * @license React
	 * react-jsx-runtime.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var f$2 = reactExports,
	  k$3 = Symbol.for("react.element"),
	  l$3 = Symbol.for("react.fragment"),
	  m$4 = Object.prototype.hasOwnProperty,
	  n$4 = f$2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	  p$5 = {
	    key: !0,
	    ref: !0,
	    __self: !0,
	    __source: !0
	  };
	function q$4(c, a, g) {
	  var b,
	    d = {},
	    e = null,
	    h = null;
	  void 0 !== g && (e = "" + g);
	  void 0 !== a.key && (e = "" + a.key);
	  void 0 !== a.ref && (h = a.ref);
	  for (b in a) m$4.call(a, b) && !p$5.hasOwnProperty(b) && (d[b] = a[b]);
	  if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
	  return {
	    $$typeof: k$3,
	    type: c,
	    key: e,
	    ref: h,
	    props: d,
	    _owner: n$4.current
	  };
	}
	reactJsxRuntime_production_min.Fragment = l$3;
	reactJsxRuntime_production_min.jsx = q$4;
	reactJsxRuntime_production_min.jsxs = q$4;

	{
	  jsxRuntime.exports = reactJsxRuntime_production_min;
	}
	var jsxRuntimeExports = jsxRuntime.exports;

	var client = {};

	var reactDom = {exports: {}};

	var reactDom_production_min = {};

	var scheduler = {exports: {}};

	var scheduler_production_min = {};

	/**
	 * @license React
	 * scheduler.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	(function (exports) {

	  function f(a, b) {
	    var c = a.length;
	    a.push(b);
	    a: for (; 0 < c;) {
	      var d = c - 1 >>> 1,
	        e = a[d];
	      if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;else break a;
	    }
	  }
	  function h(a) {
	    return 0 === a.length ? null : a[0];
	  }
	  function k(a) {
	    if (0 === a.length) return null;
	    var b = a[0],
	      c = a.pop();
	    if (c !== b) {
	      a[0] = c;
	      a: for (var d = 0, e = a.length, w = e >>> 1; d < w;) {
	        var m = 2 * (d + 1) - 1,
	          C = a[m],
	          n = m + 1,
	          x = a[n];
	        if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;else break a;
	      }
	    }
	    return b;
	  }
	  function g(a, b) {
	    var c = a.sortIndex - b.sortIndex;
	    return 0 !== c ? c : a.id - b.id;
	  }
	  if ("object" === typeof performance && "function" === typeof performance.now) {
	    var l = performance;
	    exports.unstable_now = function () {
	      return l.now();
	    };
	  } else {
	    var p = Date,
	      q = p.now();
	    exports.unstable_now = function () {
	      return p.now() - q;
	    };
	  }
	  var r = [],
	    t = [],
	    u = 1,
	    v = null,
	    y = 3,
	    z = !1,
	    A = !1,
	    B = !1,
	    D = "function" === typeof setTimeout ? setTimeout : null,
	    E = "function" === typeof clearTimeout ? clearTimeout : null,
	    F = "undefined" !== typeof setImmediate ? setImmediate : null;
	  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
	  function G(a) {
	    for (var b = h(t); null !== b;) {
	      if (null === b.callback) k(t);else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);else break;
	      b = h(t);
	    }
	  }
	  function H(a) {
	    B = !1;
	    G(a);
	    if (!A) if (null !== h(r)) A = !0, I(J);else {
	      var b = h(t);
	      null !== b && K(H, b.startTime - a);
	    }
	  }
	  function J(a, b) {
	    A = !1;
	    B && (B = !1, E(L), L = -1);
	    z = !0;
	    var c = y;
	    try {
	      G(b);
	      for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M());) {
	        var d = v.callback;
	        if ("function" === typeof d) {
	          v.callback = null;
	          y = v.priorityLevel;
	          var e = d(v.expirationTime <= b);
	          b = exports.unstable_now();
	          "function" === typeof e ? v.callback = e : v === h(r) && k(r);
	          G(b);
	        } else k(r);
	        v = h(r);
	      }
	      if (null !== v) var w = !0;else {
	        var m = h(t);
	        null !== m && K(H, m.startTime - b);
	        w = !1;
	      }
	      return w;
	    } finally {
	      v = null, y = c, z = !1;
	    }
	  }
	  var N = !1,
	    O = null,
	    L = -1,
	    P = 5,
	    Q = -1;
	  function M() {
	    return exports.unstable_now() - Q < P ? !1 : !0;
	  }
	  function R() {
	    if (null !== O) {
	      var a = exports.unstable_now();
	      Q = a;
	      var b = !0;
	      try {
	        b = O(!0, a);
	      } finally {
	        b ? S() : (N = !1, O = null);
	      }
	    } else N = !1;
	  }
	  var S;
	  if ("function" === typeof F) S = function () {
	    F(R);
	  };else if ("undefined" !== typeof MessageChannel) {
	    var T = new MessageChannel(),
	      U = T.port2;
	    T.port1.onmessage = R;
	    S = function () {
	      U.postMessage(null);
	    };
	  } else S = function () {
	    D(R, 0);
	  };
	  function I(a) {
	    O = a;
	    N || (N = !0, S());
	  }
	  function K(a, b) {
	    L = D(function () {
	      a(exports.unstable_now());
	    }, b);
	  }
	  exports.unstable_IdlePriority = 5;
	  exports.unstable_ImmediatePriority = 1;
	  exports.unstable_LowPriority = 4;
	  exports.unstable_NormalPriority = 3;
	  exports.unstable_Profiling = null;
	  exports.unstable_UserBlockingPriority = 2;
	  exports.unstable_cancelCallback = function (a) {
	    a.callback = null;
	  };
	  exports.unstable_continueExecution = function () {
	    A || z || (A = !0, I(J));
	  };
	  exports.unstable_forceFrameRate = function (a) {
	    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1E3 / a) : 5;
	  };
	  exports.unstable_getCurrentPriorityLevel = function () {
	    return y;
	  };
	  exports.unstable_getFirstCallbackNode = function () {
	    return h(r);
	  };
	  exports.unstable_next = function (a) {
	    switch (y) {
	      case 1:
	      case 2:
	      case 3:
	        var b = 3;
	        break;
	      default:
	        b = y;
	    }
	    var c = y;
	    y = b;
	    try {
	      return a();
	    } finally {
	      y = c;
	    }
	  };
	  exports.unstable_pauseExecution = function () {};
	  exports.unstable_requestPaint = function () {};
	  exports.unstable_runWithPriority = function (a, b) {
	    switch (a) {
	      case 1:
	      case 2:
	      case 3:
	      case 4:
	      case 5:
	        break;
	      default:
	        a = 3;
	    }
	    var c = y;
	    y = a;
	    try {
	      return b();
	    } finally {
	      y = c;
	    }
	  };
	  exports.unstable_scheduleCallback = function (a, b, c) {
	    var d = exports.unstable_now();
	    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
	    switch (a) {
	      case 1:
	        var e = -1;
	        break;
	      case 2:
	        e = 250;
	        break;
	      case 5:
	        e = 1073741823;
	        break;
	      case 4:
	        e = 1E4;
	        break;
	      default:
	        e = 5E3;
	    }
	    e = c + e;
	    a = {
	      id: u++,
	      callback: b,
	      priorityLevel: a,
	      startTime: c,
	      expirationTime: e,
	      sortIndex: -1
	    };
	    c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = !0, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = !0, I(J)));
	    return a;
	  };
	  exports.unstable_shouldYield = M;
	  exports.unstable_wrapCallback = function (a) {
	    var b = y;
	    return function () {
	      var c = y;
	      y = b;
	      try {
	        return a.apply(this, arguments);
	      } finally {
	        y = c;
	      }
	    };
	  };
	})(scheduler_production_min);

	{
	  scheduler.exports = scheduler_production_min;
	}
	var schedulerExports = scheduler.exports;

	/**
	 * @license React
	 * react-dom.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var aa = reactExports,
	  ca = schedulerExports;
	function p$4(a) {
	  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
	  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var da = new Set(),
	  ea = {};
	function fa(a, b) {
	  ha(a, b);
	  ha(a + "Capture", b);
	}
	function ha(a, b) {
	  ea[a] = b;
	  for (a = 0; a < b.length; a++) da.add(b[a]);
	}
	var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
	  ja = Object.prototype.hasOwnProperty,
	  ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	  la = {},
	  ma = {};
	function oa(a) {
	  if (ja.call(ma, a)) return !0;
	  if (ja.call(la, a)) return !1;
	  if (ka.test(a)) return ma[a] = !0;
	  la[a] = !0;
	  return !1;
	}
	function pa(a, b, c, d) {
	  if (null !== c && 0 === c.type) return !1;
	  switch (typeof b) {
	    case "function":
	    case "symbol":
	      return !0;
	    case "boolean":
	      if (d) return !1;
	      if (null !== c) return !c.acceptsBooleans;
	      a = a.toLowerCase().slice(0, 5);
	      return "data-" !== a && "aria-" !== a;
	    default:
	      return !1;
	  }
	}
	function qa(a, b, c, d) {
	  if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return !0;
	  if (d) return !1;
	  if (null !== c) switch (c.type) {
	    case 3:
	      return !b;
	    case 4:
	      return !1 === b;
	    case 5:
	      return isNaN(b);
	    case 6:
	      return isNaN(b) || 1 > b;
	  }
	  return !1;
	}
	function v$3(a, b, c, d, e, f, g) {
	  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
	  this.attributeName = d;
	  this.attributeNamespace = e;
	  this.mustUseProperty = c;
	  this.propertyName = a;
	  this.type = b;
	  this.sanitizeURL = f;
	  this.removeEmptyString = g;
	}
	var z$1 = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
	  z$1[a] = new v$3(a, 0, !1, a, null, !1, !1);
	});
	[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
	  var b = a[0];
	  z$1[b] = new v$3(b, 1, !1, a[1], null, !1, !1);
	});
	["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
	  z$1[a] = new v$3(a, 2, !1, a.toLowerCase(), null, !1, !1);
	});
	["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
	  z$1[a] = new v$3(a, 2, !1, a, null, !1, !1);
	});
	"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
	  z$1[a] = new v$3(a, 3, !1, a.toLowerCase(), null, !1, !1);
	});
	["checked", "multiple", "muted", "selected"].forEach(function (a) {
	  z$1[a] = new v$3(a, 3, !0, a, null, !1, !1);
	});
	["capture", "download"].forEach(function (a) {
	  z$1[a] = new v$3(a, 4, !1, a, null, !1, !1);
	});
	["cols", "rows", "size", "span"].forEach(function (a) {
	  z$1[a] = new v$3(a, 6, !1, a, null, !1, !1);
	});
	["rowSpan", "start"].forEach(function (a) {
	  z$1[a] = new v$3(a, 5, !1, a.toLowerCase(), null, !1, !1);
	});
	var ra = /[\-:]([a-z])/g;
	function sa(a) {
	  return a[1].toUpperCase();
	}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
	  var b = a.replace(ra, sa);
	  z$1[b] = new v$3(b, 1, !1, a, null, !1, !1);
	});
	"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
	  var b = a.replace(ra, sa);
	  z$1[b] = new v$3(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
	});
	["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
	  var b = a.replace(ra, sa);
	  z$1[b] = new v$3(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
	});
	["tabIndex", "crossOrigin"].forEach(function (a) {
	  z$1[a] = new v$3(a, 1, !1, a.toLowerCase(), null, !1, !1);
	});
	z$1.xlinkHref = new v$3("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
	["src", "href", "action", "formAction"].forEach(function (a) {
	  z$1[a] = new v$3(a, 1, !1, a.toLowerCase(), null, !0, !0);
	});
	function ta(a, b, c, d) {
	  var e = z$1.hasOwnProperty(b) ? z$1[b] : null;
	  if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
	}
	var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	  va = Symbol.for("react.element"),
	  wa = Symbol.for("react.portal"),
	  ya = Symbol.for("react.fragment"),
	  za = Symbol.for("react.strict_mode"),
	  Aa = Symbol.for("react.profiler"),
	  Ba = Symbol.for("react.provider"),
	  Ca = Symbol.for("react.context"),
	  Da = Symbol.for("react.forward_ref"),
	  Ea = Symbol.for("react.suspense"),
	  Fa = Symbol.for("react.suspense_list"),
	  Ga = Symbol.for("react.memo"),
	  Ha = Symbol.for("react.lazy");
	var Ia = Symbol.for("react.offscreen");
	var Ja = Symbol.iterator;
	function Ka(a) {
	  if (null === a || "object" !== typeof a) return null;
	  a = Ja && a[Ja] || a["@@iterator"];
	  return "function" === typeof a ? a : null;
	}
	var A$1 = Object.assign,
	  La;
	function Ma(a) {
	  if (void 0 === La) try {
	    throw Error();
	  } catch (c) {
	    var b = c.stack.trim().match(/\n( *(at )?)/);
	    La = b && b[1] || "";
	  }
	  return "\n" + La + a;
	}
	var Na = !1;
	function Oa(a, b) {
	  if (!a || Na) return "";
	  Na = !0;
	  var c = Error.prepareStackTrace;
	  Error.prepareStackTrace = void 0;
	  try {
	    if (b) {
	      if (b = function () {
	        throw Error();
	      }, Object.defineProperty(b.prototype, "props", {
	        set: function () {
	          throw Error();
	        }
	      }), "object" === typeof Reflect && Reflect.construct) {
	        try {
	          Reflect.construct(b, []);
	        } catch (l) {
	          var d = l;
	        }
	        Reflect.construct(a, [], b);
	      } else {
	        try {
	          b.call();
	        } catch (l) {
	          d = l;
	        }
	        a.call(b.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (l) {
	        d = l;
	      }
	      a();
	    }
	  } catch (l) {
	    if (l && d && "string" === typeof l.stack) {
	      for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) h--;
	      for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
	        if (1 !== g || 1 !== h) {
	          do if (g--, h--, 0 > h || e[g] !== f[h]) {
	            var k = "\n" + e[g].replace(" at new ", " at ");
	            a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
	            return k;
	          } while (1 <= g && 0 <= h);
	        }
	        break;
	      }
	    }
	  } finally {
	    Na = !1, Error.prepareStackTrace = c;
	  }
	  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
	}
	function Pa(a) {
	  switch (a.tag) {
	    case 5:
	      return Ma(a.type);
	    case 16:
	      return Ma("Lazy");
	    case 13:
	      return Ma("Suspense");
	    case 19:
	      return Ma("SuspenseList");
	    case 0:
	    case 2:
	    case 15:
	      return a = Oa(a.type, !1), a;
	    case 11:
	      return a = Oa(a.type.render, !1), a;
	    case 1:
	      return a = Oa(a.type, !0), a;
	    default:
	      return "";
	  }
	}
	function Qa(a) {
	  if (null == a) return null;
	  if ("function" === typeof a) return a.displayName || a.name || null;
	  if ("string" === typeof a) return a;
	  switch (a) {
	    case ya:
	      return "Fragment";
	    case wa:
	      return "Portal";
	    case Aa:
	      return "Profiler";
	    case za:
	      return "StrictMode";
	    case Ea:
	      return "Suspense";
	    case Fa:
	      return "SuspenseList";
	  }
	  if ("object" === typeof a) switch (a.$$typeof) {
	    case Ca:
	      return (a.displayName || "Context") + ".Consumer";
	    case Ba:
	      return (a._context.displayName || "Context") + ".Provider";
	    case Da:
	      var b = a.render;
	      a = a.displayName;
	      a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
	      return a;
	    case Ga:
	      return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
	    case Ha:
	      b = a._payload;
	      a = a._init;
	      try {
	        return Qa(a(b));
	      } catch (c) {}
	  }
	  return null;
	}
	function Ra(a) {
	  var b = a.type;
	  switch (a.tag) {
	    case 24:
	      return "Cache";
	    case 9:
	      return (b.displayName || "Context") + ".Consumer";
	    case 10:
	      return (b._context.displayName || "Context") + ".Provider";
	    case 18:
	      return "DehydratedFragment";
	    case 11:
	      return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
	    case 7:
	      return "Fragment";
	    case 5:
	      return b;
	    case 4:
	      return "Portal";
	    case 3:
	      return "Root";
	    case 6:
	      return "Text";
	    case 16:
	      return Qa(b);
	    case 8:
	      return b === za ? "StrictMode" : "Mode";
	    case 22:
	      return "Offscreen";
	    case 12:
	      return "Profiler";
	    case 21:
	      return "Scope";
	    case 13:
	      return "Suspense";
	    case 19:
	      return "SuspenseList";
	    case 25:
	      return "TracingMarker";
	    case 1:
	    case 0:
	    case 17:
	    case 2:
	    case 14:
	    case 15:
	      if ("function" === typeof b) return b.displayName || b.name || null;
	      if ("string" === typeof b) return b;
	  }
	  return null;
	}
	function Sa(a) {
	  switch (typeof a) {
	    case "boolean":
	    case "number":
	    case "string":
	    case "undefined":
	      return a;
	    case "object":
	      return a;
	    default:
	      return "";
	  }
	}
	function Ta(a) {
	  var b = a.type;
	  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
	}
	function Ua(a) {
	  var b = Ta(a) ? "checked" : "value",
	    c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
	    d = "" + a[b];
	  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
	    var e = c.get,
	      f = c.set;
	    Object.defineProperty(a, b, {
	      configurable: !0,
	      get: function () {
	        return e.call(this);
	      },
	      set: function (a) {
	        d = "" + a;
	        f.call(this, a);
	      }
	    });
	    Object.defineProperty(a, b, {
	      enumerable: c.enumerable
	    });
	    return {
	      getValue: function () {
	        return d;
	      },
	      setValue: function (a) {
	        d = "" + a;
	      },
	      stopTracking: function () {
	        a._valueTracker = null;
	        delete a[b];
	      }
	    };
	  }
	}
	function Va(a) {
	  a._valueTracker || (a._valueTracker = Ua(a));
	}
	function Wa(a) {
	  if (!a) return !1;
	  var b = a._valueTracker;
	  if (!b) return !0;
	  var c = b.getValue();
	  var d = "";
	  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
	  a = d;
	  return a !== c ? (b.setValue(a), !0) : !1;
	}
	function Xa(a) {
	  a = a || ("undefined" !== typeof document ? document : void 0);
	  if ("undefined" === typeof a) return null;
	  try {
	    return a.activeElement || a.body;
	  } catch (b) {
	    return a.body;
	  }
	}
	function Ya(a, b) {
	  var c = b.checked;
	  return A$1({}, b, {
	    defaultChecked: void 0,
	    defaultValue: void 0,
	    value: void 0,
	    checked: null != c ? c : a._wrapperState.initialChecked
	  });
	}
	function Za(a, b) {
	  var c = null == b.defaultValue ? "" : b.defaultValue,
	    d = null != b.checked ? b.checked : b.defaultChecked;
	  c = Sa(null != b.value ? b.value : c);
	  a._wrapperState = {
	    initialChecked: d,
	    initialValue: c,
	    controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
	  };
	}
	function ab(a, b) {
	  b = b.checked;
	  null != b && ta(a, "checked", b, !1);
	}
	function bb(a, b) {
	  ab(a, b);
	  var c = Sa(b.value),
	    d = b.type;
	  if (null != c) {
	    if ("number" === d) {
	      if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
	    } else a.value !== "" + c && (a.value = "" + c);
	  } else if ("submit" === d || "reset" === d) {
	    a.removeAttribute("value");
	    return;
	  }
	  b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
	  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
	}
	function db(a, b, c) {
	  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
	    var d = b.type;
	    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
	    b = "" + a._wrapperState.initialValue;
	    c || b === a.value || (a.value = b);
	    a.defaultValue = b;
	  }
	  c = a.name;
	  "" !== c && (a.name = "");
	  a.defaultChecked = !!a._wrapperState.initialChecked;
	  "" !== c && (a.name = c);
	}
	function cb(a, b, c) {
	  if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
	}
	var eb = Array.isArray;
	function fb(a, b, c, d) {
	  a = a.options;
	  if (b) {
	    b = {};
	    for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;
	    for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
	  } else {
	    c = "" + Sa(c);
	    b = null;
	    for (e = 0; e < a.length; e++) {
	      if (a[e].value === c) {
	        a[e].selected = !0;
	        d && (a[e].defaultSelected = !0);
	        return;
	      }
	      null !== b || a[e].disabled || (b = a[e]);
	    }
	    null !== b && (b.selected = !0);
	  }
	}
	function gb(a, b) {
	  if (null != b.dangerouslySetInnerHTML) throw Error(p$4(91));
	  return A$1({}, b, {
	    value: void 0,
	    defaultValue: void 0,
	    children: "" + a._wrapperState.initialValue
	  });
	}
	function hb(a, b) {
	  var c = b.value;
	  if (null == c) {
	    c = b.children;
	    b = b.defaultValue;
	    if (null != c) {
	      if (null != b) throw Error(p$4(92));
	      if (eb(c)) {
	        if (1 < c.length) throw Error(p$4(93));
	        c = c[0];
	      }
	      b = c;
	    }
	    null == b && (b = "");
	    c = b;
	  }
	  a._wrapperState = {
	    initialValue: Sa(c)
	  };
	}
	function ib(a, b) {
	  var c = Sa(b.value),
	    d = Sa(b.defaultValue);
	  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
	  null != d && (a.defaultValue = "" + d);
	}
	function jb(a) {
	  var b = a.textContent;
	  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
	}
	function kb(a) {
	  switch (a) {
	    case "svg":
	      return "http://www.w3.org/2000/svg";
	    case "math":
	      return "http://www.w3.org/1998/Math/MathML";
	    default:
	      return "http://www.w3.org/1999/xhtml";
	  }
	}
	function lb(a, b) {
	  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
	}
	var mb,
	  nb = function (a) {
	    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
	      MSApp.execUnsafeLocalFunction(function () {
	        return a(b, c, d, e);
	      });
	    } : a;
	  }(function (a, b) {
	    if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;else {
	      mb = mb || document.createElement("div");
	      mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
	      for (b = mb.firstChild; a.firstChild;) a.removeChild(a.firstChild);
	      for (; b.firstChild;) a.appendChild(b.firstChild);
	    }
	  });
	function ob(a, b) {
	  if (b) {
	    var c = a.firstChild;
	    if (c && c === a.lastChild && 3 === c.nodeType) {
	      c.nodeValue = b;
	      return;
	    }
	  }
	  a.textContent = b;
	}
	var pb = {
	    animationIterationCount: !0,
	    aspectRatio: !0,
	    borderImageOutset: !0,
	    borderImageSlice: !0,
	    borderImageWidth: !0,
	    boxFlex: !0,
	    boxFlexGroup: !0,
	    boxOrdinalGroup: !0,
	    columnCount: !0,
	    columns: !0,
	    flex: !0,
	    flexGrow: !0,
	    flexPositive: !0,
	    flexShrink: !0,
	    flexNegative: !0,
	    flexOrder: !0,
	    gridArea: !0,
	    gridRow: !0,
	    gridRowEnd: !0,
	    gridRowSpan: !0,
	    gridRowStart: !0,
	    gridColumn: !0,
	    gridColumnEnd: !0,
	    gridColumnSpan: !0,
	    gridColumnStart: !0,
	    fontWeight: !0,
	    lineClamp: !0,
	    lineHeight: !0,
	    opacity: !0,
	    order: !0,
	    orphans: !0,
	    tabSize: !0,
	    widows: !0,
	    zIndex: !0,
	    zoom: !0,
	    fillOpacity: !0,
	    floodOpacity: !0,
	    stopOpacity: !0,
	    strokeDasharray: !0,
	    strokeDashoffset: !0,
	    strokeMiterlimit: !0,
	    strokeOpacity: !0,
	    strokeWidth: !0
	  },
	  qb = ["Webkit", "ms", "Moz", "O"];
	Object.keys(pb).forEach(function (a) {
	  qb.forEach(function (b) {
	    b = b + a.charAt(0).toUpperCase() + a.substring(1);
	    pb[b] = pb[a];
	  });
	});
	function rb(a, b, c) {
	  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
	}
	function sb(a, b) {
	  a = a.style;
	  for (var c in b) if (b.hasOwnProperty(c)) {
	    var d = 0 === c.indexOf("--"),
	      e = rb(c, b[c], d);
	    "float" === c && (c = "cssFloat");
	    d ? a.setProperty(c, e) : a[c] = e;
	  }
	}
	var tb = A$1({
	  menuitem: !0
	}, {
	  area: !0,
	  base: !0,
	  br: !0,
	  col: !0,
	  embed: !0,
	  hr: !0,
	  img: !0,
	  input: !0,
	  keygen: !0,
	  link: !0,
	  meta: !0,
	  param: !0,
	  source: !0,
	  track: !0,
	  wbr: !0
	});
	function ub(a, b) {
	  if (b) {
	    if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p$4(137, a));
	    if (null != b.dangerouslySetInnerHTML) {
	      if (null != b.children) throw Error(p$4(60));
	      if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p$4(61));
	    }
	    if (null != b.style && "object" !== typeof b.style) throw Error(p$4(62));
	  }
	}
	function vb(a, b) {
	  if (-1 === a.indexOf("-")) return "string" === typeof b.is;
	  switch (a) {
	    case "annotation-xml":
	    case "color-profile":
	    case "font-face":
	    case "font-face-src":
	    case "font-face-uri":
	    case "font-face-format":
	    case "font-face-name":
	    case "missing-glyph":
	      return !1;
	    default:
	      return !0;
	  }
	}
	var wb = null;
	function xb(a) {
	  a = a.target || a.srcElement || window;
	  a.correspondingUseElement && (a = a.correspondingUseElement);
	  return 3 === a.nodeType ? a.parentNode : a;
	}
	var yb = null,
	  zb = null,
	  Ab = null;
	function Bb(a) {
	  if (a = Cb(a)) {
	    if ("function" !== typeof yb) throw Error(p$4(280));
	    var b = a.stateNode;
	    b && (b = Db(b), yb(a.stateNode, a.type, b));
	  }
	}
	function Eb(a) {
	  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
	}
	function Fb() {
	  if (zb) {
	    var a = zb,
	      b = Ab;
	    Ab = zb = null;
	    Bb(a);
	    if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
	  }
	}
	function Gb(a, b) {
	  return a(b);
	}
	function Hb() {}
	var Ib = !1;
	function Jb(a, b, c) {
	  if (Ib) return a(b, c);
	  Ib = !0;
	  try {
	    return Gb(a, b, c);
	  } finally {
	    if (Ib = !1, null !== zb || null !== Ab) Hb(), Fb();
	  }
	}
	function Kb(a, b) {
	  var c = a.stateNode;
	  if (null === c) return null;
	  var d = Db(c);
	  if (null === d) return null;
	  c = d[b];
	  a: switch (b) {
	    case "onClick":
	    case "onClickCapture":
	    case "onDoubleClick":
	    case "onDoubleClickCapture":
	    case "onMouseDown":
	    case "onMouseDownCapture":
	    case "onMouseMove":
	    case "onMouseMoveCapture":
	    case "onMouseUp":
	    case "onMouseUpCapture":
	    case "onMouseEnter":
	      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
	      a = !d;
	      break a;
	    default:
	      a = !1;
	  }
	  if (a) return null;
	  if (c && "function" !== typeof c) throw Error(p$4(231, b, typeof c));
	  return c;
	}
	var Lb = !1;
	if (ia) try {
	  var Mb = {};
	  Object.defineProperty(Mb, "passive", {
	    get: function () {
	      Lb = !0;
	    }
	  });
	  window.addEventListener("test", Mb, Mb);
	  window.removeEventListener("test", Mb, Mb);
	} catch (a) {
	  Lb = !1;
	}
	function Nb(a, b, c, d, e, f, g, h, k) {
	  var l = Array.prototype.slice.call(arguments, 3);
	  try {
	    b.apply(c, l);
	  } catch (m) {
	    this.onError(m);
	  }
	}
	var Ob = !1,
	  Pb = null,
	  Qb = !1,
	  Rb = null,
	  Sb = {
	    onError: function (a) {
	      Ob = !0;
	      Pb = a;
	    }
	  };
	function Tb(a, b, c, d, e, f, g, h, k) {
	  Ob = !1;
	  Pb = null;
	  Nb.apply(Sb, arguments);
	}
	function Ub(a, b, c, d, e, f, g, h, k) {
	  Tb.apply(this, arguments);
	  if (Ob) {
	    if (Ob) {
	      var l = Pb;
	      Ob = !1;
	      Pb = null;
	    } else throw Error(p$4(198));
	    Qb || (Qb = !0, Rb = l);
	  }
	}
	function Vb(a) {
	  var b = a,
	    c = a;
	  if (a.alternate) for (; b.return;) b = b.return;else {
	    a = b;
	    do b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return; while (a);
	  }
	  return 3 === b.tag ? c : null;
	}
	function Wb(a) {
	  if (13 === a.tag) {
	    var b = a.memoizedState;
	    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
	    if (null !== b) return b.dehydrated;
	  }
	  return null;
	}
	function Xb(a) {
	  if (Vb(a) !== a) throw Error(p$4(188));
	}
	function Yb(a) {
	  var b = a.alternate;
	  if (!b) {
	    b = Vb(a);
	    if (null === b) throw Error(p$4(188));
	    return b !== a ? null : a;
	  }
	  for (var c = a, d = b;;) {
	    var e = c.return;
	    if (null === e) break;
	    var f = e.alternate;
	    if (null === f) {
	      d = e.return;
	      if (null !== d) {
	        c = d;
	        continue;
	      }
	      break;
	    }
	    if (e.child === f.child) {
	      for (f = e.child; f;) {
	        if (f === c) return Xb(e), a;
	        if (f === d) return Xb(e), b;
	        f = f.sibling;
	      }
	      throw Error(p$4(188));
	    }
	    if (c.return !== d.return) c = e, d = f;else {
	      for (var g = !1, h = e.child; h;) {
	        if (h === c) {
	          g = !0;
	          c = e;
	          d = f;
	          break;
	        }
	        if (h === d) {
	          g = !0;
	          d = e;
	          c = f;
	          break;
	        }
	        h = h.sibling;
	      }
	      if (!g) {
	        for (h = f.child; h;) {
	          if (h === c) {
	            g = !0;
	            c = f;
	            d = e;
	            break;
	          }
	          if (h === d) {
	            g = !0;
	            d = f;
	            c = e;
	            break;
	          }
	          h = h.sibling;
	        }
	        if (!g) throw Error(p$4(189));
	      }
	    }
	    if (c.alternate !== d) throw Error(p$4(190));
	  }
	  if (3 !== c.tag) throw Error(p$4(188));
	  return c.stateNode.current === c ? a : b;
	}
	function Zb(a) {
	  a = Yb(a);
	  return null !== a ? $b(a) : null;
	}
	function $b(a) {
	  if (5 === a.tag || 6 === a.tag) return a;
	  for (a = a.child; null !== a;) {
	    var b = $b(a);
	    if (null !== b) return b;
	    a = a.sibling;
	  }
	  return null;
	}
	var ac = ca.unstable_scheduleCallback,
	  bc = ca.unstable_cancelCallback,
	  cc = ca.unstable_shouldYield,
	  dc = ca.unstable_requestPaint,
	  B = ca.unstable_now,
	  ec = ca.unstable_getCurrentPriorityLevel,
	  fc = ca.unstable_ImmediatePriority,
	  gc = ca.unstable_UserBlockingPriority,
	  hc = ca.unstable_NormalPriority,
	  ic = ca.unstable_LowPriority,
	  jc = ca.unstable_IdlePriority,
	  kc = null,
	  lc = null;
	function mc(a) {
	  if (lc && "function" === typeof lc.onCommitFiberRoot) try {
	    lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
	  } catch (b) {}
	}
	var oc = Math.clz32 ? Math.clz32 : nc,
	  pc = Math.log,
	  qc = Math.LN2;
	function nc(a) {
	  a >>>= 0;
	  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
	}
	var rc = 64,
	  sc = 4194304;
	function tc(a) {
	  switch (a & -a) {
	    case 1:
	      return 1;
	    case 2:
	      return 2;
	    case 4:
	      return 4;
	    case 8:
	      return 8;
	    case 16:
	      return 16;
	    case 32:
	      return 32;
	    case 64:
	    case 128:
	    case 256:
	    case 512:
	    case 1024:
	    case 2048:
	    case 4096:
	    case 8192:
	    case 16384:
	    case 32768:
	    case 65536:
	    case 131072:
	    case 262144:
	    case 524288:
	    case 1048576:
	    case 2097152:
	      return a & 4194240;
	    case 4194304:
	    case 8388608:
	    case 16777216:
	    case 33554432:
	    case 67108864:
	      return a & 130023424;
	    case 134217728:
	      return 134217728;
	    case 268435456:
	      return 268435456;
	    case 536870912:
	      return 536870912;
	    case 1073741824:
	      return 1073741824;
	    default:
	      return a;
	  }
	}
	function uc(a, b) {
	  var c = a.pendingLanes;
	  if (0 === c) return 0;
	  var d = 0,
	    e = a.suspendedLanes,
	    f = a.pingedLanes,
	    g = c & 268435455;
	  if (0 !== g) {
	    var h = g & ~e;
	    0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
	  } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
	  if (0 === d) return 0;
	  if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
	  0 !== (d & 4) && (d |= c & 16);
	  b = a.entangledLanes;
	  if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
	  return d;
	}
	function vc(a, b) {
	  switch (a) {
	    case 1:
	    case 2:
	    case 4:
	      return b + 250;
	    case 8:
	    case 16:
	    case 32:
	    case 64:
	    case 128:
	    case 256:
	    case 512:
	    case 1024:
	    case 2048:
	    case 4096:
	    case 8192:
	    case 16384:
	    case 32768:
	    case 65536:
	    case 131072:
	    case 262144:
	    case 524288:
	    case 1048576:
	    case 2097152:
	      return b + 5E3;
	    case 4194304:
	    case 8388608:
	    case 16777216:
	    case 33554432:
	    case 67108864:
	      return -1;
	    case 134217728:
	    case 268435456:
	    case 536870912:
	    case 1073741824:
	      return -1;
	    default:
	      return -1;
	  }
	}
	function wc(a, b) {
	  for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f;) {
	    var g = 31 - oc(f),
	      h = 1 << g,
	      k = e[g];
	    if (-1 === k) {
	      if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
	    } else k <= b && (a.expiredLanes |= h);
	    f &= ~h;
	  }
	}
	function xc(a) {
	  a = a.pendingLanes & -1073741825;
	  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
	}
	function yc() {
	  var a = rc;
	  rc <<= 1;
	  0 === (rc & 4194240) && (rc = 64);
	  return a;
	}
	function zc(a) {
	  for (var b = [], c = 0; 31 > c; c++) b.push(a);
	  return b;
	}
	function Ac(a, b, c) {
	  a.pendingLanes |= b;
	  536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
	  a = a.eventTimes;
	  b = 31 - oc(b);
	  a[b] = c;
	}
	function Bc(a, b) {
	  var c = a.pendingLanes & ~b;
	  a.pendingLanes = b;
	  a.suspendedLanes = 0;
	  a.pingedLanes = 0;
	  a.expiredLanes &= b;
	  a.mutableReadLanes &= b;
	  a.entangledLanes &= b;
	  b = a.entanglements;
	  var d = a.eventTimes;
	  for (a = a.expirationTimes; 0 < c;) {
	    var e = 31 - oc(c),
	      f = 1 << e;
	    b[e] = 0;
	    d[e] = -1;
	    a[e] = -1;
	    c &= ~f;
	  }
	}
	function Cc(a, b) {
	  var c = a.entangledLanes |= b;
	  for (a = a.entanglements; c;) {
	    var d = 31 - oc(c),
	      e = 1 << d;
	    e & b | a[d] & b && (a[d] |= b);
	    c &= ~e;
	  }
	}
	var C = 0;
	function Dc(a) {
	  a &= -a;
	  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
	}
	var Ec,
	  Fc,
	  Gc,
	  Hc,
	  Ic,
	  Jc = !1,
	  Kc = [],
	  Lc = null,
	  Mc = null,
	  Nc = null,
	  Oc = new Map(),
	  Pc = new Map(),
	  Qc = [],
	  Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function Sc(a, b) {
	  switch (a) {
	    case "focusin":
	    case "focusout":
	      Lc = null;
	      break;
	    case "dragenter":
	    case "dragleave":
	      Mc = null;
	      break;
	    case "mouseover":
	    case "mouseout":
	      Nc = null;
	      break;
	    case "pointerover":
	    case "pointerout":
	      Oc.delete(b.pointerId);
	      break;
	    case "gotpointercapture":
	    case "lostpointercapture":
	      Pc.delete(b.pointerId);
	  }
	}
	function Tc(a, b, c, d, e, f) {
	  if (null === a || a.nativeEvent !== f) return a = {
	    blockedOn: b,
	    domEventName: c,
	    eventSystemFlags: d,
	    nativeEvent: f,
	    targetContainers: [e]
	  }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
	  a.eventSystemFlags |= d;
	  b = a.targetContainers;
	  null !== e && -1 === b.indexOf(e) && b.push(e);
	  return a;
	}
	function Uc(a, b, c, d, e) {
	  switch (b) {
	    case "focusin":
	      return Lc = Tc(Lc, a, b, c, d, e), !0;
	    case "dragenter":
	      return Mc = Tc(Mc, a, b, c, d, e), !0;
	    case "mouseover":
	      return Nc = Tc(Nc, a, b, c, d, e), !0;
	    case "pointerover":
	      var f = e.pointerId;
	      Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
	      return !0;
	    case "gotpointercapture":
	      return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), !0;
	  }
	  return !1;
	}
	function Vc(a) {
	  var b = Wc(a.target);
	  if (null !== b) {
	    var c = Vb(b);
	    if (null !== c) if (b = c.tag, 13 === b) {
	      if (b = Wb(c), null !== b) {
	        a.blockedOn = b;
	        Ic(a.priority, function () {
	          Gc(c);
	        });
	        return;
	      }
	    } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
	      a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
	      return;
	    }
	  }
	  a.blockedOn = null;
	}
	function Xc(a) {
	  if (null !== a.blockedOn) return !1;
	  for (var b = a.targetContainers; 0 < b.length;) {
	    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
	    if (null === c) {
	      c = a.nativeEvent;
	      var d = new c.constructor(c.type, c);
	      wb = d;
	      c.target.dispatchEvent(d);
	      wb = null;
	    } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, !1;
	    b.shift();
	  }
	  return !0;
	}
	function Zc(a, b, c) {
	  Xc(a) && c.delete(b);
	}
	function $c() {
	  Jc = !1;
	  null !== Lc && Xc(Lc) && (Lc = null);
	  null !== Mc && Xc(Mc) && (Mc = null);
	  null !== Nc && Xc(Nc) && (Nc = null);
	  Oc.forEach(Zc);
	  Pc.forEach(Zc);
	}
	function ad(a, b) {
	  a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = !0, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
	}
	function bd(a) {
	  function b(b) {
	    return ad(b, a);
	  }
	  if (0 < Kc.length) {
	    ad(Kc[0], a);
	    for (var c = 1; c < Kc.length; c++) {
	      var d = Kc[c];
	      d.blockedOn === a && (d.blockedOn = null);
	    }
	  }
	  null !== Lc && ad(Lc, a);
	  null !== Mc && ad(Mc, a);
	  null !== Nc && ad(Nc, a);
	  Oc.forEach(b);
	  Pc.forEach(b);
	  for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
	  for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn);) Vc(c), null === c.blockedOn && Qc.shift();
	}
	var cd = ua.ReactCurrentBatchConfig,
	  dd = !0;
	function ed(a, b, c, d) {
	  var e = C,
	    f = cd.transition;
	  cd.transition = null;
	  try {
	    C = 1, fd(a, b, c, d);
	  } finally {
	    C = e, cd.transition = f;
	  }
	}
	function gd(a, b, c, d) {
	  var e = C,
	    f = cd.transition;
	  cd.transition = null;
	  try {
	    C = 4, fd(a, b, c, d);
	  } finally {
	    C = e, cd.transition = f;
	  }
	}
	function fd(a, b, c, d) {
	  if (dd) {
	    var e = Yc(a, b, c, d);
	    if (null === e) hd(a, b, d, id, c), Sc(a, d);else if (Uc(e, a, b, c, d)) d.stopPropagation();else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
	      for (; null !== e;) {
	        var f = Cb(e);
	        null !== f && Ec(f);
	        f = Yc(a, b, c, d);
	        null === f && hd(a, b, d, id, c);
	        if (f === e) break;
	        e = f;
	      }
	      null !== e && d.stopPropagation();
	    } else hd(a, b, d, null, c);
	  }
	}
	var id = null;
	function Yc(a, b, c, d) {
	  id = null;
	  a = xb(d);
	  a = Wc(a);
	  if (null !== a) if (b = Vb(a), null === b) a = null;else if (c = b.tag, 13 === c) {
	    a = Wb(b);
	    if (null !== a) return a;
	    a = null;
	  } else if (3 === c) {
	    if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
	    a = null;
	  } else b !== a && (a = null);
	  id = a;
	  return null;
	}
	function jd(a) {
	  switch (a) {
	    case "cancel":
	    case "click":
	    case "close":
	    case "contextmenu":
	    case "copy":
	    case "cut":
	    case "auxclick":
	    case "dblclick":
	    case "dragend":
	    case "dragstart":
	    case "drop":
	    case "focusin":
	    case "focusout":
	    case "input":
	    case "invalid":
	    case "keydown":
	    case "keypress":
	    case "keyup":
	    case "mousedown":
	    case "mouseup":
	    case "paste":
	    case "pause":
	    case "play":
	    case "pointercancel":
	    case "pointerdown":
	    case "pointerup":
	    case "ratechange":
	    case "reset":
	    case "resize":
	    case "seeked":
	    case "submit":
	    case "touchcancel":
	    case "touchend":
	    case "touchstart":
	    case "volumechange":
	    case "change":
	    case "selectionchange":
	    case "textInput":
	    case "compositionstart":
	    case "compositionend":
	    case "compositionupdate":
	    case "beforeblur":
	    case "afterblur":
	    case "beforeinput":
	    case "blur":
	    case "fullscreenchange":
	    case "focus":
	    case "hashchange":
	    case "popstate":
	    case "select":
	    case "selectstart":
	      return 1;
	    case "drag":
	    case "dragenter":
	    case "dragexit":
	    case "dragleave":
	    case "dragover":
	    case "mousemove":
	    case "mouseout":
	    case "mouseover":
	    case "pointermove":
	    case "pointerout":
	    case "pointerover":
	    case "scroll":
	    case "toggle":
	    case "touchmove":
	    case "wheel":
	    case "mouseenter":
	    case "mouseleave":
	    case "pointerenter":
	    case "pointerleave":
	      return 4;
	    case "message":
	      switch (ec()) {
	        case fc:
	          return 1;
	        case gc:
	          return 4;
	        case hc:
	        case ic:
	          return 16;
	        case jc:
	          return 536870912;
	        default:
	          return 16;
	      }
	    default:
	      return 16;
	  }
	}
	var kd = null,
	  ld = null,
	  md = null;
	function nd() {
	  if (md) return md;
	  var a,
	    b = ld,
	    c = b.length,
	    d,
	    e = "value" in kd ? kd.value : kd.textContent,
	    f = e.length;
	  for (a = 0; a < c && b[a] === e[a]; a++);
	  var g = c - a;
	  for (d = 1; d <= g && b[c - d] === e[f - d]; d++);
	  return md = e.slice(a, 1 < d ? 1 - d : void 0);
	}
	function od(a) {
	  var b = a.keyCode;
	  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
	  10 === a && (a = 13);
	  return 32 <= a || 13 === a ? a : 0;
	}
	function pd() {
	  return !0;
	}
	function qd() {
	  return !1;
	}
	function rd(a) {
	  function b(b, d, e, f, g) {
	    this._reactName = b;
	    this._targetInst = e;
	    this.type = d;
	    this.nativeEvent = f;
	    this.target = g;
	    this.currentTarget = null;
	    for (var c in a) a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
	    this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? pd : qd;
	    this.isPropagationStopped = qd;
	    return this;
	  }
	  A$1(b.prototype, {
	    preventDefault: function () {
	      this.defaultPrevented = !0;
	      var a = this.nativeEvent;
	      a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = pd);
	    },
	    stopPropagation: function () {
	      var a = this.nativeEvent;
	      a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = pd);
	    },
	    persist: function () {},
	    isPersistent: pd
	  });
	  return b;
	}
	var sd = {
	    eventPhase: 0,
	    bubbles: 0,
	    cancelable: 0,
	    timeStamp: function (a) {
	      return a.timeStamp || Date.now();
	    },
	    defaultPrevented: 0,
	    isTrusted: 0
	  },
	  td = rd(sd),
	  ud = A$1({}, sd, {
	    view: 0,
	    detail: 0
	  }),
	  vd = rd(ud),
	  wd,
	  xd,
	  yd,
	  Ad = A$1({}, ud, {
	    screenX: 0,
	    screenY: 0,
	    clientX: 0,
	    clientY: 0,
	    pageX: 0,
	    pageY: 0,
	    ctrlKey: 0,
	    shiftKey: 0,
	    altKey: 0,
	    metaKey: 0,
	    getModifierState: zd,
	    button: 0,
	    buttons: 0,
	    relatedTarget: function (a) {
	      return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
	    },
	    movementX: function (a) {
	      if ("movementX" in a) return a.movementX;
	      a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
	      return wd;
	    },
	    movementY: function (a) {
	      return "movementY" in a ? a.movementY : xd;
	    }
	  }),
	  Bd = rd(Ad),
	  Cd = A$1({}, Ad, {
	    dataTransfer: 0
	  }),
	  Dd = rd(Cd),
	  Ed = A$1({}, ud, {
	    relatedTarget: 0
	  }),
	  Fd = rd(Ed),
	  Gd = A$1({}, sd, {
	    animationName: 0,
	    elapsedTime: 0,
	    pseudoElement: 0
	  }),
	  Hd = rd(Gd),
	  Id = A$1({}, sd, {
	    clipboardData: function (a) {
	      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
	    }
	  }),
	  Jd = rd(Id),
	  Kd = A$1({}, sd, {
	    data: 0
	  }),
	  Ld = rd(Kd),
	  Md = {
	    Esc: "Escape",
	    Spacebar: " ",
	    Left: "ArrowLeft",
	    Up: "ArrowUp",
	    Right: "ArrowRight",
	    Down: "ArrowDown",
	    Del: "Delete",
	    Win: "OS",
	    Menu: "ContextMenu",
	    Apps: "ContextMenu",
	    Scroll: "ScrollLock",
	    MozPrintableKey: "Unidentified"
	  },
	  Nd = {
	    8: "Backspace",
	    9: "Tab",
	    12: "Clear",
	    13: "Enter",
	    16: "Shift",
	    17: "Control",
	    18: "Alt",
	    19: "Pause",
	    20: "CapsLock",
	    27: "Escape",
	    32: " ",
	    33: "PageUp",
	    34: "PageDown",
	    35: "End",
	    36: "Home",
	    37: "ArrowLeft",
	    38: "ArrowUp",
	    39: "ArrowRight",
	    40: "ArrowDown",
	    45: "Insert",
	    46: "Delete",
	    112: "F1",
	    113: "F2",
	    114: "F3",
	    115: "F4",
	    116: "F5",
	    117: "F6",
	    118: "F7",
	    119: "F8",
	    120: "F9",
	    121: "F10",
	    122: "F11",
	    123: "F12",
	    144: "NumLock",
	    145: "ScrollLock",
	    224: "Meta"
	  },
	  Od = {
	    Alt: "altKey",
	    Control: "ctrlKey",
	    Meta: "metaKey",
	    Shift: "shiftKey"
	  };
	function Pd(a) {
	  var b = this.nativeEvent;
	  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
	}
	function zd() {
	  return Pd;
	}
	var Qd = A$1({}, ud, {
	    key: function (a) {
	      if (a.key) {
	        var b = Md[a.key] || a.key;
	        if ("Unidentified" !== b) return b;
	      }
	      return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
	    },
	    code: 0,
	    location: 0,
	    ctrlKey: 0,
	    shiftKey: 0,
	    altKey: 0,
	    metaKey: 0,
	    repeat: 0,
	    locale: 0,
	    getModifierState: zd,
	    charCode: function (a) {
	      return "keypress" === a.type ? od(a) : 0;
	    },
	    keyCode: function (a) {
	      return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
	    },
	    which: function (a) {
	      return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
	    }
	  }),
	  Rd = rd(Qd),
	  Sd = A$1({}, Ad, {
	    pointerId: 0,
	    width: 0,
	    height: 0,
	    pressure: 0,
	    tangentialPressure: 0,
	    tiltX: 0,
	    tiltY: 0,
	    twist: 0,
	    pointerType: 0,
	    isPrimary: 0
	  }),
	  Td = rd(Sd),
	  Ud = A$1({}, ud, {
	    touches: 0,
	    targetTouches: 0,
	    changedTouches: 0,
	    altKey: 0,
	    metaKey: 0,
	    ctrlKey: 0,
	    shiftKey: 0,
	    getModifierState: zd
	  }),
	  Vd = rd(Ud),
	  Wd = A$1({}, sd, {
	    propertyName: 0,
	    elapsedTime: 0,
	    pseudoElement: 0
	  }),
	  Xd = rd(Wd),
	  Yd = A$1({}, Ad, {
	    deltaX: function (a) {
	      return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
	    },
	    deltaY: function (a) {
	      return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
	    },
	    deltaZ: 0,
	    deltaMode: 0
	  }),
	  Zd = rd(Yd),
	  $d = [9, 13, 27, 32],
	  ae = ia && "CompositionEvent" in window,
	  be = null;
	ia && "documentMode" in document && (be = document.documentMode);
	var ce = ia && "TextEvent" in window && !be,
	  de = ia && (!ae || be && 8 < be && 11 >= be),
	  ee = String.fromCharCode(32),
	  fe = !1;
	function ge(a, b) {
	  switch (a) {
	    case "keyup":
	      return -1 !== $d.indexOf(b.keyCode);
	    case "keydown":
	      return 229 !== b.keyCode;
	    case "keypress":
	    case "mousedown":
	    case "focusout":
	      return !0;
	    default:
	      return !1;
	  }
	}
	function he(a) {
	  a = a.detail;
	  return "object" === typeof a && "data" in a ? a.data : null;
	}
	var ie = !1;
	function je(a, b) {
	  switch (a) {
	    case "compositionend":
	      return he(b);
	    case "keypress":
	      if (32 !== b.which) return null;
	      fe = !0;
	      return ee;
	    case "textInput":
	      return a = b.data, a === ee && fe ? null : a;
	    default:
	      return null;
	  }
	}
	function ke(a, b) {
	  if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = !1, a) : null;
	  switch (a) {
	    case "paste":
	      return null;
	    case "keypress":
	      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
	        if (b.char && 1 < b.char.length) return b.char;
	        if (b.which) return String.fromCharCode(b.which);
	      }
	      return null;
	    case "compositionend":
	      return de && "ko" !== b.locale ? null : b.data;
	    default:
	      return null;
	  }
	}
	var le = {
	  color: !0,
	  date: !0,
	  datetime: !0,
	  "datetime-local": !0,
	  email: !0,
	  month: !0,
	  number: !0,
	  password: !0,
	  range: !0,
	  search: !0,
	  tel: !0,
	  text: !0,
	  time: !0,
	  url: !0,
	  week: !0
	};
	function me(a) {
	  var b = a && a.nodeName && a.nodeName.toLowerCase();
	  return "input" === b ? !!le[a.type] : "textarea" === b ? !0 : !1;
	}
	function ne(a, b, c, d) {
	  Eb(d);
	  b = oe(b, "onChange");
	  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
	    event: c,
	    listeners: b
	  }));
	}
	var pe = null,
	  qe = null;
	function re(a) {
	  se(a, 0);
	}
	function te(a) {
	  var b = ue(a);
	  if (Wa(b)) return a;
	}
	function ve(a, b) {
	  if ("change" === a) return b;
	}
	var we = !1;
	if (ia) {
	  var xe;
	  if (ia) {
	    var ye = ("oninput" in document);
	    if (!ye) {
	      var ze = document.createElement("div");
	      ze.setAttribute("oninput", "return;");
	      ye = "function" === typeof ze.oninput;
	    }
	    xe = ye;
	  } else xe = !1;
	  we = xe && (!document.documentMode || 9 < document.documentMode);
	}
	function Ae() {
	  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
	}
	function Be(a) {
	  if ("value" === a.propertyName && te(qe)) {
	    var b = [];
	    ne(b, qe, a, xb(a));
	    Jb(re, b);
	  }
	}
	function Ce(a, b, c) {
	  "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
	}
	function De(a) {
	  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
	}
	function Ee(a, b) {
	  if ("click" === a) return te(b);
	}
	function Fe(a, b) {
	  if ("input" === a || "change" === a) return te(b);
	}
	function Ge(a, b) {
	  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
	}
	var He = "function" === typeof Object.is ? Object.is : Ge;
	function Ie(a, b) {
	  if (He(a, b)) return !0;
	  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
	  var c = Object.keys(a),
	    d = Object.keys(b);
	  if (c.length !== d.length) return !1;
	  for (d = 0; d < c.length; d++) {
	    var e = c[d];
	    if (!ja.call(b, e) || !He(a[e], b[e])) return !1;
	  }
	  return !0;
	}
	function Je(a) {
	  for (; a && a.firstChild;) a = a.firstChild;
	  return a;
	}
	function Ke(a, b) {
	  var c = Je(a);
	  a = 0;
	  for (var d; c;) {
	    if (3 === c.nodeType) {
	      d = a + c.textContent.length;
	      if (a <= b && d >= b) return {
	        node: c,
	        offset: b - a
	      };
	      a = d;
	    }
	    a: {
	      for (; c;) {
	        if (c.nextSibling) {
	          c = c.nextSibling;
	          break a;
	        }
	        c = c.parentNode;
	      }
	      c = void 0;
	    }
	    c = Je(c);
	  }
	}
	function Le(a, b) {
	  return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
	}
	function Me() {
	  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement;) {
	    try {
	      var c = "string" === typeof b.contentWindow.location.href;
	    } catch (d) {
	      c = !1;
	    }
	    if (c) a = b.contentWindow;else break;
	    b = Xa(a.document);
	  }
	  return b;
	}
	function Ne(a) {
	  var b = a && a.nodeName && a.nodeName.toLowerCase();
	  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
	}
	function Oe(a) {
	  var b = Me(),
	    c = a.focusedElem,
	    d = a.selectionRange;
	  if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
	    if (null !== d && Ne(c)) if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
	      a = a.getSelection();
	      var e = c.textContent.length,
	        f = Math.min(d.start, e);
	      d = void 0 === d.end ? f : Math.min(d.end, e);
	      !a.extend && f > d && (e = d, d = f, f = e);
	      e = Ke(c, f);
	      var g = Ke(c, d);
	      e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
	    }
	    b = [];
	    for (a = c; a = a.parentNode;) 1 === a.nodeType && b.push({
	      element: a,
	      left: a.scrollLeft,
	      top: a.scrollTop
	    });
	    "function" === typeof c.focus && c.focus();
	    for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
	  }
	}
	var Pe = ia && "documentMode" in document && 11 >= document.documentMode,
	  Qe = null,
	  Re = null,
	  Se = null,
	  Te = !1;
	function Ue(a, b, c) {
	  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
	  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = {
	    start: d.selectionStart,
	    end: d.selectionEnd
	  } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
	    anchorNode: d.anchorNode,
	    anchorOffset: d.anchorOffset,
	    focusNode: d.focusNode,
	    focusOffset: d.focusOffset
	  }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({
	    event: b,
	    listeners: d
	  }), b.target = Qe)));
	}
	function Ve(a, b) {
	  var c = {};
	  c[a.toLowerCase()] = b.toLowerCase();
	  c["Webkit" + a] = "webkit" + b;
	  c["Moz" + a] = "moz" + b;
	  return c;
	}
	var We = {
	    animationend: Ve("Animation", "AnimationEnd"),
	    animationiteration: Ve("Animation", "AnimationIteration"),
	    animationstart: Ve("Animation", "AnimationStart"),
	    transitionend: Ve("Transition", "TransitionEnd")
	  },
	  Xe = {},
	  Ye = {};
	ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
	function Ze(a) {
	  if (Xe[a]) return Xe[a];
	  if (!We[a]) return a;
	  var b = We[a],
	    c;
	  for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
	  return a;
	}
	var $e = Ze("animationend"),
	  af = Ze("animationiteration"),
	  bf = Ze("animationstart"),
	  cf = Ze("transitionend"),
	  df = new Map(),
	  ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	function ff(a, b) {
	  df.set(a, b);
	  fa(b, [a]);
	}
	for (var gf = 0; gf < ef.length; gf++) {
	  var hf = ef[gf],
	    jf = hf.toLowerCase(),
	    kf = hf[0].toUpperCase() + hf.slice(1);
	  ff(jf, "on" + kf);
	}
	ff($e, "onAnimationEnd");
	ff(af, "onAnimationIteration");
	ff(bf, "onAnimationStart");
	ff("dblclick", "onDoubleClick");
	ff("focusin", "onFocus");
	ff("focusout", "onBlur");
	ff(cf, "onTransitionEnd");
	ha("onMouseEnter", ["mouseout", "mouseover"]);
	ha("onMouseLeave", ["mouseout", "mouseover"]);
	ha("onPointerEnter", ["pointerout", "pointerover"]);
	ha("onPointerLeave", ["pointerout", "pointerover"]);
	fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
	fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
	fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
	fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
	fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
	fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
	  mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
	function nf(a, b, c) {
	  var d = a.type || "unknown-event";
	  a.currentTarget = c;
	  Ub(d, b, void 0, a);
	  a.currentTarget = null;
	}
	function se(a, b) {
	  b = 0 !== (b & 4);
	  for (var c = 0; c < a.length; c++) {
	    var d = a[c],
	      e = d.event;
	    d = d.listeners;
	    a: {
	      var f = void 0;
	      if (b) for (var g = d.length - 1; 0 <= g; g--) {
	        var h = d[g],
	          k = h.instance,
	          l = h.currentTarget;
	        h = h.listener;
	        if (k !== f && e.isPropagationStopped()) break a;
	        nf(e, h, l);
	        f = k;
	      } else for (g = 0; g < d.length; g++) {
	        h = d[g];
	        k = h.instance;
	        l = h.currentTarget;
	        h = h.listener;
	        if (k !== f && e.isPropagationStopped()) break a;
	        nf(e, h, l);
	        f = k;
	      }
	    }
	  }
	  if (Qb) throw a = Rb, Qb = !1, Rb = null, a;
	}
	function D(a, b) {
	  var c = b[of];
	  void 0 === c && (c = b[of] = new Set());
	  var d = a + "__bubble";
	  c.has(d) || (pf(b, a, 2, !1), c.add(d));
	}
	function qf(a, b, c) {
	  var d = 0;
	  b && (d |= 4);
	  pf(c, a, d, b);
	}
	var rf = "_reactListening" + Math.random().toString(36).slice(2);
	function sf(a) {
	  if (!a[rf]) {
	    a[rf] = !0;
	    da.forEach(function (b) {
	      "selectionchange" !== b && (mf.has(b) || qf(b, !1, a), qf(b, !0, a));
	    });
	    var b = 9 === a.nodeType ? a : a.ownerDocument;
	    null === b || b[rf] || (b[rf] = !0, qf("selectionchange", !1, b));
	  }
	}
	function pf(a, b, c, d) {
	  switch (jd(b)) {
	    case 1:
	      var e = ed;
	      break;
	    case 4:
	      e = gd;
	      break;
	    default:
	      e = fd;
	  }
	  c = e.bind(null, b, c, a);
	  e = void 0;
	  !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
	  d ? void 0 !== e ? a.addEventListener(b, c, {
	    capture: !0,
	    passive: e
	  }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
	    passive: e
	  }) : a.addEventListener(b, c, !1);
	}
	function hd(a, b, c, d, e) {
	  var f = d;
	  if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (;;) {
	    if (null === d) return;
	    var g = d.tag;
	    if (3 === g || 4 === g) {
	      var h = d.stateNode.containerInfo;
	      if (h === e || 8 === h.nodeType && h.parentNode === e) break;
	      if (4 === g) for (g = d.return; null !== g;) {
	        var k = g.tag;
	        if (3 === k || 4 === k) if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
	        g = g.return;
	      }
	      for (; null !== h;) {
	        g = Wc(h);
	        if (null === g) return;
	        k = g.tag;
	        if (5 === k || 6 === k) {
	          d = f = g;
	          continue a;
	        }
	        h = h.parentNode;
	      }
	    }
	    d = d.return;
	  }
	  Jb(function () {
	    var d = f,
	      e = xb(c),
	      g = [];
	    a: {
	      var h = df.get(a);
	      if (void 0 !== h) {
	        var k = td,
	          n = a;
	        switch (a) {
	          case "keypress":
	            if (0 === od(c)) break a;
	          case "keydown":
	          case "keyup":
	            k = Rd;
	            break;
	          case "focusin":
	            n = "focus";
	            k = Fd;
	            break;
	          case "focusout":
	            n = "blur";
	            k = Fd;
	            break;
	          case "beforeblur":
	          case "afterblur":
	            k = Fd;
	            break;
	          case "click":
	            if (2 === c.button) break a;
	          case "auxclick":
	          case "dblclick":
	          case "mousedown":
	          case "mousemove":
	          case "mouseup":
	          case "mouseout":
	          case "mouseover":
	          case "contextmenu":
	            k = Bd;
	            break;
	          case "drag":
	          case "dragend":
	          case "dragenter":
	          case "dragexit":
	          case "dragleave":
	          case "dragover":
	          case "dragstart":
	          case "drop":
	            k = Dd;
	            break;
	          case "touchcancel":
	          case "touchend":
	          case "touchmove":
	          case "touchstart":
	            k = Vd;
	            break;
	          case $e:
	          case af:
	          case bf:
	            k = Hd;
	            break;
	          case cf:
	            k = Xd;
	            break;
	          case "scroll":
	            k = vd;
	            break;
	          case "wheel":
	            k = Zd;
	            break;
	          case "copy":
	          case "cut":
	          case "paste":
	            k = Jd;
	            break;
	          case "gotpointercapture":
	          case "lostpointercapture":
	          case "pointercancel":
	          case "pointerdown":
	          case "pointermove":
	          case "pointerout":
	          case "pointerover":
	          case "pointerup":
	            k = Td;
	        }
	        var t = 0 !== (b & 4),
	          J = !t && "scroll" === a,
	          x = t ? null !== h ? h + "Capture" : null : h;
	        t = [];
	        for (var w = d, u; null !== w;) {
	          u = w;
	          var F = u.stateNode;
	          5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
	          if (J) break;
	          w = w.return;
	        }
	        0 < t.length && (h = new k(h, n, null, c, e), g.push({
	          event: h,
	          listeners: t
	        }));
	      }
	    }
	    if (0 === (b & 7)) {
	      a: {
	        h = "mouseover" === a || "pointerover" === a;
	        k = "mouseout" === a || "pointerout" === a;
	        if (h && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
	        if (k || h) {
	          h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
	          if (k) {
	            if (n = c.relatedTarget || c.toElement, k = d, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
	          } else k = null, n = d;
	          if (k !== n) {
	            t = Bd;
	            F = "onMouseLeave";
	            x = "onMouseEnter";
	            w = "mouse";
	            if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
	            J = null == k ? h : ue(k);
	            u = null == n ? h : ue(n);
	            h = new t(F, w + "leave", k, c, e);
	            h.target = J;
	            h.relatedTarget = u;
	            F = null;
	            Wc(e) === d && (t = new t(x, w + "enter", n, c, e), t.target = u, t.relatedTarget = J, F = t);
	            J = F;
	            if (k && n) b: {
	              t = k;
	              x = n;
	              w = 0;
	              for (u = t; u; u = vf(u)) w++;
	              u = 0;
	              for (F = x; F; F = vf(F)) u++;
	              for (; 0 < w - u;) t = vf(t), w--;
	              for (; 0 < u - w;) x = vf(x), u--;
	              for (; w--;) {
	                if (t === x || null !== x && t === x.alternate) break b;
	                t = vf(t);
	                x = vf(x);
	              }
	              t = null;
	            } else t = null;
	            null !== k && wf(g, h, k, t, !1);
	            null !== n && null !== J && wf(g, J, n, t, !0);
	          }
	        }
	      }
	      a: {
	        h = d ? ue(d) : window;
	        k = h.nodeName && h.nodeName.toLowerCase();
	        if ("select" === k || "input" === k && "file" === h.type) var na = ve;else if (me(h)) {
	          if (we) na = Fe;else {
	            na = De;
	            var xa = Ce;
	          }
	        } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (na = Ee);
	        if (na && (na = na(a, d))) {
	          ne(g, na, c, e);
	          break a;
	        }
	        xa && xa(a, h, d);
	        "focusout" === a && (xa = h._wrapperState) && xa.controlled && "number" === h.type && cb(h, "number", h.value);
	      }
	      xa = d ? ue(d) : window;
	      switch (a) {
	        case "focusin":
	          if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d, Se = null;
	          break;
	        case "focusout":
	          Se = Re = Qe = null;
	          break;
	        case "mousedown":
	          Te = !0;
	          break;
	        case "contextmenu":
	        case "mouseup":
	        case "dragend":
	          Te = !1;
	          Ue(g, c, e);
	          break;
	        case "selectionchange":
	          if (Pe) break;
	        case "keydown":
	        case "keyup":
	          Ue(g, c, e);
	      }
	      var $a;
	      if (ae) b: {
	        switch (a) {
	          case "compositionstart":
	            var ba = "onCompositionStart";
	            break b;
	          case "compositionend":
	            ba = "onCompositionEnd";
	            break b;
	          case "compositionupdate":
	            ba = "onCompositionUpdate";
	            break b;
	        }
	        ba = void 0;
	      } else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
	      ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e, ld = "value" in kd ? kd.value : kd.textContent, ie = !0)), xa = oe(d, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e), g.push({
	        event: ba,
	        listeners: xa
	      }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
	      if ($a = ce ? je(a, c) : ke(a, c)) d = oe(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
	        event: e,
	        listeners: d
	      }), e.data = $a);
	    }
	    se(g, b);
	  });
	}
	function tf(a, b, c) {
	  return {
	    instance: a,
	    listener: b,
	    currentTarget: c
	  };
	}
	function oe(a, b) {
	  for (var c = b + "Capture", d = []; null !== a;) {
	    var e = a,
	      f = e.stateNode;
	    5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
	    a = a.return;
	  }
	  return d;
	}
	function vf(a) {
	  if (null === a) return null;
	  do a = a.return; while (a && 5 !== a.tag);
	  return a ? a : null;
	}
	function wf(a, b, c, d, e) {
	  for (var f = b._reactName, g = []; null !== c && c !== d;) {
	    var h = c,
	      k = h.alternate,
	      l = h.stateNode;
	    if (null !== k && k === d) break;
	    5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
	    c = c.return;
	  }
	  0 !== g.length && a.push({
	    event: b,
	    listeners: g
	  });
	}
	var xf = /\r\n?/g,
	  yf = /\u0000|\uFFFD/g;
	function zf(a) {
	  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
	}
	function Af(a, b, c) {
	  b = zf(b);
	  if (zf(a) !== b && c) throw Error(p$4(425));
	}
	function Bf() {}
	var Cf = null,
	  Df = null;
	function Ef(a, b) {
	  return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
	}
	var Ff = "function" === typeof setTimeout ? setTimeout : void 0,
	  Gf = "function" === typeof clearTimeout ? clearTimeout : void 0,
	  Hf = "function" === typeof Promise ? Promise : void 0,
	  Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function (a) {
	    return Hf.resolve(null).then(a).catch(If);
	  } : Ff;
	function If(a) {
	  setTimeout(function () {
	    throw a;
	  });
	}
	function Kf(a, b) {
	  var c = b,
	    d = 0;
	  do {
	    var e = c.nextSibling;
	    a.removeChild(c);
	    if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
	      if (0 === d) {
	        a.removeChild(e);
	        bd(b);
	        return;
	      }
	      d--;
	    } else "$" !== c && "$?" !== c && "$!" !== c || d++;
	    c = e;
	  } while (c);
	  bd(b);
	}
	function Lf(a) {
	  for (; null != a; a = a.nextSibling) {
	    var b = a.nodeType;
	    if (1 === b || 3 === b) break;
	    if (8 === b) {
	      b = a.data;
	      if ("$" === b || "$!" === b || "$?" === b) break;
	      if ("/$" === b) return null;
	    }
	  }
	  return a;
	}
	function Mf(a) {
	  a = a.previousSibling;
	  for (var b = 0; a;) {
	    if (8 === a.nodeType) {
	      var c = a.data;
	      if ("$" === c || "$!" === c || "$?" === c) {
	        if (0 === b) return a;
	        b--;
	      } else "/$" === c && b++;
	    }
	    a = a.previousSibling;
	  }
	  return null;
	}
	var Nf = Math.random().toString(36).slice(2),
	  Of = "__reactFiber$" + Nf,
	  Pf = "__reactProps$" + Nf,
	  uf = "__reactContainer$" + Nf,
	  of = "__reactEvents$" + Nf,
	  Qf = "__reactListeners$" + Nf,
	  Rf = "__reactHandles$" + Nf;
	function Wc(a) {
	  var b = a[Of];
	  if (b) return b;
	  for (var c = a.parentNode; c;) {
	    if (b = c[uf] || c[Of]) {
	      c = b.alternate;
	      if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a;) {
	        if (c = a[Of]) return c;
	        a = Mf(a);
	      }
	      return b;
	    }
	    a = c;
	    c = a.parentNode;
	  }
	  return null;
	}
	function Cb(a) {
	  a = a[Of] || a[uf];
	  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
	}
	function ue(a) {
	  if (5 === a.tag || 6 === a.tag) return a.stateNode;
	  throw Error(p$4(33));
	}
	function Db(a) {
	  return a[Pf] || null;
	}
	var Sf = [],
	  Tf = -1;
	function Uf(a) {
	  return {
	    current: a
	  };
	}
	function E(a) {
	  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
	}
	function G(a, b) {
	  Tf++;
	  Sf[Tf] = a.current;
	  a.current = b;
	}
	var Vf = {},
	  H = Uf(Vf),
	  Wf = Uf(!1),
	  Xf = Vf;
	function Yf(a, b) {
	  var c = a.type.contextTypes;
	  if (!c) return Vf;
	  var d = a.stateNode;
	  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
	  var e = {},
	    f;
	  for (f in c) e[f] = b[f];
	  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
	  return e;
	}
	function Zf(a) {
	  a = a.childContextTypes;
	  return null !== a && void 0 !== a;
	}
	function $f() {
	  E(Wf);
	  E(H);
	}
	function ag(a, b, c) {
	  if (H.current !== Vf) throw Error(p$4(168));
	  G(H, b);
	  G(Wf, c);
	}
	function bg(a, b, c) {
	  var d = a.stateNode;
	  b = b.childContextTypes;
	  if ("function" !== typeof d.getChildContext) return c;
	  d = d.getChildContext();
	  for (var e in d) if (!(e in b)) throw Error(p$4(108, Ra(a) || "Unknown", e));
	  return A$1({}, c, d);
	}
	function cg(a) {
	  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
	  Xf = H.current;
	  G(H, a);
	  G(Wf, Wf.current);
	  return !0;
	}
	function dg(a, b, c) {
	  var d = a.stateNode;
	  if (!d) throw Error(p$4(169));
	  c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
	  G(Wf, c);
	}
	var eg = null,
	  fg = !1,
	  gg = !1;
	function hg(a) {
	  null === eg ? eg = [a] : eg.push(a);
	}
	function ig(a) {
	  fg = !0;
	  hg(a);
	}
	function jg() {
	  if (!gg && null !== eg) {
	    gg = !0;
	    var a = 0,
	      b = C;
	    try {
	      var c = eg;
	      for (C = 1; a < c.length; a++) {
	        var d = c[a];
	        do d = d(!0); while (null !== d);
	      }
	      eg = null;
	      fg = !1;
	    } catch (e) {
	      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
	    } finally {
	      C = b, gg = !1;
	    }
	  }
	  return null;
	}
	var kg = [],
	  lg = 0,
	  mg = null,
	  ng = 0,
	  og = [],
	  pg = 0,
	  qg = null,
	  rg = 1,
	  sg = "";
	function tg(a, b) {
	  kg[lg++] = ng;
	  kg[lg++] = mg;
	  mg = a;
	  ng = b;
	}
	function ug(a, b, c) {
	  og[pg++] = rg;
	  og[pg++] = sg;
	  og[pg++] = qg;
	  qg = a;
	  var d = rg;
	  a = sg;
	  var e = 32 - oc(d) - 1;
	  d &= ~(1 << e);
	  c += 1;
	  var f = 32 - oc(b) + e;
	  if (30 < f) {
	    var g = e - e % 5;
	    f = (d & (1 << g) - 1).toString(32);
	    d >>= g;
	    e -= g;
	    rg = 1 << 32 - oc(b) + e | c << e | d;
	    sg = f + a;
	  } else rg = 1 << f | c << e | d, sg = a;
	}
	function vg(a) {
	  null !== a.return && (tg(a, 1), ug(a, 1, 0));
	}
	function wg(a) {
	  for (; a === mg;) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
	  for (; a === qg;) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
	}
	var xg = null,
	  yg = null,
	  I = !1,
	  zg = null;
	function Ag(a, b) {
	  var c = Bg(5, null, null, 0);
	  c.elementType = "DELETED";
	  c.stateNode = b;
	  c.return = a;
	  b = a.deletions;
	  null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
	}
	function Cg(a, b) {
	  switch (a.tag) {
	    case 5:
	      var c = a.type;
	      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
	      return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), !0) : !1;
	    case 6:
	      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, !0) : !1;
	    case 13:
	      return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? {
	        id: rg,
	        overflow: sg
	      } : null, a.memoizedState = {
	        dehydrated: b,
	        treeContext: c,
	        retryLane: 1073741824
	      }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, !0) : !1;
	    default:
	      return !1;
	  }
	}
	function Dg(a) {
	  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
	}
	function Eg(a) {
	  if (I) {
	    var b = yg;
	    if (b) {
	      var c = b;
	      if (!Cg(a, b)) {
	        if (Dg(a)) throw Error(p$4(418));
	        b = Lf(c.nextSibling);
	        var d = xg;
	        b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = !1, xg = a);
	      }
	    } else {
	      if (Dg(a)) throw Error(p$4(418));
	      a.flags = a.flags & -4097 | 2;
	      I = !1;
	      xg = a;
	    }
	  }
	}
	function Fg(a) {
	  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
	  xg = a;
	}
	function Gg(a) {
	  if (a !== xg) return !1;
	  if (!I) return Fg(a), I = !0, !1;
	  var b;
	  (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
	  if (b && (b = yg)) {
	    if (Dg(a)) throw Hg(), Error(p$4(418));
	    for (; b;) Ag(a, b), b = Lf(b.nextSibling);
	  }
	  Fg(a);
	  if (13 === a.tag) {
	    a = a.memoizedState;
	    a = null !== a ? a.dehydrated : null;
	    if (!a) throw Error(p$4(317));
	    a: {
	      a = a.nextSibling;
	      for (b = 0; a;) {
	        if (8 === a.nodeType) {
	          var c = a.data;
	          if ("/$" === c) {
	            if (0 === b) {
	              yg = Lf(a.nextSibling);
	              break a;
	            }
	            b--;
	          } else "$" !== c && "$!" !== c && "$?" !== c || b++;
	        }
	        a = a.nextSibling;
	      }
	      yg = null;
	    }
	  } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
	  return !0;
	}
	function Hg() {
	  for (var a = yg; a;) a = Lf(a.nextSibling);
	}
	function Ig() {
	  yg = xg = null;
	  I = !1;
	}
	function Jg(a) {
	  null === zg ? zg = [a] : zg.push(a);
	}
	var Kg = ua.ReactCurrentBatchConfig;
	function Lg(a, b) {
	  if (a && a.defaultProps) {
	    b = A$1({}, b);
	    a = a.defaultProps;
	    for (var c in a) void 0 === b[c] && (b[c] = a[c]);
	    return b;
	  }
	  return b;
	}
	var Mg = Uf(null),
	  Ng = null,
	  Og = null,
	  Pg = null;
	function Qg() {
	  Pg = Og = Ng = null;
	}
	function Rg(a) {
	  var b = Mg.current;
	  E(Mg);
	  a._currentValue = b;
	}
	function Sg(a, b, c) {
	  for (; null !== a;) {
	    var d = a.alternate;
	    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
	    if (a === c) break;
	    a = a.return;
	  }
	}
	function Tg(a, b) {
	  Ng = a;
	  Pg = Og = null;
	  a = a.dependencies;
	  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (Ug = !0), a.firstContext = null);
	}
	function Vg(a) {
	  var b = a._currentValue;
	  if (Pg !== a) if (a = {
	    context: a,
	    memoizedValue: b,
	    next: null
	  }, null === Og) {
	    if (null === Ng) throw Error(p$4(308));
	    Og = a;
	    Ng.dependencies = {
	      lanes: 0,
	      firstContext: a
	    };
	  } else Og = Og.next = a;
	  return b;
	}
	var Wg = null;
	function Xg(a) {
	  null === Wg ? Wg = [a] : Wg.push(a);
	}
	function Yg(a, b, c, d) {
	  var e = b.interleaved;
	  null === e ? (c.next = c, Xg(b)) : (c.next = e.next, e.next = c);
	  b.interleaved = c;
	  return Zg(a, d);
	}
	function Zg(a, b) {
	  a.lanes |= b;
	  var c = a.alternate;
	  null !== c && (c.lanes |= b);
	  c = a;
	  for (a = a.return; null !== a;) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
	  return 3 === c.tag ? c.stateNode : null;
	}
	var $g = !1;
	function ah(a) {
	  a.updateQueue = {
	    baseState: a.memoizedState,
	    firstBaseUpdate: null,
	    lastBaseUpdate: null,
	    shared: {
	      pending: null,
	      interleaved: null,
	      lanes: 0
	    },
	    effects: null
	  };
	}
	function bh(a, b) {
	  a = a.updateQueue;
	  b.updateQueue === a && (b.updateQueue = {
	    baseState: a.baseState,
	    firstBaseUpdate: a.firstBaseUpdate,
	    lastBaseUpdate: a.lastBaseUpdate,
	    shared: a.shared,
	    effects: a.effects
	  });
	}
	function ch(a, b) {
	  return {
	    eventTime: a,
	    lane: b,
	    tag: 0,
	    payload: null,
	    callback: null,
	    next: null
	  };
	}
	function dh(a, b, c) {
	  var d = a.updateQueue;
	  if (null === d) return null;
	  d = d.shared;
	  if (0 !== (K & 2)) {
	    var e = d.pending;
	    null === e ? b.next = b : (b.next = e.next, e.next = b);
	    d.pending = b;
	    return Zg(a, c);
	  }
	  e = d.interleaved;
	  null === e ? (b.next = b, Xg(d)) : (b.next = e.next, e.next = b);
	  d.interleaved = b;
	  return Zg(a, c);
	}
	function eh(a, b, c) {
	  b = b.updateQueue;
	  if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
	    var d = b.lanes;
	    d &= a.pendingLanes;
	    c |= d;
	    b.lanes = c;
	    Cc(a, c);
	  }
	}
	function fh(a, b) {
	  var c = a.updateQueue,
	    d = a.alternate;
	  if (null !== d && (d = d.updateQueue, c === d)) {
	    var e = null,
	      f = null;
	    c = c.firstBaseUpdate;
	    if (null !== c) {
	      do {
	        var g = {
	          eventTime: c.eventTime,
	          lane: c.lane,
	          tag: c.tag,
	          payload: c.payload,
	          callback: c.callback,
	          next: null
	        };
	        null === f ? e = f = g : f = f.next = g;
	        c = c.next;
	      } while (null !== c);
	      null === f ? e = f = b : f = f.next = b;
	    } else e = f = b;
	    c = {
	      baseState: d.baseState,
	      firstBaseUpdate: e,
	      lastBaseUpdate: f,
	      shared: d.shared,
	      effects: d.effects
	    };
	    a.updateQueue = c;
	    return;
	  }
	  a = c.lastBaseUpdate;
	  null === a ? c.firstBaseUpdate = b : a.next = b;
	  c.lastBaseUpdate = b;
	}
	function gh(a, b, c, d) {
	  var e = a.updateQueue;
	  $g = !1;
	  var f = e.firstBaseUpdate,
	    g = e.lastBaseUpdate,
	    h = e.shared.pending;
	  if (null !== h) {
	    e.shared.pending = null;
	    var k = h,
	      l = k.next;
	    k.next = null;
	    null === g ? f = l : g.next = l;
	    g = k;
	    var m = a.alternate;
	    null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
	  }
	  if (null !== f) {
	    var q = e.baseState;
	    g = 0;
	    m = l = k = null;
	    h = f;
	    do {
	      var r = h.lane,
	        y = h.eventTime;
	      if ((d & r) === r) {
	        null !== m && (m = m.next = {
	          eventTime: y,
	          lane: 0,
	          tag: h.tag,
	          payload: h.payload,
	          callback: h.callback,
	          next: null
	        });
	        a: {
	          var n = a,
	            t = h;
	          r = b;
	          y = c;
	          switch (t.tag) {
	            case 1:
	              n = t.payload;
	              if ("function" === typeof n) {
	                q = n.call(y, q, r);
	                break a;
	              }
	              q = n;
	              break a;
	            case 3:
	              n.flags = n.flags & -65537 | 128;
	            case 0:
	              n = t.payload;
	              r = "function" === typeof n ? n.call(y, q, r) : n;
	              if (null === r || void 0 === r) break a;
	              q = A$1({}, q, r);
	              break a;
	            case 2:
	              $g = !0;
	          }
	        }
	        null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
	      } else y = {
	        eventTime: y,
	        lane: r,
	        tag: h.tag,
	        payload: h.payload,
	        callback: h.callback,
	        next: null
	      }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
	      h = h.next;
	      if (null === h) if (h = e.shared.pending, null === h) break;else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
	    } while (1);
	    null === m && (k = q);
	    e.baseState = k;
	    e.firstBaseUpdate = l;
	    e.lastBaseUpdate = m;
	    b = e.shared.interleaved;
	    if (null !== b) {
	      e = b;
	      do g |= e.lane, e = e.next; while (e !== b);
	    } else null === f && (e.shared.lanes = 0);
	    hh |= g;
	    a.lanes = g;
	    a.memoizedState = q;
	  }
	}
	function ih(a, b, c) {
	  a = b.effects;
	  b.effects = null;
	  if (null !== a) for (b = 0; b < a.length; b++) {
	    var d = a[b],
	      e = d.callback;
	    if (null !== e) {
	      d.callback = null;
	      d = c;
	      if ("function" !== typeof e) throw Error(p$4(191, e));
	      e.call(d);
	    }
	  }
	}
	var jh = new aa.Component().refs;
	function kh(a, b, c, d) {
	  b = a.memoizedState;
	  c = c(d, b);
	  c = null === c || void 0 === c ? b : A$1({}, b, c);
	  a.memoizedState = c;
	  0 === a.lanes && (a.updateQueue.baseState = c);
	}
	var nh = {
	  isMounted: function (a) {
	    return (a = a._reactInternals) ? Vb(a) === a : !1;
	  },
	  enqueueSetState: function (a, b, c) {
	    a = a._reactInternals;
	    var d = L(),
	      e = lh(a),
	      f = ch(d, e);
	    f.payload = b;
	    void 0 !== c && null !== c && (f.callback = c);
	    b = dh(a, f, e);
	    null !== b && (mh(b, a, e, d), eh(b, a, e));
	  },
	  enqueueReplaceState: function (a, b, c) {
	    a = a._reactInternals;
	    var d = L(),
	      e = lh(a),
	      f = ch(d, e);
	    f.tag = 1;
	    f.payload = b;
	    void 0 !== c && null !== c && (f.callback = c);
	    b = dh(a, f, e);
	    null !== b && (mh(b, a, e, d), eh(b, a, e));
	  },
	  enqueueForceUpdate: function (a, b) {
	    a = a._reactInternals;
	    var c = L(),
	      d = lh(a),
	      e = ch(c, d);
	    e.tag = 2;
	    void 0 !== b && null !== b && (e.callback = b);
	    b = dh(a, e, d);
	    null !== b && (mh(b, a, d, c), eh(b, a, d));
	  }
	};
	function oh(a, b, c, d, e, f, g) {
	  a = a.stateNode;
	  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : !0;
	}
	function ph(a, b, c) {
	  var d = !1,
	    e = Vf;
	  var f = b.contextType;
	  "object" === typeof f && null !== f ? f = Vg(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
	  b = new b(c, f);
	  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
	  b.updater = nh;
	  a.stateNode = b;
	  b._reactInternals = a;
	  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
	  return b;
	}
	function qh(a, b, c, d) {
	  a = b.state;
	  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
	  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
	  b.state !== a && nh.enqueueReplaceState(b, b.state, null);
	}
	function rh(a, b, c, d) {
	  var e = a.stateNode;
	  e.props = c;
	  e.state = a.memoizedState;
	  e.refs = jh;
	  ah(a);
	  var f = b.contextType;
	  "object" === typeof f && null !== f ? e.context = Vg(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
	  e.state = a.memoizedState;
	  f = b.getDerivedStateFromProps;
	  "function" === typeof f && (kh(a, b, f, c), e.state = a.memoizedState);
	  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a, c, e, d), e.state = a.memoizedState);
	  "function" === typeof e.componentDidMount && (a.flags |= 4194308);
	}
	function sh(a, b, c) {
	  a = c.ref;
	  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
	    if (c._owner) {
	      c = c._owner;
	      if (c) {
	        if (1 !== c.tag) throw Error(p$4(309));
	        var d = c.stateNode;
	      }
	      if (!d) throw Error(p$4(147, a));
	      var e = d,
	        f = "" + a;
	      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
	      b = function (a) {
	        var b = e.refs;
	        b === jh && (b = e.refs = {});
	        null === a ? delete b[f] : b[f] = a;
	      };
	      b._stringRef = f;
	      return b;
	    }
	    if ("string" !== typeof a) throw Error(p$4(284));
	    if (!c._owner) throw Error(p$4(290, a));
	  }
	  return a;
	}
	function th(a, b) {
	  a = Object.prototype.toString.call(b);
	  throw Error(p$4(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
	}
	function uh(a) {
	  var b = a._init;
	  return b(a._payload);
	}
	function vh(a) {
	  function b(b, c) {
	    if (a) {
	      var d = b.deletions;
	      null === d ? (b.deletions = [c], b.flags |= 16) : d.push(c);
	    }
	  }
	  function c(c, d) {
	    if (!a) return null;
	    for (; null !== d;) b(c, d), d = d.sibling;
	    return null;
	  }
	  function d(a, b) {
	    for (a = new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
	    return a;
	  }
	  function e(a, b) {
	    a = wh(a, b);
	    a.index = 0;
	    a.sibling = null;
	    return a;
	  }
	  function f(b, c, d) {
	    b.index = d;
	    if (!a) return b.flags |= 1048576, c;
	    d = b.alternate;
	    if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
	    b.flags |= 2;
	    return c;
	  }
	  function g(b) {
	    a && null === b.alternate && (b.flags |= 2);
	    return b;
	  }
	  function h(a, b, c, d) {
	    if (null === b || 6 !== b.tag) return b = xh(c, a.mode, d), b.return = a, b;
	    b = e(b, c);
	    b.return = a;
	    return b;
	  }
	  function k(a, b, c, d) {
	    var f = c.type;
	    if (f === ya) return m(a, b, c.props.children, d, c.key);
	    if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === Ha && uh(f) === b.type)) return d = e(b, c.props), d.ref = sh(a, b, c), d.return = a, d;
	    d = yh(c.type, c.key, c.props, null, a.mode, d);
	    d.ref = sh(a, b, c);
	    d.return = a;
	    return d;
	  }
	  function l(a, b, c, d) {
	    if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = zh(c, a.mode, d), b.return = a, b;
	    b = e(b, c.children || []);
	    b.return = a;
	    return b;
	  }
	  function m(a, b, c, d, f) {
	    if (null === b || 7 !== b.tag) return b = Ah(c, a.mode, d, f), b.return = a, b;
	    b = e(b, c);
	    b.return = a;
	    return b;
	  }
	  function q(a, b, c) {
	    if ("string" === typeof b && "" !== b || "number" === typeof b) return b = xh("" + b, a.mode, c), b.return = a, b;
	    if ("object" === typeof b && null !== b) {
	      switch (b.$$typeof) {
	        case va:
	          return c = yh(b.type, b.key, b.props, null, a.mode, c), c.ref = sh(a, null, b), c.return = a, c;
	        case wa:
	          return b = zh(b, a.mode, c), b.return = a, b;
	        case Ha:
	          var d = b._init;
	          return q(a, d(b._payload), c);
	      }
	      if (eb(b) || Ka(b)) return b = Ah(b, a.mode, c, null), b.return = a, b;
	      th(a, b);
	    }
	    return null;
	  }
	  function r(a, b, c, d) {
	    var e = null !== b ? b.key : null;
	    if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
	    if ("object" === typeof c && null !== c) {
	      switch (c.$$typeof) {
	        case va:
	          return c.key === e ? k(a, b, c, d) : null;
	        case wa:
	          return c.key === e ? l(a, b, c, d) : null;
	        case Ha:
	          return e = c._init, r(a, b, e(c._payload), d);
	      }
	      if (eb(c) || Ka(c)) return null !== e ? null : m(a, b, c, d, null);
	      th(a, c);
	    }
	    return null;
	  }
	  function y(a, b, c, d, e) {
	    if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
	    if ("object" === typeof d && null !== d) {
	      switch (d.$$typeof) {
	        case va:
	          return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);
	        case wa:
	          return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
	        case Ha:
	          var f = d._init;
	          return y(a, b, c, f(d._payload), e);
	      }
	      if (eb(d) || Ka(d)) return a = a.get(c) || null, m(b, a, d, e, null);
	      th(b, d);
	    }
	    return null;
	  }
	  function n(e, g, h, k) {
	    for (var l = null, m = null, u = g, w = g = 0, x = null; null !== u && w < h.length; w++) {
	      u.index > w ? (x = u, u = null) : x = u.sibling;
	      var n = r(e, u, h[w], k);
	      if (null === n) {
	        null === u && (u = x);
	        break;
	      }
	      a && u && null === n.alternate && b(e, u);
	      g = f(n, g, w);
	      null === m ? l = n : m.sibling = n;
	      m = n;
	      u = x;
	    }
	    if (w === h.length) return c(e, u), I && tg(e, w), l;
	    if (null === u) {
	      for (; w < h.length; w++) u = q(e, h[w], k), null !== u && (g = f(u, g, w), null === m ? l = u : m.sibling = u, m = u);
	      I && tg(e, w);
	      return l;
	    }
	    for (u = d(e, u); w < h.length; w++) x = y(u, e, w, h[w], k), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g = f(x, g, w), null === m ? l = x : m.sibling = x, m = x);
	    a && u.forEach(function (a) {
	      return b(e, a);
	    });
	    I && tg(e, w);
	    return l;
	  }
	  function t(e, g, h, k) {
	    var l = Ka(h);
	    if ("function" !== typeof l) throw Error(p$4(150));
	    h = l.call(h);
	    if (null == h) throw Error(p$4(151));
	    for (var u = l = null, m = g, w = g = 0, x = null, n = h.next(); null !== m && !n.done; w++, n = h.next()) {
	      m.index > w ? (x = m, m = null) : x = m.sibling;
	      var t = r(e, m, n.value, k);
	      if (null === t) {
	        null === m && (m = x);
	        break;
	      }
	      a && m && null === t.alternate && b(e, m);
	      g = f(t, g, w);
	      null === u ? l = t : u.sibling = t;
	      u = t;
	      m = x;
	    }
	    if (n.done) return c(e, m), I && tg(e, w), l;
	    if (null === m) {
	      for (; !n.done; w++, n = h.next()) n = q(e, n.value, k), null !== n && (g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
	      I && tg(e, w);
	      return l;
	    }
	    for (m = d(e, m); !n.done; w++, n = h.next()) n = y(m, e, w, n.value, k), null !== n && (a && null !== n.alternate && m.delete(null === n.key ? w : n.key), g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
	    a && m.forEach(function (a) {
	      return b(e, a);
	    });
	    I && tg(e, w);
	    return l;
	  }
	  function J(a, d, f, h) {
	    "object" === typeof f && null !== f && f.type === ya && null === f.key && (f = f.props.children);
	    if ("object" === typeof f && null !== f) {
	      switch (f.$$typeof) {
	        case va:
	          a: {
	            for (var k = f.key, l = d; null !== l;) {
	              if (l.key === k) {
	                k = f.type;
	                if (k === ya) {
	                  if (7 === l.tag) {
	                    c(a, l.sibling);
	                    d = e(l, f.props.children);
	                    d.return = a;
	                    a = d;
	                    break a;
	                  }
	                } else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === Ha && uh(k) === l.type) {
	                  c(a, l.sibling);
	                  d = e(l, f.props);
	                  d.ref = sh(a, l, f);
	                  d.return = a;
	                  a = d;
	                  break a;
	                }
	                c(a, l);
	                break;
	              } else b(a, l);
	              l = l.sibling;
	            }
	            f.type === ya ? (d = Ah(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = yh(f.type, f.key, f.props, null, a.mode, h), h.ref = sh(a, d, f), h.return = a, a = h);
	          }
	          return g(a);
	        case wa:
	          a: {
	            for (l = f.key; null !== d;) {
	              if (d.key === l) {
	                if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
	                  c(a, d.sibling);
	                  d = e(d, f.children || []);
	                  d.return = a;
	                  a = d;
	                  break a;
	                } else {
	                  c(a, d);
	                  break;
	                }
	              } else b(a, d);
	              d = d.sibling;
	            }
	            d = zh(f, a.mode, h);
	            d.return = a;
	            a = d;
	          }
	          return g(a);
	        case Ha:
	          return l = f._init, J(a, d, l(f._payload), h);
	      }
	      if (eb(f)) return n(a, d, f, h);
	      if (Ka(f)) return t(a, d, f, h);
	      th(a, f);
	    }
	    return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = xh(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
	  }
	  return J;
	}
	var Bh = vh(!0),
	  Ch = vh(!1),
	  Dh = {},
	  Eh = Uf(Dh),
	  Fh = Uf(Dh),
	  Gh = Uf(Dh);
	function Hh(a) {
	  if (a === Dh) throw Error(p$4(174));
	  return a;
	}
	function Ih(a, b) {
	  G(Gh, b);
	  G(Fh, a);
	  G(Eh, Dh);
	  a = b.nodeType;
	  switch (a) {
	    case 9:
	    case 11:
	      b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
	      break;
	    default:
	      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
	  }
	  E(Eh);
	  G(Eh, b);
	}
	function Jh() {
	  E(Eh);
	  E(Fh);
	  E(Gh);
	}
	function Kh(a) {
	  Hh(Gh.current);
	  var b = Hh(Eh.current);
	  var c = lb(b, a.type);
	  b !== c && (G(Fh, a), G(Eh, c));
	}
	function Lh(a) {
	  Fh.current === a && (E(Eh), E(Fh));
	}
	var M = Uf(0);
	function Mh(a) {
	  for (var b = a; null !== b;) {
	    if (13 === b.tag) {
	      var c = b.memoizedState;
	      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
	    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
	      if (0 !== (b.flags & 128)) return b;
	    } else if (null !== b.child) {
	      b.child.return = b;
	      b = b.child;
	      continue;
	    }
	    if (b === a) break;
	    for (; null === b.sibling;) {
	      if (null === b.return || b.return === a) return null;
	      b = b.return;
	    }
	    b.sibling.return = b.return;
	    b = b.sibling;
	  }
	  return null;
	}
	var Nh = [];
	function Oh() {
	  for (var a = 0; a < Nh.length; a++) Nh[a]._workInProgressVersionPrimary = null;
	  Nh.length = 0;
	}
	var Ph = ua.ReactCurrentDispatcher,
	  Qh = ua.ReactCurrentBatchConfig,
	  Rh = 0,
	  N = null,
	  O = null,
	  P = null,
	  Sh = !1,
	  Th = !1,
	  Uh = 0,
	  Vh = 0;
	function Q() {
	  throw Error(p$4(321));
	}
	function Wh(a, b) {
	  if (null === b) return !1;
	  for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return !1;
	  return !0;
	}
	function Xh(a, b, c, d, e, f) {
	  Rh = f;
	  N = b;
	  b.memoizedState = null;
	  b.updateQueue = null;
	  b.lanes = 0;
	  Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
	  a = c(d, e);
	  if (Th) {
	    f = 0;
	    do {
	      Th = !1;
	      Uh = 0;
	      if (25 <= f) throw Error(p$4(301));
	      f += 1;
	      P = O = null;
	      b.updateQueue = null;
	      Ph.current = $h;
	      a = c(d, e);
	    } while (Th);
	  }
	  Ph.current = ai;
	  b = null !== O && null !== O.next;
	  Rh = 0;
	  P = O = N = null;
	  Sh = !1;
	  if (b) throw Error(p$4(300));
	  return a;
	}
	function bi() {
	  var a = 0 !== Uh;
	  Uh = 0;
	  return a;
	}
	function ci() {
	  var a = {
	    memoizedState: null,
	    baseState: null,
	    baseQueue: null,
	    queue: null,
	    next: null
	  };
	  null === P ? N.memoizedState = P = a : P = P.next = a;
	  return P;
	}
	function di() {
	  if (null === O) {
	    var a = N.alternate;
	    a = null !== a ? a.memoizedState : null;
	  } else a = O.next;
	  var b = null === P ? N.memoizedState : P.next;
	  if (null !== b) P = b, O = a;else {
	    if (null === a) throw Error(p$4(310));
	    O = a;
	    a = {
	      memoizedState: O.memoizedState,
	      baseState: O.baseState,
	      baseQueue: O.baseQueue,
	      queue: O.queue,
	      next: null
	    };
	    null === P ? N.memoizedState = P = a : P = P.next = a;
	  }
	  return P;
	}
	function ei(a, b) {
	  return "function" === typeof b ? b(a) : b;
	}
	function fi(a) {
	  var b = di(),
	    c = b.queue;
	  if (null === c) throw Error(p$4(311));
	  c.lastRenderedReducer = a;
	  var d = O,
	    e = d.baseQueue,
	    f = c.pending;
	  if (null !== f) {
	    if (null !== e) {
	      var g = e.next;
	      e.next = f.next;
	      f.next = g;
	    }
	    d.baseQueue = e = f;
	    c.pending = null;
	  }
	  if (null !== e) {
	    f = e.next;
	    d = d.baseState;
	    var h = g = null,
	      k = null,
	      l = f;
	    do {
	      var m = l.lane;
	      if ((Rh & m) === m) null !== k && (k = k.next = {
	        lane: 0,
	        action: l.action,
	        hasEagerState: l.hasEagerState,
	        eagerState: l.eagerState,
	        next: null
	      }), d = l.hasEagerState ? l.eagerState : a(d, l.action);else {
	        var q = {
	          lane: m,
	          action: l.action,
	          hasEagerState: l.hasEagerState,
	          eagerState: l.eagerState,
	          next: null
	        };
	        null === k ? (h = k = q, g = d) : k = k.next = q;
	        N.lanes |= m;
	        hh |= m;
	      }
	      l = l.next;
	    } while (null !== l && l !== f);
	    null === k ? g = d : k.next = h;
	    He(d, b.memoizedState) || (Ug = !0);
	    b.memoizedState = d;
	    b.baseState = g;
	    b.baseQueue = k;
	    c.lastRenderedState = d;
	  }
	  a = c.interleaved;
	  if (null !== a) {
	    e = a;
	    do f = e.lane, N.lanes |= f, hh |= f, e = e.next; while (e !== a);
	  } else null === e && (c.lanes = 0);
	  return [b.memoizedState, c.dispatch];
	}
	function gi(a) {
	  var b = di(),
	    c = b.queue;
	  if (null === c) throw Error(p$4(311));
	  c.lastRenderedReducer = a;
	  var d = c.dispatch,
	    e = c.pending,
	    f = b.memoizedState;
	  if (null !== e) {
	    c.pending = null;
	    var g = e = e.next;
	    do f = a(f, g.action), g = g.next; while (g !== e);
	    He(f, b.memoizedState) || (Ug = !0);
	    b.memoizedState = f;
	    null === b.baseQueue && (b.baseState = f);
	    c.lastRenderedState = f;
	  }
	  return [f, d];
	}
	function hi() {}
	function ii(a, b) {
	  var c = N,
	    d = di(),
	    e = b(),
	    f = !He(d.memoizedState, e);
	  f && (d.memoizedState = e, Ug = !0);
	  d = d.queue;
	  ji(ki.bind(null, c, d, a), [a]);
	  if (d.getSnapshot !== b || f || null !== P && P.memoizedState.tag & 1) {
	    c.flags |= 2048;
	    li(9, mi.bind(null, c, d, e, b), void 0, null);
	    if (null === R) throw Error(p$4(349));
	    0 !== (Rh & 30) || ni(c, b, e);
	  }
	  return e;
	}
	function ni(a, b, c) {
	  a.flags |= 16384;
	  a = {
	    getSnapshot: b,
	    value: c
	  };
	  b = N.updateQueue;
	  null === b ? (b = {
	    lastEffect: null,
	    stores: null
	  }, N.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
	}
	function mi(a, b, c, d) {
	  b.value = c;
	  b.getSnapshot = d;
	  oi(b) && pi(a);
	}
	function ki(a, b, c) {
	  return c(function () {
	    oi(b) && pi(a);
	  });
	}
	function oi(a) {
	  var b = a.getSnapshot;
	  a = a.value;
	  try {
	    var c = b();
	    return !He(a, c);
	  } catch (d) {
	    return !0;
	  }
	}
	function pi(a) {
	  var b = Zg(a, 1);
	  null !== b && mh(b, a, 1, -1);
	}
	function qi(a) {
	  var b = ci();
	  "function" === typeof a && (a = a());
	  b.memoizedState = b.baseState = a;
	  a = {
	    pending: null,
	    interleaved: null,
	    lanes: 0,
	    dispatch: null,
	    lastRenderedReducer: ei,
	    lastRenderedState: a
	  };
	  b.queue = a;
	  a = a.dispatch = ri.bind(null, N, a);
	  return [b.memoizedState, a];
	}
	function li(a, b, c, d) {
	  a = {
	    tag: a,
	    create: b,
	    destroy: c,
	    deps: d,
	    next: null
	  };
	  b = N.updateQueue;
	  null === b ? (b = {
	    lastEffect: null,
	    stores: null
	  }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
	  return a;
	}
	function si() {
	  return di().memoizedState;
	}
	function ti(a, b, c, d) {
	  var e = ci();
	  N.flags |= a;
	  e.memoizedState = li(1 | b, c, void 0, void 0 === d ? null : d);
	}
	function ui(a, b, c, d) {
	  var e = di();
	  d = void 0 === d ? null : d;
	  var f = void 0;
	  if (null !== O) {
	    var g = O.memoizedState;
	    f = g.destroy;
	    if (null !== d && Wh(d, g.deps)) {
	      e.memoizedState = li(b, c, f, d);
	      return;
	    }
	  }
	  N.flags |= a;
	  e.memoizedState = li(1 | b, c, f, d);
	}
	function vi(a, b) {
	  return ti(8390656, 8, a, b);
	}
	function ji(a, b) {
	  return ui(2048, 8, a, b);
	}
	function wi(a, b) {
	  return ui(4, 2, a, b);
	}
	function xi(a, b) {
	  return ui(4, 4, a, b);
	}
	function yi(a, b) {
	  if ("function" === typeof b) return a = a(), b(a), function () {
	    b(null);
	  };
	  if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
	    b.current = null;
	  };
	}
	function zi(a, b, c) {
	  c = null !== c && void 0 !== c ? c.concat([a]) : null;
	  return ui(4, 4, yi.bind(null, b, a), c);
	}
	function Ai() {}
	function Bi(a, b) {
	  var c = di();
	  b = void 0 === b ? null : b;
	  var d = c.memoizedState;
	  if (null !== d && null !== b && Wh(b, d[1])) return d[0];
	  c.memoizedState = [a, b];
	  return a;
	}
	function Ci(a, b) {
	  var c = di();
	  b = void 0 === b ? null : b;
	  var d = c.memoizedState;
	  if (null !== d && null !== b && Wh(b, d[1])) return d[0];
	  a = a();
	  c.memoizedState = [a, b];
	  return a;
	}
	function Di(a, b, c) {
	  if (0 === (Rh & 21)) return a.baseState && (a.baseState = !1, Ug = !0), a.memoizedState = c;
	  He(c, b) || (c = yc(), N.lanes |= c, hh |= c, a.baseState = !0);
	  return b;
	}
	function Ei(a, b) {
	  var c = C;
	  C = 0 !== c && 4 > c ? c : 4;
	  a(!0);
	  var d = Qh.transition;
	  Qh.transition = {};
	  try {
	    a(!1), b();
	  } finally {
	    C = c, Qh.transition = d;
	  }
	}
	function Fi() {
	  return di().memoizedState;
	}
	function Gi(a, b, c) {
	  var d = lh(a);
	  c = {
	    lane: d,
	    action: c,
	    hasEagerState: !1,
	    eagerState: null,
	    next: null
	  };
	  if (Hi(a)) Ii(b, c);else if (c = Yg(a, b, c, d), null !== c) {
	    var e = L();
	    mh(c, a, d, e);
	    Ji(c, b, d);
	  }
	}
	function ri(a, b, c) {
	  var d = lh(a),
	    e = {
	      lane: d,
	      action: c,
	      hasEagerState: !1,
	      eagerState: null,
	      next: null
	    };
	  if (Hi(a)) Ii(b, e);else {
	    var f = a.alternate;
	    if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
	      var g = b.lastRenderedState,
	        h = f(g, c);
	      e.hasEagerState = !0;
	      e.eagerState = h;
	      if (He(h, g)) {
	        var k = b.interleaved;
	        null === k ? (e.next = e, Xg(b)) : (e.next = k.next, k.next = e);
	        b.interleaved = e;
	        return;
	      }
	    } catch (l) {} finally {}
	    c = Yg(a, b, e, d);
	    null !== c && (e = L(), mh(c, a, d, e), Ji(c, b, d));
	  }
	}
	function Hi(a) {
	  var b = a.alternate;
	  return a === N || null !== b && b === N;
	}
	function Ii(a, b) {
	  Th = Sh = !0;
	  var c = a.pending;
	  null === c ? b.next = b : (b.next = c.next, c.next = b);
	  a.pending = b;
	}
	function Ji(a, b, c) {
	  if (0 !== (c & 4194240)) {
	    var d = b.lanes;
	    d &= a.pendingLanes;
	    c |= d;
	    b.lanes = c;
	    Cc(a, c);
	  }
	}
	var ai = {
	    readContext: Vg,
	    useCallback: Q,
	    useContext: Q,
	    useEffect: Q,
	    useImperativeHandle: Q,
	    useInsertionEffect: Q,
	    useLayoutEffect: Q,
	    useMemo: Q,
	    useReducer: Q,
	    useRef: Q,
	    useState: Q,
	    useDebugValue: Q,
	    useDeferredValue: Q,
	    useTransition: Q,
	    useMutableSource: Q,
	    useSyncExternalStore: Q,
	    useId: Q,
	    unstable_isNewReconciler: !1
	  },
	  Yh = {
	    readContext: Vg,
	    useCallback: function (a, b) {
	      ci().memoizedState = [a, void 0 === b ? null : b];
	      return a;
	    },
	    useContext: Vg,
	    useEffect: vi,
	    useImperativeHandle: function (a, b, c) {
	      c = null !== c && void 0 !== c ? c.concat([a]) : null;
	      return ti(4194308, 4, yi.bind(null, b, a), c);
	    },
	    useLayoutEffect: function (a, b) {
	      return ti(4194308, 4, a, b);
	    },
	    useInsertionEffect: function (a, b) {
	      return ti(4, 2, a, b);
	    },
	    useMemo: function (a, b) {
	      var c = ci();
	      b = void 0 === b ? null : b;
	      a = a();
	      c.memoizedState = [a, b];
	      return a;
	    },
	    useReducer: function (a, b, c) {
	      var d = ci();
	      b = void 0 !== c ? c(b) : b;
	      d.memoizedState = d.baseState = b;
	      a = {
	        pending: null,
	        interleaved: null,
	        lanes: 0,
	        dispatch: null,
	        lastRenderedReducer: a,
	        lastRenderedState: b
	      };
	      d.queue = a;
	      a = a.dispatch = Gi.bind(null, N, a);
	      return [d.memoizedState, a];
	    },
	    useRef: function (a) {
	      var b = ci();
	      a = {
	        current: a
	      };
	      return b.memoizedState = a;
	    },
	    useState: qi,
	    useDebugValue: Ai,
	    useDeferredValue: function (a) {
	      return ci().memoizedState = a;
	    },
	    useTransition: function () {
	      var a = qi(!1),
	        b = a[0];
	      a = Ei.bind(null, a[1]);
	      ci().memoizedState = a;
	      return [b, a];
	    },
	    useMutableSource: function () {},
	    useSyncExternalStore: function (a, b, c) {
	      var d = N,
	        e = ci();
	      if (I) {
	        if (void 0 === c) throw Error(p$4(407));
	        c = c();
	      } else {
	        c = b();
	        if (null === R) throw Error(p$4(349));
	        0 !== (Rh & 30) || ni(d, b, c);
	      }
	      e.memoizedState = c;
	      var f = {
	        value: c,
	        getSnapshot: b
	      };
	      e.queue = f;
	      vi(ki.bind(null, d, f, a), [a]);
	      d.flags |= 2048;
	      li(9, mi.bind(null, d, f, c, b), void 0, null);
	      return c;
	    },
	    useId: function () {
	      var a = ci(),
	        b = R.identifierPrefix;
	      if (I) {
	        var c = sg;
	        var d = rg;
	        c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
	        b = ":" + b + "R" + c;
	        c = Uh++;
	        0 < c && (b += "H" + c.toString(32));
	        b += ":";
	      } else c = Vh++, b = ":" + b + "r" + c.toString(32) + ":";
	      return a.memoizedState = b;
	    },
	    unstable_isNewReconciler: !1
	  },
	  Zh = {
	    readContext: Vg,
	    useCallback: Bi,
	    useContext: Vg,
	    useEffect: ji,
	    useImperativeHandle: zi,
	    useInsertionEffect: wi,
	    useLayoutEffect: xi,
	    useMemo: Ci,
	    useReducer: fi,
	    useRef: si,
	    useState: function () {
	      return fi(ei);
	    },
	    useDebugValue: Ai,
	    useDeferredValue: function (a) {
	      var b = di();
	      return Di(b, O.memoizedState, a);
	    },
	    useTransition: function () {
	      var a = fi(ei)[0],
	        b = di().memoizedState;
	      return [a, b];
	    },
	    useMutableSource: hi,
	    useSyncExternalStore: ii,
	    useId: Fi,
	    unstable_isNewReconciler: !1
	  },
	  $h = {
	    readContext: Vg,
	    useCallback: Bi,
	    useContext: Vg,
	    useEffect: ji,
	    useImperativeHandle: zi,
	    useInsertionEffect: wi,
	    useLayoutEffect: xi,
	    useMemo: Ci,
	    useReducer: gi,
	    useRef: si,
	    useState: function () {
	      return gi(ei);
	    },
	    useDebugValue: Ai,
	    useDeferredValue: function (a) {
	      var b = di();
	      return null === O ? b.memoizedState = a : Di(b, O.memoizedState, a);
	    },
	    useTransition: function () {
	      var a = gi(ei)[0],
	        b = di().memoizedState;
	      return [a, b];
	    },
	    useMutableSource: hi,
	    useSyncExternalStore: ii,
	    useId: Fi,
	    unstable_isNewReconciler: !1
	  };
	function Ki(a, b) {
	  try {
	    var c = "",
	      d = b;
	    do c += Pa(d), d = d.return; while (d);
	    var e = c;
	  } catch (f) {
	    e = "\nError generating stack: " + f.message + "\n" + f.stack;
	  }
	  return {
	    value: a,
	    source: b,
	    stack: e,
	    digest: null
	  };
	}
	function Li(a, b, c) {
	  return {
	    value: a,
	    source: null,
	    stack: null != c ? c : null,
	    digest: null != b ? b : null
	  };
	}
	function Mi(a, b) {
	  try {
	    console.error(b.value);
	  } catch (c) {
	    setTimeout(function () {
	      throw c;
	    });
	  }
	}
	var Ni = "function" === typeof WeakMap ? WeakMap : Map;
	function Oi(a, b, c) {
	  c = ch(-1, c);
	  c.tag = 3;
	  c.payload = {
	    element: null
	  };
	  var d = b.value;
	  c.callback = function () {
	    Pi || (Pi = !0, Qi = d);
	    Mi(a, b);
	  };
	  return c;
	}
	function Ri(a, b, c) {
	  c = ch(-1, c);
	  c.tag = 3;
	  var d = a.type.getDerivedStateFromError;
	  if ("function" === typeof d) {
	    var e = b.value;
	    c.payload = function () {
	      return d(e);
	    };
	    c.callback = function () {
	      Mi(a, b);
	    };
	  }
	  var f = a.stateNode;
	  null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
	    Mi(a, b);
	    "function" !== typeof d && (null === Si ? Si = new Set([this]) : Si.add(this));
	    var c = b.stack;
	    this.componentDidCatch(b.value, {
	      componentStack: null !== c ? c : ""
	    });
	  });
	  return c;
	}
	function Ti(a, b, c) {
	  var d = a.pingCache;
	  if (null === d) {
	    d = a.pingCache = new Ni();
	    var e = new Set();
	    d.set(b, e);
	  } else e = d.get(b), void 0 === e && (e = new Set(), d.set(b, e));
	  e.has(c) || (e.add(c), a = Ui.bind(null, a, b, c), b.then(a, a));
	}
	function Vi(a) {
	  do {
	    var b;
	    if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
	    if (b) return a;
	    a = a.return;
	  } while (null !== a);
	  return null;
	}
	function Wi(a, b, c, d, e) {
	  if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c, b, 1))), c.lanes |= 1), a;
	  a.flags |= 65536;
	  a.lanes = e;
	  return a;
	}
	var Xi = ua.ReactCurrentOwner,
	  Ug = !1;
	function Yi(a, b, c, d) {
	  b.child = null === a ? Ch(b, null, c, d) : Bh(b, a.child, c, d);
	}
	function Zi(a, b, c, d, e) {
	  c = c.render;
	  var f = b.ref;
	  Tg(b, e);
	  d = Xh(a, b, c, d, f, e);
	  c = bi();
	  if (null !== a && !Ug) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
	  I && c && vg(b);
	  b.flags |= 1;
	  Yi(a, b, d, e);
	  return b.child;
	}
	function aj(a, b, c, d, e) {
	  if (null === a) {
	    var f = c.type;
	    if ("function" === typeof f && !bj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, cj(a, b, f, d, e);
	    a = yh(c.type, null, d, b, b.mode, e);
	    a.ref = b.ref;
	    a.return = b;
	    return b.child = a;
	  }
	  f = a.child;
	  if (0 === (a.lanes & e)) {
	    var g = f.memoizedProps;
	    c = c.compare;
	    c = null !== c ? c : Ie;
	    if (c(g, d) && a.ref === b.ref) return $i(a, b, e);
	  }
	  b.flags |= 1;
	  a = wh(f, d);
	  a.ref = b.ref;
	  a.return = b;
	  return b.child = a;
	}
	function cj(a, b, c, d, e) {
	  if (null !== a) {
	    var f = a.memoizedProps;
	    if (Ie(f, d) && a.ref === b.ref) if (Ug = !1, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (Ug = !0);else return b.lanes = a.lanes, $i(a, b, e);
	  }
	  return dj(a, b, c, d, e);
	}
	function ej(a, b, c) {
	  var d = b.pendingProps,
	    e = d.children,
	    f = null !== a ? a.memoizedState : null;
	  if ("hidden" === d.mode) {
	    if (0 === (b.mode & 1)) b.memoizedState = {
	      baseLanes: 0,
	      cachePool: null,
	      transitions: null
	    }, G(fj, gj), gj |= c;else {
	      if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
	        baseLanes: a,
	        cachePool: null,
	        transitions: null
	      }, b.updateQueue = null, G(fj, gj), gj |= a, null;
	      b.memoizedState = {
	        baseLanes: 0,
	        cachePool: null,
	        transitions: null
	      };
	      d = null !== f ? f.baseLanes : c;
	      G(fj, gj);
	      gj |= d;
	    }
	  } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(fj, gj), gj |= d;
	  Yi(a, b, e, c);
	  return b.child;
	}
	function hj(a, b) {
	  var c = b.ref;
	  if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
	}
	function dj(a, b, c, d, e) {
	  var f = Zf(c) ? Xf : H.current;
	  f = Yf(b, f);
	  Tg(b, e);
	  c = Xh(a, b, c, d, f, e);
	  d = bi();
	  if (null !== a && !Ug) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
	  I && d && vg(b);
	  b.flags |= 1;
	  Yi(a, b, c, e);
	  return b.child;
	}
	function ij(a, b, c, d, e) {
	  if (Zf(c)) {
	    var f = !0;
	    cg(b);
	  } else f = !1;
	  Tg(b, e);
	  if (null === b.stateNode) jj(a, b), ph(b, c, d), rh(b, c, d, e), d = !0;else if (null === a) {
	    var g = b.stateNode,
	      h = b.memoizedProps;
	    g.props = h;
	    var k = g.context,
	      l = c.contextType;
	    "object" === typeof l && null !== l ? l = Vg(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
	    var m = c.getDerivedStateFromProps,
	      q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
	    q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && qh(b, g, d, l);
	    $g = !1;
	    var r = b.memoizedState;
	    g.state = r;
	    gh(b, d, g, e);
	    k = b.memoizedState;
	    h !== d || r !== k || Wf.current || $g ? ("function" === typeof m && (kh(b, c, m, d), k = b.memoizedState), (h = $g || oh(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
	  } else {
	    g = b.stateNode;
	    bh(a, b);
	    h = b.memoizedProps;
	    l = b.type === b.elementType ? h : Lg(b.type, h);
	    g.props = l;
	    q = b.pendingProps;
	    r = g.context;
	    k = c.contextType;
	    "object" === typeof k && null !== k ? k = Vg(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
	    var y = c.getDerivedStateFromProps;
	    (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && qh(b, g, d, k);
	    $g = !1;
	    r = b.memoizedState;
	    g.state = r;
	    gh(b, d, g, e);
	    var n = b.memoizedState;
	    h !== q || r !== n || Wf.current || $g ? ("function" === typeof y && (kh(b, c, y, d), n = b.memoizedState), (l = $g || oh(b, c, l, d, r, n, k) || !1) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = !1);
	  }
	  return kj(a, b, c, d, f, e);
	}
	function kj(a, b, c, d, e, f) {
	  hj(a, b);
	  var g = 0 !== (b.flags & 128);
	  if (!d && !g) return e && dg(b, c, !1), $i(a, b, f);
	  d = b.stateNode;
	  Xi.current = b;
	  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
	  b.flags |= 1;
	  null !== a && g ? (b.child = Bh(b, a.child, null, f), b.child = Bh(b, null, h, f)) : Yi(a, b, h, f);
	  b.memoizedState = d.state;
	  e && dg(b, c, !0);
	  return b.child;
	}
	function lj(a) {
	  var b = a.stateNode;
	  b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, !1);
	  Ih(a, b.containerInfo);
	}
	function mj(a, b, c, d, e) {
	  Ig();
	  Jg(e);
	  b.flags |= 256;
	  Yi(a, b, c, d);
	  return b.child;
	}
	var nj = {
	  dehydrated: null,
	  treeContext: null,
	  retryLane: 0
	};
	function oj(a) {
	  return {
	    baseLanes: a,
	    cachePool: null,
	    transitions: null
	  };
	}
	function pj(a, b, c) {
	  var d = b.pendingProps,
	    e = M.current,
	    f = !1,
	    g = 0 !== (b.flags & 128),
	    h;
	  (h = g) || (h = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
	  if (h) f = !0, b.flags &= -129;else if (null === a || null !== a.memoizedState) e |= 1;
	  G(M, e & 1);
	  if (null === a) {
	    Eg(b);
	    a = b.memoizedState;
	    if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
	    g = d.children;
	    a = d.fallback;
	    return f ? (d = b.mode, f = b.child, g = {
	      mode: "hidden",
	      children: g
	    }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = qj(g, d, 0, null), a = Ah(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = oj(c), b.memoizedState = nj, a) : rj(b, g);
	  }
	  e = a.memoizedState;
	  if (null !== e && (h = e.dehydrated, null !== h)) return sj(a, b, g, d, h, e, c);
	  if (f) {
	    f = d.fallback;
	    g = b.mode;
	    e = a.child;
	    h = e.sibling;
	    var k = {
	      mode: "hidden",
	      children: d.children
	    };
	    0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = wh(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
	    null !== h ? f = wh(h, f) : (f = Ah(f, g, c, null), f.flags |= 2);
	    f.return = b;
	    d.return = b;
	    d.sibling = f;
	    b.child = d;
	    d = f;
	    f = b.child;
	    g = a.child.memoizedState;
	    g = null === g ? oj(c) : {
	      baseLanes: g.baseLanes | c,
	      cachePool: null,
	      transitions: g.transitions
	    };
	    f.memoizedState = g;
	    f.childLanes = a.childLanes & ~c;
	    b.memoizedState = nj;
	    return d;
	  }
	  f = a.child;
	  a = f.sibling;
	  d = wh(f, {
	    mode: "visible",
	    children: d.children
	  });
	  0 === (b.mode & 1) && (d.lanes = c);
	  d.return = b;
	  d.sibling = null;
	  null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
	  b.child = d;
	  b.memoizedState = null;
	  return d;
	}
	function rj(a, b) {
	  b = qj({
	    mode: "visible",
	    children: b
	  }, a.mode, 0, null);
	  b.return = a;
	  return a.child = b;
	}
	function tj(a, b, c, d) {
	  null !== d && Jg(d);
	  Bh(b, a.child, null, c);
	  a = rj(b, b.pendingProps.children);
	  a.flags |= 2;
	  b.memoizedState = null;
	  return a;
	}
	function sj(a, b, c, d, e, f, g) {
	  if (c) {
	    if (b.flags & 256) return b.flags &= -257, d = Li(Error(p$4(422))), tj(a, b, g, d);
	    if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
	    f = d.fallback;
	    e = b.mode;
	    d = qj({
	      mode: "visible",
	      children: d.children
	    }, e, 0, null);
	    f = Ah(f, e, g, null);
	    f.flags |= 2;
	    d.return = b;
	    f.return = b;
	    d.sibling = f;
	    b.child = d;
	    0 !== (b.mode & 1) && Bh(b, a.child, null, g);
	    b.child.memoizedState = oj(g);
	    b.memoizedState = nj;
	    return f;
	  }
	  if (0 === (b.mode & 1)) return tj(a, b, g, null);
	  if ("$!" === e.data) {
	    d = e.nextSibling && e.nextSibling.dataset;
	    if (d) var h = d.dgst;
	    d = h;
	    f = Error(p$4(419));
	    d = Li(f, d, void 0);
	    return tj(a, b, g, d);
	  }
	  h = 0 !== (g & a.childLanes);
	  if (Ug || h) {
	    d = R;
	    if (null !== d) {
	      switch (g & -g) {
	        case 4:
	          e = 2;
	          break;
	        case 16:
	          e = 8;
	          break;
	        case 64:
	        case 128:
	        case 256:
	        case 512:
	        case 1024:
	        case 2048:
	        case 4096:
	        case 8192:
	        case 16384:
	        case 32768:
	        case 65536:
	        case 131072:
	        case 262144:
	        case 524288:
	        case 1048576:
	        case 2097152:
	        case 4194304:
	        case 8388608:
	        case 16777216:
	        case 33554432:
	        case 67108864:
	          e = 32;
	          break;
	        case 536870912:
	          e = 268435456;
	          break;
	        default:
	          e = 0;
	      }
	      e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
	      0 !== e && e !== f.retryLane && (f.retryLane = e, Zg(a, e), mh(d, a, e, -1));
	    }
	    uj();
	    d = Li(Error(p$4(421)));
	    return tj(a, b, g, d);
	  }
	  if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = vj.bind(null, a), e._reactRetry = b, null;
	  a = f.treeContext;
	  yg = Lf(e.nextSibling);
	  xg = b;
	  I = !0;
	  zg = null;
	  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
	  b = rj(b, d.children);
	  b.flags |= 4096;
	  return b;
	}
	function wj(a, b, c) {
	  a.lanes |= b;
	  var d = a.alternate;
	  null !== d && (d.lanes |= b);
	  Sg(a.return, b, c);
	}
	function xj(a, b, c, d, e) {
	  var f = a.memoizedState;
	  null === f ? a.memoizedState = {
	    isBackwards: b,
	    rendering: null,
	    renderingStartTime: 0,
	    last: d,
	    tail: c,
	    tailMode: e
	  } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
	}
	function yj(a, b, c) {
	  var d = b.pendingProps,
	    e = d.revealOrder,
	    f = d.tail;
	  Yi(a, b, d.children, c);
	  d = M.current;
	  if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;else {
	    if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a;) {
	      if (13 === a.tag) null !== a.memoizedState && wj(a, c, b);else if (19 === a.tag) wj(a, c, b);else if (null !== a.child) {
	        a.child.return = a;
	        a = a.child;
	        continue;
	      }
	      if (a === b) break a;
	      for (; null === a.sibling;) {
	        if (null === a.return || a.return === b) break a;
	        a = a.return;
	      }
	      a.sibling.return = a.return;
	      a = a.sibling;
	    }
	    d &= 1;
	  }
	  G(M, d);
	  if (0 === (b.mode & 1)) b.memoizedState = null;else switch (e) {
	    case "forwards":
	      c = b.child;
	      for (e = null; null !== c;) a = c.alternate, null !== a && null === Mh(a) && (e = c), c = c.sibling;
	      c = e;
	      null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
	      xj(b, !1, e, c, f);
	      break;
	    case "backwards":
	      c = null;
	      e = b.child;
	      for (b.child = null; null !== e;) {
	        a = e.alternate;
	        if (null !== a && null === Mh(a)) {
	          b.child = e;
	          break;
	        }
	        a = e.sibling;
	        e.sibling = c;
	        c = e;
	        e = a;
	      }
	      xj(b, !0, c, null, f);
	      break;
	    case "together":
	      xj(b, !1, null, null, void 0);
	      break;
	    default:
	      b.memoizedState = null;
	  }
	  return b.child;
	}
	function jj(a, b) {
	  0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
	}
	function $i(a, b, c) {
	  null !== a && (b.dependencies = a.dependencies);
	  hh |= b.lanes;
	  if (0 === (c & b.childLanes)) return null;
	  if (null !== a && b.child !== a.child) throw Error(p$4(153));
	  if (null !== b.child) {
	    a = b.child;
	    c = wh(a, a.pendingProps);
	    b.child = c;
	    for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = wh(a, a.pendingProps), c.return = b;
	    c.sibling = null;
	  }
	  return b.child;
	}
	function zj(a, b, c) {
	  switch (b.tag) {
	    case 3:
	      lj(b);
	      Ig();
	      break;
	    case 5:
	      Kh(b);
	      break;
	    case 1:
	      Zf(b.type) && cg(b);
	      break;
	    case 4:
	      Ih(b, b.stateNode.containerInfo);
	      break;
	    case 10:
	      var d = b.type._context,
	        e = b.memoizedProps.value;
	      G(Mg, d._currentValue);
	      d._currentValue = e;
	      break;
	    case 13:
	      d = b.memoizedState;
	      if (null !== d) {
	        if (null !== d.dehydrated) return G(M, M.current & 1), b.flags |= 128, null;
	        if (0 !== (c & b.child.childLanes)) return pj(a, b, c);
	        G(M, M.current & 1);
	        a = $i(a, b, c);
	        return null !== a ? a.sibling : null;
	      }
	      G(M, M.current & 1);
	      break;
	    case 19:
	      d = 0 !== (c & b.childLanes);
	      if (0 !== (a.flags & 128)) {
	        if (d) return yj(a, b, c);
	        b.flags |= 128;
	      }
	      e = b.memoizedState;
	      null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
	      G(M, M.current);
	      if (d) break;else return null;
	    case 22:
	    case 23:
	      return b.lanes = 0, ej(a, b, c);
	  }
	  return $i(a, b, c);
	}
	var Aj, Bj, Cj, Dj;
	Aj = function (a, b) {
	  for (var c = b.child; null !== c;) {
	    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);else if (4 !== c.tag && null !== c.child) {
	      c.child.return = c;
	      c = c.child;
	      continue;
	    }
	    if (c === b) break;
	    for (; null === c.sibling;) {
	      if (null === c.return || c.return === b) return;
	      c = c.return;
	    }
	    c.sibling.return = c.return;
	    c = c.sibling;
	  }
	};
	Bj = function () {};
	Cj = function (a, b, c, d) {
	  var e = a.memoizedProps;
	  if (e !== d) {
	    a = b.stateNode;
	    Hh(Eh.current);
	    var f = null;
	    switch (c) {
	      case "input":
	        e = Ya(a, e);
	        d = Ya(a, d);
	        f = [];
	        break;
	      case "select":
	        e = A$1({}, e, {
	          value: void 0
	        });
	        d = A$1({}, d, {
	          value: void 0
	        });
	        f = [];
	        break;
	      case "textarea":
	        e = gb(a, e);
	        d = gb(a, d);
	        f = [];
	        break;
	      default:
	        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
	    }
	    ub(c, d);
	    var g;
	    c = null;
	    for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
	      var h = e[l];
	      for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
	    } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
	    for (l in d) {
	      var k = d[l];
	      h = null != e ? e[l] : void 0;
	      if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) {
	        if (h) {
	          for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
	          for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
	        } else c || (f || (f = []), f.push(l, c)), c = k;
	      } else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
	    }
	    c && (f = f || []).push("style", c);
	    var l = f;
	    if (b.updateQueue = l) b.flags |= 4;
	  }
	};
	Dj = function (a, b, c, d) {
	  c !== d && (b.flags |= 4);
	};
	function Ej(a, b) {
	  if (!I) switch (a.tailMode) {
	    case "hidden":
	      b = a.tail;
	      for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
	      null === c ? a.tail = null : c.sibling = null;
	      break;
	    case "collapsed":
	      c = a.tail;
	      for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
	      null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
	  }
	}
	function S(a) {
	  var b = null !== a.alternate && a.alternate.child === a.child,
	    c = 0,
	    d = 0;
	  if (b) for (var e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;else for (e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
	  a.subtreeFlags |= d;
	  a.childLanes = c;
	  return b;
	}
	function Fj(a, b, c) {
	  var d = b.pendingProps;
	  wg(b);
	  switch (b.tag) {
	    case 2:
	    case 16:
	    case 15:
	    case 0:
	    case 11:
	    case 7:
	    case 8:
	    case 12:
	    case 9:
	    case 14:
	      return S(b), null;
	    case 1:
	      return Zf(b.type) && $f(), S(b), null;
	    case 3:
	      d = b.stateNode;
	      Jh();
	      E(Wf);
	      E(H);
	      Oh();
	      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
	      if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Gj(zg), zg = null));
	      Bj(a, b);
	      S(b);
	      return null;
	    case 5:
	      Lh(b);
	      var e = Hh(Gh.current);
	      c = b.type;
	      if (null !== a && null != b.stateNode) Cj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);else {
	        if (!d) {
	          if (null === b.stateNode) throw Error(p$4(166));
	          S(b);
	          return null;
	        }
	        a = Hh(Eh.current);
	        if (Gg(b)) {
	          d = b.stateNode;
	          c = b.type;
	          var f = b.memoizedProps;
	          d[Of] = b;
	          d[Pf] = f;
	          a = 0 !== (b.mode & 1);
	          switch (c) {
	            case "dialog":
	              D("cancel", d);
	              D("close", d);
	              break;
	            case "iframe":
	            case "object":
	            case "embed":
	              D("load", d);
	              break;
	            case "video":
	            case "audio":
	              for (e = 0; e < lf.length; e++) D(lf[e], d);
	              break;
	            case "source":
	              D("error", d);
	              break;
	            case "img":
	            case "image":
	            case "link":
	              D("error", d);
	              D("load", d);
	              break;
	            case "details":
	              D("toggle", d);
	              break;
	            case "input":
	              Za(d, f);
	              D("invalid", d);
	              break;
	            case "select":
	              d._wrapperState = {
	                wasMultiple: !!f.multiple
	              };
	              D("invalid", d);
	              break;
	            case "textarea":
	              hb(d, f), D("invalid", d);
	          }
	          ub(c, f);
	          e = null;
	          for (var g in f) if (f.hasOwnProperty(g)) {
	            var h = f[g];
	            "children" === g ? "string" === typeof h ? d.textContent !== h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
	          }
	          switch (c) {
	            case "input":
	              Va(d);
	              db(d, f, !0);
	              break;
	            case "textarea":
	              Va(d);
	              jb(d);
	              break;
	            case "select":
	            case "option":
	              break;
	            default:
	              "function" === typeof f.onClick && (d.onclick = Bf);
	          }
	          d = e;
	          b.updateQueue = d;
	          null !== d && (b.flags |= 4);
	        } else {
	          g = 9 === e.nodeType ? e : e.ownerDocument;
	          "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
	          "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script>\x3c/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
	            is: d.is
	          }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
	          a[Of] = b;
	          a[Pf] = d;
	          Aj(a, b, !1, !1);
	          b.stateNode = a;
	          a: {
	            g = vb(c, d);
	            switch (c) {
	              case "dialog":
	                D("cancel", a);
	                D("close", a);
	                e = d;
	                break;
	              case "iframe":
	              case "object":
	              case "embed":
	                D("load", a);
	                e = d;
	                break;
	              case "video":
	              case "audio":
	                for (e = 0; e < lf.length; e++) D(lf[e], a);
	                e = d;
	                break;
	              case "source":
	                D("error", a);
	                e = d;
	                break;
	              case "img":
	              case "image":
	              case "link":
	                D("error", a);
	                D("load", a);
	                e = d;
	                break;
	              case "details":
	                D("toggle", a);
	                e = d;
	                break;
	              case "input":
	                Za(a, d);
	                e = Ya(a, d);
	                D("invalid", a);
	                break;
	              case "option":
	                e = d;
	                break;
	              case "select":
	                a._wrapperState = {
	                  wasMultiple: !!d.multiple
	                };
	                e = A$1({}, d, {
	                  value: void 0
	                });
	                D("invalid", a);
	                break;
	              case "textarea":
	                hb(a, d);
	                e = gb(a, d);
	                D("invalid", a);
	                break;
	              default:
	                e = d;
	            }
	            ub(c, e);
	            h = e;
	            for (f in h) if (h.hasOwnProperty(f)) {
	              var k = h[f];
	              "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
	            }
	            switch (c) {
	              case "input":
	                Va(a);
	                db(a, d, !1);
	                break;
	              case "textarea":
	                Va(a);
	                jb(a);
	                break;
	              case "option":
	                null != d.value && a.setAttribute("value", "" + Sa(d.value));
	                break;
	              case "select":
	                a.multiple = !!d.multiple;
	                f = d.value;
	                null != f ? fb(a, !!d.multiple, f, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
	                break;
	              default:
	                "function" === typeof e.onClick && (a.onclick = Bf);
	            }
	            switch (c) {
	              case "button":
	              case "input":
	              case "select":
	              case "textarea":
	                d = !!d.autoFocus;
	                break a;
	              case "img":
	                d = !0;
	                break a;
	              default:
	                d = !1;
	            }
	          }
	          d && (b.flags |= 4);
	        }
	        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
	      }
	      S(b);
	      return null;
	    case 6:
	      if (a && null != b.stateNode) Dj(a, b, a.memoizedProps, d);else {
	        if ("string" !== typeof d && null === b.stateNode) throw Error(p$4(166));
	        c = Hh(Gh.current);
	        Hh(Eh.current);
	        if (Gg(b)) {
	          d = b.stateNode;
	          c = b.memoizedProps;
	          d[Of] = b;
	          if (f = d.nodeValue !== c) if (a = xg, null !== a) switch (a.tag) {
	            case 3:
	              Af(d.nodeValue, c, 0 !== (a.mode & 1));
	              break;
	            case 5:
	              !0 !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
	          }
	          f && (b.flags |= 4);
	        } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
	      }
	      S(b);
	      return null;
	    case 13:
	      E(M);
	      d = b.memoizedState;
	      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
	        if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = !1;else if (f = Gg(b), null !== d && null !== d.dehydrated) {
	          if (null === a) {
	            if (!f) throw Error(p$4(318));
	            f = b.memoizedState;
	            f = null !== f ? f.dehydrated : null;
	            if (!f) throw Error(p$4(317));
	            f[Of] = b;
	          } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
	          S(b);
	          f = !1;
	        } else null !== zg && (Gj(zg), zg = null), f = !0;
	        if (!f) return b.flags & 65536 ? b : null;
	      }
	      if (0 !== (b.flags & 128)) return b.lanes = c, b;
	      d = null !== d;
	      d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
	      null !== b.updateQueue && (b.flags |= 4);
	      S(b);
	      return null;
	    case 4:
	      return Jh(), Bj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
	    case 10:
	      return Rg(b.type._context), S(b), null;
	    case 17:
	      return Zf(b.type) && $f(), S(b), null;
	    case 19:
	      E(M);
	      f = b.memoizedState;
	      if (null === f) return S(b), null;
	      d = 0 !== (b.flags & 128);
	      g = f.rendering;
	      if (null === g) {
	        if (d) Ej(f, !1);else {
	          if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a;) {
	            g = Mh(a);
	            if (null !== g) {
	              b.flags |= 128;
	              Ej(f, !1);
	              d = g.updateQueue;
	              null !== d && (b.updateQueue = d, b.flags |= 4);
	              b.subtreeFlags = 0;
	              d = c;
	              for (c = b.child; null !== c;) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
	                lanes: a.lanes,
	                firstContext: a.firstContext
	              }), c = c.sibling;
	              G(M, M.current & 1 | 2);
	              return b.child;
	            }
	            a = a.sibling;
	          }
	          null !== f.tail && B() > Hj && (b.flags |= 128, d = !0, Ej(f, !1), b.lanes = 4194304);
	        }
	      } else {
	        if (!d) if (a = Mh(g), null !== a) {
	          if (b.flags |= 128, d = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Ej(f, !0), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
	        } else 2 * B() - f.renderingStartTime > Hj && 1073741824 !== c && (b.flags |= 128, d = !0, Ej(f, !1), b.lanes = 4194304);
	        f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
	      }
	      if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = M.current, G(M, d ? c & 1 | 2 : c & 1), b;
	      S(b);
	      return null;
	    case 22:
	    case 23:
	      return Ij(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (gj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
	    case 24:
	      return null;
	    case 25:
	      return null;
	  }
	  throw Error(p$4(156, b.tag));
	}
	function Jj(a, b) {
	  wg(b);
	  switch (b.tag) {
	    case 1:
	      return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
	    case 3:
	      return Jh(), E(Wf), E(H), Oh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
	    case 5:
	      return Lh(b), null;
	    case 13:
	      E(M);
	      a = b.memoizedState;
	      if (null !== a && null !== a.dehydrated) {
	        if (null === b.alternate) throw Error(p$4(340));
	        Ig();
	      }
	      a = b.flags;
	      return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
	    case 19:
	      return E(M), null;
	    case 4:
	      return Jh(), null;
	    case 10:
	      return Rg(b.type._context), null;
	    case 22:
	    case 23:
	      return Ij(), null;
	    case 24:
	      return null;
	    default:
	      return null;
	  }
	}
	var Kj = !1,
	  U = !1,
	  Lj = "function" === typeof WeakSet ? WeakSet : Set,
	  V = null;
	function Mj(a, b) {
	  var c = a.ref;
	  if (null !== c) if ("function" === typeof c) try {
	    c(null);
	  } catch (d) {
	    W(a, b, d);
	  } else c.current = null;
	}
	function Nj(a, b, c) {
	  try {
	    c();
	  } catch (d) {
	    W(a, b, d);
	  }
	}
	var Oj = !1;
	function Pj(a, b) {
	  Cf = dd;
	  a = Me();
	  if (Ne(a)) {
	    if ("selectionStart" in a) var c = {
	      start: a.selectionStart,
	      end: a.selectionEnd
	    };else a: {
	      c = (c = a.ownerDocument) && c.defaultView || window;
	      var d = c.getSelection && c.getSelection();
	      if (d && 0 !== d.rangeCount) {
	        c = d.anchorNode;
	        var e = d.anchorOffset,
	          f = d.focusNode;
	        d = d.focusOffset;
	        try {
	          c.nodeType, f.nodeType;
	        } catch (F) {
	          c = null;
	          break a;
	        }
	        var g = 0,
	          h = -1,
	          k = -1,
	          l = 0,
	          m = 0,
	          q = a,
	          r = null;
	        b: for (;;) {
	          for (var y;;) {
	            q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
	            q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
	            3 === q.nodeType && (g += q.nodeValue.length);
	            if (null === (y = q.firstChild)) break;
	            r = q;
	            q = y;
	          }
	          for (;;) {
	            if (q === a) break b;
	            r === c && ++l === e && (h = g);
	            r === f && ++m === d && (k = g);
	            if (null !== (y = q.nextSibling)) break;
	            q = r;
	            r = q.parentNode;
	          }
	          q = y;
	        }
	        c = -1 === h || -1 === k ? null : {
	          start: h,
	          end: k
	        };
	      } else c = null;
	    }
	    c = c || {
	      start: 0,
	      end: 0
	    };
	  } else c = null;
	  Df = {
	    focusedElem: a,
	    selectionRange: c
	  };
	  dd = !1;
	  for (V = b; null !== V;) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;else for (; null !== V;) {
	    b = V;
	    try {
	      var n = b.alternate;
	      if (0 !== (b.flags & 1024)) switch (b.tag) {
	        case 0:
	        case 11:
	        case 15:
	          break;
	        case 1:
	          if (null !== n) {
	            var t = n.memoizedProps,
	              J = n.memoizedState,
	              x = b.stateNode,
	              w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Lg(b.type, t), J);
	            x.__reactInternalSnapshotBeforeUpdate = w;
	          }
	          break;
	        case 3:
	          var u = b.stateNode.containerInfo;
	          1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
	          break;
	        case 5:
	        case 6:
	        case 4:
	        case 17:
	          break;
	        default:
	          throw Error(p$4(163));
	      }
	    } catch (F) {
	      W(b, b.return, F);
	    }
	    a = b.sibling;
	    if (null !== a) {
	      a.return = b.return;
	      V = a;
	      break;
	    }
	    V = b.return;
	  }
	  n = Oj;
	  Oj = !1;
	  return n;
	}
	function Qj(a, b, c) {
	  var d = b.updateQueue;
	  d = null !== d ? d.lastEffect : null;
	  if (null !== d) {
	    var e = d = d.next;
	    do {
	      if ((e.tag & a) === a) {
	        var f = e.destroy;
	        e.destroy = void 0;
	        void 0 !== f && Nj(b, c, f);
	      }
	      e = e.next;
	    } while (e !== d);
	  }
	}
	function Rj(a, b) {
	  b = b.updateQueue;
	  b = null !== b ? b.lastEffect : null;
	  if (null !== b) {
	    var c = b = b.next;
	    do {
	      if ((c.tag & a) === a) {
	        var d = c.create;
	        c.destroy = d();
	      }
	      c = c.next;
	    } while (c !== b);
	  }
	}
	function Sj(a) {
	  var b = a.ref;
	  if (null !== b) {
	    var c = a.stateNode;
	    switch (a.tag) {
	      case 5:
	        a = c;
	        break;
	      default:
	        a = c;
	    }
	    "function" === typeof b ? b(a) : b.current = a;
	  }
	}
	function Tj(a) {
	  var b = a.alternate;
	  null !== b && (a.alternate = null, Tj(b));
	  a.child = null;
	  a.deletions = null;
	  a.sibling = null;
	  5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
	  a.stateNode = null;
	  a.return = null;
	  a.dependencies = null;
	  a.memoizedProps = null;
	  a.memoizedState = null;
	  a.pendingProps = null;
	  a.stateNode = null;
	  a.updateQueue = null;
	}
	function Uj(a) {
	  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
	}
	function Vj(a) {
	  a: for (;;) {
	    for (; null === a.sibling;) {
	      if (null === a.return || Uj(a.return)) return null;
	      a = a.return;
	    }
	    a.sibling.return = a.return;
	    for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;) {
	      if (a.flags & 2) continue a;
	      if (null === a.child || 4 === a.tag) continue a;else a.child.return = a, a = a.child;
	    }
	    if (!(a.flags & 2)) return a.stateNode;
	  }
	}
	function Wj(a, b, c) {
	  var d = a.tag;
	  if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a;) Wj(a, b, c), a = a.sibling;
	}
	function Xj(a, b, c) {
	  var d = a.tag;
	  if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);else if (4 !== d && (a = a.child, null !== a)) for (Xj(a, b, c), a = a.sibling; null !== a;) Xj(a, b, c), a = a.sibling;
	}
	var X = null,
	  Yj = !1;
	function Zj(a, b, c) {
	  for (c = c.child; null !== c;) ak(a, b, c), c = c.sibling;
	}
	function ak(a, b, c) {
	  if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
	    lc.onCommitFiberUnmount(kc, c);
	  } catch (h) {}
	  switch (c.tag) {
	    case 5:
	      U || Mj(c, b);
	    case 6:
	      var d = X,
	        e = Yj;
	      X = null;
	      Zj(a, b, c);
	      X = d;
	      Yj = e;
	      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
	      break;
	    case 18:
	      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
	      break;
	    case 4:
	      d = X;
	      e = Yj;
	      X = c.stateNode.containerInfo;
	      Yj = !0;
	      Zj(a, b, c);
	      X = d;
	      Yj = e;
	      break;
	    case 0:
	    case 11:
	    case 14:
	    case 15:
	      if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
	        e = d = d.next;
	        do {
	          var f = e,
	            g = f.destroy;
	          f = f.tag;
	          void 0 !== g && (0 !== (f & 2) ? Nj(c, b, g) : 0 !== (f & 4) && Nj(c, b, g));
	          e = e.next;
	        } while (e !== d);
	      }
	      Zj(a, b, c);
	      break;
	    case 1:
	      if (!U && (Mj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
	        d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
	      } catch (h) {
	        W(c, b, h);
	      }
	      Zj(a, b, c);
	      break;
	    case 21:
	      Zj(a, b, c);
	      break;
	    case 22:
	      c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Zj(a, b, c), U = d) : Zj(a, b, c);
	      break;
	    default:
	      Zj(a, b, c);
	  }
	}
	function bk(a) {
	  var b = a.updateQueue;
	  if (null !== b) {
	    a.updateQueue = null;
	    var c = a.stateNode;
	    null === c && (c = a.stateNode = new Lj());
	    b.forEach(function (b) {
	      var d = ck.bind(null, a, b);
	      c.has(b) || (c.add(b), b.then(d, d));
	    });
	  }
	}
	function dk(a, b) {
	  var c = b.deletions;
	  if (null !== c) for (var d = 0; d < c.length; d++) {
	    var e = c[d];
	    try {
	      var f = a,
	        g = b,
	        h = g;
	      a: for (; null !== h;) {
	        switch (h.tag) {
	          case 5:
	            X = h.stateNode;
	            Yj = !1;
	            break a;
	          case 3:
	            X = h.stateNode.containerInfo;
	            Yj = !0;
	            break a;
	          case 4:
	            X = h.stateNode.containerInfo;
	            Yj = !0;
	            break a;
	        }
	        h = h.return;
	      }
	      if (null === X) throw Error(p$4(160));
	      ak(f, g, e);
	      X = null;
	      Yj = !1;
	      var k = e.alternate;
	      null !== k && (k.return = null);
	      e.return = null;
	    } catch (l) {
	      W(e, b, l);
	    }
	  }
	  if (b.subtreeFlags & 12854) for (b = b.child; null !== b;) ek(b, a), b = b.sibling;
	}
	function ek(a, b) {
	  var c = a.alternate,
	    d = a.flags;
	  switch (a.tag) {
	    case 0:
	    case 11:
	    case 14:
	    case 15:
	      dk(b, a);
	      fk(a);
	      if (d & 4) {
	        try {
	          Qj(3, a, a.return), Rj(3, a);
	        } catch (t) {
	          W(a, a.return, t);
	        }
	        try {
	          Qj(5, a, a.return);
	        } catch (t) {
	          W(a, a.return, t);
	        }
	      }
	      break;
	    case 1:
	      dk(b, a);
	      fk(a);
	      d & 512 && null !== c && Mj(c, c.return);
	      break;
	    case 5:
	      dk(b, a);
	      fk(a);
	      d & 512 && null !== c && Mj(c, c.return);
	      if (a.flags & 32) {
	        var e = a.stateNode;
	        try {
	          ob(e, "");
	        } catch (t) {
	          W(a, a.return, t);
	        }
	      }
	      if (d & 4 && (e = a.stateNode, null != e)) {
	        var f = a.memoizedProps,
	          g = null !== c ? c.memoizedProps : f,
	          h = a.type,
	          k = a.updateQueue;
	        a.updateQueue = null;
	        if (null !== k) try {
	          "input" === h && "radio" === f.type && null != f.name && ab(e, f);
	          vb(h, g);
	          var l = vb(h, f);
	          for (g = 0; g < k.length; g += 2) {
	            var m = k[g],
	              q = k[g + 1];
	            "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
	          }
	          switch (h) {
	            case "input":
	              bb(e, f);
	              break;
	            case "textarea":
	              ib(e, f);
	              break;
	            case "select":
	              var r = e._wrapperState.wasMultiple;
	              e._wrapperState.wasMultiple = !!f.multiple;
	              var y = f.value;
	              null != y ? fb(e, !!f.multiple, y, !1) : r !== !!f.multiple && (null != f.defaultValue ? fb(e, !!f.multiple, f.defaultValue, !0) : fb(e, !!f.multiple, f.multiple ? [] : "", !1));
	          }
	          e[Pf] = f;
	        } catch (t) {
	          W(a, a.return, t);
	        }
	      }
	      break;
	    case 6:
	      dk(b, a);
	      fk(a);
	      if (d & 4) {
	        if (null === a.stateNode) throw Error(p$4(162));
	        e = a.stateNode;
	        f = a.memoizedProps;
	        try {
	          e.nodeValue = f;
	        } catch (t) {
	          W(a, a.return, t);
	        }
	      }
	      break;
	    case 3:
	      dk(b, a);
	      fk(a);
	      if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
	        bd(b.containerInfo);
	      } catch (t) {
	        W(a, a.return, t);
	      }
	      break;
	    case 4:
	      dk(b, a);
	      fk(a);
	      break;
	    case 13:
	      dk(b, a);
	      fk(a);
	      e = a.child;
	      e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (gk = B()));
	      d & 4 && bk(a);
	      break;
	    case 22:
	      m = null !== c && null !== c.memoizedState;
	      a.mode & 1 ? (U = (l = U) || m, dk(b, a), U = l) : dk(b, a);
	      fk(a);
	      if (d & 8192) {
	        l = null !== a.memoizedState;
	        if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m;) {
	          for (q = V = m; null !== V;) {
	            r = V;
	            y = r.child;
	            switch (r.tag) {
	              case 0:
	              case 11:
	              case 14:
	              case 15:
	                Qj(4, r, r.return);
	                break;
	              case 1:
	                Mj(r, r.return);
	                var n = r.stateNode;
	                if ("function" === typeof n.componentWillUnmount) {
	                  d = r;
	                  c = r.return;
	                  try {
	                    b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
	                  } catch (t) {
	                    W(d, c, t);
	                  }
	                }
	                break;
	              case 5:
	                Mj(r, r.return);
	                break;
	              case 22:
	                if (null !== r.memoizedState) {
	                  hk(q);
	                  continue;
	                }
	            }
	            null !== y ? (y.return = r, V = y) : hk(q);
	          }
	          m = m.sibling;
	        }
	        a: for (m = null, q = a;;) {
	          if (5 === q.tag) {
	            if (null === m) {
	              m = q;
	              try {
	                e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
	              } catch (t) {
	                W(a, a.return, t);
	              }
	            }
	          } else if (6 === q.tag) {
	            if (null === m) try {
	              q.stateNode.nodeValue = l ? "" : q.memoizedProps;
	            } catch (t) {
	              W(a, a.return, t);
	            }
	          } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
	            q.child.return = q;
	            q = q.child;
	            continue;
	          }
	          if (q === a) break a;
	          for (; null === q.sibling;) {
	            if (null === q.return || q.return === a) break a;
	            m === q && (m = null);
	            q = q.return;
	          }
	          m === q && (m = null);
	          q.sibling.return = q.return;
	          q = q.sibling;
	        }
	      }
	      break;
	    case 19:
	      dk(b, a);
	      fk(a);
	      d & 4 && bk(a);
	      break;
	    case 21:
	      break;
	    default:
	      dk(b, a), fk(a);
	  }
	}
	function fk(a) {
	  var b = a.flags;
	  if (b & 2) {
	    try {
	      a: {
	        for (var c = a.return; null !== c;) {
	          if (Uj(c)) {
	            var d = c;
	            break a;
	          }
	          c = c.return;
	        }
	        throw Error(p$4(160));
	      }
	      switch (d.tag) {
	        case 5:
	          var e = d.stateNode;
	          d.flags & 32 && (ob(e, ""), d.flags &= -33);
	          var f = Vj(a);
	          Xj(a, f, e);
	          break;
	        case 3:
	        case 4:
	          var g = d.stateNode.containerInfo,
	            h = Vj(a);
	          Wj(a, h, g);
	          break;
	        default:
	          throw Error(p$4(161));
	      }
	    } catch (k) {
	      W(a, a.return, k);
	    }
	    a.flags &= -3;
	  }
	  b & 4096 && (a.flags &= -4097);
	}
	function ik(a, b, c) {
	  V = a;
	  jk(a);
	}
	function jk(a, b, c) {
	  for (var d = 0 !== (a.mode & 1); null !== V;) {
	    var e = V,
	      f = e.child;
	    if (22 === e.tag && d) {
	      var g = null !== e.memoizedState || Kj;
	      if (!g) {
	        var h = e.alternate,
	          k = null !== h && null !== h.memoizedState || U;
	        h = Kj;
	        var l = U;
	        Kj = g;
	        if ((U = k) && !l) for (V = e; null !== V;) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? kk(e) : null !== k ? (k.return = g, V = k) : kk(e);
	        for (; null !== f;) V = f, jk(f), f = f.sibling;
	        V = e;
	        Kj = h;
	        U = l;
	      }
	      lk(a);
	    } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : lk(a);
	  }
	}
	function lk(a) {
	  for (; null !== V;) {
	    var b = V;
	    if (0 !== (b.flags & 8772)) {
	      var c = b.alternate;
	      try {
	        if (0 !== (b.flags & 8772)) switch (b.tag) {
	          case 0:
	          case 11:
	          case 15:
	            U || Rj(5, b);
	            break;
	          case 1:
	            var d = b.stateNode;
	            if (b.flags & 4 && !U) if (null === c) d.componentDidMount();else {
	              var e = b.elementType === b.type ? c.memoizedProps : Lg(b.type, c.memoizedProps);
	              d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
	            }
	            var f = b.updateQueue;
	            null !== f && ih(b, f, d);
	            break;
	          case 3:
	            var g = b.updateQueue;
	            if (null !== g) {
	              c = null;
	              if (null !== b.child) switch (b.child.tag) {
	                case 5:
	                  c = b.child.stateNode;
	                  break;
	                case 1:
	                  c = b.child.stateNode;
	              }
	              ih(b, g, c);
	            }
	            break;
	          case 5:
	            var h = b.stateNode;
	            if (null === c && b.flags & 4) {
	              c = h;
	              var k = b.memoizedProps;
	              switch (b.type) {
	                case "button":
	                case "input":
	                case "select":
	                case "textarea":
	                  k.autoFocus && c.focus();
	                  break;
	                case "img":
	                  k.src && (c.src = k.src);
	              }
	            }
	            break;
	          case 6:
	            break;
	          case 4:
	            break;
	          case 12:
	            break;
	          case 13:
	            if (null === b.memoizedState) {
	              var l = b.alternate;
	              if (null !== l) {
	                var m = l.memoizedState;
	                if (null !== m) {
	                  var q = m.dehydrated;
	                  null !== q && bd(q);
	                }
	              }
	            }
	            break;
	          case 19:
	          case 17:
	          case 21:
	          case 22:
	          case 23:
	          case 25:
	            break;
	          default:
	            throw Error(p$4(163));
	        }
	        U || b.flags & 512 && Sj(b);
	      } catch (r) {
	        W(b, b.return, r);
	      }
	    }
	    if (b === a) {
	      V = null;
	      break;
	    }
	    c = b.sibling;
	    if (null !== c) {
	      c.return = b.return;
	      V = c;
	      break;
	    }
	    V = b.return;
	  }
	}
	function hk(a) {
	  for (; null !== V;) {
	    var b = V;
	    if (b === a) {
	      V = null;
	      break;
	    }
	    var c = b.sibling;
	    if (null !== c) {
	      c.return = b.return;
	      V = c;
	      break;
	    }
	    V = b.return;
	  }
	}
	function kk(a) {
	  for (; null !== V;) {
	    var b = V;
	    try {
	      switch (b.tag) {
	        case 0:
	        case 11:
	        case 15:
	          var c = b.return;
	          try {
	            Rj(4, b);
	          } catch (k) {
	            W(b, c, k);
	          }
	          break;
	        case 1:
	          var d = b.stateNode;
	          if ("function" === typeof d.componentDidMount) {
	            var e = b.return;
	            try {
	              d.componentDidMount();
	            } catch (k) {
	              W(b, e, k);
	            }
	          }
	          var f = b.return;
	          try {
	            Sj(b);
	          } catch (k) {
	            W(b, f, k);
	          }
	          break;
	        case 5:
	          var g = b.return;
	          try {
	            Sj(b);
	          } catch (k) {
	            W(b, g, k);
	          }
	      }
	    } catch (k) {
	      W(b, b.return, k);
	    }
	    if (b === a) {
	      V = null;
	      break;
	    }
	    var h = b.sibling;
	    if (null !== h) {
	      h.return = b.return;
	      V = h;
	      break;
	    }
	    V = b.return;
	  }
	}
	var mk = Math.ceil,
	  nk = ua.ReactCurrentDispatcher,
	  ok = ua.ReactCurrentOwner,
	  pk = ua.ReactCurrentBatchConfig,
	  K = 0,
	  R = null,
	  Y = null,
	  Z = 0,
	  gj = 0,
	  fj = Uf(0),
	  T = 0,
	  qk = null,
	  hh = 0,
	  rk = 0,
	  sk = 0,
	  tk = null,
	  uk = null,
	  gk = 0,
	  Hj = Infinity,
	  vk = null,
	  Pi = !1,
	  Qi = null,
	  Si = null,
	  wk = !1,
	  xk = null,
	  yk = 0,
	  zk = 0,
	  Ak = null,
	  Bk = -1,
	  Ck = 0;
	function L() {
	  return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
	}
	function lh(a) {
	  if (0 === (a.mode & 1)) return 1;
	  if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
	  if (null !== Kg.transition) return 0 === Ck && (Ck = yc()), Ck;
	  a = C;
	  if (0 !== a) return a;
	  a = window.event;
	  a = void 0 === a ? 16 : jd(a.type);
	  return a;
	}
	function mh(a, b, c, d) {
	  if (50 < zk) throw zk = 0, Ak = null, Error(p$4(185));
	  Ac(a, c, d);
	  if (0 === (K & 2) || a !== R) a === R && (0 === (K & 2) && (rk |= c), 4 === T && Dk(a, Z)), Ek(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Hj = B() + 500, fg && jg());
	}
	function Ek(a, b) {
	  var c = a.callbackNode;
	  wc(a, b);
	  var d = uc(a, a === R ? Z : 0);
	  if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;else if (b = d & -d, a.callbackPriority !== b) {
	    null != c && bc(c);
	    if (1 === b) 0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function () {
	      0 === (K & 6) && jg();
	    }), c = null;else {
	      switch (Dc(d)) {
	        case 1:
	          c = fc;
	          break;
	        case 4:
	          c = gc;
	          break;
	        case 16:
	          c = hc;
	          break;
	        case 536870912:
	          c = jc;
	          break;
	        default:
	          c = hc;
	      }
	      c = Gk(c, Hk.bind(null, a));
	    }
	    a.callbackPriority = b;
	    a.callbackNode = c;
	  }
	}
	function Hk(a, b) {
	  Bk = -1;
	  Ck = 0;
	  if (0 !== (K & 6)) throw Error(p$4(327));
	  var c = a.callbackNode;
	  if (Ik() && a.callbackNode !== c) return null;
	  var d = uc(a, a === R ? Z : 0);
	  if (0 === d) return null;
	  if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Jk(a, d);else {
	    b = d;
	    var e = K;
	    K |= 2;
	    var f = Kk();
	    if (R !== a || Z !== b) vk = null, Hj = B() + 500, Lk(a, b);
	    do try {
	      Mk();
	      break;
	    } catch (h) {
	      Nk(a, h);
	    } while (1);
	    Qg();
	    nk.current = f;
	    K = e;
	    null !== Y ? b = 0 : (R = null, Z = 0, b = T);
	  }
	  if (0 !== b) {
	    2 === b && (e = xc(a), 0 !== e && (d = e, b = Ok(a, e)));
	    if (1 === b) throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
	    if (6 === b) Dk(a, d);else {
	      e = a.current.alternate;
	      if (0 === (d & 30) && !Pk(e) && (b = Jk(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Ok(a, f))), 1 === b)) throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
	      a.finishedWork = e;
	      a.finishedLanes = d;
	      switch (b) {
	        case 0:
	        case 1:
	          throw Error(p$4(345));
	        case 2:
	          Qk(a, uk, vk);
	          break;
	        case 3:
	          Dk(a, d);
	          if ((d & 130023424) === d && (b = gk + 500 - B(), 10 < b)) {
	            if (0 !== uc(a, 0)) break;
	            e = a.suspendedLanes;
	            if ((e & d) !== d) {
	              L();
	              a.pingedLanes |= a.suspendedLanes & e;
	              break;
	            }
	            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b);
	            break;
	          }
	          Qk(a, uk, vk);
	          break;
	        case 4:
	          Dk(a, d);
	          if ((d & 4194240) === d) break;
	          b = a.eventTimes;
	          for (e = -1; 0 < d;) {
	            var g = 31 - oc(d);
	            f = 1 << g;
	            g = b[g];
	            g > e && (e = g);
	            d &= ~f;
	          }
	          d = e;
	          d = B() - d;
	          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
	          if (10 < d) {
	            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
	            break;
	          }
	          Qk(a, uk, vk);
	          break;
	        case 5:
	          Qk(a, uk, vk);
	          break;
	        default:
	          throw Error(p$4(329));
	      }
	    }
	  }
	  Ek(a, B());
	  return a.callbackNode === c ? Hk.bind(null, a) : null;
	}
	function Ok(a, b) {
	  var c = tk;
	  a.current.memoizedState.isDehydrated && (Lk(a, b).flags |= 256);
	  a = Jk(a, b);
	  2 !== a && (b = uk, uk = c, null !== b && Gj(b));
	  return a;
	}
	function Gj(a) {
	  null === uk ? uk = a : uk.push.apply(uk, a);
	}
	function Pk(a) {
	  for (var b = a;;) {
	    if (b.flags & 16384) {
	      var c = b.updateQueue;
	      if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
	        var e = c[d],
	          f = e.getSnapshot;
	        e = e.value;
	        try {
	          if (!He(f(), e)) return !1;
	        } catch (g) {
	          return !1;
	        }
	      }
	    }
	    c = b.child;
	    if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;else {
	      if (b === a) break;
	      for (; null === b.sibling;) {
	        if (null === b.return || b.return === a) return !0;
	        b = b.return;
	      }
	      b.sibling.return = b.return;
	      b = b.sibling;
	    }
	  }
	  return !0;
	}
	function Dk(a, b) {
	  b &= ~sk;
	  b &= ~rk;
	  a.suspendedLanes |= b;
	  a.pingedLanes &= ~b;
	  for (a = a.expirationTimes; 0 < b;) {
	    var c = 31 - oc(b),
	      d = 1 << c;
	    a[c] = -1;
	    b &= ~d;
	  }
	}
	function Fk(a) {
	  if (0 !== (K & 6)) throw Error(p$4(327));
	  Ik();
	  var b = uc(a, 0);
	  if (0 === (b & 1)) return Ek(a, B()), null;
	  var c = Jk(a, b);
	  if (0 !== a.tag && 2 === c) {
	    var d = xc(a);
	    0 !== d && (b = d, c = Ok(a, d));
	  }
	  if (1 === c) throw c = qk, Lk(a, 0), Dk(a, b), Ek(a, B()), c;
	  if (6 === c) throw Error(p$4(345));
	  a.finishedWork = a.current.alternate;
	  a.finishedLanes = b;
	  Qk(a, uk, vk);
	  Ek(a, B());
	  return null;
	}
	function Rk(a, b) {
	  var c = K;
	  K |= 1;
	  try {
	    return a(b);
	  } finally {
	    K = c, 0 === K && (Hj = B() + 500, fg && jg());
	  }
	}
	function Sk(a) {
	  null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
	  var b = K;
	  K |= 1;
	  var c = pk.transition,
	    d = C;
	  try {
	    if (pk.transition = null, C = 1, a) return a();
	  } finally {
	    C = d, pk.transition = c, K = b, 0 === (K & 6) && jg();
	  }
	}
	function Ij() {
	  gj = fj.current;
	  E(fj);
	}
	function Lk(a, b) {
	  a.finishedWork = null;
	  a.finishedLanes = 0;
	  var c = a.timeoutHandle;
	  -1 !== c && (a.timeoutHandle = -1, Gf(c));
	  if (null !== Y) for (c = Y.return; null !== c;) {
	    var d = c;
	    wg(d);
	    switch (d.tag) {
	      case 1:
	        d = d.type.childContextTypes;
	        null !== d && void 0 !== d && $f();
	        break;
	      case 3:
	        Jh();
	        E(Wf);
	        E(H);
	        Oh();
	        break;
	      case 5:
	        Lh(d);
	        break;
	      case 4:
	        Jh();
	        break;
	      case 13:
	        E(M);
	        break;
	      case 19:
	        E(M);
	        break;
	      case 10:
	        Rg(d.type._context);
	        break;
	      case 22:
	      case 23:
	        Ij();
	    }
	    c = c.return;
	  }
	  R = a;
	  Y = a = wh(a.current, null);
	  Z = gj = b;
	  T = 0;
	  qk = null;
	  sk = rk = hh = 0;
	  uk = tk = null;
	  if (null !== Wg) {
	    for (b = 0; b < Wg.length; b++) if (c = Wg[b], d = c.interleaved, null !== d) {
	      c.interleaved = null;
	      var e = d.next,
	        f = c.pending;
	      if (null !== f) {
	        var g = f.next;
	        f.next = e;
	        d.next = g;
	      }
	      c.pending = d;
	    }
	    Wg = null;
	  }
	  return a;
	}
	function Nk(a, b) {
	  do {
	    var c = Y;
	    try {
	      Qg();
	      Ph.current = ai;
	      if (Sh) {
	        for (var d = N.memoizedState; null !== d;) {
	          var e = d.queue;
	          null !== e && (e.pending = null);
	          d = d.next;
	        }
	        Sh = !1;
	      }
	      Rh = 0;
	      P = O = N = null;
	      Th = !1;
	      Uh = 0;
	      ok.current = null;
	      if (null === c || null === c.return) {
	        T = 1;
	        qk = b;
	        Y = null;
	        break;
	      }
	      a: {
	        var f = a,
	          g = c.return,
	          h = c,
	          k = b;
	        b = Z;
	        h.flags |= 32768;
	        if (null !== k && "object" === typeof k && "function" === typeof k.then) {
	          var l = k,
	            m = h,
	            q = m.tag;
	          if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
	            var r = m.alternate;
	            r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
	          }
	          var y = Vi(g);
	          if (null !== y) {
	            y.flags &= -257;
	            Wi(y, g, h, f, b);
	            y.mode & 1 && Ti(f, l, b);
	            b = y;
	            k = l;
	            var n = b.updateQueue;
	            if (null === n) {
	              var t = new Set();
	              t.add(k);
	              b.updateQueue = t;
	            } else n.add(k);
	            break a;
	          } else {
	            if (0 === (b & 1)) {
	              Ti(f, l, b);
	              uj();
	              break a;
	            }
	            k = Error(p$4(426));
	          }
	        } else if (I && h.mode & 1) {
	          var J = Vi(g);
	          if (null !== J) {
	            0 === (J.flags & 65536) && (J.flags |= 256);
	            Wi(J, g, h, f, b);
	            Jg(Ki(k, h));
	            break a;
	          }
	        }
	        f = k = Ki(k, h);
	        4 !== T && (T = 2);
	        null === tk ? tk = [f] : tk.push(f);
	        f = g;
	        do {
	          switch (f.tag) {
	            case 3:
	              f.flags |= 65536;
	              b &= -b;
	              f.lanes |= b;
	              var x = Oi(f, k, b);
	              fh(f, x);
	              break a;
	            case 1:
	              h = k;
	              var w = f.type,
	                u = f.stateNode;
	              if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Si || !Si.has(u)))) {
	                f.flags |= 65536;
	                b &= -b;
	                f.lanes |= b;
	                var F = Ri(f, h, b);
	                fh(f, F);
	                break a;
	              }
	          }
	          f = f.return;
	        } while (null !== f);
	      }
	      Tk(c);
	    } catch (na) {
	      b = na;
	      Y === c && null !== c && (Y = c = c.return);
	      continue;
	    }
	    break;
	  } while (1);
	}
	function Kk() {
	  var a = nk.current;
	  nk.current = ai;
	  return null === a ? ai : a;
	}
	function uj() {
	  if (0 === T || 3 === T || 2 === T) T = 4;
	  null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
	}
	function Jk(a, b) {
	  var c = K;
	  K |= 2;
	  var d = Kk();
	  if (R !== a || Z !== b) vk = null, Lk(a, b);
	  do try {
	    Uk();
	    break;
	  } catch (e) {
	    Nk(a, e);
	  } while (1);
	  Qg();
	  K = c;
	  nk.current = d;
	  if (null !== Y) throw Error(p$4(261));
	  R = null;
	  Z = 0;
	  return T;
	}
	function Uk() {
	  for (; null !== Y;) Vk(Y);
	}
	function Mk() {
	  for (; null !== Y && !cc();) Vk(Y);
	}
	function Vk(a) {
	  var b = Wk(a.alternate, a, gj);
	  a.memoizedProps = a.pendingProps;
	  null === b ? Tk(a) : Y = b;
	  ok.current = null;
	}
	function Tk(a) {
	  var b = a;
	  do {
	    var c = b.alternate;
	    a = b.return;
	    if (0 === (b.flags & 32768)) {
	      if (c = Fj(c, b, gj), null !== c) {
	        Y = c;
	        return;
	      }
	    } else {
	      c = Jj(c, b);
	      if (null !== c) {
	        c.flags &= 32767;
	        Y = c;
	        return;
	      }
	      if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;else {
	        T = 6;
	        Y = null;
	        return;
	      }
	    }
	    b = b.sibling;
	    if (null !== b) {
	      Y = b;
	      return;
	    }
	    Y = b = a;
	  } while (null !== b);
	  0 === T && (T = 5);
	}
	function Qk(a, b, c) {
	  var d = C,
	    e = pk.transition;
	  try {
	    pk.transition = null, C = 1, Xk(a, b, c, d);
	  } finally {
	    pk.transition = e, C = d;
	  }
	  return null;
	}
	function Xk(a, b, c, d) {
	  do Ik(); while (null !== xk);
	  if (0 !== (K & 6)) throw Error(p$4(327));
	  c = a.finishedWork;
	  var e = a.finishedLanes;
	  if (null === c) return null;
	  a.finishedWork = null;
	  a.finishedLanes = 0;
	  if (c === a.current) throw Error(p$4(177));
	  a.callbackNode = null;
	  a.callbackPriority = 0;
	  var f = c.lanes | c.childLanes;
	  Bc(a, f);
	  a === R && (Y = R = null, Z = 0);
	  0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || wk || (wk = !0, Gk(hc, function () {
	    Ik();
	    return null;
	  }));
	  f = 0 !== (c.flags & 15990);
	  if (0 !== (c.subtreeFlags & 15990) || f) {
	    f = pk.transition;
	    pk.transition = null;
	    var g = C;
	    C = 1;
	    var h = K;
	    K |= 4;
	    ok.current = null;
	    Pj(a, c);
	    ek(c, a);
	    Oe(Df);
	    dd = !!Cf;
	    Df = Cf = null;
	    a.current = c;
	    ik(c);
	    dc();
	    K = h;
	    C = g;
	    pk.transition = f;
	  } else a.current = c;
	  wk && (wk = !1, xk = a, yk = e);
	  f = a.pendingLanes;
	  0 === f && (Si = null);
	  mc(c.stateNode);
	  Ek(a, B());
	  if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, {
	    componentStack: e.stack,
	    digest: e.digest
	  });
	  if (Pi) throw Pi = !1, a = Qi, Qi = null, a;
	  0 !== (yk & 1) && 0 !== a.tag && Ik();
	  f = a.pendingLanes;
	  0 !== (f & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
	  jg();
	  return null;
	}
	function Ik() {
	  if (null !== xk) {
	    var a = Dc(yk),
	      b = pk.transition,
	      c = C;
	    try {
	      pk.transition = null;
	      C = 16 > a ? 16 : a;
	      if (null === xk) var d = !1;else {
	        a = xk;
	        xk = null;
	        yk = 0;
	        if (0 !== (K & 6)) throw Error(p$4(331));
	        var e = K;
	        K |= 4;
	        for (V = a.current; null !== V;) {
	          var f = V,
	            g = f.child;
	          if (0 !== (V.flags & 16)) {
	            var h = f.deletions;
	            if (null !== h) {
	              for (var k = 0; k < h.length; k++) {
	                var l = h[k];
	                for (V = l; null !== V;) {
	                  var m = V;
	                  switch (m.tag) {
	                    case 0:
	                    case 11:
	                    case 15:
	                      Qj(8, m, f);
	                  }
	                  var q = m.child;
	                  if (null !== q) q.return = m, V = q;else for (; null !== V;) {
	                    m = V;
	                    var r = m.sibling,
	                      y = m.return;
	                    Tj(m);
	                    if (m === l) {
	                      V = null;
	                      break;
	                    }
	                    if (null !== r) {
	                      r.return = y;
	                      V = r;
	                      break;
	                    }
	                    V = y;
	                  }
	                }
	              }
	              var n = f.alternate;
	              if (null !== n) {
	                var t = n.child;
	                if (null !== t) {
	                  n.child = null;
	                  do {
	                    var J = t.sibling;
	                    t.sibling = null;
	                    t = J;
	                  } while (null !== t);
	                }
	              }
	              V = f;
	            }
	          }
	          if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;else b: for (; null !== V;) {
	            f = V;
	            if (0 !== (f.flags & 2048)) switch (f.tag) {
	              case 0:
	              case 11:
	              case 15:
	                Qj(9, f, f.return);
	            }
	            var x = f.sibling;
	            if (null !== x) {
	              x.return = f.return;
	              V = x;
	              break b;
	            }
	            V = f.return;
	          }
	        }
	        var w = a.current;
	        for (V = w; null !== V;) {
	          g = V;
	          var u = g.child;
	          if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;else b: for (g = w; null !== V;) {
	            h = V;
	            if (0 !== (h.flags & 2048)) try {
	              switch (h.tag) {
	                case 0:
	                case 11:
	                case 15:
	                  Rj(9, h);
	              }
	            } catch (na) {
	              W(h, h.return, na);
	            }
	            if (h === g) {
	              V = null;
	              break b;
	            }
	            var F = h.sibling;
	            if (null !== F) {
	              F.return = h.return;
	              V = F;
	              break b;
	            }
	            V = h.return;
	          }
	        }
	        K = e;
	        jg();
	        if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
	          lc.onPostCommitFiberRoot(kc, a);
	        } catch (na) {}
	        d = !0;
	      }
	      return d;
	    } finally {
	      C = c, pk.transition = b;
	    }
	  }
	  return !1;
	}
	function Yk(a, b, c) {
	  b = Ki(c, b);
	  b = Oi(a, b, 1);
	  a = dh(a, b, 1);
	  b = L();
	  null !== a && (Ac(a, 1, b), Ek(a, b));
	}
	function W(a, b, c) {
	  if (3 === a.tag) Yk(a, a, c);else for (; null !== b;) {
	    if (3 === b.tag) {
	      Yk(b, a, c);
	      break;
	    } else if (1 === b.tag) {
	      var d = b.stateNode;
	      if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
	        a = Ki(c, a);
	        a = Ri(b, a, 1);
	        b = dh(b, a, 1);
	        a = L();
	        null !== b && (Ac(b, 1, a), Ek(b, a));
	        break;
	      }
	    }
	    b = b.return;
	  }
	}
	function Ui(a, b, c) {
	  var d = a.pingCache;
	  null !== d && d.delete(b);
	  b = L();
	  a.pingedLanes |= a.suspendedLanes & c;
	  R === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c);
	  Ek(a, b);
	}
	function Zk(a, b) {
	  0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
	  var c = L();
	  a = Zg(a, b);
	  null !== a && (Ac(a, b, c), Ek(a, c));
	}
	function vj(a) {
	  var b = a.memoizedState,
	    c = 0;
	  null !== b && (c = b.retryLane);
	  Zk(a, c);
	}
	function ck(a, b) {
	  var c = 0;
	  switch (a.tag) {
	    case 13:
	      var d = a.stateNode;
	      var e = a.memoizedState;
	      null !== e && (c = e.retryLane);
	      break;
	    case 19:
	      d = a.stateNode;
	      break;
	    default:
	      throw Error(p$4(314));
	  }
	  null !== d && d.delete(b);
	  Zk(a, c);
	}
	var Wk;
	Wk = function (a, b, c) {
	  if (null !== a) {
	    if (a.memoizedProps !== b.pendingProps || Wf.current) Ug = !0;else {
	      if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return Ug = !1, zj(a, b, c);
	      Ug = 0 !== (a.flags & 131072) ? !0 : !1;
	    }
	  } else Ug = !1, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
	  b.lanes = 0;
	  switch (b.tag) {
	    case 2:
	      var d = b.type;
	      jj(a, b);
	      a = b.pendingProps;
	      var e = Yf(b, H.current);
	      Tg(b, c);
	      e = Xh(null, b, d, a, e, c);
	      var f = bi();
	      b.flags |= 1;
	      "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = !0, cg(b)) : f = !1, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ah(b), e.updater = nh, b.stateNode = e, e._reactInternals = b, rh(b, d, a, c), b = kj(null, b, d, !0, f, c)) : (b.tag = 0, I && f && vg(b), Yi(null, b, e, c), b = b.child);
	      return b;
	    case 16:
	      d = b.elementType;
	      a: {
	        jj(a, b);
	        a = b.pendingProps;
	        e = d._init;
	        d = e(d._payload);
	        b.type = d;
	        e = b.tag = $k(d);
	        a = Lg(d, a);
	        switch (e) {
	          case 0:
	            b = dj(null, b, d, a, c);
	            break a;
	          case 1:
	            b = ij(null, b, d, a, c);
	            break a;
	          case 11:
	            b = Zi(null, b, d, a, c);
	            break a;
	          case 14:
	            b = aj(null, b, d, Lg(d.type, a), c);
	            break a;
	        }
	        throw Error(p$4(306, d, ""));
	      }
	      return b;
	    case 0:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), dj(a, b, d, e, c);
	    case 1:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), ij(a, b, d, e, c);
	    case 3:
	      a: {
	        lj(b);
	        if (null === a) throw Error(p$4(387));
	        d = b.pendingProps;
	        f = b.memoizedState;
	        e = f.element;
	        bh(a, b);
	        gh(b, d, null, c);
	        var g = b.memoizedState;
	        d = g.element;
	        if (f.isDehydrated) {
	          if (f = {
	            element: d,
	            isDehydrated: !1,
	            cache: g.cache,
	            pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
	            transitions: g.transitions
	          }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
	            e = Ki(Error(p$4(423)), b);
	            b = mj(a, b, d, c, e);
	            break a;
	          } else if (d !== e) {
	            e = Ki(Error(p$4(424)), b);
	            b = mj(a, b, d, c, e);
	            break a;
	          } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = !0, zg = null, c = Ch(b, null, d, c), b.child = c; c;) c.flags = c.flags & -3 | 4096, c = c.sibling;
	        } else {
	          Ig();
	          if (d === e) {
	            b = $i(a, b, c);
	            break a;
	          }
	          Yi(a, b, d, c);
	        }
	        b = b.child;
	      }
	      return b;
	    case 5:
	      return Kh(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), hj(a, b), Yi(a, b, g, c), b.child;
	    case 6:
	      return null === a && Eg(b), null;
	    case 13:
	      return pj(a, b, c);
	    case 4:
	      return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Bh(b, null, d, c) : Yi(a, b, d, c), b.child;
	    case 11:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), Zi(a, b, d, e, c);
	    case 7:
	      return Yi(a, b, b.pendingProps, c), b.child;
	    case 8:
	      return Yi(a, b, b.pendingProps.children, c), b.child;
	    case 12:
	      return Yi(a, b, b.pendingProps.children, c), b.child;
	    case 10:
	      a: {
	        d = b.type._context;
	        e = b.pendingProps;
	        f = b.memoizedProps;
	        g = e.value;
	        G(Mg, d._currentValue);
	        d._currentValue = g;
	        if (null !== f) if (He(f.value, g)) {
	          if (f.children === e.children && !Wf.current) {
	            b = $i(a, b, c);
	            break a;
	          }
	        } else for (f = b.child, null !== f && (f.return = b); null !== f;) {
	          var h = f.dependencies;
	          if (null !== h) {
	            g = f.child;
	            for (var k = h.firstContext; null !== k;) {
	              if (k.context === d) {
	                if (1 === f.tag) {
	                  k = ch(-1, c & -c);
	                  k.tag = 2;
	                  var l = f.updateQueue;
	                  if (null !== l) {
	                    l = l.shared;
	                    var m = l.pending;
	                    null === m ? k.next = k : (k.next = m.next, m.next = k);
	                    l.pending = k;
	                  }
	                }
	                f.lanes |= c;
	                k = f.alternate;
	                null !== k && (k.lanes |= c);
	                Sg(f.return, c, b);
	                h.lanes |= c;
	                break;
	              }
	              k = k.next;
	            }
	          } else if (10 === f.tag) g = f.type === b.type ? null : f.child;else if (18 === f.tag) {
	            g = f.return;
	            if (null === g) throw Error(p$4(341));
	            g.lanes |= c;
	            h = g.alternate;
	            null !== h && (h.lanes |= c);
	            Sg(g, c, b);
	            g = f.sibling;
	          } else g = f.child;
	          if (null !== g) g.return = f;else for (g = f; null !== g;) {
	            if (g === b) {
	              g = null;
	              break;
	            }
	            f = g.sibling;
	            if (null !== f) {
	              f.return = g.return;
	              g = f;
	              break;
	            }
	            g = g.return;
	          }
	          f = g;
	        }
	        Yi(a, b, e.children, c);
	        b = b.child;
	      }
	      return b;
	    case 9:
	      return e = b.type, d = b.pendingProps.children, Tg(b, c), e = Vg(e), d = d(e), b.flags |= 1, Yi(a, b, d, c), b.child;
	    case 14:
	      return d = b.type, e = Lg(d, b.pendingProps), e = Lg(d.type, e), aj(a, b, d, e, c);
	    case 15:
	      return cj(a, b, b.type, b.pendingProps, c);
	    case 17:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), jj(a, b), b.tag = 1, Zf(d) ? (a = !0, cg(b)) : a = !1, Tg(b, c), ph(b, d, e), rh(b, d, e, c), kj(null, b, d, !0, a, c);
	    case 19:
	      return yj(a, b, c);
	    case 22:
	      return ej(a, b, c);
	  }
	  throw Error(p$4(156, b.tag));
	};
	function Gk(a, b) {
	  return ac(a, b);
	}
	function al(a, b, c, d) {
	  this.tag = a;
	  this.key = c;
	  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
	  this.index = 0;
	  this.ref = null;
	  this.pendingProps = b;
	  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
	  this.mode = d;
	  this.subtreeFlags = this.flags = 0;
	  this.deletions = null;
	  this.childLanes = this.lanes = 0;
	  this.alternate = null;
	}
	function Bg(a, b, c, d) {
	  return new al(a, b, c, d);
	}
	function bj(a) {
	  a = a.prototype;
	  return !(!a || !a.isReactComponent);
	}
	function $k(a) {
	  if ("function" === typeof a) return bj(a) ? 1 : 0;
	  if (void 0 !== a && null !== a) {
	    a = a.$$typeof;
	    if (a === Da) return 11;
	    if (a === Ga) return 14;
	  }
	  return 2;
	}
	function wh(a, b) {
	  var c = a.alternate;
	  null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
	  c.flags = a.flags & 14680064;
	  c.childLanes = a.childLanes;
	  c.lanes = a.lanes;
	  c.child = a.child;
	  c.memoizedProps = a.memoizedProps;
	  c.memoizedState = a.memoizedState;
	  c.updateQueue = a.updateQueue;
	  b = a.dependencies;
	  c.dependencies = null === b ? null : {
	    lanes: b.lanes,
	    firstContext: b.firstContext
	  };
	  c.sibling = a.sibling;
	  c.index = a.index;
	  c.ref = a.ref;
	  return c;
	}
	function yh(a, b, c, d, e, f) {
	  var g = 2;
	  d = a;
	  if ("function" === typeof a) bj(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
	    case ya:
	      return Ah(c.children, e, f, b);
	    case za:
	      g = 8;
	      e |= 8;
	      break;
	    case Aa:
	      return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
	    case Ea:
	      return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
	    case Fa:
	      return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
	    case Ia:
	      return qj(c, e, f, b);
	    default:
	      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
	        case Ba:
	          g = 10;
	          break a;
	        case Ca:
	          g = 9;
	          break a;
	        case Da:
	          g = 11;
	          break a;
	        case Ga:
	          g = 14;
	          break a;
	        case Ha:
	          g = 16;
	          d = null;
	          break a;
	      }
	      throw Error(p$4(130, null == a ? a : typeof a, ""));
	  }
	  b = Bg(g, c, b, e);
	  b.elementType = a;
	  b.type = d;
	  b.lanes = f;
	  return b;
	}
	function Ah(a, b, c, d) {
	  a = Bg(7, a, d, b);
	  a.lanes = c;
	  return a;
	}
	function qj(a, b, c, d) {
	  a = Bg(22, a, d, b);
	  a.elementType = Ia;
	  a.lanes = c;
	  a.stateNode = {
	    isHidden: !1
	  };
	  return a;
	}
	function xh(a, b, c) {
	  a = Bg(6, a, null, b);
	  a.lanes = c;
	  return a;
	}
	function zh(a, b, c) {
	  b = Bg(4, null !== a.children ? a.children : [], a.key, b);
	  b.lanes = c;
	  b.stateNode = {
	    containerInfo: a.containerInfo,
	    pendingChildren: null,
	    implementation: a.implementation
	  };
	  return b;
	}
	function bl(a, b, c, d, e) {
	  this.tag = b;
	  this.containerInfo = a;
	  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
	  this.timeoutHandle = -1;
	  this.callbackNode = this.pendingContext = this.context = null;
	  this.callbackPriority = 0;
	  this.eventTimes = zc(0);
	  this.expirationTimes = zc(-1);
	  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
	  this.entanglements = zc(0);
	  this.identifierPrefix = d;
	  this.onRecoverableError = e;
	  this.mutableSourceEagerHydrationData = null;
	}
	function cl(a, b, c, d, e, f, g, h, k) {
	  a = new bl(a, b, c, h, k);
	  1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0;
	  f = Bg(3, null, null, b);
	  a.current = f;
	  f.stateNode = a;
	  f.memoizedState = {
	    element: d,
	    isDehydrated: c,
	    cache: null,
	    transitions: null,
	    pendingSuspenseBoundaries: null
	  };
	  ah(f);
	  return a;
	}
	function dl(a, b, c) {
	  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
	  return {
	    $$typeof: wa,
	    key: null == d ? null : "" + d,
	    children: a,
	    containerInfo: b,
	    implementation: c
	  };
	}
	function el$1(a) {
	  if (!a) return Vf;
	  a = a._reactInternals;
	  a: {
	    if (Vb(a) !== a || 1 !== a.tag) throw Error(p$4(170));
	    var b = a;
	    do {
	      switch (b.tag) {
	        case 3:
	          b = b.stateNode.context;
	          break a;
	        case 1:
	          if (Zf(b.type)) {
	            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
	            break a;
	          }
	      }
	      b = b.return;
	    } while (null !== b);
	    throw Error(p$4(171));
	  }
	  if (1 === a.tag) {
	    var c = a.type;
	    if (Zf(c)) return bg(a, c, b);
	  }
	  return b;
	}
	function fl(a, b, c, d, e, f, g, h, k) {
	  a = cl(c, d, !0, a, e, f, g, h, k);
	  a.context = el$1(null);
	  c = a.current;
	  d = L();
	  e = lh(c);
	  f = ch(d, e);
	  f.callback = void 0 !== b && null !== b ? b : null;
	  dh(c, f, e);
	  a.current.lanes = e;
	  Ac(a, e, d);
	  Ek(a, d);
	  return a;
	}
	function gl(a, b, c, d) {
	  var e = b.current,
	    f = L(),
	    g = lh(e);
	  c = el$1(c);
	  null === b.context ? b.context = c : b.pendingContext = c;
	  b = ch(f, g);
	  b.payload = {
	    element: a
	  };
	  d = void 0 === d ? null : d;
	  null !== d && (b.callback = d);
	  a = dh(e, b, g);
	  null !== a && (mh(a, e, g, f), eh(a, e, g));
	  return g;
	}
	function hl(a) {
	  a = a.current;
	  if (!a.child) return null;
	  switch (a.child.tag) {
	    case 5:
	      return a.child.stateNode;
	    default:
	      return a.child.stateNode;
	  }
	}
	function il(a, b) {
	  a = a.memoizedState;
	  if (null !== a && null !== a.dehydrated) {
	    var c = a.retryLane;
	    a.retryLane = 0 !== c && c < b ? c : b;
	  }
	}
	function jl(a, b) {
	  il(a, b);
	  (a = a.alternate) && il(a, b);
	}
	function kl() {
	  return null;
	}
	var ll = "function" === typeof reportError ? reportError : function (a) {
	  console.error(a);
	};
	function ml(a) {
	  this._internalRoot = a;
	}
	nl.prototype.render = ml.prototype.render = function (a) {
	  var b = this._internalRoot;
	  if (null === b) throw Error(p$4(409));
	  gl(a, b, null, null);
	};
	nl.prototype.unmount = ml.prototype.unmount = function () {
	  var a = this._internalRoot;
	  if (null !== a) {
	    this._internalRoot = null;
	    var b = a.containerInfo;
	    Sk(function () {
	      gl(null, a, null, null);
	    });
	    b[uf] = null;
	  }
	};
	function nl(a) {
	  this._internalRoot = a;
	}
	nl.prototype.unstable_scheduleHydration = function (a) {
	  if (a) {
	    var b = Hc();
	    a = {
	      blockedOn: null,
	      target: a,
	      priority: b
	    };
	    for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++);
	    Qc.splice(c, 0, a);
	    0 === c && Vc(a);
	  }
	};
	function ol(a) {
	  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
	}
	function pl(a) {
	  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
	}
	function ql() {}
	function rl(a, b, c, d, e) {
	  if (e) {
	    if ("function" === typeof d) {
	      var f = d;
	      d = function () {
	        var a = hl(g);
	        f.call(a);
	      };
	    }
	    var g = fl(b, d, a, 0, null, !1, !1, "", ql);
	    a._reactRootContainer = g;
	    a[uf] = g.current;
	    sf(8 === a.nodeType ? a.parentNode : a);
	    Sk();
	    return g;
	  }
	  for (; e = a.lastChild;) a.removeChild(e);
	  if ("function" === typeof d) {
	    var h = d;
	    d = function () {
	      var a = hl(k);
	      h.call(a);
	    };
	  }
	  var k = cl(a, 0, !1, null, null, !1, !1, "", ql);
	  a._reactRootContainer = k;
	  a[uf] = k.current;
	  sf(8 === a.nodeType ? a.parentNode : a);
	  Sk(function () {
	    gl(b, k, c, d);
	  });
	  return k;
	}
	function sl(a, b, c, d, e) {
	  var f = c._reactRootContainer;
	  if (f) {
	    var g = f;
	    if ("function" === typeof e) {
	      var h = e;
	      e = function () {
	        var a = hl(g);
	        h.call(a);
	      };
	    }
	    gl(b, g, a, e);
	  } else g = rl(c, b, a, e, d);
	  return hl(g);
	}
	Ec = function (a) {
	  switch (a.tag) {
	    case 3:
	      var b = a.stateNode;
	      if (b.current.memoizedState.isDehydrated) {
	        var c = tc(b.pendingLanes);
	        0 !== c && (Cc(b, c | 1), Ek(b, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
	      }
	      break;
	    case 13:
	      Sk(function () {
	        var b = Zg(a, 1);
	        if (null !== b) {
	          var c = L();
	          mh(b, a, 1, c);
	        }
	      }), jl(a, 1);
	  }
	};
	Fc = function (a) {
	  if (13 === a.tag) {
	    var b = Zg(a, 134217728);
	    if (null !== b) {
	      var c = L();
	      mh(b, a, 134217728, c);
	    }
	    jl(a, 134217728);
	  }
	};
	Gc = function (a) {
	  if (13 === a.tag) {
	    var b = lh(a),
	      c = Zg(a, b);
	    if (null !== c) {
	      var d = L();
	      mh(c, a, b, d);
	    }
	    jl(a, b);
	  }
	};
	Hc = function () {
	  return C;
	};
	Ic = function (a, b) {
	  var c = C;
	  try {
	    return C = a, b();
	  } finally {
	    C = c;
	  }
	};
	yb = function (a, b, c) {
	  switch (b) {
	    case "input":
	      bb(a, c);
	      b = c.name;
	      if ("radio" === c.type && null != b) {
	        for (c = a; c.parentNode;) c = c.parentNode;
	        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
	        for (b = 0; b < c.length; b++) {
	          var d = c[b];
	          if (d !== a && d.form === a.form) {
	            var e = Db(d);
	            if (!e) throw Error(p$4(90));
	            Wa(d);
	            bb(d, e);
	          }
	        }
	      }
	      break;
	    case "textarea":
	      ib(a, c);
	      break;
	    case "select":
	      b = c.value, null != b && fb(a, !!c.multiple, b, !1);
	  }
	};
	Gb = Rk;
	Hb = Sk;
	var tl = {
	    usingClientEntryPoint: !1,
	    Events: [Cb, ue, Db, Eb, Fb, Rk]
	  },
	  ul = {
	    findFiberByHostInstance: Wc,
	    bundleType: 0,
	    version: "18.2.0",
	    rendererPackageName: "react-dom"
	  };
	var vl = {
	  bundleType: ul.bundleType,
	  version: ul.version,
	  rendererPackageName: ul.rendererPackageName,
	  rendererConfig: ul.rendererConfig,
	  overrideHookState: null,
	  overrideHookStateDeletePath: null,
	  overrideHookStateRenamePath: null,
	  overrideProps: null,
	  overridePropsDeletePath: null,
	  overridePropsRenamePath: null,
	  setErrorHandler: null,
	  setSuspenseHandler: null,
	  scheduleUpdate: null,
	  currentDispatcherRef: ua.ReactCurrentDispatcher,
	  findHostInstanceByFiber: function (a) {
	    a = Zb(a);
	    return null === a ? null : a.stateNode;
	  },
	  findFiberByHostInstance: ul.findFiberByHostInstance || kl,
	  findHostInstancesForRefresh: null,
	  scheduleRefresh: null,
	  scheduleRoot: null,
	  setRefreshHandler: null,
	  getCurrentFiber: null,
	  reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
	};
	if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
	  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	  if (!wl.isDisabled && wl.supportsFiber) try {
	    kc = wl.inject(vl), lc = wl;
	  } catch (a) {}
	}
	reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
	reactDom_production_min.createPortal = function (a, b) {
	  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
	  if (!ol(b)) throw Error(p$4(200));
	  return dl(a, b, null, c);
	};
	reactDom_production_min.createRoot = function (a, b) {
	  if (!ol(a)) throw Error(p$4(299));
	  var c = !1,
	    d = "",
	    e = ll;
	  null !== b && void 0 !== b && (!0 === b.unstable_strictMode && (c = !0), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
	  b = cl(a, 1, !1, null, null, c, !1, d, e);
	  a[uf] = b.current;
	  sf(8 === a.nodeType ? a.parentNode : a);
	  return new ml(b);
	};
	reactDom_production_min.findDOMNode = function (a) {
	  if (null == a) return null;
	  if (1 === a.nodeType) return a;
	  var b = a._reactInternals;
	  if (void 0 === b) {
	    if ("function" === typeof a.render) throw Error(p$4(188));
	    a = Object.keys(a).join(",");
	    throw Error(p$4(268, a));
	  }
	  a = Zb(b);
	  a = null === a ? null : a.stateNode;
	  return a;
	};
	reactDom_production_min.flushSync = function (a) {
	  return Sk(a);
	};
	reactDom_production_min.hydrate = function (a, b, c) {
	  if (!pl(b)) throw Error(p$4(200));
	  return sl(null, a, b, !0, c);
	};
	reactDom_production_min.hydrateRoot = function (a, b, c) {
	  if (!ol(a)) throw Error(p$4(405));
	  var d = null != c && c.hydratedSources || null,
	    e = !1,
	    f = "",
	    g = ll;
	  null !== c && void 0 !== c && (!0 === c.unstable_strictMode && (e = !0), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
	  b = fl(b, null, a, 1, null != c ? c : null, e, !1, f, g);
	  a[uf] = b.current;
	  sf(a);
	  if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(c, e);
	  return new nl(b);
	};
	reactDom_production_min.render = function (a, b, c) {
	  if (!pl(b)) throw Error(p$4(200));
	  return sl(null, a, b, !1, c);
	};
	reactDom_production_min.unmountComponentAtNode = function (a) {
	  if (!pl(a)) throw Error(p$4(40));
	  return a._reactRootContainer ? (Sk(function () {
	    sl(null, null, a, !1, function () {
	      a._reactRootContainer = null;
	      a[uf] = null;
	    });
	  }), !0) : !1;
	};
	reactDom_production_min.unstable_batchedUpdates = Rk;
	reactDom_production_min.unstable_renderSubtreeIntoContainer = function (a, b, c, d) {
	  if (!pl(c)) throw Error(p$4(200));
	  if (null == a || void 0 === a._reactInternals) throw Error(p$4(38));
	  return sl(a, b, c, !1, d);
	};
	reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";

	function checkDCE() {
	  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
	    return;
	  }
	  try {
	    // Verify that the code above has been dead code eliminated (DCE'd).
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    // DevTools shouldn't crash React, no matter what.
	    // We should still report in case we break this code.
	    console.error(err);
	  }
	}
	{
	  // DCE check should happen before ReactDOM bundle executes so that
	  // DevTools can report bad minification during injection.
	  checkDCE();
	  reactDom.exports = reactDom_production_min;
	}
	var reactDomExports = reactDom.exports;
	var ReactDOM = /*@__PURE__*/getDefaultExportFromCjs(reactDomExports);

	var createRoot;
	var m$3 = reactDomExports;
	{
	  createRoot = client.createRoot = m$3.createRoot;
	  client.hydrateRoot = m$3.hydrateRoot;
	}

	var shim = {exports: {}};

	var useSyncExternalStoreShim_production_min = {};

	/**
	 * @license React
	 * use-sync-external-store-shim.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var e$2 = reactExports;
	function h$3(a, b) {
	  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
	}
	var k$2 = "function" === typeof Object.is ? Object.is : h$3,
	  l$2 = e$2.useState,
	  m$2 = e$2.useEffect,
	  n$3 = e$2.useLayoutEffect,
	  p$3 = e$2.useDebugValue;
	function q$3(a, b) {
	  var d = b(),
	    f = l$2({
	      inst: {
	        value: d,
	        getSnapshot: b
	      }
	    }),
	    c = f[0].inst,
	    g = f[1];
	  n$3(function () {
	    c.value = d;
	    c.getSnapshot = b;
	    r$2(c) && g({
	      inst: c
	    });
	  }, [a, d, b]);
	  m$2(function () {
	    r$2(c) && g({
	      inst: c
	    });
	    return a(function () {
	      r$2(c) && g({
	        inst: c
	      });
	    });
	  }, [a]);
	  p$3(d);
	  return d;
	}
	function r$2(a) {
	  var b = a.getSnapshot;
	  a = a.value;
	  try {
	    var d = b();
	    return !k$2(a, d);
	  } catch (f) {
	    return !0;
	  }
	}
	function t$3(a, b) {
	  return b();
	}
	var u$2 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t$3 : q$3;
	useSyncExternalStoreShim_production_min.useSyncExternalStore = void 0 !== e$2.useSyncExternalStore ? e$2.useSyncExternalStore : u$2;

	{
	  shim.exports = useSyncExternalStoreShim_production_min;
	}
	var shimExports = shim.exports;

	var withSelector = {exports: {}};

	var withSelector_production_min = {};

	/**
	 * @license React
	 * use-sync-external-store-shim/with-selector.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var h$2 = reactExports,
	  n$2 = shimExports;
	function p$2(a, b) {
	  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
	}
	var q$2 = "function" === typeof Object.is ? Object.is : p$2,
	  r$1 = n$2.useSyncExternalStore,
	  t$2 = h$2.useRef,
	  u$1 = h$2.useEffect,
	  v$2 = h$2.useMemo,
	  w$1 = h$2.useDebugValue;
	withSelector_production_min.useSyncExternalStoreWithSelector = function (a, b, e, l, g) {
	  var c = t$2(null);
	  if (null === c.current) {
	    var f = {
	      hasValue: !1,
	      value: null
	    };
	    c.current = f;
	  } else f = c.current;
	  c = v$2(function () {
	    function a(a) {
	      if (!c) {
	        c = !0;
	        d = a;
	        a = l(a);
	        if (void 0 !== g && f.hasValue) {
	          var b = f.value;
	          if (g(b, a)) return k = b;
	        }
	        return k = a;
	      }
	      b = k;
	      if (q$2(d, a)) return b;
	      var e = l(a);
	      if (void 0 !== g && g(b, e)) return b;
	      d = a;
	      return k = e;
	    }
	    var c = !1,
	      d,
	      k,
	      m = void 0 === e ? null : e;
	    return [function () {
	      return a(b());
	    }, null === m ? void 0 : function () {
	      return a(m());
	    }];
	  }, [b, e, l, g]);
	  var d = r$1(a, c[0], c[1]);
	  u$1(function () {
	    f.hasValue = !0;
	    f.value = d;
	  }, [d]);
	  w$1(d);
	  return d;
	};

	{
	  withSelector.exports = withSelector_production_min;
	}
	var withSelectorExports = withSelector.exports;

	// Default to a dummy "batch" implementation that just runs the callback
	function defaultNoopBatch(callback) {
	  callback();
	}
	let batch = defaultNoopBatch; // Allow injecting another batching function later

	const setBatch = newBatch => batch = newBatch; // Supply a getter just to skip dealing with ESM bindings

	const getBatch = () => batch;

	const ContextKey = Symbol.for(`react-redux-context`);
	const gT = typeof globalThis !== "undefined" ? globalThis : /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
	{};
	function getContext() {
	  var _gT$ContextKey;
	  if (!reactExports.createContext) return {};
	  const contextMap = (_gT$ContextKey = gT[ContextKey]) != null ? _gT$ContextKey : gT[ContextKey] = new Map();
	  let realContext = contextMap.get(reactExports.createContext);
	  if (!realContext) {
	    realContext = reactExports.createContext(null);
	    contextMap.set(reactExports.createContext, realContext);
	  }
	  return realContext;
	}
	const ReactReduxContext = /*#__PURE__*/getContext();

	/**
	 * Hook factory, which creates a `useReduxContext` hook bound to a given context. This is a low-level
	 * hook that you should usually not need to call directly.
	 *
	 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
	 * @returns {Function} A `useReduxContext` hook bound to the specified context.
	 */
	function createReduxContextHook(context = ReactReduxContext) {
	  return function useReduxContext() {
	    const contextValue = reactExports.useContext(context);
	    return contextValue;
	  };
	}
	/**
	 * A hook to access the value of the `ReactReduxContext`. This is a low-level
	 * hook that you should usually not need to call directly.
	 *
	 * @returns {any} the value of the `ReactReduxContext`
	 *
	 * @example
	 *
	 * import React from 'react'
	 * import { useReduxContext } from 'react-redux'
	 *
	 * export const CounterComponent = () => {
	 *   const { store } = useReduxContext()
	 *   return <div>{store.getState()}</div>
	 * }
	 */

	const useReduxContext = /*#__PURE__*/createReduxContextHook();

	const notInitialized = () => {
	  throw new Error('uSES not initialized!');
	};

	let useSyncExternalStoreWithSelector = notInitialized;
	const initializeUseSelector = fn => {
	  useSyncExternalStoreWithSelector = fn;
	};
	const refEquality = (a, b) => a === b;
	/**
	 * Hook factory, which creates a `useSelector` hook bound to a given context.
	 *
	 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
	 * @returns {Function} A `useSelector` hook bound to the specified context.
	 */

	function createSelectorHook(context = ReactReduxContext) {
	  const useReduxContext$1 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
	  return function useSelector(selector, equalityFnOrOptions = {}) {
	    const {
	      equalityFn = refEquality,
	      stabilityCheck = undefined,
	      noopCheck = undefined
	    } = typeof equalityFnOrOptions === 'function' ? {
	      equalityFn: equalityFnOrOptions
	    } : equalityFnOrOptions;
	    const {
	      store,
	      subscription,
	      getServerState,
	      stabilityCheck: globalStabilityCheck,
	      noopCheck: globalNoopCheck
	    } = useReduxContext$1();
	    reactExports.useRef(true);
	    const wrappedSelector = reactExports.useCallback({
	      [selector.name](state) {
	        const selected = selector(state);
	        return selected;
	      }
	    }[selector.name], [selector, globalStabilityCheck, stabilityCheck]);
	    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store.getState, getServerState || store.getState, wrappedSelector, equalityFn);
	    reactExports.useDebugValue(selectedState);
	    return selectedState;
	  };
	}
	/**
	 * A hook to access the redux store's state. This hook takes a selector function
	 * as an argument. The selector is called with the store state.
	 *
	 * This hook takes an optional equality comparison function as the second parameter
	 * that allows you to customize the way the selected state is compared to determine
	 * whether the component needs to be re-rendered.
	 *
	 * @param {Function} selector the selector function
	 * @param {Function=} equalityFn the function that will be used to determine equality
	 *
	 * @returns {any} the selected state
	 *
	 * @example
	 *
	 * import React from 'react'
	 * import { useSelector } from 'react-redux'
	 *
	 * export const CounterComponent = () => {
	 *   const counter = useSelector(state => state.counter)
	 *   return <div>{counter}</div>
	 * }
	 */

	const useSelector = /*#__PURE__*/createSelectorHook();

	var reactIs$1 = {exports: {}};

	var reactIs_production_min$1 = {};

	/** @license React v16.13.1
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var b$1 = "function" === typeof Symbol && Symbol.for,
	  c$1 = b$1 ? Symbol.for("react.element") : 60103,
	  d$1 = b$1 ? Symbol.for("react.portal") : 60106,
	  e$1 = b$1 ? Symbol.for("react.fragment") : 60107,
	  f$1 = b$1 ? Symbol.for("react.strict_mode") : 60108,
	  g$1 = b$1 ? Symbol.for("react.profiler") : 60114,
	  h$1 = b$1 ? Symbol.for("react.provider") : 60109,
	  k$1 = b$1 ? Symbol.for("react.context") : 60110,
	  l$1 = b$1 ? Symbol.for("react.async_mode") : 60111,
	  m$1 = b$1 ? Symbol.for("react.concurrent_mode") : 60111,
	  n$1 = b$1 ? Symbol.for("react.forward_ref") : 60112,
	  p$1 = b$1 ? Symbol.for("react.suspense") : 60113,
	  q$1 = b$1 ? Symbol.for("react.suspense_list") : 60120,
	  r = b$1 ? Symbol.for("react.memo") : 60115,
	  t$1 = b$1 ? Symbol.for("react.lazy") : 60116,
	  v$1 = b$1 ? Symbol.for("react.block") : 60121,
	  w = b$1 ? Symbol.for("react.fundamental") : 60117,
	  x = b$1 ? Symbol.for("react.responder") : 60118,
	  y = b$1 ? Symbol.for("react.scope") : 60119;
	function z(a) {
	  if ("object" === typeof a && null !== a) {
	    var u = a.$$typeof;
	    switch (u) {
	      case c$1:
	        switch (a = a.type, a) {
	          case l$1:
	          case m$1:
	          case e$1:
	          case g$1:
	          case f$1:
	          case p$1:
	            return a;
	          default:
	            switch (a = a && a.$$typeof, a) {
	              case k$1:
	              case n$1:
	              case t$1:
	              case r:
	              case h$1:
	                return a;
	              default:
	                return u;
	            }
	        }
	      case d$1:
	        return u;
	    }
	  }
	}
	function A(a) {
	  return z(a) === m$1;
	}
	reactIs_production_min$1.AsyncMode = l$1;
	reactIs_production_min$1.ConcurrentMode = m$1;
	reactIs_production_min$1.ContextConsumer = k$1;
	reactIs_production_min$1.ContextProvider = h$1;
	reactIs_production_min$1.Element = c$1;
	reactIs_production_min$1.ForwardRef = n$1;
	reactIs_production_min$1.Fragment = e$1;
	reactIs_production_min$1.Lazy = t$1;
	reactIs_production_min$1.Memo = r;
	reactIs_production_min$1.Portal = d$1;
	reactIs_production_min$1.Profiler = g$1;
	reactIs_production_min$1.StrictMode = f$1;
	reactIs_production_min$1.Suspense = p$1;
	reactIs_production_min$1.isAsyncMode = function (a) {
	  return A(a) || z(a) === l$1;
	};
	reactIs_production_min$1.isConcurrentMode = A;
	reactIs_production_min$1.isContextConsumer = function (a) {
	  return z(a) === k$1;
	};
	reactIs_production_min$1.isContextProvider = function (a) {
	  return z(a) === h$1;
	};
	reactIs_production_min$1.isElement = function (a) {
	  return "object" === typeof a && null !== a && a.$$typeof === c$1;
	};
	reactIs_production_min$1.isForwardRef = function (a) {
	  return z(a) === n$1;
	};
	reactIs_production_min$1.isFragment = function (a) {
	  return z(a) === e$1;
	};
	reactIs_production_min$1.isLazy = function (a) {
	  return z(a) === t$1;
	};
	reactIs_production_min$1.isMemo = function (a) {
	  return z(a) === r;
	};
	reactIs_production_min$1.isPortal = function (a) {
	  return z(a) === d$1;
	};
	reactIs_production_min$1.isProfiler = function (a) {
	  return z(a) === g$1;
	};
	reactIs_production_min$1.isStrictMode = function (a) {
	  return z(a) === f$1;
	};
	reactIs_production_min$1.isSuspense = function (a) {
	  return z(a) === p$1;
	};
	reactIs_production_min$1.isValidElementType = function (a) {
	  return "string" === typeof a || "function" === typeof a || a === e$1 || a === m$1 || a === g$1 || a === f$1 || a === p$1 || a === q$1 || "object" === typeof a && null !== a && (a.$$typeof === t$1 || a.$$typeof === r || a.$$typeof === h$1 || a.$$typeof === k$1 || a.$$typeof === n$1 || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v$1);
	};
	reactIs_production_min$1.typeOf = z;

	{
	  reactIs$1.exports = reactIs_production_min$1;
	}
	var reactIsExports = reactIs$1.exports;

	var reactIs = reactIsExports;
	var FORWARD_REF_STATICS = {
	  '$$typeof': true,
	  render: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true
	};
	var MEMO_STATICS = {
	  '$$typeof': true,
	  compare: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true,
	  type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

	var reactIs_production_min = {};

	/**
	 * @license React
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var b = Symbol.for("react.element"),
	  c = Symbol.for("react.portal"),
	  d = Symbol.for("react.fragment"),
	  e = Symbol.for("react.strict_mode"),
	  f = Symbol.for("react.profiler"),
	  g = Symbol.for("react.provider"),
	  h = Symbol.for("react.context"),
	  k = Symbol.for("react.server_context"),
	  l = Symbol.for("react.forward_ref"),
	  m = Symbol.for("react.suspense"),
	  n = Symbol.for("react.suspense_list"),
	  p = Symbol.for("react.memo"),
	  q = Symbol.for("react.lazy"),
	  t = Symbol.for("react.offscreen"),
	  u;
	u = Symbol.for("react.module.reference");
	function v(a) {
	  if ("object" === typeof a && null !== a) {
	    var r = a.$$typeof;
	    switch (r) {
	      case b:
	        switch (a = a.type, a) {
	          case d:
	          case f:
	          case e:
	          case m:
	          case n:
	            return a;
	          default:
	            switch (a = a && a.$$typeof, a) {
	              case k:
	              case h:
	              case l:
	              case q:
	              case p:
	              case g:
	                return a;
	              default:
	                return r;
	            }
	        }
	      case c:
	        return r;
	    }
	  }
	}
	reactIs_production_min.ContextConsumer = h;
	reactIs_production_min.ContextProvider = g;
	reactIs_production_min.Element = b;
	reactIs_production_min.ForwardRef = l;
	reactIs_production_min.Fragment = d;
	reactIs_production_min.Lazy = q;
	reactIs_production_min.Memo = p;
	reactIs_production_min.Portal = c;
	reactIs_production_min.Profiler = f;
	reactIs_production_min.StrictMode = e;
	reactIs_production_min.Suspense = m;
	reactIs_production_min.SuspenseList = n;
	reactIs_production_min.isAsyncMode = function () {
	  return !1;
	};
	reactIs_production_min.isConcurrentMode = function () {
	  return !1;
	};
	reactIs_production_min.isContextConsumer = function (a) {
	  return v(a) === h;
	};
	reactIs_production_min.isContextProvider = function (a) {
	  return v(a) === g;
	};
	reactIs_production_min.isElement = function (a) {
	  return "object" === typeof a && null !== a && a.$$typeof === b;
	};
	reactIs_production_min.isForwardRef = function (a) {
	  return v(a) === l;
	};
	reactIs_production_min.isFragment = function (a) {
	  return v(a) === d;
	};
	reactIs_production_min.isLazy = function (a) {
	  return v(a) === q;
	};
	reactIs_production_min.isMemo = function (a) {
	  return v(a) === p;
	};
	reactIs_production_min.isPortal = function (a) {
	  return v(a) === c;
	};
	reactIs_production_min.isProfiler = function (a) {
	  return v(a) === f;
	};
	reactIs_production_min.isStrictMode = function (a) {
	  return v(a) === e;
	};
	reactIs_production_min.isSuspense = function (a) {
	  return v(a) === m;
	};
	reactIs_production_min.isSuspenseList = function (a) {
	  return v(a) === n;
	};
	reactIs_production_min.isValidElementType = function (a) {
	  return "string" === typeof a || "function" === typeof a || a === d || a === f || a === e || a === m || a === n || a === t || "object" === typeof a && null !== a && (a.$$typeof === q || a.$$typeof === p || a.$$typeof === g || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u || void 0 !== a.getModuleId) ? !0 : !1;
	};
	reactIs_production_min.typeOf = v;

	// well as nesting subscriptions of descendant components, so that we can ensure the
	// ancestor components re-render before descendants

	function createListenerCollection() {
	  const batch = getBatch();
	  let first = null;
	  let last = null;
	  return {
	    clear() {
	      first = null;
	      last = null;
	    },
	    notify() {
	      batch(() => {
	        let listener = first;
	        while (listener) {
	          listener.callback();
	          listener = listener.next;
	        }
	      });
	    },
	    get() {
	      let listeners = [];
	      let listener = first;
	      while (listener) {
	        listeners.push(listener);
	        listener = listener.next;
	      }
	      return listeners;
	    },
	    subscribe(callback) {
	      let isSubscribed = true;
	      let listener = last = {
	        callback,
	        next: null,
	        prev: last
	      };
	      if (listener.prev) {
	        listener.prev.next = listener;
	      } else {
	        first = listener;
	      }
	      return function unsubscribe() {
	        if (!isSubscribed || first === null) return;
	        isSubscribed = false;
	        if (listener.next) {
	          listener.next.prev = listener.prev;
	        } else {
	          last = listener.prev;
	        }
	        if (listener.prev) {
	          listener.prev.next = listener.next;
	        } else {
	          first = listener.next;
	        }
	      };
	    }
	  };
	}
	const nullListeners = {
	  notify() {},
	  get: () => []
	};
	function createSubscription(store, parentSub) {
	  let unsubscribe;
	  let listeners = nullListeners; // Reasons to keep the subscription active

	  let subscriptionsAmount = 0; // Is this specific subscription subscribed (or only nested ones?)

	  let selfSubscribed = false;
	  function addNestedSub(listener) {
	    trySubscribe();
	    const cleanupListener = listeners.subscribe(listener); // cleanup nested sub

	    let removed = false;
	    return () => {
	      if (!removed) {
	        removed = true;
	        cleanupListener();
	        tryUnsubscribe();
	      }
	    };
	  }
	  function notifyNestedSubs() {
	    listeners.notify();
	  }
	  function handleChangeWrapper() {
	    if (subscription.onStateChange) {
	      subscription.onStateChange();
	    }
	  }
	  function isSubscribed() {
	    return selfSubscribed;
	  }
	  function trySubscribe() {
	    subscriptionsAmount++;
	    if (!unsubscribe) {
	      unsubscribe = store.subscribe(handleChangeWrapper);
	      listeners = createListenerCollection();
	    }
	  }
	  function tryUnsubscribe() {
	    subscriptionsAmount--;
	    if (unsubscribe && subscriptionsAmount === 0) {
	      unsubscribe();
	      unsubscribe = undefined;
	      listeners.clear();
	      listeners = nullListeners;
	    }
	  }
	  function trySubscribeSelf() {
	    if (!selfSubscribed) {
	      selfSubscribed = true;
	      trySubscribe();
	    }
	  }
	  function tryUnsubscribeSelf() {
	    if (selfSubscribed) {
	      selfSubscribed = false;
	      tryUnsubscribe();
	    }
	  }
	  const subscription = {
	    addNestedSub,
	    notifyNestedSubs,
	    handleChangeWrapper,
	    isSubscribed,
	    trySubscribe: trySubscribeSelf,
	    tryUnsubscribe: tryUnsubscribeSelf,
	    getListeners: () => listeners
	  };
	  return subscription;
	}

	// To get around it, we can conditionally useEffect on the server (no-op) and
	// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
	// subscription callback always has the selector from the latest render commit
	// available, otherwise a store update may happen between render and the effect,
	// which may cause missed updates; we also must ensure the store subscription
	// is created synchronously, otherwise a store update may occur before the
	// subscription is created and an inconsistent state may be observed
	// Matches logic in React's `shared/ExecutionEnvironment` file

	const canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
	const useIsomorphicLayoutEffect = canUseDOM ? reactExports.useLayoutEffect : reactExports.useEffect;

	function Provider({
	  store,
	  context,
	  children,
	  serverState,
	  stabilityCheck = 'once',
	  noopCheck = 'once'
	}) {
	  const contextValue = reactExports.useMemo(() => {
	    const subscription = createSubscription(store);
	    return {
	      store,
	      subscription,
	      getServerState: serverState ? () => serverState : undefined,
	      stabilityCheck,
	      noopCheck
	    };
	  }, [store, serverState, stabilityCheck, noopCheck]);
	  const previousState = reactExports.useMemo(() => store.getState(), [store]);
	  useIsomorphicLayoutEffect(() => {
	    const {
	      subscription
	    } = contextValue;
	    subscription.onStateChange = subscription.notifyNestedSubs;
	    subscription.trySubscribe();
	    if (previousState !== store.getState()) {
	      subscription.notifyNestedSubs();
	    }
	    return () => {
	      subscription.tryUnsubscribe();
	      subscription.onStateChange = undefined;
	    };
	  }, [contextValue, previousState]);
	  const Context = context || ReactReduxContext; // @ts-ignore 'AnyAction' is assignable to the constraint of type 'A', but 'A' could be instantiated with a different subtype

	  return /*#__PURE__*/reactExports.createElement(Context.Provider, {
	    value: contextValue
	  }, children);
	}

	/**
	 * Hook factory, which creates a `useStore` hook bound to a given context.
	 *
	 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
	 * @returns {Function} A `useStore` hook bound to the specified context.
	 */

	function createStoreHook(context = ReactReduxContext) {
	  const useReduxContext$1 =
	  // @ts-ignore
	  context === ReactReduxContext ? useReduxContext :
	  // @ts-ignore
	  createReduxContextHook(context);
	  return function useStore() {
	    const {
	      store
	    } = useReduxContext$1(); // @ts-ignore

	    return store;
	  };
	}
	/**
	 * A hook to access the redux store.
	 *
	 * @returns {any} the redux store
	 *
	 * @example
	 *
	 * import React from 'react'
	 * import { useStore } from 'react-redux'
	 *
	 * export const ExampleComponent = () => {
	 *   const store = useStore()
	 *   return <div>{store.getState()}</div>
	 * }
	 */

	const useStore = /*#__PURE__*/createStoreHook();

	/**
	 * Hook factory, which creates a `useDispatch` hook bound to a given context.
	 *
	 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
	 * @returns {Function} A `useDispatch` hook bound to the specified context.
	 */

	function createDispatchHook(context = ReactReduxContext) {
	  const useStore$1 =
	  // @ts-ignore
	  context === ReactReduxContext ? useStore : createStoreHook(context);
	  return function useDispatch() {
	    const store = useStore$1(); // @ts-ignore

	    return store.dispatch;
	  };
	}
	/**
	 * A hook to access the redux `dispatch` function.
	 *
	 * @returns {any|function} redux store's `dispatch` function
	 *
	 * @example
	 *
	 * import React, { useCallback } from 'react'
	 * import { useDispatch } from 'react-redux'
	 *
	 * export const CounterComponent = ({ value }) => {
	 *   const dispatch = useDispatch()
	 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
	 *   return (
	 *     <div>
	 *       <span>{value}</span>
	 *       <button onClick={increaseCounter}>Increase counter</button>
	 *     </div>
	 *   )
	 * }
	 */

	const useDispatch = /*#__PURE__*/createDispatchHook();

	// The primary entry point assumes we're working with standard ReactDOM/RN, but
	// older versions that do not include `useSyncExternalStore` (React 16.9 - 17.x).
	// Because of that, the useSyncExternalStore compat shim is needed.
	initializeUseSelector(withSelectorExports.useSyncExternalStoreWithSelector);
	// with standard React renderers (ReactDOM, React Native)

	setBatch(reactDomExports.unstable_batchedUpdates);

	// src/utils/formatProdErrorMessage.ts
	function formatProdErrorMessage$1(code) {
	  return `Minified Redux error #${code}; visit https://redux.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
	}

	// src/utils/symbol-observable.ts
	var $$observable$1 = /* @__PURE__ */(() => typeof Symbol === "function" && Symbol.observable || "@@observable")();
	var symbol_observable_default$1 = $$observable$1;

	// src/utils/actionTypes.ts
	var randomString$1 = () => Math.random().toString(36).substring(7).split("").join(".");
	var ActionTypes$1 = {
	  INIT: `@@redux/INIT${/* @__PURE__ */randomString$1()}`,
	  REPLACE: `@@redux/REPLACE${/* @__PURE__ */randomString$1()}`,
	  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${randomString$1()}`
	};
	var actionTypes_default$1 = ActionTypes$1;

	// src/utils/isPlainObject.ts
	function isPlainObject$1(obj) {
	  if (typeof obj !== "object" || obj === null) return false;
	  let proto = obj;
	  while (Object.getPrototypeOf(proto) !== null) {
	    proto = Object.getPrototypeOf(proto);
	  }
	  return Object.getPrototypeOf(obj) === proto || Object.getPrototypeOf(obj) === null;
	}

	// src/createStore.ts
	function createStore$1(reducer, preloadedState, enhancer) {
	  if (typeof reducer !== "function") {
	    throw new Error(formatProdErrorMessage$1(2) );
	  }
	  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
	    throw new Error(formatProdErrorMessage$1(0) );
	  }
	  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
	    enhancer = preloadedState;
	    preloadedState = void 0;
	  }
	  if (typeof enhancer !== "undefined") {
	    if (typeof enhancer !== "function") {
	      throw new Error(formatProdErrorMessage$1(1) );
	    }
	    return enhancer(createStore$1)(reducer, preloadedState);
	  }
	  let currentReducer = reducer;
	  let currentState = preloadedState;
	  let currentListeners = /* @__PURE__ */new Map();
	  let nextListeners = currentListeners;
	  let listenerIdCounter = 0;
	  let isDispatching = false;
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = /* @__PURE__ */new Map();
	      currentListeners.forEach((listener, key) => {
	        nextListeners.set(key, listener);
	      });
	    }
	  }
	  function getState() {
	    if (isDispatching) {
	      throw new Error(formatProdErrorMessage$1(3) );
	    }
	    return currentState;
	  }
	  function subscribe(listener) {
	    if (typeof listener !== "function") {
	      throw new Error(formatProdErrorMessage$1(4) );
	    }
	    if (isDispatching) {
	      throw new Error(formatProdErrorMessage$1(5) );
	    }
	    let isSubscribed = true;
	    ensureCanMutateNextListeners();
	    const listenerId = listenerIdCounter++;
	    nextListeners.set(listenerId, listener);
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	      if (isDispatching) {
	        throw new Error(formatProdErrorMessage$1(6) );
	      }
	      isSubscribed = false;
	      ensureCanMutateNextListeners();
	      nextListeners.delete(listenerId);
	      currentListeners = null;
	    };
	  }
	  function dispatch(action) {
	    if (!isPlainObject$1(action)) {
	      throw new Error(formatProdErrorMessage$1(7) );
	    }
	    if (typeof action.type === "undefined") {
	      throw new Error(formatProdErrorMessage$1(8) );
	    }
	    if (typeof action.type !== "string") {
	      throw new Error(formatProdErrorMessage$1(17) );
	    }
	    if (isDispatching) {
	      throw new Error(formatProdErrorMessage$1(9) );
	    }
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	    const listeners = currentListeners = nextListeners;
	    listeners.forEach(listener => {
	      listener();
	    });
	    return action;
	  }
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== "function") {
	      throw new Error(formatProdErrorMessage$1(10) );
	    }
	    currentReducer = nextReducer;
	    dispatch({
	      type: actionTypes_default$1.REPLACE
	    });
	  }
	  function observable() {
	    const outerSubscribe = subscribe;
	    return {
	      /**
	       * The minimal observable subscription method.
	       * @param observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe(observer) {
	        if (typeof observer !== "object" || observer === null) {
	          throw new Error(formatProdErrorMessage$1(11) );
	        }
	        function observeState() {
	          const observerAsObserver = observer;
	          if (observerAsObserver.next) {
	            observerAsObserver.next(getState());
	          }
	        }
	        observeState();
	        const unsubscribe = outerSubscribe(observeState);
	        return {
	          unsubscribe
	        };
	      },
	      [symbol_observable_default$1]() {
	        return this;
	      }
	    };
	  }
	  dispatch({
	    type: actionTypes_default$1.INIT
	  });
	  const store = {
	    dispatch,
	    subscribe,
	    getState,
	    replaceReducer,
	    [symbol_observable_default$1]: observable
	  };
	  return store;
	}
	function legacy_createStore$1(reducer, preloadedState, enhancer) {
	  return createStore$1(reducer, preloadedState, enhancer);
	}
	function assertReducerShape$1(reducers) {
	  Object.keys(reducers).forEach(key => {
	    const reducer = reducers[key];
	    const initialState = reducer(void 0, {
	      type: actionTypes_default$1.INIT
	    });
	    if (typeof initialState === "undefined") {
	      throw new Error(formatProdErrorMessage$1(12) );
	    }
	    if (typeof reducer(void 0, {
	      type: actionTypes_default$1.PROBE_UNKNOWN_ACTION()
	    }) === "undefined") {
	      throw new Error(formatProdErrorMessage$1(13) );
	    }
	  });
	}
	function combineReducers$1(reducers) {
	  const reducerKeys = Object.keys(reducers);
	  const finalReducers = {};
	  for (let i = 0; i < reducerKeys.length; i++) {
	    const key = reducerKeys[i];
	    if (typeof reducers[key] === "function") {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  const finalReducerKeys = Object.keys(finalReducers);
	  let shapeAssertionError;
	  try {
	    assertReducerShape$1(finalReducers);
	  } catch (e) {
	    shapeAssertionError = e;
	  }
	  return function combination(state = {}, action) {
	    if (shapeAssertionError) {
	      throw shapeAssertionError;
	    }
	    let hasChanged = false;
	    const nextState = {};
	    for (let i = 0; i < finalReducerKeys.length; i++) {
	      const key = finalReducerKeys[i];
	      const reducer = finalReducers[key];
	      const previousStateForKey = state[key];
	      const nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === "undefined") {
	        action && action.type;
	        throw new Error(formatProdErrorMessage$1(14) );
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
	    return hasChanged ? nextState : state;
	  };
	}

	// src/compose.ts
	function compose$3(...funcs) {
	  if (funcs.length === 0) {
	    return arg => arg;
	  }
	  if (funcs.length === 1) {
	    return funcs[0];
	  }
	  return funcs.reduce((a, b) => (...args) => a(b(...args)));
	}

	// src/applyMiddleware.ts
	function applyMiddleware$1(...middlewares) {
	  return createStore2 => (reducer, preloadedState) => {
	    const store = createStore2(reducer, preloadedState);
	    let dispatch = () => {
	      throw new Error(formatProdErrorMessage$1(15) );
	    };
	    const middlewareAPI = {
	      getState: store.getState,
	      dispatch: (action, ...args) => dispatch(action, ...args)
	    };
	    const chain = middlewares.map(middleware => middleware(middlewareAPI));
	    dispatch = compose$3(...chain)(store.dispatch);
	    return {
	      ...store,
	      dispatch
	    };
	  };
	}

	/** A function that accepts a potential "extra argument" value to be injected later,
	 * and returns an instance of the thunk middleware that uses that value
	 */
	function createThunkMiddleware(extraArgument) {
	  // Standard Redux middleware definition pattern:
	  // See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware
	  var middleware = function middleware(_ref) {
	    var dispatch = _ref.dispatch,
	      getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        // The thunk middleware looks for any functions that were passed to `store.dispatch`.
	        // If this "action" is really a function, call it and return the result.
	        if (typeof action === 'function') {
	          // Inject the store's `dispatch` and `getState` methods, as well as any "extra arg"
	          return action(dispatch, getState, extraArgument);
	        } // Otherwise, pass the action down the middleware chain as usual

	        return next(action);
	      };
	    };
	  };
	  return middleware;
	}
	var thunk = createThunkMiddleware(); // Attach the factory function so users can create a customized version
	// with whatever "extra arg" they want to inject into their thunks

	thunk.withExtraArgument = createThunkMiddleware;

	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
	  for (var name in all) __defProp(target, name, {
	    get: all[name],
	    enumerable: true
	  });
	};
	var __copyProps = (to, from, except, desc) => {
	  if (from && typeof from === "object" || typeof from === "function") {
	    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
	      get: () => from[key],
	      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
	    });
	  }
	  return to;
	};
	var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
	  value: true
	}), mod);

	// src/index.ts
	var src_exports = {};
	__export(src_exports, {
	  __DO_NOT_USE__ActionTypes: () => actionTypes_default,
	  applyMiddleware: () => applyMiddleware,
	  bindActionCreators: () => bindActionCreators,
	  combineReducers: () => combineReducers,
	  compose: () => compose$2,
	  createStore: () => createStore,
	  isAction: () => isAction,
	  isPlainObject: () => isPlainObject,
	  legacy_createStore: () => legacy_createStore
	});
	var redux = __toCommonJS(src_exports);

	// src/utils/formatProdErrorMessage.ts
	function formatProdErrorMessage(code) {
	  return `Minified Redux error #${code}; visit https://redux.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
	}

	// src/utils/symbol-observable.ts
	var $$observable = /* @__PURE__ */(() => typeof Symbol === "function" && Symbol.observable || "@@observable")();
	var symbol_observable_default = $$observable;

	// src/utils/actionTypes.ts
	var randomString = () => Math.random().toString(36).substring(7).split("").join(".");
	var ActionTypes = {
	  INIT: `@@redux/INIT${/* @__PURE__ */randomString()}`,
	  REPLACE: `@@redux/REPLACE${/* @__PURE__ */randomString()}`,
	  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
	};
	var actionTypes_default = ActionTypes;

	// src/utils/isPlainObject.ts
	function isPlainObject(obj) {
	  if (typeof obj !== "object" || obj === null) return false;
	  let proto = obj;
	  while (Object.getPrototypeOf(proto) !== null) {
	    proto = Object.getPrototypeOf(proto);
	  }
	  return Object.getPrototypeOf(obj) === proto || Object.getPrototypeOf(obj) === null;
	}

	// src/createStore.ts
	function createStore(reducer, preloadedState, enhancer) {
	  if (typeof reducer !== "function") {
	    throw new Error(formatProdErrorMessage(2) );
	  }
	  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
	    throw new Error(formatProdErrorMessage(0) );
	  }
	  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
	    enhancer = preloadedState;
	    preloadedState = void 0;
	  }
	  if (typeof enhancer !== "undefined") {
	    if (typeof enhancer !== "function") {
	      throw new Error(formatProdErrorMessage(1) );
	    }
	    return enhancer(createStore)(reducer, preloadedState);
	  }
	  let currentReducer = reducer;
	  let currentState = preloadedState;
	  let currentListeners = /* @__PURE__ */new Map();
	  let nextListeners = currentListeners;
	  let listenerIdCounter = 0;
	  let isDispatching = false;
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = /* @__PURE__ */new Map();
	      currentListeners.forEach((listener, key) => {
	        nextListeners.set(key, listener);
	      });
	    }
	  }
	  function getState() {
	    if (isDispatching) {
	      throw new Error(formatProdErrorMessage(3) );
	    }
	    return currentState;
	  }
	  function subscribe(listener) {
	    if (typeof listener !== "function") {
	      throw new Error(formatProdErrorMessage(4) );
	    }
	    if (isDispatching) {
	      throw new Error(formatProdErrorMessage(5) );
	    }
	    let isSubscribed = true;
	    ensureCanMutateNextListeners();
	    const listenerId = listenerIdCounter++;
	    nextListeners.set(listenerId, listener);
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	      if (isDispatching) {
	        throw new Error(formatProdErrorMessage(6) );
	      }
	      isSubscribed = false;
	      ensureCanMutateNextListeners();
	      nextListeners.delete(listenerId);
	      currentListeners = null;
	    };
	  }
	  function dispatch(action) {
	    if (!isPlainObject(action)) {
	      throw new Error(formatProdErrorMessage(7) );
	    }
	    if (typeof action.type === "undefined") {
	      throw new Error(formatProdErrorMessage(8) );
	    }
	    if (typeof action.type !== "string") {
	      throw new Error(formatProdErrorMessage(17) );
	    }
	    if (isDispatching) {
	      throw new Error(formatProdErrorMessage(9) );
	    }
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	    const listeners = currentListeners = nextListeners;
	    listeners.forEach(listener => {
	      listener();
	    });
	    return action;
	  }
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== "function") {
	      throw new Error(formatProdErrorMessage(10) );
	    }
	    currentReducer = nextReducer;
	    dispatch({
	      type: actionTypes_default.REPLACE
	    });
	  }
	  function observable() {
	    const outerSubscribe = subscribe;
	    return {
	      /**
	       * The minimal observable subscription method.
	       * @param observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe(observer) {
	        if (typeof observer !== "object" || observer === null) {
	          throw new Error(formatProdErrorMessage(11) );
	        }
	        function observeState() {
	          const observerAsObserver = observer;
	          if (observerAsObserver.next) {
	            observerAsObserver.next(getState());
	          }
	        }
	        observeState();
	        const unsubscribe = outerSubscribe(observeState);
	        return {
	          unsubscribe
	        };
	      },
	      [symbol_observable_default]() {
	        return this;
	      }
	    };
	  }
	  dispatch({
	    type: actionTypes_default.INIT
	  });
	  const store = {
	    dispatch,
	    subscribe,
	    getState,
	    replaceReducer,
	    [symbol_observable_default]: observable
	  };
	  return store;
	}
	function legacy_createStore(reducer, preloadedState, enhancer) {
	  return createStore(reducer, preloadedState, enhancer);
	}
	function assertReducerShape(reducers) {
	  Object.keys(reducers).forEach(key => {
	    const reducer = reducers[key];
	    const initialState = reducer(void 0, {
	      type: actionTypes_default.INIT
	    });
	    if (typeof initialState === "undefined") {
	      throw new Error(formatProdErrorMessage(12) );
	    }
	    if (typeof reducer(void 0, {
	      type: actionTypes_default.PROBE_UNKNOWN_ACTION()
	    }) === "undefined") {
	      throw new Error(formatProdErrorMessage(13) );
	    }
	  });
	}
	function combineReducers(reducers) {
	  const reducerKeys = Object.keys(reducers);
	  const finalReducers = {};
	  for (let i = 0; i < reducerKeys.length; i++) {
	    const key = reducerKeys[i];
	    if (typeof reducers[key] === "function") {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  const finalReducerKeys = Object.keys(finalReducers);
	  let shapeAssertionError;
	  try {
	    assertReducerShape(finalReducers);
	  } catch (e) {
	    shapeAssertionError = e;
	  }
	  return function combination(state = {}, action) {
	    if (shapeAssertionError) {
	      throw shapeAssertionError;
	    }
	    let hasChanged = false;
	    const nextState = {};
	    for (let i = 0; i < finalReducerKeys.length; i++) {
	      const key = finalReducerKeys[i];
	      const reducer = finalReducers[key];
	      const previousStateForKey = state[key];
	      const nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === "undefined") {
	        action && action.type;
	        throw new Error(formatProdErrorMessage(14) );
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
	    return hasChanged ? nextState : state;
	  };
	}

	// src/bindActionCreators.ts
	function bindActionCreator(actionCreator, dispatch) {
	  return function (...args) {
	    return dispatch(actionCreator.apply(this, args));
	  };
	}
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === "function") {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	  if (typeof actionCreators !== "object" || actionCreators === null) {
	    throw new Error(formatProdErrorMessage(16) );
	  }
	  const boundActionCreators = {};
	  for (const key in actionCreators) {
	    const actionCreator = actionCreators[key];
	    if (typeof actionCreator === "function") {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

	// src/compose.ts
	function compose$2(...funcs) {
	  if (funcs.length === 0) {
	    return arg => arg;
	  }
	  if (funcs.length === 1) {
	    return funcs[0];
	  }
	  return funcs.reduce((a, b) => (...args) => a(b(...args)));
	}

	// src/applyMiddleware.ts
	function applyMiddleware(...middlewares) {
	  return createStore2 => (reducer, preloadedState) => {
	    const store = createStore2(reducer, preloadedState);
	    let dispatch = () => {
	      throw new Error(formatProdErrorMessage(15) );
	    };
	    const middlewareAPI = {
	      getState: store.getState,
	      dispatch: (action, ...args) => dispatch(action, ...args)
	    };
	    const chain = middlewares.map(middleware => middleware(middlewareAPI));
	    dispatch = compose$2(...chain)(store.dispatch);
	    return {
	      ...store,
	      dispatch
	    };
	  };
	}

	// src/utils/isAction.ts
	function isAction(action) {
	  return isPlainObject(action) && "type" in action && typeof action.type === "string";
	}

	var compose$1 = redux.compose;
	var composeWithDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
	  if (arguments.length === 0) return undefined;
	  if (typeof arguments[0] === 'object') return compose$1;
	  return compose$1.apply(null, arguments);
	};

	const ADD_TRACK_FROM_URL = "ADD_TRACK_FROM_URL";
	const CLOSE_WINAMP = "CLOSE_WINAMP";
	const OPEN_WINAMP = "OPEN_WINAMP";
	const MINIMIZE_WINAMP = "MINIMIZE_WINAMP";
	const IS_PLAYING = "IS_PLAYING";
	const IS_STOPPED = "IS_STOPPED";
	const PAUSE = "PAUSE";
	const PLAY = "PLAY";
	const SEEK_TO_PERCENT_COMPLETE = "SEEK_TO_PERCENT_COMPLETE";
	const SET_BALANCE = "SET_BALANCE";
	const SET_BAND_VALUE = "SET_BAND_VALUE";
	const SET_FOCUS = "SET_FOCUS";
	const SET_BAND_FOCUS = "SET_BAND_FOCUS";
	const SET_FOCUSED_WINDOW = "SET_FOCUSED_WINDOW";
	const SET_MEDIA = "SET_MEDIA";
	const SET_SCRUB_POSITION = "SET_SCRUB_POSITION";
	const SET_SKIN_DATA = "SET_SKIN_DATA";
	const SET_VOLUME = "SET_VOLUME";
	const START_WORKING = "START_WORKING";
	const STEP_MARQUEE = "STEP_MARQUEE";
	const STOP = "STOP";
	const STOP_WORKING = "STOP_WORKING";
	const TOGGLE_DOUBLESIZE_MODE = "TOGGLE_DOUBLESIZE_MODE";
	const SET_EQ_AUTO = "SET_EQ_AUTO";
	const SET_EQ_ON = "SET_EQ_ON";
	const SET_EQ_OFF = "SET_EQ_OFF";
	const TOGGLE_LLAMA_MODE = "TOGGLE_LLAMA_MODE";
	const TOGGLE_REPEAT = "TOGGLE_REPEAT";
	const TOGGLE_SHUFFLE = "TOGGLE_SHUFFLE";
	const TOGGLE_TIME_MODE = "TOGGLE_TIME_MODE";
	const TOGGLE_VISUALIZER_STYLE = "TOGGLE_VISUALIZER_STYLE";
	const UNSET_FOCUS = "UNSET_FOCUS";
	const UPDATE_TIME_ELAPSED = "UPDATE_TIME_ELAPSED";
	const SET_USER_MESSAGE = "SET_USER_MESSAGE";
	const UNSET_USER_MESSAGE = "UNSET_USER_MESSAGE";
	const SET_PLAYLIST_SCROLL_POSITION = "SET_PLAYLIST_SCROLL_POSITION";
	const CLICKED_TRACK = "CLICKED_TRACK";
	const CTRL_CLICKED_TRACK = "CTRL_CLICKED_TRACK";
	const SHIFT_CLICKED_TRACK = "SHIFT_CLICKED_TRACK";
	const SELECT_ALL = "SELECT_ALL";
	const SELECT_ZERO = "SELECT_ZERO";
	const INVERT_SELECTION = "INVERT_SELECTION";
	const REMOVE_ALL_TRACKS = "REMOVE_ALL_TRACKS";
	const REMOVE_TRACKS = "REMOVE_TRACKS";
	const SET_AVAILABLE_SKINS = "SET_AVAILABLE_SKINS";
	const REVERSE_LIST = "REVERSE_LIST";
	const RANDOMIZE_LIST = "RANDOMIZE_LIST";
	const SET_TRACK_ORDER = "SET_TRACK_ORDER";
	const PLAY_TRACK = "PLAY_TRACK";
	const BUFFER_TRACK = "BUFFER_TRACK";
	const DRAG_SELECTED = "DRAG_SELECTED";
	const SET_MEDIA_TAGS = "SET_MEDIA_TAGS";
	const SET_MEDIA_DURATION = "SET_MEDIA_DURATION";
	const TOGGLE_WINDOW = "TOGGLE_WINDOW";
	const CLOSE_WINDOW = "CLOSE_WINDOW";
	const MEDIA_TAG_REQUEST_INITIALIZED = "MEDIA_TAG_REQUEST_INITIALIZED";
	const MEDIA_TAG_REQUEST_FAILED = "MEDIA_TAG_REQUEST_FAILED";
	const NETWORK_CONNECTED = "NETWORK_CONNECTED";
	const NETWORK_DISCONNECTED = "NETWORK_DISCONNECTED";
	const UPDATE_WINDOW_POSITIONS = "UPDATE_WINDOW_POSITIONS";
	const WINDOW_SIZE_CHANGED = "WINDOW_SIZE_CHANGED";
	const TOGGLE_WINDOW_SHADE_MODE = "TOGGLE_WINDOW_SHADE_MODE";
	const LOADED = "LOADED";
	const SET_Z_INDEX = "SET_Z_INDEX";
	const DISABLE_MARQUEE = "DISABLE_MARQUEE";
	const SET_DUMMY_VIZ_DATA = "SET_DUMMY_VIZ_DATA";
	const LOADING = "LOADING";
	const CLOSE_REQUESTED = "CLOSE_REQUESTED";
	const LOAD_SERIALIZED_STATE = "LOAD_SERIALIZED_STATE";
	const RESET_WINDOW_SIZES = "RESET_WINDOW_SIZES";
	const BROWSER_WINDOW_SIZE_CHANGED = "BROWSER_WINDOW_SIZE_CHANGED";
	const LOAD_DEFAULT_SKIN = "LOAD_DEFAULT_SKIN";
	const ENABLE_MILKDROP = "ENABLE_MILKDROP";
	const SET_MILKDROP_DESKTOP = "SET_MILKDROP_DESKTOP";
	const GOT_BUTTERCHURN_PRESETS = "GOT_BUTTERCHURN_PRESETS";
	const GOT_BUTTERCHURN = "GOT_BUTTERCHURN";
	const RESOLVE_PRESET_AT_INDEX = "RESOLVE_PRESET_AT_INDEX";
	const SELECT_PRESET_AT_INDEX = "SELECT_PRESET_AT_INDEX";
	const TOGGLE_PRESET_OVERLAY = "TOGGLE_PRESET_OVERLAY";
	const PRESET_REQUESTED = "PRESET_REQUESTED";
	const TOGGLE_RANDOMIZE_PRESETS = "TOGGLE_RANDOMIZE_PRESETS";
	const TOGGLE_PRESET_CYCLING = "TOGGLE_PRESET_CYCLING";
	const SCHEDULE_MILKDROP_MESSAGE = "SCHEDULE_MILKDROP_MESSAGE";
	const SET_MILKDROP_FULLSCREEN = "SET_MILKDROP_FULLSCREEN";

	var images = {
		EQ_PREAMP_LINE: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAABCAYAAADpXEERAAAAE0lEQVQoU2Pcdfruf4ZRMKRDAAD1lwNjTqcaUQAAAABJRU5ErkJggg==",
		EQ_GRAPH_LINE_COLORS: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAATCAYAAABRC2cZAAAAR0lEQVQYV2O4rCT9n+F9kOJ/hvfViv8ZHkzSQCE2afxneH/HEJm49Nr0PwOYWPLIAkp0PjL4z1B41uQ/Q9QGnf8MWrPEIAQANWYwvnlToNIAAAAASUVORK5CYII="
	};
	var colors = [
		"rgb(0,0,0)",
		"rgb(24,33,41)",
		"rgb(239,49,16)",
		"rgb(206,41,16)",
		"rgb(214,90,0)",
		"rgb(214,102,0)",
		"rgb(214,115,0)",
		"rgb(198,123,8)",
		"rgb(222,165,24)",
		"rgb(214,181,33)",
		"rgb(189,222,41)",
		"rgb(148,222,33)",
		"rgb(41,206,16)",
		"rgb(50,190,16)",
		"rgb(57,181,16)",
		"rgb(49,156,8)",
		"rgb(41,148,0)",
		"rgb(24,132,8)",
		"rgb(255,255,255)",
		"rgb(214,214,222)",
		"rgb(181,189,189)",
		"rgb(160,170,175)",
		"rgb(148,156,165)",
		"rgb(150,150,150)"
	];
	var playlistStyle = {
		normal: "#00FF00",
		current: "#FFFFFF",
		normalbg: "#000000",
		selectedbg: "#0000FF",
		font: "Arial"
	};
	var baseSkin = {
		images: images,
		colors: colors,
		playlistStyle: playlistStyle
	};

	const BANDS = [
	    60, 170, 310, 600, 1000, 3000, 6000, 12000, 14000, 16000,
	];
	const WINDOWS = {
	    MAIN: "main",
	    PLAYLIST: "playlist",
	    EQUALIZER: "equalizer",
	    MILKDROP: "milkdrop",
	};
	const LOAD_STYLE = {
	    BUFFER: "BUFFER",
	    PLAY: "PLAY",
	    NONE: "NONE",
	};
	// TODO: Make this an enum?
	const MEDIA_TAG_REQUEST_STATUS = {
	    INITIALIZED: "INITIALIZED",
	    FAILED: "FAILED",
	    COMPLETE: "COMPLETE",
	    NOT_REQUESTED: "NOT_REQUESTED",
	};
	const UTF8_ELLIPSIS = "\u2026";
	const CHARACTER_WIDTH = 5;
	const WINDOW_RESIZE_SEGMENT_WIDTH = 25;
	const WINDOW_RESIZE_SEGMENT_HEIGHT = 29;
	const WINDOW_WIDTH = 275;
	const TRACK_HEIGHT = 13;
	const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
	const DEFAULT_SKIN = baseSkin;
	const VISUALIZERS = {
	    OSCILLOSCOPE: "OSCILLOSCOPE",
	    BAR: "BAR",
	    NONE: "NONE",
	    MILKDROP: "MILKDROP",
	};
	const VISUALIZER_ORDER = [
	    VISUALIZERS.BAR,
	    VISUALIZERS.OSCILLOSCOPE, // TODO: Verify the order
	    VISUALIZERS.NONE,
	];
	const TIME_MODE = {
	    ELAPSED: "ELAPSED",
	    REMAINING: "REMAINING",
	};
	// TODO: Convert to enum once we are fully Typescript
	const MEDIA_STATUS = {
	    PLAYING: "PLAYING",
	    STOPPED: "STOPPED",
	    PAUSED: "PAUSED",
	};

	function imgFromUrl(url) {
	    return new Promise((resolve, reject) => {
	        const img = new Image();
	        img.onload = () => {
	            resolve(img);
	        };
	        img.onerror = reject;
	        img.src = url;
	    });
	}
	const getTimeObj = (time) => {
	    if (time == null) {
	        // If we clean up `<MiniTime />` we don't need to do this any more.
	        return {
	            minutesFirstDigit: " ",
	            minutesSecondDigit: " ",
	            secondsFirstDigit: " ",
	            secondsSecondDigit: " ",
	        };
	    }
	    const minutes = Math.floor(time / 60);
	    const seconds = time % 60;
	    const digits = time == null
	        ? [" ", " ", " ", " "]
	        : [
	            String(Math.floor(minutes / 10)),
	            String(Math.floor(minutes % 10)),
	            String(Math.floor(seconds / 10)),
	            String(Math.floor(seconds % 10)),
	        ];
	    const [minutesFirstDigit, minutesSecondDigit, secondsFirstDigit, secondsSecondDigit,] = digits;
	    return {
	        minutesFirstDigit,
	        minutesSecondDigit,
	        secondsFirstDigit,
	        secondsSecondDigit,
	    };
	};
	const getTimeStr = (time, truncate = true) => {
	    if (time == null) {
	        return "";
	    }
	    const { minutesFirstDigit, minutesSecondDigit, secondsFirstDigit, secondsSecondDigit, } = getTimeObj(time);
	    return [
	        truncate && minutesFirstDigit === "0" ? "" : minutesFirstDigit,
	        minutesSecondDigit,
	        ":",
	        secondsFirstDigit,
	        secondsSecondDigit,
	    ].join("");
	};
	const parseViscolors = (text) => {
	    const entries = text.split("\n");
	    const regex = /^\s*(\d+)\s*,?\s*(\d+)\s*,?\s*(\d+)/;
	    const colors = [...DEFAULT_SKIN.colors];
	    entries
	        .map((line) => regex.exec(line))
	        .filter(Boolean)
	        .map((matches) => matches.slice(1, 4).join(","))
	        .map((rgb, i) => {
	        colors[i] = `rgb(${rgb})`;
	    });
	    return colors;
	};
	const SECTION_REGEX = /^\s*\[(.+?)\]\s*$/;
	const PROPERTY_REGEX = /^\s*([^;][^=]*)\s*=\s*(.*)\s*$/;
	const parseIni = (text) => {
	    let section, match;
	    return text.split(/[\r\n]+/g).reduce((data, line) => {
	        if ((match = line.match(PROPERTY_REGEX)) && section != null) {
	            const key = match[1].trim().toLowerCase();
	            const value = match[2]
	                // Ignore anything after a second `=`
	                // TODO: What if this is inside quotes or escaped?
	                .replace(/\=.*$/g, "")
	                .trim()
	                // Strip quotes
	                // TODO: What about escaped quotes?
	                // TODO: What about unbalanced quotes?
	                .replace(/(^")|("$)|(^')|('$)/g, "");
	            data[section][key] = value;
	        }
	        else if ((match = line.match(SECTION_REGEX))) {
	            section = match[1].trim().toLowerCase();
	            data[section] = {};
	        }
	        return data;
	    }, {});
	};
	const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
	function base64FromDataArray$1(dataArray) {
	    return window.btoa(Array.from(dataArray)
	        .map((byte) => String.fromCharCode(byte))
	        .join(""));
	}
	const base64FromArrayBuffer = (arrayBuffer) => {
	    return base64FromDataArray$1(new Uint8Array(arrayBuffer));
	};
	// https://stackoverflow.com/a/15832662/1263117
	function downloadURI(uri, name) {
	    const link = document.createElement("a");
	    link.download = name;
	    link.href = uri;
	    window.document.body.appendChild(link);
	    link.click();
	    window.document.body.removeChild(link);
	}
	const toPercent = (min, max, value) => (value - min) / (max - min);
	const percentToRange = (percent, min, max) => min + Math.round(percent * (max - min));
	const percentToIndex = (percent, length) => percentToRange(percent, 0, length - 1);
	const rebound = (oldMin, oldMax, newMin, newMax) => (oldValue) => percentToRange(toPercent(oldMin, oldMax, oldValue), newMin, newMax);
	// Convert an .eqf value to a 0-100
	const normalizeEqBand = rebound(1, 64, 0, 100);
	// Convert a 0-100 to an .eqf value
	const denormalizeEqBand = rebound(0, 100, 1, 64);
	// Merge a `source` object to a `target` recursively
	// TODO: The typing here is a bit of a disaster.
	function merge(target, source) {
	    const s = source;
	    const t = target;
	    // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
	    for (const key of Object.keys(s)) {
	        if (s[key] instanceof Object)
	            Object.assign(s[key], merge(t[key], s[key]));
	    }
	    // Join `target` and modified `source`
	    Object.assign(target || {}, source);
	    return target;
	}
	// Maps a value in a range (defined my min/max) to a value in an array (options).
	function segment(min, max, value, newValues) {
	    const ratio = toPercent(min, max, value);
	    /*
	    | 0 | 1 | 2 |
	    0   1   2   3
	    */
	    return newValues[percentToIndex(ratio, newValues.length)];
	}
	// https://bost.ocks.org/mike/shuffle/
	// Shuffle an array in O(n)
	function shuffle(array) {
	    const sorted = [...array];
	    let m = sorted.length;
	    // While there remain elements to shuffle…
	    while (m) {
	        // Pick a remaining element…
	        const i = Math.floor(Math.random() * m--);
	        // And swap it with the current element.
	        const val = sorted[m];
	        sorted[m] = sorted[i];
	        sorted[i] = val;
	    }
	    return sorted;
	}
	function sort(array, iteratee) {
	    return [...array].sort((a, b) => {
	        const aKey = iteratee(a);
	        const bKey = iteratee(b);
	        if (aKey < bKey) {
	            return -1;
	        }
	        else if (aKey > bKey) {
	            return 1;
	        }
	        return 0;
	    });
	}
	function moveSelected(arr, isSelected, offset) {
	    const newArr = new Array(arr.length);
	    let next = 0;
	    for (let i = 0; i < newArr.length; i++) {
	        const from = i - offset;
	        // Is a value supposed to move here?
	        if (from >= 0 && from < arr.length && isSelected(from)) {
	            newArr[i] = arr[from];
	        }
	        else {
	            while (next < arr.length && isSelected(next)) {
	                next++;
	            }
	            newArr[i] = arr[next];
	            next++;
	        }
	    }
	    return newArr;
	}
	function replaceAtIndex(arr, index, newValue) {
	    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
	}
	let counter = 0;
	function uniqueId$1() {
	    return counter++;
	}
	function objectForEach(obj, cb) {
	    Object.keys(obj).forEach((key) => cb(obj[key], key));
	}
	function objectMap(obj, cb) {
	    const modified = {};
	    Object.keys(obj).forEach((key) => (modified[key] = cb(obj[key], key)));
	    return modified;
	}
	function objectFilter(obj, predicate) {
	    // TODO: Could return the original reference if no values change
	    return Object.keys(obj).reduce((newObj, key) => {
	        if (predicate(obj[key], key)) {
	            newObj[key] = obj[key];
	        }
	        return newObj;
	    }, {});
	}
	const calculateBoundingBox = (windows) => {
	    if (windows.length === 0) {
	        return null;
	    }
	    const windowSizes = windows.map((w) => ({
	        left: w.x,
	        top: w.y,
	        bottom: w.y + w.height,
	        right: w.x + w.width,
	    }));
	    return windowSizes.reduce((b, w) => ({
	        left: Math.min(b.left, w.left),
	        top: Math.min(b.top, w.top),
	        bottom: Math.max(b.bottom, w.bottom),
	        right: Math.max(b.right, w.right),
	    }));
	};
	function findLastIndex(arr, cb) {
	    for (let i = arr.length - 1; i >= 0; i--) {
	        if (cb(arr[i])) {
	            return i;
	        }
	    }
	    return -1;
	}
	function getWindowSize$1() {
	    // Aparently this is crazy across browsers.
	    return {
	        width: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth),
	        height: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight),
	    };
	}
	function getScreenSize() {
	    return {
	        width: window.screen.width,
	        height: window.screen.height,
	    };
	}
	function getPos(e) {
	    switch (e.type) {
	        case "touchstart":
	        case "touchmove": {
	            const touch = e.targetTouches[0] ?? e.touches[0];
	            if (touch == null) {
	                // Investigating https://github.com/captbaritone/webamp/issues/1105
	                throw new Error("Unexpected touch event with zero touch targets.");
	            }
	            return touch;
	        }
	        case "mousedown":
	        case "mousemove": {
	            return e;
	        }
	        default:
	            throw new Error(`Unexpected event type: ${e.type}`);
	    }
	}
	function getX(e) {
	    return getPos(e).clientX;
	}
	function getY(e) {
	    return getPos(e).clientY;
	}
	function weakMapMemoize(func) {
	    const cache = new WeakMap();
	    return (value) => {
	        if (!cache.has(value)) {
	            cache.set(value, func(value));
	        }
	        return cache.get(value);
	    };
	}

	const defaultPlaylistState$1 = {
	    trackOrder: [],
	    currentTrack: null,
	    lastSelectedIndex: null,
	    selectedTracks: new Set(),
	};
	function toggleSetMembership(set, value) {
	    if (set.has(value)) {
	        set.delete(value);
	    }
	    else {
	        set.add(value);
	    }
	}
	const playlist = (state = defaultPlaylistState$1, action) => {
	    switch (action.type) {
	        case CLICKED_TRACK:
	            return {
	                ...state,
	                selectedTracks: new Set([state.trackOrder[action.index]]),
	                lastSelectedIndex: action.index,
	            };
	        case CTRL_CLICKED_TRACK: {
	            const id = state.trackOrder[action.index];
	            const newSelectedTracks = new Set(state.selectedTracks);
	            toggleSetMembership(newSelectedTracks, id);
	            return {
	                ...state,
	                selectedTracks: newSelectedTracks,
	                // Using this as the lastClickedIndex is kinda funny, since you
	                // may have just _un_selected the track. However, this is what
	                // Winamp 2 does, so we'll copy it.
	                lastSelectedIndex: action.index,
	            };
	        }
	        case SHIFT_CLICKED_TRACK:
	            if (state.lastSelectedIndex == null) {
	                return state;
	            }
	            const clickedIndex = action.index;
	            const start = Math.min(clickedIndex, state.lastSelectedIndex);
	            const end = Math.max(clickedIndex, state.lastSelectedIndex);
	            const selectedTracks = new Set(state.trackOrder.slice(start, end + 1));
	            return {
	                ...state,
	                selectedTracks,
	            };
	        case SELECT_ALL:
	            return {
	                ...state,
	                selectedTracks: new Set(state.trackOrder),
	            };
	        case SELECT_ZERO:
	            return {
	                ...state,
	                selectedTracks: new Set(),
	            };
	        case INVERT_SELECTION:
	            return {
	                ...state,
	                selectedTracks: new Set(state.trackOrder.filter((id) => !state.selectedTracks.has(id))),
	            };
	        case REMOVE_ALL_TRACKS:
	            // TODO: Consider disposing of ObjectUrls
	            return {
	                ...state,
	                trackOrder: [],
	                currentTrack: null,
	                selectedTracks: new Set(),
	                lastSelectedIndex: null,
	            };
	        case REMOVE_TRACKS:
	            // TODO: Consider disposing of ObjectUrls
	            const actionIds = new Set(action.ids.map(Number));
	            const { currentTrack } = state;
	            return {
	                ...state,
	                trackOrder: state.trackOrder.filter((trackId) => !actionIds.has(trackId)),
	                currentTrack: actionIds.has(Number(currentTrack)) ? null : currentTrack,
	                selectedTracks: new Set(Array.from(state.selectedTracks).filter((id) => actionIds.has(id))),
	                // TODO: This could probably be made to work, but we clear it just to be safe.
	                lastSelectedIndex: null,
	            };
	        case REVERSE_LIST:
	            return {
	                ...state,
	                trackOrder: [...state.trackOrder].reverse(),
	                // TODO: This could probably be made to work, but we clear it just to be safe.
	                lastSelectedIndex: null,
	            };
	        case RANDOMIZE_LIST:
	            return {
	                ...state,
	                trackOrder: shuffle(state.trackOrder),
	            };
	        case SET_TRACK_ORDER:
	            const { trackOrder } = action;
	            return { ...state, trackOrder };
	        case ADD_TRACK_FROM_URL:
	            const atIndex = action.atIndex == null ? state.trackOrder.length : action.atIndex;
	            return {
	                ...state,
	                trackOrder: [
	                    ...state.trackOrder.slice(0, atIndex),
	                    Number(action.id),
	                    ...state.trackOrder.slice(atIndex),
	                ],
	                // TODO: This could probably be made to work, but we clear it just to be safe.
	                lastSelectedIndex: null,
	            };
	        case PLAY_TRACK:
	        case BUFFER_TRACK:
	            return {
	                ...state,
	                currentTrack: action.id,
	            };
	        case DRAG_SELECTED:
	            return {
	                ...state,
	                trackOrder: moveSelected(state.trackOrder, (i) => state.selectedTracks.has(state.trackOrder[i]), action.offset),
	                // TODO: This could probably be made to work, but we clear it just to be safe.
	                lastSelectedIndex: null,
	            };
	        default:
	            return state;
	    }
	};

	const defaultWindowsState = {
	    focused: WINDOWS.MAIN,
	    positionsAreRelative: true,
	    genWindows: {
	        // TODO: Remove static capabilities and derive them from ids/generic
	        [WINDOWS.MAIN]: {
	            title: "Main Window",
	            size: [0, 0],
	            open: true,
	            shade: false,
	            canResize: false,
	            canShade: true,
	            canDouble: true,
	            hotkey: "Alt+W",
	            position: { x: 0, y: 0 },
	        },
	        [WINDOWS.EQUALIZER]: {
	            title: "Equalizer",
	            size: [0, 0],
	            open: true,
	            shade: false,
	            canResize: false,
	            canShade: true,
	            canDouble: true,
	            hotkey: "Alt+G",
	            position: { x: 0, y: 0 },
	        },
	        [WINDOWS.PLAYLIST]: {
	            title: "Playlist Editor",
	            size: [0, 0],
	            open: true,
	            shade: false,
	            canResize: true,
	            canShade: true,
	            canDouble: false,
	            hotkey: "Alt+E",
	            position: { x: 0, y: 0 },
	        },
	        [WINDOWS.MILKDROP]: {
	            title: "Milkdrop",
	            size: [0, 0],
	            open: false,
	            shade: false,
	            canResize: true,
	            canShade: false,
	            canDouble: false,
	            position: { x: 0, y: 0 },
	        },
	    },
	    browserWindowSize: { width: 0, height: 0 },
	    windowOrder: [
	        WINDOWS.PLAYLIST,
	        WINDOWS.EQUALIZER,
	        WINDOWS.MILKDROP,
	        WINDOWS.MAIN,
	    ],
	};
	const windows = (state = defaultWindowsState, action) => {
	    switch (action.type) {
	        case ENABLE_MILKDROP:
	            return {
	                ...state,
	                genWindows: {
	                    ...state.genWindows,
	                    [WINDOWS.MILKDROP]: {
	                        ...state.genWindows[WINDOWS.MILKDROP],
	                        open: action.open,
	                    },
	                },
	            };
	        case SET_FOCUSED_WINDOW:
	            let windowOrder = state.windowOrder;
	            if (action.window != null) {
	                windowOrder = [
	                    ...state.windowOrder.filter((windowId) => windowId !== action.window),
	                    action.window,
	                ];
	            }
	            return { ...state, focused: action.window, windowOrder };
	        case TOGGLE_WINDOW_SHADE_MODE:
	            const { canShade } = state.genWindows[action.windowId];
	            if (!canShade) {
	                throw new Error(`Tried to shade/unshade a window that cannot be shaded: ${action.windowId}`);
	            }
	            return {
	                ...state,
	                genWindows: {
	                    ...state.genWindows,
	                    [action.windowId]: {
	                        ...state.genWindows[action.windowId],
	                        shade: !state.genWindows[action.windowId].shade,
	                    },
	                },
	            };
	        case TOGGLE_WINDOW:
	            const windowState = state.genWindows[action.windowId];
	            return {
	                ...state,
	                genWindows: {
	                    ...state.genWindows,
	                    [action.windowId]: {
	                        ...windowState,
	                        open: !windowState.open,
	                    },
	                },
	            };
	        case CLOSE_WINDOW:
	            return {
	                ...state,
	                genWindows: {
	                    ...state.genWindows,
	                    [action.windowId]: {
	                        ...state.genWindows[action.windowId],
	                        open: false,
	                    },
	                },
	            };
	        case WINDOW_SIZE_CHANGED:
	            const { canResize } = state.genWindows[action.windowId];
	            if (!canResize) {
	                throw new Error(`Tried to resize a window that cannot be resized: ${action.windowId}`);
	            }
	            return {
	                ...state,
	                genWindows: {
	                    ...state.genWindows,
	                    [action.windowId]: {
	                        ...state.genWindows[action.windowId],
	                        size: action.size,
	                    },
	                },
	            };
	        case UPDATE_WINDOW_POSITIONS:
	            return {
	                ...state,
	                positionsAreRelative: action.absolute === true ? false : state.positionsAreRelative,
	                genWindows: objectMap(state.genWindows, (w, windowId) => {
	                    const newPosition = action.positions[windowId];
	                    if (newPosition == null) {
	                        return w;
	                    }
	                    return { ...w, position: newPosition };
	                }),
	            };
	        case RESET_WINDOW_SIZES:
	            return {
	                ...state,
	                genWindows: objectMap(state.genWindows, (w) => ({
	                    ...w,
	                    // Not sure why TypeScript can't figure this out for itself.
	                    size: [0, 0],
	                })),
	            };
	        case LOAD_SERIALIZED_STATE: {
	            const { genWindows, focused, positionsAreRelative } = action.serializedState.windows;
	            return {
	                ...state,
	                positionsAreRelative,
	                genWindows: objectMap(state.genWindows, (w, windowId) => {
	                    const serializedW = genWindows[windowId];
	                    if (serializedW == null) {
	                        return w;
	                    }
	                    // Pull out `hidden` since it's been removed from our state.
	                    const { hidden, ...rest } = serializedW;
	                    return { ...w, ...rest };
	                }),
	                focused,
	            };
	        }
	        case BROWSER_WINDOW_SIZE_CHANGED:
	            return {
	                ...state,
	                browserWindowSize: { height: action.height, width: action.width },
	            };
	        default:
	            return state;
	    }
	};
	function getSerializedState$3(state) {
	    return {
	        positionsAreRelative: state.positionsAreRelative,
	        genWindows: objectMap(state.genWindows, (w) => {
	            return {
	                size: w.size,
	                open: w.open,
	                hidden: false, // Not used any more
	                shade: w.shade || false,
	                position: w.position,
	            };
	        }),
	        focused: state.focused,
	    };
	}

	const defaultState$1 = {
	    timeMode: TIME_MODE.ELAPSED,
	    timeElapsed: 0,
	    // The winamp ini file declares the default volume as "200".
	    // The UI seems to show a default volume near 78, which would
	    // math with the default value being 200 out of 255.
	    volume: Math.round((200 / 255) * 100),
	    balance: 0,
	    shuffle: false,
	    repeat: false,
	    // TODO: Enforce possible values
	    status: MEDIA_STATUS.STOPPED,
	};
	const media = (state = defaultState$1, action) => {
	    switch (action.type) {
	        // TODO: Make these constants
	        case PLAY:
	        case IS_PLAYING:
	            return { ...state, status: MEDIA_STATUS.PLAYING };
	        case PAUSE:
	            return { ...state, status: MEDIA_STATUS.PAUSED };
	        case STOP:
	        case IS_STOPPED:
	            return { ...state, status: MEDIA_STATUS.STOPPED };
	        case TOGGLE_TIME_MODE:
	            const newMode = state.timeMode === TIME_MODE.REMAINING
	                ? TIME_MODE.ELAPSED
	                : TIME_MODE.REMAINING;
	            return { ...state, timeMode: newMode };
	        case UPDATE_TIME_ELAPSED:
	            return { ...state, timeElapsed: action.elapsed };
	        case SET_MEDIA:
	            return {
	                ...state,
	            };
	        case SET_VOLUME:
	            return { ...state, volume: action.volume };
	        case SET_BALANCE:
	            return { ...state, balance: action.balance };
	        case TOGGLE_REPEAT:
	            return { ...state, repeat: !state.repeat };
	        case TOGGLE_SHUFFLE:
	            return { ...state, shuffle: !state.shuffle };
	        case LOAD_SERIALIZED_STATE:
	            return { ...state, ...action.serializedState.media };
	        default:
	            return state;
	    }
	};
	function getSerializedState$2(state) {
	    const { volume, balance, shuffle, repeat } = state;
	    return { volume, balance, shuffle, repeat };
	}

	var createSelector_1;
	var defaultMemoize_1 = defaultMemoize;
	function defaultEqualityCheck(a, b) {
	  return a === b;
	}
	function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
	  if (prev === null || next === null || prev.length !== next.length) {
	    return false;
	  }

	  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
	  var length = prev.length;
	  for (var i = 0; i < length; i++) {
	    if (!equalityCheck(prev[i], next[i])) {
	      return false;
	    }
	  }
	  return true;
	}
	function defaultMemoize(func) {
	  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;
	  var lastArgs = null;
	  var lastResult = null;
	  // we reference arguments instead of spreading them for performance reasons
	  return function () {
	    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
	      // apply arguments instead of spreading for performance.
	      lastResult = func.apply(null, arguments);
	    }
	    lastArgs = arguments;
	    return lastResult;
	  };
	}
	function getDependencies(funcs) {
	  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;
	  if (!dependencies.every(function (dep) {
	    return typeof dep === 'function';
	  })) {
	    var dependencyTypes = dependencies.map(function (dep) {
	      return typeof dep;
	    }).join(', ');
	    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
	  }
	  return dependencies;
	}
	function createSelectorCreator(memoize) {
	  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    memoizeOptions[_key - 1] = arguments[_key];
	  }
	  return function () {
	    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      funcs[_key2] = arguments[_key2];
	    }
	    var recomputations = 0;
	    var resultFunc = funcs.pop();
	    var dependencies = getDependencies(funcs);
	    var memoizedResultFunc = memoize.apply(undefined, [function () {
	      recomputations++;
	      // apply arguments instead of spreading for performance.
	      return resultFunc.apply(null, arguments);
	    }].concat(memoizeOptions));

	    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
	    var selector = defaultMemoize(function () {
	      var params = [];
	      var length = dependencies.length;
	      for (var i = 0; i < length; i++) {
	        // apply arguments instead of spreading and mutate a local list of params for performance.
	        params.push(dependencies[i].apply(null, arguments));
	      }

	      // apply arguments instead of spreading for performance.
	      return memoizedResultFunc.apply(null, params);
	    });
	    selector.resultFunc = resultFunc;
	    selector.recomputations = function () {
	      return recomputations;
	    };
	    selector.resetRecomputations = function () {
	      return recomputations = 0;
	    };
	    return selector;
	  };
	}
	createSelector_1 = createSelectorCreator(defaultMemoize);

	const defaultSkinGenExColors = {
	    itemBackground: "rgb(0,0,0)",
	    itemForeground: "rgb(0,255,0)",
	    windowBackground: "rgb(56,55,87)",
	    buttonText: "rgb(57,57,66)",
	    windowText: "rgb(255,255,255)",
	    divider: "rgb(117,116,139)",
	    playlistSelection: "rgb(0,0,198)",
	    listHeaderBackground: "rgb(72,72,120)",
	    listHeaderText: "rgb(255,255,255)",
	    listHeaderFrameTopAndLeft: "rgb(108,108,180)",
	    listHeaderFrameBottomAndRight: "rgb(36,36,60)",
	    listHeaderFramePressed: "rgb(18,18,30)",
	    listHeaderDeadArea: "rgb(36,36,60)",
	    scrollbarOne: "rgb(36,36,60)",
	    scrollbarTwo: "rgb(36,36,60)",
	    pressedScrollbarOne: "rgb(121,130,150)",
	    pressedScrollbarTwo: "rgb(78,88,110)",
	    scrollbarDeadArea: "rgb(36,36,60)",
	    listTextHighlighted: "rgb(0,198,255)",
	    listTextHighlightedBackground: "rgb(0,198,255)",
	    listTextSelected: "rgb(0,198,255)",
	    listTextSelectedBackground: "rgb(0,198,255)",
	};
	const defaultDisplayState = {
	    doubled: false,
	    marqueeStep: 0,
	    disableMarquee: false,
	    loading: true,
	    llama: false,
	    closed: false,
	    working: false,
	    skinImages: DEFAULT_SKIN.images,
	    skinColors: DEFAULT_SKIN.colors,
	    skinCursors: null,
	    skinPlaylistStyle: null,
	    skinRegion: {},
	    visualizerStyle: 0, // Index into VISUALIZER_ORDER
	    dummyVizData: null,
	    playlistScrollPosition: 0,
	    skinGenLetterWidths: null, // TODO: Get the default value for this?
	    skinGenExColors: defaultSkinGenExColors,
	    additionalVisualizers: [],
	    zIndex: 0,
	};
	const display = (state = defaultDisplayState, action) => {
	    switch (action.type) {
	        case LOAD_DEFAULT_SKIN: {
	            const { skinImages, skinColors, skinCursors, skinPlaylistStyle, skinRegion, skinGenLetterWidths, skinGenExColors, } = defaultDisplayState;
	            return {
	                ...state,
	                skinImages,
	                skinColors,
	                skinCursors,
	                skinPlaylistStyle,
	                skinRegion,
	                skinGenLetterWidths,
	                skinGenExColors,
	            };
	        }
	        case TOGGLE_DOUBLESIZE_MODE:
	            return { ...state, doubled: !state.doubled };
	        case TOGGLE_LLAMA_MODE:
	            return { ...state, llama: !state.llama };
	        case STEP_MARQUEE:
	            return state.disableMarquee
	                ? state
	                : { ...state, marqueeStep: state.marqueeStep + 1 };
	        case DISABLE_MARQUEE:
	            return { ...state, disableMarquee: true };
	        case STOP_WORKING:
	            return { ...state, working: false };
	        case START_WORKING:
	            return { ...state, working: true };
	        case CLOSE_WINAMP:
	            return { ...state, closed: true };
	        case OPEN_WINAMP:
	            return { ...state, closed: false };
	        case LOADING:
	            return { ...state, loading: true };
	        case LOADED:
	            return { ...state, loading: false };
	        case SET_SKIN_DATA:
	            const { data } = action;
	            return {
	                ...state,
	                loading: false,
	                skinImages: data.skinImages,
	                skinColors: data.skinColors,
	                skinPlaylistStyle: data.skinPlaylistStyle,
	                skinCursors: data.skinCursors,
	                skinRegion: data.skinRegion,
	                skinGenLetterWidths: data.skinGenLetterWidths,
	                skinGenExColors: data.skinGenExColors || defaultSkinGenExColors,
	            };
	        case TOGGLE_VISUALIZER_STYLE:
	            return {
	                ...state,
	                visualizerStyle: (state.visualizerStyle + 1) % VISUALIZER_ORDER.length,
	            };
	        case SET_PLAYLIST_SCROLL_POSITION:
	            return { ...state, playlistScrollPosition: action.position };
	        case SET_Z_INDEX:
	            return { ...state, zIndex: action.zIndex };
	        case SET_DUMMY_VIZ_DATA:
	            return { ...state, dummyVizData: action.data };
	        case LOAD_SERIALIZED_STATE: {
	            const { skinCursors, ...rest } = action.serializedState.display;
	            const upgrade = (url) => ({ type: "cur", url });
	            const newSkinCursors = skinCursors == null ? null : objectMap(skinCursors, upgrade);
	            return { ...state, skinCursors: newSkinCursors, ...rest };
	        }
	        default:
	            return state;
	    }
	};
	const getSerializedState$1 = (state) => {
	    // My kingdom for a type-safe `_.pick`.
	    const { visualizerStyle, doubled, llama, marqueeStep, skinImages, skinCursors, skinRegion, skinGenLetterWidths, skinColors, skinPlaylistStyle, } = state;
	    let newCursors = null;
	    if (skinCursors != null) {
	        // @ts-ignore Typescript does not like that we can have `undefined` as
	        // values here. Since this is going to get serialized to JSON (which will
	        // drop undefined) it's fine.
	        // This code is geting removed soon anyway.
	        newCursors = objectMap(skinCursors, (cursor) => {
	            return cursor.type === "cur" ? cursor.url : undefined;
	        });
	    }
	    return {
	        visualizerStyle,
	        doubled,
	        llama,
	        marqueeStep,
	        skinImages,
	        skinCursors: newCursors,
	        skinRegion,
	        skinGenLetterWidths,
	        skinColors,
	        skinPlaylistStyle,
	    };
	};
	const getVisualizerStyle$1 = createSelector_1((state) => state.visualizerStyle, (visualizationStyle) => {
	    return VISUALIZER_ORDER[visualizationStyle];
	});

	const defaultUserInput = {
	    focus: null,
	    bandFocused: null,
	    scrubPosition: 0,
	    userMessage: null,
	};
	const userInput = (state = defaultUserInput, action) => {
	    switch (action.type) {
	        case SET_FOCUS:
	            return { ...state, focus: action.input, bandFocused: null };
	        case SET_BAND_FOCUS:
	            return { ...state, focus: action.input, bandFocused: action.bandFocused };
	        case UNSET_FOCUS:
	            return { ...state, focus: null, bandFocused: null };
	        case SET_SCRUB_POSITION:
	            return { ...state, scrubPosition: action.position };
	        case SET_USER_MESSAGE:
	            return { ...state, userMessage: action.message };
	        case UNSET_USER_MESSAGE:
	            return { ...state, userMessage: null };
	        default:
	            return state;
	    }
	};

	const defaultState = {
	    on: true,
	    auto: false,
	    sliders: {
	        preamp: 50,
	        60: 50,
	        170: 50,
	        310: 50,
	        600: 50,
	        1000: 50,
	        3000: 50,
	        6000: 50,
	        12000: 50,
	        14000: 50,
	        16000: 50,
	    },
	};
	const equalizer = (state = defaultState, action) => {
	    switch (action.type) {
	        case SET_BAND_VALUE:
	            const newSliders = { ...state.sliders, [action.band]: action.value };
	            return { ...state, sliders: newSliders };
	        case SET_EQ_ON:
	            return { ...state, on: true };
	        case SET_EQ_OFF:
	            return { ...state, on: false };
	        case SET_EQ_AUTO:
	            return { ...state, auto: action.value };
	        case LOAD_SERIALIZED_STATE:
	            return action.serializedState.equalizer || state;
	        default:
	            return state;
	    }
	};
	function getSerializedState(state) {
	    return state;
	}

	const network = (state = { connected: true }, action) => {
	    switch (action.type) {
	        case NETWORK_CONNECTED:
	            return { ...state, connected: true };
	        case NETWORK_DISCONNECTED:
	            return { ...state, connected: false };
	        default:
	            return state;
	    }
	};

	const defaultSettingsState = {
	    availableSkins: [],
	};
	const settings = (state = defaultSettingsState, action) => {
	    switch (action.type) {
	        case SET_AVAILABLE_SKINS:
	            return { ...state, availableSkins: action.skins };
	        default:
	            return state;
	    }
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var invariant = function (condition, format, a, b, c, d, e, f) {
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	var invariant_1 = invariant;
	var invariant$1 = /*@__PURE__*/getDefaultExportFromCjs(invariant_1);

	function genMediaTags(file, musicMetadata) {
	    invariant$1(file != null, "Attempted to get the tags of media file without passing a file");
	    const options = {
	        duration: true,
	        skipPostHeaders: true, // avoid unnecessary data to be read
	    };
	    if (typeof file === "string") {
	        return musicMetadata.fetchFromUrl(file, options);
	    }
	    // Assume Blob
	    return musicMetadata.parseBlob(file, options);
	}
	function genMediaDuration(url) {
	    invariant$1(typeof url === "string", "Attempted to get the duration of media file without passing a url");
	    return new Promise((resolve, reject) => {
	        // TODO: Does this actually stop downloading the file once it's
	        // got the duration?
	        const audio = document.createElement("audio");
	        audio.crossOrigin = "anonymous";
	        const durationChange = () => {
	            resolve(audio.duration);
	            audio.removeEventListener("durationchange", durationChange);
	            audio.src = "";
	            // TODO: Not sure if this really gets cleaned up.
	        };
	        audio.addEventListener("durationchange", durationChange);
	        audio.addEventListener("error", (e) => {
	            reject(e);
	        });
	        audio.src = url;
	    });
	}
	async function genArrayBufferFromFileReference(fileReference) {
	    invariant$1(fileReference != null, "Attempt to get an ArrayBuffer without assigning a fileReference");
	    return new Promise((resolve, reject) => {
	        const reader = new FileReader();
	        reader.onload = () => {
	            resolve(reader.result);
	        };
	        reader.onerror = reject;
	        reader.readAsArrayBuffer(fileReference);
	    });
	}
	async function genStringFromFileReference(fileReference) {
	    return new Promise((resolve, reject) => {
	        const reader = new FileReader();
	        reader.onload = () => {
	            resolve(reader.result);
	        };
	        reader.onerror = reject;
	        reader.readAsText(fileReference);
	    });
	}
	async function promptForFileReferences({ accept, directory = false } = {
	    accept: null,
	    directory: false,
	}) {
	    return new Promise((resolve) => {
	        // Does this represent a memory leak somehow?
	        // Can this fail? Do we ever reject?
	        const fileInput = document.createElement("input");
	        if (accept)
	            fileInput.setAttribute("accept", accept);
	        fileInput.type = "file";
	        fileInput.multiple = true;
	        // @ts-ignore Non-standard
	        fileInput.webkitdirectory = directory;
	        // @ts-ignore Non-standard
	        fileInput.directory = directory;
	        // @ts-ignore Non-standard
	        fileInput.mozdirectory = directory;
	        // Not entirely sure why this is needed, since the input
	        // was just created, but somehow this helps prevent change
	        // events from getting swallowed.
	        // https://stackoverflow.com/a/12102992/1263117
	        // @ts-ignore Technically you can't set this to null, it has to be a string.
	        // But I don't feel like retesting it, so I'll leave it as null
	        fileInput.value = null;
	        fileInput.addEventListener("change", (e) => {
	            const files = e.target.files;
	            resolve(files);
	        });
	        fileInput.click();
	    });
	}
	function urlIsBlobUrl(url) {
	    return /^blob:/.test(url);
	}
	function curUrlFromByteArray$1(arr) {
	    const base64 = base64FromDataArray$1(arr);
	    return `data:image/x-win-bitmap;base64,${base64}`;
	}
	// This is not perfect, but... meh: https://stackoverflow.com/a/36756650/1263117
	function filenameFromUrl(url) {
	    if (urlIsBlobUrl(url)) {
	        return null;
	    }
	    const lastSegment = url.split("/").pop();
	    if (lastSegment == null) {
	        return null;
	    }
	    return lastSegment.split("#")[0].split("?")[0];
	}

	const trackName = weakMapMemoize((track) => {
	    const { artist, title, defaultName, url } = track;
	    if (artist && title) {
	        return `${artist} - ${title}`;
	    }
	    else if (title) {
	        return title;
	    }
	    else if (defaultName) {
	        return defaultName;
	    }
	    else if (url) {
	        const filename = filenameFromUrl(url);
	        if (filename) {
	            return filename;
	        }
	    }
	    return "???";
	});

	const defaultPlaylistState = {};
	const tracks = (state = defaultPlaylistState, action) => {
	    switch (action.type) {
	        case ADD_TRACK_FROM_URL:
	            return {
	                ...state,
	                [action.id]: {
	                    id: action.id,
	                    defaultName: action.defaultName || null,
	                    duration: action.duration ?? null,
	                    url: action.url,
	                    mediaTagsRequestStatus: MEDIA_TAG_REQUEST_STATUS.INITIALIZED,
	                },
	            };
	        case SET_MEDIA: {
	            const newTrack = {
	                ...state[action.id],
	                duration: action.length,
	            };
	            return {
	                ...state,
	                [action.id]: newTrack,
	            };
	        }
	        case MEDIA_TAG_REQUEST_INITIALIZED:
	            return {
	                ...state,
	                [action.id]: {
	                    ...state[action.id],
	                    mediaTagsRequestStatus: MEDIA_TAG_REQUEST_STATUS.INITIALIZED,
	                },
	            };
	        case MEDIA_TAG_REQUEST_FAILED:
	            return {
	                ...state,
	                [action.id]: {
	                    ...state[action.id],
	                    mediaTagsRequestStatus: MEDIA_TAG_REQUEST_STATUS.FAILED,
	                },
	            };
	        case SET_MEDIA_DURATION: {
	            return {
	                ...state,
	                [action.id]: {
	                    ...state[action.id],
	                    duration: action.duration,
	                },
	            };
	        }
	        case SET_MEDIA_TAGS:
	            const track = state[action.id];
	            const { sampleRate, bitrate, numberOfChannels, title, artist, album, albumArtUrl, } = action;
	            const { kbps, khz, channels } = track;
	            return {
	                ...state,
	                [action.id]: {
	                    ...track,
	                    mediaTagsRequestStatus: MEDIA_TAG_REQUEST_STATUS.COMPLETE,
	                    title,
	                    artist,
	                    album,
	                    albumArtUrl,
	                    kbps: bitrate != null ? String(Math.round(bitrate / 1000)) : kbps,
	                    khz: sampleRate != null ? String(Math.round(sampleRate / 1000)) : khz,
	                    channels: numberOfChannels != null ? numberOfChannels : channels,
	                },
	            };
	        default:
	            return state;
	    }
	};
	const getTrackDisplayName$1 = (state, id = null) => {
	    if (id == null) {
	        return null;
	    }
	    const track = state[id];
	    if (track == null) {
	        return null;
	    }
	    return trackName(track);
	};

	var TransitionType;
	(function (TransitionType) {
	    TransitionType[TransitionType["IMMEDIATE"] = 0] = "IMMEDIATE";
	    TransitionType[TransitionType["DEFAULT"] = 1] = "DEFAULT";
	    TransitionType[TransitionType["USER_PRESET"] = 2] = "USER_PRESET";
	})(TransitionType || (TransitionType = {}));

	const defaultMilkdropState = {
	    display: "WINDOW",
	    overlay: false,
	    presetHistory: [],
	    presets: [],
	    currentPresetIndex: null,
	    butterchurn: null,
	    transitionType: TransitionType.DEFAULT,
	    randomize: true,
	    cycling: true,
	    message: null,
	};
	const milkdrop = (state = defaultMilkdropState, action) => {
	    switch (action.type) {
	        case SET_MILKDROP_DESKTOP:
	            return { ...state, display: action.enabled ? "DESKTOP" : "WINDOW" };
	        case SET_MILKDROP_FULLSCREEN:
	            return { ...state, display: action.enabled ? "FULLSCREEN" : "WINDOW" };
	        case GOT_BUTTERCHURN:
	            return { ...state, butterchurn: action.butterchurn };
	        case GOT_BUTTERCHURN_PRESETS:
	            return {
	                ...state,
	                presets: state.presets.concat(action.presets),
	            };
	        case PRESET_REQUESTED:
	            if (action.addToHistory) {
	                return {
	                    ...state,
	                    presetHistory: [...state.presetHistory, action.index],
	                };
	            }
	            return {
	                ...state,
	                presetHistory: state.presetHistory.slice(0, -1),
	            };
	        case RESOLVE_PRESET_AT_INDEX:
	            const preset = state.presets[action.index];
	            return {
	                ...state,
	                presets: replaceAtIndex(state.presets, action.index, {
	                    type: "RESOLVED",
	                    name: preset.name,
	                    preset: action.json,
	                }),
	            };
	        case SELECT_PRESET_AT_INDEX:
	            return {
	                ...state,
	                currentPresetIndex: action.index,
	                transitionType: action.transitionType,
	            };
	        case TOGGLE_PRESET_OVERLAY:
	            return { ...state, overlay: !state.overlay };
	        case TOGGLE_RANDOMIZE_PRESETS:
	            return { ...state, randomize: !state.randomize };
	        case TOGGLE_PRESET_CYCLING:
	            return { ...state, cycling: !state.cycling };
	        case SCHEDULE_MILKDROP_MESSAGE:
	            return {
	                ...state,
	                message: {
	                    text: action.message,
	                    time: Date.now(),
	                },
	            };
	        default:
	            return state;
	    }
	};

	const reducer = combineReducers$1({
	    userInput,
	    windows,
	    display,
	    settings,
	    equalizer,
	    playlist,
	    media,
	    network,
	    tracks,
	    milkdrop,
	});

	const getAsDataURI = (text) => `data:text/html;base64,${window.btoa(text)}`;
	// Replaces deprecated "noshade" attribute
	const noshadeStyle = {
	    height: "2px",
	    borderWidth: 0,
	    color: "gray",
	    backgroundColor: "gray",
	};
	// We use all kinds of non-standard attributes and tags. So we create these fake
	// components to trick Typescript.
	const Body = (props) => {
	    // @ts-ignore
	    return jsxRuntimeExports.jsx("body", { ...props });
	};
	const Font = (props) => {
	    // @ts-ignore
	    return jsxRuntimeExports.jsx("font", { ...props });
	};
	const Hr$1 = (props) => {
	    // @ts-ignore
	    return jsxRuntimeExports.jsx("hr", { ...props });
	};
	const Div = (props) => {
	    // @ts-ignore
	    return jsxRuntimeExports.jsx("div", { ...props });
	};
	const Table = (props) => {
	    // @ts-ignore
	    return jsxRuntimeExports.jsx("table", { ...props });
	};
	// TODO: Move <html> tag out to the string creation step in order
	// to avoid the warning.
	const Playlist = (props) => (jsxRuntimeExports.jsxs("html", { children: [jsxRuntimeExports.jsxs("head", { children: [jsxRuntimeExports.jsx("link", { rel: "stylesheet", href: "null" }), jsxRuntimeExports.jsx("style", { type: "text/css", children: `
        body { background: #000040; }
        .para1 { margin-top: -42px; margin-left: 145px; margin-right: 10px; font-family: "font2, Arial"; font-size: 30px; line-height: 35px; text-align: left; color: #E1E1E1; }
        .para2 { margin-top: 15px; margin-left: 15px; margin-right: 50px; font-family: "font1, Arial Black"; font-size: 50px; line-height: 40px; text-align: left; color: #004080; }
        ` }), jsxRuntimeExports.jsx("title", { children: "Winamp Generated PlayList" })] }), jsxRuntimeExports.jsxs(Body, { bgcolor: "#000080", topmargin: "0", leftmargin: "0", text: "#FFFFFF", children: [jsxRuntimeExports.jsxs(Div, { align: "center", children: [jsxRuntimeExports.jsx(Div, { className: "para2", align: "center", children: jsxRuntimeExports.jsx("p", { children: "WINAMP" }) }), jsxRuntimeExports.jsx(Div, { className: "para1", align: "center", children: jsxRuntimeExports.jsx("p", { children: "playlist" }) })] }), jsxRuntimeExports.jsx(Hr$1, { align: "left", width: "90%", size: "1", color: "#FFBF00", style: noshadeStyle }), jsxRuntimeExports.jsx(Div, { align: "right", children: jsxRuntimeExports.jsx(Table, { border: "0", cellSpacing: "0", cellPadding: "0", width: "98%", children: jsxRuntimeExports.jsx("tbody", { children: jsxRuntimeExports.jsx("tr", { children: jsxRuntimeExports.jsxs("td", { children: [jsxRuntimeExports.jsx("small", { children: jsxRuntimeExports.jsxs("small", { children: [jsxRuntimeExports.jsx(Font, { face: "Arial", color: "#FFBF00", children: props.numberOfTracks }), jsxRuntimeExports.jsx(Font, { color: "#409FFF", face: "Arial", children: " track in playlist, average track length: " }), jsxRuntimeExports.jsx(Font, { face: "Arial", color: "#FFBF00", children: props.averageTrackLength })] }) }), jsxRuntimeExports.jsx("br", {}), jsxRuntimeExports.jsx("small", { children: jsxRuntimeExports.jsxs("small", { children: [jsxRuntimeExports.jsx(Font, { color: "#409FFF", face: "Arial", children: "Playlist length: " }), jsxRuntimeExports.jsx(Font, { face: "Arial", color: "#FFBF00", children: props.playlistLengthMinutes }), jsxRuntimeExports.jsx(Font, { color: "#409FFF", face: "Arial", children: " minutes " }), jsxRuntimeExports.jsx(Font, { face: "Arial", color: "#FFBF00", children: props.playlistLengthSeconds }), jsxRuntimeExports.jsx(Font, { color: "#409FFF", face: "Arial", children: " second " }), jsxRuntimeExports.jsx("br", {}), jsxRuntimeExports.jsxs(Font, { color: "#409FFF", face: "Arial", children: ["Right-click ", jsxRuntimeExports.jsx("a", { href: "./", children: "here" }), " to save this HTML file."] })] }) })] }) }) }) }) }), jsxRuntimeExports.jsxs("blockquote", { children: [jsxRuntimeExports.jsx("p", { children: jsxRuntimeExports.jsx(Font, { color: "#FFBF00", face: "Arial", children: jsxRuntimeExports.jsx("big", { children: "Playlist files:" }) }) }), jsxRuntimeExports.jsx("ul", { children: jsxRuntimeExports.jsx(Font, { face: "Arial", color: "#FFFFFF", children: jsxRuntimeExports.jsx("small", { children: props.tracks.map((track) => (jsxRuntimeExports.jsxs("span", { children: [track, jsxRuntimeExports.jsx("br", {})] }, track))) }) }) })] }), jsxRuntimeExports.jsx(Hr$1, { align: "left", width: "90%", size: "1", color: "#FFBF00", style: noshadeStyle })] })] }));
	const createPlaylistHTML = (props) => {
	    const node = document.createElement("div");
	    const root = createRoot(node);
	    root.render(jsxRuntimeExports.jsx(Playlist, { ...props }));
	    return node.innerHTML;
	};
	const createPlaylistURL = (props) => getAsDataURI(createPlaylistHTML(props));

	const getBalanceText = (balance) => {
	    if (balance === 0) {
	        return "Balance: Center";
	    }
	    const direction = balance > 0 ? "Right" : "Left";
	    return `Balance: ${Math.abs(balance)}% ${direction}`;
	};
	const getVolumeText = (volume) => `Volume: ${volume}%`;
	const getPositionText = (duration, seekToPercent) => {
	    const newElapsedStr = getTimeStr((duration * seekToPercent) / 100, false);
	    const durationStr = getTimeStr(duration, false);
	    return `Seek to: ${newElapsedStr}/${durationStr} (${seekToPercent}%)`;
	};
	const getDoubleSizeModeText = (enabled) => `${enabled ? "Disable" : "Enable"} doublesize mode`;
	const formatHz = (hz) => hz < 1000 ? `${hz}HZ` : `${hz / 1000}KHZ`;
	// Format a number as a string, ensuring it has a + or - sign
	const ensureSign = (num) => num > 0 ? `+${num}` : num.toString();
	// Round to 1 and exactly 1 decimal point
	const roundToTenths = (num) => (Math.round(num * 10) / 10).toFixed(1);
	const getEqText = (band, level) => {
	    const db = roundToTenths(((level - 50) / 50) * 12);
	    const label = band === "preamp" ? "Preamp" : formatHz(band);
	    return `EQ: ${label} ${ensureSign(Number(db))} DB`;
	};

	function getPositionDiff(graph, sizeDiff) {
	    const newGraph = {};
	    const positionDiff = {};
	    for (const key of Object.keys(graph)) {
	        newGraph[key] = { above: [], left: [] };
	        positionDiff[key] = { x: 0, y: 0 };
	    }
	    // Construct an inverted graph
	    for (const [key, neighbors] of Object.entries(graph)) {
	        const { below, right } = neighbors;
	        if (right != null) {
	            newGraph[right].left.push(key);
	        }
	        if (below != null) {
	            newGraph[below].above.push(key);
	        }
	    }
	    function walkRight(key) {
	        const node = newGraph[key];
	        const nodeSizeDiff = sizeDiff[key];
	        node.left.forEach((left) => {
	            positionDiff[left].x += nodeSizeDiff.width + positionDiff[key].x;
	            walkRight(left);
	        });
	    }
	    function walkDown(key) {
	        const node = newGraph[key];
	        const nodeSizeDiff = sizeDiff[key];
	        node.above.forEach((above) => {
	            positionDiff[above].y += nodeSizeDiff.height + positionDiff[key].y;
	            walkDown(above);
	        });
	    }
	    // Find disconnected nodes, and walk
	    for (const [key, neighbors] of Object.entries(graph)) {
	        if (neighbors.below == null) {
	            walkDown(key);
	        }
	        if (neighbors.right == null) {
	            walkRight(key);
	        }
	    }
	    return positionDiff;
	}
	function generateGraph(windows) {
	    const bottoms = {};
	    const rights = {};
	    for (const w of windows) {
	        const bottom = w.y + w.height;
	        if (bottoms[bottom]) {
	            bottoms[bottom].push(w);
	        }
	        else {
	            bottoms[bottom] = [w];
	        }
	        const right = w.x + w.width;
	        if (rights[right]) {
	            rights[right].push(w);
	        }
	        else {
	            rights[right] = [w];
	        }
	    }
	    const graph = {};
	    for (const w of windows) {
	        const edges = {};
	        const top = w.y;
	        const left = w.x;
	        const tops = bottoms[top];
	        const lefts = rights[left];
	        if (tops) {
	            for (const below of tops) {
	                const isToTheLeft = below.x + below.width < w.x;
	                const isToTheRight = below.x > w.x + w.width;
	                const overlapsInX = !(isToTheLeft || isToTheRight);
	                if (overlapsInX) {
	                    edges.below = below.key;
	                    break;
	                }
	            }
	        }
	        if (lefts) {
	            for (const right of lefts) {
	                const isAbove = right.y + right.height < w.y;
	                const isBelow = right.y > w.y + w.height;
	                const overlapsInY = !(isAbove || isBelow);
	                if (overlapsInY) {
	                    edges.right = right.key;
	                    break;
	                }
	            }
	        }
	        graph[w.key] = edges;
	    }
	    return graph;
	}

	const getSliders = (state) => state.equalizer.sliders;
	const getEqfData = createSelector_1(getSliders, (sliders) => {
	    const preset = {
	        name: "Entry1",
	        preamp: denormalizeEqBand(sliders.preamp),
	    };
	    BANDS.forEach((band) => {
	        preset[`hz${band}`] = denormalizeEqBand(sliders[band]);
	    });
	    const eqfData = {
	        presets: [preset],
	        type: "Winamp EQ library file v1.1",
	    };
	    return eqfData;
	});
	const getTracks = (state) => state.tracks;
	const getTrackUrl = (state) => {
	    return (id) => {
	        return state.tracks[id]?.url;
	    };
	};
	const getTrackOrder = (state) => state.playlist.trackOrder;
	const getTrackCount = createSelector_1(getTrackOrder, (trackOrder) => trackOrder.length);
	const getOrderedTracks = createSelector_1(getTracks, getTrackOrder, (tracks, trackOrder) => trackOrder.filter((id) => tracks[id]));
	const getUserTracks = createSelector_1(getTracks, getTrackOrder, (tracks, trackOrder) => trackOrder.map((id) => {
	    const track = tracks[id];
	    return {
	        url: track.url,
	        metaData: {
	            artist: track.artist || "",
	            title: track.title || "",
	            album: track.album,
	            albumArtUrl: track.albumArtUrl || "",
	        },
	    };
	}));
	const getOrderedTrackObjects = createSelector_1(getTracks, getOrderedTracks, (tracks, trackOrder) => trackOrder.map((id) => tracks[id]));
	const getSelectedTrackIds = (state) => {
	    return state.playlist.selectedTracks;
	};
	const getSelectedTrackObjects = createSelector_1(getOrderedTrackObjects, getSelectedTrackIds, (tracks, selectedIds) => tracks.filter((track) => selectedIds.has(track.id)));
	// If a duration is `null`, it counts as zero, which seems fine enough.
	const runningTimeFromTracks = (tracks) => tracks.reduce((time, track) => time + Number(track.duration), 0);
	const getTotalRunningTime = createSelector_1(getOrderedTrackObjects, runningTimeFromTracks);
	const getSelectedRunningTime = createSelector_1(getSelectedTrackObjects, runningTimeFromTracks);
	// Note: We should append "+" to these values if some of the tracks are of unknown time.
	const getRunningTimeMessage = createSelector_1(getTotalRunningTime, getSelectedRunningTime, (totalRunningTime, selectedRunningTime) => `${getTimeStr(selectedRunningTime)}/${getTimeStr(totalRunningTime)}`);
	// TODO: use slectors to get memoization
	const getCurrentTrackIndex = (state) => {
	    const { playlist } = state;
	    if (playlist.currentTrack == null) {
	        return -1;
	    }
	    return playlist.trackOrder.indexOf(playlist.currentTrack);
	};
	const getCurrentTrackNumber = createSelector_1(getCurrentTrackIndex, (currentTrackIndex) => currentTrackIndex + 1);
	const getCurrentTrackId = (state) => state.playlist.currentTrack;
	// TODO: Sigh... Technically, we should detect if we are looping only repeat if we are.
	// I think this would require pre-computing the "random" order of a playlist.
	const getRandomTrackId = (state) => {
	    const { playlist: { trackOrder, currentTrack }, } = state;
	    if (trackOrder.length === 0) {
	        return null;
	    }
	    let nextId;
	    do {
	        nextId = trackOrder[Math.floor(trackOrder.length * Math.random())];
	    } while (nextId === currentTrack && trackOrder.length > 1);
	    return nextId;
	};
	const getNextTrackId = (state, n = 1) => {
	    const { playlist: { trackOrder }, media: { repeat, shuffle }, } = state;
	    if (shuffle) {
	        return getRandomTrackId(state);
	    }
	    const trackCount = getTrackCount(state);
	    if (trackCount === 0) {
	        return null;
	    }
	    const currentIndex = getCurrentTrackIndex(state);
	    let nextIndex = currentIndex + n;
	    if (repeat) {
	        nextIndex = nextIndex % trackCount;
	        if (nextIndex < 0) {
	            // Handle wrapping around backwards
	            nextIndex += trackCount;
	        }
	        return trackOrder[nextIndex];
	    }
	    if (currentIndex === trackCount - 1 && n > 0) {
	        return null;
	    }
	    else if (currentIndex === 0 && n < 0) {
	        return null;
	    }
	    nextIndex = clamp(nextIndex, 0, trackCount - 1);
	    return trackOrder[nextIndex];
	};
	const getGenWindows = (state) => {
	    return state.windows.genWindows;
	};
	const getWindowOpen = createSelector_1(getGenWindows, (genWindows) => {
	    return (windowId) => genWindows[windowId].open;
	});
	const getWindowHidden = createSelector_1(getMilkdropWindowEnabled, (milkdropWindowEnabled) => {
	    return (windowId) => {
	        return windowId === WINDOWS.MILKDROP && !milkdropWindowEnabled;
	    };
	});
	const getWindowShade = createSelector_1(getGenWindows, (genWindows) => {
	    return (windowId) => genWindows[windowId].shade;
	});
	const getWindowSize = createSelector_1(getGenWindows, (genWindows) => {
	    return (windowId) => genWindows[windowId].size;
	});
	const getWindowPositions = createSelector_1(getGenWindows, (windows) => objectMap(windows, (w) => w.position));
	const BASE_WINDOW_HEIGHT = 58;
	const getNumberOfVisibleTracks = createSelector_1(getWindowSize, (getWindowSize_) => {
	    const playlistSize = getWindowSize_("playlist");
	    return Math.floor((BASE_WINDOW_HEIGHT + WINDOW_RESIZE_SEGMENT_HEIGHT * playlistSize[1]) /
	        TRACK_HEIGHT);
	});
	const getOverflowTrackCount = createSelector_1(getTrackCount, getNumberOfVisibleTracks, (trackCount, numberOfVisibleTracks) => Math.max(0, trackCount - numberOfVisibleTracks));
	const _getPlaylistScrollPosition = (state) => state.display.playlistScrollPosition;
	const getPlaylistScrollPosition = createSelector_1(getOverflowTrackCount, _getPlaylistScrollPosition, (overflowTrackCount, playlistScrollPosition) => {
	    if (overflowTrackCount === 0) {
	        return 0;
	    }
	    return Math.round((Math.round((overflowTrackCount * playlistScrollPosition) / 100) /
	        overflowTrackCount) *
	        100);
	});
	const getScrollOffset = createSelector_1(_getPlaylistScrollPosition, getTrackCount, getNumberOfVisibleTracks, (playlistScrollPosition, trackCount, numberOfVisibleTracks) => {
	    const overflow = Math.max(0, trackCount - numberOfVisibleTracks);
	    return percentToIndex(playlistScrollPosition / 100, overflow + 1);
	});
	const getVisibleTrackIds = createSelector_1(getScrollOffset, getTrackOrder, getNumberOfVisibleTracks, (offset, trackOrder, numberOfVisibleTracks) => trackOrder.slice(offset, offset + numberOfVisibleTracks));
	function getAllTracksAreVisible(state) {
	    return getVisibleTrackIds(state).length === state.playlist.trackOrder.length;
	}
	const getTrackIsVisibleFunction = createSelector_1(getVisibleTrackIds, (visibleTrackIds) => {
	    return (id) => visibleTrackIds.includes(id);
	});
	createSelector_1(getVisibleTrackIds, getTracks, (visibleTrackIds, tracks) => visibleTrackIds.map((id) => tracks[id]));
	const getDuration = (state) => {
	    const { playlist, tracks } = state;
	    if (playlist.currentTrack == null) {
	        return null;
	    }
	    const currentTrack = tracks[playlist.currentTrack];
	    return currentTrack && currentTrack.duration;
	};
	const getTrackDisplayName = createSelector_1(getTracks, (tracks) => {
	    return defaultMemoize_1((trackId) => getTrackDisplayName$1(tracks, trackId));
	});
	const getCurrentTrackDisplayName = createSelector_1(getCurrentTrackId, getTrackDisplayName, (id, getName) => {
	    return getName(id);
	});
	const getMediaStatus = (state) => {
	    return state.media.status;
	};
	const getMediaIsPlaying = (state) => state.media.status === MEDIA_STATUS.PLAYING;
	const getCurrentTrack = createSelector_1(getCurrentTrackId, getTracks, (trackId, tracks) => {
	    return trackId == null ? null : tracks[trackId];
	});
	const getCurrentlyPlayingTrackIdIfLoaded = createSelector_1(getMediaIsPlaying, getCurrentTrack, (mediaIsPlaying, currentTrack) => {
	    if (!mediaIsPlaying ||
	        !currentTrack ||
	        currentTrack.mediaTagsRequestStatus ===
	            MEDIA_TAG_REQUEST_STATUS.INITIALIZED) {
	        return null;
	    }
	    return currentTrack.id;
	});
	const getCurrentTrackInfo = createSelector_1(getCurrentTrack, (track) => {
	    if (track == null) {
	        return null;
	    }
	    return {
	        url: track.url,
	        metaData: {
	            title: track.title || null,
	            artist: track.artist || null,
	            album: track.album || null,
	            albumArtUrl: track.albumArtUrl || null,
	        },
	    };
	});
	const getMinimalMediaText = createSelector_1(getCurrentTrackNumber, getCurrentTrackDisplayName, (trackNumber, name) => (name == null ? null : `${trackNumber}. ${name}`));
	const getMediaText = createSelector_1(getMinimalMediaText, getDuration, (minimalMediaText, duration) => minimalMediaText == null
	    ? null
	    : `${minimalMediaText} (${getTimeStr(duration)})`);
	const getNumberOfTracks = (state) => getTrackOrder(state).length;
	const getPlaylistDuration = createSelector_1(getTracks, (tracks) => Object.values(tracks).reduce((total, track) => total + (track.duration || 0), 0));
	const getPlaylistURL = createSelector_1(getNumberOfTracks, getPlaylistDuration, getTrackOrder, getTracks, getTrackDisplayName, (numberOfTracks, playlistDuration, trackOrder, tracks, getDisplayName) => createPlaylistURL({
	    numberOfTracks,
	    averageTrackLength: getTimeStr(playlistDuration / numberOfTracks),
	    // TODO: Handle hours
	    playlistLengthMinutes: Math.floor(playlistDuration / 60),
	    playlistLengthSeconds: Math.floor(playlistDuration % 60),
	    tracks: trackOrder.map((id, i) => `${i + 1}. ${getDisplayName(id)} (${getTimeStr(tracks[id].duration)})`),
	}));
	const WINDOW_HEIGHT = 116;
	const SHADE_WINDOW_HEIGHT = 14;
	function getWPixelSize(w, doubled) {
	    const [width, height] = w.size;
	    const doubledMultiplier = doubled && w.canDouble ? 2 : 1;
	    const pix = {
	        height: WINDOW_HEIGHT + height * WINDOW_RESIZE_SEGMENT_HEIGHT,
	        width: WINDOW_WIDTH + width * WINDOW_RESIZE_SEGMENT_WIDTH,
	    };
	    return {
	        height: (w.shade ? SHADE_WINDOW_HEIGHT : pix.height) * doubledMultiplier,
	        width: pix.width * doubledMultiplier,
	    };
	}
	function getFocusedWindow(state) {
	    return state.windows.focused;
	}
	function getPositionsAreRelative(state) {
	    return state.windows.positionsAreRelative;
	}
	function getDoubled(state) {
	    return state.display.doubled;
	}
	function getLlamaMode(state) {
	    return state.display.llama;
	}
	function getZIndex(state) {
	    return state.display.zIndex;
	}
	// TODO: This is poorly memoized. It invalidates when a window moves.
	const getWindowSizes = createSelector_1(getGenWindows, getDoubled, (windows, doubled) => {
	    return objectMap(windows, (w) => getWPixelSize(w, doubled));
	});
	const getWindowPixelSize = createSelector_1(getWindowSizes, (sizes) => {
	    return (windowId) => sizes[windowId];
	});
	const getWindowOrder = (state) => state.windows.windowOrder;
	const getNormalizedWindowOrder = createSelector_1(getWindowOrder, getGenWindows, (windowOrder, genWindows) => {
	    return [
	        WINDOWS.MAIN,
	        ...windowOrder.filter((windowId) => windowId !== WINDOWS.MAIN && genWindows[windowId] != null),
	    ];
	});
	// TODO: Now that both size and position are stored on genWindows this seems a bit silly.
	const getWindowsInfo = createSelector_1(getWindowSizes, getWindowPositions, getNormalizedWindowOrder, (sizes, positions, windowOrder) => {
	    return windowOrder.map((key) => ({
	        key,
	        ...sizes[key],
	        ...positions[key],
	    }));
	});
	const getWindowGraph = createSelector_1(getWindowsInfo, generateGraph);
	const defaultPlaylistStyle = {
	    normal: "#00FF00",
	    current: "#FFFFFF",
	    normalbg: "#000000",
	    selectedbg: "#0000C6",
	    font: "Arial",
	};
	function getSkinColors(state) {
	    return state.display.skinColors;
	}
	const getSkinPlaylistStyle = (state) => {
	    return state.display.skinPlaylistStyle || defaultPlaylistStyle;
	};
	const getVisualizerStyle = (state) => {
	    const milkdrop = state.windows.genWindows[WINDOWS.MILKDROP];
	    if (milkdrop != null && milkdrop.open) {
	        return VISUALIZERS.MILKDROP;
	    }
	    return getVisualizerStyle$1(state.display);
	};
	const getVolume = (state) => state.media.volume;
	const getBalance = (state) => state.media.balance;
	const getShuffle = (state) => state.media.shuffle;
	const getRepeat = (state) => state.media.repeat;
	const getChannels = createSelector_1(getCurrentTrack, (track) => {
	    return track != null ? track.channels || null : null;
	});
	const getTimeElapsed = (state) => {
	    return state.media.timeElapsed;
	};
	function getSerlializedState(state) {
	    return {
	        version: 1,
	        media: getSerializedState$2(state.media),
	        equalizer: getSerializedState(state.equalizer),
	        display: getSerializedState$1(state.display),
	        windows: getSerializedState$3(state.windows),
	    };
	}
	function getEqualizerEnabled(state) {
	    return state.equalizer.on;
	}
	function getBrowserWindowSize(state) {
	    return state.windows.browserWindowSize;
	}
	const getOpenWindows = createSelector_1(getGenWindows, (genWindows) => objectFilter(genWindows, (w) => w.open));
	const getStackedLayoutPositions = createSelector_1(getOpenWindows, getDoubled, (openWindows, doubled) => {
	    let offset = 0;
	    return objectMap(openWindows, (w) => {
	        const position = { x: 0, y: offset };
	        offset += getWPixelSize(w, doubled).height;
	        return position;
	    });
	});
	const getUserInputFocus = (state) => {
	    return state.userInput.focus;
	};
	const getUserInputScrubPosition = (state) => {
	    return state.userInput.scrubPosition;
	};
	// TODO: Make this a reselect selector
	const getMarqueeText = (state) => {
	    const defaultText = "Winamp 2.91";
	    if (state.userInput.userMessage != null) {
	        return state.userInput.userMessage;
	    }
	    switch (getUserInputFocus(state)) {
	        case "balance":
	            return getBalanceText(state.media.balance);
	        case "volume":
	            return getVolumeText(state.media.volume);
	        case "position":
	            const duration = getDuration(state);
	            if (duration == null) {
	                // This probably can't ever happen.
	                return defaultText;
	            }
	            return getPositionText(duration, getUserInputScrubPosition(state));
	        case "double":
	            return getDoubleSizeModeText(state.display.doubled);
	        case "eq":
	            const band = state.userInput.bandFocused;
	            if (band == null) {
	                // This probably can't ever happen.
	                return defaultText;
	            }
	            return getEqText(band, state.equalizer.sliders[band]);
	    }
	    if (state.playlist.currentTrack != null) {
	        const mediaText = getMediaText(state);
	        if (mediaText == null) {
	            // This probably can't ever happen.
	            return defaultText;
	        }
	        return mediaText;
	    }
	    return defaultText;
	};
	const getKbps = createSelector_1(getCurrentTrack, (track) => {
	    return track != null ? track.kbps || null : null;
	});
	const getKhz = createSelector_1(getCurrentTrack, (track) => {
	    return track != null ? track.khz || null : null;
	});
	function getMilkdropMessage(state) {
	    return state.milkdrop.message;
	}
	function getMilkdropWindowEnabled(state) {
	    return state.milkdrop.display === "WINDOW";
	}
	function getMilkdropDesktopEnabled(state) {
	    return state.milkdrop.display === "DESKTOP";
	}
	function getMilkdropFullscreenEnabled(state) {
	    return state.milkdrop.display === "FULLSCREEN";
	}
	function getButterchurn(state) {
	    return state.milkdrop.butterchurn;
	}
	function getPresetTransitionType(state) {
	    return state.milkdrop.transitionType;
	}
	function getCurrentPresetIndex(state) {
	    return state.milkdrop.currentPresetIndex;
	}
	function getCurrentPreset(state) {
	    const index = getCurrentPresetIndex(state);
	    if (index == null) {
	        return null;
	    }
	    const preset = state.milkdrop.presets[index];
	    if (preset == null || preset.type === "UNRESOLVED") {
	        return null;
	    }
	    return preset.preset;
	}
	function getPresetNames(state) {
	    return state.milkdrop.presets.map((preset) => preset.name);
	}
	function getPresetOverlayOpen(state) {
	    return state.milkdrop.overlay;
	}
	function getPresetsAreCycling(state) {
	    return state.milkdrop.cycling;
	}
	function getRandomizePresets(state) {
	    return state.milkdrop.randomize;
	}
	function getClosed(state) {
	    return state.display.closed;
	}
	function getSkinImages(state) {
	    return state.display.skinImages;
	}
	function getSkinCursors(state) {
	    return state.display.skinCursors;
	}
	function getSkinRegion(state) {
	    return state.display.skinRegion;
	}
	function getSkinLetterWidths(state) {
	    return state.display.skinGenLetterWidths;
	}
	function getPreampLineUrl(state) {
	    return state.display.skinImages.EQ_PREAMP_LINE;
	}
	function getLineColorsUrl(state) {
	    return state.display.skinImages.EQ_GRAPH_LINE_COLORS;
	}
	const getPreampLineImage = createSelector_1(getPreampLineUrl, async (url) => {
	    if (url == null) {
	        return null;
	    }
	    return imgFromUrl(url);
	});
	const getLineColorsImage = createSelector_1(getLineColorsUrl, async (url) => {
	    if (url == null) {
	        return null;
	    }
	    return imgFromUrl(url);
	});
	function getDummyVizData(state) {
	    return state.display.dummyVizData;
	}
	function getMarqueeStep(state) {
	    return state.display.marqueeStep;
	}
	function getNetworkConnected(state) {
	    return state.network.connected;
	}
	function getTimeMode(state) {
	    return state.media.timeMode;
	}
	function getLoading(state) {
	    return state.display.loading;
	}
	function getWorking(state) {
	    return state.display.working;
	}
	function getAvaliableSkins(state) {
	    return state.settings.availableSkins;
	}

	const SNAP_DISTANCE = 15;
	const top = (box) => box.y;
	const bottom = (box) => box.y + box.height;
	const left = (box) => box.x;
	const right = (box) => box.x + box.width;
	const near = (a, b) => Math.abs(a - b) < SNAP_DISTANCE;
	// http://stackoverflow.com/a/3269471/1263117
	const overlapX = (a, b) => left(a) <= right(b) + SNAP_DISTANCE && left(b) <= right(a) + SNAP_DISTANCE;
	const overlapY = (a, b) => top(a) <= bottom(b) + SNAP_DISTANCE && top(b) <= bottom(a) + SNAP_DISTANCE;
	// Give a new position for `boxA` that snaps it to `boxB` if neede.
	const snap = (boxA, boxB) => {
	    let x, y;
	    // TODO: Refactor/simplify this code
	    if (overlapY(boxA, boxB)) {
	        if (near(left(boxA), right(boxB))) {
	            x = right(boxB);
	        }
	        else if (near(right(boxA), left(boxB))) {
	            x = left(boxB) - boxA.width;
	        }
	        else if (near(left(boxA), left(boxB))) {
	            x = left(boxB);
	        }
	        else if (near(right(boxA), right(boxB))) {
	            x = right(boxB) - boxA.width;
	        }
	    }
	    if (overlapX(boxA, boxB)) {
	        if (near(top(boxA), bottom(boxB))) {
	            y = bottom(boxB);
	        }
	        else if (near(bottom(boxA), top(boxB))) {
	            y = top(boxB) - boxA.height;
	        }
	        else if (near(top(boxA), top(boxB))) {
	            y = top(boxB);
	        }
	        else if (near(bottom(boxA), bottom(boxB))) {
	            y = bottom(boxB) - boxA.height;
	        }
	    }
	    return { x, y };
	};
	const snapDiff = (a, b) => {
	    const newPos = snap(a, b);
	    return {
	        x: newPos.x === undefined ? 0 : newPos.x - a.x,
	        y: newPos.y === undefined ? 0 : newPos.y - a.y,
	    };
	};
	// TODO: Use the first x and y combo
	const snapDiffManyToMany = (as, bs) => {
	    let x = 0;
	    let y = 0;
	    for (const a of as) {
	        for (const b of bs) {
	            const diff = snapDiff(a, b);
	            x = x || diff.x;
	            y = y || diff.y;
	            if (x !== undefined && x > 0 && y !== undefined && y > 0) {
	                break;
	            }
	        }
	    }
	    return { x, y };
	};
	const snapWithin = (boxA, boundingBox) => {
	    let x, y;
	    if (boxA.x - SNAP_DISTANCE < 0) {
	        x = 0;
	    }
	    else if (boxA.x + boxA.width + SNAP_DISTANCE > boundingBox.width) {
	        x = boundingBox.width - boxA.width;
	    }
	    if (boxA.y - SNAP_DISTANCE < 0) {
	        y = 0;
	    }
	    else if (boxA.y + boxA.height + SNAP_DISTANCE > boundingBox.height) {
	        y = boundingBox.height - boxA.height;
	    }
	    return { x, y };
	};
	const snapWithinDiff = (a, b) => {
	    const newPos = snapWithin(a, b);
	    return {
	        x: newPos.x === undefined ? 0 : newPos.x - a.x,
	        y: newPos.y === undefined ? 0 : newPos.y - a.y,
	    };
	};
	const boundingBox = (nodes) => {
	    const boxes = nodes.slice();
	    const firstNode = boxes.pop();
	    if (firstNode == null) {
	        throw new Error("boundingBox must be called with at least one node");
	    }
	    const bounding = {
	        top: top(firstNode),
	        right: right(firstNode),
	        bottom: bottom(firstNode),
	        left: left(firstNode),
	    };
	    boxes.forEach((node) => {
	        bounding.top = Math.min(bounding.top, top(node));
	        bounding.right = Math.max(bounding.right, right(node));
	        bounding.bottom = Math.max(bounding.bottom, bottom(node));
	        bounding.left = Math.min(bounding.left, left(node));
	    });
	    return {
	        x: bounding.left,
	        y: bounding.top,
	        width: bounding.right - bounding.left,
	        height: bounding.bottom - bounding.top,
	    };
	};
	function traceConnection(areConnected) {
	    return (candidates, node) => {
	        const connected = new Set();
	        const checkNode = (n) => {
	            for (const candidate of candidates) {
	                if (!connected.has(candidate) && areConnected(candidate, n)) {
	                    connected.add(candidate);
	                    checkNode(candidate);
	                }
	            }
	        };
	        checkNode(node);
	        return connected;
	    };
	}
	const applyDiff = (a, b) => ({
	    x: a.x + b.x,
	    y: a.y + b.y,
	});
	// TODO: This should not
	const applyMultipleDiffs = (initial, ...diffs) => {
	    const metaDiff = diffs.reduce((m, diff) => ({
	        // Use the smallest non-zero diff for each axis.
	        // TODO: Min should be the absolute value
	        x: m.x === 0 || diff.x === 0 ? m.x + diff.x : Math.min(m.x, diff.x),
	        y: m.y === 0 || diff.y === 0 ? m.y + diff.y : Math.min(m.y, diff.y),
	    }));
	    return applyDiff(initial, metaDiff);
	};

	// Dispatch an action and, if needed rearrange the windows to preserve
	// the existing edge relationship.
	//
	// Works by checking the edges before the action is dispatched. Then,
	// after dispatching, calculating what position change would be required
	// to restore those relationships.
	function withWindowGraphIntegrity(action) {
	    return (dispatch, getState) => {
	        const state = getState();
	        const graph = getWindowGraph(state);
	        const originalSizes = getWindowSizes(state);
	        dispatch(action);
	        const newSizes = getWindowSizes(getState());
	        const sizeDiff = {};
	        for (const window of Object.keys(newSizes)) {
	            const original = originalSizes[window];
	            const current = newSizes[window];
	            sizeDiff[window] = {
	                height: current.height - original.height,
	                width: current.width - original.width,
	            };
	        }
	        const positionDiff = getPositionDiff(graph, sizeDiff);
	        const windowPositions = getWindowPositions(state);
	        const newPositions = objectMap(windowPositions, (position, key) => applyDiff(position, positionDiff[key]));
	        dispatch(updateWindowPositions(newPositions));
	    };
	}
	function toggleDoubleSizeMode() {
	    return withWindowGraphIntegrity({ type: TOGGLE_DOUBLESIZE_MODE });
	}
	function toggleEqualizerShadeMode() {
	    return withWindowGraphIntegrity({
	        type: TOGGLE_WINDOW_SHADE_MODE,
	        windowId: "equalizer",
	    });
	}
	function toggleMainWindowShadeMode() {
	    return withWindowGraphIntegrity({
	        type: TOGGLE_WINDOW_SHADE_MODE,
	        windowId: "main",
	    });
	}
	function togglePlaylistShadeMode() {
	    return withWindowGraphIntegrity({
	        type: TOGGLE_WINDOW_SHADE_MODE,
	        windowId: "playlist",
	    });
	}
	function closeWindow(windowId) {
	    return { type: CLOSE_WINDOW, windowId };
	}
	function setFocusedWindow(window) {
	    return { type: SET_FOCUSED_WINDOW, window };
	}
	function setWindowSize(windowId, size) {
	    return { type: WINDOW_SIZE_CHANGED, windowId, size };
	}
	function toggleWindow(windowId) {
	    return { type: TOGGLE_WINDOW, windowId };
	}
	function updateWindowPositions(positions, absolute) {
	    return { type: UPDATE_WINDOW_POSITIONS, positions, absolute };
	}
	function centerWindowsInContainer(container) {
	    return (dispatch, getState) => {
	        if (!getPositionsAreRelative(getState())) {
	            return;
	        }
	        const { left, top } = container.getBoundingClientRect();
	        const { scrollWidth: width, scrollHeight: height } = container;
	        dispatch(centerWindows({ left, top, width, height }));
	    };
	}
	function centerWindowsInView() {
	    return centerWindows({
	        left: window.scrollX,
	        top: window.scrollY,
	        width: window.innerWidth,
	        height: window.innerHeight,
	    });
	}
	function centerWindows(box) {
	    return (dispatch, getState) => {
	        const state = getState();
	        const windowsInfo = getWindowsInfo(state);
	        const getOpen = getWindowOpen(state);
	        const { top, left, width, height } = box;
	        const offsetLeft = left + window.scrollX;
	        const offsetTop = top + window.scrollY;
	        // A layout has been supplied. We will compute the bounding box and
	        // center the given layout.
	        const bounding = calculateBoundingBox(windowsInfo.filter((w) => getOpen(w.key)));
	        if (bounding == null) {
	            // There are no windows to center
	            return;
	        }
	        const boxHeight = bounding.bottom - bounding.top;
	        const boxWidth = bounding.right - bounding.left;
	        const move = {
	            x: Math.ceil(offsetLeft - bounding.left + (width - boxWidth) / 2),
	            y: Math.ceil(offsetTop - bounding.top + (height - boxHeight) / 2),
	        };
	        const newPositions = windowsInfo.reduce((pos, w) => ({
	            ...pos,
	            [w.key]: { x: move.x + w.x, y: move.y + w.y },
	        }), {});
	        dispatch(updateWindowPositions(newPositions, true));
	    };
	}
	function browserWindowSizeChanged(size) {
	    return (dispatch) => {
	        dispatch({ type: BROWSER_WINDOW_SIZE_CHANGED, ...size });
	        dispatch(ensureWindowsAreOnScreen());
	    };
	}
	function resetWindowSizes() {
	    return { type: RESET_WINDOW_SIZES };
	}
	function stackWindows() {
	    return (dispatch, getState) => {
	        dispatch(updateWindowPositions(getStackedLayoutPositions(getState())));
	    };
	}
	function setWindowLayout(layout) {
	    return (dispatch) => {
	        if (layout == null) {
	            dispatch(stackWindows());
	            return;
	        }
	        for (const id of ["playlist", "milkdrop"]) {
	            const w = layout[id];
	            if (w != null && w.size != null) {
	                const { extraHeight: plusHeight, extraWidth: plusWidth } = w.size;
	                dispatch(setWindowSize(id, [plusWidth, plusHeight]));
	            }
	        }
	        for (const id of ["main", "playlist", "equalizer", "milkdrop"]) {
	            const w = layout[id];
	            if (w == null || w.closed) {
	                dispatch(closeWindow(id));
	            }
	        }
	        for (const id of ["main", "playlist", "equalizer"]) {
	            if (layout[id]?.shadeMode) {
	                dispatch({
	                    type: TOGGLE_WINDOW_SHADE_MODE,
	                    windowId: id,
	                });
	            }
	        }
	        dispatch(updateWindowPositions(objectMap(layout, (w) => {
	            // For some reason TypeScript cli thinks this
	            // is nullable, but in VSCode it does not...
	            if (w == null)
	                throw new Error("w is null");
	            return {
	                x: w.position.left,
	                y: w.position.top,
	            };
	        }), false));
	    };
	}
	function ensureWindowsAreOnScreen() {
	    return (dispatch, getState) => {
	        const state = getState();
	        const windowsInfo = getWindowsInfo(state);
	        const getOpen = getWindowOpen(state);
	        const { height, width } = getWindowSize$1();
	        const bounding = calculateBoundingBox(windowsInfo.filter((w) => getOpen(w.key)));
	        if (bounding == null) {
	            // There are no windows visible, so there's no work to do.
	            return;
	        }
	        const positions = getWindowPositions(state);
	        // Are we good?
	        if (bounding.left >= 0 &&
	            bounding.top >= 0 &&
	            bounding.right <= width &&
	            bounding.bottom <= height) {
	            // My work here is done.
	            return;
	        }
	        const boundingHeight = bounding.bottom - bounding.top;
	        const boundingWidth = bounding.right - bounding.left;
	        // Could we simply shift all the windows by a constant offset?
	        if (boundingWidth <= width && boundingHeight <= height) {
	            let moveY = 0;
	            let moveX = 0;
	            if (bounding.top <= 0) {
	                moveY = bounding.top;
	            }
	            else if (bounding.bottom > height) {
	                moveY = bounding.bottom - height;
	            }
	            if (bounding.left <= 0) {
	                moveX = bounding.left;
	            }
	            else if (bounding.right > width) {
	                moveX = bounding.right - width;
	            }
	            const newPositions = objectMap(positions, (position) => ({
	                x: position.x - moveX,
	                y: position.y - moveY,
	            }));
	            dispatch(updateWindowPositions(newPositions));
	            return;
	        }
	        // TODO: Try moving the individual groups to try to fit them in
	        // I give up. Just reset everything.
	        dispatch(resetWindowSizes());
	        dispatch(stackWindows());
	        dispatch(centerWindowsInView());
	    };
	}

	function playTrack(id) {
	    return (dispatch, getState) => {
	        const state = getState();
	        const isStopped = getMediaStatus(state) === MEDIA_STATUS.STOPPED;
	        if (isStopped) {
	            dispatch({ type: BUFFER_TRACK, id });
	        }
	        else {
	            dispatch({ type: PLAY_TRACK, id });
	        }
	    };
	}
	function playTrackNow(id) {
	    return { type: PLAY_TRACK, id };
	}
	function play() {
	    return (dispatch, getState) => {
	        const state = getState();
	        if (state.media.status === MEDIA_STATUS.STOPPED &&
	            state.playlist.currentTrack == null &&
	            state.playlist.trackOrder.length === 0) {
	            dispatch(openMediaFileDialog());
	        }
	        else {
	            dispatch({ type: PLAY });
	        }
	    };
	}
	function pause() {
	    return (dispatch, getState) => {
	        const { status } = getState().media;
	        if (status === MEDIA_STATUS.PLAYING) {
	            dispatch({ type: PAUSE });
	        }
	        else {
	            dispatch({ type: PLAY });
	        }
	    };
	}
	function stop() {
	    return { type: STOP };
	}
	function nextN(n) {
	    return (dispatch, getState) => {
	        const nextTrackId = getNextTrackId(getState(), n);
	        if (nextTrackId == null) {
	            dispatch({ type: IS_STOPPED });
	            return;
	        }
	        dispatch(playTrack(nextTrackId));
	    };
	}
	function next() {
	    return nextN(1);
	}
	function previous() {
	    return nextN(-1);
	}
	function seekToTime(seconds) {
	    return function (dispatch, getState) {
	        const state = getState();
	        const duration = getDuration(state);
	        if (duration == null) {
	            return;
	        }
	        dispatch({
	            type: SEEK_TO_PERCENT_COMPLETE,
	            percent: (seconds / duration) * 100,
	        });
	    };
	}
	function seekForward(seconds) {
	    return function (dispatch, getState) {
	        const timeElapsed = getTimeElapsed(getState());
	        dispatch(seekToTime(timeElapsed + seconds));
	    };
	}
	function seekBackward(seconds) {
	    return seekForward(-seconds);
	}
	function setVolume(volume) {
	    return {
	        type: SET_VOLUME,
	        volume: clamp(volume, 0, 100),
	    };
	}
	function adjustVolume(volumeDiff) {
	    return (dispatch, getState) => {
	        const currentVolume = getState().media.volume;
	        return dispatch(setVolume(currentVolume + volumeDiff));
	    };
	}
	function scrollVolume(e) {
	    e.preventDefault();
	    return (dispatch, getState) => {
	        const currentVolume = getState().media.volume;
	        // Using pixels as percentage difference here is a bit arbirary, but... oh well.
	        return dispatch(setVolume(currentVolume + e.deltaY));
	    };
	}
	function setBalance(balance) {
	    balance = clamp(balance, -100, 100);
	    // The balance clips to the center
	    if (Math.abs(balance) < 25) {
	        balance = 0;
	    }
	    return {
	        type: SET_BALANCE,
	        balance,
	    };
	}
	function toggleRepeat() {
	    return { type: TOGGLE_REPEAT };
	}
	function toggleShuffle() {
	    return { type: TOGGLE_SHUFFLE };
	}
	function toggleTimeMode() {
	    return { type: TOGGLE_TIME_MODE };
	}

	const BAND_SNAP_DISTANCE = 5;
	const BAND_MID_POINT_VALUE = 50;
	function _snapBandValue(value) {
	    if (value < BAND_MID_POINT_VALUE + BAND_SNAP_DISTANCE &&
	        value > BAND_MID_POINT_VALUE - BAND_SNAP_DISTANCE) {
	        return BAND_MID_POINT_VALUE;
	    }
	    return value;
	}
	function setEqBand(band, value) {
	    return { type: SET_BAND_VALUE, band, value: _snapBandValue(value) };
	}
	function _setEqTo(value) {
	    return (dispatch) => {
	        Object.values(BANDS).forEach((band) => {
	            dispatch({
	                type: SET_BAND_VALUE,
	                value,
	                band: band,
	            });
	        });
	    };
	}
	function setEqToMax() {
	    return _setEqTo(100);
	}
	function setEqToMid() {
	    return _setEqTo(50);
	}
	function setEqToMin() {
	    return _setEqTo(0);
	}
	function setPreamp(value) {
	    return { type: SET_BAND_VALUE, band: "preamp", value: _snapBandValue(value) };
	}
	function toggleEq() {
	    return (dispatch, getState) => {
	        if (getState().equalizer.on) {
	            dispatch({ type: SET_EQ_OFF });
	        }
	        else {
	            dispatch({ type: SET_EQ_ON });
	        }
	    };
	}
	function toggleEqAuto() {
	    return (dispatch) => {
	        // We don't actually support this feature yet so don't let the user ever turn it on.
	        // dispatch({ type: SET_EQ_AUTO, value: !getState().equalizer.auto });
	        dispatch({ type: SET_EQ_AUTO, value: false });
	    };
	}

	var PRESET_VALUES = ["hz60", "hz170", "hz310", "hz600", "hz1000", "hz3000", "hz6000", "hz12000", "hz14000", "hz16000", "preamp"];
	var HEADER = "Winamp EQ library file v1.1";
	var constants = {
	  PRESET_VALUES: PRESET_VALUES,
	  HEADER: HEADER
	};

	var CONSTANTS$1 = constants;
	function parser$2(arrayBuffer) {
	  var data = {};
	  var i = 0;
	  var arr = new Int8Array(arrayBuffer);
	  // Parse header
	  data.type = String.fromCharCode.apply(null, arr.slice(i, CONSTANTS$1.HEADER.length));
	  if (data.type !== CONSTANTS$1.HEADER) {
	    throw new Error("Invalid .eqf file.");
	  }
	  i += CONSTANTS$1.HEADER.length;
	  // Skip "<ctrl-z>!--"
	  i += 4;
	  // Get the presets
	  data.presets = [];
	  while (i < arr.length) {
	    var preset = {};
	    // Get the name
	    var nameStart = i;
	    var nameEnd = nameStart + 257; // Str is fixed length
	    // Str is null terminated
	    while (arr[i] !== 0 && i <= nameEnd) {
	      i++;
	    }
	    preset.name = String.fromCharCode.apply(null, arr.slice(nameStart, i));
	    i = nameEnd; // Skip over any unused bytes

	    // Get the levels
	    CONSTANTS$1.PRESET_VALUES.forEach(function (valueName) {
	      preset[valueName] = 64 - arr[i++]; // Adjust for inverse values
	    });
	    data.presets.push(preset);
	  }
	  return data;
	}
	var parser_1$1 = parser$2;

	var CONSTANTS = constants;
	var PRESET_LENGTH = 257;
	function creator$1(data) {
	  var buffer = [];
	  for (var i = 0; i < CONSTANTS.HEADER.length; i++) {
	    buffer.push(CONSTANTS.HEADER.charCodeAt(i));
	  }
	  buffer.push(26); // <ctrl-z>
	  var ending = "!--";
	  for (var i = 0; i < ending.length; i++) {
	    buffer.push(ending.charCodeAt(i));
	  }
	  if (!data.presets) {
	    throw new Error("Eqf data is missing presets");
	  }
	  data.presets.forEach(function (preset) {
	    var k = 0;
	    for (; k < preset.name.length; k++) {
	      buffer.push(preset.name.charCodeAt(k));
	    }
	    for (; k < PRESET_LENGTH; k++) {
	      buffer.push(0);
	    }
	    CONSTANTS.PRESET_VALUES.forEach(function (valueName) {
	      buffer.push(64 - preset[valueName]); // Adjust for inverse values
	    });
	  });
	  return new Uint8Array(buffer).buffer;
	}
	var creator_1 = creator$1;

	var parser$1 = parser_1$1;
	var creator = creator_1;
	var winampEqf = {
	  parser: parser$1,
	  creator: creator
	};

	/* TODO: There are too many " " and "_" characters */
	const FONT_LOOKUP = {
	    a: [0, 0],
	    b: [0, 1],
	    c: [0, 2],
	    d: [0, 3],
	    e: [0, 4],
	    f: [0, 5],
	    g: [0, 6],
	    h: [0, 7],
	    i: [0, 8],
	    j: [0, 9],
	    k: [0, 10],
	    l: [0, 11],
	    m: [0, 12],
	    n: [0, 13],
	    o: [0, 14],
	    p: [0, 15],
	    q: [0, 16],
	    r: [0, 17],
	    s: [0, 18],
	    t: [0, 19],
	    u: [0, 20],
	    v: [0, 21],
	    w: [0, 22],
	    x: [0, 23],
	    y: [0, 24],
	    z: [0, 25],
	    '"': [0, 26],
	    "@": [0, 27],
	    " ": [0, 30],
	    "0": [1, 0],
	    "1": [1, 1],
	    "2": [1, 2],
	    "3": [1, 3],
	    "4": [1, 4],
	    "5": [1, 5],
	    "6": [1, 6],
	    "7": [1, 7],
	    "8": [1, 8],
	    "9": [1, 9],
	    [UTF8_ELLIPSIS]: [1, 10],
	    ".": [1, 11],
	    ":": [1, 12],
	    "(": [1, 13],
	    ")": [1, 14],
	    "-": [1, 15],
	    "'": [1, 16],
	    "!": [1, 17],
	    _: [1, 18],
	    "+": [1, 19],
	    "\\": [1, 20],
	    "/": [1, 21],
	    "[": [1, 22],
	    "]": [1, 23],
	    "^": [1, 24],
	    "&": [1, 25],
	    "%": [1, 26],
	    ",": [1, 27],
	    "=": [1, 28],
	    $: [1, 29],
	    "#": [1, 30],
	    Å: [2, 0],
	    Ö: [2, 1],
	    Ä: [2, 2],
	    "?": [2, 3],
	    "*": [2, 4],
	    "<": [1, 22],
	    ">": [1, 23],
	    "{": [1, 22],
	    "}": [1, 23],
	};
	const imageConstFromChar = (char) => `CHARACTER_${char.charCodeAt(0)}`;
	const CHAR_X = 5;
	const CHAR_Y = 6;
	const characterSprites = [];
	for (const key in FONT_LOOKUP) {
	    if (FONT_LOOKUP.hasOwnProperty(key)) {
	        const position = FONT_LOOKUP[key];
	        characterSprites.push({
	            name: imageConstFromChar(key),
	            y: position[0] * CHAR_Y,
	            x: position[1] * CHAR_X,
	            width: CHAR_X,
	            height: CHAR_Y,
	        });
	    }
	}
	const sprites = {
	    BALANCE: [
	        { name: "MAIN_BALANCE_BACKGROUND", x: 9, y: 0, width: 38, height: 420 },
	        { name: "MAIN_BALANCE_THUMB", x: 15, y: 422, width: 14, height: 11 },
	        { name: "MAIN_BALANCE_THUMB_ACTIVE", x: 0, y: 422, width: 14, height: 11 },
	    ],
	    CBUTTONS: [
	        { name: "MAIN_PREVIOUS_BUTTON", x: 0, y: 0, width: 23, height: 18 },
	        {
	            name: "MAIN_PREVIOUS_BUTTON_ACTIVE",
	            x: 0,
	            y: 18,
	            width: 23,
	            height: 18,
	        },
	        { name: "MAIN_PLAY_BUTTON", x: 23, y: 0, width: 23, height: 18 },
	        { name: "MAIN_PLAY_BUTTON_ACTIVE", x: 23, y: 18, width: 23, height: 18 },
	        { name: "MAIN_PAUSE_BUTTON", x: 46, y: 0, width: 23, height: 18 },
	        { name: "MAIN_PAUSE_BUTTON_ACTIVE", x: 46, y: 18, width: 23, height: 18 },
	        { name: "MAIN_STOP_BUTTON", x: 69, y: 0, width: 23, height: 18 },
	        { name: "MAIN_STOP_BUTTON_ACTIVE", x: 69, y: 18, width: 23, height: 18 },
	        { name: "MAIN_NEXT_BUTTON", x: 92, y: 0, width: 23, height: 18 },
	        { name: "MAIN_NEXT_BUTTON_ACTIVE", x: 92, y: 18, width: 22, height: 18 },
	        { name: "MAIN_EJECT_BUTTON", x: 114, y: 0, width: 22, height: 16 },
	        { name: "MAIN_EJECT_BUTTON_ACTIVE", x: 114, y: 16, width: 22, height: 16 },
	    ],
	    MAIN: [
	        { name: "MAIN_WINDOW_BACKGROUND", x: 0, y: 0, width: 275, height: 116 },
	    ],
	    MONOSTER: [
	        { name: "MAIN_STEREO", x: 0, y: 12, width: 29, height: 12 },
	        { name: "MAIN_STEREO_SELECTED", x: 0, y: 0, width: 29, height: 12 },
	        { name: "MAIN_MONO", x: 29, y: 12, width: 27, height: 12 },
	        { name: "MAIN_MONO_SELECTED", x: 29, y: 0, width: 27, height: 12 },
	    ],
	    NUMBERS: [
	        { name: "NO_MINUS_SIGN", x: 9, y: 6, width: 5, height: 1 },
	        { name: "MINUS_SIGN", x: 20, y: 6, width: 5, height: 1 },
	        { name: "DIGIT_0", x: 0, y: 0, width: 9, height: 13 },
	        { name: "DIGIT_1", x: 9, y: 0, width: 9, height: 13 },
	        { name: "DIGIT_2", x: 18, y: 0, width: 9, height: 13 },
	        { name: "DIGIT_3", x: 27, y: 0, width: 9, height: 13 },
	        { name: "DIGIT_4", x: 36, y: 0, width: 9, height: 13 },
	        { name: "DIGIT_5", x: 45, y: 0, width: 9, height: 13 },
	        { name: "DIGIT_6", x: 54, y: 0, width: 9, height: 13 },
	        { name: "DIGIT_7", x: 63, y: 0, width: 9, height: 13 },
	        { name: "DIGIT_8", x: 72, y: 0, width: 9, height: 13 },
	        { name: "DIGIT_9", x: 81, y: 0, width: 9, height: 13 },
	    ],
	    NUMS_EX: [
	        { name: "NO_MINUS_SIGN_EX", x: 90, y: 0, width: 9, height: 13 },
	        { name: "MINUS_SIGN_EX", x: 99, y: 0, width: 9, height: 13 },
	        { name: "DIGIT_0_EX", x: 0, y: 0, width: 9, height: 13 },
	        { name: "DIGIT_1_EX", x: 9, y: 0, width: 9, height: 13 },
	        { name: "DIGIT_2_EX", x: 18, y: 0, width: 9, height: 13 },
	        { name: "DIGIT_3_EX", x: 27, y: 0, width: 9, height: 13 },
	        { name: "DIGIT_4_EX", x: 36, y: 0, width: 9, height: 13 },
	        { name: "DIGIT_5_EX", x: 45, y: 0, width: 9, height: 13 },
	        { name: "DIGIT_6_EX", x: 54, y: 0, width: 9, height: 13 },
	        { name: "DIGIT_7_EX", x: 63, y: 0, width: 9, height: 13 },
	        { name: "DIGIT_8_EX", x: 72, y: 0, width: 9, height: 13 },
	        { name: "DIGIT_9_EX", x: 81, y: 0, width: 9, height: 13 },
	    ],
	    PLAYPAUS: [
	        { name: "MAIN_PLAYING_INDICATOR", x: 0, y: 0, width: 9, height: 9 },
	        { name: "MAIN_PAUSED_INDICATOR", x: 9, y: 0, width: 9, height: 9 },
	        { name: "MAIN_STOPPED_INDICATOR", x: 18, y: 0, width: 9, height: 9 },
	        { name: "MAIN_NOT_WORKING_INDICATOR", x: 36, y: 0, width: 9, height: 9 },
	        { name: "MAIN_WORKING_INDICATOR", x: 39, y: 0, width: 9, height: 9 },
	    ],
	    PLEDIT: [
	        { name: "PLAYLIST_TOP_TILE", x: 127, y: 21, width: 25, height: 20 },
	        { name: "PLAYLIST_TOP_LEFT_CORNER", x: 0, y: 21, width: 25, height: 20 },
	        { name: "PLAYLIST_TITLE_BAR", x: 26, y: 21, width: 100, height: 20 },
	        {
	            name: "PLAYLIST_TOP_RIGHT_CORNER",
	            x: 153,
	            y: 21,
	            width: 25,
	            height: 20,
	        },
	        {
	            name: "PLAYLIST_TOP_TILE_SELECTED",
	            x: 127,
	            y: 0,
	            width: 25,
	            height: 20,
	        },
	        { name: "PLAYLIST_TOP_LEFT_SELECTED", x: 0, y: 0, width: 25, height: 20 },
	        {
	            name: "PLAYLIST_TITLE_BAR_SELECTED",
	            x: 26,
	            y: 0,
	            width: 100,
	            height: 20,
	        },
	        {
	            name: "PLAYLIST_TOP_RIGHT_CORNER_SELECTED",
	            x: 153,
	            y: 0,
	            width: 25,
	            height: 20,
	        },
	        { name: "PLAYLIST_LEFT_TILE", x: 0, y: 42, width: 12, height: 29 },
	        { name: "PLAYLIST_RIGHT_TILE", x: 31, y: 42, width: 20, height: 29 },
	        { name: "PLAYLIST_BOTTOM_TILE", x: 179, y: 0, width: 25, height: 38 },
	        {
	            name: "PLAYLIST_BOTTOM_LEFT_CORNER",
	            x: 0,
	            y: 72,
	            width: 125,
	            height: 38,
	        },
	        {
	            name: "PLAYLIST_BOTTOM_RIGHT_CORNER",
	            x: 126,
	            y: 72,
	            width: 150,
	            height: 38,
	        },
	        {
	            name: "PLAYLIST_VISUALIZER_BACKGROUND",
	            x: 205,
	            y: 0,
	            width: 75,
	            height: 38,
	        },
	        { name: "PLAYLIST_SHADE_BACKGROUND", x: 72, y: 57, width: 25, height: 14 },
	        {
	            name: "PLAYLIST_SHADE_BACKGROUND_LEFT",
	            x: 72,
	            y: 42,
	            width: 25,
	            height: 14,
	        },
	        {
	            name: "PLAYLIST_SHADE_BACKGROUND_RIGHT",
	            x: 99,
	            y: 57,
	            width: 50,
	            height: 14,
	        },
	        {
	            name: "PLAYLIST_SHADE_BACKGROUND_RIGHT_SELECTED",
	            x: 99,
	            y: 42,
	            width: 50,
	            height: 14,
	        },
	        {
	            name: "PLAYLIST_SCROLL_HANDLE_SELECTED",
	            x: 61,
	            y: 53,
	            width: 8,
	            height: 18,
	        },
	        { name: "PLAYLIST_SCROLL_HANDLE", x: 52, y: 53, width: 8, height: 18 },
	        { name: "PLAYLIST_ADD_URL", x: 0, y: 111, width: 22, height: 18 },
	        { name: "PLAYLIST_ADD_URL_SELECTED", x: 23, y: 111, width: 22, height: 18 },
	        { name: "PLAYLIST_ADD_DIR", x: 0, y: 130, width: 22, height: 18 },
	        { name: "PLAYLIST_ADD_DIR_SELECTED", x: 23, y: 130, width: 22, height: 18 },
	        { name: "PLAYLIST_ADD_FILE", x: 0, y: 149, width: 22, height: 18 },
	        {
	            name: "PLAYLIST_ADD_FILE_SELECTED",
	            x: 23,
	            y: 149,
	            width: 22,
	            height: 18,
	        },
	        { name: "PLAYLIST_REMOVE_ALL", x: 54, y: 111, width: 22, height: 18 },
	        {
	            name: "PLAYLIST_REMOVE_ALL_SELECTED",
	            x: 77,
	            y: 111,
	            width: 22,
	            height: 18,
	        },
	        { name: "PLAYLIST_CROP", x: 54, y: 130, width: 22, height: 18 },
	        { name: "PLAYLIST_CROP_SELECTED", x: 77, y: 130, width: 22, height: 18 },
	        { name: "PLAYLIST_REMOVE_SELECTED", x: 54, y: 149, width: 22, height: 18 },
	        {
	            name: "PLAYLIST_REMOVE_SELECTED_SELECTED",
	            x: 77,
	            y: 149,
	            width: 22,
	            height: 18,
	        },
	        { name: "PLAYLIST_REMOVE_MISC", x: 54, y: 168, width: 22, height: 18 },
	        {
	            name: "PLAYLIST_REMOVE_MISC_SELECTED",
	            x: 77,
	            y: 168,
	            width: 22,
	            height: 18,
	        },
	        {
	            name: "PLAYLIST_INVERT_SELECTION",
	            x: 104,
	            y: 111,
	            width: 22,
	            height: 18,
	        },
	        {
	            name: "PLAYLIST_INVERT_SELECTION_SELECTED",
	            x: 127,
	            y: 111,
	            width: 22,
	            height: 18,
	        },
	        { name: "PLAYLIST_SELECT_ZERO", x: 104, y: 130, width: 22, height: 18 },
	        {
	            name: "PLAYLIST_SELECT_ZERO_SELECTED",
	            x: 127,
	            y: 130,
	            width: 22,
	            height: 18,
	        },
	        { name: "PLAYLIST_SELECT_ALL", x: 104, y: 149, width: 22, height: 18 },
	        {
	            name: "PLAYLIST_SELECT_ALL_SELECTED",
	            x: 127,
	            y: 149,
	            width: 22,
	            height: 18,
	        },
	        { name: "PLAYLIST_SORT_LIST", x: 154, y: 111, width: 22, height: 18 },
	        {
	            name: "PLAYLIST_SORT_LIST_SELECTED",
	            x: 177,
	            y: 111,
	            width: 22,
	            height: 18,
	        },
	        { name: "PLAYLIST_FILE_INFO", x: 154, y: 130, width: 22, height: 18 },
	        {
	            name: "PLAYLIST_FILE_INFO_SELECTED",
	            x: 177,
	            y: 130,
	            width: 22,
	            height: 18,
	        },
	        { name: "PLAYLIST_MISC_OPTIONS", x: 154, y: 149, width: 22, height: 18 },
	        {
	            name: "PLAYLIST_MISC_OPTIONS_SELECTED",
	            x: 177,
	            y: 149,
	            width: 22,
	            height: 18,
	        },
	        { name: "PLAYLIST_NEW_LIST", x: 204, y: 111, width: 22, height: 18 },
	        {
	            name: "PLAYLIST_NEW_LIST_SELECTED",
	            x: 227,
	            y: 111,
	            width: 22,
	            height: 18,
	        },
	        { name: "PLAYLIST_SAVE_LIST", x: 204, y: 130, width: 22, height: 18 },
	        {
	            name: "PLAYLIST_SAVE_LIST_SELECTED",
	            x: 227,
	            y: 130,
	            width: 22,
	            height: 18,
	        },
	        { name: "PLAYLIST_LOAD_LIST", x: 204, y: 149, width: 22, height: 18 },
	        {
	            name: "PLAYLIST_LOAD_LIST_SELECTED",
	            x: 227,
	            y: 149,
	            width: 22,
	            height: 18,
	        },
	        { name: "PLAYLIST_ADD_MENU_BAR", x: 48, y: 111, width: 3, height: 54 },
	        { name: "PLAYLIST_REMOVE_MENU_BAR", x: 100, y: 111, width: 3, height: 72 },
	        { name: "PLAYLIST_SELECT_MENU_BAR", x: 150, y: 111, width: 3, height: 54 },
	        { name: "PLAYLIST_MISC_MENU_BAR", x: 200, y: 111, width: 3, height: 54 },
	        { name: "PLAYLIST_LIST_BAR", x: 250, y: 111, width: 3, height: 54 },
	        { name: "PLAYLIST_CLOSE_SELECTED", x: 52, y: 42, width: 9, height: 9 },
	        { name: "PLAYLIST_COLLAPSE_SELECTED", x: 62, y: 42, width: 9, height: 9 },
	        { name: "PLAYLIST_EXPAND_SELECTED", x: 150, y: 42, width: 9, height: 9 },
	    ],
	    EQ_EX: [
	        {
	            name: "EQ_SHADE_BACKGROUND_SELECTED",
	            x: 0,
	            y: 0,
	            width: 275,
	            height: 14,
	        },
	        { name: "EQ_SHADE_BACKGROUND", x: 0, y: 15, width: 275, height: 14 },
	        { name: "EQ_SHADE_VOLUME_SLIDER_LEFT", x: 1, y: 30, width: 3, height: 7 },
	        { name: "EQ_SHADE_VOLUME_SLIDER_CENTER", x: 4, y: 30, width: 3, height: 7 },
	        { name: "EQ_SHADE_VOLUME_SLIDER_RIGHT", x: 7, y: 30, width: 3, height: 7 },
	        { name: "EQ_SHADE_BALANCE_SLIDER_LEFT", x: 11, y: 30, width: 3, height: 7 },
	        {
	            name: "EQ_SHADE_BALANCE_SLIDER_CENTER",
	            x: 14,
	            y: 30,
	            width: 3,
	            height: 7,
	        },
	        {
	            name: "EQ_SHADE_BALANCE_SLIDER_RIGHT",
	            x: 17,
	            y: 30,
	            width: 3,
	            height: 7,
	        },
	        { name: "EQ_MAXIMIZE_BUTTON_ACTIVE", x: 1, y: 38, width: 9, height: 9 },
	        { name: "EQ_MINIMIZE_BUTTON_ACTIVE", x: 1, y: 47, width: 9, height: 9 },
	        { name: "EQ_SHADE_CLOSE_BUTTON", x: 11, y: 38, width: 9, height: 9 },
	        { name: "EQ_SHADE_CLOSE_BUTTON_ACTIVE", x: 11, y: 47, width: 9, height: 9 },
	    ],
	    EQMAIN: [
	        { name: "EQ_WINDOW_BACKGROUND", x: 0, y: 0, width: 275, height: 116 },
	        { name: "EQ_TITLE_BAR", x: 0, y: 149, width: 275, height: 14 },
	        { name: "EQ_TITLE_BAR_SELECTED", x: 0, y: 134, width: 275, height: 14 },
	        { name: "EQ_SLIDER_BACKGROUND", x: 13, y: 164, width: 209, height: 129 },
	        { name: "EQ_SLIDER_THUMB", x: 0, y: 164, width: 11, height: 11 },
	        { name: "EQ_SLIDER_THUMB_SELECTED", x: 0, y: 176, width: 11, height: 11 },
	        { name: "EQ_CLOSE_BUTTON", x: 0, y: 116, width: 9, height: 9 },
	        { name: "EQ_CLOSE_BUTTON_ACTIVE", x: 0, y: 125, width: 9, height: 9 },
	        // This is technically not a sprite, it's just part of the background.
	        // However, we extract it to use it as a fallback for
	        // `EQ_MAXIMIZE_BUTTON_ACTIVE`. Without this, skins that don't implement
	        // `eq_ex.bmp` would show the default skin's `EQ_MAXIMIZE_BUTTON_ACTIVE`
	        // instead of showing no sprite aka, just showing through to this portion of
	        // the title bar image.
	        {
	            name: "EQ_MAXIMIZE_BUTTON_ACTIVE_FALLBACK",
	            x: 254,
	            y: 152,
	            width: 9,
	            height: 9,
	        },
	        { name: "EQ_ON_BUTTON", x: 10, y: 119, width: 26, height: 12 },
	        { name: "EQ_ON_BUTTON_DEPRESSED", x: 128, y: 119, width: 26, height: 12 },
	        { name: "EQ_ON_BUTTON_SELECTED", x: 69, y: 119, width: 26, height: 12 },
	        {
	            name: "EQ_ON_BUTTON_SELECTED_DEPRESSED",
	            x: 187,
	            y: 119,
	            width: 26,
	            height: 12,
	        },
	        { name: "EQ_AUTO_BUTTON", x: 36, y: 119, width: 32, height: 12 },
	        {
	            name: "EQ_AUTO_BUTTON_DEPRESSED",
	            x: 154,
	            y: 119,
	            width: 32,
	            height: 12,
	        },
	        { name: "EQ_AUTO_BUTTON_SELECTED", x: 95, y: 119, width: 32, height: 12 },
	        {
	            name: "EQ_AUTO_BUTTON_SELECTED_DEPRESSED",
	            x: 213,
	            y: 119,
	            width: 32,
	            height: 12,
	        },
	        { name: "EQ_GRAPH_BACKGROUND", x: 0, y: 294, width: 113, height: 19 },
	        { name: "EQ_GRAPH_LINE_COLORS", x: 115, y: 294, width: 1, height: 19 },
	        { name: "EQ_PRESETS_BUTTON", x: 224, y: 164, width: 44, height: 12 },
	        {
	            name: "EQ_PRESETS_BUTTON_SELECTED",
	            x: 224,
	            y: 176,
	            width: 44,
	            height: 12,
	        },
	        { name: "EQ_PREAMP_LINE", x: 0, y: 314, width: 113, height: 1 },
	    ],
	    POSBAR: [
	        {
	            name: "MAIN_POSITION_SLIDER_BACKGROUND",
	            x: 0,
	            y: 0,
	            width: 248,
	            height: 10,
	        },
	        {
	            name: "MAIN_POSITION_SLIDER_THUMB",
	            x: 248,
	            y: 0,
	            width: 29,
	            height: 10,
	        },
	        {
	            name: "MAIN_POSITION_SLIDER_THUMB_SELECTED",
	            x: 278,
	            y: 0,
	            width: 29,
	            height: 10,
	        },
	    ],
	    SHUFREP: [
	        { name: "MAIN_SHUFFLE_BUTTON", x: 28, y: 0, width: 47, height: 15 },
	        {
	            name: "MAIN_SHUFFLE_BUTTON_DEPRESSED",
	            x: 28,
	            y: 15,
	            width: 47,
	            height: 15,
	        },
	        {
	            name: "MAIN_SHUFFLE_BUTTON_SELECTED",
	            x: 28,
	            y: 30,
	            width: 47,
	            height: 15,
	        },
	        {
	            name: "MAIN_SHUFFLE_BUTTON_SELECTED_DEPRESSED",
	            x: 28,
	            y: 45,
	            width: 47,
	            height: 15,
	        },
	        { name: "MAIN_REPEAT_BUTTON", x: 0, y: 0, width: 28, height: 15 },
	        {
	            name: "MAIN_REPEAT_BUTTON_DEPRESSED",
	            x: 0,
	            y: 15,
	            width: 28,
	            height: 15,
	        },
	        {
	            name: "MAIN_REPEAT_BUTTON_SELECTED",
	            x: 0,
	            y: 30,
	            width: 28,
	            height: 15,
	        },
	        {
	            name: "MAIN_REPEAT_BUTTON_SELECTED_DEPRESSED",
	            x: 0,
	            y: 45,
	            width: 28,
	            height: 15,
	        },
	        { name: "MAIN_EQ_BUTTON", x: 0, y: 61, width: 23, height: 12 },
	        { name: "MAIN_EQ_BUTTON_SELECTED", x: 0, y: 73, width: 23, height: 12 },
	        { name: "MAIN_EQ_BUTTON_DEPRESSED", x: 46, y: 61, width: 23, height: 12 },
	        {
	            name: "MAIN_EQ_BUTTON_DEPRESSED_SELECTED",
	            x: 46,
	            y: 73,
	            width: 23,
	            height: 12,
	        },
	        { name: "MAIN_PLAYLIST_BUTTON", x: 23, y: 61, width: 23, height: 12 },
	        {
	            name: "MAIN_PLAYLIST_BUTTON_SELECTED",
	            x: 23,
	            y: 73,
	            width: 23,
	            height: 12,
	        },
	        {
	            name: "MAIN_PLAYLIST_BUTTON_DEPRESSED",
	            x: 69,
	            y: 61,
	            width: 23,
	            height: 12,
	        },
	        {
	            name: "MAIN_PLAYLIST_BUTTON_DEPRESSED_SELECTED",
	            x: 69,
	            y: 73,
	            width: 23,
	            height: 12,
	        },
	    ],
	    TEXT: characterSprites,
	    TITLEBAR: [
	        { name: "MAIN_TITLE_BAR", x: 27, y: 15, width: 275, height: 14 },
	        { name: "MAIN_TITLE_BAR_SELECTED", x: 27, y: 0, width: 275, height: 14 },
	        {
	            name: "MAIN_EASTER_EGG_TITLE_BAR",
	            x: 27,
	            y: 72,
	            width: 275,
	            height: 14,
	        },
	        {
	            name: "MAIN_EASTER_EGG_TITLE_BAR_SELECTED",
	            x: 27,
	            y: 57,
	            width: 275,
	            height: 14,
	        },
	        { name: "MAIN_OPTIONS_BUTTON", x: 0, y: 0, width: 9, height: 9 },
	        {
	            name: "MAIN_OPTIONS_BUTTON_DEPRESSED",
	            x: 0,
	            y: 9,
	            width: 9,
	            height: 9,
	        },
	        { name: "MAIN_MINIMIZE_BUTTON", x: 9, y: 0, width: 9, height: 9 },
	        {
	            name: "MAIN_MINIMIZE_BUTTON_DEPRESSED",
	            x: 9,
	            y: 9,
	            width: 9,
	            height: 9,
	        },
	        { name: "MAIN_SHADE_BUTTON", x: 0, y: 18, width: 9, height: 9 },
	        { name: "MAIN_SHADE_BUTTON_DEPRESSED", x: 9, y: 18, width: 9, height: 9 },
	        { name: "MAIN_CLOSE_BUTTON", x: 18, y: 0, width: 9, height: 9 },
	        { name: "MAIN_CLOSE_BUTTON_DEPRESSED", x: 18, y: 9, width: 9, height: 9 },
	        {
	            name: "MAIN_CLUTTER_BAR_BACKGROUND",
	            x: 304,
	            y: 0,
	            width: 8,
	            height: 43,
	        },
	        {
	            name: "MAIN_CLUTTER_BAR_BACKGROUND_DISABLED",
	            x: 312,
	            y: 0,
	            width: 8,
	            height: 43,
	        },
	        {
	            name: "MAIN_CLUTTER_BAR_BUTTON_O_SELECTED",
	            x: 304,
	            y: 47,
	            width: 8,
	            height: 8,
	        },
	        {
	            name: "MAIN_CLUTTER_BAR_BUTTON_A_SELECTED",
	            x: 312,
	            y: 55,
	            width: 8,
	            height: 7,
	        },
	        {
	            name: "MAIN_CLUTTER_BAR_BUTTON_I_SELECTED",
	            x: 320,
	            y: 62,
	            width: 8,
	            height: 7,
	        },
	        {
	            name: "MAIN_CLUTTER_BAR_BUTTON_D_SELECTED",
	            x: 328,
	            y: 69,
	            width: 8,
	            height: 8,
	        },
	        {
	            name: "MAIN_CLUTTER_BAR_BUTTON_V_SELECTED",
	            x: 336,
	            y: 77,
	            width: 8,
	            height: 7,
	        },
	        { name: "MAIN_SHADE_BACKGROUND", x: 27, y: 42, width: 275, height: 14 },
	        {
	            name: "MAIN_SHADE_BACKGROUND_SELECTED",
	            x: 27,
	            y: 29,
	            width: 275,
	            height: 14,
	        },
	        { name: "MAIN_SHADE_BUTTON_SELECTED", x: 0, y: 27, width: 9, height: 9 },
	        {
	            name: "MAIN_SHADE_BUTTON_SELECTED_DEPRESSED",
	            x: 9,
	            y: 27,
	            width: 9,
	            height: 9,
	        },
	        {
	            name: "MAIN_SHADE_POSITION_BACKGROUND",
	            x: 0,
	            y: 36,
	            width: 17,
	            height: 7,
	        },
	        { name: "MAIN_SHADE_POSITION_THUMB", x: 20, y: 36, width: 3, height: 7 },
	        {
	            name: "MAIN_SHADE_POSITION_THUMB_LEFT",
	            x: 17,
	            y: 36,
	            width: 3,
	            height: 7,
	        },
	        {
	            name: "MAIN_SHADE_POSITION_THUMB_RIGHT",
	            x: 23,
	            y: 36,
	            width: 3,
	            height: 7,
	        },
	    ],
	    VOLUME: [
	        { name: "MAIN_VOLUME_BACKGROUND", x: 0, y: 0, width: 68, height: 420 },
	        { name: "MAIN_VOLUME_THUMB", x: 15, y: 422, width: 14, height: 11 },
	        {
	            name: "MAIN_VOLUME_THUMB_SELECTED",
	            x: 0,
	            y: 422,
	            width: 14,
	            height: 11,
	        },
	    ],
	    GEN: [
	        { name: "GEN_TOP_LEFT_SELECTED", x: 0, y: 0, width: 25, height: 20 },
	        { name: "GEN_TOP_LEFT_END_SELECTED", x: 26, y: 0, width: 25, height: 20 },
	        {
	            name: "GEN_TOP_CENTER_FILL_SELECTED",
	            x: 52,
	            y: 0,
	            width: 25,
	            height: 20,
	        },
	        { name: "GEN_TOP_RIGHT_END_SELECTED", x: 78, y: 0, width: 25, height: 20 },
	        {
	            name: "GEN_TOP_LEFT_RIGHT_FILL_SELECTED",
	            x: 104,
	            y: 0,
	            width: 25,
	            height: 20,
	        },
	        { name: "GEN_TOP_RIGHT_SELECTED", x: 130, y: 0, width: 25, height: 20 },
	        { name: "GEN_TOP_LEFT", x: 0, y: 21, width: 25, height: 20 },
	        { name: "GEN_TOP_LEFT_END", x: 26, y: 21, width: 25, height: 20 },
	        { name: "GEN_TOP_CENTER_FILL", x: 52, y: 21, width: 25, height: 20 },
	        { name: "GEN_TOP_RIGHT_END", x: 78, y: 21, width: 25, height: 20 },
	        { name: "GEN_TOP_LEFT_RIGHT_FILL", x: 104, y: 21, width: 25, height: 20 },
	        { name: "GEN_TOP_RIGHT", x: 130, y: 21, width: 25, height: 20 },
	        { name: "GEN_BOTTOM_LEFT", x: 0, y: 42, width: 125, height: 14 },
	        { name: "GEN_BOTTOM_RIGHT", x: 0, y: 57, width: 125, height: 14 },
	        { name: "GEN_BOTTOM_FILL", x: 127, y: 72, width: 25, height: 14 },
	        { name: "GEN_MIDDLE_LEFT", x: 127, y: 42, width: 11, height: 29 },
	        { name: "GEN_MIDDLE_LEFT_BOTTOM", x: 158, y: 42, width: 11, height: 24 },
	        { name: "GEN_MIDDLE_RIGHT", x: 139, y: 42, width: 8, height: 29 },
	        { name: "GEN_MIDDLE_RIGHT_BOTTOM", x: 170, y: 42, width: 8, height: 24 },
	        { name: "GEN_CLOSE_SELECTED", x: 148, y: 42, width: 9, height: 9 },
	    ],
	    /*
	  
	    We don't currently support the Media Library, so there are disabled
	    GENEX: [
	      {
	        name: "GENEX_BUTTON_BACKGROUND_LEFT_UNPRESSED",
	        x: 0,
	        y: 0,
	        height: 15,
	        width: 4,
	      },
	      {
	        name: "GENEX_BUTTON_BACKGROUND_CENTER_UNPRESSED",
	        x: 4,
	        y: 0,
	        height: 15,
	        width: 39,
	      },
	      {
	        name: "GENEX_BUTTON_BACKGROUND_RIGHT_UNPRESSED",
	        x: 43,
	        y: 0,
	        height: 15,
	        width: 4,
	      },
	      {
	        name: "GENEX_BUTTON_BACKGROUND_PRESSED",
	        x: 0,
	        y: 1,
	        height: 15,
	        width: 47,
	      },
	      { name: "GENEX_SCROLL_UP_UNPRESSED", x: 0, y: 31, height: 14, width: 14 },
	      {
	        name: "GENEX_SCROLL_DOWN_UNPRESSED",
	        x: 14,
	        y: 31,
	        height: 14,
	        width: 14,
	      },
	      { name: "GENEX_SCROLL_UP_PRESSED", x: 28, y: 31, height: 14, width: 14 },
	      { name: "GENEX_SCROLL_DOWN_PRESSED", x: 42, y: 31, height: 14, width: 14 },
	      { name: "GENEX_SCROLL_LEFT_UNPRESSED", x: 0, y: 45, height: 14, width: 14 },
	      {
	        name: "GENEX_SCROLL_RIGHT_UNPRESSED",
	        x: 14,
	        y: 45,
	        height: 14,
	        width: 14,
	      },
	      { name: "GENEX_SCROLL_LEFT_PRESSED", x: 28, y: 45, height: 14, width: 14 },
	      { name: "GENEX_SCROLL_RIGHT_PRESSED", x: 42, y: 45, height: 14, width: 14 },
	      {
	        name: "GENEX_VERTICAL_SCROLL_HANDLE_UNPRESSED",
	        x: 56,
	        y: 31,
	        height: 28,
	        width: 14,
	      },
	      {
	        name: "GENEX_VERTICAL_SCROLL_HANDLE_PRESSED",
	        x: 70,
	        y: 31,
	        height: 28,
	        width: 14,
	      },
	      {
	        name: "GENEX_HORIZONTAL_SCROLL_HANDLE_UNPRESSED",
	        x: 84,
	        y: 31,
	        height: 14,
	        width: 28,
	      },
	      {
	        name: "GENEX_HORIZONTAL_SCROLL_HANDLE_PRESSED",
	        x: 84,
	        y: 45,
	        height: 14,
	        width: 28,
	      },
	    ],
	    */
	};

	function pointPairs(arr) {
	    const pairedValues = [];
	    for (let i = 0; i < arr.length; i += 2) {
	        pairedValues.push(`${arr[i]},${arr[i + 1]}`);
	    }
	    return pairedValues;
	}
	function regionParser(regionStr) {
	    const iniData = parseIni(regionStr);
	    const data = {};
	    Object.keys(iniData).forEach((section) => {
	        const { numpoints, pointlist } = iniData[section];
	        if (!numpoints || !pointlist) {
	            return;
	        }
	        const pointCounts = numpoints.split(/\s*,\s*/).filter((val) => val !== "");
	        const points = pointPairs(
	        // points can be separated by spaces, or by commas
	        pointlist.split(/\s*[, ]\s*/).filter((val) => val !== ""));
	        let pointIndex = 0;
	        const polygons = pointCounts.map((numStr) => {
	            const num = Number(numStr);
	            if (num < 3) {
	                // What use is a polygon with less than three sides?
	                pointIndex += num;
	                return null;
	            }
	            const polygon = points.slice(pointIndex, pointIndex + num).join(" ");
	            if (!polygon.length) {
	                // It's possible that the skin author specified more polygons than provided points.
	                return null;
	            }
	            pointIndex += num;
	            return polygon;
	        });
	        const validPolygons = polygons.filter((polygon) => polygon != null);
	        if (validPolygons.length) {
	            data[section] = validPolygons;
	        }
	    });
	    return data;
	}

	const getFileExtension = (fileName) => {
	    const matches = /\.([a-z]{3,4})$/i.exec(fileName);
	    return matches ? matches[1].toLowerCase() : null;
	};
	function getFilenameRegex(base, ext) {
	    // Note: The four slashes: \\\\ ultimately represent a single escaped slash in
	    // the regex ("\\"), however each itself needs to be escaped so that
	    // JavaScript does not interperate it as an escape character in the string
	    // literal. Wonderful.
	    return new RegExp(`^(.*[/\\\\])?${base}.(${ext})$`, "i");
	}
	async function getFileFromZip(zip, fileName, ext, mode) {
	    const files = zip.file(getFilenameRegex(fileName, ext));
	    if (!files.length) {
	        return null;
	    }
	    // Windows file system is case insensitve, but zip files are not.
	    // This means that it's possible for a zip to contain both `main.bmp` _and_
	    // `main.BMP` but in Winamp only one will be materialized onto disk when
	    // decompressing. I suspect that in this case later files in the archive
	    // overwrite earlier ones. To mimic that behavior we use the last matching
	    // file.
	    //
	    // This works because `JSZip.file` filters the files by iterating the
	    // underlying `files` object under the hood:
	    // https://github.com/Stuk/jszip/blob/25d401e104926fef8528d670ecfe53f14e77a297/lib/object.js#L182
	    // Since JavaScript objects are iterable in the order that the keys were
	    // added this _should_ mean that by taking the last file here we will get
	    // the last file that JSZip extracted.
	    const lastFile = files[files.length - 1];
	    try {
	        const contents = await lastFile.async(mode);
	        return { contents, name: lastFile.name };
	    }
	    catch (e) {
	        console.warn(`Failed to extract "${fileName}.${ext}" from the skin archive.`);
	        return null;
	    }
	}
	function fallbackGetImgFromBlob(blob) {
	    return imgFromUrl(URL.createObjectURL(blob));
	}
	async function getImgFromBlob(blob) {
	    try {
	        // Use this faster native browser API if available.
	        // NOTE: In some browsers `window.createImageBitmap` may not exist so this will throw.
	        return await window.createImageBitmap(blob);
	    }
	    catch (e) {
	        try {
	            return await fallbackGetImgFromBlob(blob);
	        }
	        catch (ee) {
	            // Like Winamp we will silently fail on images that don't parse.
	            return null;
	        }
	    }
	}
	function getSpriteUrisFromImg(img, sprites) {
	    const canvas = document.createElement("canvas");
	    const context = canvas.getContext("2d");
	    if (context == null) {
	        throw new Error("Failed to get canvas context");
	    }
	    const images = {};
	    sprites.forEach((sprite) => {
	        canvas.height = sprite.height;
	        canvas.width = sprite.width;
	        context.drawImage(img, -sprite.x, -sprite.y);
	        const image = canvas.toDataURL();
	        images[sprite.name] = image;
	    });
	    return images;
	}
	async function getImgFromFilename(zip, fileName) {
	    // Winamp only supports .bmp images, but WACUP set a precidence of supporting
	    // .png as well to reduce size. Since we care about size as well, we follow
	    // suit. Our default skin uses .png to save 14kb.
	    const file = await getFileFromZip(zip, fileName, "(png|bmp)", "blob");
	    if (!file) {
	        return null;
	    }
	    const mimeType = `image/${getFileExtension(file.name) || "*"}`;
	    // The spec for createImageBitmap() says the browser should try to sniff the
	    // mime type, but it looks like Firefox does not. So we specify it here
	    // explicitly.
	    const typedBlob = new Blob([file.contents], { type: mimeType });
	    return getImgFromBlob(typedBlob);
	}
	async function getSpriteUrisFromFilename(zip, fileName) {
	    const img = await getImgFromFilename(zip, fileName);
	    if (img == null) {
	        return {};
	    }
	    return getSpriteUrisFromImg(img, sprites[fileName]);
	}
	// https://docs.microsoft.com/en-us/windows/win32/xaudio2/resource-interchange-file-format--riff-
	const RIFF_MAGIC = "RIFF".split("").map((c) => c.charCodeAt(0));
	function arrayStartsWith(arr, matcher) {
	    return matcher.every((item, i) => arr[i] === item);
	}
	async function getCursorFromFilename(zip, fileName) {
	    const file = await getFileFromZip(zip, fileName, "CUR", "uint8array");
	    if (file == null) {
	        return null;
	    }
	    const contents = file.contents;
	    if (arrayStartsWith(contents, RIFF_MAGIC)) {
	        return { type: "ani", aniData: contents };
	    }
	    return { type: "cur", url: curUrlFromByteArray$1(contents) };
	}
	async function getPlaylistStyle(zip) {
	    const files = zip.file(getFilenameRegex("PLEDIT", "txt"));
	    const file = files[0];
	    if (file == null) {
	        return DEFAULT_SKIN.playlistStyle;
	    }
	    const ini = await file.async("text");
	    if (ini == null) {
	        return DEFAULT_SKIN.playlistStyle;
	    }
	    const data = ini && parseIni(ini).text;
	    if (!data) {
	        // Corrupt or missing PLEDIT.txt file.
	        return DEFAULT_SKIN.playlistStyle;
	    }
	    // Winamp seems to permit colors that contain too many characters.
	    // For compatibility with existing skins, we normalize them here.
	    ["normal", "current", "normalbg", "selectedbg", "mbFG", "mbBG"].forEach((colorKey) => {
	        let color = data[colorKey];
	        if (!color) {
	            return;
	        }
	        if (color[0] !== "#") {
	            color = `#${color}`;
	        }
	        data[colorKey] = color.slice(0, 7);
	    });
	    return { ...DEFAULT_SKIN.playlistStyle, ...data };
	}
	async function getGenExColors(zip) {
	    const img = await getImgFromFilename(zip, "GENEX");
	    if (img == null) {
	        return null;
	    }
	    const canvas = document.createElement("canvas");
	    const context = canvas.getContext("2d");
	    if (context == null) {
	        return null;
	    }
	    canvas.width = img.width;
	    canvas.height = img.height;
	    context.drawImage(img, 0, 0);
	    const getColorAt = (x) => `rgb(${context
        .getImageData(x, 0, 1, 1)
        // Discard the alpha channel
        .data.slice(0, 3)
        .join(",")})`;
	    // Ideally we would just have a map from key to the x value and map over
	    // that with getColorAt, but I don't know a great way to make that type
	    // safe. So, we'll just do this for now, where we explicitly call getColorAt
	    // for each key.
	    return {
	        // (1) x=48: item background (background to edits, listviews, etc.)
	        itemBackground: getColorAt(48),
	        // (2) x=50: item foreground (text colour of edits, listviews, etc.)
	        itemForeground: getColorAt(50),
	        // (3) x=52: window background (used to set the bg color for the dialog)
	        windowBackground: getColorAt(52),
	        // (4) x=54: button text colour
	        buttonText: getColorAt(54),
	        // (5) x=56: window text colour
	        windowText: getColorAt(56),
	        // (6) x=58: colour of dividers and sunken borders
	        divider: getColorAt(58),
	        // (7) x=60: selection colour for entries inside playlists (nothing else yet)
	        playlistSelection: getColorAt(60),
	        // (8) x=62: listview header background colour
	        listHeaderBackground: getColorAt(62),
	        // (9) x=64: listview header text colour
	        listHeaderText: getColorAt(64),
	        // (10) x=66: listview header frame top and left colour
	        listHeaderFrameTopAndLeft: getColorAt(66),
	        // (11) x=68: listview header frame bottom and right colour
	        listHeaderFrameBottomAndRight: getColorAt(68),
	        // (12) x=70: listview header frame colour, when pressed
	        listHeaderFramePressed: getColorAt(70),
	        // (13) x=72: listview header dead area colour
	        listHeaderDeadArea: getColorAt(72),
	        // (14) x=74: scrollbar colour #1
	        scrollbarOne: getColorAt(74),
	        // (15) x=76: scrollbar colour #2
	        scrollbarTwo: getColorAt(76),
	        // (16) x=78: pressed scrollbar colour #1
	        pressedScrollbarOne: getColorAt(78),
	        // (17) x=80: pressed scrollbar colour #2
	        pressedScrollbarTwo: getColorAt(80),
	        // (18) x=82: scrollbar dead area colour
	        scrollbarDeadArea: getColorAt(82),
	        // (19) x=84 List view text colour highlighted
	        listTextHighlighted: getColorAt(84),
	        // (20) x=86 List view background colour highlighted
	        listTextHighlightedBackground: getColorAt(86),
	        // (21) x=88 List view text colour selected
	        listTextSelected: getColorAt(88),
	        // (22) x=90 List view background colour selected
	        listTextSelectedBackground: getColorAt(90),
	    };
	}

	const shallowMerge = objs => objs.reduce((prev, img) => Object.assign(prev, img), {});
	const CURSORS = ["CLOSE", "EQCLOSE", "EQNORMAL", "EQSLID", "EQTITLE", "MAINMENU", "MMENU", "MIN", "NORMAL", "PCLOSE", "PNORMAL", "POSBAR", "PSIZE", "PTBAR", "PVSCROLL", "PWINBUT", "PWSNORM", "PWSSIZE", "SONGNAME", "TITLEBAR", "VOLBAL", "WINBUT", "WSNORMAL", "WSPOSBAR"
	/*
	 * > There are usually 4 more cursors in the skins: volbar.cur, wsclose.cur,
	 * > wswinbut.cur, wsmin.cur, but they are never used, at least in the last
	 * > versions of winamp, so there's no need of including them. The cursors
	 * > shown when the mouse is over the app-buttons are the same in normal and
	 * > winshade mode, except for the main menu button. You can make animated
	 * > cursors, but you have to name them with the extension .cur (animated
	 * > cursors are usually .ani files).
	 *
	 * -- Skinners Atlas
	 *
	 * "VOLBAR",
	 * "WSCLOSE",
	 * "WSWINBUT",
	 * "WSMIN",
	 *
	 */];
	async function genVizColors(zip) {
	  const viscolor = await getFileFromZip(zip, "VISCOLOR", "txt", "text");
	  return viscolor ? parseViscolors(viscolor.contents) : DEFAULT_SKIN.colors;
	}
	async function genImages(zip) {
	  const imageObjs = await Promise.all(Object.keys(sprites).map(fileName => getSpriteUrisFromFilename(zip, fileName)));
	  // Merge all the objects into a single object. Tests assert that sprite keys are unique.
	  return shallowMerge(imageObjs);
	}
	async function genCursors(zip) {
	  const cursorObjs = await Promise.all(CURSORS.map(async cursorName => ({
	    [cursorName]: await getCursorFromFilename(zip, cursorName)
	  })));
	  return shallowMerge(cursorObjs);
	}
	async function genRegion(zip) {
	  const region = await getFileFromZip(zip, "REGION", "txt", "text");
	  return region ? regionParser(region.contents) : {};
	}
	async function genGenTextSprites(zip) {
	  const img = await getImgFromFilename(zip, "GEN");
	  if (img == null) {
	    return null;
	  }
	  const canvas = document.createElement("canvas");
	  const context = canvas.getContext("2d");
	  canvas.width = img.width;
	  canvas.height = img.height;
	  context.drawImage(img, 0, 0);
	  const getLetters = (y, prefix) => {
	    const getColorAt = x => context.getImageData(x, y, 1, 1).data.join(",");
	    let x = 1;
	    const backgroundColor = getColorAt(0);
	    const height = 7;
	    return LETTERS.map(letter => {
	      let nextBackground = x;
	      while (getColorAt(nextBackground) !== backgroundColor && nextBackground < canvas.width) {
	        nextBackground++;
	      }
	      const width = nextBackground - x;
	      const name = `${prefix}_${letter}`;
	      const sprite = {
	        x,
	        y,
	        height,
	        width,
	        name
	      };
	      x = nextBackground + 1;
	      return sprite;
	    });
	  };
	  const letterWidths = {};
	  const sprites = [...getLetters(88, "GEN_TEXT_SELECTED"), ...getLetters(96, "GEN_TEXT")];
	  sprites.forEach(sprite => {
	    letterWidths[sprite.name] = sprite.width;
	  });
	  return [letterWidths, getSpriteUrisFromImg(img, sprites)];
	}

	// A promise that, given an array buffer returns a skin style object
	async function skinParser(zipFileBuffer, JSZip) {
	  const zip = await JSZip.loadAsync(zipFileBuffer);
	  const [colors, playlistStyle, images, cursors, region, genTextSprites, genExColors] = await Promise.all([genVizColors(zip), getPlaylistStyle(zip), genImages(zip), genCursors(zip), genRegion(zip), genGenTextSprites(zip), getGenExColors(zip)]);
	  const [genLetterWidths, genTextImages] = genTextSprites || [null, {}];
	  return {
	    colors,
	    playlistStyle,
	    images: {
	      ...images,
	      ...genTextImages
	    },
	    genLetterWidths,
	    cursors,
	    region,
	    genExColors
	  };
	}

	var tinyqueue = {exports: {}};

	tinyqueue.exports = TinyQueue;
	tinyqueue.exports.default = TinyQueue;
	function TinyQueue(data, compare) {
	  if (!(this instanceof TinyQueue)) return new TinyQueue(data, compare);
	  this.data = data || [];
	  this.length = this.data.length;
	  this.compare = compare || defaultCompare;
	  if (this.length > 0) {
	    for (var i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);
	  }
	}
	function defaultCompare(a, b) {
	  return a < b ? -1 : a > b ? 1 : 0;
	}
	TinyQueue.prototype = {
	  push: function (item) {
	    this.data.push(item);
	    this.length++;
	    this._up(this.length - 1);
	  },
	  pop: function () {
	    if (this.length === 0) return undefined;
	    var top = this.data[0];
	    this.length--;
	    if (this.length > 0) {
	      this.data[0] = this.data[this.length];
	      this._down(0);
	    }
	    this.data.pop();
	    return top;
	  },
	  peek: function () {
	    return this.data[0];
	  },
	  _up: function (pos) {
	    var data = this.data;
	    var compare = this.compare;
	    var item = data[pos];
	    while (pos > 0) {
	      var parent = pos - 1 >> 1;
	      var current = data[parent];
	      if (compare(item, current) >= 0) break;
	      data[pos] = current;
	      pos = parent;
	    }
	    data[pos] = item;
	  },
	  _down: function (pos) {
	    var data = this.data;
	    var compare = this.compare;
	    var halfLength = this.length >> 1;
	    var item = data[pos];
	    while (pos < halfLength) {
	      var left = (pos << 1) + 1;
	      var right = left + 1;
	      var best = data[left];
	      if (right < this.length && compare(data[right], best) < 0) {
	        left = right;
	        best = data[right];
	      }
	      if (compare(best, item) >= 0) break;
	      data[pos] = best;
	      pos = left;
	    }
	    data[pos] = item;
	  }
	};
	var tinyqueueExports = tinyqueue.exports;
	var TinyQueue$1 = /*@__PURE__*/getDefaultExportFromCjs(tinyqueueExports);

	// Push promises onto a queue with a priority.
	// Run a given number of jobs in parallel
	// Useful for prioritizing network requests
	class LoadQueue {
	  constructor({
	    threads
	  }) {
	    // TODO: Consider not running items with zero priority
	    // Priority is a function so that items can change their priority between
	    // when their priority is evaluated.
	    // For example, we might add a track to the playlist and then scroll to/away
	    // from it before it gets processed.
	    this._queue = new TinyQueue$1([], (a, b) => a.priority() - b.priority());
	    this._availableThreads = threads;
	  }
	  push(task, priority) {
	    const t = {
	      task,
	      priority
	    };
	    this._queue.push(t);
	    // Wait until the next event loop to pick a task to run. This way, we can
	    // enqueue multiple items in an event loop, and be sure they will be run in
	    // priority order.
	    setTimeout(() => {
	      this._run();
	    }, 0);
	    return () => {
	      // TODO: Could return a boolean representing if the task has already been
	      // kicked off.
	      this._queue = this._queue.filter(t1 => t1 !== t);
	    };
	  }
	  _run() {
	    while (this._availableThreads > 0) {
	      if (this._queue.length === 0) {
	        return;
	      }
	      this._availableThreads--;
	      const t = this._queue.pop();
	      const promise = t.task();
	      invariant$1(typeof promise.then === "function", `LoadQueue only supports loading Promises. Got ${promise}`);
	      promise.then(() => {
	        this._availableThreads++;
	        this._run();
	      });
	    }
	  }
	}

	function cropPlaylist() {
	    return (dispatch, getState) => {
	        const state = getState();
	        if (getSelectedTrackObjects(state).length === 0) {
	            return;
	        }
	        const selectedTrackIds = getSelectedTrackIds(state);
	        const { playlist: { trackOrder }, } = state;
	        dispatch({
	            type: REMOVE_TRACKS,
	            // @ts-ignore The keys are numbers, but TypeScript does not trust us.
	            // https://github.com/Microsoft/TypeScript/pull/12253#issuecomment-263132208
	            ids: trackOrder.filter((id) => !selectedTrackIds.has(id)),
	        });
	    };
	}
	function removeSelectedTracks() {
	    return (dispatch, getState) => {
	        dispatch({
	            type: REMOVE_TRACKS,
	            // @ts-ignore The keys are numbers, but TypeScript does not trust us.
	            // https://github.com/Microsoft/TypeScript/pull/12253#issuecomment-263132208
	            ids: Array.from(getSelectedTrackIds(getState())),
	        });
	    };
	}
	function removeAllTracks() {
	    return (dispatch) => {
	        // It's a bit funky that we need to do both of these.
	        dispatch({ type: STOP });
	        dispatch({ type: REMOVE_ALL_TRACKS });
	    };
	}
	function reverseList() {
	    return { type: REVERSE_LIST };
	}
	function randomizeList() {
	    return { type: RANDOMIZE_LIST };
	}
	function sortListByTitle() {
	    return (dispatch, getState) => {
	        const state = getState();
	        const tracks = getTracks(state);
	        const trackOrder = sort(getTrackOrder(state), (i) => `${tracks[i].title}`.toLowerCase());
	        return dispatch({ type: SET_TRACK_ORDER, trackOrder });
	    };
	}
	function setPlaylistScrollPosition(position) {
	    return { type: SET_PLAYLIST_SCROLL_POSITION, position };
	}
	function scrollNTracks(n) {
	    return (dispatch, getState) => {
	        const state = getState();
	        const overflow = getOverflowTrackCount(state);
	        const currentOffset = getScrollOffset(state);
	        const position = overflow ? clamp((currentOffset + n) / overflow, 0, 1) : 0;
	        return dispatch({
	            type: SET_PLAYLIST_SCROLL_POSITION,
	            position: position * 100,
	        });
	    };
	}
	function scrollPlaylistByDelta(e) {
	    e.preventDefault();
	    return (dispatch, getState) => {
	        const state = getState();
	        if (getOverflowTrackCount(state)) {
	            e.stopPropagation();
	        }
	        const totalPixelHeight = state.playlist.trackOrder.length * TRACK_HEIGHT;
	        const percentDelta = (e.deltaY / totalPixelHeight) * 100;
	        dispatch({
	            type: SET_PLAYLIST_SCROLL_POSITION,
	            position: clamp(state.display.playlistScrollPosition + percentDelta, 0, 100),
	        });
	    };
	}
	function scrollUpFourTracks() {
	    return scrollNTracks(-4);
	}
	function scrollDownFourTracks() {
	    return scrollNTracks(4);
	}
	function dragSelected(offset) {
	    return (dispatch, getState) => {
	        const state = getState();
	        const tracks = getTracks(state);
	        const trackOrder = getTrackOrder(state);
	        const selectedIds = getSelectedTrackIds(state);
	        const firstSelected = trackOrder.findIndex((trackId) => tracks[trackId] && selectedIds.has(trackId));
	        if (firstSelected === -1) {
	            return;
	        }
	        const lastSelected = findLastIndex(trackOrder, (trackId) => tracks[trackId] && selectedIds.has(trackId));
	        if (lastSelected === -1) {
	            throw new Error("We found a first selected, but not a last selected.");
	        }
	        // Ensure we don't try to drag off either end.
	        const min = -firstSelected;
	        const max = trackOrder.length - 1 - lastSelected;
	        const normalizedOffset = clamp(offset, min, max);
	        if (normalizedOffset !== 0) {
	            dispatch({ type: DRAG_SELECTED, offset: normalizedOffset });
	        }
	    };
	}
	function invertSelection() {
	    return { type: INVERT_SELECTION };
	}
	function selectZero() {
	    return { type: SELECT_ZERO };
	}
	function selectAll() {
	    return { type: SELECT_ALL };
	}

	// Lower is better
	const DURATION_VISIBLE_PRIORITY = 5;
	const META_DATA_VISIBLE_PRIORITY = 10;
	const DURATION_PRIORITY = 15;
	const META_DATA_PRIORITY = 20;
	const loadQueue = new LoadQueue({ threads: 4 });
	function addTracksFromReferences(fileReferences, loadStyle, atIndex) {
	    const tracks = Array.from(fileReferences).map((file) => ({
	        blob: file,
	        defaultName: file.name,
	    }));
	    return loadMediaFiles(tracks, loadStyle, atIndex);
	}
	const SKIN_FILENAME_MATCHER = new RegExp("(wsz|zip)$", "i");
	const EQF_FILENAME_MATCHER = new RegExp("eqf$", "i");
	function loadFilesFromReferences(fileReferences, loadStyle = LOAD_STYLE.PLAY, atIndex = undefined) {
	    return (dispatch) => {
	        if (fileReferences.length < 1) {
	            return;
	        }
	        else if (fileReferences.length === 1) {
	            const fileReference = fileReferences[0];
	            if (SKIN_FILENAME_MATCHER.test(fileReference.name)) {
	                dispatch(setSkinFromBlob(fileReference));
	                return;
	            }
	            else if (EQF_FILENAME_MATCHER.test(fileReference.name)) {
	                dispatch(setEqFromFileReference(fileReference));
	                return;
	            }
	        }
	        dispatch(addTracksFromReferences(fileReferences, loadStyle, atIndex));
	    };
	}
	function setSkinFromBlob(blob) {
	    return async (dispatch, getState, { requireJSZip }) => {
	        if (!requireJSZip) {
	            alert("Webamp has not been configured to support custom skins.");
	            return;
	        }
	        dispatch({ type: LOADING });
	        let JSZip;
	        try {
	            JSZip = await requireJSZip();
	        }
	        catch (e) {
	            console.error(e);
	            dispatch({ type: LOADED });
	            alert("Failed to load the skin parser.");
	            return;
	        }
	        try {
	            const skinData = await skinParser(blob, JSZip);
	            dispatch({
	                type: SET_SKIN_DATA,
	                data: {
	                    skinImages: skinData.images,
	                    skinColors: skinData.colors,
	                    skinPlaylistStyle: skinData.playlistStyle,
	                    skinCursors: skinData.cursors,
	                    skinRegion: skinData.region,
	                    skinGenLetterWidths: skinData.genLetterWidths,
	                    skinGenExColors: skinData.genExColors,
	                },
	            });
	        }
	        catch (e) {
	            console.error(e);
	            dispatch({ type: LOADED });
	            alert(`Failed to parse skin`);
	        }
	    };
	}
	function setSkinFromUrl(url) {
	    return async (dispatch) => {
	        dispatch({ type: LOADING });
	        try {
	            const response = await fetch(url);
	            if (!response.ok) {
	                throw new Error(response.statusText);
	            }
	            dispatch(setSkinFromBlob(response.blob()));
	        }
	        catch (e) {
	            console.error(e);
	            dispatch({ type: LOADED });
	            alert(`Failed to download skin from ${url}`);
	        }
	    };
	}
	// This function is private, since Winamp consumers can provide means for
	// opening files via other methods. Only use the file type specific
	// versions below, since they can defer to the user-defined behavior.
	function _openFileDialog(accept, expectedType) {
	    return async (dispatch) => {
	        const fileReferences = await promptForFileReferences({ accept });
	        dispatch({
	            type: "OPENED_FILES",
	            expectedType,
	            count: fileReferences.length,
	            firstFileName: fileReferences[0]?.name,
	        });
	        dispatch(loadFilesFromReferences(fileReferences));
	    };
	}
	function openEqfFileDialog() {
	    return _openFileDialog(".eqf", "EQ");
	}
	function openMediaFileDialog() {
	    return _openFileDialog(null, "MEDIA");
	}
	function openSkinFileDialog() {
	    return _openFileDialog(".zip, .wsz", "SKIN");
	}
	function fetchMediaDuration(url, id) {
	    return (dispatch, getState) => {
	        loadQueue.push(async () => {
	            try {
	                const duration = await genMediaDuration(url);
	                dispatch({ type: SET_MEDIA_DURATION, duration, id });
	            }
	            catch (e) {
	                // TODO: Should we update the state to indicate that we don't know the length?
	            }
	        }, () => {
	            const trackIsVisible = getTrackIsVisibleFunction(getState());
	            return trackIsVisible(id)
	                ? DURATION_VISIBLE_PRIORITY
	                : DURATION_PRIORITY;
	        });
	    };
	}
	function loadMedia(e, loadStyle = LOAD_STYLE.NONE, atIndex = 0) {
	    const { files } = e.dataTransfer;
	    return async (dispatch, getState, { handleTrackDropEvent }) => {
	        if (handleTrackDropEvent) {
	            const tracks = await handleTrackDropEvent(e);
	            if (tracks != null) {
	                dispatch(loadMediaFiles(tracks, loadStyle, atIndex));
	                return;
	            }
	        }
	        dispatch(loadFilesFromReferences(files, loadStyle, atIndex));
	    };
	}
	function loadMediaFiles(tracks, loadStyle = LOAD_STYLE.NONE, atIndex = 0) {
	    return (dispatch) => {
	        if (loadStyle === LOAD_STYLE.PLAY) {
	            // I'm the worst. It just so happens that in every case that we autoPlay,
	            // we should also clear all tracks.
	            dispatch(removeAllTracks());
	        }
	        tracks.forEach((track, i) => {
	            const priority = i === 0 ? loadStyle : LOAD_STYLE.NONE;
	            dispatch(loadMediaFile(track, priority, atIndex + i));
	        });
	    };
	}
	function loadMediaFile(track, priority = LOAD_STYLE.NONE, atIndex = 0) {
	    return (dispatch) => {
	        const id = uniqueId$1();
	        const { defaultName, metaData, duration } = track;
	        let canonicalUrl;
	        if ("url" in track) {
	            canonicalUrl = track.url.toString();
	        }
	        else if ("blob" in track) {
	            canonicalUrl = URL.createObjectURL(track.blob);
	        }
	        else {
	            throw new Error("Expected track to have either a blob or a url");
	        }
	        dispatch({
	            type: ADD_TRACK_FROM_URL,
	            url: canonicalUrl,
	            duration: track.duration,
	            defaultName,
	            id,
	            atIndex,
	        });
	        switch (priority) {
	            case LOAD_STYLE.BUFFER:
	                dispatch({ type: BUFFER_TRACK, id });
	                break;
	            case LOAD_STYLE.PLAY:
	                dispatch({ type: PLAY_TRACK, id });
	                break;
	            case LOAD_STYLE.NONE:
	            default:
	                // If we're not going to load this right away,
	                // we should set duration on our own
	                if (duration != null) {
	                    dispatch({ type: SET_MEDIA_DURATION, duration, id });
	                }
	                else {
	                    dispatch(fetchMediaDuration(canonicalUrl, id));
	                }
	        }
	        if (metaData != null) {
	            const { artist, title, album } = metaData;
	            dispatch({
	                type: SET_MEDIA_TAGS,
	                artist,
	                title,
	                album,
	                // For now, we lie about these next three things.
	                // TODO: Ideally we would leave these as null and force a media data
	                // fetch when the user starts playing.
	                sampleRate: 44000,
	                bitrate: 192000,
	                numberOfChannels: 2,
	                id,
	            });
	        }
	        else if ("blob" in track) {
	            // Blobs can be loaded quickly
	            dispatch(fetchMediaTags(track.blob, id));
	        }
	        else {
	            dispatch(queueFetchingMediaTags(id));
	        }
	    };
	}
	function queueFetchingMediaTags(id) {
	    return (dispatch, getState) => {
	        const track = getTracks(getState())[id];
	        loadQueue.push(() => dispatch(fetchMediaTags(track.url, id)), () => {
	            const trackIsVisible = getTrackIsVisibleFunction(getState());
	            return trackIsVisible(id)
	                ? META_DATA_VISIBLE_PRIORITY
	                : META_DATA_PRIORITY;
	        });
	    };
	}
	function fetchMediaTags(file, id) {
	    return async (dispatch, getState, { requireMusicMetadata }) => {
	        dispatch({ type: MEDIA_TAG_REQUEST_INITIALIZED, id });
	        try {
	            const metadata = await genMediaTags(file, await requireMusicMetadata());
	            // There's more data here, but we don't have a use for it yet:
	            const { artist, title, album, picture } = metadata.common;
	            const { numberOfChannels, bitrate, sampleRate } = metadata.format;
	            let albumArtUrl = null;
	            if (picture && picture.length >= 1) {
	                const byteArray = new Uint8Array(picture[0].data);
	                const blob = new Blob([byteArray], { type: picture[0].format });
	                albumArtUrl = URL.createObjectURL(blob);
	            }
	            dispatch({
	                type: SET_MEDIA_TAGS,
	                artist: artist ? artist : "",
	                title: title ? title : "",
	                album,
	                albumArtUrl,
	                numberOfChannels,
	                bitrate,
	                sampleRate,
	                id,
	            });
	        }
	        catch (e) {
	            dispatch({ type: MEDIA_TAG_REQUEST_FAILED, id });
	        }
	    };
	}
	function setEqFromFileReference(fileReference) {
	    return async (dispatch) => {
	        const arrayBuffer = await genArrayBufferFromFileReference(fileReference);
	        const eqf = winampEqf.parser(arrayBuffer);
	        const preset = eqf.presets[0];
	        dispatch(setEqFromObject(preset));
	    };
	}
	function setEqFromObject(preset) {
	    return (dispatch) => {
	        dispatch(setPreamp(normalizeEqBand(preset.preamp)));
	        BANDS.forEach((band) => {
	            // @ts-ignore band and EqfPreset align
	            dispatch(setEqBand(band, normalizeEqBand(preset[`hz${band}`])));
	        });
	    };
	}
	function downloadPreset() {
	    return (dispatch, getState) => {
	        const state = getState();
	        const data = getEqfData(state);
	        const arrayBuffer = winampEqf.creator(data);
	        const base64 = base64FromArrayBuffer(arrayBuffer);
	        const dataURI = `data:application/zip;base64,${base64}`;
	        downloadURI(dataURI, "entry.eqf");
	    };
	}
	function downloadHtmlPlaylist() {
	    return (dispatch, getState) => {
	        const uri = getPlaylistURL(getState());
	        downloadURI(uri, "Winamp Playlist.html");
	    };
	}
	let el = document.createElement("input");
	el.type = "file";
	// @ts-ingore
	const DIR_SUPPORT = 
	// @ts-ignore
	typeof el.webkitdirectory !== "undefined" ||
	    // @ts-ignore
	    typeof el.mozdirectory !== "undefined" ||
	    // @ts-ignore
	    typeof el.directory !== "undefined";
	// Release our reference
	el = null;
	function addFilesAtIndex(nextIndex) {
	    return async (dispatch) => {
	        const fileReferences = await promptForFileReferences();
	        dispatch(addTracksFromReferences(fileReferences, LOAD_STYLE.NONE, nextIndex));
	    };
	}
	function addDirAtIndex(nextIndex) {
	    return async (dispatch) => {
	        if (!DIR_SUPPORT) {
	            alert("Not supported in your browser");
	            return;
	        }
	        const fileReferences = await promptForFileReferences({ directory: true });
	        dispatch(addTracksFromReferences(fileReferences, LOAD_STYLE.NONE, nextIndex));
	    };
	}
	function addFilesFromUrl(atIndex = 0) {
	    return async (dispatch, getState, { handleAddUrlEvent }) => {
	        if (handleAddUrlEvent) {
	            const tracks = await handleAddUrlEvent();
	            if (tracks != null) {
	                dispatch(loadMediaFiles(tracks, LOAD_STYLE.NONE, atIndex));
	                return;
	            }
	        }
	        else {
	            alert("Not supported in Webamp");
	        }
	    };
	}
	function addFilesFromList() {
	    return async (dispatch, getState, { handleLoadListEvent }) => {
	        if (handleLoadListEvent) {
	            const tracks = await handleLoadListEvent();
	            if (tracks != null) {
	                dispatch(removeAllTracks());
	                dispatch(loadMediaFiles(tracks, LOAD_STYLE.NONE, 0));
	                return;
	            }
	        }
	        else {
	            alert("Not supported in Webamp");
	        }
	    };
	}
	function saveFilesToList() {
	    return (dispatch, getState, { handleSaveListEvent }) => {
	        if (handleSaveListEvent) {
	            handleSaveListEvent(getUserTracks(getState()));
	        }
	        else {
	            alert("Not supported in Webamp");
	        }
	    };
	}
	function droppedFiles(e, windowId) {
	    return (dispatch) => dispatch({
	        type: "DROPPED_FILES",
	        count: e.dataTransfer.files.length,
	        firstFileName: e.dataTransfer.files[0]?.name,
	        windowId,
	    });
	}

	function normalizePresetTypes(preset) {
	    const { name } = preset;
	    if ("butterchurnPresetObject" in preset) {
	        return {
	            type: "RESOLVED",
	            name,
	            preset: preset.butterchurnPresetObject,
	        };
	    }
	    else if ("getButterchrunPresetObject" in preset) {
	        return {
	            type: "UNRESOLVED",
	            name,
	            getPreset: preset.getButterchrunPresetObject,
	        };
	    }
	    else if ("butterchurnPresetUrl" in preset) {
	        return {
	            type: "UNRESOLVED",
	            name,
	            getPreset: async () => {
	                const resp = await fetch(preset.butterchurnPresetUrl);
	                return resp.json();
	            },
	        };
	    }
	    throw new Error("Invalid preset object");
	}
	function initializePresets(presetOptions) {
	    return async (dispatch) => {
	        const { getPresets, importButterchurn } = presetOptions;
	        importButterchurn().then((butterchurn) => {
	            dispatch({ type: GOT_BUTTERCHURN, butterchurn: butterchurn.default });
	        });
	        const presets = await getPresets();
	        const normalizePresets = presets.map(normalizePresetTypes);
	        dispatch(loadPresets(normalizePresets));
	    };
	}
	function loadPresets(presets) {
	    return (dispatch, getState) => {
	        const state = getState();
	        const presetsLength = state.milkdrop.presets.length;
	        dispatch({ type: GOT_BUTTERCHURN_PRESETS, presets });
	        if (presetsLength === 0 && getRandomizePresets(state)) {
	            dispatch(selectRandomPreset());
	        }
	        else {
	            dispatch(requestPresetAtIndex(presetsLength, TransitionType.IMMEDIATE, true));
	        }
	    };
	}
	function appendPresetFileList(fileList) {
	    return async (dispatch, getState, { convertPreset }) => {
	        const presets = Array.from(fileList)
	            .map((file) => {
	            const JSON_EXT = ".json";
	            const MILK_EXT = ".milk";
	            const filename = file.name.toLowerCase();
	            if (filename.endsWith(MILK_EXT)) {
	                if (convertPreset == null) {
	                    throw new Error("Invalid type");
	                }
	                return {
	                    type: "UNRESOLVED",
	                    name: file.name.slice(0, file.name.length - MILK_EXT.length),
	                    getPreset: () => convertPreset(file),
	                };
	            }
	            else if (filename.endsWith(JSON_EXT)) {
	                return {
	                    type: "UNRESOLVED",
	                    name: file.name.slice(0, file.name.length - JSON_EXT.length),
	                    getPreset: async () => {
	                        const str = await genStringFromFileReference(file);
	                        // TODO: How should we handle the case where json parsing fails?
	                        return JSON.parse(str);
	                    },
	                };
	            }
	            console.error("Invalid type preset when loading directory");
	            return null;
	        })
	            .filter(Boolean);
	        dispatch(loadPresets(presets));
	    };
	}
	function selectNextPreset(transitionType = TransitionType.DEFAULT) {
	    return (dispatch, getState) => {
	        const state = getState();
	        if (getRandomizePresets(state)) {
	            return dispatch(selectRandomPreset(transitionType));
	        }
	        const currentPresetIndex = getCurrentPresetIndex(state);
	        if (currentPresetIndex == null) {
	            return;
	        }
	        const nextPresetIndex = currentPresetIndex + 1;
	        dispatch(requestPresetAtIndex(nextPresetIndex, transitionType, true));
	    };
	}
	function selectPreviousPreset(transitionType = TransitionType.DEFAULT) {
	    return (dispatch, getState) => {
	        const state = getState();
	        const { presetHistory } = state.milkdrop;
	        if (presetHistory.length < 1) {
	            return;
	        }
	        // Awkward. We do -2 becuase the the last track is the current track.
	        const lastPresetIndex = presetHistory[presetHistory.length - 2];
	        dispatch(requestPresetAtIndex(lastPresetIndex, transitionType, false));
	    };
	}
	function selectRandomPreset(transitionType = TransitionType.DEFAULT) {
	    return (dispatch, getState) => {
	        const state = getState();
	        // TODO: Make this a selector.
	        const randomIndex = Math.floor(Math.random() * state.milkdrop.presets.length);
	        dispatch(requestPresetAtIndex(randomIndex, transitionType, true));
	    };
	}
	// TODO: Technically there's a race here. If you request two presets in a row, the
	// first one may resolve before the second.
	function requestPresetAtIndex(index, transitionType, addToHistory) {
	    return async (dispatch, getState) => {
	        const state = getState();
	        const preset = state.milkdrop.presets[index];
	        if (preset == null) {
	            // Index might be out of range.
	            return;
	        }
	        dispatch({ type: PRESET_REQUESTED, index, addToHistory });
	        switch (preset.type) {
	            case "RESOLVED":
	                dispatch({ type: SELECT_PRESET_AT_INDEX, index, transitionType });
	                return;
	            case "UNRESOLVED":
	                const json = await preset.getPreset();
	                // TODO: Ensure that this works correctly even if requests resolve out of order
	                dispatch({ type: RESOLVE_PRESET_AT_INDEX, index, json });
	                dispatch({ type: SELECT_PRESET_AT_INDEX, index, transitionType });
	                return;
	        }
	    };
	}
	function handlePresetDrop(e) {
	    return appendPresetFileList(e.dataTransfer.files);
	}
	function toggleRandomizePresets() {
	    return { type: TOGGLE_RANDOMIZE_PRESETS };
	}
	function togglePresetCycling() {
	    return { type: TOGGLE_PRESET_CYCLING };
	}
	function scheduleMilkdropMessage(message) {
	    return { type: SCHEDULE_MILKDROP_MESSAGE, message };
	}

	function close() {
	    return (dispatch) => {
	        // TODO: This could probably be improved by adding a "PREVENT_CLOSE" action
	        // or something, but this works okay for now.
	        let defaultPrevented = false;
	        const cancel = () => {
	            defaultPrevented = true;
	        };
	        dispatch({ type: CLOSE_REQUESTED, cancel });
	        if (!defaultPrevented) {
	            dispatch({ type: STOP });
	            dispatch({ type: CLOSE_WINAMP });
	        }
	    };
	}
	function open() {
	    return { type: OPEN_WINAMP };
	}
	function toggleVisualizerStyle() {
	    return { type: TOGGLE_VISUALIZER_STYLE };
	}
	function minimize() {
	    return { type: MINIMIZE_WINAMP };
	}
	function setFocus(input) {
	    return { type: SET_FOCUS, input };
	}
	function unsetFocus() {
	    return { type: UNSET_FOCUS };
	}
	function focusBand(band) {
	    return { type: SET_BAND_FOCUS, input: "eq", bandFocused: band };
	}
	function loadSerializedState(
	// In the future this type should be the union of all versioned types.
	serializedState) {
	    return (dispatch) => {
	        dispatch({ type: LOAD_SERIALIZED_STATE, serializedState });
	        dispatch(ensureWindowsAreOnScreen());
	    };
	}
	function loadDefaultSkin() {
	    return { type: LOAD_DEFAULT_SKIN };
	}
	function toggleMilkdropDesktop() {
	    return (dispatch, getState) => {
	        if (getMilkdropDesktopEnabled(getState())) {
	            dispatch({ type: SET_MILKDROP_DESKTOP, enabled: false });
	        }
	        else {
	            dispatch({ type: SET_MILKDROP_DESKTOP, enabled: true });
	        }
	    };
	}
	function setMilkdropFullscreen(enabled) {
	    return { type: SET_MILKDROP_FULLSCREEN, enabled };
	}
	function toggleMilkdropFullscreen() {
	    return (dispatch, getState) => {
	        dispatch(setMilkdropFullscreen(!getMilkdropFullscreenEnabled(getState())));
	    };
	}
	function togglePresetOverlay() {
	    return (dispatch, getState) => {
	        if (getPresetOverlayOpen(getState())) {
	            dispatch(setFocusedWindow(WINDOWS.MILKDROP));
	        }
	        dispatch({ type: TOGGLE_PRESET_OVERLAY });
	    };
	}
	function stepMarquee() {
	    return { type: STEP_MARQUEE };
	}

	var mediaMiddleware = (media) => (store) => {
	    const { media: { volume, balance }, equalizer: { sliders }, } = store.getState();
	    // Ensure the default state is the canonical value.
	    media.setVolume(volume);
	    media.setBalance(balance);
	    media.setPreamp(sliders.preamp);
	    // TODO: Ensure other values like bands are in sync
	    media.on("timeupdate", () => {
	        store.dispatch({
	            type: UPDATE_TIME_ELAPSED,
	            elapsed: media.timeElapsed(),
	        });
	    });
	    media.on("ended", () => {
	        store.dispatch(next());
	    });
	    media.on("playing", () => {
	        store.dispatch({ type: IS_PLAYING });
	    });
	    media.on("waiting", () => {
	        store.dispatch({ type: START_WORKING });
	    });
	    media.on("stopWaiting", () => {
	        store.dispatch({ type: STOP_WORKING });
	    });
	    media.on("fileLoaded", () => {
	        const id = getCurrentTrackId(store.getState());
	        if (id == null) {
	            // Attempted to set the metadata for a track that was already removed.
	            // Really, the media should have been stopped when the track was removed.
	            return;
	        }
	        store.dispatch({
	            id,
	            type: SET_MEDIA,
	            kbps: "128",
	            khz: "44",
	            channels: 2,
	            length: media.duration(),
	        });
	    });
	    return (next) => (action) => {
	        const returnValue = next(action);
	        const state = store.getState();
	        switch (action.type) {
	            case PLAY:
	                media.play();
	                break;
	            case PAUSE:
	                media.pause();
	                break;
	            case STOP:
	                media.stop();
	                break;
	            case SET_VOLUME:
	                media.setVolume(getVolume(state));
	                break;
	            case SET_BALANCE:
	                media.setBalance(getBalance(state));
	                break;
	            case SEEK_TO_PERCENT_COMPLETE:
	                media.seekToPercentComplete(action.percent);
	                break;
	            case PLAY_TRACK: {
	                const url = getTrackUrl(store.getState())(action.id);
	                if (url != null) {
	                    media.loadFromUrl(url, true);
	                }
	                break;
	            }
	            case BUFFER_TRACK: {
	                const url = getTrackUrl(store.getState())(action.id);
	                if (url != null) {
	                    media.loadFromUrl(url, false);
	                }
	                break;
	            }
	            case SET_BAND_VALUE:
	                if (action.band === "preamp") {
	                    media.setPreamp(action.value);
	                }
	                else {
	                    media.setEqBand(action.band, action.value);
	                }
	                break;
	            case SET_EQ_OFF:
	                media.disableEq();
	                break;
	            case SET_EQ_ON:
	                media.enableEq();
	                break;
	            case LOAD_SERIALIZED_STATE: {
	                // Set ALL THE THINGS!
	                if (getEqualizerEnabled(state)) {
	                    media.enableEq();
	                }
	                else {
	                    media.disableEq();
	                }
	                media.setVolume(getVolume(state));
	                media.setBalance(getBalance(state));
	                objectForEach(state.equalizer.sliders, (value, slider) => {
	                    if (slider === "preamp") {
	                        media.setPreamp(value);
	                    }
	                    else {
	                        // @ts-ignore I don't know how to teach TypeScript about objects
	                        // that use Slider as keys
	                        media.setEqBand(slider, value);
	                    }
	                });
	                break;
	            }
	        }
	        return returnValue;
	    };
	};

	// TODO: Move to demo
	const compose = composeWithDevTools({
	    actionsBlacklist: [UPDATE_TIME_ELAPSED, STEP_MARQUEE],
	});
	function createWebampStore(media, actionEmitter, customMiddlewares = [], stateOverrides, extras) {
	    let initialState;
	    if (stateOverrides) {
	        initialState = merge(reducer(undefined, { type: "@@init" }), stateOverrides);
	    }
	    const emitterMiddleware = () => (next) => (action) => {
	        actionEmitter.trigger(action.type, action);
	        return next(action);
	    };
	    const middlewares = [
	        thunk.withExtraArgument(extras),
	        mediaMiddleware(media),
	        emitterMiddleware,
	        ...customMiddlewares,
	    ];
	    // @ts-expect-error Typing of these is too hard to get right, so we cheat
	    const coercedMiddlewares = middlewares;
	    const enhancer = compose(applyMiddleware$1(...coercedMiddlewares));
	    return legacy_createStore$1(reducer, initialState, enhancer);
	}

	var key = {
	  fullscreenEnabled: 0,
	  fullscreenElement: 1,
	  requestFullscreen: 2,
	  exitFullscreen: 3,
	  fullscreenchange: 4,
	  fullscreenerror: 5,
	  fullscreen: 6
	};
	var webkit = ['webkitFullscreenEnabled', 'webkitFullscreenElement', 'webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitfullscreenchange', 'webkitfullscreenerror', '-webkit-full-screen'];
	var moz = ['mozFullScreenEnabled', 'mozFullScreenElement', 'mozRequestFullScreen', 'mozCancelFullScreen', 'mozfullscreenchange', 'mozfullscreenerror', '-moz-full-screen'];
	var ms = ['msFullscreenEnabled', 'msFullscreenElement', 'msRequestFullscreen', 'msExitFullscreen', 'MSFullscreenChange', 'MSFullscreenError', '-ms-fullscreen'];
	// so it doesn't throw if no window or document
	var document$1 = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var vendor = 'fullscreenEnabled' in document$1 && Object.keys(key) || webkit[0] in document$1 && webkit || moz[0] in document$1 && moz || ms[0] in document$1 && ms || [];
	var fscreen = {
	  requestFullscreen: function (element) {
	    return element[vendor[key.requestFullscreen]]();
	  },
	  requestFullscreenFunction: function (element) {
	    return element[vendor[key.requestFullscreen]];
	  },
	  get exitFullscreen() {
	    return document$1[vendor[key.exitFullscreen]].bind(document$1);
	  },
	  get fullscreenPseudoClass() {
	    return ":" + vendor[key.fullscreen];
	  },
	  addEventListener: function (type, handler, options) {
	    return document$1.addEventListener(vendor[key[type]], handler, options);
	  },
	  removeEventListener: function (type, handler, options) {
	    return document$1.removeEventListener(vendor[key[type]], handler, options);
	  },
	  get fullscreenEnabled() {
	    return Boolean(document$1[vendor[key.fullscreenEnabled]]);
	  },
	  set fullscreenEnabled(val) {},
	  get fullscreenElement() {
	    return document$1[vendor[key.fullscreenElement]];
	  },
	  set fullscreenElement(val) {},
	  get onfullscreenchange() {
	    return document$1[("on" + vendor[key.fullscreenchange]).toLowerCase()];
	  },
	  set onfullscreenchange(handler) {
	    return document$1[("on" + vendor[key.fullscreenchange]).toLowerCase()] = handler;
	  },
	  get onfullscreenerror() {
	    return document$1[("on" + vendor[key.fullscreenerror]).toLowerCase()];
	  },
	  set onfullscreenerror(handler) {
	    return document$1[("on" + vendor[key.fullscreenerror]).toLowerCase()] = handler;
	  }
	};

	function leaveFullScreen() {
	    if (fscreen.fullscreenEnabled) {
	        fscreen.exitFullscreen();
	    }
	}
	function enterFullScreen(node) {
	    if (fscreen.fullscreenEnabled) {
	        fscreen.requestFullscreen(node);
	    }
	}
	function FullScreen(props) {
	    const { onChange, enabled } = props;
	    const ref = reactExports.useRef(null);
	    reactExports.useEffect(() => {
	        function detectFullScreen() {
	            if (onChange) {
	                onChange(fscreen.fullscreenElement === ref.current);
	            }
	        }
	        fscreen.addEventListener("fullscreenchange", detectFullScreen);
	        return () => {
	            fscreen.removeEventListener("fullscreenchange", detectFullScreen);
	        };
	    }, [onChange]);
	    // This must run in response to a click event, so we'll use useLayoutEffect just in case.
	    reactExports.useLayoutEffect(() => {
	        const isEnabled = fscreen.fullscreenElement === ref.current;
	        if (isEnabled && !enabled) {
	            leaveFullScreen();
	        }
	        else if (!isEnabled && enabled && ref.current != null) {
	            enterFullScreen(ref.current);
	        }
	    }, [enabled]);
	    return (jsxRuntimeExports.jsx("div", { ref: ref, style: props.enabled ? { height: "100%", width: "100%" } : undefined, children: props.children }));
	}

	function useUnmountedRef() {
	    const unmountedRef = reactExports.useRef(false);
	    reactExports.useEffect(() => {
	        return () => {
	            unmountedRef.current = true;
	        };
	    }, []);
	    return unmountedRef;
	}
	function usePromiseValueOrNull(propValue) {
	    const [value, setValue] = reactExports.useState(null);
	    reactExports.useEffect(() => {
	        let disposed = false;
	        propValue.then((resolvedValue) => {
	            if (disposed) {
	                return;
	            }
	            setValue(resolvedValue);
	        });
	        return () => {
	            disposed = true;
	        };
	    }, [propValue]);
	    return value;
	}
	function useScreenSize() {
	    const [size] = reactExports.useState(getScreenSize());
	    // TODO: We could subscribe to screen size changes.
	    return size;
	}
	function useWindowSize() {
	    const [size, setSize] = reactExports.useState(getWindowSize$1());
	    const handler = reactExports.useCallback(() => {
	    }, []);
	    reactExports.useEffect(() => {
	        window.addEventListener("resize", handler);
	        return () => {
	            window.removeEventListener("resize", handler);
	        };
	    }, [handler]);
	    return size;
	}
	const cursorPositionRef = { current: { pageX: 0, pageY: 0 } };
	window.document.addEventListener("mousemove", ({ pageX, pageY }) => {
	    cursorPositionRef.current = { pageX, pageY };
	});
	// We use a single global event listener because there is no way to get the
	// mouse position aside from an event. Ideally we could create/clean up the
	// event listener in the hook, but in the case where we want to check the cursor
	// position on mount, that we wouldn't have had time to capture an event.
	function useCursorPositionRef() {
	    return cursorPositionRef;
	}
	// CSS hover state is not respected if the cursor is already over the node when
	// it is added to the DOM. This hook allows your component to know its hover
	// state on mount without waiting for the mouse to move.
	// https://stackoverflow.com/a/13259049/1263117
	function useIsHovered() {
	    const cursorRef = useCursorPositionRef();
	    const [hover, setHover] = reactExports.useState(false);
	    const [node, setNode] = reactExports.useState(null);
	    reactExports.useLayoutEffect(() => {
	        if (node == null) {
	            setHover(false);
	            return;
	        }
	        const domRect = node.getBoundingClientRect();
	        const { pageX, pageY } = cursorRef.current;
	        setHover(pageX >= domRect.left &&
	            pageX <= domRect.right &&
	            pageY >= domRect.top &&
	            pageY <= domRect.bottom);
	        const enter = () => setHover(true);
	        const leave = () => setHover(false);
	        node.addEventListener("mouseenter", enter);
	        node.addEventListener("mouseleave", leave);
	        return () => {
	            node.removeEventListener("mouseenter", enter);
	            node.removeEventListener("mouseleave", leave);
	        };
	    }, [node, cursorRef]);
	    return { ref: setNode, hover };
	}
	function useOnClickAway(ref, callback) {
	    reactExports.useEffect(() => {
	        if (ref == null || callback == null) {
	            return;
	        }
	        const handleClickOut = (ee) => {
	            const clickOutTarget = ee.target;
	            if (!(clickOutTarget instanceof Element)) {
	                // TypeScript doesn't realize this will always be true
	                return;
	            }
	            if (ref.contains(clickOutTarget)) {
	                return;
	            }
	            // If the click is _not_ inside the menu.
	            callback();
	            window.document.removeEventListener("click", handleClickOut, {
	                capture: true,
	            });
	        };
	        window.document.addEventListener("click", handleClickOut, {
	            capture: true,
	        });
	        return () => {
	            window.document.removeEventListener("click", handleClickOut, {
	                capture: true,
	            });
	        };
	    }, [ref, callback]);
	}
	// TODO: Return useSelector directly and apply the type without wrapping
	function useTypedSelector(selector) {
	    return useSelector(selector);
	}
	function useActionCreator(actionCreator) {
	    const dispatch = useTypedDispatch();
	    return reactExports.useCallback((...args) => dispatch(actionCreator(...args)), [dispatch, actionCreator]);
	}
	function useTypedDispatch() {
	    // useDispatch does not know about thunks. In theory this should be solvable, but I haven't bothered to figure it out:
	    // https://redux.js.org/usage/usage-with-typescript#type-checking-redux-thunks
	    // @ts-ignore
	    return useDispatch();
	}

	var classnames$1 = {exports: {}};

	/*!
		Copyright (c) 2018 Jed Watson.
		Licensed under the MIT License (MIT), see
		http://jedwatson.github.io/classnames
	*/
	(function (module) {
	  /* global define */

	  (function () {

	    var hasOwn = {}.hasOwnProperty;
	    function classNames() {
	      var classes = '';
	      for (var i = 0; i < arguments.length; i++) {
	        var arg = arguments[i];
	        if (arg) {
	          classes = appendClass(classes, parseValue(arg));
	        }
	      }
	      return classes;
	    }
	    function parseValue(arg) {
	      if (typeof arg === 'string' || typeof arg === 'number') {
	        return arg;
	      }
	      if (typeof arg !== 'object') {
	        return '';
	      }
	      if (Array.isArray(arg)) {
	        return classNames.apply(null, arg);
	      }
	      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
	        return arg.toString();
	      }
	      var classes = '';
	      for (var key in arg) {
	        if (hasOwn.call(arg, key) && arg[key]) {
	          classes = appendClass(classes, key);
	        }
	      }
	      return classes;
	    }
	    function appendClass(value, newClass) {
	      if (!newClass) {
	        return value;
	      }
	      if (value) {
	        return value + ' ' + newClass;
	      }
	      return value + newClass;
	    }
	    if (module.exports) {
	      classNames.default = classNames;
	      module.exports = classNames;
	    } else {
	      window.classNames = classNames;
	    }
	  })();
	})(classnames$1);
	var classnamesExports = classnames$1.exports;
	var classnames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

	function ResizeTarget(props) {
	    const { currentSize, setWindowSize, widthOnly, ...passThroughProps } = props;
	    const [mouseDown, setMouseDown] = reactExports.useState(false);
	    const [mouseStart, setMouseStart] = reactExports.useState(null);
	    reactExports.useEffect(() => {
	        if (mouseDown === false || mouseStart == null) {
	            return;
	        }
	        const [width, height] = currentSize;
	        const handleMove = (ee) => {
	            const x = getX(ee) - mouseStart.x;
	            const y = getY(ee) - mouseStart.y;
	            const newWidth = Math.max(0, width + Math.round(x / WINDOW_RESIZE_SEGMENT_WIDTH));
	            const newHeight = widthOnly
	                ? width
	                : Math.max(0, height + Math.round(y / WINDOW_RESIZE_SEGMENT_HEIGHT));
	            const newSize = [newWidth, newHeight];
	            props.setWindowSize(newSize);
	        };
	        window.addEventListener("mousemove", handleMove);
	        window.addEventListener("touchmove", handleMove);
	        const handleMouseUp = () => setMouseDown(false);
	        window.addEventListener("mouseup", handleMouseUp);
	        window.addEventListener("touchend", handleMouseUp);
	        return () => {
	            window.removeEventListener("mousemove", handleMove);
	            window.removeEventListener("touchmove", handleMove);
	            window.removeEventListener("mouseup", handleMouseUp);
	            window.removeEventListener("touchend", handleMouseUp);
	        };
	        // We pruposefully close over the props from when the mouse went down
	        // eslint-disable-next-line react-hooks/exhaustive-deps
	    }, [mouseStart, mouseDown]);
	    const handleMouseDown = (e) => {
	        setMouseStart({
	            x: getX(e),
	            y: getY(e),
	        });
	        setMouseDown(true);
	    };
	    return (jsxRuntimeExports.jsx("div", { onMouseDown: handleMouseDown, onTouchStart: handleMouseDown, ...passThroughProps }));
	}
	var ResizeTarget$1 = reactExports.memo(ResizeTarget);

	function FocusTarget({ onKeyDown, windowId, children }) {
	    const focusedWindowId = useTypedSelector(getFocusedWindow);
	    const setFocus = useActionCreator(setFocusedWindow);
	    const focusHandler = reactExports.useCallback(() => {
	        if (windowId !== focusedWindowId) {
	            setFocus(windowId);
	        }
	    }, [windowId, focusedWindowId, setFocus]);
	    const [ref, setRef] = reactExports.useState(null);
	    reactExports.useEffect(() => {
	        if (ref == null || onKeyDown == null) {
	            return;
	        }
	        ref.addEventListener("keydown", onKeyDown);
	        return () => ref.removeEventListener("keydown", onKeyDown);
	    }, [onKeyDown, windowId, focusedWindowId, ref]);
	    // It's possible for a child component to gain focus and then become
	    // unmounted. In that case, the browser will return focus to the `<body>`.
	    // In the following hook, use a `MutationObserver` to watch for that behavior
	    // and refocus the containing FocusTarget when it happens.
	    //
	    // I tried a number of other approaches using `focus/blur/focusin/focusout` on
	    // various DOM nodes, and was unable to find a solution which would trigger in
	    // this senario in Firefox. Therefore we use this `MutationObserver` approach.
	    reactExports.useEffect(() => {
	        // Only create the `MutationObserver` within the currently focused target.
	        if (ref == null || windowId !== focusedWindowId) {
	            return;
	        }
	        const observer = new MutationObserver((mutations) => {
	            // In the common case we won't have focused the body, so we can do this
	            // inexpensive check first to avoid calling the more expensive `O(n)`
	            // check of the individual mutations.
	            if (document.activeElement !== document.body) {
	                return;
	            }
	            if (mutations.some((mutation) => mutation.removedNodes.length > 0)) {
	                ref.focus();
	            }
	        });
	        observer.observe(ref, {
	            subtree: true,
	            attributes: false,
	            childList: true,
	        });
	        return () => observer.disconnect();
	    }, [windowId, focusedWindowId, ref]);
	    return (jsxRuntimeExports.jsx("div", { ref: setRef, onPointerDown: focusHandler, onFocus: focusHandler, tabIndex: -1, style: { height: "100%", width: "100%" }, children: children }));
	}

	const ACTIVE_CLASSNAME = "winamp-active";
	const LEFT_MOUSE_NUMBER = 0;
	/**
	 * Renders a `div` with an `.winamp-active` class if the element is being clicked/tapped.
	 *
	 * For now this mimicks the behavior of `:active`, but in the future we will use
	 * this component to mimic Winamp's behavior, which is quite different than
	 * `:active`.
	 *
	 * https://html.spec.whatwg.org/multipage/semantics-other.html#selector-active
	 *
	 * > An element is said to be being actively pointed at while the user indicates
	 * > the element using a pointing device while that pointing device is in the
	 * > "down" state (e.g. for a mouse, between the time the mouse button is pressed
	 * > and the time it is depressed; for a finger in a multitouch environment, while
	 * > the finger is touching the display surface).
	 */
	function WinampButton({ requireClicksOriginateLocally = true, onPointerDown: originalOnPointerDown, className, ...htmlProps }) {
	    const [active, setActive] = reactExports.useState(false);
	    const onPointerDown = reactExports.useCallback((e) => {
	        if (originalOnPointerDown != null) {
	            originalOnPointerDown(e);
	        }
	        // Release the pointer capture
	        // https://w3c.github.io/pointerevents/#implicit-pointer-capture
	        // https://w3c.github.io/pointerevents/#pointer-capture
	        if (!requireClicksOriginateLocally) {
	            // @ts-ignore
	            e.target.releasePointerCapture(e.pointerId);
	        }
	        // We only care about left mouse.
	        // -1 button comes on onPointerEnter so we allow that.
	        if (e.nativeEvent.button !== -1 &&
	            e.nativeEvent.button !== LEFT_MOUSE_NUMBER) {
	            return;
	        }
	        setActive(true);
	        function onRelease(ee) {
	            setActive(false);
	            document.removeEventListener("pointerup", onRelease);
	        }
	        document.addEventListener("pointerup", onRelease);
	    }, [originalOnPointerDown, requireClicksOriginateLocally]);
	    // We watch for events onPointerEnter only when requireClicksOriginateLocally === false
	    // If the pointer enters the WinampButton area, and the pointer button is already down, trigger a PointerDown
	    const onPointerEnter = (e) => {
	        if (e.buttons === 1) {
	            // Emit a CustomEvent pointerup to get the other buttons to release.
	            // Add a special -42 detail value so we can identify this event elsewhere and ignore if needed.
	            document.dispatchEvent(new CustomEvent("pointerup", {
	                detail: -42,
	            }));
	            // Simulate a pointerdown on the current button
	            onPointerDown(e);
	        }
	    };
	    return (jsxRuntimeExports.jsx("div", { ...htmlProps, className: classnames(className, { [ACTIVE_CLASSNAME]: active }), onPointerDown: onPointerDown, onPointerEnter: requireClicksOriginateLocally ? undefined : onPointerEnter }));
	}

	const Text = ({ children }) => {
	    const letters = children.split("");
	    return (jsxRuntimeExports.jsx(reactExports.Fragment, { children: letters.map((letter, i) => (jsxRuntimeExports.jsx("div", { className: `draggable gen-text-letter gen-text-${letter === " " ? "space" : letter.toLowerCase()}` }, i))) }));
	};
	const CHROME_WIDTH = 19;
	const CHROME_HEIGHT = 34;
	// Named export for testing
	const GenWindow = ({ children, title, windowId, onKeyDown }) => {
	    const setWindowSize$1 = useActionCreator(setWindowSize);
	    const closeWindow$1 = useActionCreator(closeWindow);
	    const getWindowPixelSize$1 = useTypedSelector(getWindowPixelSize);
	    const focusedWindow = useTypedSelector(getFocusedWindow);
	    const getWindowSize$1 = useTypedSelector(getWindowSize);
	    const windowSize = getWindowSize$1(windowId);
	    const selected = focusedWindow === windowId;
	    const { width, height } = getWindowPixelSize$1(windowId);
	    return (jsxRuntimeExports.jsx(FocusTarget, { windowId: windowId, onKeyDown: onKeyDown, children: jsxRuntimeExports.jsxs("div", { className: classnames("gen-window", "window", { selected }), style: { width, height }, children: [jsxRuntimeExports.jsxs("div", { className: "gen-top draggable", children: [jsxRuntimeExports.jsx("div", { className: "gen-top-left draggable" }), jsxRuntimeExports.jsx("div", { className: "gen-top-left-fill draggable" }), jsxRuntimeExports.jsx("div", { className: "gen-top-left-end draggable" }), jsxRuntimeExports.jsx("div", { className: "gen-top-title draggable", children: jsxRuntimeExports.jsx(Text, { children: title }) }), jsxRuntimeExports.jsx("div", { className: "gen-top-right-end draggable" }), jsxRuntimeExports.jsx("div", { className: "gen-top-right-fill draggable" }), jsxRuntimeExports.jsx("div", { className: "gen-top-right draggable", children: jsxRuntimeExports.jsx(WinampButton, { className: "gen-close selected", onClick: () => closeWindow$1(windowId) }) })] }), jsxRuntimeExports.jsxs("div", { className: "gen-middle", children: [jsxRuntimeExports.jsx("div", { className: "gen-middle-left draggable", children: jsxRuntimeExports.jsx("div", { className: "gen-middle-left-bottom draggable" }) }), jsxRuntimeExports.jsx("div", { className: "gen-middle-center", children: children({
	                                width: width - CHROME_WIDTH,
	                                height: height - CHROME_HEIGHT,
	                            }) }), jsxRuntimeExports.jsx("div", { className: "gen-middle-right draggable", children: jsxRuntimeExports.jsx("div", { className: "gen-middle-right-bottom draggable" }) })] }), jsxRuntimeExports.jsxs("div", { className: "gen-bottom draggable", children: [jsxRuntimeExports.jsx("div", { className: "gen-bottom-left draggable" }), jsxRuntimeExports.jsx("div", { className: "gen-bottom-right draggable", children: jsxRuntimeExports.jsx(ResizeTarget$1, { currentSize: windowSize, setWindowSize: (size) => setWindowSize$1(windowId, size), id: "gen-resize-target" }) })] })] }) }));
	};

	const TRANSITION_TYPE_DURATIONS = {
	    [TransitionType.DEFAULT]: 2.7,
	    [TransitionType.IMMEDIATE]: 0,
	    [TransitionType.USER_PRESET]: 5.7,
	};
	function Visualizer$1({ analyser, width, height }) {
	    const visualizerStyle = useTypedSelector(getVisualizerStyle);
	    const playing = useTypedSelector(getMediaIsPlaying);
	    const butterchurn = useTypedSelector(getButterchurn);
	    const trackTitle = useTypedSelector(getCurrentTrackDisplayName);
	    const currentPreset = useTypedSelector(getCurrentPreset);
	    const transitionType = useTypedSelector(getPresetTransitionType);
	    const message = useTypedSelector(getMilkdropMessage);
	    const isEnabledVisualizer = visualizerStyle === VISUALIZERS.MILKDROP;
	    const canvasRef = reactExports.useRef(null);
	    const [visualizer, setVisualizer] = reactExports.useState(null);
	    // Initialize the visualizer
	    reactExports.useEffect(() => {
	        if (canvasRef.current == null || butterchurn == null) {
	            return;
	        }
	        if (visualizer != null) {
	            // Note: The visualizer does not offer anyway to clean itself up. So, we
	            // don't offer any way to recreate it. So, if you swap out the analyser
	            // node, or the canvas, that change won't be respected.
	            return;
	        }
	        const _visualizer = butterchurn.createVisualizer(analyser.context, canvasRef.current, {
	            width,
	            height,
	            meshWidth: 32,
	            meshHeight: 24,
	            pixelRatio: window.devicePixelRatio || 1,
	        });
	        _visualizer.connectAudio(analyser);
	        setVisualizer(_visualizer);
	    }, [butterchurn, analyser, height, width, visualizer]);
	    // Ensure render size stays up to date
	    reactExports.useEffect(() => {
	        if (visualizer == null) {
	            return;
	        }
	        visualizer.setRendererSize(width, height);
	    }, [visualizer, width, height]);
	    // Load presets when they change
	    const hasLoadedPreset = reactExports.useRef(false);
	    reactExports.useEffect(() => {
	        if (visualizer == null || currentPreset == null) {
	            return;
	        }
	        if (hasLoadedPreset.current) {
	            visualizer.loadPreset(currentPreset, TRANSITION_TYPE_DURATIONS[transitionType]);
	        }
	        else {
	            visualizer.loadPreset(currentPreset, TRANSITION_TYPE_DURATIONS[TransitionType.IMMEDIATE]);
	            hasLoadedPreset.current = true;
	        }
	        // We don't want to trigger the transition if the transition type changes.
	        // eslint-disable-next-line react-hooks/exhaustive-deps
	    }, [visualizer, currentPreset]);
	    // Handle title animations
	    reactExports.useEffect(() => {
	        if (visualizer == null || !trackTitle) {
	            return;
	        }
	        visualizer.launchSongTitleAnim(trackTitle);
	    }, [visualizer, trackTitle]);
	    const lastShownMessage = reactExports.useRef(null);
	    reactExports.useEffect(() => {
	        if (visualizer == null || message == null) {
	            return;
	        }
	        if (lastShownMessage.current == null ||
	            message.time > lastShownMessage.current) {
	            lastShownMessage.current = Date.now();
	            visualizer.launchSongTitleAnim(message.text);
	        }
	    }, [visualizer, message]);
	    const shouldAnimate = playing && isEnabledVisualizer;
	    // Kick off the animation loop
	    reactExports.useEffect(() => {
	        if (!shouldAnimate || visualizer == null) {
	            return;
	        }
	        let animationFrameRequest = null;
	        const loop = () => {
	            visualizer.render();
	            animationFrameRequest = window.requestAnimationFrame(loop);
	        };
	        loop();
	        return () => {
	            if (animationFrameRequest != null) {
	                window.cancelAnimationFrame(animationFrameRequest);
	            }
	        };
	    }, [visualizer, shouldAnimate]);
	    return (jsxRuntimeExports.jsx("canvas", { height: height, width: width, style: {
	            height: "100%",
	            width: "100%",
	            display: isEnabledVisualizer ? "block" : "none",
	        }, ref: canvasRef }));
	}

	const Background$1 = (props) => {
	    const { innerRef } = props;
	    return (jsxRuntimeExports.jsx("div", { ref: innerRef, className: "draggable", style: {
	            // This color will be used until Butterchurn is loaded
	            backgroundColor: "#000",
	            position: "absolute",
	            top: 0,
	            bottom: 0,
	            left: 0,
	            right: 0,
	            height: "100%",
	            width: "100%",
	        }, tabIndex: 0, children: props.children }));
	};

	const ENTRY_HEIGHT = 14;
	const HEIGHT_PADDING = 15;
	const WIDTH_PADDING = 20;
	const LOADING_STYLE = {
	    position: "absolute",
	    top: 0,
	    left: 0,
	    color: "white",
	    background: "rgba(0.33, 0.33, 0.33, 0.33)",
	};
	const OUTER_WRAPPER_STYLE = {
	    position: "absolute",
	    top: 0,
	    left: 0,
	    padding: "15px 10px 0 10px",
	};
	const INNER_WRAPPER_STYLE = {
	    display: "inline-block",
	    whiteSpace: "nowrap",
	    overflow: "hidden",
	    background: "rgba(0, 0, 0, 0.815)",
	    fontSize: "12px",
	};
	function presetIndexFromListIndex(listIndex) {
	    return listIndex - 1;
	}
	function listIndexFromPresetIndex(listIndex) {
	    return listIndex + 1;
	}
	function PresetOverlay({ height, width }) {
	    const presetKeys = useTypedSelector(getPresetNames);
	    const currentPresetIndex = useTypedSelector(getCurrentPresetIndex);
	    const requestPresetAtIndex$1 = useActionCreator(requestPresetAtIndex);
	    const togglePresetOverlay$1 = useActionCreator(togglePresetOverlay);
	    const appendPresetFileList$1 = useActionCreator(appendPresetFileList);
	    const unmountedRef = useUnmountedRef();
	    const [selectedListIndex, setSelectedListIndex] = reactExports.useState(() => {
	        if (currentPresetIndex != null) {
	            return listIndexFromPresetIndex(currentPresetIndex);
	        }
	        return 0;
	    });
	    // Number of presets, plus one for the "Load Local Directory" option, minus
	    // one to convert a length to an index.
	    const maxListIndex = presetKeys.length; // - 1 + 1;
	    const renderList = reactExports.useCallback(() => {
	        const maxVisibleRows = Math.floor((height - HEIGHT_PADDING) / ENTRY_HEIGHT);
	        const rowsToShow = Math.floor(maxVisibleRows * 0.75); // Only fill 3/4 of the screen.
	        const [startIndex, endIndex] = getRangeCenteredOnIndex(maxListIndex + 1, // Add one to convert an index to a length
	        rowsToShow, selectedListIndex);
	        const presetElms = [];
	        for (let i = startIndex; i <= endIndex; i++) {
	            const presetIndex = presetIndexFromListIndex(i);
	            const isSelected = i === selectedListIndex;
	            const isCurrent = presetIndex === currentPresetIndex;
	            let color;
	            if (isSelected) {
	                color = isCurrent ? "#FFCC22" : "#FF5050";
	            }
	            else {
	                color = isCurrent ? "#CCFF03" : "#CCCCCC";
	            }
	            presetElms.push(jsxRuntimeExports.jsx("li", { style: { color, lineHeight: `${ENTRY_HEIGHT}px` }, children: i === 0 ? "Load Local Directory" : presetKeys[presetIndex] }, i));
	        }
	        return presetElms;
	    }, [currentPresetIndex, height, maxListIndex, presetKeys, selectedListIndex]);
	    const loadLocalDir = reactExports.useCallback(async () => {
	        const fileReferences = await promptForFileReferences({ directory: true });
	        if (unmountedRef.current) {
	            return;
	        }
	        appendPresetFileList$1(fileReferences);
	    }, [appendPresetFileList$1, unmountedRef]);
	    const handleFocusedKeyboardInput = reactExports.useCallback((e) => {
	        switch (e.keyCode) {
	            case 38: // up arrow
	                setSelectedListIndex((value) => Math.max(value - 1, 0));
	                e.stopPropagation();
	                break;
	            case 40: // down arrow
	                setSelectedListIndex((value) => Math.min(value + 1, maxListIndex));
	                e.stopPropagation();
	                break;
	            case 13: // enter
	                if (selectedListIndex === 0) {
	                    loadLocalDir();
	                }
	                else {
	                    requestPresetAtIndex$1(presetIndexFromListIndex(selectedListIndex), TransitionType.DEFAULT, true);
	                }
	                e.stopPropagation();
	                break;
	            case 27: // escape
	                togglePresetOverlay$1();
	                e.stopPropagation();
	                break;
	        }
	    }, [
	        loadLocalDir,
	        maxListIndex,
	        requestPresetAtIndex$1,
	        selectedListIndex,
	        togglePresetOverlay$1,
	    ]);
	    const handleNode = reactExports.useCallback((node) => {
	        if (node != null && document.activeElement !== node) {
	            node.focus();
	        }
	    }, []);
	    if (presetKeys == null) {
	        return (jsxRuntimeExports.jsx("div", { style: LOADING_STYLE, children: jsxRuntimeExports.jsx("span", { children: "Loading presets" }) }));
	    }
	    return (jsxRuntimeExports.jsx("div", { ref: handleNode, tabIndex: -1, style: OUTER_WRAPPER_STYLE, onKeyDown: handleFocusedKeyboardInput, children: jsxRuntimeExports.jsx("div", { style: {
	                ...INNER_WRAPPER_STYLE,
	                width: width - 20 - WIDTH_PADDING,
	                maxHeight: height - HEIGHT_PADDING,
	            }, children: jsxRuntimeExports.jsx("ul", { style: { listStyleType: "none", padding: 0, margin: 0 }, children: renderList() }) }) }));
	}
	// Find a tuple `[startIndex, endIndex]` representing start/end indexes into an
	// array of length `length`, that descripe a range of size up to `rangeSize`
	// where a best effort is made to center `indexToCenter`.
	function getRangeCenteredOnIndex(length, maxRangeSize, indexToCenter) {
	    const rangeSize = Math.min(length, maxRangeSize);
	    const halfRangeSize = Math.floor(rangeSize / 2);
	    const idealStartIndex = indexToCenter - halfRangeSize;
	    const startIndex = clamp(idealStartIndex, 0, length - rangeSize);
	    const endIndex = startIndex + rangeSize - 1;
	    return [startIndex, endIndex];
	}

	function supress(e) {
	    e.stopPropagation();
	    e.preventDefault();
	    e.dataTransfer.dropEffect = "link";
	    e.dataTransfer.effectAllowed = "link";
	}
	const DropTarget = (props) => {
	    const { 
	    // eslint-disable-next-line no-shadow, no-unused-vars
	    handleDrop, windowId, ...passThroughProps } = props;
	    const droppedFiles$1 = useActionCreator(droppedFiles);
	    const onDrop = reactExports.useCallback((e) => {
	        supress(e);
	        droppedFiles$1(e, windowId);
	        // TODO: We could probably move this coordinate logic into the playlist.
	        // I think that's the only place it gets used.
	        const { currentTarget } = e;
	        if (!(currentTarget instanceof Element)) {
	            return;
	        }
	        const { left: x, top: y } = currentTarget.getBoundingClientRect();
	        handleDrop(e, { x, y });
	    }, [handleDrop, droppedFiles$1, windowId]);
	    return (jsxRuntimeExports.jsx("div", { ...passThroughProps, onDragStart: supress, onDragEnter: supress, onDragOver: supress, onDrop: onDrop }));
	};

	const Portal = (props) => {
	    const node = reactExports.useMemo(() => {
	        const div = document.createElement("div");
	        div.id = "webamp-context-menu";
	        div.style.position = "absolute";
	        div.style.top = "0";
	        div.style.left = "0";
	        div.style.zIndex = String(props.zIndex + 1);
	        return div;
	    }, [props.zIndex]);
	    reactExports.useEffect(() => {
	        document.body.appendChild(node);
	        return () => {
	            document.body.removeChild(node);
	        };
	    }, [node]);
	    const style = {
	        top: props.top,
	        left: props.left,
	        position: "absolute",
	    };
	    return reactDomExports.createPortal(jsxRuntimeExports.jsx("div", { style: style, children: props.children }), node);
	};
	const Hr = () => (jsxRuntimeExports.jsx("li", { className: "hr", children: jsxRuntimeExports.jsx("hr", {}) }));
	const Parent = ({ children, label }) => (jsxRuntimeExports.jsxs("li", { className: "parent", children: [jsxRuntimeExports.jsx("ul", { children: children }), label] }));
	const LinkNode = (props) => (jsxRuntimeExports.jsx("li", { children: jsxRuntimeExports.jsx("a", { ...props, children: props.label }) }));
	const Node = (props) => {
	    const { label, checked, className = "", ...passThroughProps } = props;
	    return (jsxRuntimeExports.jsx("li", { className: classnames(className, { checked }), ...passThroughProps, children: label }));
	};
	function ContextMenu({ children, offsetTop, offsetLeft, top, bottom, selected, }) {
	    const zIndex = useTypedSelector(getZIndex);
	    if (!selected) {
	        return null;
	    }
	    return (jsxRuntimeExports.jsx(Portal, { top: offsetTop, left: offsetLeft, zIndex: zIndex, children: jsxRuntimeExports.jsx("ul", { className: classnames("context-menu", { top, bottom }), children: children }) }));
	}

	// Trigger a context menu at the user's cursor position when the user right
	// clicks within this component.
	// For a component that triggers relative to a given component when the user
	// left-clicks see `<ContextMenuTarget />`.
	// TODO: Consider using nested contexts to ensure we don't ever have multiple
	// non-nested context menus open at a time.
	function ContextMenuWraper({ children, renderContents, ...passThroughProps }) {
	    const [openPosition, setOpenPosition] = reactExports.useState(null);
	    const closeMenu = reactExports.useCallback(() => {
	        setOpenPosition(null);
	    }, []);
	    const handleGlobalClick = reactExports.useCallback((e) => {
	        if (e.button !== 2) {
	            closeMenu();
	        }
	    }, [closeMenu]);
	    const handleRightClick = reactExports.useCallback((e) => {
	        const { pageX, pageY } = e;
	        // TODO: We could do an initial render to see if the menu fits here
	        // and do a second render if it does not.
	        setOpenPosition({ x: pageX, y: pageY });
	        e.preventDefault();
	        e.stopPropagation();
	    }, []);
	    // Add click-away listeners when window is open
	    reactExports.useEffect(() => {
	        if (openPosition == null) {
	            return;
	        }
	        document.addEventListener("click", handleGlobalClick);
	        document.body.addEventListener("contextmenu", closeMenu);
	        return () => {
	            document.removeEventListener("click", handleGlobalClick);
	            document.body.removeEventListener("contextmenu", closeMenu);
	        };
	    }, [openPosition, closeMenu, handleGlobalClick]);
	    return (jsxRuntimeExports.jsxs("div", { onContextMenu: handleRightClick, style: { width: "100%", height: "100%" }, ...passThroughProps, children: [jsxRuntimeExports.jsx(ContextMenu, { selected: openPosition != null, offsetTop: openPosition?.y ?? 0, offsetLeft: openPosition?.x ?? 0, children: renderContents() }), children] }));
	}

	const MilkdropContextMenu = (props) => {
	    const desktop = useTypedSelector(getMilkdropDesktopEnabled);
	    const closeWindow$1 = useActionCreator(closeWindow);
	    const toggleDesktop = useActionCreator(toggleMilkdropDesktop);
	    const toggleFullscreen = useActionCreator(toggleMilkdropFullscreen);
	    return (jsxRuntimeExports.jsx(ContextMenuWraper, { renderContents: () => {
	            return (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx(Node, { onClick: toggleFullscreen, label: "Fullscreen", hotkey: "Alt+Enter" }), jsxRuntimeExports.jsx(Node, { onClick: toggleDesktop, checked: desktop, label: "Desktop Mode", hotkey: "Alt+D" }), jsxRuntimeExports.jsx(Hr, {}), jsxRuntimeExports.jsx(Node, { onClick: () => closeWindow$1(WINDOWS.MILKDROP), label: "Quit" })] }));
	        }, children: props.children }));
	};

	const Desktop = reactExports.memo(({ children }) => {
	    const [desktopNode] = reactExports.useState(() => document.createElement("div"));
	    reactExports.useEffect(() => {
	        desktopNode.classList.add("webamp-desktop");
	        document.body.appendChild(desktopNode);
	        return () => {
	            document.body.removeChild(desktopNode);
	        };
	    }, [desktopNode]);
	    return ReactDOM.createPortal(children, desktopNode);
	});

	const MILLISECONDS_BETWEEN_PRESET_TRANSITIONS = 15000;
	function useKeyHandler() {
	    const trackTitle = useTypedSelector(getCurrentTrackDisplayName);
	    const selectNextPreset$1 = useActionCreator(selectNextPreset);
	    const selectPreviousPreset$1 = useActionCreator(selectPreviousPreset);
	    const toggleRandomize = useActionCreator(toggleRandomizePresets);
	    const togglePresetOverlay$1 = useActionCreator(togglePresetOverlay);
	    const scheduleMilkdropMessage$1 = useActionCreator(scheduleMilkdropMessage);
	    const toggleCycling = useActionCreator(togglePresetCycling);
	    // Handle keyboard events
	    return reactExports.useCallback((e) => {
	        switch (e.keyCode) {
	            case 32: // spacebar
	                selectNextPreset$1();
	                break;
	            case 8: // backspace
	                selectPreviousPreset$1(TransitionType.IMMEDIATE);
	                break;
	            case 72: // H
	                selectNextPreset$1(TransitionType.IMMEDIATE);
	                break;
	            case 82: // R
	                toggleRandomize();
	                break;
	            case 76: // L
	                togglePresetOverlay$1();
	                e.stopPropagation();
	                break;
	            case 84: // T
	                if (trackTitle != null) {
	                    scheduleMilkdropMessage$1(trackTitle);
	                }
	                e.stopPropagation();
	                break;
	            case 145: // scroll lock
	            case 125: // F14 (scroll lock for OS X)
	                toggleCycling();
	                break;
	        }
	    }, [
	        scheduleMilkdropMessage$1,
	        selectNextPreset$1,
	        selectPreviousPreset$1,
	        toggleCycling,
	        togglePresetOverlay$1,
	        toggleRandomize,
	        trackTitle,
	    ]);
	}
	function Milkdrop({ analyser }) {
	    const desktop = useTypedSelector(getMilkdropDesktopEnabled);
	    const fullscreen = useTypedSelector(getMilkdropFullscreenEnabled);
	    const overlay = useTypedSelector(getPresetOverlayOpen);
	    const presetsAreCycling = useTypedSelector(getPresetsAreCycling);
	    const currentPresetIndex = useTypedSelector(getCurrentPresetIndex);
	    const mediaIsPlaying = useTypedSelector(getMediaIsPlaying);
	    const toggleFullscreen = useActionCreator(toggleMilkdropFullscreen);
	    const selectNextPreset$1 = useActionCreator(selectNextPreset);
	    const handlePresetDrop$1 = useActionCreator(handlePresetDrop);
	    const setFullscreen = useActionCreator(setMilkdropFullscreen);
	    const handleKeyDown = useKeyHandler();
	    // Cycle presets
	    reactExports.useEffect(() => {
	        if (!presetsAreCycling || !mediaIsPlaying) {
	            return;
	        }
	        const intervalId = setInterval(selectNextPreset$1, MILLISECONDS_BETWEEN_PRESET_TRANSITIONS);
	        return () => clearInterval(intervalId);
	    }, [presetsAreCycling, currentPresetIndex, mediaIsPlaying, selectNextPreset$1]);
	    const screenSize = useScreenSize();
	    const windowSize = useWindowSize();
	    if (desktop) {
	        return (jsxRuntimeExports.jsx(Desktop, { children: jsxRuntimeExports.jsx(MilkdropContextMenu, { children: jsxRuntimeExports.jsx(Visualizer$1, { ...windowSize, analyser: analyser }) }) }));
	    }
	    return (jsxRuntimeExports.jsx(GenWindow, { title: "Milkdrop", windowId: WINDOWS.MILKDROP, onKeyDown: handleKeyDown, children: (genWindowSize) => {
	            const size = fullscreen ? screenSize : genWindowSize;
	            return (jsxRuntimeExports.jsx(MilkdropContextMenu, { children: jsxRuntimeExports.jsx(Background$1, { children: jsxRuntimeExports.jsxs(DropTarget, { windowId: WINDOWS.MILKDROP, handleDrop: handlePresetDrop$1, children: [overlay && jsxRuntimeExports.jsx(PresetOverlay, { ...size }), jsxRuntimeExports.jsx(FullScreen, { enabled: fullscreen, onChange: setFullscreen, children: jsxRuntimeExports.jsx("div", { onDoubleClick: toggleFullscreen, children: jsxRuntimeExports.jsx(Visualizer$1, { ...size, analyser: analyser }) }) })] }) }) }));
	        } }));
	}

	const PlaybackContextMenu = () => {
	    const previous$1 = useActionCreator(previous);
	    const play$1 = useActionCreator(play);
	    const pause$1 = useActionCreator(pause);
	    const stop$1 = useActionCreator(stop);
	    const next$1 = useActionCreator(next);
	    const seekForward$1 = useActionCreator(seekForward);
	    const seekBackward$1 = useActionCreator(seekBackward);
	    const nextN$1 = useActionCreator(nextN);
	    return (jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [jsxRuntimeExports.jsx(Node, { label: "Previous", hotkey: "Z", onClick: previous$1 }), jsxRuntimeExports.jsx(Node, { label: "Play", hotkey: "X", onClick: play$1 }), jsxRuntimeExports.jsx(Node, { label: "Pause", hotkey: "C", onClick: pause$1 }), jsxRuntimeExports.jsx(Node, { label: "Stop", hotkey: "V", onClick: stop$1 }), jsxRuntimeExports.jsx(Node, { label: "Next", hotkey: "B", onClick: next$1 }), jsxRuntimeExports.jsx(Hr, {}), jsxRuntimeExports.jsx(Node, { label: "Back 5 seconds", hotkey: "Left", onClick: () => seekBackward$1(5) }), jsxRuntimeExports.jsx(Node, { label: "Fwd 5 seconds", hotkey: "Right", onClick: () => seekForward$1(5) }), jsxRuntimeExports.jsx(Node, { label: "10 tracks back", hotkey: "Num. 1", onClick: () => nextN$1(-10) }), jsxRuntimeExports.jsx(Node, { label: "10 tracks fwd", hotkey: "Num. 3", onClick: () => nextN$1(10) })] }));
	};

	const SkinContextMenu = () => {
	    const loadDefaultSkin$1 = useActionCreator(loadDefaultSkin);
	    const openSkinFileDialog$1 = useActionCreator(openSkinFileDialog);
	    const setSkin = useActionCreator(setSkinFromUrl);
	    const availableSkins = useTypedSelector(getAvaliableSkins);
	    return (jsxRuntimeExports.jsxs(Parent, { label: "Skins", children: [jsxRuntimeExports.jsx(Node, { onClick: openSkinFileDialog$1, label: "Load Skin..." }), jsxRuntimeExports.jsx(Hr, {}), jsxRuntimeExports.jsx(Node, { onClick: loadDefaultSkin$1, label: "<Base Skin>" }), availableSkins.map((skin) => (jsxRuntimeExports.jsx(Node, { onClick: () => setSkin(skin.url), label: skin.name }, skin.url)))] }));
	};

	const OptionsContextMenu = () => {
	    const toggleTimeMode$1 = useActionCreator(toggleTimeMode);
	    const toggleDoubleSizeMode$1 = useActionCreator(toggleDoubleSizeMode);
	    const toggleRepeat$1 = useActionCreator(toggleRepeat);
	    const toggleShuffle$1 = useActionCreator(toggleShuffle);
	    const doubled = useTypedSelector(getDoubled);
	    const timeMode = useTypedSelector(getTimeMode);
	    const repeat = useTypedSelector(getRepeat);
	    const shuffle = useTypedSelector(getShuffle);
	    return (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx(SkinContextMenu, {}), jsxRuntimeExports.jsx(Hr, {}), jsxRuntimeExports.jsx(Node, { label: "Time elapsed", hotkey: "(Ctrl+T toggles)", onClick: toggleTimeMode$1, checked: timeMode === TIME_MODE.ELAPSED }), jsxRuntimeExports.jsx(Node, { label: "Time remaining", hotkey: "(Ctrl+T toggles)", onClick: toggleTimeMode$1, checked: timeMode === TIME_MODE.REMAINING }), jsxRuntimeExports.jsx(Node, { label: "Double Size", hotkey: "Ctrl+D", onClick: toggleDoubleSizeMode$1, checked: doubled }), jsxRuntimeExports.jsx(Hr, {}), jsxRuntimeExports.jsx(Node, { label: "Repeat", hotkey: "R", onClick: toggleRepeat$1, checked: repeat }), jsxRuntimeExports.jsx(Node, { label: "Shuffle", hotkey: "S", onClick: toggleShuffle$1, checked: shuffle })] }));
	};

	const MainContextMenu = reactExports.memo(({ filePickers }) => {
	    const networkConnected = useTypedSelector(getNetworkConnected);
	    const genWindows = useTypedSelector(getGenWindows);
	    const close$1 = useActionCreator(close);
	    const openMediaFileDialog$1 = useActionCreator(openMediaFileDialog);
	    const loadMediaFiles$1 = useActionCreator(loadMediaFiles);
	    const toggleWindow$1 = useActionCreator(toggleWindow);
	    const menuOpened = useActionCreator(() => ({
	        type: "MAIN_CONTEXT_MENU_OPENED",
	    }));
	    reactExports.useEffect(() => {
	        menuOpened();
	    }, [menuOpened]);
	    return (jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [jsxRuntimeExports.jsx(LinkNode, { href: "https://webamp.org/about", target: "_blank", label: "Webamp..." }), jsxRuntimeExports.jsx(Hr, {}), jsxRuntimeExports.jsxs(Parent, { label: "Play", children: [jsxRuntimeExports.jsx(Node, { onClick: openMediaFileDialog$1, label: "File...", hotkey: "L" }), filePickers != null &&
	                        filePickers.map((picker, i) => (networkConnected || !picker.requiresNetwork) && (jsxRuntimeExports.jsx(Node, { onClick: async () => {
	                                let files;
	                                try {
	                                    files = await picker.filePicker();
	                                }
	                                catch (e) {
	                                    console.error("Error loading from file picker", e);
	                                }
	                                loadMediaFiles$1(files || [], LOAD_STYLE.PLAY);
	                            }, label: picker.contextMenuName }, i)))] }), jsxRuntimeExports.jsx(Hr, {}), Object.keys(genWindows).map((i) => (jsxRuntimeExports.jsx(Node, { label: genWindows[i].title, checked: genWindows[i].open, onClick: () => toggleWindow$1(i), hotkey: genWindows[i].hotkey }, i))), jsxRuntimeExports.jsx(Hr, {}), jsxRuntimeExports.jsx(SkinContextMenu, {}), jsxRuntimeExports.jsx(Hr, {}), jsxRuntimeExports.jsx(Parent, { label: "Options", children: jsxRuntimeExports.jsx(OptionsContextMenu, {}) }), jsxRuntimeExports.jsx(Parent, { label: "Playback", children: jsxRuntimeExports.jsx(PlaybackContextMenu, {}) }), jsxRuntimeExports.jsx(Hr, {}), jsxRuntimeExports.jsx(Node, { onClick: close$1, label: "Exit" })] }));
	});

	const abuts = (a, b) => {
	    // TODO: This is kinda a hack. They should really be touching, not just within snapping distance.
	    // Also, overlapping should not count.
	    const wouldMoveTo = snap(a, b);
	    return wouldMoveTo.x !== undefined || wouldMoveTo.y !== undefined;
	};
	function useHandleMouseDown(propsWindows) {
	    const windowsInfo = useTypedSelector(getWindowsInfo);
	    const getWindowHidden$1 = useTypedSelector(getWindowHidden);
	    const browserWindowSize = useTypedSelector(getBrowserWindowSize);
	    const updateWindowPositions$1 = useActionCreator(updateWindowPositions);
	    const [draggingState, setDraggingState] = reactExports.useState(null);
	    // When the mouse is down, attach a listener to track mouse move events.
	    reactExports.useEffect(() => {
	        if (draggingState == null) {
	            return;
	        }
	        const { boundingBox, moving, stationary, mouseStart } = draggingState;
	        const handleMouseMove = (ee) => {
	            const proposedDiff = {
	                x: getX(ee) - mouseStart.x,
	                y: getY(ee) - mouseStart.y,
	            };
	            const proposedWindows = moving.map((node) => ({
	                ...node,
	                ...applyDiff(node, proposedDiff),
	            }));
	            const proposedBox = {
	                ...boundingBox,
	                ...applyDiff(boundingBox, proposedDiff),
	            };
	            const snapDiff = snapDiffManyToMany(proposedWindows, stationary);
	            const withinDiff = snapWithinDiff(proposedBox, browserWindowSize);
	            const finalDiff = applyMultipleDiffs(proposedDiff, snapDiff, withinDiff);
	            const windowPositionDiff = {};
	            moving.forEach((w) => {
	                windowPositionDiff[w.key] = applyDiff(w, finalDiff);
	            });
	            updateWindowPositions$1(windowPositionDiff, false);
	        };
	        function handleMouseUp() {
	            setDraggingState(null);
	        }
	        window.addEventListener("mouseup", handleMouseUp);
	        window.addEventListener("touchend", handleMouseUp);
	        window.addEventListener("mousemove", handleMouseMove, { passive: false });
	        window.addEventListener("touchmove", handleMouseMove, { passive: false });
	        return () => {
	            window.removeEventListener("mousemove", handleMouseMove);
	            window.removeEventListener("touchmove", handleMouseMove);
	            window.removeEventListener("mouseup", handleMouseUp);
	            window.removeEventListener("touchend", handleMouseUp);
	        };
	    }, [browserWindowSize, draggingState, updateWindowPositions$1]);
	    // Mouse down handler
	    return reactExports.useCallback((key, e) => {
	        if (!e.target.classList.contains("draggable")) {
	            return;
	        }
	        const x = getX(e);
	        const y = getY(e);
	        if (getWindowHidden$1(key)) {
	            // The user may be clicking on full screen Milkdrop.
	            return;
	        }
	        const windows = windowsInfo.filter((w) => propsWindows[w.key] != null && !getWindowHidden$1(w.key));
	        const targetNode = windows.find((node) => node.key === key);
	        if (targetNode == null) {
	            throw new Error(`Tried to move a node that does not exist: ${key}`);
	        }
	        let movingSet = new Set([targetNode]);
	        // Only the main window brings other windows along.
	        if (key === "main") {
	            const findAllConnected = traceConnection(abuts);
	            movingSet = findAllConnected(windows, targetNode);
	        }
	        const stationary = windows.filter((w) => !movingSet.has(w));
	        const moving = Array.from(movingSet);
	        const mouseStart = { x, y };
	        const boundingBox$1 = boundingBox(moving);
	        setDraggingState({ boundingBox: boundingBox$1, moving, stationary, mouseStart });
	    }, [getWindowHidden$1, propsWindows, windowsInfo]);
	}
	function WindowManager({ windows: propsWindows }) {
	    const windowsInfo = useTypedSelector(getWindowsInfo);
	    const setFocusedWindow$1 = useActionCreator(setFocusedWindow);
	    const handleMouseDown = useHandleMouseDown(propsWindows);
	    const windows = windowsInfo.filter((w) => propsWindows[w.key]);
	    const onBlur = reactExports.useCallback(
	    // I give up on trying to type things with `relatedTarget`.
	    (e) => {
	        const { currentTarget, relatedTarget } = e;
	        if (currentTarget === relatedTarget ||
	            currentTarget.contains(relatedTarget)) {
	            return;
	        }
	        setFocusedWindow$1(null);
	    }, [setFocusedWindow$1]);
	    return (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: windows.map((w) => (jsxRuntimeExports.jsx("div", { onBlur: onBlur, onMouseDown: (e) => {
	                handleMouseDown(w.key, e);
	            }, onTouchStart: (e) => {
	                handleMouseDown(w.key, e);
	            }, style: {
	                position: "absolute",
	                top: 0,
	                left: 0,
	                transform: `translate(${w.x}px, ${w.y}px)`,
	                touchAction: "none",
	            }, children: propsWindows[w.key] }, w.key))) }));
	}

	/**
	 * The base implementation of `_.propertyOf` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyOf$1(object) {
	  return function (key) {
	    return object == null ? undefined : object[key];
	  };
	}
	var _basePropertyOf = basePropertyOf$1;

	var basePropertyOf = _basePropertyOf;

	/** Used to map Latin Unicode letters to basic Latin letters. */
	var deburredLetters = {
	  // Latin-1 Supplement block.
	  '\xc0': 'A',
	  '\xc1': 'A',
	  '\xc2': 'A',
	  '\xc3': 'A',
	  '\xc4': 'A',
	  '\xc5': 'A',
	  '\xe0': 'a',
	  '\xe1': 'a',
	  '\xe2': 'a',
	  '\xe3': 'a',
	  '\xe4': 'a',
	  '\xe5': 'a',
	  '\xc7': 'C',
	  '\xe7': 'c',
	  '\xd0': 'D',
	  '\xf0': 'd',
	  '\xc8': 'E',
	  '\xc9': 'E',
	  '\xca': 'E',
	  '\xcb': 'E',
	  '\xe8': 'e',
	  '\xe9': 'e',
	  '\xea': 'e',
	  '\xeb': 'e',
	  '\xcc': 'I',
	  '\xcd': 'I',
	  '\xce': 'I',
	  '\xcf': 'I',
	  '\xec': 'i',
	  '\xed': 'i',
	  '\xee': 'i',
	  '\xef': 'i',
	  '\xd1': 'N',
	  '\xf1': 'n',
	  '\xd2': 'O',
	  '\xd3': 'O',
	  '\xd4': 'O',
	  '\xd5': 'O',
	  '\xd6': 'O',
	  '\xd8': 'O',
	  '\xf2': 'o',
	  '\xf3': 'o',
	  '\xf4': 'o',
	  '\xf5': 'o',
	  '\xf6': 'o',
	  '\xf8': 'o',
	  '\xd9': 'U',
	  '\xda': 'U',
	  '\xdb': 'U',
	  '\xdc': 'U',
	  '\xf9': 'u',
	  '\xfa': 'u',
	  '\xfb': 'u',
	  '\xfc': 'u',
	  '\xdd': 'Y',
	  '\xfd': 'y',
	  '\xff': 'y',
	  '\xc6': 'Ae',
	  '\xe6': 'ae',
	  '\xde': 'Th',
	  '\xfe': 'th',
	  '\xdf': 'ss',
	  // Latin Extended-A block.
	  '\u0100': 'A',
	  '\u0102': 'A',
	  '\u0104': 'A',
	  '\u0101': 'a',
	  '\u0103': 'a',
	  '\u0105': 'a',
	  '\u0106': 'C',
	  '\u0108': 'C',
	  '\u010a': 'C',
	  '\u010c': 'C',
	  '\u0107': 'c',
	  '\u0109': 'c',
	  '\u010b': 'c',
	  '\u010d': 'c',
	  '\u010e': 'D',
	  '\u0110': 'D',
	  '\u010f': 'd',
	  '\u0111': 'd',
	  '\u0112': 'E',
	  '\u0114': 'E',
	  '\u0116': 'E',
	  '\u0118': 'E',
	  '\u011a': 'E',
	  '\u0113': 'e',
	  '\u0115': 'e',
	  '\u0117': 'e',
	  '\u0119': 'e',
	  '\u011b': 'e',
	  '\u011c': 'G',
	  '\u011e': 'G',
	  '\u0120': 'G',
	  '\u0122': 'G',
	  '\u011d': 'g',
	  '\u011f': 'g',
	  '\u0121': 'g',
	  '\u0123': 'g',
	  '\u0124': 'H',
	  '\u0126': 'H',
	  '\u0125': 'h',
	  '\u0127': 'h',
	  '\u0128': 'I',
	  '\u012a': 'I',
	  '\u012c': 'I',
	  '\u012e': 'I',
	  '\u0130': 'I',
	  '\u0129': 'i',
	  '\u012b': 'i',
	  '\u012d': 'i',
	  '\u012f': 'i',
	  '\u0131': 'i',
	  '\u0134': 'J',
	  '\u0135': 'j',
	  '\u0136': 'K',
	  '\u0137': 'k',
	  '\u0138': 'k',
	  '\u0139': 'L',
	  '\u013b': 'L',
	  '\u013d': 'L',
	  '\u013f': 'L',
	  '\u0141': 'L',
	  '\u013a': 'l',
	  '\u013c': 'l',
	  '\u013e': 'l',
	  '\u0140': 'l',
	  '\u0142': 'l',
	  '\u0143': 'N',
	  '\u0145': 'N',
	  '\u0147': 'N',
	  '\u014a': 'N',
	  '\u0144': 'n',
	  '\u0146': 'n',
	  '\u0148': 'n',
	  '\u014b': 'n',
	  '\u014c': 'O',
	  '\u014e': 'O',
	  '\u0150': 'O',
	  '\u014d': 'o',
	  '\u014f': 'o',
	  '\u0151': 'o',
	  '\u0154': 'R',
	  '\u0156': 'R',
	  '\u0158': 'R',
	  '\u0155': 'r',
	  '\u0157': 'r',
	  '\u0159': 'r',
	  '\u015a': 'S',
	  '\u015c': 'S',
	  '\u015e': 'S',
	  '\u0160': 'S',
	  '\u015b': 's',
	  '\u015d': 's',
	  '\u015f': 's',
	  '\u0161': 's',
	  '\u0162': 'T',
	  '\u0164': 'T',
	  '\u0166': 'T',
	  '\u0163': 't',
	  '\u0165': 't',
	  '\u0167': 't',
	  '\u0168': 'U',
	  '\u016a': 'U',
	  '\u016c': 'U',
	  '\u016e': 'U',
	  '\u0170': 'U',
	  '\u0172': 'U',
	  '\u0169': 'u',
	  '\u016b': 'u',
	  '\u016d': 'u',
	  '\u016f': 'u',
	  '\u0171': 'u',
	  '\u0173': 'u',
	  '\u0174': 'W',
	  '\u0175': 'w',
	  '\u0176': 'Y',
	  '\u0177': 'y',
	  '\u0178': 'Y',
	  '\u0179': 'Z',
	  '\u017b': 'Z',
	  '\u017d': 'Z',
	  '\u017a': 'z',
	  '\u017c': 'z',
	  '\u017e': 'z',
	  '\u0132': 'IJ',
	  '\u0133': 'ij',
	  '\u0152': 'Oe',
	  '\u0153': 'oe',
	  '\u0149': "'n",
	  '\u017f': 's'
	};

	/**
	 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
	 * letters to basic Latin letters.
	 *
	 * @private
	 * @param {string} letter The matched letter to deburr.
	 * @returns {string} Returns the deburred letter.
	 */
	var deburrLetter$1 = basePropertyOf(deburredLetters);
	var _deburrLetter = deburrLetter$1;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
	var _freeGlobal = freeGlobal$1;

	var freeGlobal = _freeGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root$1 = freeGlobal || freeSelf || Function('return this')();
	var _root = root$1;

	var root = _root;

	/** Built-in value references. */
	var Symbol$4 = root.Symbol;
	var _Symbol = Symbol$4;

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap$1(array, iteratee) {
	  var index = -1,
	    length = array == null ? 0 : array.length,
	    result = Array(length);
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	var _arrayMap = arrayMap$1;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray$1 = Array.isArray;
	var isArray_1 = isArray$1;

	var Symbol$3 = _Symbol;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto$1.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$1.toString;

	/** Built-in value references. */
	var symToStringTag$1 = Symbol$3 ? Symbol$3.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag$1(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
	    tag = value[symToStringTag$1];
	  try {
	    value[symToStringTag$1] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	  var result = nativeObjectToString$1.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag$1] = tag;
	    } else {
	      delete value[symToStringTag$1];
	    }
	  }
	  return result;
	}
	var _getRawTag = getRawTag$1;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString$1(value) {
	  return nativeObjectToString.call(value);
	}
	var _objectToString = objectToString$1;

	var Symbol$2 = _Symbol,
	  getRawTag = _getRawTag,
	  objectToString = _objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	  undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag$1(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
	}
	var _baseGetTag = baseGetTag$1;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike$1(value) {
	  return value != null && typeof value == 'object';
	}
	var isObjectLike_1 = isObjectLike$1;

	var baseGetTag = _baseGetTag,
	  isObjectLike = isObjectLike_1;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol$1(value) {
	  return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
	}
	var isSymbol_1 = isSymbol$1;

	var Symbol$1 = _Symbol,
	  arrayMap = _arrayMap,
	  isArray = isArray_1,
	  isSymbol = isSymbol_1;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
	  symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString$1(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString$1) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = value + '';
	  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
	}
	var _baseToString = baseToString$1;

	var baseToString = _baseToString;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString$1(value) {
	  return value == null ? '' : baseToString(value);
	}
	var toString_1 = toString$1;

	var deburrLetter = _deburrLetter,
	  toString = toString_1;

	/** Used to match Latin Unicode letters (excluding mathematical operators). */
	var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

	/** Used to compose unicode character classes. */
	var rsComboMarksRange = '\\u0300-\\u036f',
	  reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	  rsComboSymbolsRange = '\\u20d0-\\u20ff',
	  rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

	/** Used to compose unicode capture groups. */
	var rsCombo = '[' + rsComboRange + ']';

	/**
	 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	 */
	var reComboMark = RegExp(rsCombo, 'g');

	/**
	 * Deburrs `string` by converting
	 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	 * letters to basic Latin letters and removing
	 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to deburr.
	 * @returns {string} Returns the deburred string.
	 * @example
	 *
	 * _.deburr('déjà vu');
	 * // => 'deja vu'
	 */
	function deburr(string) {
	  string = toString(string);
	  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
	}
	var deburr_1 = deburr;
	var deburr$1 = /*@__PURE__*/getDefaultExportFromCjs(deburr_1);

	const characterClassName = (char) => `character-${deburr$1(char.toString()).toLowerCase().charCodeAt(0)}`;
	const Character = reactExports.memo(({ children: char, className, ...passThrough }) => {
	    return (jsxRuntimeExports.jsx("span", { ...passThrough, className: `${className || ""} character ${characterClassName(char)}`, children: char }));
	});

	// Sigh. When the display is blinking (say when it's paused) we need to
	// alternate between the actual character and the space character. Not
	// Possible to do that in pure CSS with the background being dynamically generated.
	// All "space" characters is also how Winamp renders no content.
	const Background = () => (jsxRuntimeExports.jsx(reactExports.Fragment, { children: [1, 7, 12, 20, 25].map((left, i) => (jsxRuntimeExports.jsx(Character, { style: { left }, className: "background-character", children: " " }, i))) }));
	const MiniTime = () => {
	    const status = useTypedSelector(getMediaStatus);
	    const duration = useTypedSelector(getDuration);
	    const timeElapsed = useTypedSelector(getTimeElapsed);
	    const timeMode = useTypedSelector(getTimeMode);
	    const toggle = useActionCreator(toggleTimeMode);
	    let seconds = null;
	    // TODO: Clean this up: If stopped, just render the background, rather than
	    // rendering spaces twice.
	    if (status !== MEDIA_STATUS.STOPPED && duration != null) {
	        seconds =
	            timeMode === TIME_MODE.ELAPSED ? timeElapsed : duration - timeElapsed;
	    }
	    const timeObj = getTimeObj(seconds);
	    const showMinus = timeMode === TIME_MODE.REMAINING && status !== MEDIA_STATUS.STOPPED;
	    return (jsxRuntimeExports.jsxs("div", { onClick: toggle, className: classnames("mini-time", "countdown", {
	            blinking: status === MEDIA_STATUS.PAUSED,
	        }), children: [jsxRuntimeExports.jsx(Background, {}), jsxRuntimeExports.jsx(Character, { style: { left: 1 }, children: showMinus ? "-" : " " }), jsxRuntimeExports.jsx(Character, { style: { left: 7 }, children: timeObj.minutesFirstDigit }), jsxRuntimeExports.jsx(Character, { style: { left: 12 }, children: timeObj.minutesSecondDigit }), jsxRuntimeExports.jsx(Character, { style: { left: 20 }, children: timeObj.secondsFirstDigit }), jsxRuntimeExports.jsx(Character, { style: { left: 25 }, children: timeObj.secondsSecondDigit })] }));
	};

	// Winamp has a strange behavior for the buttons at the top of the main window.
	// It shows through to the main background sprite until the first time that it's
	// clicked, and then it shows the dedicated undepressed sprite thereafter.
	// This component is an abstraction that tracks if a div has ever been clicked.
	// Look in `skinSelectors` for CSS selectors that look like `#some-id.clicked`
	// for examples of this functionality in use.
	function ClickedDiv(props) {
	    const [clicked, setClicked] = reactExports.useState(false);
	    function handlePointerDown(e) {
	        setClicked(true);
	        if (props.onPointerDown) {
	            props.onPointerDown(e);
	        }
	    }
	    return (jsxRuntimeExports.jsx(WinampButton, { ...props, className: classnames(props.className, { clicked }), onPointerDown: handlePointerDown }));
	}

	function getNodeOffset(node) {
	    if (node == null) {
	        return { top: 0, left: 0 };
	    }
	    const rect = node.getBoundingClientRect();
	    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
	    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
	}
	// Trigger a context menu relative to the child element when the user
	// left-clicks on the child.
	//
	// For a component that triggers relative to the user's cursor on right-click
	// see `<ContextMenuWrapper />`.
	function ContextMenuTarget(props) {
	    const handleNode = reactExports.useRef(null);
	    const [selected, setSelected] = reactExports.useState(false);
	    reactExports.useEffect(() => {
	        if (!selected) {
	            return;
	        }
	        function handleGlobalClick(e) {
	            if (selected &&
	                // Typescript does not believe that these click events are always fired on DOM nodes.
	                e.target instanceof Element &&
	                selected &&
	                // Not sure how, but it's possible for this to get called when handleNode is null/undefined.
	                // https://sentry.io/share/issue/2066cd79f21e4f279791319f4d2ea35d/
	                handleNode.current &&
	                !handleNode.current.contains(e.target)) {
	                setSelected(false);
	            }
	        }
	        document.addEventListener("click", handleGlobalClick);
	        return () => {
	            document.removeEventListener("click", handleGlobalClick);
	        };
	    }, [selected]);
	    const offset = reactExports.useMemo(() => {
	        return selected
	            ? getNodeOffset(handleNode.current)
	            : // Kinda awkward. This is a nonsense return value since we only use
	                //this value when we are selected.
	                { top: 0, left: 0 };
	    }, [selected]);
	    const { renderMenu, children, top, bottom, ...passThroughProps } = props;
	    return (jsxRuntimeExports.jsxs("div", { ...passThroughProps, children: [jsxRuntimeExports.jsx("div", { className: "handle", style: { width: "100%", height: "100%" }, ref: handleNode, onClick: () => setSelected(!selected), children: children }), jsxRuntimeExports.jsx(ContextMenu, { selected: selected, offsetTop: offset.top, offsetLeft: offset.left, top: top, bottom: bottom, children: renderMenu() })] }));
	}

	const PIXEL_DENSITY$2 = 2;
	// Return the average value in a slice of dataArray
	function sliceAverage(dataArray, sliceWidth, sliceNumber) {
	    const start = sliceWidth * sliceNumber;
	    const end = start + sliceWidth;
	    let sum = 0;
	    for (let i = start; i < end; i++) {
	        sum += dataArray[i];
	    }
	    return sum / sliceWidth;
	}
	function usePaintOscilloscopeFrame({ analyser, height, width, renderWidth, }) {
	    const colors = useTypedSelector(getSkinColors);
	    const bufferLength = analyser.fftSize;
	    const dataArray = reactExports.useMemo(() => {
	        return new Uint8Array(bufferLength);
	    }, [bufferLength]);
	    return reactExports.useCallback((canvasCtx) => {
	        analyser.getByteTimeDomainData(dataArray);
	        canvasCtx.lineWidth = PIXEL_DENSITY$2;
	        // Just use one of the viscolors for now
	        canvasCtx.strokeStyle = colors[18];
	        // Since dataArray has more values than we have pixels to display, we
	        // have to average several dataArray values per pixel. We call these
	        // groups slices.
	        //
	        // We use the  2x scale here since we only want to plot values for
	        // "real" pixels.
	        const sliceWidth = Math.floor(bufferLength / width) * PIXEL_DENSITY$2;
	        const h = height;
	        canvasCtx.beginPath();
	        // Iterate over the width of the canvas in "real" pixels.
	        for (let j = 0; j <= renderWidth; j++) {
	            const amplitude = sliceAverage(dataArray, sliceWidth, j);
	            const percentAmplitude = amplitude / 255; // dataArray gives us bytes
	            const y = (1 - percentAmplitude) * h; // flip y
	            const x = j * PIXEL_DENSITY$2;
	            // Canvas coordinates are in the middle of the pixel by default.
	            // When we want to draw pixel perfect lines, we will need to
	            // account for that here
	            if (x === 0) {
	                canvasCtx.moveTo(x, y);
	            }
	            else {
	                canvasCtx.lineTo(x, y);
	            }
	        }
	        canvasCtx.stroke();
	    }, [analyser, bufferLength, colors, dataArray, height, renderWidth, width]);
	}

	const PIXEL_DENSITY$1 = 2;
	const BAR_WIDTH = 3 * PIXEL_DENSITY$1;
	const GRADIENT_COLOR_COUNT = 16;
	const PEAK_COLOR_INDEX = 23;
	const BAR_PEAK_DROP_RATE = 0.01;
	const NUM_BARS = 20;
	function octaveBucketsForBufferLength(bufferLength) {
	    const octaveBuckets = new Array(NUM_BARS).fill(0);
	    const minHz = 200;
	    const maxHz = 22050;
	    const octaveStep = Math.pow(maxHz / minHz, 1 / NUM_BARS);
	    octaveBuckets[0] = 0;
	    octaveBuckets[1] = minHz;
	    for (let i = 2; i < NUM_BARS - 1; i++) {
	        octaveBuckets[i] = octaveBuckets[i - 1] * octaveStep;
	    }
	    octaveBuckets[NUM_BARS - 1] = maxHz;
	    for (let i = 0; i < NUM_BARS; i++) {
	        const octaveIdx = Math.floor((octaveBuckets[i] / maxHz) * bufferLength);
	        octaveBuckets[i] = octaveIdx;
	    }
	    return octaveBuckets;
	}
	function preRenderBar(height, colors, renderHeight) {
	    /**
	     * The order of the colours is commented in the file: the fist two colours
	     * define the background and dots (check it to see what are the dots), the
	     * next 16 colours are the analyzer's colours from top to bottom, the next
	     * 5 colours are the oscilloscope's ones, from center to top/bottom, the
	     * last colour is for the analyzer's peak markers.
	     */
	    // Off-screen canvas for pre-rendering a single bar gradient
	    const barCanvas = document.createElement("canvas");
	    barCanvas.width = BAR_WIDTH;
	    barCanvas.height = height;
	    const offset = 2; // The first two colors are for the background;
	    const gradientColors = colors.slice(offset, offset + GRADIENT_COLOR_COUNT);
	    const barCanvasCtx = barCanvas.getContext("2d");
	    if (barCanvasCtx == null) {
	        throw new Error("Could not construct canvas context");
	    }
	    const multiplier = GRADIENT_COLOR_COUNT / renderHeight;
	    // In shade mode, the five colors are, from top to bottom:
	    // 214, 102, 0 -- 3
	    // 222, 165, 24 -- 6
	    // 148, 222, 33 -- 9
	    // 57, 181, 16 -- 12
	    // 24, 132, 8 -- 15
	    // TODO: This could probably be improved by iterating backwards
	    for (let i = 0; i < renderHeight; i++) {
	        const colorIndex = GRADIENT_COLOR_COUNT - 1 - Math.floor(i * multiplier);
	        barCanvasCtx.fillStyle = gradientColors[colorIndex];
	        const y = height - i * PIXEL_DENSITY$1;
	        barCanvasCtx.fillRect(0, y, BAR_WIDTH, PIXEL_DENSITY$1);
	    }
	    return barCanvas;
	}
	function usePaintBar({ renderHeight, height, }) {
	    const colors = useTypedSelector(getSkinColors);
	    const getWindowShade$1 = useTypedSelector(getWindowShade);
	    const windowShade = getWindowShade$1("main");
	    const barCanvas = reactExports.useMemo(() => {
	        return preRenderBar(height, colors, renderHeight);
	    }, [colors, height, renderHeight]);
	    return reactExports.useCallback((ctx, x, barHeight, peakHeight) => {
	        barHeight = Math.ceil(barHeight) * PIXEL_DENSITY$1;
	        peakHeight = Math.ceil(peakHeight) * PIXEL_DENSITY$1;
	        if (barHeight > 0 || peakHeight > 0) {
	            const y = height - barHeight;
	            // Draw the gradient
	            const b = BAR_WIDTH;
	            if (height > 0) {
	                ctx.drawImage(barCanvas, 0, y, b, height, x, y, b, height);
	            }
	            // Draw the gray peak line
	            if (!windowShade) {
	                const peakY = height - peakHeight;
	                ctx.fillStyle = colors[PEAK_COLOR_INDEX];
	                ctx.fillRect(x, peakY, b, PIXEL_DENSITY$1);
	            }
	        }
	    }, [barCanvas, colors, height, windowShade]);
	}
	function usePaintBarFrame({ renderHeight, height, analyser, }) {
	    const [barPeaks] = reactExports.useState(() => new Array(NUM_BARS).fill(0));
	    const [barPeakFrames] = reactExports.useState(() => new Array(NUM_BARS).fill(0));
	    const bufferLength = analyser.frequencyBinCount;
	    const octaveBuckets = reactExports.useMemo(() => {
	        return octaveBucketsForBufferLength(bufferLength);
	    }, [bufferLength]);
	    const dataArray = reactExports.useMemo(() => {
	        return new Uint8Array(bufferLength);
	    }, [bufferLength]);
	    const paintBar = usePaintBar({ height, renderHeight });
	    return reactExports.useCallback((canvasCtx) => {
	        analyser.getByteFrequencyData(dataArray);
	        const heightMultiplier = renderHeight / 256;
	        const xOffset = BAR_WIDTH + PIXEL_DENSITY$1; // Bar width, plus a pixel of spacing to the right.
	        for (let j = 0; j < NUM_BARS - 1; j++) {
	            const start = octaveBuckets[j];
	            const end = octaveBuckets[j + 1];
	            let amplitude = 0;
	            for (let k = start; k < end; k++) {
	                amplitude += dataArray[k];
	            }
	            amplitude /= end - start;
	            // The drop rate should probably be normalized to the rendering FPS, for now assume 60 FPS
	            let barPeak = barPeaks[j] - BAR_PEAK_DROP_RATE * Math.pow(barPeakFrames[j], 2);
	            if (barPeak < amplitude) {
	                barPeak = amplitude;
	                barPeakFrames[j] = 0;
	            }
	            else {
	                barPeakFrames[j] += 1;
	            }
	            barPeaks[j] = barPeak;
	            paintBar(canvasCtx, j * xOffset, amplitude * heightMultiplier, barPeak * heightMultiplier);
	        }
	    }, [
	        analyser,
	        barPeakFrames,
	        barPeaks,
	        dataArray,
	        octaveBuckets,
	        paintBar,
	        renderHeight,
	    ]);
	}

	const PIXEL_DENSITY = 2;
	// Pre-render the background grid
	function preRenderBg(width, height, bgColor, fgColor, windowShade) {
	    // Off-screen canvas for pre-rendering the background
	    const bgCanvas = document.createElement("canvas");
	    bgCanvas.width = width;
	    bgCanvas.height = height;
	    const distance = 2 * PIXEL_DENSITY;
	    const bgCanvasCtx = bgCanvas.getContext("2d");
	    if (bgCanvasCtx == null) {
	        throw new Error("Could not construct canvas context");
	    }
	    bgCanvasCtx.fillStyle = bgColor;
	    bgCanvasCtx.fillRect(0, 0, width, height);
	    if (!windowShade) {
	        bgCanvasCtx.fillStyle = fgColor;
	        for (let x = 0; x < width; x += distance) {
	            for (let y = PIXEL_DENSITY; y < height; y += distance) {
	                bgCanvasCtx.fillRect(x, y, PIXEL_DENSITY, PIXEL_DENSITY);
	            }
	        }
	    }
	    return bgCanvas;
	}
	function Visualizer({ analyser }) {
	    reactExports.useLayoutEffect(() => {
	        analyser.fftSize = 2048;
	    }, [analyser, analyser.fftSize]);
	    const colors = useTypedSelector(getSkinColors);
	    const style = useTypedSelector(getVisualizerStyle);
	    const status = useTypedSelector(getMediaStatus);
	    const getWindowShade$1 = useTypedSelector(getWindowShade);
	    const dummyVizData = useTypedSelector(getDummyVizData);
	    const toggleVisualizerStyle$1 = useActionCreator(toggleVisualizerStyle);
	    const windowShade = getWindowShade$1("main");
	    const renderWidth = windowShade ? 38 : 76;
	    const renderHeight = windowShade ? 5 : 16;
	    const width = renderWidth * PIXEL_DENSITY;
	    const height = renderHeight * PIXEL_DENSITY;
	    const bgCanvas = reactExports.useMemo(() => {
	        return preRenderBg(width, height, colors[0], colors[1], Boolean(windowShade));
	    }, [colors, height, width, windowShade]);
	    const paintOscilloscopeFrame = usePaintOscilloscopeFrame({
	        analyser,
	        height,
	        width,
	        renderWidth,
	    });
	    const paintBarFrame = usePaintBarFrame({
	        analyser,
	        height,
	        renderHeight,
	    });
	    const paintBar = usePaintBar({ height, renderHeight });
	    const paintFrame = reactExports.useCallback((canvasCtx) => {
	        if (status !== MEDIA_STATUS.PLAYING) {
	            return;
	        }
	        if (dummyVizData) {
	            canvasCtx.drawImage(bgCanvas, 0, 0);
	            Object.entries(dummyVizData).forEach(([i, value]) => {
	                paintBar(canvasCtx, Number(i), value, -1);
	            });
	            return;
	        }
	        switch (style) {
	            case VISUALIZERS.OSCILLOSCOPE:
	                canvasCtx.drawImage(bgCanvas, 0, 0);
	                paintOscilloscopeFrame(canvasCtx);
	                break;
	            case VISUALIZERS.BAR:
	                canvasCtx.drawImage(bgCanvas, 0, 0);
	                paintBarFrame(canvasCtx);
	                break;
	            default:
	                canvasCtx.clearRect(0, 0, width, height);
	        }
	    }, [
	        bgCanvas,
	        dummyVizData,
	        height,
	        paintBar,
	        paintBarFrame,
	        paintOscilloscopeFrame,
	        status,
	        style,
	        width,
	    ]);
	    const [canvas, setCanvas] = reactExports.useState(null);
	    reactExports.useLayoutEffect(() => {
	        if (canvas == null) {
	            return;
	        }
	        const canvasCtx = canvas.getContext("2d");
	        if (canvasCtx == null) {
	            return;
	        }
	        canvasCtx.imageSmoothingEnabled = false;
	        let animationRequest = null;
	        // Kick off the animation loop
	        const loop = () => {
	            paintFrame(canvasCtx);
	            animationRequest = window.requestAnimationFrame(loop);
	        };
	        loop();
	        return () => {
	            if (animationRequest != null) {
	                window.cancelAnimationFrame(animationRequest);
	            }
	        };
	    }, [canvas, paintFrame]);
	    if (status === MEDIA_STATUS.STOPPED) {
	        return null;
	    }
	    return (jsxRuntimeExports.jsx("canvas", { id: "visualizer", ref: setCanvas, style: { width: renderWidth, height: renderHeight }, width: width, height: height, onClick: toggleVisualizerStyle$1 }));
	}

	const ActionButtons = reactExports.memo(() => {
	    const previous$1 = useActionCreator(previous);
	    const play$1 = useActionCreator(play);
	    const pause$1 = useActionCreator(pause);
	    const next$1 = useActionCreator(next);
	    const stop$1 = useActionCreator(stop);
	    return (jsxRuntimeExports.jsxs("div", { className: "actions", children: [jsxRuntimeExports.jsx(WinampButton, { id: "previous", onClick: previous$1, title: "Previous Track" }), jsxRuntimeExports.jsx(WinampButton, { id: "play", onClick: play$1, title: "Play" }), jsxRuntimeExports.jsx(WinampButton, { id: "pause", onClick: pause$1, title: "Pause" }), jsxRuntimeExports.jsx(WinampButton, { id: "stop", onClick: stop$1, title: "Stop" }), jsxRuntimeExports.jsx(WinampButton, { id: "next", onClick: next$1, title: "Next Track" })] }));
	});

	function Balance({ style, className, id }) {
	    const balance = useTypedSelector(getBalance);
	    const setBalance$1 = useActionCreator(setBalance);
	    const setFocus$1 = useActionCreator(setFocus);
	    const unsetFocus$1 = useActionCreator(unsetFocus);
	    return (jsxRuntimeExports.jsx("input", { id: id, className: className, type: "range", min: "-100", max: "100", step: "1", value: balance, style: { ...style, touchAction: "none" }, onChange: (e) => setBalance$1(Number(e.target.value)), onPointerDown: () => setFocus$1("balance"), onPointerUp: unsetFocus$1, title: "Balance" }));
	}

	const offsetFromBalance = (balance) => {
	    const percent = Math.abs(balance) / 100;
	    const sprite = Math.floor(percent * 27);
	    const offset = sprite * 15;
	    return offset;
	};
	const MainBalance = reactExports.memo(() => {
	    const balance = useTypedSelector(getBalance);
	    return (jsxRuntimeExports.jsx(Balance, { id: "balance", style: { backgroundPosition: `0 -${offsetFromBalance(balance)}px` } }));
	});

	const Close = reactExports.memo(() => {
	    const close$1 = useActionCreator(close);
	    return jsxRuntimeExports.jsx(ClickedDiv, { id: "close", onClick: close$1, title: "Close" });
	});

	function setFocusDouble() {
	    return setFocus("double");
	}
	function mouseUp() {
	    return (dispatch) => {
	        dispatch(toggleDoubleSizeMode());
	        dispatch(unsetFocus());
	    };
	}
	const ClutterBar = reactExports.memo(() => {
	    const handleMouseDown = useActionCreator(setFocusDouble);
	    const handleMouseUp = useActionCreator(mouseUp);
	    const doubled = useTypedSelector(getDoubled);
	    return (jsxRuntimeExports.jsxs("div", { id: "clutter-bar", children: [jsxRuntimeExports.jsx(ContextMenuTarget, { bottom: true, renderMenu: () => jsxRuntimeExports.jsx(OptionsContextMenu, {}), children: jsxRuntimeExports.jsx("div", { id: "button-o" }) }), jsxRuntimeExports.jsx("div", { id: "button-a" }), jsxRuntimeExports.jsx("div", { id: "button-i" }), jsxRuntimeExports.jsx("div", { title: "Toggle Doublesize Mode", id: "button-d", className: classnames({ selected: doubled }), onPointerUp: handleMouseUp, onPointerDown: (e) => {
	                    e.preventDefault();
	                    handleMouseDown();
	                } }), jsxRuntimeExports.jsx("div", { id: "button-v" })] }));
	});

	const Eject = reactExports.memo(() => {
	    const openMediaFileDialog$1 = useActionCreator(openMediaFileDialog);
	    return (jsxRuntimeExports.jsx(WinampButton, { id: "eject", onClick: openMediaFileDialog$1, title: "Open File(s)" }));
	});

	function toggleEqualizer() {
	    return toggleWindow("equalizer");
	}
	const EqToggleButton = reactExports.memo(() => {
	    const handleClick = useActionCreator(toggleEqualizer);
	    const windowOpen = useTypedSelector(getWindowOpen)("equalizer");
	    return (jsxRuntimeExports.jsx(WinampButton, { id: "equalizer-button", className: classnames({ selected: windowOpen }), onClick: handleClick, title: "Toggle Graphical Equalizer" }));
	});

	function togglePlaylist() {
	    return toggleWindow("playlist");
	}
	const PlaylistToggleButton = reactExports.memo(() => {
	    const selected = useTypedSelector(getWindowOpen)("playlist");
	    const handleClick = useActionCreator(togglePlaylist);
	    return (jsxRuntimeExports.jsx(WinampButton, { id: "playlist-button", className: classnames({ selected }), onClick: handleClick, title: "Toggle Playlist Editor" }));
	});

	const CharacterString = reactExports.memo((props) => {
	    const text = `${props.children}` || "";
	    const chars = text.split("");
	    return (jsxRuntimeExports.jsx(reactExports.Fragment, { children: chars.map((character, index) => (jsxRuntimeExports.jsx(Character, { children: character }, index + character))) }));
	});

	const Kbps = reactExports.memo(() => {
	    const kbps = useTypedSelector(getKbps);
	    return (jsxRuntimeExports.jsx("div", { id: "kbps", children: jsxRuntimeExports.jsx(CharacterString, { children: kbps || "" }) }));
	});

	const Khz = reactExports.memo(() => {
	    const khz = useTypedSelector(getKhz);
	    return (jsxRuntimeExports.jsx("div", { id: "khz", children: jsxRuntimeExports.jsx(CharacterString, { children: khz || "" }) }));
	});

	const SEPARATOR = "  ***  ";
	const CHAR_WIDTH = 5;
	const MARQUEE_MAX_LENGTH = 31;
	// Always positive modulus
	const mod = (n, m) => ((n % m) + m) % m;
	const isLong = (text) => text.length >= MARQUEE_MAX_LENGTH;
	// Given text and step, how many pixels should it be shifted?
	const stepOffset = (text, step, pixels) => {
	    if (!isLong(text)) {
	        return 0;
	    }
	    const stepOffsetWidth = step * CHAR_WIDTH; // Steps move one char at a time
	    const offset = stepOffsetWidth + pixels;
	    const stringLength = (text.length + SEPARATOR.length) * CHAR_WIDTH;
	    return mod(offset, stringLength);
	};
	// Format an int as pixels
	const pixelUnits = (pixels) => `${pixels}px`;
	// If text is wider than the marquee, it needs to loop
	const loopText = (text) => isLong(text)
	    ? `${text}${SEPARATOR}${text}`
	    : text.padEnd(MARQUEE_MAX_LENGTH, " ");
	// Call `step` every second, except when dragging. Resume stepping 1 second after dragging ceases.
	function useStepper({ step, dragging }) {
	    const [stepping, setStepping] = reactExports.useState(true);
	    reactExports.useEffect(() => {
	        if (stepping === false) {
	            return;
	        }
	        const stepHandle = setInterval(step, 220);
	        return () => clearInterval(stepHandle);
	    }, [step, stepping]);
	    reactExports.useEffect(() => {
	        if (dragging) {
	            setStepping(false);
	            return;
	        }
	        const steppingTimeout = window.setTimeout(() => {
	            setStepping(true);
	        }, 1000);
	        return () => {
	            window.clearTimeout(steppingTimeout);
	        };
	    }, [dragging]);
	}
	// When user calls `handleMouseDown`, and moves the mouse, `dragOffset` will update as they drag.
	function useDragX() {
	    const [mouseDownX, setMouseDownX] = reactExports.useState(null);
	    const [dragOffset, setDragOffset] = reactExports.useState(0);
	    reactExports.useEffect(() => {
	        if (mouseDownX == null) {
	            return;
	        }
	        const xStart = mouseDownX;
	        const handleMouseMove = (ee) => {
	            const diff = getX(ee) - xStart;
	            setDragOffset(-diff);
	        };
	        // TODO: Use `once` or something instead of this flag nonsense
	        let cleanedUp = false;
	        const handleMouseUp = () => {
	            if (cleanedUp) {
	                return;
	            }
	            document.removeEventListener("mousemove", handleMouseMove);
	            document.removeEventListener("touchmove", handleMouseMove);
	            document.removeEventListener("mouseup", handleMouseUp);
	            document.removeEventListener("touchend", handleMouseUp);
	            setMouseDownX(null);
	            cleanedUp = true;
	        };
	        document.addEventListener("mousemove", handleMouseMove);
	        document.addEventListener("touchmove", handleMouseMove);
	        document.addEventListener("touseup", handleMouseUp);
	        document.addEventListener("touchend", handleMouseUp);
	        return handleMouseUp;
	    }, [mouseDownX]);
	    const handleMouseDown = reactExports.useCallback((e) => {
	        setMouseDownX(getX(e));
	    }, []);
	    return { handleMouseDown, dragOffset, dragging: mouseDownX != null };
	}
	const Marquee = reactExports.memo(() => {
	    const text = useTypedSelector(getMarqueeText);
	    const doubled = useTypedSelector(getDoubled);
	    const marqueeStep = useTypedSelector(getMarqueeStep);
	    const stepMarquee$1 = useActionCreator(stepMarquee);
	    const { handleMouseDown, dragOffset, dragging } = useDragX();
	    const offset = stepOffset(text, marqueeStep, dragOffset);
	    const offsetPixels = pixelUnits(-offset);
	    useStepper({ step: stepMarquee$1, dragging });
	    return (jsxRuntimeExports.jsx("div", { id: "marquee", className: "text", onPointerDown: handleMouseDown, title: "Song Title", children: jsxRuntimeExports.jsx("div", { style: {
	                whiteSpace: "nowrap",
	                willChange: "transform",
	                transform: `translateX(${offsetPixels})`,
	            }, children: jsxRuntimeExports.jsx(CharacterString, { children: loopText(text) }) }, doubled ? "doubled" : "not-doubled") }));
	});

	const MonoStereo = reactExports.memo(() => {
	    const channels = useTypedSelector(getChannels);
	    return (jsxRuntimeExports.jsxs("div", { className: "mono-stereo", children: [jsxRuntimeExports.jsx("div", { id: "stereo", className: classnames({ selected: channels === 2 }) }), jsxRuntimeExports.jsx("div", { id: "mono", className: classnames({ selected: channels === 1 }) })] }));
	});

	function usePosition() {
	    const duration = useTypedSelector(getDuration);
	    const timeElapsed = useTypedSelector(getTimeElapsed);
	    const position = duration ? (Math.floor(timeElapsed) / duration) * 100 : 0;
	    const scrubPosition = useTypedSelector(getUserInputScrubPosition);
	    const userInputFocus = useTypedSelector(getUserInputFocus);
	    const displayedPosition = userInputFocus === "position" ? scrubPosition : position;
	    return [position, displayedPosition];
	}
	const Position = reactExports.memo(() => {
	    const [position, displayedPosition] = usePosition();
	    const dispatch = useTypedDispatch();
	    const seekToPercentComplete = reactExports.useCallback((e) => {
	        dispatch({
	            type: SEEK_TO_PERCENT_COMPLETE,
	            percent: Number(e.target.value),
	        });
	        dispatch({ type: UNSET_FOCUS });
	    }, [dispatch]);
	    const setPosition = reactExports.useCallback((e) => {
	        dispatch({ type: SET_FOCUS, input: "position" });
	        dispatch({
	            type: SET_SCRUB_POSITION,
	            position: Number(e.target.value),
	        });
	    }, [dispatch]);
	    // In shade mode, the position slider shows up differently depending on if
	    // it's near the start, middle or end of its progress
	    let className = "";
	    if (position <= 33) {
	        className = "left";
	    }
	    else if (position >= 66) {
	        className = "right";
	    }
	    return (jsxRuntimeExports.jsx("input", { id: "position", className: className, type: "range", min: "0", max: "100", step: "1", style: { touchAction: "none" }, value: displayedPosition, onInput: setPosition, onChange: () => { } /* React complains without this, can probably rename onInput to onChange */, onPointerUp: seekToPercentComplete, onPointerDown: setPosition, title: "Seeking Bar" }));
	});

	const Repeat = reactExports.memo(() => {
	    const repeat = useTypedSelector(getRepeat);
	    const handleClick = useActionCreator(toggleRepeat);
	    return (jsxRuntimeExports.jsx(ContextMenuWraper, { renderContents: () => (jsxRuntimeExports.jsx(Node, { checked: repeat, label: "Repeat", onClick: handleClick, hotkey: "(R)" })), children: jsxRuntimeExports.jsx(WinampButton, { id: "repeat", className: classnames({ selected: repeat }), onClick: handleClick, title: "Toggle Repeat" }) }));
	});

	const Shade = reactExports.memo(() => {
	    const handleClick = useActionCreator(toggleMainWindowShadeMode);
	    return (jsxRuntimeExports.jsx(ClickedDiv, { id: "shade", onPointerDown: handleClick, onDoubleClick: (e) => e.stopPropagation(), title: "Toggle Windowshade Mode" }));
	});

	const Minimize = reactExports.memo(() => {
	    const minimize$1 = useActionCreator(minimize);
	    return jsxRuntimeExports.jsx(ClickedDiv, { id: "minimize", title: "Minimize", onClick: minimize$1 });
	});

	const Shuffle = reactExports.memo(() => {
	    const shuffle = useTypedSelector(getShuffle);
	    const handleClick = useActionCreator(toggleShuffle);
	    return (jsxRuntimeExports.jsx(ContextMenuWraper, { renderContents: () => (jsxRuntimeExports.jsx(Node, { checked: shuffle, label: "Shuffle", onClick: handleClick, hotkey: "(S)" })), children: jsxRuntimeExports.jsx(WinampButton, { id: "shuffle", className: classnames({ selected: shuffle }), onClick: handleClick, title: "Toggle Shuffle" }) }));
	});

	const Time = reactExports.memo(() => {
	    const toggleTimeMode$1 = useActionCreator(toggleTimeMode);
	    const timeElapsed = useTypedSelector(getTimeElapsed);
	    const duration = useTypedSelector(getDuration) || 0;
	    const timeMode = useTypedSelector(getTimeMode);
	    const seconds = timeMode === TIME_MODE.ELAPSED ? timeElapsed : duration - timeElapsed;
	    const timeObj = getTimeObj(seconds);
	    return (jsxRuntimeExports.jsxs("div", { id: "time", onClick: toggleTimeMode$1, className: "countdown", children: [timeMode === TIME_MODE.REMAINING && jsxRuntimeExports.jsx("div", { id: "minus-sign" }), jsxRuntimeExports.jsx("div", { id: "minute-first-digit", className: `digit digit-${timeObj.minutesFirstDigit}` }), jsxRuntimeExports.jsx("div", { id: "minute-second-digit", className: `digit digit-${timeObj.minutesSecondDigit}` }), jsxRuntimeExports.jsx("div", { id: "second-first-digit", className: `digit digit-${timeObj.secondsFirstDigit}` }), jsxRuntimeExports.jsx("div", { id: "second-second-digit", className: `digit digit-${timeObj.secondsSecondDigit}` })] }));
	});

	function Volume({ id, style, className }) {
	    const volume = useTypedSelector(getVolume);
	    const setFocus$1 = useActionCreator(setFocus);
	    const unsetFocus$1 = useActionCreator(unsetFocus);
	    const setVolume$1 = useActionCreator(setVolume);
	    return (jsxRuntimeExports.jsx("input", { id: id, type: "range", min: "0", max: "100", step: "1", value: volume, style: { ...style, touchAction: "none" }, className: className, onChange: (e) => setVolume$1(Number(e.target.value)), onPointerDown: () => setFocus$1("volume"), onPointerUp: unsetFocus$1, title: "Volume Bar" }));
	}

	const MainVolume = reactExports.memo(() => {
	    const volume = useTypedSelector(getVolume);
	    const percent = volume / 100;
	    const sprite = Math.round(percent * 28);
	    const offset = (sprite - 1) * 15;
	    const style = {
	        backgroundPosition: `0 -${offset}px`,
	    };
	    return (jsxRuntimeExports.jsx("div", { id: "volume", style: style, children: jsxRuntimeExports.jsx(Volume, {}) }));
	});

	function loadMediaAndPlay(e) {
	    return loadMedia(e, LOAD_STYLE.PLAY);
	}
	const MainWindow = reactExports.memo(({ analyser, filePickers }) => {
	    const mainShade = useTypedSelector(getWindowShade)("main");
	    const status = useTypedSelector(getMediaStatus);
	    const focused = useTypedSelector(getFocusedWindow);
	    const loading = useTypedSelector(getLoading);
	    const doubled = useTypedSelector(getDoubled);
	    const llama = useTypedSelector(getLlamaMode);
	    const working = useTypedSelector(getWorking);
	    const className = classnames({
	        window: true,
	        play: status === MEDIA_STATUS.PLAYING,
	        stop: status === MEDIA_STATUS.STOPPED,
	        pause: status === MEDIA_STATUS.PAUSED,
	        selected: focused === WINDOWS.MAIN,
	        shade: mainShade,
	        draggable: true,
	        loading,
	        doubled,
	        llama,
	    });
	    const toggleMainWindowShadeMode$1 = useActionCreator(toggleMainWindowShadeMode);
	    const scrollVolume$1 = useActionCreator(scrollVolume);
	    const loadMedia = useActionCreator(loadMediaAndPlay);
	    return (jsxRuntimeExports.jsx(DropTarget, { id: "main-window", windowId: WINDOWS.MAIN, className: className, handleDrop: loadMedia, onWheel: scrollVolume$1, children: jsxRuntimeExports.jsxs(FocusTarget, { windowId: WINDOWS.MAIN, children: [jsxRuntimeExports.jsxs("div", { id: "title-bar", className: "selected draggable", onDoubleClick: toggleMainWindowShadeMode$1, children: [jsxRuntimeExports.jsx(ContextMenuTarget, { id: "option-context", bottom: true, renderMenu: () => jsxRuntimeExports.jsx(MainContextMenu, { filePickers: filePickers }), children: jsxRuntimeExports.jsx(ClickedDiv, { id: "option", title: "Winamp Menu" }) }), mainShade && jsxRuntimeExports.jsx(MiniTime, {}), jsxRuntimeExports.jsx(Minimize, {}), jsxRuntimeExports.jsx(Shade, {}), jsxRuntimeExports.jsx(Close, {})] }), jsxRuntimeExports.jsxs("div", { className: "webamp-status", children: [jsxRuntimeExports.jsx(ClutterBar, {}), !working && jsxRuntimeExports.jsx("div", { id: "play-pause" }), jsxRuntimeExports.jsx("div", { id: "work-indicator", className: classnames({ selected: working }) }), jsxRuntimeExports.jsx(Time, {})] }), jsxRuntimeExports.jsx(Visualizer
	                // @ts-ignore Visualizer is not typed yet
	                , { 
	                    // @ts-ignore Visualizer is not typed yet
	                    analyser: analyser }), jsxRuntimeExports.jsxs("div", { className: "media-info", children: [jsxRuntimeExports.jsx(Marquee, {}), jsxRuntimeExports.jsx(Kbps, {}), jsxRuntimeExports.jsx(Khz, {}), jsxRuntimeExports.jsx(MonoStereo, {})] }), jsxRuntimeExports.jsx(MainVolume, {}), jsxRuntimeExports.jsx(MainBalance, {}), jsxRuntimeExports.jsxs("div", { className: "windows", children: [jsxRuntimeExports.jsx(EqToggleButton, {}), jsxRuntimeExports.jsx(PlaylistToggleButton, {})] }), jsxRuntimeExports.jsx(Position, {}), jsxRuntimeExports.jsx(ActionButtons, {}), jsxRuntimeExports.jsx(Eject, {}), jsxRuntimeExports.jsxs("div", { className: "shuffle-repeat", children: [jsxRuntimeExports.jsx(Shuffle, {}), jsxRuntimeExports.jsx(Repeat, {})] }), jsxRuntimeExports.jsx("a", { id: "about", target: "_blank", href: "https://webamp.org/about", title: "About" })] }) }));
	});

	function PlaylistResizeTarget({ widthOnly }) {
	    const windowSize = useTypedSelector(getWindowSize);
	    const setWindowSize$1 = useActionCreator(setWindowSize);
	    const currentSize = windowSize("playlist");
	    return (jsxRuntimeExports.jsx(ResizeTarget$1, { currentSize: currentSize, id: "playlist-resize-target", setWindowSize: (size) => {
	            setWindowSize$1("playlist", size);
	        }, widthOnly: widthOnly }));
	}

	function PlaylistShade() {
	    const focused = useTypedSelector(getFocusedWindow);
	    const getWindowSize$1 = useTypedSelector(getWindowSize);
	    const playlistSize = getWindowSize$1("playlist");
	    const duration = useTypedSelector(getDuration);
	    const name = useTypedSelector(getMinimalMediaText);
	    const closeWindow$1 = useActionCreator(closeWindow);
	    const toggleShade = useActionCreator(togglePlaylistShadeMode);
	    const focusWindow = useActionCreator(setFocusedWindow);
	    const addedWidth = playlistSize[0] * WINDOW_RESIZE_SEGMENT_WIDTH;
	    const trimmedName = reactExports.useMemo(() => {
	        if (name == null) {
	            return "[No file]";
	        }
	        const MIN_NAME_WIDTH = 205;
	        const nameLength = (MIN_NAME_WIDTH + addedWidth) / CHARACTER_WIDTH;
	        return name.length > nameLength
	            ? name.slice(0, nameLength - 1) + UTF8_ELLIPSIS
	            : name;
	    }, [addedWidth, name]);
	    const time = reactExports.useMemo(() => {
	        return name == null ? "" : getTimeStr(duration);
	    }, [duration, name]);
	    return (jsxRuntimeExports.jsx("div", { id: "playlist-window-shade", className: classnames("window", "draggable", {
	            selected: focused === WINDOWS.PLAYLIST,
	        }), style: { width: `${WINDOW_WIDTH + addedWidth}px` }, onPointerDown: () => focusWindow("playlist"), onDoubleClick: toggleShade, children: jsxRuntimeExports.jsx("div", { className: "left", children: jsxRuntimeExports.jsxs("div", { className: "right draggable", children: [jsxRuntimeExports.jsx("div", { id: "playlist-shade-track-title", children: jsxRuntimeExports.jsx(CharacterString, { children: trimmedName }) }), jsxRuntimeExports.jsx("div", { id: "playlist-shade-time", children: jsxRuntimeExports.jsx(CharacterString, { children: time }) }), jsxRuntimeExports.jsx(PlaylistResizeTarget, { widthOnly: true }), jsxRuntimeExports.jsx(WinampButton, { id: "playlist-shade-button", onClick: toggleShade }), jsxRuntimeExports.jsx(WinampButton, { id: "playlist-close-button", onClick: () => closeWindow$1("playlist") })] }) }) }));
	}

	// We implement hover ourselves, because we hate ourselves and https://stackoverflow.com/a/13259049/1263117
	function PlaylistMenuEntry({ children }) {
	    const { ref, hover } = useIsHovered();
	    return (jsxRuntimeExports.jsx("li", { ref: ref, className: classnames({ hover }), children: children }));
	}
	var PlaylistMenuEnry = reactExports.memo(PlaylistMenuEntry);

	function PlaylistMenu(props) {
	    const [selected, setSelected] = reactExports.useState(false);
	    const [ref, setRef] = reactExports.useState(null);
	    const callback = reactExports.useCallback(() => {
	        // If we've clicked on a Context Menu spawed inside this menu, it will
	        // register as an external click. However, hiding the menu will remove
	        // the Context Menu from the DOM. Therefore, we wait until the next
	        // event loop to actually hide ourselves.
	        setTimeout(() => {
	            // Close the menu
	            setSelected(false);
	        }, 0);
	    }, []);
	    useOnClickAway(ref, selected ? callback : null);
	    return (jsxRuntimeExports.jsxs("div", { id: props.id, className: classnames("playlist-menu", {
	            selected,
	        }), ref: setRef, onClick: () => setSelected((selected_) => !selected_), children: [jsxRuntimeExports.jsx("div", { className: "bar" }), selected && (jsxRuntimeExports.jsx("ul", { children: reactExports.Children.map(props.children, (child, i) => (jsxRuntimeExports.jsx(PlaylistMenuEnry, { children: child }, i))) }))] }));
	}
	var PlaylistMenu$1 = reactExports.memo(PlaylistMenu);

	const AddMenu = () => {
	    const nextIndex = useTypedSelector(getTrackCount);
	    const addDirAtIndex$1 = useActionCreator(addDirAtIndex);
	    const addFilesAtIndex$1 = useActionCreator(addFilesAtIndex);
	    const addFilesFromUrl$1 = useActionCreator(addFilesFromUrl);
	    return (jsxRuntimeExports.jsxs(PlaylistMenu$1, { id: "playlist-add-menu", children: [jsxRuntimeExports.jsx("div", { className: "add-url", onClick: () => addFilesFromUrl$1(nextIndex) }), jsxRuntimeExports.jsx("div", { className: "add-dir", onClick: () => addDirAtIndex$1(nextIndex) }), jsxRuntimeExports.jsx("div", { className: "add-file", onClick: () => addFilesAtIndex$1(nextIndex) })] }));
	};

	/* eslint-disable no-alert */
	const RemoveMenu = () => {
	    const removeSelected = useActionCreator(removeSelectedTracks);
	    const removeAll = useActionCreator(removeAllTracks);
	    const crop = useActionCreator(cropPlaylist);
	    return (jsxRuntimeExports.jsxs(PlaylistMenu$1, { id: "playlist-remove-menu", children: [jsxRuntimeExports.jsx("div", { className: "remove-misc", onClick: () => alert("Not supported in Webamp") }), jsxRuntimeExports.jsx("div", { className: "remove-all", onClick: removeAll }), jsxRuntimeExports.jsx("div", { className: "crop", onClick: crop }), jsxRuntimeExports.jsx("div", { className: "remove-selected", onClick: removeSelected })] }));
	};

	function SelectionMenu() {
	    const invert = useActionCreator(invertSelection);
	    const zero = useActionCreator(selectZero);
	    const all = useActionCreator(selectAll);
	    return (jsxRuntimeExports.jsxs(PlaylistMenu$1, { id: "playlist-selection-menu", children: [jsxRuntimeExports.jsx("div", { className: "invert-selection", onClick: invert }), jsxRuntimeExports.jsx("div", { className: "select-zero", onClick: zero }), jsxRuntimeExports.jsx("div", { className: "select-all", onClick: all })] }));
	}

	/* eslint-disable no-alert */
	/* TODO: This should really be kitty-corner to the upper right hand corner of the MiscMenu */
	function SortContextMenu() {
	    const reverseList$1 = useActionCreator(reverseList);
	    const randomizeList$1 = useActionCreator(randomizeList);
	    const sortListByTitle$1 = useActionCreator(sortListByTitle);
	    return (jsxRuntimeExports.jsx(ContextMenuTarget, { style: { width: "100%", height: "100%" }, top: true, renderMenu: () => (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx(Node, { label: "Sort list by title", onClick: sortListByTitle$1 }), jsxRuntimeExports.jsx(Hr, {}), jsxRuntimeExports.jsx(Node, { label: "Reverse list", onClick: reverseList$1 }), jsxRuntimeExports.jsx(Node, { label: "Randomize list", onClick: randomizeList$1 })] })), children: jsxRuntimeExports.jsx("div", {}) }));
	}

	const MiscOptionsContextMenu = () => {
	    const downloadHtmlPlaylist$1 = useActionCreator(downloadHtmlPlaylist);
	    return (jsxRuntimeExports.jsx(ContextMenuTarget, { style: { width: "100%", height: "100%" }, top: true, renderMenu: () => (jsxRuntimeExports.jsx(Node, { onClick: downloadHtmlPlaylist$1, label: "Generate HTML playlist" })), children: jsxRuntimeExports.jsx("div", {}) }));
	};

	const MiscMenu = () => (jsxRuntimeExports.jsxs(PlaylistMenu$1, { id: "playlist-misc-menu", children: [jsxRuntimeExports.jsx("div", { className: "sort-list", onClick: (e) => e.stopPropagation(), children: jsxRuntimeExports.jsx(SortContextMenu, {}) }), jsxRuntimeExports.jsx("div", { className: "file-info", onClick: () => alert("Not supported in Webamp") }), jsxRuntimeExports.jsx("div", { className: "misc-options", onClick: (e) => e.stopPropagation(), children: jsxRuntimeExports.jsx(MiscOptionsContextMenu, {}) })] }));

	/* eslint-disable no-alert */
	function ListMenu() {
	    const removeAllTracks$1 = useActionCreator(removeAllTracks);
	    const addFilesFromList$1 = useActionCreator(addFilesFromList);
	    const saveFilesToList$1 = useActionCreator(saveFilesToList);
	    return (jsxRuntimeExports.jsxs(PlaylistMenu$1, { id: "playlist-list-menu", children: [jsxRuntimeExports.jsx("div", { className: "new-list", onClick: removeAllTracks$1 }), jsxRuntimeExports.jsx("div", { className: "save-list", onClick: saveFilesToList$1 }), jsxRuntimeExports.jsx("div", { className: "load-list", onClick: addFilesFromList$1 })] }));
	}

	// While all the browsers I care about support String.prototype.padEnd,
	// Not all node versions do, and I want tests to pass in Jest...
	// Sigh.
	function rightPad(str, len, fillChar) {
	    while (str.length < len) {
	        str += fillChar;
	    }
	    return str;
	}
	const RunningTimeDisplay = () => {
	    const runningTimeMessage = useTypedSelector(getRunningTimeMessage);
	    const text = reactExports.useMemo(() => rightPad(runningTimeMessage, 18, " "), [runningTimeMessage]);
	    return (jsxRuntimeExports.jsx("div", { className: "playlist-running-time-display draggable", children: jsxRuntimeExports.jsx("div", { children: jsxRuntimeExports.jsx(CharacterString, { children: text }) }) }));
	};

	const PlaylistWindow$1 = () => {
	    const play$1 = useActionCreator(play);
	    const pause$1 = useActionCreator(pause);
	    const stop$1 = useActionCreator(stop);
	    const openMediaFileDialog$1 = useActionCreator(openMediaFileDialog);
	    const next$1 = useActionCreator(next);
	    const previous$1 = useActionCreator(previous);
	    return (jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [jsxRuntimeExports.jsx(RunningTimeDisplay, {}), jsxRuntimeExports.jsxs("div", { className: "playlist-action-buttons", children: [jsxRuntimeExports.jsx("div", { className: "playlist-previous-button", onClick: previous$1 }), jsxRuntimeExports.jsx("div", { className: "playlist-play-button", onClick: play$1 }), jsxRuntimeExports.jsx("div", { className: "playlist-pause-button", onClick: pause$1 }), jsxRuntimeExports.jsx("div", { className: "playlist-stop-button", onClick: stop$1 }), jsxRuntimeExports.jsx("div", { className: "playlist-next-button", onClick: next$1 }), jsxRuntimeExports.jsx("div", { className: "playlist-eject-button", onClick: openMediaFileDialog$1 })] }), jsxRuntimeExports.jsx(MiniTime, {})] }));
	};

	function TrackCell({ children, handleMoveClick, index, id }) {
	    const skinPlaylistStyle = useTypedSelector(getSkinPlaylistStyle);
	    const selectedTrackIds = useTypedSelector(getSelectedTrackIds);
	    const currentTrackId = useTypedSelector(getCurrentTrackId);
	    const selected = selectedTrackIds.has(id);
	    const current = currentTrackId === id;
	    const dispatch = useTypedDispatch();
	    const playTrackNow$1 = useActionCreator(playTrackNow);
	    const onMouseDown = reactExports.useCallback((e) => {
	        if (e.shiftKey) {
	            e.preventDefault();
	            dispatch({ type: SHIFT_CLICKED_TRACK, index });
	            return;
	        }
	        else if (e.metaKey || e.ctrlKey) {
	            e.preventDefault();
	            dispatch({ type: CTRL_CLICKED_TRACK, index });
	            return;
	        }
	        if (!selected) {
	            dispatch({ type: CLICKED_TRACK, index });
	        }
	        handleMoveClick(e);
	    }, [dispatch, handleMoveClick, index, selected]);
	    const handleTouchStart = reactExports.useCallback((e) => {
	        if (!selected) {
	            dispatch({ type: CLICKED_TRACK, index });
	        }
	        handleMoveClick(e);
	        // There's no touch equivalent of onDoubleClick, so we fake one:
	        function handleSecondTap() {
	            playTrackNow$1(id);
	        }
	        e.target.addEventListener("touchstart", handleSecondTap);
	        setTimeout(() => {
	            // Technically we might be unmounted here, but that's fine since you
	            // can't tap an unmounted element and we will clean up eventually.
	            e.target.removeEventListener("touchstart", handleSecondTap);
	        }, 250);
	    }, [dispatch, handleMoveClick, id, index, playTrackNow$1, selected]);
	    const style = {
	        backgroundColor: selected ? skinPlaylistStyle.selectedbg : undefined,
	        color: current ? skinPlaylistStyle.current : undefined,
	    };
	    return (jsxRuntimeExports.jsx("div", { className: classnames("track-cell", { selected, current }), style: style, onClick: (e) => e.stopPropagation(), onMouseDown: onMouseDown, onTouchStart: handleTouchStart, onContextMenu: (e) => e.preventDefault(), onDoubleClick: () => playTrackNow$1(id), children: children }));
	}

	const TrackTitle = ({ id, paddedTrackNumber }) => {
	    const title = useTypedSelector(getTrackDisplayName)(id);
	    return (jsxRuntimeExports.jsxs("span", { children: [paddedTrackNumber, ". ", title] }));
	};

	function getNumberLength(number) {
	    return number.toString().length;
	}
	function TrackList() {
	    const offset = useTypedSelector(getScrollOffset);
	    const trackIds = useTypedSelector(getVisibleTrackIds);
	    const tracks = useTypedSelector(getTracks);
	    const numberOfTracks = useTypedSelector(getNumberOfTracks);
	    const selectZero$1 = useActionCreator(selectZero);
	    const dragSelected$1 = useActionCreator(dragSelected);
	    const scrollPlaylistByDelta$1 = useActionCreator(scrollPlaylistByDelta);
	    const [node, setNode] = reactExports.useState(null);
	    const [moving, setMoving] = reactExports.useState(false);
	    const [mouseStartY, setMouseStartY] = reactExports.useState(null);
	    const _handleMoveClick = (e) => {
	        setMoving(true);
	        setMouseStartY(getY(e));
	    };
	    reactExports.useEffect(() => {
	        if (node == null || mouseStartY == null || moving === false) {
	            return;
	        }
	        const { top, bottom, left, right } = node.getBoundingClientRect();
	        let lastDiff = 0;
	        const handleMouseMove = (ee) => {
	            const x = getX(ee);
	            const y = getY(ee);
	            if (y < top || y > bottom || x < left || x > right) {
	                // Mouse is outside the track list
	                return;
	            }
	            const proposedDiff = Math.floor((y - mouseStartY) / TRACK_HEIGHT);
	            if (proposedDiff !== lastDiff) {
	                const diffDiff = proposedDiff - lastDiff;
	                dragSelected$1(diffDiff);
	                lastDiff = proposedDiff;
	            }
	        };
	        // A little indirect here. Basically, we set `moving` false here which
	        // causes our useEffect to rerun which removes all of these event listeners.
	        // It might be a little tigher to actually remove these listeners in the
	        // `handleMouseUp` callback, but... I'm lazy.
	        const handleMouseUp = () => setMoving(false);
	        window.addEventListener("mouseup", handleMouseUp);
	        window.addEventListener("mousemove", handleMouseMove);
	        window.addEventListener("touchend", handleMouseUp);
	        window.addEventListener("touchmove", handleMouseMove);
	        return () => {
	            window.removeEventListener("mousemove", handleMouseMove);
	            window.removeEventListener("touchmove", handleMouseMove);
	            window.removeEventListener("mouseup", handleMouseUp);
	            window.removeEventListener("touchend", handleMouseUp);
	        };
	        // I'm not 100% sure how well this would work if it rebound mid drag, so
	        // we'll just pretend it's okay that we have stale values in there.
	        // eslint-disable-next-line react-hooks/exhaustive-deps
	    }, [moving]);
	    function _renderTracks(format) {
	        return trackIds.map((id, i) => (jsxRuntimeExports.jsx(TrackCell, { id: id, index: offset + i, handleMoveClick: _handleMoveClick, children: format(id, i) }, id)));
	    }
	    const maxTrackNumberLength = getNumberLength(numberOfTracks);
	    const paddedTrackNumForIndex = (i) => (i + 1 + offset).toString().padStart(maxTrackNumberLength, "\u00A0");
	    reactExports.useEffect(() => {
	        if (node == null) {
	            return;
	        }
	        // Chome changed wheel events to be passive be default. We need active (so
	        // we can prevent default) and React does not have a way to control this, so
	        // we must bind our own events.
	        //
	        // https://github.com/facebook/react/issues/14856#issuecomment-806052402
	        node.addEventListener("wheel", scrollPlaylistByDelta$1, { passive: false });
	        return () => {
	            node.removeEventListener("wheel", scrollPlaylistByDelta$1);
	        };
	    }, [node, scrollPlaylistByDelta$1]);
	    return (jsxRuntimeExports.jsxs("div", { ref: setNode, className: "playlist-tracks", style: { height: "100%", userSelect: "none" }, onClick: selectZero$1, children: [jsxRuntimeExports.jsx("div", { className: "playlist-track-titles", children: _renderTracks((id, i) => (jsxRuntimeExports.jsx(TrackTitle, { id: id, paddedTrackNumber: paddedTrackNumForIndex(i) }))) }), jsxRuntimeExports.jsx("div", { className: "playlist-track-durations", children: _renderTracks((id) => getTimeStr(tracks[id].duration)) })] }));
	}

	// `<input type="range" />` can be rotated to become a vertical slider using
	// CSS, but that makes it impossible to style the handle in a pixel perfect
	// manner. Instead we reimplement it in React.
	function VerticalSlider({ value, height, width, handle, handleHeight, onBeforeChange, onChange, onAfterChange, requireClicksOriginateLocally = true, disabled, }) {
	    const ref = reactExports.useRef(null);
	    const handleRef = reactExports.useRef(null);
	    function registerMoveListener({ target, clientY }) {
	        const sliderNode = ref.current;
	        const handleNode = handleRef.current;
	        if (sliderNode == null || handleNode == null) {
	            // I don't think this could ever happen in practice
	            return null;
	        }
	        const sliderRect = sliderNode.getBoundingClientRect();
	        const handleRect = handleNode.getBoundingClientRect();
	        const { top: sliderTop, height: sliderHeight } = sliderRect;
	        const { top: handleTop, height: realHandleHeight } = handleRect;
	        // If the user clicks on the handle we want them to continue to hold onto
	        // that point of te handle. If they click outside of the handle (in the
	        // slider itself) we want to center the handle at that point and have them
	        // move the handle from the center.
	        const handleOffset = handleNode.contains(target)
	            ? clientY - handleTop
	            : realHandleHeight / 2;
	        const baseOffset = sliderTop + handleOffset;
	        // Measure the actual rect height rather than use the `height` prop, becuase
	        // we might be in double-size mode.
	        const spanSize = sliderHeight - realHandleHeight;
	        function moveToPosition(y) {
	            // Ensure dragging does not cause elements/text to be selected.
	            // https://stackoverflow.com/a/19164149/1263117
	            const startOffset = y - baseOffset;
	            onChange(clamp(startOffset / spanSize, 0, 1));
	        }
	        const handlePointerMove = (event) => {
	            event.preventDefault();
	            moveToPosition(event.clientY);
	        };
	        const handleRelease = () => {
	            if (onAfterChange != null) {
	                onAfterChange();
	            }
	            document.removeEventListener("pointermove", handlePointerMove);
	            document.removeEventListener("pointerup", handleRelease);
	        };
	        document.addEventListener("pointermove", handlePointerMove);
	        document.addEventListener("pointerup", handleRelease);
	        if (onBeforeChange != null) {
	            onBeforeChange();
	        }
	        // Move the slider to where they've started.
	        moveToPosition(clientY);
	    }
	    function handlePointerDown(e) {
	        e.preventDefault();
	        registerMoveListener({
	            target: e.target,
	            clientY: e.clientY,
	        });
	    }
	    // We watch for events onPointerEnter only when requireClicksOriginateLocally === false
	    // If the mouse/touch enters the Slider area, and the button/touch is already down, trigger a PointerDown
	    function handlePointerEnter(e) {
	        if (e.buttons === 1) {
	            handlePointerDown(e);
	        }
	    }
	    const offset = Math.floor((height - handleHeight) * value);
	    return (jsxRuntimeExports.jsx("div", { style: { height, width }, onPointerDown: disabled ? undefined : handlePointerDown, onPointerEnter: disabled || requireClicksOriginateLocally
	            ? undefined
	            : handlePointerEnter, ref: ref, children: jsxRuntimeExports.jsx("div", { style: { transform: `translateY(${offset}px)` }, ref: handleRef, children: handle }) }));
	}

	const HANDLE_HEIGHT = 18;
	const Handle$1 = () => (jsxRuntimeExports.jsx("div", { className: "playlist-scrollbar-handle", style: { height: HANDLE_HEIGHT } }));
	function PlaylistScrollBar() {
	    const getWindowPixelSize$1 = useTypedSelector(getWindowPixelSize);
	    const playlistHeight = getWindowPixelSize$1(WINDOWS.PLAYLIST).height;
	    const playlistScrollPosition = useTypedSelector(getPlaylistScrollPosition);
	    const allTracksAreVisible = useTypedSelector(getAllTracksAreVisible);
	    const setPlaylistScrollPosition$1 = useActionCreator(setPlaylistScrollPosition);
	    return (jsxRuntimeExports.jsx("div", { className: "playlist-scrollbar", style: { marginLeft: 5 }, children: jsxRuntimeExports.jsx(VerticalSlider, { height: playlistHeight - 58, handleHeight: HANDLE_HEIGHT, width: 8, value: playlistScrollPosition / 100, onChange: (val) => setPlaylistScrollPosition$1(val * 100), handle: jsxRuntimeExports.jsx(Handle$1, {}), disabled: allTracksAreVisible }) }));
	}

	function _maxTrackIndex(state) {
	    return state.playlist.trackOrder.length - 1;
	}
	function PlaylistWindow({ analyser }) {
	    const offset = useTypedSelector(getScrollOffset);
	    const getWindowSize$1 = useTypedSelector(getWindowSize);
	    const selectedWindow = useTypedSelector(getFocusedWindow);
	    const getWindowShade$1 = useTypedSelector(getWindowShade);
	    const getWindowOpen$1 = useTypedSelector(getWindowOpen);
	    const maxTrackIndex = useTypedSelector(_maxTrackIndex);
	    const skinPlaylistStyle = useTypedSelector(getSkinPlaylistStyle);
	    const getWindowPixelSize$1 = useTypedSelector(getWindowPixelSize);
	    const selected = selectedWindow === WINDOWS.PLAYLIST;
	    const playlistShade = Boolean(getWindowShade$1(WINDOWS.PLAYLIST));
	    const playlistSize = getWindowSize$1(WINDOWS.PLAYLIST);
	    const playlistWindowPixelSize = getWindowPixelSize$1(WINDOWS.PLAYLIST);
	    const close = useActionCreator(closeWindow);
	    const toggleShade = useActionCreator(togglePlaylistShadeMode);
	    const scrollUpFourTracks$1 = useActionCreator(scrollUpFourTracks);
	    const scrollDownFourTracks$1 = useActionCreator(scrollDownFourTracks);
	    const scrollVolume$1 = useActionCreator(scrollVolume);
	    const loadMedia$1 = useActionCreator(loadMedia);
	    const showVisualizer = playlistSize[0] > 2;
	    const activateVisualizer = !getWindowOpen$1(WINDOWS.MAIN);
	    const handleDrop = reactExports.useCallback((e, targetCoords) => {
	        const top = e.clientY - targetCoords.y;
	        const atIndex = clamp(offset + Math.round((top - 23) / TRACK_HEIGHT), 0, maxTrackIndex + 1);
	        loadMedia$1(e, LOAD_STYLE.NONE, atIndex);
	    }, [loadMedia$1, maxTrackIndex, offset]);
	    if (playlistShade) {
	        return jsxRuntimeExports.jsx(PlaylistShade, {});
	    }
	    const style = {
	        color: skinPlaylistStyle.normal,
	        backgroundColor: skinPlaylistStyle.normalbg,
	        fontFamily: `${skinPlaylistStyle.font}, Arial, sans-serif`,
	        height: `${playlistWindowPixelSize.height}px`,
	        width: `${playlistWindowPixelSize.width}px`,
	    };
	    const classes = classnames("window", "draggable", { selected });
	    const showSpacers = playlistSize[0] % 2 === 0;
	    return (jsxRuntimeExports.jsx(FocusTarget, { windowId: WINDOWS.PLAYLIST, children: jsxRuntimeExports.jsxs(DropTarget, { id: "playlist-window", windowId: WINDOWS.PLAYLIST, className: classes, style: style, handleDrop: handleDrop, onWheel: scrollVolume$1, children: [jsxRuntimeExports.jsxs("div", { className: "playlist-top draggable", onDoubleClick: toggleShade, children: [jsxRuntimeExports.jsx("div", { className: "playlist-top-left draggable" }), showSpacers && (jsxRuntimeExports.jsx("div", { className: "playlist-top-left-spacer draggable" })), jsxRuntimeExports.jsx("div", { className: "playlist-top-left-fill draggable" }), jsxRuntimeExports.jsx("div", { className: "playlist-top-title draggable" }), showSpacers && (jsxRuntimeExports.jsx("div", { className: "playlist-top-right-spacer draggable" })), jsxRuntimeExports.jsx("div", { className: "playlist-top-right-fill draggable" }), jsxRuntimeExports.jsxs("div", { className: "playlist-top-right draggable", children: [jsxRuntimeExports.jsx(WinampButton, { id: "playlist-shade-button", onClick: toggleShade }), jsxRuntimeExports.jsx(WinampButton, { id: "playlist-close-button", onClick: () => close(WINDOWS.PLAYLIST) })] })] }), jsxRuntimeExports.jsxs("div", { className: "playlist-middle draggable", children: [jsxRuntimeExports.jsx("div", { className: "playlist-middle-left draggable" }), jsxRuntimeExports.jsx("div", { className: "playlist-middle-center", children: jsxRuntimeExports.jsx(TrackList, {}) }), jsxRuntimeExports.jsx(WinampButton, { className: "playlist-middle-right draggable", children: jsxRuntimeExports.jsx(PlaylistScrollBar, {}) })] }), jsxRuntimeExports.jsxs("div", { className: "playlist-bottom draggable", children: [jsxRuntimeExports.jsxs("div", { className: "playlist-bottom-left draggable", children: [jsxRuntimeExports.jsx(AddMenu, {}), jsxRuntimeExports.jsx(RemoveMenu, {}), jsxRuntimeExports.jsx(SelectionMenu, {}), jsxRuntimeExports.jsx(MiscMenu, {})] }), jsxRuntimeExports.jsx("div", { className: "playlist-bottom-center draggable" }), jsxRuntimeExports.jsxs("div", { className: "playlist-bottom-right draggable", children: [showVisualizer && (jsxRuntimeExports.jsx("div", { className: "playlist-visualizer", children: activateVisualizer && (jsxRuntimeExports.jsx("div", { className: "visualizer-wrapper", children: jsxRuntimeExports.jsx(Visualizer
	                                        // @ts-ignore Visualizer is not yet typed
	                                        , { 
	                                            // @ts-ignore Visualizer is not yet typed
	                                            analyser: analyser }) })) })), jsxRuntimeExports.jsx(PlaylistWindow$1, {}), jsxRuntimeExports.jsx(ListMenu, {}), jsxRuntimeExports.jsx("div", { id: "playlist-scroll-up-button", onClick: scrollUpFourTracks$1 }), jsxRuntimeExports.jsx("div", { id: "playlist-scroll-down-button", onClick: scrollDownFourTracks$1 }), jsxRuntimeExports.jsx(PlaylistResizeTarget, {})] })] })] }) }));
	}

	const MAX_VALUE = 100;
	// Given a value between 1-100, return the sprite number (0-27)
	const spriteNumber = (value) => {
	    const percent = value / MAX_VALUE;
	    return Math.round(percent * 27);
	};
	// Given a sprite number, return the x,y
	const spriteOffsets = (number) => {
	    const x = number % 14;
	    const y = Math.floor(number / 14);
	    return { x, y };
	};
	const Handle = () => {
	    const style = { width: 11, height: 11, marginLeft: 1 };
	    return jsxRuntimeExports.jsx("div", { style: style, className: "slider-handle" });
	};
	function Band({ id, onChange, band, clickOriginatedInEq, }) {
	    const sliders = useTypedSelector(getSliders);
	    const value = sliders[band];
	    const backgroundPosition = reactExports.useMemo(() => {
	        const { x, y } = spriteOffsets(spriteNumber(value));
	        const xOffset = x * 15; // Each sprite is 15px wide
	        const yOffset = y * 65; // Each sprite is 15px tall
	        return `-${xOffset}px -${yOffset}px`;
	    }, [value]);
	    const focusBand$1 = useActionCreator(focusBand);
	    const unsetFocus$1 = useActionCreator(unsetFocus);
	    // Note: The band background is actually one pixel taller (63) than the slider
	    // it contains (62).
	    return (jsxRuntimeExports.jsx(WinampButton, { id: id, className: "band", style: { backgroundPosition, height: 63 }, requireClicksOriginateLocally: !(band !== "preamp" && clickOriginatedInEq), children: jsxRuntimeExports.jsx(VerticalSlider, { height: 62, width: 14, handleHeight: 11, value: 1 - value / MAX_VALUE, onBeforeChange: () => focusBand$1(band), onChange: (val) => onChange((1 - val) * MAX_VALUE), onAfterChange: unsetFocus$1, requireClicksOriginateLocally: !(band !== "preamp" && clickOriginatedInEq), handle: jsxRuntimeExports.jsx(Handle, {}) }) }));
	}

	const EqOn = () => {
	    const toggleEq$1 = useActionCreator(toggleEq);
	    const on = useTypedSelector(getEqualizerEnabled);
	    return (jsxRuntimeExports.jsx(WinampButton, { id: "on", className: classnames({ selected: on }), onClick: toggleEq$1 }));
	};

	const EqAuto = reactExports.memo(() => {
	    const selected = useTypedSelector((state) => state.equalizer.auto);
	    const toggleAuto = useActionCreator(toggleEqAuto);
	    return (jsxRuntimeExports.jsx(WinampButton, { id: "auto", className: classnames({ selected }), onClick: toggleAuto }));
	});

	// Adapted from https://github.com/morganherlocker/cubic-spline

	function spline(xs, ys) {
	  const ks = getNaturalKs(xs, ys);
	  const maxX = xs[xs.length - 1];
	  const allYs = [];
	  let i = 1;
	  for (let x = 0; x <= maxX; x++) {
	    while (xs[i] < x) i++;
	    const t = (x - xs[i - 1]) / (xs[i] - xs[i - 1]);
	    const a = ks[i - 1] * (xs[i] - xs[i - 1]) - (ys[i] - ys[i - 1]);
	    const b = -ks[i] * (xs[i] - xs[i - 1]) + (ys[i] - ys[i - 1]);
	    const q = (1 - t) * ys[i - 1] + t * ys[i] + t * (1 - t) * (a * (1 - t) + b * t);
	    allYs.push(q);
	  }
	  return allYs;
	}
	function getNaturalKs(xs, ys) {
	  const ks = xs.map(() => 0);
	  const n = xs.length - 1;
	  const matrix = zerosMatrix(n + 1, n + 2);
	  for (let i = 1; i < n; i++ // rows
	  ) {
	    matrix[i][i - 1] = 1 / (xs[i] - xs[i - 1]);
	    matrix[i][i] = 2 * (1 / (xs[i] - xs[i - 1]) + 1 / (xs[i + 1] - xs[i]));
	    matrix[i][i + 1] = 1 / (xs[i + 1] - xs[i]);
	    matrix[i][n + 1] = 3 * ((ys[i] - ys[i - 1]) / ((xs[i] - xs[i - 1]) * (xs[i] - xs[i - 1])) + (ys[i + 1] - ys[i]) / ((xs[i + 1] - xs[i]) * (xs[i + 1] - xs[i])));
	  }
	  matrix[0][0] = 2 / (xs[1] - xs[0]);
	  matrix[0][1] = 1 / (xs[1] - xs[0]);
	  matrix[0][n + 1] = 3 * (ys[1] - ys[0]) / ((xs[1] - xs[0]) * (xs[1] - xs[0]));
	  matrix[n][n - 1] = 1 / (xs[n] - xs[n - 1]);
	  matrix[n][n] = 2 / (xs[n] - xs[n - 1]);
	  matrix[n][n + 1] = 3 * (ys[n] - ys[n - 1]) / ((xs[n] - xs[n - 1]) * (xs[n] - xs[n - 1]));
	  return solve(matrix, ks);
	}
	function solve(matrix, ks) {
	  const m = matrix.length;
	  // column
	  for (let k = 0; k < m; k++) {
	    // pivot for column
	    let iMax = 0;
	    let vali = Number.NEGATIVE_INFINITY;
	    for (let i = k; i < m; i++) if (matrix[i][k] > vali) {
	      iMax = i;
	      vali = matrix[i][k];
	    }
	    swapRows(matrix, k, iMax);

	    // for all rows below pivot
	    for (let i = k + 1; i < m; i++) {
	      for (let j = k + 1; j < m + 1; j++) matrix[i][j] = matrix[i][j] - matrix[k][j] * (matrix[i][k] / matrix[k][k]);
	      matrix[i][k] = 0;
	    }
	  }
	  // rows = columns
	  for (let i = m - 1; i >= 0; i--) {
	    const v = matrix[i][m] / matrix[i][i];
	    ks[i] = v;
	    // rows
	    for (let j = i - 1; j >= 0; j--) {
	      matrix[j][m] -= matrix[j][i] * v;
	      matrix[j][i] = 0;
	    }
	  }
	  return ks;
	}
	function zerosMatrix(rows, columns) {
	  const matrix = [];
	  for (let i = 0; i < rows; i++) {
	    matrix.push([]);
	    for (let j = 0; j < columns; j++) {
	      matrix[i].push(0);
	    }
	  }
	  return matrix;
	}
	function swapRows(m, k, l) {
	  const p = m[k];
	  m[k] = m[l];
	  m[l] = p;
	}

	const GRAPH_HEIGHT = 19;
	const GRAPH_WIDTH = 113;
	function EqGraph() {
	    const sliders = useTypedSelector(getSliders);
	    const preampLineImagePromise = useTypedSelector(getPreampLineImage);
	    const preampLineImage = usePromiseValueOrNull(preampLineImagePromise);
	    const [canvasNode, setCanvasNode] = reactExports.useState(null);
	    const canvasCtx = reactExports.useMemo(() => canvasNode?.getContext("2d") ?? null, [canvasNode]);
	    const colorPattern = useColorPattern(canvasCtx);
	    reactExports.useLayoutEffect(() => {
	        if (canvasCtx == null ||
	            canvasNode == null ||
	            preampLineImage == null ||
	            colorPattern == null) {
	            return;
	        }
	        const width = Number(canvasNode.width);
	        const height = Number(canvasNode.height);
	        canvasCtx.clearRect(0, 0, width, height);
	        drawEqLine({ colorPattern, sliders, canvasCtx, preampLineImage });
	    }, [canvasCtx, canvasNode, colorPattern, preampLineImage, sliders]);
	    return (jsxRuntimeExports.jsx("canvas", { id: "eqGraph", ref: setCanvasNode, width: GRAPH_WIDTH, height: GRAPH_HEIGHT }));
	}
	function useColorPattern(canvasCtx) {
	    const lineColorsImagePromise = useTypedSelector(getLineColorsImage);
	    const lineColorsImage = usePromiseValueOrNull(lineColorsImagePromise);
	    return reactExports.useMemo(() => {
	        if (canvasCtx == null || lineColorsImage == null) {
	            return null;
	        }
	        return canvasCtx.createPattern(lineColorsImage, "repeat-x");
	    }, [canvasCtx, lineColorsImage]);
	}
	function drawEqLine({ colorPattern, sliders, canvasCtx, preampLineImage, }) {
	    const preampValue = percentToRange(sliders.preamp / 100, 0, GRAPH_HEIGHT - 1);
	    canvasCtx.drawImage(preampLineImage, 0, preampValue, preampLineImage.width, preampLineImage.height);
	    const amplitudes = BANDS.map((band) => sliders[band]);
	    canvasCtx.fillStyle = colorPattern;
	    const paddingLeft = 2; // TODO: This should be 1.5
	    const min = 0;
	    const max = GRAPH_HEIGHT - 1;
	    const xs = [];
	    const ys = [];
	    amplitudes.forEach((value, i) => {
	        const percent = (100 - value) / 100;
	        // Each band is 12 pixels widex
	        xs.push(i * 12);
	        ys.push(percentToRange(percent, min, max));
	    });
	    const allYs = spline(xs, ys);
	    const maxX = xs[xs.length - 1];
	    let lastY = ys[0];
	    for (let x = 0; x <= maxX; x++) {
	        const y = clamp(Math.round(allYs[x]), 0, GRAPH_HEIGHT - 1);
	        const yTop = Math.min(y, lastY);
	        const height = 1 + Math.abs(lastY - y);
	        canvasCtx.fillRect(paddingLeft + x, yTop, 1, height);
	        lastY = y;
	    }
	}

	var type = "Winamp EQ library file v1.1";
	var presets = [
		{
			name: "Classical",
			hz60: 33,
			hz170: 33,
			hz310: 33,
			hz600: 33,
			hz1000: 33,
			hz3000: 33,
			hz6000: 20,
			hz12000: 20,
			hz14000: 20,
			hz16000: 16,
			preamp: 33
		},
		{
			name: "Club",
			hz60: 33,
			hz170: 33,
			hz310: 38,
			hz600: 42,
			hz1000: 42,
			hz3000: 42,
			hz6000: 38,
			hz12000: 33,
			hz14000: 33,
			hz16000: 33,
			preamp: 33
		},
		{
			name: "Dance",
			hz60: 48,
			hz170: 44,
			hz310: 36,
			hz600: 32,
			hz1000: 32,
			hz3000: 22,
			hz6000: 20,
			hz12000: 20,
			hz14000: 32,
			hz16000: 32,
			preamp: 33
		},
		{
			name: "Laptop speakers/headphones",
			hz60: 40,
			hz170: 50,
			hz310: 41,
			hz600: 26,
			hz1000: 28,
			hz3000: 35,
			hz6000: 40,
			hz12000: 48,
			hz14000: 53,
			hz16000: 56,
			preamp: 33
		},
		{
			name: "Large hall",
			hz60: 49,
			hz170: 49,
			hz310: 42,
			hz600: 42,
			hz1000: 33,
			hz3000: 24,
			hz6000: 24,
			hz12000: 24,
			hz14000: 33,
			hz16000: 33,
			preamp: 33
		},
		{
			name: "Party",
			hz60: 44,
			hz170: 44,
			hz310: 33,
			hz600: 33,
			hz1000: 33,
			hz3000: 33,
			hz6000: 33,
			hz12000: 33,
			hz14000: 44,
			hz16000: 44,
			preamp: 33
		},
		{
			name: "Pop",
			hz60: 29,
			hz170: 40,
			hz310: 44,
			hz600: 45,
			hz1000: 41,
			hz3000: 30,
			hz6000: 28,
			hz12000: 28,
			hz14000: 29,
			hz16000: 29,
			preamp: 33
		},
		{
			name: "Reggae",
			hz60: 33,
			hz170: 33,
			hz310: 31,
			hz600: 22,
			hz1000: 33,
			hz3000: 43,
			hz6000: 43,
			hz12000: 33,
			hz14000: 33,
			hz16000: 33,
			preamp: 33
		},
		{
			name: "Rock",
			hz60: 45,
			hz170: 40,
			hz310: 23,
			hz600: 19,
			hz1000: 26,
			hz3000: 39,
			hz6000: 47,
			hz12000: 50,
			hz14000: 50,
			hz16000: 50,
			preamp: 33
		},
		{
			name: "Soft",
			hz60: 40,
			hz170: 35,
			hz310: 30,
			hz600: 28,
			hz1000: 30,
			hz3000: 39,
			hz6000: 46,
			hz12000: 48,
			hz14000: 50,
			hz16000: 52,
			preamp: 33
		},
		{
			name: "Ska",
			hz60: 28,
			hz170: 24,
			hz310: 25,
			hz600: 31,
			hz1000: 39,
			hz3000: 42,
			hz6000: 47,
			hz12000: 48,
			hz14000: 50,
			hz16000: 48,
			preamp: 33
		},
		{
			name: "Full Bass",
			hz60: 48,
			hz170: 48,
			hz310: 48,
			hz600: 42,
			hz1000: 35,
			hz3000: 25,
			hz6000: 18,
			hz12000: 15,
			hz14000: 14,
			hz16000: 14,
			preamp: 33
		},
		{
			name: "Soft Rock",
			hz60: 39,
			hz170: 39,
			hz310: 36,
			hz600: 31,
			hz1000: 25,
			hz3000: 23,
			hz6000: 26,
			hz12000: 31,
			hz14000: 37,
			hz16000: 47,
			preamp: 33
		},
		{
			name: "Full Treble",
			hz60: 16,
			hz170: 16,
			hz310: 16,
			hz600: 25,
			hz1000: 37,
			hz3000: 50,
			hz6000: 58,
			hz12000: 58,
			hz14000: 58,
			hz16000: 60,
			preamp: 33
		},
		{
			name: "Full Bass & Treble",
			hz60: 44,
			hz170: 42,
			hz310: 33,
			hz600: 20,
			hz1000: 24,
			hz3000: 35,
			hz6000: 46,
			hz12000: 50,
			hz14000: 52,
			hz16000: 52,
			preamp: 33
		},
		{
			name: "Live",
			hz60: 24,
			hz170: 33,
			hz310: 39,
			hz600: 41,
			hz1000: 42,
			hz3000: 42,
			hz6000: 39,
			hz12000: 37,
			hz14000: 37,
			hz16000: 36,
			preamp: 33
		},
		{
			name: "Techno",
			hz60: 45,
			hz170: 42,
			hz310: 33,
			hz600: 23,
			hz1000: 24,
			hz3000: 33,
			hz6000: 45,
			hz12000: 48,
			hz14000: 48,
			hz16000: 47,
			preamp: 33
		}
	];
	var builtin = {
		type: type,
		presets: presets
	};

	const PresetsContextMenu = () => {
	    const openEqfFileDialog$1 = useActionCreator(openEqfFileDialog);
	    const downloadPreset$1 = useActionCreator(downloadPreset);
	    const setEqFromObject$1 = useActionCreator(setEqFromObject);
	    return (jsxRuntimeExports.jsx(ContextMenuTarget, { top: true, id: "presets-context", renderMenu: () => (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsxs(Parent, { label: "Load", children: [builtin.presets.map((preset) => (jsxRuntimeExports.jsx(Node, { onClick: () => setEqFromObject$1(preset), label: preset.name }, preset.name))), jsxRuntimeExports.jsx(Hr, {}), jsxRuntimeExports.jsx(Node, { onClick: openEqfFileDialog$1, label: "From Eqf..." })] }), jsxRuntimeExports.jsx(Node, { onClick: downloadPreset$1, label: "Save" })] })), children: jsxRuntimeExports.jsx(WinampButton, { id: "presets" }) }));
	};

	function EqTitleButtons() {
	    const focusedWindow = useTypedSelector(getFocusedWindow);
	    const selected = focusedWindow === WINDOWS.EQUALIZER;
	    const closeWindow$1 = useActionCreator(closeWindow);
	    const toggleEqualizerShadeMode$1 = useActionCreator(toggleEqualizerShadeMode);
	    return (jsxRuntimeExports.jsxs(ClickedDiv, { id: "eq-buttons", children: [jsxRuntimeExports.jsx(WinampButton, { id: "equalizer-shade", onClick: toggleEqualizerShadeMode$1 }), jsxRuntimeExports.jsx(WinampButton, { id: "equalizer-close", onClick: () => closeWindow$1(WINDOWS.EQUALIZER) })] }, selected ? "selected" : "unselected"));
	}

	const EqualizerShade = () => {
	    const volume = useTypedSelector(getVolume);
	    const balance = useTypedSelector(getBalance);
	    const toggleEqualizerShadeMode$1 = useActionCreator(toggleEqualizerShadeMode);
	    const classes = ["left", "center", "right"];
	    const eqVolumeClassName = segment(0, 100, volume, classes);
	    const eqBalanceClassName = segment(-100, 100, balance, classes);
	    return (jsxRuntimeExports.jsxs("div", { className: "draggable", onDoubleClick: toggleEqualizerShadeMode$1, style: { width: "100%", height: "100%" }, children: [jsxRuntimeExports.jsx(EqTitleButtons, {}), jsxRuntimeExports.jsx(Volume, { id: "equalizer-volume", className: eqVolumeClassName }), jsxRuntimeExports.jsx(Balance, { id: "equalizer-balance", className: eqBalanceClassName })] }));
	};

	const bandClassName = (band) => `band-${band}`;
	const EqualizerWindow = () => {
	    const doubled = useTypedSelector(getDoubled);
	    const focusedWindow = useTypedSelector(getFocusedWindow);
	    const getWindowShade$1 = useTypedSelector(getWindowShade);
	    const selected = focusedWindow === WINDOWS.EQUALIZER;
	    const shade = getWindowShade$1(WINDOWS.EQUALIZER);
	    const setPreampValue = useActionCreator(setPreamp);
	    const setEqToMin$1 = useActionCreator(setEqToMin);
	    const setEqToMid$1 = useActionCreator(setEqToMid);
	    const setEqToMax$1 = useActionCreator(setEqToMax);
	    const setHertzValue = useActionCreator(setEqBand);
	    const toggleEqualizerShadeMode$1 = useActionCreator(toggleEqualizerShadeMode);
	    const className = classnames({
	        selected,
	        doubled,
	        shade,
	        window: true,
	        draggable: true,
	    });
	    // Track whether the click originated in the "hertz" area of the EQ
	    // We only want to allow drag across the EQ when the click originated in that area
	    const [clickOriginatedInEq, setClickOriginatedInEq] = reactExports.useState(false);
	    const onPointerDownHz = (e) => {
	        e.stopPropagation();
	        // Release the pointer capture
	        // https://w3c.github.io/pointerevents/#implicit-pointer-capture
	        // https://w3c.github.io/pointerevents/#pointer-capture
	        const target = e.target;
	        target.releasePointerCapture(e.pointerId);
	        setClickOriginatedInEq(true);
	        function onReleaseHz(ee) {
	            // Release only if it is the actual pointer release, not the simulated one coming from WinampButton
	            // Simulated pointer release coming from WinampButton has ee.detail == -42
	            // Actual pointer release here will come in as ee.detail === 0
	            if (ee.detail === 0) {
	                setClickOriginatedInEq(false);
	                document.removeEventListener("pointerup", onReleaseHz);
	            }
	        }
	        document.addEventListener("pointerup", onReleaseHz);
	    };
	    return (jsxRuntimeExports.jsx("div", { id: "equalizer-window", className: className, children: jsxRuntimeExports.jsx(FocusTarget, { windowId: WINDOWS.EQUALIZER, children: shade ? (jsxRuntimeExports.jsx(EqualizerShade, {})) : (jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("div", { className: "equalizer-top title-bar draggable", onDoubleClick: toggleEqualizerShadeMode$1, children: jsxRuntimeExports.jsx(EqTitleButtons, {}) }), jsxRuntimeExports.jsx(EqOn, {}), jsxRuntimeExports.jsx(EqAuto, {}), jsxRuntimeExports.jsx(EqGraph, {}), jsxRuntimeExports.jsx(PresetsContextMenu, {}), jsxRuntimeExports.jsx(Band, { id: "preamp", band: "preamp", onChange: setPreampValue }), jsxRuntimeExports.jsx("div", { id: "plus12db", onClick: setEqToMax$1 }), jsxRuntimeExports.jsx("div", { id: "zerodb", onClick: setEqToMid$1 }), jsxRuntimeExports.jsx("div", { id: "minus12db", onClick: setEqToMin$1 }), jsxRuntimeExports.jsx("div", { onPointerDown: onPointerDownHz, children: BANDS.map((hertz) => (jsxRuntimeExports.jsx(Band, { id: bandClassName(hertz), band: hertz, onChange: (value) => setHertzValue(hertz, value), clickOriginatedInEq: clickOriginatedInEq }, hertz))) })] })) }) }));
	};

	const imageSelectors = {
	    MAIN_BALANCE_BACKGROUND: ["#balance"],
	    MAIN_BALANCE_THUMB: [
	        "#balance::-webkit-slider-thumb",
	        "#balance::-moz-range-thumb",
	    ],
	    MAIN_BALANCE_THUMB_ACTIVE: [
	        "#balance:active::-webkit-slider-thumb",
	        "#balance:active::-moz-range-thumb",
	    ],
	    MAIN_PREVIOUS_BUTTON: [".actions #previous"],
	    MAIN_PREVIOUS_BUTTON_ACTIVE: [".actions #previous.winamp-active"],
	    MAIN_PLAY_BUTTON: [".actions #play"],
	    MAIN_PLAY_BUTTON_ACTIVE: [".actions #play.winamp-active"],
	    MAIN_PAUSE_BUTTON: [".actions #pause"],
	    MAIN_PAUSE_BUTTON_ACTIVE: [".actions #pause.winamp-active"],
	    MAIN_STOP_BUTTON: [".actions #stop"],
	    MAIN_STOP_BUTTON_ACTIVE: [".actions #stop.winamp-active"],
	    MAIN_NEXT_BUTTON: [".actions #next"],
	    MAIN_NEXT_BUTTON_ACTIVE: [".actions #next.winamp-active"],
	    MAIN_EJECT_BUTTON: ["#eject"],
	    MAIN_EJECT_BUTTON_ACTIVE: ["#eject.winamp-active"],
	    MAIN_WINDOW_BACKGROUND: ["#main-window"],
	    MAIN_STEREO: [".media-info #stereo", ".stop .media-info #stereo.selected"],
	    MAIN_STEREO_SELECTED: [".media-info #stereo.selected"],
	    MAIN_MONO: [".media-info #mono", ".stop .media-info #mono.selected"],
	    MAIN_MONO_SELECTED: [".media-info #mono.selected"],
	    NO_MINUS_SIGN: ["#time #minus-sign"],
	    MINUS_SIGN: ["#time.countdown #minus-sign"],
	    DIGIT_0: [".digit-0"],
	    DIGIT_1: [".digit-1"],
	    DIGIT_2: [".digit-2"],
	    DIGIT_3: [".digit-3"],
	    DIGIT_4: [".digit-4"],
	    DIGIT_5: [".digit-5"],
	    DIGIT_6: [".digit-6"],
	    DIGIT_7: [".digit-7"],
	    DIGIT_8: [".digit-8"],
	    DIGIT_9: [".digit-9"],
	    NO_MINUS_SIGN_EX: ["#time #minus-sign"],
	    MINUS_SIGN_EX: ["#time.countdown #minus-sign"],
	    DIGIT_0_EX: [".digit-0"],
	    DIGIT_1_EX: [".digit-1"],
	    DIGIT_2_EX: [".digit-2"],
	    DIGIT_3_EX: [".digit-3"],
	    DIGIT_4_EX: [".digit-4"],
	    DIGIT_5_EX: [".digit-5"],
	    DIGIT_6_EX: [".digit-6"],
	    DIGIT_7_EX: [".digit-7"],
	    DIGIT_8_EX: [".digit-8"],
	    DIGIT_9_EX: [".digit-9"],
	    MAIN_PLAYING_INDICATOR: [".play #play-pause"],
	    MAIN_PAUSED_INDICATOR: [".pause #play-pause"],
	    MAIN_STOPPED_INDICATOR: [".stop #play-pause"],
	    MAIN_NOT_WORKING_INDICATOR: ["#work-indicator"],
	    MAIN_WORKING_INDICATOR: ["#work-indicator.selected"],
	    PLAYLIST_TOP_TILE: [
	        ".playlist-top-left-fill",
	        ".playlist-top-left-spacer",
	        ".playlist-top-right-fill",
	        ".playlist-top-right-spacer",
	    ],
	    PLAYLIST_TOP_LEFT_CORNER: [".playlist-top-left"],
	    PLAYLIST_TITLE_BAR: [".playlist-top-title"],
	    PLAYLIST_TOP_RIGHT_CORNER: [".playlist-top-right"],
	    PLAYLIST_TOP_TILE_SELECTED: [
	        ".selected .playlist-top-left-fill",
	        ".selected .playlist-top-left-spacer",
	        ".selected .playlist-top-right-fill",
	        ".selected .playlist-top-right-spacer",
	    ],
	    PLAYLIST_TOP_LEFT_SELECTED: [".selected .playlist-top-left"],
	    PLAYLIST_TITLE_BAR_SELECTED: [".selected .playlist-top-title"],
	    PLAYLIST_TOP_RIGHT_CORNER_SELECTED: [".selected .playlist-top-right"],
	    PLAYLIST_LEFT_TILE: [".playlist-middle-left"],
	    PLAYLIST_RIGHT_TILE: [".playlist-middle-right"],
	    PLAYLIST_SCROLL_HANDLE: [".playlist-scrollbar-handle"],
	    PLAYLIST_SCROLL_HANDLE_SELECTED: [
	        ".playlist-middle-right.winamp-active .playlist-scrollbar-handle",
	    ],
	    PLAYLIST_BOTTOM_TILE: [".playlist-bottom"],
	    PLAYLIST_BOTTOM_LEFT_CORNER: [".playlist-bottom-left"],
	    PLAYLIST_BOTTOM_RIGHT_CORNER: [".playlist-bottom-right"],
	    PLAYLIST_VISUALIZER_BACKGROUND: [".playlist-visualizer"],
	    PLAYLIST_SHADE_BACKGROUND: ["#playlist-window-shade"],
	    PLAYLIST_SHADE_BACKGROUND_LEFT: ["#playlist-window-shade .left"],
	    PLAYLIST_SHADE_BACKGROUND_RIGHT: ["#playlist-window-shade .right"],
	    PLAYLIST_SHADE_BACKGROUND_RIGHT_SELECTED: [
	        "#playlist-window-shade.selected .right",
	    ],
	    PLAYLIST_ADD_MENU_BAR: ["#playlist-add-menu.selected .bar"],
	    PLAYLIST_ADD_URL: ["#playlist-add-menu .add-url"],
	    PLAYLIST_ADD_URL_SELECTED: ["#playlist-add-menu .hover .add-url"],
	    PLAYLIST_ADD_DIR: ["#playlist-add-menu .add-dir"],
	    PLAYLIST_ADD_DIR_SELECTED: ["#playlist-add-menu .hover .add-dir"],
	    PLAYLIST_ADD_FILE: ["#playlist-add-menu .add-file"],
	    PLAYLIST_ADD_FILE_SELECTED: ["#playlist-add-menu .hover .add-file"],
	    PLAYLIST_REMOVE_MENU_BAR: ["#playlist-remove-menu.selected .bar"],
	    PLAYLIST_REMOVE_ALL: ["#playlist-remove-menu .remove-all"],
	    PLAYLIST_REMOVE_ALL_SELECTED: ["#playlist-remove-menu .hover .remove-all"],
	    PLAYLIST_CROP: ["#playlist-remove-menu .crop"],
	    PLAYLIST_CROP_SELECTED: ["#playlist-remove-menu .hover .crop"],
	    PLAYLIST_REMOVE_SELECTED: ["#playlist-remove-menu .remove-selected"],
	    PLAYLIST_REMOVE_SELECTED_SELECTED: [
	        "#playlist-remove-menu .hover .remove-selected",
	    ],
	    PLAYLIST_REMOVE_MISC: ["#playlist-remove-menu .remove-misc"],
	    PLAYLIST_REMOVE_MISC_SELECTED: ["#playlist-remove-menu .hover .remove-misc"],
	    PLAYLIST_SELECT_MENU_BAR: ["#playlist-selection-menu.selected .bar"],
	    PLAYLIST_INVERT_SELECTION: ["#playlist-selection-menu .invert-selection"],
	    PLAYLIST_INVERT_SELECTION_SELECTED: [
	        "#playlist-selection-menu .hover .invert-selection",
	    ],
	    PLAYLIST_SELECT_ZERO: ["#playlist-selection-menu .select-zero"],
	    PLAYLIST_SELECT_ZERO_SELECTED: [
	        "#playlist-selection-menu .hover .select-zero",
	    ],
	    PLAYLIST_SELECT_ALL: ["#playlist-selection-menu .select-all"],
	    PLAYLIST_SELECT_ALL_SELECTED: ["#playlist-selection-menu .hover .select-all"],
	    PLAYLIST_CLOSE_SELECTED: ["#playlist-close-button.winamp-active"],
	    PLAYLIST_COLLAPSE_SELECTED: [
	        "#playlist-window #playlist-shade-button.winamp-active",
	    ],
	    PLAYLIST_EXPAND_SELECTED: [
	        "#playlist-window-shade #playlist-shade-button.winamp-active",
	    ],
	    PLAYLIST_MISC_MENU_BAR: ["#playlist-misc-menu.selected .bar"],
	    PLAYLIST_MISC_OPTIONS: ["#playlist-misc-menu .misc-options"],
	    PLAYLIST_MISC_OPTIONS_SELECTED: ["#playlist-misc-menu .hover .misc-options"],
	    PLAYLIST_FILE_INFO: ["#playlist-misc-menu .file-info"],
	    PLAYLIST_FILE_INFO_SELECTED: ["#playlist-misc-menu .hover .file-info"],
	    PLAYLIST_SORT_LIST: ["#playlist-misc-menu .sort-list"],
	    PLAYLIST_SORT_LIST_SELECTED: ["#playlist-misc-menu .hover .sort-list"],
	    PLAYLIST_LIST_BAR: ["#playlist-list-menu.selected .bar"],
	    PLAYLIST_NEW_LIST: ["#playlist-list-menu .new-list"],
	    PLAYLIST_NEW_LIST_SELECTED: ["#playlist-list-menu .hover .new-list"],
	    PLAYLIST_LOAD_LIST: ["#playlist-list-menu .load-list"],
	    PLAYLIST_LOAD_LIST_SELECTED: ["#playlist-list-menu .hover .load-list"],
	    PLAYLIST_SAVE_LIST: ["#playlist-list-menu .save-list"],
	    PLAYLIST_SAVE_LIST_SELECTED: ["#playlist-list-menu .hover .save-list"],
	    EQ_WINDOW_BACKGROUND: ["#equalizer-window:not(.shade)"],
	    EQ_TITLE_BAR: [".equalizer-top"],
	    EQ_TITLE_BAR_SELECTED: [".selected .equalizer-top"],
	    EQ_SLIDER_BACKGROUND: [".band"],
	    EQ_SLIDER_THUMB: [".band .slider-handle"],
	    // Put the "active" pseudo selector on the parent, since clicking
	    // anywhere on the track moves the slider.
	    EQ_SLIDER_THUMB_SELECTED: [".band.winamp-active .slider-handle"],
	    EQ_ON_BUTTON: ["#on"],
	    EQ_ON_BUTTON_DEPRESSED: ["#on.winamp-active"],
	    EQ_ON_BUTTON_SELECTED: ["#on.selected"],
	    EQ_ON_BUTTON_SELECTED_DEPRESSED: ["#on.selected.winamp-active"],
	    EQ_AUTO_BUTTON: ["#auto"],
	    EQ_AUTO_BUTTON_DEPRESSED: ["#auto.winamp-active"],
	    EQ_AUTO_BUTTON_SELECTED: ["#auto.selected"],
	    EQ_AUTO_BUTTON_SELECTED_DEPRESSED: ["#auto.selected.winamp-active"],
	    EQ_GRAPH_BACKGROUND: ["#eqGraph"],
	    EQ_PRESETS_BUTTON: ["#presets"],
	    EQ_PRESETS_BUTTON_SELECTED: ["#presets.winamp-active"],
	    EQ_PREAMP_LINE: ["#preamp-line"],
	    EQ_SHADE_BACKGROUND: ["#equalizer-window.shade"],
	    EQ_SHADE_BACKGROUND_SELECTED: ["#equalizer-window.shade.selected"],
	    EQ_SHADE_VOLUME_SLIDER_LEFT: [
	        "#equalizer-volume.left::-webkit-slider-thumb",
	        "#equalizer-volume.left::-moz-range-thumb",
	    ],
	    EQ_SHADE_VOLUME_SLIDER_CENTER: [
	        "#equalizer-volume.center::-webkit-slider-thumb",
	        "#equalizer-volume.center::-moz-range-thumb",
	    ],
	    EQ_SHADE_VOLUME_SLIDER_RIGHT: [
	        "#equalizer-volume.right::-webkit-slider-thumb",
	        "#equalizer-volume.right::-moz-range-thumb",
	    ],
	    EQ_SHADE_BALANCE_SLIDER_LEFT: [
	        "#equalizer-balance.left::-webkit-slider-thumb",
	        "#equalizer-balance.left::-moz-range-thumb",
	    ],
	    EQ_SHADE_BALANCE_SLIDER_CENTER: [
	        "#equalizer-balance.center::-webkit-slider-thumb",
	        "#equalizer-balance.center::-moz-range-thumb",
	    ],
	    EQ_SHADE_BALANCE_SLIDER_RIGHT: [
	        "#equalizer-balance.right::-webkit-slider-thumb",
	        "#equalizer-balance.right::-moz-range-thumb",
	    ],
	    EQ_MAXIMIZE_BUTTON_ACTIVE: ["#equalizer-shade.winamp-active"],
	    EQ_MINIMIZE_BUTTON_ACTIVE: [
	        "#equalizer-window.shade #equalizer-shade.winamp-active",
	    ],
	    EQ_CLOSE_BUTTON: [
	        "#equalizer-window.selected #eq-buttons.clicked #equalizer-close",
	    ],
	    EQ_CLOSE_BUTTON_ACTIVE: [
	        "#equalizer-window.selected #eq-buttons.clicked #equalizer-close.winamp-active",
	    ],
	    EQ_SHADE_CLOSE_BUTTON: [
	        "#equalizer-window.shade.selected #eq-buttons.clicked #equalizer-close",
	    ],
	    EQ_SHADE_CLOSE_BUTTON_ACTIVE: [
	        "#equalizer-window.shade.selected #eq-buttons.clicked #equalizer-close.winamp-active",
	    ],
	    MAIN_POSITION_SLIDER_BACKGROUND: ["#position"],
	    MAIN_POSITION_SLIDER_THUMB: [
	        "#position::-webkit-slider-thumb",
	        "#position::-moz-range-thumb",
	    ],
	    MAIN_POSITION_SLIDER_THUMB_SELECTED: [
	        "#position:active::-webkit-slider-thumb",
	        "#position:active::-moz-range-thumb",
	    ],
	    MAIN_SHUFFLE_BUTTON: ["#shuffle"],
	    MAIN_SHUFFLE_BUTTON_DEPRESSED: ["#shuffle.winamp-active"],
	    MAIN_SHUFFLE_BUTTON_SELECTED: ["#shuffle.selected"],
	    MAIN_SHUFFLE_BUTTON_SELECTED_DEPRESSED: ["#shuffle.selected.winamp-active"],
	    MAIN_REPEAT_BUTTON: ["#repeat"],
	    MAIN_REPEAT_BUTTON_DEPRESSED: ["#repeat.winamp-active"],
	    MAIN_REPEAT_BUTTON_SELECTED: ["#repeat.selected"],
	    MAIN_REPEAT_BUTTON_SELECTED_DEPRESSED: ["#repeat.selected.winamp-active"],
	    MAIN_EQ_BUTTON: ["#equalizer-button"],
	    MAIN_EQ_BUTTON_SELECTED: ["#equalizer-button.selected"],
	    MAIN_EQ_BUTTON_DEPRESSED: ["#equalizer-button.winamp-active"],
	    MAIN_EQ_BUTTON_DEPRESSED_SELECTED: [
	        "#equalizer-button.selected.winamp-button",
	    ],
	    MAIN_PLAYLIST_BUTTON: ["#playlist-button"],
	    MAIN_PLAYLIST_BUTTON_SELECTED: ["#playlist-button.selected"],
	    MAIN_PLAYLIST_BUTTON_DEPRESSED: ["#playlist-button.winamp-active"],
	    MAIN_PLAYLIST_BUTTON_DEPRESSED_SELECTED: [
	        "#playlist-button.selected.winamp-active",
	    ],
	    MAIN_TITLE_BAR: ["#title-bar"],
	    MAIN_TITLE_BAR_SELECTED: [".selected #title-bar"],
	    MAIN_EASTER_EGG_TITLE_BAR: [".llama #title-bar"],
	    MAIN_EASTER_EGG_TITLE_BAR_SELECTED: [".llama.selected #title-bar"],
	    MAIN_OPTIONS_BUTTON: [".selected #title-bar #option.clicked"],
	    MAIN_OPTIONS_BUTTON_DEPRESSED: [
	        ".selected #title-bar #option:active",
	        ".selected #title-bar #option.selected",
	    ],
	    MAIN_MINIMIZE_BUTTON: [".selected #title-bar #minimize.clicked"],
	    MAIN_MINIMIZE_BUTTON_DEPRESSED: [
	        ".selected #title-bar #minimize.winamp-active",
	    ],
	    MAIN_SHADE_BUTTON: [".selected #title-bar #shade.clicked"],
	    MAIN_SHADE_BUTTON_DEPRESSED: [".selected #title-bar #shade.winamp-active"],
	    MAIN_CLOSE_BUTTON: [".selected #title-bar #close.clicked"],
	    MAIN_CLOSE_BUTTON_DEPRESSED: [".selected #title-bar #close.winamp-active"],
	    MAIN_CLUTTER_BAR_BACKGROUND: ["#clutter-bar"],
	    MAIN_CLUTTER_BAR_BACKGROUND_DISABLED: ["#clutter-bar.disabled"],
	    MAIN_CLUTTER_BAR_BUTTON_O_SELECTED: [
	        "#button-o:active",
	        "#button-0.selected",
	    ],
	    MAIN_CLUTTER_BAR_BUTTON_A_SELECTED: [
	        "#button-a:active",
	        "#button-a.selected",
	    ],
	    MAIN_CLUTTER_BAR_BUTTON_I_SELECTED: [
	        "#button-i:active",
	        "#button-i.selected",
	    ],
	    MAIN_CLUTTER_BAR_BUTTON_D_SELECTED: [
	        "#button-d:active",
	        "#button-d.selected",
	    ],
	    MAIN_CLUTTER_BAR_BUTTON_V_SELECTED: [
	        "#button-v:active",
	        "#button-v.selected",
	    ],
	    MAIN_SHADE_BACKGROUND: [".shade #title-bar"],
	    MAIN_SHADE_BACKGROUND_SELECTED: [".shade.selected #title-bar"],
	    MAIN_SHADE_BUTTON_SELECTED: [".shade.selected #title-bar #shade"],
	    MAIN_SHADE_BUTTON_SELECTED_DEPRESSED: [
	        ".shade #title-bar #shade.winamp-active",
	    ],
	    MAIN_SHADE_POSITION_BACKGROUND: [".shade #position"],
	    MAIN_SHADE_POSITION_THUMB: [
	        ".shade #position::-moz-range-thumb",
	        ".shade #position::-webkit-slider-thumb",
	    ],
	    MAIN_SHADE_POSITION_THUMB_LEFT: [
	        ".shade #position.left::-moz-range-thumb",
	        ".shade #position.left::-webkit-slider-thumb",
	    ],
	    MAIN_SHADE_POSITION_THUMB_RIGHT: [
	        ".shade #position.right::-moz-range-thumb",
	        ".shade #position.right::-webkit-slider-thumb",
	    ],
	    MAIN_VOLUME_BACKGROUND: ["#volume"],
	    MAIN_VOLUME_THUMB: [
	        "#volume input::-webkit-slider-thumb",
	        "#volume input::-moz-range-thumb",
	    ],
	    MAIN_VOLUME_THUMB_SELECTED: [
	        "#volume input:active::-webkit-slider-thumb",
	        "#volume input:active::-moz-range-thumb",
	    ],
	    GEN_TOP_CENTER_FILL: [".gen-window .gen-top"],
	    GEN_TOP_LEFT: [".gen-window .gen-top-left"],
	    GEN_TOP_LEFT_END: [".gen-window .gen-top-left-end"],
	    GEN_TOP_RIGHT: [".gen-window .gen-top-right"],
	    GEN_TOP_RIGHT_END: [".gen-window .gen-top-right-end"],
	    GEN_TOP_LEFT_RIGHT_FILL: [
	        ".gen-window .gen-top-left-fill",
	        ".gen-window .gen-top-right-fill",
	    ],
	    GEN_TOP_CENTER_FILL_SELECTED: [".gen-window.selected .gen-top"],
	    GEN_TOP_LEFT_SELECTED: [".gen-window.selected .gen-top-left"],
	    GEN_TOP_LEFT_END_SELECTED: [".gen-window.selected .gen-top-left-end"],
	    GEN_TOP_RIGHT_SELECTED: [".gen-window.selected .gen-top-right"],
	    GEN_TOP_RIGHT_END_SELECTED: [".gen-window.selected .gen-top-right-end"],
	    GEN_TOP_LEFT_RIGHT_FILL_SELECTED: [
	        ".gen-window.selected .gen-top-left-fill",
	        ".gen-window.selected .gen-top-right-fill",
	    ],
	    GEN_BOTTOM_LEFT: [".gen-window .gen-bottom-left"],
	    GEN_BOTTOM_RIGHT: [".gen-window .gen-bottom-right"],
	    GEN_BOTTOM_FILL: [".gen-window .gen-bottom"],
	    GEN_MIDDLE_LEFT: [".gen-window .gen-middle-left"],
	    GEN_MIDDLE_LEFT_BOTTOM: [".gen-window .gen-middle-left-bottom"],
	    GEN_MIDDLE_RIGHT: [".gen-window .gen-middle-right"],
	    GEN_MIDDLE_RIGHT_BOTTOM: [".gen-window .gen-middle-right-bottom"],
	    GEN_CLOSE_SELECTED: [".gen-window .gen-close.winamp-active"],
	};
	Object.keys(FONT_LOOKUP).forEach((character) => {
	    const key = imageConstFromChar(character);
	    const code = character.charCodeAt(0);
	    imageSelectors[key] = [`.character-${code}`];
	});
	LETTERS.forEach((character) => {
	    imageSelectors[`GEN_TEXT_${character}`] = [
	        `.gen-text-${character.toLowerCase()}`,
	    ];
	    imageSelectors[`GEN_TEXT_SELECTED_${character}`] = [
	        `.gen-window.selected .gen-text-${character.toLowerCase()}`,
	    ];
	});
	const cursorSelectors = {
	    CLOSE: ["#title-bar #close"],
	    // This is not quite right. There are some areas that show this cursor
	    // but are not clickable.
	    EQSLID: ["#equalizer-window .band"],
	    EQNORMAL: ["#equalizer-window"],
	    EQCLOSE: ["#equalizer-window #equalizer-close"],
	    EQTITLE: [
	        "#equalizer-window .title-bar",
	        "#equalizer-window.shade",
	        "#equalizer-window.shade input",
	    ],
	    MAINMENU: ["#main-window #option", "#webamp-context-menu .context-menu"],
	    MIN: ["#main-window #minimize"],
	    NORMAL: [
	        // Use this as the default cursor.
	        ".window",
	        ".window input", // Otherwise
	        "#main-window",
	        "#main-window.shade #title-bar",
	    ],
	    MMENU: ["#main-window.shade #option"],
	    PNORMAL: ["#playlist-window"],
	    // TODO: This is should really only apply to the top part of the top.
	    // The chrome around the playlist window is larger than others. The
	    // cursor only applies to the same height as the other window's chrome.
	    PTBAR: ["#playlist-window .playlist-top"],
	    PCLOSE: [
	        "#playlist-window #playlist-close-button",
	        "#playlist-window-shade #playlist-close-button",
	    ],
	    PWINBUT: [
	        "#playlist-window #playlist-shade-button",
	        "#playlist-window-shade #playlist-shade-button",
	    ],
	    POSBAR: ["#main-window #position"],
	    PSIZE: ["#playlist-window #playlist-resize-target"],
	    PWSSIZE: ["#playlist-window-shade #playlist-resize-target"],
	    PWSNORM: ["#playlist-window-shade"],
	    // TODO: The target for this is not quite right.
	    PVSCROLL: ["#playlist-window .playlist-scrollbar"],
	    SONGNAME: ["#main-window #marquee"],
	    TITLEBAR: ["#main-window #title-bar"],
	    VOLBAL: ["#volume", "#volume input", "#balance"],
	    WINBUT: ["#main-window #shade"],
	    WSNORMAL: ["#main-window.shade #title-bar"],
	    WSPOSBAR: ["#main-window.shade #position"],
	};

	function Css({ children, id }) {
	    const style = reactExports.useMemo(() => {
	        const s = document.createElement("style");
	        s.type = "text/css";
	        if (id != null) {
	            s.id = id;
	        }
	        return s;
	    }, [id]);
	    reactExports.useLayoutEffect(() => {
	        document.head.appendChild(style);
	        return () => style.remove();
	    }, [style]);
	    return reactDomExports.createPortal(children, style);
	}

	// this.props.children should be an object containing arrays of strings. The
	// keys are ids, and the arrays are arrays of polygon point strings
	function ClipPaths({ children }) {
	    const paths = reactExports.useMemo(() => {
	        return document.createElement("div");
	    }, []);
	    reactExports.useLayoutEffect(() => {
	        document.body.appendChild(paths);
	        return () => paths.remove();
	    }, [paths]);
	    return reactDomExports.createPortal(jsxRuntimeExports.jsx("svg", { height: 0, width: 0, children: jsxRuntimeExports.jsx("defs", { children: Object.keys(children).map((id) => (jsxRuntimeExports.jsx("clipPath", { id: id, children: children[id].map((points, i) => (jsxRuntimeExports.jsx("polygon", { points: points }, i))) }, id))) }) }), paths);
	}

	var dist = {};

	var parser = {};

	/*
	 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining
	 * a copy of this software and associated documentation files (the
	 * "Software"), to deal in the Software without restriction, including
	 * without limitation the rights to use, copy, modify, merge, publish,
	 * distribute, sublicense, and/or sell copies of the Software, and to
	 * permit persons to whom the Software is furnished to do so, subject to
	 * the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be
	 * included in all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 *
	 */

	/**
	 * @fileoverview A function to swap endianness in byte buffers.
	 * @see https://github.com/rochars/endianness
	 */

	/** @module endianness */

	/**
	 * Swap the byte ordering in a buffer. The buffer is modified in place.
	 * @param {!Array|!Uint8Array} bytes The bytes.
	 * @param {number} offset The byte offset.
	 * @param {number=} start The start index. Assumes 0.
	 * @param {number=} end The end index. Assumes the buffer length.
	 * @throws {Error} If the buffer length is not valid.
	 */
	function endianness(bytes, offset, start = 0, end = bytes.length) {
	  if (end % offset) {
	    throw new Error("Bad buffer length.");
	  }
	  for (let index = start; index < end; index += offset) {
	    swap(bytes, offset, index);
	  }
	}

	/**
	 * Swap the byte order of a value in a buffer. The buffer is modified in place.
	 * @param {!Array|!Uint8Array} bytes The bytes.
	 * @param {number} offset The byte offset.
	 * @param {number} index The start index.
	 * @private
	 */
	function swap(bytes, offset, index) {
	  offset--;
	  for (let x = 0; x < offset; x++) {
	    /** @type {*} */
	    let theByte = bytes[index + x];
	    bytes[index + x] = bytes[index + offset];
	    bytes[index + offset] = theByte;
	    offset--;
	  }
	}

	/*
	 * Copyright (c) 2018 Rafael da Silva Rocha.
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining
	 * a copy of this software and associated documentation files (the
	 * "Software"), to deal in the Software without restriction, including
	 * without limitation the rights to use, copy, modify, merge, publish,
	 * distribute, sublicense, and/or sell copies of the Software, and to
	 * permit persons to whom the Software is furnished to do so, subject to
	 * the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be
	 * included in all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 *
	 */

	/**
	 * @fileoverview Functions to serialize and deserialize UTF-8 strings.
	 * @see https://github.com/rochars/utf8-buffer
	 * @see https://encoding.spec.whatwg.org/#the-encoding
	 * @see https://encoding.spec.whatwg.org/#utf-8-encoder
	 */

	/** @module utf8-buffer */

	/**
	 * Read a string of UTF-8 characters from a byte buffer.
	 * Invalid characters are replaced with 'REPLACEMENT CHARACTER' (U+FFFD).
	 * @see https://encoding.spec.whatwg.org/#the-encoding
	 * @see https://stackoverflow.com/a/34926911
	 * @param {!Uint8Array|!Array<number>} buffer A byte buffer.
	 * @param {number=} start The buffer index to start reading.
	 * @param {?number=} end The buffer index to stop reading.
	 *   Assumes the buffer length if undefined.
	 * @return {string}
	 */
	function unpack$1(buffer, start = 0, end = buffer.length) {
	  /** @type {string} */
	  let str = '';
	  for (let index = start; index < end;) {
	    /** @type {number} */
	    let lowerBoundary = 0x80;
	    /** @type {number} */
	    let upperBoundary = 0xBF;
	    /** @type {boolean} */
	    let replace = false;
	    /** @type {number} */
	    let charCode = buffer[index++];
	    if (charCode >= 0x00 && charCode <= 0x7F) {
	      str += String.fromCharCode(charCode);
	    } else {
	      /** @type {number} */
	      let count = 0;
	      if (charCode >= 0xC2 && charCode <= 0xDF) {
	        count = 1;
	      } else if (charCode >= 0xE0 && charCode <= 0xEF) {
	        count = 2;
	        if (buffer[index] === 0xE0) {
	          lowerBoundary = 0xA0;
	        }
	        if (buffer[index] === 0xED) {
	          upperBoundary = 0x9F;
	        }
	      } else if (charCode >= 0xF0 && charCode <= 0xF4) {
	        count = 3;
	        if (buffer[index] === 0xF0) {
	          lowerBoundary = 0x90;
	        }
	        if (buffer[index] === 0xF4) {
	          upperBoundary = 0x8F;
	        }
	      } else {
	        replace = true;
	      }
	      charCode = charCode & (1 << 8 - count - 1) - 1;
	      for (let i = 0; i < count; i++) {
	        if (buffer[index] < lowerBoundary || buffer[index] > upperBoundary) {
	          replace = true;
	        }
	        charCode = charCode << 6 | buffer[index] & 0x3f;
	        index++;
	      }
	      if (replace) {
	        str += String.fromCharCode(0xFFFD);
	      } else if (charCode <= 0xffff) {
	        str += String.fromCharCode(charCode);
	      } else {
	        charCode -= 0x10000;
	        str += String.fromCharCode((charCode >> 10 & 0x3ff) + 0xd800, (charCode & 0x3ff) + 0xdc00);
	      }
	    }
	  }
	  return str;
	}

	/**
	 * Write a string of UTF-8 characters to a byte buffer.
	 * @see https://encoding.spec.whatwg.org/#utf-8-encoder
	 * @param {string} str The string to pack.
	 * @param {!Uint8Array|!Array<number>} buffer The buffer to pack the string to.
	 * @param {number=} index The buffer index to start writing.
	 * @return {number} The next index to write in the buffer.
	 */
	function pack$1(str, buffer, index = 0) {
	  for (let i = 0, len = str.length; i < len; i++) {
	    /** @type {number} */
	    let codePoint = str.codePointAt(i);
	    if (codePoint < 128) {
	      buffer[index] = codePoint;
	      index++;
	    } else {
	      /** @type {number} */
	      let count = 0;
	      /** @type {number} */
	      let offset = 0;
	      if (codePoint <= 0x07FF) {
	        count = 1;
	        offset = 0xC0;
	      } else if (codePoint <= 0xFFFF) {
	        count = 2;
	        offset = 0xE0;
	      } else if (codePoint <= 0x10FFFF) {
	        count = 3;
	        offset = 0xF0;
	        i++;
	      }
	      buffer[index] = (codePoint >> 6 * count) + offset;
	      index++;
	      while (count > 0) {
	        buffer[index] = 0x80 | codePoint >> 6 * (count - 1) & 0x3F;
	        index++;
	        count--;
	      }
	    }
	  }
	  return index;
	}

	/*
	 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining
	 * a copy of this software and associated documentation files (the
	 * "Software"), to deal in the Software without restriction, including
	 * without limitation the rights to use, copy, modify, merge, publish,
	 * distribute, sublicense, and/or sell copies of the Software, and to
	 * permit persons to whom the Software is furnished to do so, subject to
	 * the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be
	 * included in all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 *
	 */

	/**
	 * @fileoverview Encode and decode int numbers to and from byte buffers.
	 * @see https://github.com/rochars/byte-data
	 */

	/**
	 * A class to write and read integer numbers to and from byte buffers.
	 */
	class IntParser {
	  /**
	   * @param {number} bits The number of bits used by the integer.
	   * @param {boolean} [signed=false] True for signed, false otherwise.
	   * @param {boolean} [clamp=false] True to clamp on overflow.
	   */
	  constructor(bits, signed = false, clamp = false) {
	    /**
	     * The number of bits used by one number.
	     * @type {number}
	     */
	    this.bits = bits;
	    /**
	     * The number of bytes used by one number.
	     * @type {number}
	     */
	    this.bytes = bits < 8 ? 1 : Math.ceil(bits / 8);
	    /**
	     * @type {number}
	     * @protected
	     */
	    this.max = Math.pow(2, bits) - 1;
	    /**
	     * @type {number}
	     * @protected
	     */
	    this.min = 0;
	    /** @type {number} */
	    let r = 8 - ((bits - 1 | 7) + 1 - bits);
	    /**
	     * @type {number}
	     * @private
	     */
	    this.lastByteMask_ = Math.pow(2, r > 0 ? r : 8) - 1;
	    /**
	     * @type {Function}
	     * @protected
	     */
	    this.unpack = this.unpackUnsigned_;
	    if (signed) {
	      this.max = Math.pow(2, bits) / 2 - 1;
	      this.min = -this.max - 1;
	      this.unpack = this.unpackSigned_;
	    }
	    if (clamp) {
	      this.overflow_ = this.overflowClamp_;
	    }
	  }

	  /**
	   * Write one unsigned integer to a byte buffer.
	   * @param {!(Uint8Array|Array<number>)} buffer An array of bytes.
	   * @param {number} num The number. Overflows are truncated.
	   * @param {number} [index=0] The index being written in the byte buffer.
	   * @return {number} The next index to write on the byte buffer.
	   */
	  pack(buffer, num, index = 0) {
	    if (num !== num || num.constructor != Number) {
	      throw new TypeError();
	    }
	    num = this.overflow_(num);
	    buffer[index] = (num < 0 ? num + Math.pow(2, this.bits) : num) & 255;
	    index++;
	    for (let i = 2, len = this.bytes; i < len; i++) {
	      buffer[index] = Math.floor(num / Math.pow(2, (i - 1) * 8)) & 255;
	      index++;
	    }
	    if (this.bits > 8) {
	      buffer[index] = Math.floor(num / Math.pow(2, (this.bytes - 1) * 8)) & this.lastByteMask_;
	      index++;
	    }
	    return index;
	  }

	  /**
	   * Read one unsigned integer from a byte buffer.
	   * Does not check for overflows.
	   * @param {!(Uint8Array|Array<number>)} buffer An array of bytes.
	   * @param {number} [index=0] The index to read.
	   * @return {number}
	   */
	  unpack_(buffer, index = 0) {
	    /** @type {number} */
	    let num = 0;
	    for (let x = 0; x < this.bytes; x++) {
	      num += buffer[index + x] * Math.pow(256, x);
	    }
	    return num;
	  }
	  unpackUnsigned_(buffer, index = 0) {
	    return this.overflow_(this.unpack_(buffer, index));
	  }

	  /**
	   * Read one two's complement signed integer from a byte buffer.
	   * @param {!(Uint8Array|Array<number>)} buffer An array of bytes.
	   * @param {number} [index=0] The index to read.
	   * @return {number}
	   */
	  unpackSigned_(buffer, index = 0) {
	    return this.overflow_(this.sign_(this.unpack_(buffer, index)));
	  }

	  /**
	   * Truncate values in case of overflow.
	   * @param {number} num The number.
	   * @private
	   */
	  overflow_(num) {
	    if (num > this.max || num < this.min) {
	      throw new RangeError();
	    }
	    return num;
	  }

	  /**
	   * Truncate values in case of overflow.
	   * @param {number} num The number.
	   * @private
	   */
	  overflowClamp_(num) {
	    if (num > this.max) {
	      return this.max;
	    } else if (num < this.min) {
	      return this.min;
	    }
	    return num;
	  }

	  /**
	   * Sign a number.
	   * @param {number} num The number.
	   * @return {number}
	   * @private
	   */
	  sign_(num) {
	    if (num > this.max) {
	      num -= this.max * 2 + 2;
	    }
	    return num;
	  }
	}

	/*
	 * Copyright (c) 2018-2019 Rafael da Silva Rocha.
	 * Copyright (c) 2013 DeNA Co., Ltd.
	 * Copyright (c) 2010, Linden Research, Inc
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining
	 * a copy of this software and associated documentation files (the
	 * "Software"), to deal in the Software without restriction, including
	 * without limitation the rights to use, copy, modify, merge, publish,
	 * distribute, sublicense, and/or sell copies of the Software, and to
	 * permit persons to whom the Software is furnished to do so, subject to
	 * the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be
	 * included in all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 *
	 */

	/**
	 * @fileoverview Encode and decode IEEE 754 floating point numbers.
	 * @see https://github.com/rochars/ieee754-buffer
	 * @see https://bitbucket.org/lindenlab/llsd/raw/7d2646cd3f9b4c806e73aebc4b32bd81e4047fdc/js/typedarray.js
	 * @see https://github.com/kazuho/ieee754.js/blob/master/ieee754.js
	 */

	/** 
	 * @module ieee754-buffer
	 */

	/**
	 * A class to encode and decode IEEE 754 floating-point numbers.
	 */
	class IEEE754Buffer {
	  /**
	   * Pack a IEEE 754 floating point number.
	   * @param {number} ebits The exponent bits.
	   * @param {number} fbits The fraction bits.
	   */
	  constructor(ebits, fbits) {
	    /**
	     * @type {number}
	     * @private
	     */
	    this.ebits = ebits;
	    /**
	     * @type {number}
	     * @private
	     */
	    this.fbits = fbits;
	    /**
	     * @type {number}
	     * @private
	     */
	    this.bias = (1 << ebits - 1) - 1;
	    /**
	     * @type {number}
	     * @private
	     */
	    this.numBytes = Math.ceil((ebits + fbits) / 8);
	    /**
	     * @type {number}
	     * @private
	     */
	    this.biasP2 = Math.pow(2, this.bias + 1);
	    /**
	     * @type {number}
	     * @private
	     */
	    this.ebitsFbits = ebits + fbits;
	    /**
	     * @type {number}
	     * @private
	     */
	    this.fbias = Math.pow(2, -(8 * this.numBytes - 1 - ebits));
	  }

	  /**
	   * Pack a IEEE 754 floating point number.
	   * @param {!Uint8Array|!Array<number>} buffer The buffer.
	   * @param {number} num The number.
	   * @param {number} index The index to write on the buffer.
	   * @return {number} The next index to write on the buffer.
	   * @throws {TypeError} If input is not a number.
	   */
	  pack(buffer, num, index) {
	    // Only numbers can be packed
	    if (typeof num != 'number') {
	      throw new TypeError();
	    }
	    // Round overflows
	    if (Math.abs(num) > this.biasP2 - this.ebitsFbits * 2) {
	      num = num < 0 ? -Infinity : Infinity;
	    }
	    /**
	     * sign, need this to handle negative zero
	     * @see http://cwestblog.com/2014/02/25/javascript-testing-for-negative-zero/
	     * @type {number}
	     */
	    let sign = ((num = +num) || 1 / num) < 0 ? 1 : num < 0 ? 1 : 0;
	    num = Math.abs(num);
	    /** @type {number} */
	    let exp = Math.min(Math.floor(Math.log(num) / Math.LN2), 1023);
	    /** @type {number} */
	    let fraction = roundToEven(num / Math.pow(2, exp) * Math.pow(2, this.fbits));
	    // NaN
	    if (num !== num) {
	      fraction = Math.pow(2, this.fbits - 1);
	      exp = (1 << this.ebits) - 1;
	      // Number
	    } else if (num !== 0) {
	      if (num >= Math.pow(2, 1 - this.bias)) {
	        if (fraction / Math.pow(2, this.fbits) >= 2) {
	          exp = exp + 1;
	          fraction = 1;
	        }
	        // Overflow
	        if (exp > this.bias) {
	          exp = (1 << this.ebits) - 1;
	          fraction = 0;
	        } else {
	          exp = exp + this.bias;
	          fraction = roundToEven(fraction) - Math.pow(2, this.fbits);
	        }
	      } else {
	        fraction = roundToEven(num / Math.pow(2, 1 - this.bias - this.fbits));
	        exp = 0;
	      }
	    }
	    return this.packFloatBits_(buffer, index, sign, exp, fraction);
	  }

	  /**
	   * Unpack a IEEE 754 floating point number.
	   * Derived from IEEE754 by DeNA Co., Ltd., MIT License. 
	   * Adapted to handle NaN. Should port the solution to the original repo.
	   * @param {!Uint8Array|!Array<number>} buffer The buffer.
	   * @param {number} index The index to read from the buffer.
	   * @return {number} The floating point number.
	   */
	  unpack(buffer, index) {
	    /** @type {number} */
	    let eMax = (1 << this.ebits) - 1;
	    /** @type {number} */
	    let significand;
	    /** @type {string} */
	    let leftBits = "";
	    for (let i = this.numBytes - 1; i >= 0; i--) {
	      /** @type {string} */
	      let t = buffer[i + index].toString(2);
	      leftBits += "00000000".substring(t.length) + t;
	    }
	    /** @type {number} */
	    let sign = leftBits.charAt(0) == "1" ? -1 : 1;
	    leftBits = leftBits.substring(1);
	    /** @type {number} */
	    let exponent = parseInt(leftBits.substring(0, this.ebits), 2);
	    leftBits = leftBits.substring(this.ebits);
	    if (exponent == eMax) {
	      if (parseInt(leftBits, 2) !== 0) {
	        return NaN;
	      }
	      return sign * Infinity;
	    } else if (exponent === 0) {
	      exponent += 1;
	      significand = parseInt(leftBits, 2);
	    } else {
	      significand = parseInt("1" + leftBits, 2);
	    }
	    return sign * significand * this.fbias * Math.pow(2, exponent - this.bias);
	  }

	  /**
	   * Pack a IEEE754 from its sign, exponent and fraction bits
	   * and place it in a byte buffer.
	   * @param {!Uint8Array|!Array<number>} buffer The byte buffer to write to.
	   * @param {number} index The buffer index to write.
	   * @param {number} sign The sign.
	   * @param {number} exp the exponent.
	   * @param {number} fraction The fraction.
	   * @return {number}
	   * @private
	   */
	  packFloatBits_(buffer, index, sign, exp, fraction) {
	    /** @type {!Array<number>} */
	    let bits = [];
	    // the sign
	    bits.push(sign);
	    // the exponent
	    for (let i = this.ebits; i > 0; i -= 1) {
	      bits[i] = exp % 2 ? 1 : 0;
	      exp = Math.floor(exp / 2);
	    }
	    // the fraction
	    let len = bits.length;
	    for (let i = this.fbits; i > 0; i -= 1) {
	      bits[len + i] = fraction % 2 ? 1 : 0;
	      fraction = Math.floor(fraction / 2);
	    }
	    // pack as bytes
	    /** @type {string} */
	    let str = bits.join('');
	    /** @type {number} */
	    let numBytes = this.numBytes + index - 1;
	    /** @type {number} */
	    let k = index;
	    while (numBytes >= index) {
	      buffer[numBytes] = parseInt(str.substring(0, 8), 2);
	      str = str.substring(8);
	      numBytes--;
	      k++;
	    }
	    return k;
	  }
	}

	/**
	 * Round a number to its nearest even value.
	 * @param {number} n The number.
	 * @return {number}
	 * @private
	 */
	function roundToEven(n) {
	  /** @type {number} */
	  let w = Math.floor(n);
	  let f = n - w;
	  if (f < 0.5) {
	    return w;
	  }
	  if (f > 0.5) {
	    return w + 1;
	  }
	  return w % 2 ? w + 1 : w;
	}

	/*
	 * Copyright (c) 2017-2019 Rafael da Silva Rocha.
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining
	 * a copy of this software and associated documentation files (the
	 * "Software"), to deal in the Software without restriction, including
	 * without limitation the rights to use, copy, modify, merge, publish,
	 * distribute, sublicense, and/or sell copies of the Software, and to
	 * permit persons to whom the Software is furnished to do so, subject to
	 * the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be
	 * included in all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 *
	 */


	/**
	 * Read a string of UTF-8 characters from a byte buffer.
	 * @param {!(Uint8Array|Array<number>)} buffer A byte buffer.
	 * @param {number} [index=0] The buffer index to start reading.
	 * @param {number} [end=buffer.length] The index to stop reading, non inclusive.
	 * @return {string}
	 */
	function unpackString(buffer, index = 0, end = buffer.length) {
	  return unpack$1(buffer, index, end);
	}

	/**
	 * Write a string of UTF-8 characters as a byte buffer.
	 * @param {string} str The string to pack.
	 * @return {!Array<number>} The UTF-8 string bytes.
	 */
	function packString(str) {
	  /** @type {!Array<number>} */
	  let buffer = [];
	  pack$1(str, buffer, 0);
	  return buffer;
	}

	/**
	 * Write a string of UTF-8 characters to a byte buffer.
	 * @param {string} str The string to pack.
	 * @param {!(Uint8Array|Array<number>)} buffer The output buffer.
	 * @param {number} [index=0] The buffer index to start writing.
	 * @return {number} The next index to write in the buffer.
	 */
	function packStringTo(str, buffer, index = 0) {
	  return pack$1(str, buffer, index);
	}

	// Numbers
	/**
	 * Pack a array of numbers to a byte buffer.
	 * All other packing functions are interfaces to this function.
	 * @param {!(Array<number>|TypedArray)} values The values to pack.
	 * @param {!{bits:number,
	 *   fp: (boolean|undefined),
	 *   signed: (boolean|undefined),
	 *   be: (boolean|undefined)}} theType The type definition.
	 * @param {!(Uint8Array|Array<number>)} buffer The buffer to write on.
	 * @param {number} [index=0] The buffer index to start writing.
	 * @param {boolean} [clamp=false] True to clamp ints on overflow.
	 * @return {number} The next index to write.
	 * @throws {Error} If the type definition is not valid.
	 * @throws {RangeError} On overflow.
	 * @throws {TypeError} If input is not valid.
	 */
	function packArrayTo(values, theType, buffer, index = 0, clamp = false) {
	  theType = theType || {};
	  /** @type {!Object} */
	  let packer = getParser_(theType.bits, theType.fp, theType.signed, clamp);
	  /** @type {number} */
	  let offset = Math.ceil(theType.bits / 8);
	  /** @type {number} */
	  let i = 0;
	  /** @type {number} */
	  let start = index;
	  try {
	    for (let valuesLen = values.length; i < valuesLen; i++) {
	      index = packer.pack(buffer, values[i], index);
	    }
	    if (theType.be) {
	      endianness(buffer, offset, start, index);
	    }
	  } catch (e) {
	    throwValueError_(e, values[i], i);
	  }
	  return index;
	}

	/**
	 * Unpack a array of numbers from a byte buffer to a array or a typed array.
	 * All other unpacking functions are interfaces to this function.
	 * @param {!(Uint8Array|Array<number>)} buffer The byte buffer.
	 * @param {!{bits:number,
	 *   fp: (boolean|undefined),
	 *   signed: (boolean|undefined),
	 *   be: (boolean|undefined)}} theType The type definition.
	 * @param {!(TypedArray|Array<number>)} output The output array or typed array.
	 * @param {number} [start=0] The buffer index to start reading.
	 * @param {number} [end=buffer.length] The buffer index to stop reading.
	 * @param {boolean} [safe=false] If set to false, extra bytes in the end of
	 *   the array are ignored and input buffers with insufficient bytes will
	 *   write nothing to the output array. If safe is set to true the function
	 *   will throw a 'Bad buffer length' error.
	 * @param {boolean} [clamp=false] True to clamp ints on overflow.
	 * @throws {Error} If the type definition is not valid
	 * @throws {RangeError} On overflow
	 */
	function unpackArrayTo(buffer, theType, output, start = 0, end = buffer.length, safe = false, clamp = false) {
	  theType = theType || {};
	  /** @type {!Object} */
	  let packer = getParser_(theType.bits, theType.fp, theType.signed, clamp);
	  /** @type {number} */
	  let offset = Math.ceil(theType.bits / 8);
	  // getUnpackLen_ will either fix the length of the input buffer
	  // according to the byte offset of the type (on unsafe mode) or
	  // throw a Error if the input buffer has a bad length (on safe mode)
	  end = getUnpackLen_(buffer, start, end, offset, safe);
	  /** @type {number} */
	  let index = 0;
	  let j = start;
	  try {
	    if (theType.be) {
	      endianness(buffer, offset, start, end);
	    }
	    for (; j < end; j += offset, index++) {
	      output[index] = packer.unpack(buffer, j);
	    }
	    if (theType.be) {
	      endianness(buffer, offset, start, end);
	    }
	  } catch (e) {
	    throwValueError_(e, buffer.slice(j, j + offset), j);
	  }
	}

	/**
	 * Pack a number to a byte buffer.
	 * @param {number} value The value.
	 * @param {!{bits:number,
	 *   fp: (boolean|undefined),
	 *   signed: (boolean|undefined),
	 *   be: (boolean|undefined)}} theType The type definition.
	 * @param {!(Uint8Array|Array<number>)} buffer The byte buffer to write on.
	 * @param {number} [index=0] The buffer index to write.
	 * @param {boolean} [clamp=false] True to clamp ints on overflow.
	 * @return {number} The next index to write.
	 * @throws {Error} If the type definition is not valid.
	 * @throws {RangeError} On overflow.
	 * @throws {TypeError} If input is not valid.
	 */
	function packTo(value, theType, buffer, index = 0, clamp = false) {
	  return packArrayTo([value], theType, buffer, index, clamp);
	}

	/**
	 * Pack a number as a array of bytes.
	 * @param {number} value The number to pack.
	 * @param {!{bits:number,
	 *   fp: (boolean|undefined),
	 *   signed: (boolean|undefined),
	 *   be: (boolean|undefined)}} theType The type definition.
	 * @param {boolean} [clamp=false] True to clamp ints on overflow.
	 * @return {!Array<number>} The packed value.
	 * @throws {Error} If the type definition is not valid.
	 * @throws {RangeError} On overflow.
	 * @throws {TypeError} If input is not valid.
	 */
	function pack(value, theType, clamp = false) {
	  /** @type {!Array<number>} */
	  let output = [];
	  packTo(value, theType, output, 0, clamp);
	  return output;
	}

	/**
	 * Pack a array of numbers as a array of bytes.
	 * @param {!(Array<number>|TypedArray)} values The values to pack.
	 * @param {!{bits:number,
	 *   fp: (boolean|undefined),
	 *   signed: (boolean|undefined),
	 *   be: (boolean|undefined)}} theType The type definition.
	 * @param {boolean} [clamp=false] True to clamp ints on overflow.
	 * @return {!Array<number>} The packed values.
	 * @throws {Error} If the type definition is not valid.
	 * @throws {RangeError} On overflow.
	 * @throws {TypeError} If input is not valid.
	 */
	function packArray(values, theType, clamp = false) {
	  /** @type {!Array<number>} */
	  let output = [];
	  packArrayTo(values, theType, output, 0, clamp);
	  return output;
	}

	/**
	 * Unpack a array of numbers from a byte buffer.
	 * @param {!(Uint8Array|Array<number>)} buffer The byte buffer.
	 * @param {!{bits:number,
	 *   fp: (boolean|undefined),
	 *   signed: (boolean|undefined),
	 *   be: (boolean|undefined)}} theType The type definition.
	 * @param {number} [start=0] The buffer index to start reading.
	 * @param {number} [end=buffer.length] The buffer index to stop reading.
	 * @param {boolean} [safe=false] If set to false, extra bytes in the end of
	 *   the array are ignored and input buffers with insufficient bytes will
	 *   output a empty array. If safe is set to true the function
	 *   will throw a 'Bad buffer length' error.
	 * @param {boolean} [clamp=false] True to clamp ints on overflow.
	 * @return {!Array<number>}
	 * @throws {Error} If the type definition is not valid
	 * @throws {RangeError} On overflow
	 */
	function unpackArray(buffer, theType, start = 0, end = buffer.length, safe = false, clamp = false) {
	  /** @type {!Array<number>} */
	  let output = [];
	  unpackArrayTo(buffer, theType, output, start, end, safe, clamp);
	  return output;
	}

	/**
	 * Unpack a number from a byte buffer.
	 * @param {!(Uint8Array|Array<number>)} buffer The byte buffer.
	 * @param {!{bits:number,
	 *   fp: (boolean|undefined),
	 *   signed: (boolean|undefined),
	 *   be: (boolean|undefined)}} theType The type definition.
	 * @param {number} [index=0] The buffer index to read.
	 * @param {boolean} [clamp=false] True to clamp ints on overflow.
	 * @return {number}
	 * @throws {Error} If the type definition is not valid
	 * @throws {Error} On bad buffer length.
	 * @throws {RangeError} On overflow
	 */
	function unpack(buffer, theType, index = 0, clamp = false) {
	  return unpackArray(buffer, theType, index, index + Math.ceil(theType.bits / 8), true, clamp)[0];
	}

	/**
	 * Throw a error with information about the problem.
	 * @param {!Object} err The Error object that is being raised.
	 * @param {*} value The value that caused the error.
	 * @param {number} index The index of the value that caused the error.
	 * @throws {RangeError|TypeError|Error} A Error with a message.
	 * @private
	 */
	function throwValueError_(err, value, index) {
	  err.message = err.constructor.name + ' at index ' + index + ': ' + value;
	  throw err;
	}

	/**
	 * Unpack a array of numbers to a typed array.
	 * All other unpacking functions are interfaces to this function.
	 * @param {!(Uint8Array|Array<number>)} buffer The byte buffer.
	 * @param {number} start The buffer index to start reading.
	 * @param {number} end The buffer index to stop reading.
	 * @param {number} offset The number of bytes used by the type.
	 * @param {boolean} safe True for size-safe buffer reading.
	 * @throws {Error} On bad buffer length, if safe.
	 * @private
	 */
	function getUnpackLen_(buffer, start, end, offset, safe) {
	  /** @type {number} */
	  let extra = (end - start) % offset;
	  if (safe && (extra || buffer.length < offset)) {
	    throw new Error('Bad buffer length');
	  }
	  return end - extra;
	}

	/**
	 * Return a parser for int, uint or fp numbers.
	 * @param {number} bits The number of bits.
	 * @param {boolean|undefined} fp True for fp numbers, false otherwise.
	 * @param {boolean|undefined} signed True for signed ints, false otherwise.
	 * @param {boolean|undefined} clamp True to clamp ints on overflow, false otherwise.
	 * @return {!Object}
	 * @private
	 */
	function getParser_(bits, fp, signed, clamp) {
	  if (fp) {
	    validateFloatType(bits);
	  } else {
	    validateIntType(bits);
	  }
	  if (fp && bits === 16) {
	    return new IEEE754Buffer(5, 11);
	  } else if (fp && bits == 32) {
	    return new IEEE754Buffer(8, 23);
	  } else if (fp && bits == 64) {
	    return new IEEE754Buffer(11, 52);
	  }
	  return new IntParser(bits, signed, clamp);
	}

	/**
	 * The type definition error message.
	 * @type {string}
	 * @private
	 */
	const TYPE_ERR = 'Unsupported type';

	/**
	 * Validate the type definition of floating-point numbers.
	 * @param {number} bits The number of bits.
	 * @throws {Error} If the type definition is not valid.
	 * @private
	 */
	function validateFloatType(bits) {
	  if (!bits || bits !== 16 && bits !== 32 && bits !== 64) {
	    throw new Error(TYPE_ERR + ': float, bits: ' + bits);
	  }
	}

	/**
	 * Validate the type definition of integers.
	 * @param {number} bits The number of bits.
	 * @throws {Error} If the type definition is not valid.
	 * @private
	 */
	function validateIntType(bits) {
	  if (!bits || bits < 1 || bits > 53) {
	    throw new Error(TYPE_ERR + ': int, bits: ' + bits);
	  }
	}

	var byteData = /*#__PURE__*/Object.freeze({
		__proto__: null,
		pack: pack,
		packArray: packArray,
		packArrayTo: packArrayTo,
		packString: packString,
		packStringTo: packStringTo,
		packTo: packTo,
		unpack: unpack,
		unpackArray: unpackArray,
		unpackArrayTo: unpackArrayTo,
		unpackString: unpackString
	});

	/*
	 * Copyright (c) 2017-2019 Rafael da Silva Rocha.
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining
	 * a copy of this software and associated documentation files (the
	 * "Software"), to deal in the Software without restriction, including
	 * without limitation the rights to use, copy, modify, merge, publish,
	 * distribute, sublicense, and/or sell copies of the Software, and to
	 * permit persons to whom the Software is furnished to do so, subject to
	 * the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be
	 * included in all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 *
	 */


	/**
	 * A class to perform low-level reading of RIFF/RIFX files.
	 */
	class RIFFFile {
	  constructor() {
	    /**
	     * The container identifier.
	     * 'RIFF', 'RIFX' and 'RF64' are supported.
	     * @type {string}
	     */
	    this.container = '';
	    /**
	     * The main chunk size, in bytes.
	     * @type {number}
	     */
	    this.chunkSize = 0;
	    /**
	     * The format identifier.
	     * @type {string}
	     */
	    this.format = '';
	    /**
	     * An object representing the signature of all chunks in the file.
	     * @type {{
	      chunkId: string,
	      chunkSize: number,
	      format: string,
	      chunkData: {start: number, end: number},
	      subChunks: Array
	      }|null}
	     */
	    this.signature = null;
	    /**
	     * @type {number}
	     * @protected
	     */
	    this.head = 0;
	    /**
	     * @type {
	      {bits: number, be: boolean, signed: boolean, fp: boolean}
	     }
	     * @protected
	     */
	    this.uInt32 = {
	      bits: 32,
	      be: false,
	      signed: false,
	      fp: false
	    };
	    /**
	     * The list of supported containers.
	     * Any format different from RIFX will be treated as RIFF.
	     * @type {!Array<string>}
	     * @protected
	     */
	    this.supported_containers = ['RIFF', 'RIFX'];
	  }

	  /**
	   * Read the signature of the chunks in a RIFF/RIFX file.
	   * @param {!Uint8Array} buffer The file bytes.
	   * @protected
	   */
	  setSignature(buffer) {
	    this.head = 0;
	    this.container = this.readString(buffer, 4);
	    if (this.supported_containers.indexOf(this.container) === -1) {
	      throw Error('Not a supported format.');
	    }
	    this.uInt32.be = this.container === 'RIFX';
	    this.chunkSize = this.readUInt32(buffer);
	    this.format = this.readString(buffer, 4);
	    // The RIFF file signature
	    this.signature = {
	      chunkId: this.container,
	      chunkSize: this.chunkSize,
	      format: this.format,
	      subChunks: this.getSubChunksIndex_(buffer),
	      chunkData: {
	        start: 0,
	        end: this.chunkSize
	      }
	    };
	  }

	  /**
	    * Find a chunk by its fourCC_ in a array of RIFF chunks.
	    * @param {string} chunkId The chunk fourCC_.
	    * @param {boolean} multiple True if there may be multiple chunks
	    *    with the same chunkId.
	    * @return {Object}
	    * @protected
	    */
	  findChunk(chunkId, multiple = false) {
	    /** @type {!Array|null} */
	    let chunks = this.signature.subChunks;
	    /** @type {!Array<!Object>} */
	    let chunk = [];
	    for (let i = 0; i < chunks.length; i++) {
	      if (chunks[i].chunkId == chunkId) {
	        if (multiple) {
	          chunk.push(chunks[i]);
	        } else {
	          return chunks[i];
	        }
	      }
	    }
	    if (chunkId == 'LIST') {
	      return chunk.length ? chunk : null;
	    }
	    return null;
	  }

	  /**
	   * Read bytes as a string from a RIFF chunk.
	   * @param {!Uint8Array} bytes The bytes.
	   * @param {number} maxSize the max size of the string.
	   * @return {string} The string.
	   * @protected
	   */
	  readString(bytes, maxSize) {
	    /** @type {string} */
	    let str = '';
	    str = unpackString(bytes, this.head, this.head + maxSize);
	    this.head += maxSize;
	    return str;
	  }

	  /**
	   * Read a number from a chunk.
	   * @param {!Uint8Array} bytes The chunk bytes.
	   * @return {number} The number.
	   * @protected
	   */
	  readUInt32(bytes) {
	    /** @type {number} */
	    let value = unpack(bytes, this.uInt32, this.head);
	    this.head += 4;
	    return value;
	  }

	  /**
	   * Return the sub chunks of a RIFF file.
	   * @param {!Uint8Array} buffer the RIFF file bytes.
	   * @return {!Array<Object>} The subchunks of a RIFF/RIFX or LIST chunk.
	   * @private
	   */
	  getSubChunksIndex_(buffer) {
	    /** @type {!Array<!Object>} */
	    let chunks = [];
	    /** @type {number} */
	    let i = this.head;
	    while (i <= buffer.length - 8) {
	      chunks.push(this.getSubChunkIndex_(buffer, i));
	      i += 8 + chunks[chunks.length - 1].chunkSize;
	      i = i % 2 ? i + 1 : i;
	    }
	    return chunks;
	  }

	  /**
	   * Return a sub chunk from a RIFF file.
	   * @param {!Uint8Array} buffer the RIFF file bytes.
	   * @param {number} index The start index of the chunk.
	   * @return {!Object} A subchunk of a RIFF/RIFX or LIST chunk.
	   * @private
	   */
	  getSubChunkIndex_(buffer, index) {
	    /** @type {!Object} */
	    let chunk = {
	      chunkId: this.getChunkId_(buffer, index),
	      chunkSize: this.getChunkSize_(buffer, index)
	    };
	    if (chunk.chunkId == 'LIST') {
	      chunk.format = unpackString(buffer, index + 8, index + 12);
	      this.head += 4;
	      chunk.subChunks = this.getSubChunksIndex_(buffer);
	    } else {
	      /** @type {number} */
	      let realChunkSize = chunk.chunkSize % 2 ? chunk.chunkSize + 1 : chunk.chunkSize;
	      this.head = index + 8 + realChunkSize;
	      chunk.chunkData = {
	        start: index + 8,
	        end: this.head
	      };
	    }
	    return chunk;
	  }

	  /**
	   * Return the fourCC_ of a chunk.
	   * @param {!Uint8Array} buffer the RIFF file bytes.
	   * @param {number} index The start index of the chunk.
	   * @return {string} The id of the chunk.
	   * @private
	   */
	  getChunkId_(buffer, index) {
	    this.head += 4;
	    return unpackString(buffer, index, index + 4);
	  }

	  /**
	   * Return the size of a chunk.
	   * @param {!Uint8Array} buffer the RIFF file bytes.
	   * @param {number} index The start index of the chunk.
	   * @return {number} The size of the chunk without the id and size fields.
	   * @private
	   */
	  getChunkSize_(buffer, index) {
	    this.head += 4;
	    return unpack(buffer, this.uInt32, index + 4);
	  }
	}

	var riffFile = /*#__PURE__*/Object.freeze({
		__proto__: null,
		RIFFFile: RIFFFile
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(riffFile);

	var require$$1 = /*@__PURE__*/getAugmentedNamespace(byteData);

	Object.defineProperty(parser, "__esModule", {
	  value: true
	});
	parser.parseAni = void 0;
	var riff_file_1 = require$$0;
	var byte_data_1 = require$$1;
	var DWORD = {
	  bits: 32,
	  be: false,
	  signed: false,
	  fp: false
	};
	function parseAni(arr) {
	  var riff = new riff_file_1.RIFFFile();
	  riff.setSignature(arr);
	  var signature = riff.signature;
	  if (signature.format !== "ACON") {
	    throw new Error("Expected format. Expected \"ACON\", got \"" + signature.format + "\"");
	  }
	  // Helper function to get a chunk by chunkId and transform it if it's non-null.
	  function mapChunk(chunkId, mapper) {
	    var chunk = riff.findChunk(chunkId);
	    return chunk == null ? null : mapper(chunk);
	  }
	  var metadata = mapChunk("anih", function (c) {
	    var words = byte_data_1.unpackArray(arr, DWORD, c.chunkData.start, c.chunkData.end);
	    return {
	      cbSize: words[0],
	      nFrames: words[1],
	      nSteps: words[2],
	      iWidth: words[3],
	      iHeight: words[4],
	      iBitCount: words[5],
	      nPlanes: words[6],
	      iDispRate: words[7],
	      bfAttributes: words[8]
	    };
	  });
	  if (metadata == null) {
	    throw new Error("Did not find anih");
	  }
	  var rate = mapChunk("rate", function (c) {
	    return byte_data_1.unpackArray(arr, DWORD, c.chunkData.start, c.chunkData.end);
	  });
	  // chunkIds are always four chars, hence the trailing space.
	  var seq = mapChunk("seq ", function (c) {
	    return byte_data_1.unpackArray(arr, DWORD, c.chunkData.start, c.chunkData.end);
	  });
	  var lists = riff.findChunk("LIST", true);
	  var imageChunk = lists === null || lists === void 0 ? void 0 : lists.find(function (c) {
	    return c.format === "fram";
	  });
	  if (imageChunk == null) {
	    throw new Error("Did not find fram LIST");
	  }
	  var images = imageChunk.subChunks.slice(0, metadata.nFrames).map(function (c) {
	    if (c.chunkId !== "icon") {
	      throw new Error("Unexpected chunk type in fram: " + c.chunkId);
	    }
	    return arr.slice(c.chunkData.start, c.chunkData.end);
	  });
	  var title = null;
	  var artist = null;
	  var infoChunk = lists === null || lists === void 0 ? void 0 : lists.find(function (c) {
	    return c.format === "INFO";
	  });
	  if (infoChunk != null) {
	    infoChunk.subChunks.forEach(function (c) {
	      switch (c.chunkId) {
	        case "INAM":
	          title = byte_data_1.unpackString(arr, c.chunkData.start, c.chunkData.end);
	          break;
	        case "IART":
	          artist = byte_data_1.unpackString(arr, c.chunkData.start, c.chunkData.end);
	          break;
	        // Unexpected subchunk
	      }
	    });
	  }
	  return {
	    images: images,
	    rate: rate,
	    seq: seq,
	    metadata: metadata,
	    artist: artist,
	    title: title
	  };
	}
	parser.parseAni = parseAni;

	var __read = commonjsGlobal && commonjsGlobal.__read || function (o, n) {
	  var m = typeof Symbol === "function" && o[Symbol.iterator];
	  if (!m) return o;
	  var i = m.call(o),
	    r,
	    ar = [],
	    e;
	  try {
	    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	  } catch (error) {
	    e = {
	      error: error
	    };
	  } finally {
	    try {
	      if (r && !r.done && (m = i["return"])) m.call(i);
	    } finally {
	      if (e) throw e.error;
	    }
	  }
	  return ar;
	};
	var __spread = commonjsGlobal && commonjsGlobal.__spread || function () {
	  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
	  return ar;
	};
	Object.defineProperty(dist, "__esModule", {
	  value: true
	});
	var convertAniBinaryToCSS_1 = dist.convertAniBinaryToCSS = void 0;
	var parser_1 = parser;
	var JIFFIES_PER_MS = 1000 / 60;
	// Generate CSS for an animated cursor.
	//
	// This function returns CSS containing a set of keyframes with embedded Data
	// URIs as well as a CSS rule to the given selector.
	function convertAniBinaryToCSS(selector, aniBinary) {
	  var ani = readAni(aniBinary);
	  var animationName = "ani-cursor-" + uniqueId();
	  var keyframes = ani.frames.map(function (_a) {
	    var url = _a.url,
	      percents = _a.percents;
	    var percent = percents.map(function (num) {
	      return num + "%";
	    }).join(", ");
	    return percent + " { cursor: url(" + url + "), auto; }";
	  });
	  // CSS properties with a animation type of "discrete", like `cursor`, actually
	  // switch half-way _between_ each keyframe percentage. Luckily this half-way
	  // measurement is applied _after_ the easing function is applied. So, we can
	  // force the frames to appear at exactly the % that we specify by using
	  // `timing-function` of `step-end`.
	  //
	  // https://drafts.csswg.org/web-animations-1/#discrete
	  var timingFunction = "step-end";
	  // Winamp (re)starts the animation cycle when your mouse enters an element. By
	  // default this approach would cause the animation to run continuously, even
	  // when the cursor is not visible. To match Winamp's behavior we add a
	  // `:hover` pseudo selector so that the animation only runs when the cursor is
	  // visible.
	  var pseudoSelector = ":hover";
	  // prettier-ignore
	  return "\n    @keyframes " + animationName + " {\n        " + keyframes.join("\n") + "\n    }\n    " + selector + pseudoSelector + " {\n        animation: " + animationName + " " + ani.duration + "ms " + timingFunction + " infinite;\n    }\n   ";
	}
	convertAniBinaryToCSS_1 = dist.convertAniBinaryToCSS = convertAniBinaryToCSS;
	function readAni(contents) {
	  var _a;
	  var ani = parser_1.parseAni(contents);
	  var rate = (_a = ani.rate) !== null && _a !== void 0 ? _a : ani.images.map(function () {
	    return ani.metadata.iDispRate;
	  });
	  var duration = sum(rate);
	  var frames = ani.images.map(function (image) {
	    return {
	      url: curUrlFromByteArray(image),
	      percents: []
	    };
	  });
	  var elapsed = 0;
	  rate.forEach(function (r, i) {
	    var frameIdx = ani.seq ? ani.seq[i] : i;
	    frames[frameIdx].percents.push(elapsed / duration * 100);
	    elapsed += r;
	  });
	  return {
	    duration: duration * JIFFIES_PER_MS,
	    frames: frames
	  };
	}
	/* Utility Functions */
	var i = 0;
	var uniqueId = function () {
	  return i++;
	};
	function base64FromDataArray(dataArray) {
	  return window.btoa(String.fromCharCode.apply(String, __spread(dataArray)));
	}
	function curUrlFromByteArray(arr) {
	  var base64 = base64FromDataArray(arr);
	  return "data:image/x-win-bitmap;base64," + base64;
	}
	function sum(values) {
	  return values.reduce(function (total, value) {
	    return total + value;
	  }, 0);
	}

	const CSS_PREFIX = "#webamp";
	const mapRegionNamesToIds = {
	    normal: "mainWindowClipPath",
	    windowshade: "shadeMainWindowClipPath",
	    equalizer: "equalizerWindowClipPath",
	    equalizerws: "shadeEqualizerWindowClipPath",
	};
	const mapRegionNamesToMatcher = {
	    normal: "#main-window:not(.shade)",
	    windowshade: "#main-window.shade",
	    equalizer: "#equalizer-window:not(.shade)",
	    equalizerws: "#equalizer-window.shade",
	};
	const numExIsUsed = (skinImages) => Boolean(skinImages.DIGIT_0_EX);
	const FALLBACKS = {
	    MAIN_BALANCE_BACKGROUND: "MAIN_VOLUME_BACKGROUND",
	    MAIN_BALANCE_THUMB: "MAIN_VOLUME_THUMB",
	    MAIN_BALANCE_THUMB_ACTIVE: "MAIN_VOLUME_THUMB_SELECTED",
	    EQ_MAXIMIZE_BUTTON_ACTIVE: "EQ_MAXIMIZE_BUTTON_ACTIVE_FALLBACK",
	};
	// Cursors might appear in context menus which are not nested inside the window layout div.
	function normalizeCursorSelector(selector) {
	    return `${
    // TODO: Fix this hack
    // Maybe our CSS name spacing should be based on some other class/id
    // than the one we use for defining the main div.
    // That way it could be shared by both the player and the context menu.
    selector.startsWith("#webamp-context-menu") ? "" : CSS_PREFIX} ${selector}`;
	}
	const getCssRules = createSelector_1(getSkinImages, getSkinCursors, getSkinLetterWidths, getSkinRegion, (skinImages, skinCursors, skinGenLetterWidths, skinRegion) => {
	    if (!skinImages || !skinCursors) {
	        return null;
	    }
	    const cssRules = [];
	    Object.keys(imageSelectors).forEach((imageName) => {
	        const imageUrl = skinImages[imageName] || skinImages[FALLBACKS[imageName]];
	        if (imageUrl) {
	            imageSelectors[imageName].forEach((_selector) => {
	                const selector = _selector; // .replace(":active", ".active");
	                cssRules.push(`${CSS_PREFIX} ${selector} {background-image: url(${imageUrl})}`);
	            });
	        }
	    });
	    if (skinGenLetterWidths != null) {
	        LETTERS.forEach((letter) => {
	            const width = skinGenLetterWidths[`GEN_TEXT_${letter}`];
	            const selectedWidth = skinGenLetterWidths[`GEN_TEXT_SELECTED_${letter}`];
	            cssRules.push(`${CSS_PREFIX} .gen-text-${letter.toLowerCase()} {width: ${width}px;}`);
	            cssRules.push(`${CSS_PREFIX} .selected .gen-text-${letter.toLowerCase()} {width: ${selectedWidth}px;}`);
	        });
	    }
	    Object.entries(cursorSelectors).forEach(([cursorName, cursorSelector]) => {
	        const cursor = skinCursors[cursorName];
	        if (cursor == null) {
	            return;
	        }
	        const cursorRules = cursorSelector
	            .map(normalizeCursorSelector)
	            .map((selector) => {
	            switch (cursor.type) {
	                case "cur":
	                    return `${selector} {cursor: url(${cursor.url}), auto}`;
	                case "ani": {
	                    try {
	                        return convertAniBinaryToCSS_1(selector, cursor.aniData);
	                    }
	                    catch (e) {
	                        console.error(e);
	                        return null;
	                    }
	                }
	            }
	        })
	            .filter(Boolean);
	        cssRules.push(...cursorRules);
	    });
	    if (numExIsUsed(skinImages)) {
	        // This alternate number file requires that the minus sign be
	        // formatted differently.
	        cssRules.push(`${CSS_PREFIX} .webamp-status #time #minus-sign { top: 0px; left: -1px; width: 9px; height: 13px; }`);
	    }
	    for (const [regionName, polygons] of Object.entries(skinRegion)) {
	        if (polygons) {
	            const matcher = mapRegionNamesToMatcher[regionName];
	            const id = mapRegionNamesToIds[regionName];
	            cssRules.push(`${CSS_PREFIX} ${matcher} { clip-path: url(#${id}); }`);
	        }
	    }
	    return cssRules.join("\n");
	});
	const getClipPaths = createSelector_1(getSkinRegion, (skinRegion) => {
	    const clipPaths = {};
	    for (const [regionName, polygons] of Object.entries(skinRegion)) {
	        if (polygons) {
	            const id = mapRegionNamesToIds[regionName];
	            clipPaths[id] = polygons;
	        }
	    }
	    return clipPaths;
	});
	function Skin() {
	    const cssRules = useTypedSelector(getCssRules);
	    const clipPaths = useTypedSelector(getClipPaths);
	    if (cssRules == null) {
	        return null;
	    }
	    return (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx(Css, { id: "webamp-skin", children: cssRules }), jsxRuntimeExports.jsx(ClipPaths, { children: clipPaths })] }));
	}

	var css_248z = "#webamp #balance {background-image: url(data:image/png;base64,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)}\n#webamp #balance::-webkit-slider-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALBAMAAAC9q6FRAAAAFVBMVEUAAAALDxYvL0RKWmt7hJStvMTa5+opTTwbAAAAMUlEQVQI12NQFAQBIQaxNBBIZGALBYIQAyAtKiqKlwapM2RgcwEBQwZhYxAwZICaBwCdgQ6Jd297uQAAAABJRU5ErkJggg==)}\n#webamp #balance::-moz-range-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALBAMAAAC9q6FRAAAAFVBMVEUAAAALDxYvL0RKWmt7hJStvMTa5+opTTwbAAAAMUlEQVQI12NQFAQBIQaxNBBIZGALBYIQAyAtKiqKlwapM2RgcwEBQwZhYxAwZICaBwCdgQ6Jd297uQAAAABJRU5ErkJggg==)}\n#webamp #balance:active::-webkit-slider-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALBAMAAAC9q6FRAAAAFVBMVEUAAAALDxYZICovL0RKWmva5+r///+U4Y9MAAAAMUlEQVQI12MwFAQBYQbRUBAQZGBlAAIWBiQ6ISEBKw2SV4TTIi4gIMhgJKQopCgoDAB2aAh/NddRQgAAAABJRU5ErkJggg==)}\n#webamp #balance:active::-moz-range-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALBAMAAAC9q6FRAAAAFVBMVEUAAAALDxYZICovL0RKWmva5+r///+U4Y9MAAAAMUlEQVQI12MwFAQBYQbRUBAQZGBlAAIWBiQ6ISEBKw2SV4TTIi4gIMhgJKQopCgoDAB2aAh/NddRQgAAAABJRU5ErkJggg==)}\n#webamp .actions #previous {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASCAMAAACHObUhAAAASFBMVEUfHzEgHzIgIDMhITQiITMiITQiIjUjIzYjJDgkIzckIzgkJDklJTolJjsmJTsmJjtKWmtSY3N7hJSElKWXqLmttca9ztbv//8qmLzOAAAAcklEQVQY022QMQ7DMAwDj7KQvqD/f2UXD2YGN43cWAuNo0wI1JvNjE8SGzwiwf/Ywwr2k1M6HFMPwDgvvxnoU2DN6fl7xh7X/YJx4a/yte67FaPmV2O5pxi5ZN/Gt5+rI998DD/ridxiLAQiHBKEJYGaT1TOJE+BDpf2AAAAAElFTkSuQmCC)}\n#webamp .actions #previous.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASBAMAAABCyVggAAAAElBMVEUICBBKWmtSa3Nje4R7jJytvcYAUCbCAAAAS0lEQVQI12NgwA1MXKDACMhxDYWCEBAHJuOChcPAAsQwDmOIi4MoEocRieMgiMRhROYEInNckTkugcgcVzgnNASIwRxTZOcoIHwDAI4lI4lOrG7eAAAAAElFTkSuQmCC)}\n#webamp .actions #play {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASCAMAAACHObUhAAAARVBMVEUmJTsmJTwnJz0nKD4oJz4oKD8pKUAqKUEqKUIqKkMrK0QrLEQsK0MsK0QsK0ZKWmtSY3N7hJSElKWXqLmttca9ztbv//93JWkaAAAAcElEQVQY022QQQ7FIAhEHzJpL/Dvf8y/MBG70VZbYEPeAIGxH0nEX5QEB4L+xj26CnkMXus2QJv92hXXrETluHnT07MqrnV6UbSfcY6rY+N+/1KUUTBl9Nl/vtxow5+PRyKif+1xpZhmmIEZMxFh+AXgtiNLLYv6agAAAABJRU5ErkJggg==)}\n#webamp .actions #play.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASBAMAAABCyVggAAAAElBMVEUICBBKWmtSa3Nje4R7jJytvcYAUCbCAAAARUlEQVQI12NgwA1MXKDACMhxDYWCEBAHJuOChcOAzGFkQOYIMiBzwDw4B8RDcEKROKFIykKRDAhFMjoUbqkpsnMUEL4BAGRUIvLymjxCAAAAAElFTkSuQmCC)}\n#webamp .actions #pause {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASCAMAAACHObUhAAAARVBMVEUsLEUsLEYtLUctLkguLUguLkkvL0ovMEswL0swL0wwMEsxMU0xMU4xMk0yMU5KWmtSY3N7hJSElKWXqLmttca9ztbv//90IK75AAAAY0lEQVQYGW3BwQ3DQAwDwRVPsBtI/3UGfpCBDfiT00x9GPjbiI2dhvAnjsSsuV3AARdwAMHNo1kBmhVuEjMxEyOLkcRMzMRIze3kcfJyQyA8wqsaO2zSdtitogqqqEoJIgTLP/lyHlITiB2JAAAAAElFTkSuQmCC)}\n#webamp .actions #pause.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASBAMAAABCyVggAAAAElBMVEUICBBKWmtSa3Nje4R7jJytvcYAUCbCAAAAOUlEQVQI12NgwA1MXKDACMhxDYWCEBAHJuOCyXFgYAEyYBzBEBdGUdpzXENDXEJDwRxTZOcoIHwDAEquItl9JSARAAAAAElFTkSuQmCC)}\n#webamp .actions #stop {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASCAMAAACHObUhAAAAP1BMVEUyMU4yMk8zM1AzNFE0M1E0M1I0NFE0NFM1NVQ1NlQ2NVM2NVQ2NlVKWmtSY3N7hJSElKWXqLmttca9ztbv//8mgTHJAAAAXElEQVQYGW3BQQ7DMAwDwRUttPf+/6FFD2SBBLnYmqkPA38bcbBpCJs4ErPm8uPxAgLNrbmtcBGjiFHETIyWGFmMIkarubzZNAQIm8YOB7cdTqsooERWkEXJheoPfCIcRKB1vkQAAAAASUVORK5CYII=)}\n#webamp .actions #stop.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASBAMAAABCyVggAAAAElBMVEUICBBKWmtSa3Nje4R7jJytvcYAUCbCAAAAMklEQVQI12NgwA1MXKDACMhxDYWCEBAHJuOChQPWC+MwCgoKitKBA3YamGOK7BwFhG8A34IfFkPmwnYAAAAASUVORK5CYII=)}\n#webamp .actions #next {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASBAMAAABCyVggAAAALVBMVEUICBA2NlU2NlY3N1c4N1g4OFk4OFpKWmtSY3N7hJSElKWXqLmttca9ztbv//8TuYuxAAAAaUlEQVQI12M4AwenDjCcewcDJ4Ccu1BwZzkmp/zu3evld+9MB3Oqa+9e3wfnbEfm7K5F5mxH5uxD5rxF4uxDNuAtEufd3bv33kE4cFcDOWdWzoSC6QkMK8rhgIFB0MjY2NjFxSU0NJQBAK7vnSRnYMknAAAAAElFTkSuQmCC)}\n#webamp .actions #next.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAElBMVEUICBBKWmtSa3Nje4R7jJytvcYAUCbCAAAATElEQVQI12NgwAVMXCDAWYGBwTUUChyAbKi4CyabAcSAshlZXBxEYWwBJLYgCxJbAIktisQOQbBFkfSGINihLi6uoSC2KZIbFOCuBwDE5iIH3QcLbQAAAABJRU5ErkJggg==)}\n#webamp #eject {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQBAMAAADgw5IVAAAAIVBMVEU4OFk4OFo5OVpKWmtSY3N7hJSElKWXqLmttca9ztbv//8Mnk1wAAAAVUlEQVQI12PogIM2hq5VMNDC0DUTCmYEQ9iWCPbkYgTbvNwSxp5cXl4MY5uXlwMlwOxZYBPh5sDNnGwMAlA2UHl5FYZ6uNuCGTpSQ6EgmEGISQkKmAB+iFckwoyJQwAAAABJRU5ErkJggg==)}\n#webamp #eject.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQBAMAAADgw5IVAAAAElBMVEUICBBKWmtSa3Nje4R7jJytvcYAUCbCAAAATUlEQVQI12NgwAVMXCDAWYGBwTUUChyAbJAgCxBD2Q4CCDajIAuM7SAoKABjMwoKAiXAbIhJMPVgAGY7gO2EsoHKBUXR1ZsiqVeAuxIAu8seNVNafDwAAAAASUVORK5CYII=)}\n#webamp #main-window {background-image: url(data:image/png;base64,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)}\n#webamp .media-info #stereo {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAMCAMAAACpx0YDAAAAk1BMVEUlJTklJTolJjsmJTsmJjsnJz0nJz4oJz4oKD8pKUApKkEqKUEqKUIqKkEqKkIrK0MrK0QsK0QsLEUtLUYtLUguLUcuLUguLkcvL0U8PFNDQ1hJSWFQUGNaWm9lZXZpaXpvcH5wcX9xcYF3d4Z5eYh8e4x+fpCBgY+Dg5KKipaLi5mMi5mRkZ2bmqaioqypqbKqqrTexa8FAAAAvUlEQVQYGQXBQW4aURAFwOrPIJCjEY5Hytq73P9giCj2YBTy+7mqfkUTiURmtUiqRY8eJBJRFAGULIemEipBQySka0xQL+9Bz4FEwbBUj9PP+ffF22P1cXbc1+fnsv7br5ExRr9mz911M99Op+d2P1+22/yRitHttr9eUPP5cH+w/3ftQ4cFx9VX93a7nD+ObufVn/nbdSRqk4qWSCfERHS1USq6ggwkKTCMLBERpCuoVAQdYyAl4dASNJjKN1/Kh0LDHtt2AAAAAElFTkSuQmCC)}\n#webamp .stop .media-info #stereo.selected {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAMCAMAAACpx0YDAAAAk1BMVEUlJTklJTolJjsmJTsmJjsnJz0nJz4oJz4oKD8pKUApKkEqKUEqKUIqKkEqKkIrK0MrK0QsK0QsLEUtLUYtLUguLUcuLUguLkcvL0U8PFNDQ1hJSWFQUGNaWm9lZXZpaXpvcH5wcX9xcYF3d4Z5eYh8e4x+fpCBgY+Dg5KKipaLi5mMi5mRkZ2bmqaioqypqbKqqrTexa8FAAAAvUlEQVQYGQXBQW4aURAFwOrPIJCjEY5Hytq73P9giCj2YBTy+7mqfkUTiURmtUiqRY8eJBJRFAGULIemEipBQySka0xQL+9Bz4FEwbBUj9PP+ffF22P1cXbc1+fnsv7br5ExRr9mz911M99Op+d2P1+22/yRitHttr9eUPP5cH+w/3ftQ4cFx9VX93a7nD+ObufVn/nbdSRqk4qWSCfERHS1USq6ggwkKTCMLBERpCuoVAQdYyAl4dASNJjKN1/Kh0LDHtt2AAAAAElFTkSuQmCC)}\n#webamp .media-info #stereo.selected {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAMCAMAAACpx0YDAAABXFBMVEUA/wAD+AQG7gkG8QkH4wwI6A0K2g8K3xAL2xIL4hIM2RMN2BUN3RUOxRYO1RUQ0xkSxh0SzBwS0RwTuR0VvCEVxSEapCkbnyscrSwfczAgpzIhkzQinDUlJTklJTolJjslJzklKDolLjslkzomJjsmKTsmKzsmLDomMjsmMjwmNjsmOjsmRjsmWjwmdzsmiDwnJz0nKT0nLT0nNT0nOj0nQjwnTj0nYj0oKz4oLT8oND4oOT8oRz4oSz4oZT8pL0ApO0ApTEApTkApZkApZ0EqMEIqMkMqPEEqTEMqT0IqUEIqZUIqZkMqa0IrLkIrL0UrNEQrPEQrPUQrQEMrSkUrYkQrfUQsMUQsNkUsQkQsS0MsTkYsVEQsWEUsYEYsZ0UtLkUtLkctL0gtMEYtM0YtM0gtNEgtNUctNkctOUYtP0YtQkctR0YtS0Yti0cuLUguLkcuMUcuM0cuN0c2LFEQAAABDklEQVQYGQXBvVHDQBCA0W/3TrJkBBhmPAQkBATUQA+0QEROT9RBwtADCQQkDMaBLIOk8+nnlvfkUfYq0HKgtzIMMIBBxNpR/+Qsy+pcxLnj46iFiKrquJeuw/xp51QvayeuxkSikk+YHuFmxLdetRH//HXnCIuoxiSxpzS1hFfRlw+/DrxWO1YdqdgXV9vd4mrZmWgl9UdaUnD/LX4bo9ue9O8/N/lnkFG0g+tquwGSy5dUR1BlABio2fmmoVzL00XfZMluV027WL3tK8DkIWtUJRBMJGCMQKQve5vT4C2tRDd5LSaS2wEDcjqz2cbZM0l7Nh/KHiPCCERIKfjR8EmnEApqAGMASDD9uiHBP3bmjPqWVRjwAAAAAElFTkSuQmCC)}\n#webamp .media-info #mono {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAMCAMAAACk2TZEAAAAclBMVEUtLUguLkcuLkgvL0ovMEswL0swMEsxMU0xMU4xMk0xMk4yMU4yMk8zM1AzNFE0M1E0M1I0NFE0NFI0NVM3N1E8PFNJSWFQUGdSUmtaWm9gYHZuboJ2dol8e4x+fpCGhpeOjp2VlaOdnaqlpbKsrLetrbnuzsEEAAAAp0lEQVQYGQXBQU4bURQEwOrvkcA4iRS4/+VYwI6VEyTPzGuq8ppyrjHKIVPQsSnnGpReZkQnQzfImKJUU8saWUEWQZyV0g7dqs6X349tf7qfN3uf6t/N/imLDL7WY1/Xx8d1m/+X6+P9+U1XSADNH8Xkr9aqmTW7fY5+r9v9OHp859f9i7z2vJwZpUdUjWpqSZQytlYJUrOpWaR1FhhgbcLQRiEFTH4AmtR0pKKbMGAAAAAASUVORK5CYII=)}\n#webamp .stop .media-info #mono.selected {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAMCAMAAACk2TZEAAAAclBMVEUtLUguLkcuLkgvL0ovMEswL0swMEsxMU0xMU4xMk0xMk4yMU4yMk8zM1AzNFE0M1E0M1I0NFE0NFI0NVM3N1E8PFNJSWFQUGdSUmtaWm9gYHZuboJ2dol8e4x+fpCGhpeOjp2VlaOdnaqlpbKsrLetrbnuzsEEAAAAp0lEQVQYGQXBQU4bURQEwOrvkcA4iRS4/+VYwI6VEyTPzGuq8ppyrjHKIVPQsSnnGpReZkQnQzfImKJUU8saWUEWQZyV0g7dqs6X349tf7qfN3uf6t/N/imLDL7WY1/Xx8d1m/+X6+P9+U1XSADNH8Xkr9aqmTW7fY5+r9v9OHp859f9i7z2vJwZpUdUjWpqSZQytlYJUrOpWaR1FhhgbcLQRiEFTH4AmtR0pKKbMGAAAAAASUVORK5CYII=)}\n#webamp .media-info #mono.selected {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAMCAMAAACk2TZEAAABJlBMVEUA/wAD9wUG8QkI6A0J5g4L4hIM2RMM3xMN2BUN3RUP2hgQ0xkSzBwS0RwVvCEVxSEWySIZwicZwigcrSwgpzIhkzQkpzkmdzsmiDwnmD0olD8qa0IrfUQtL0gtMUgtQkcti0cuLkcuMEguMUcuNkguOkkuR0ovL0ovMEsvM0ovNEkvNEovNkovOkovPUovUUkvXEovZkswMEswM0swNUswNkwwP0swQkowTEswT0swUEwwVkswZkswaksxNU0xN04xP04xRE0xZk4xbk0yNU8yNk4yNlAyOE8yQ00yTk4yU04yVk4yY04yaU8ybE8yek4zNFEzOVEzPVAzQ1EzRlEzTFEzU1AzXlE0M1E0NFE0NFI0NVM0NlE0NlI0OlE0PlI0QVI0RlJbMtAUAAAA50lEQVQYGQXBTW7CMBCA0W9mrJKEAKr4WXXTu3TXG3Dc7nuOIiohKLHjGJzpe3IUreZ6BxJkIIHjnlxxbDBVs7EXaVV1u1UtpehDAdloNB3Xo6p1XbF7CN2kj0YFEYmasmUz05yb3KjmfW5LcBnEvk7L1N8P4UwvN+HwS/c+iqIrAT68XTyvq7frZNt6W33+nUAFHADAHAyw+ZsA6tXx0AxtaHTz/Nm9dGGxqef9bkKOntdRUh8BIFGIOD42KSBLn6WtFQAWN7zBL68plYDXQVwYASABGTy6h4DMOHEOyATMOHWmJh7hH8HfcsJFco7ZAAAAAElFTkSuQmCC)}\n#webamp #time #minus-sign {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAABCAYAAAAW/mTzAAAAF0lEQVQYV2OUUNT8/+L+dQYJRU0GGA0AVz4HY4h207oAAAAASUVORK5CYII=)}\n#webamp #time.countdown #minus-sign {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAABCAYAAAAW/mTzAAAAEElEQVQYV2Nk+MHwnwENAAAjgQH5sdp7TQAAAABJRU5ErkJggg==)}\n#webamp .digit-0 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAFklEQVQI12OYGtrA4ACEHh0ORNFA9QAiPQsl393R7gAAAABJRU5ErkJggg==)}\n#webamp .digit-1 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAE0lEQVQI12PsYNjBwMDgwEgCDQAItwpIh/66WgAAAABJRU5ErkJggg==)}\n#webamp .digit-2 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAH0lEQVQI12OYGtrAwMDgwNDR4YBCg8RBLI8OVBooDgAebgr//9NFIgAAAABJRU5ErkJggg==)}\n#webamp .digit-3 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAGElEQVQI12OYGtrAwMDgwNDR4YBC4xEHAB3uCv9NUBWtAAAAAElFTkSuQmCC)}\n#webamp .digit-4 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAGklEQVQI12Pw6HBgAEF0emqoAwMDkO7owKABD8wKi451feQAAAAASUVORK5CYII=)}\n#webamp .digit-5 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAIElEQVQI12OYGtrA4MDAwODRgUqDxBmArI4OBxQaKA4AHm4K/5vyk78AAAAASUVORK5CYII=)}\n#webamp .digit-6 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAH0lEQVQI12OYGtrA4MDAwODRgUqHgsUdgHwHFBqoHgAbbgr/DdfRzgAAAABJRU5ErkJggg==)}\n#webamp .digit-7 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAFklEQVQI12MMZdBmYGBwYOxg2EEsDQDjggmI1L+I9wAAAABJRU5ErkJggg==)}\n#webamp .digit-8 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAFklEQVQI12OYGtrA4ACEHh0OKDQecQArbgt/wD0r9gAAAABJRU5ErkJggg==)}\n#webamp .digit-9 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAIUlEQVQI12OYGtrA4ACEHh0OKPTUUAcGBiDd0YFKA9UDACFuCv9mR03UAAAAAElFTkSuQmCC)}\n#webamp .play #play-pause {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJAgMAAACd/+6DAAAACVBMVEUAAAAA6AAYISlH3xqZAAAAH0lEQVQI12Po8GhgYAhgYOgIAdKhQDrUAUKHQMU9GgCL+gfA1jUO8AAAAABJRU5ErkJggg==)}\n#webamp .pause #play-pause {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJAgMAAACd/+6DAAAACVBMVEUAAAAA6AAYISlH3xqZAAAAGklEQVQI12Po6GhgAIGQVgeGEFYHFBoEgPIAiaIHnsCfw8kAAAAASUVORK5CYII=)}\n#webamp .stop #play-pause {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJAgMAAACd/+6DAAAACVBMVEUAAAAA6AAYISlH3xqZAAAAGUlEQVQI12Po6GhgAIHWkAYG1hBUGgSA8gCN1wfe41RVhgAAAABJRU5ErkJggg==)}\n#webamp #work-indicator {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAFVBMVEUAAAAAAAAA6AARQDMYISlODwD/KDN/MQZsAAAAAXRSTlMAQObYZgAAAB9JREFUCNdjUFI2ZmBgQCYFBQWBpKOLCJwdGpaGSgIAfI8Fm6vX5/8AAAAASUVORK5CYII=)}\n#webamp #work-indicator.selected {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAD1BMVEUAAAAAAAARQDMYISn/KDPWqFE6AAAAAXRSTlMAQObYZgAAABpJREFUCNdjUFJgAAJkUlAARBoaINguDmgkAEabAvbVxDW5AAAAAElFTkSuQmCC)}\n#webamp .playlist-top-left-fill {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAAAWUlEQVRIS2PU1nL+z0BjwFhRPoH2ltjZJAwTS+TllWjvk7ZyX9pb0jeRDhFvYqBDe5+kxzjR3hK6xImKqibtfUKXzEiXsosulowWkKRUQYx0SV10sYQeqQsAf0Ul/5LwY0QAAAAASUVORK5CYII=)}\n#webamp .playlist-top-left-spacer {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAAAWUlEQVRIS2PU1nL+z0BjwFhRPoH2ltjZJAwTS+TllWjvk7ZyX9pb0jeRDhFvYqBDe5+kxzjR3hK6xImKqibtfUKXzEiXsosulowWkKRUQYx0SV10sYQeqQsAf0Ul/5LwY0QAAAAASUVORK5CYII=)}\n#webamp .playlist-top-right-fill {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAAAWUlEQVRIS2PU1nL+z0BjwFhRPoH2ltjZJAwTS+TllWjvk7ZyX9pb0jeRDhFvYqBDe5+kxzjR3hK6xImKqibtfUKXzEiXsosulowWkKRUQYx0SV10sYQeqQsAf0Ul/5LwY0QAAAAASUVORK5CYII=)}\n#webamp .playlist-top-right-spacer {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAAAWUlEQVRIS2PU1nL+z0BjwFhRPoH2ltjZJAwTS+TllWjvk7ZyX9pb0jeRDhFvYqBDe5+kxzjR3hK6xImKqibtfUKXzEiXsosulowWkKRUQYx0SV10sYQeqQsAf0Ul/5LwY0QAAAAASUVORK5CYII=)}\n#webamp .playlist-top-left {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAMAAABPqWaPAAAA/FBMVEUdHS0dHS4eHi8fHyIfHzAfHzIgHzIgITMhITQiITQiIjUjIzYkIzckIzgkJDckJDkkJSklJTomJTsmJjsmJjwnJz0oJz4oKD8pKUApKUEqKUEqKkEqKkIrKUIrKkMrK0QsK0MsK0QsLEMsLEUtLUYuLUcuLUguLkcuLkkvL0owMEsxMEwyMU0yMU4yMk8zM1A0MCw0MlA0NFE1NFM2NVM2NVQ2NlU3NVY3N1Y4N1c4N1g4OFg5OFk6OVo7Olw8O109O149PF9FQTtnXEJqanpra3xsbHxsbH1tbX9uboFwb4NxcYZzcoh0c4p0dIp1dYx4do54d5CGd02OkZDLe86vAAAAvUlEQVQYGQXBMUodUBQFwDnnXdMq2LuWQFy/nYVFQAIu47+bmSDSpFFtmyRp452oiIhIIjJ8Nr/2nD1Nc5ppJS3idhVqIRii93wDABiC79/PAACDdbwAABju8fAXAMBg7/EKAGBYu/YFAGAg9+0DAMDgNo/XSdLm5JxW0sH+JE2TJm1a9aQI2NiSYD0Mlj9JEiKSkAzY/XrKnPQkpydJUoDrXnvFQlIAu67aLVDAfbAgu4k1gHX/pZ2cJKme/xmiNhnfUYYUAAAAAElFTkSuQmCC)}\n#webamp .playlist-top-title {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAUCAMAAABMHminAAABd1BMVEUdHS0dHS4eHS4eHi8fHyIfHzAfHzIgHzIgITMhITQiITQiIjUjIzYkIzckIzgkJDkkJSklJTomJTsmJjsmJjwnJz0oJz4oKD8pJ0ApKUApKUEpKkEqKUEqKkEqKkIrKUIrKkMrK0QrLEQsK0MsK0QsLEUtLUYtLkctLkguLUcuLUguLkcuLkkvL0ovMEsvMSUwL0swMEsxMEwyMU0yMU4yMk8zM1A0MCw0MlA0M1E0NFE1NFM2NVM2NVQ2Nk82NlU3NVY3N1Y4N1c4N1g4OFg5OFM5OFk6OVo7Olo7Olw8O109O149O2A9PFs9PF89PGA+PGBAQFhCQV9FQTtIR2ZMTGFVVG1WVmNbWnZfYGpgX3dlZXdlZnRnXEJnaHZoaHhpaXtqanpraoBra3xsbHxsbH1tbX9uboFwb4NxcYZzcohzc4p0c4p0dIp1dYZ1dYx4do54d5B5eIl9fY6FhJSGd02LjJqOkZCQj6CXlqeioq+srbettMQFH6KtAAADiklEQVQYGQXBTa8VVhkG0PW8+1zuRYuN4gfgpV4q3PpRNTFGw8Q4MlaJsUPjr/D3OHJgjANnNR2hxA6MNW00mKJAC0YSSZu2SkmBnrP361o5gsY09UL3Ymrd3bq7073obgAQSoUYJJKoqIgoY0DYvAgaaFbr1tA0mrawAABKQghBEIkBQXTY3AG7mrpZbfYylzVr123ZrWx199TLWsBYo6vYJEYqoySxFzV6qEqhGIUCGmKJXlqoKRoaWbozWwKzDYvVDYDRmFmAAGTDFVZtdbN69WQuvey6Lbu1stOzrc4uC1ClspkjGTGGSmKjkhpJRUnsbfdeYvNz9399xXze354/8dqFT7z+rfGnb9fNunTr3/393H3Djzz53Qsn/ea7h6x//Hnxs32eXL14fPeVTD8++ejlH+7fvPXC9vc/2P5Bff7SuzeOT5tv1UXsro+XfnpGVZ1DPqqTJzz99AOQI8zz6bPB/pcOSLv5cj1rwC9v738F9Djog/VqX7ycN8PQ+Nzp7Y23//f+a++5fV2cq9pc85iu/1w44my9B+yfpc6s7f7pd8xxyXavpxMXbWvC5T0LJd/MvcNv/P3uhU/d/1dYo8Hel7cPPwDaNer4+OvEEwe7+XHvB+aTp3Dqow99Ju733mMW559555UZ+MKZu3/E0odz69Bfp9ehFN6+M+0dLcHg+Ph4c8Zb8GiOD058bAuLf34tzmc85dwNHp+8d6R481WrFvyKcPo7/nKwDvsgWYMYz3iAz5697Tk05p4Pn7X5hYdXiAeffNcXH2qK/9694OyTa763/2nuXbx+JBu6uxZgcOqU+G0uH371DWh1yS08Gs+ZtwtYV65elZ8AW61ZbfYyl6V3utc0s9U9Wy89QWpupMgoNoY9STKSUpWNFAmbLnIENHNaTbduk2XRemltsRoARFEiBokkKpJEijEgFOgGQNC0poGGBQBIWokINAgJLABsXgQ0DaZumoamad1YAEChCCEIIWFAkA6bO2CZui169uq1dPeu25q92k6bbWXtohlzswbJJjJkZCTJiCqjYkRJ2IMC5gTFAugpFhB2pa01emCOXVplQ0iNClAMelDAahTYjQHoDkEIMaJmM2Z3d7cFU2CubtoEWExMAAkKbOYEizRTLLSYbQ0SCd0WkvRCNVitgVAI0OwgR9CYJqvp7ja17tZtac3S3QCQiJJIIpLEEBWkjAHh/7B25tuthDwsAAAAAElFTkSuQmCC)}\n#webamp .playlist-top-right {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAMAAABPqWaPAAABNVBMVEULDxYMDAwOFQsUFBQdHS0dHS4eHS4eHi8fEQofHyIfHzAfHzIgHzIhITQhIjQiITQiIjUjIzYkIzckIzgkJDklJTomJjsmJjwnJz0oJz4oKD8pKUApKUEpKkEqKUEqKkEqKkIrKUIrKkMrK0QsK0QsLEUtLUYtLkguLUcuLUguLkcuLkkvL0ovMSUwL0swMEsxMEwyMU0yMU4yMk0yMk8zM1A0LhA0MlA0NFE1NFM2NVM2NVQ2NlU3NVY3N1Y4N1c4OFg5OFk5OVc6OVo7Olo7Olw8O109O149PFs9PF89PGA+PGBFQTtGQh9ORDBQPx5YVjxnXEJqanpra3xsbHxsbH1tbX9uboFwTyxwb4NxcYZzcohzk5p0c4p0dIp1dYx4do54d5B4h4yGd02LjJqNcTiOkZC/uXdbAAABJElEQVQYGQXBsWpTYRyH4ff7cig5a8FCKAge2slNqFvoBai4e5d26h0UrCnYpaCSrbV2cA0k5/97fZ42WYVR1ZCgZWC4REGDSEAVuRpeUoayyiqddU6IdIGeDkCHBQFgpo2s1dXR/mj/66BvHm/h4vSunocv/67XrpYsWb69L5yAadsaw+IV8hMAAl8/Tbtxe/tahhtAAKAXuBt30KCfnUEHAAL8HXcnQKcfH2huAPje4fO0/fNjujC0kbXMNwds75ydHr/B+9NNntuHlJZWYpWpOcb4NDxYpUTVSAzzx03RoQECIAQomGG4RESDSFCuABheUv2AVTFV2ScamnRCNYiYKAsUhA5g0pqNRpgVADq01gCaxNIgAMODVZJz+F2WWisA+A8o2vB09xIFIgAAAABJRU5ErkJggg==)}\n#webamp .selected .playlist-top-left-fill {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAAAWklEQVRIS2PU1nL+z0BjwFhRPoH2ltjZJAwTS+TkVWnvkzfnqmhvyf///2lviaujNe0tWTcplfaW0CVOVFQ1ae8TumRGupRddLFktIAkpQpipEvqoosl9EhdAAvFKfTd8tQbAAAAAElFTkSuQmCC)}\n#webamp .selected .playlist-top-left-spacer {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAAAWklEQVRIS2PU1nL+z0BjwFhRPoH2ltjZJAwTS+TkVWnvkzfnqmhvyf///2lviaujNe0tWTcplfaW0CVOVFQ1ae8TumRGupRddLFktIAkpQpipEvqoosl9EhdAAvFKfTd8tQbAAAAAElFTkSuQmCC)}\n#webamp .selected .playlist-top-right-fill {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAAAWklEQVRIS2PU1nL+z0BjwFhRPoH2ltjZJAwTS+TkVWnvkzfnqmhvyf///2lviaujNe0tWTcplfaW0CVOVFQ1ae8TumRGupRddLFktIAkpQpipEvqoosl9EhdAAvFKfTd8tQbAAAAAElFTkSuQmCC)}\n#webamp .selected .playlist-top-right-spacer {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAAAWklEQVRIS2PU1nL+z0BjwFhRPoH2ltjZJAwTS+TkVWnvkzfnqmhvyf///2lviaujNe0tWTcplfaW0CVOVFQ1ae8TumRGupRddLFktIAkpQpipEvqoosl9EhdAAvFKfTd8tQbAAAAAElFTkSuQmCC)}\n#webamp .selected .playlist-top-left {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAMAAABPqWaPAAAA/FBMVEUdHS0dHS4eHi8eHyUfHzAfHzIgHzIgITMhITQiITQiIjUjIzYkIzckIzgkJDckJDkkJSklJTomJTsmJjsmJjwnJz0oJz4oKD8pKUApKUEqKUEqKkEqKkIrKUIrKkMrK0QsK0MsK0QsLEMsLEUtLUYuLUcuLUguLkcuLkkvL0owMEsxMEwyMU0yMU4yMk8zM1A0MlA0NFE1NFM2NVM2NVQ2NlU3NVY3N1Y4N1c4N1g4OFg5OFk6OVo7Olw8O109O149PF9FQTtqanpra3xsbHxsbH1tbX9uboFwb4NxcYZzbFJzcoh0c4p0dIp1dYx4do54d5CukmXsznr///9ua7yBAAAAvklEQVQYGQXBsU0dQBAFwHnvFsshErl7MQVQtlsgIEGWSMkd/FvPBJEmjWrbJEkbr0RFRFQSkeG9+bHn7GmaNtNKWsTtKsRCMETv+QQAMASfbwEAGKyjAACGezx8AwAY7D2eAQAMa9e/nwAAA7m//gAAGNzm8TJJ2jTntJIO9itpmjRp06onRcDGlgTrYbD8TpIQlYRkwO7HU+akTU5PkqQA1712xUJSALuu2C1QwH2wILuJNYB1/6adnCSpnv/+0TYBQOmyqAAAAABJRU5ErkJggg==)}\n#webamp .selected .playlist-top-title {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAUCAMAAABMHminAAABd1BMVEUdHS0dHS4eHS4eHi8eHyUfHzAfHzIgHzIgITMhITQiITQiIjUjIzYkIzckIzgkJDkkJSklJTomJTsmJjsmJjwnJz0oJz4oKD8pJ0ApKUApKUEpKkEqKUEqKkEqKkIrKUIrKkMrK0QrLEQsK0MsK0QsLEUtLUYtLkctLkguLUcuLUguLkcuLkkvL0ovMEswL0swMEsxMEwyMU0yMU4yMk8zM1A0MlA0M1E0NFE1NFM2NVM2NVQ2NlU3NVY3N1Y4N1c4N1g4OE44OFg5OFM5OFk6OVo7Olw8O109O149O2A9PF89PGA+PGA/QitAQFhCQV9FQTtIR2ZMTGFVVG1WVmNbWnZgX3djY3BlZXdlZnRqanpraoBra3xsbHxsbH1tbX9uboFwb4NxcYZzbFJzcohzc4p0c4p0dIp1dYZ1dYx4do54d5B9fY6FhJSLjJqQj6CXlqeioq+srbettMSukmW8u8XHx83KydLW1tzk5Ojsznry8vT////NCpc8AAADfklEQVQYGQXBS6tfBxUH0PXb5+Q+Y2oFI5ZoknpLiU8cCELopANJG+M38Ds48nM4ciw4cVJ0INhBK5T6KPVRChVFIzHUB4IQvYbEe+//7O1auQGDzWYaM81mzMyYmclMMzMAIJQKsZBIoqIioiwLhPUuGGDoMaNhGAyj0QAAJSGEICiJBYKYsD4EW9oMM3bTunVnm9G2zoWZ2UzrBpZepoo1saRSJYk1qmaxVIKiCgUMxIhpI6TFwCBtJttIYBuLpmcAUINOAwKQlTt07cww073Rbdo2o23d2Zlt9GSXBlSprNuSLLGUSmJRSZZURSTW3fo667edf+eO/pL3vrj/7mf3f/OVS29/df3Dwc0H9+dry3/eds/Zj1858oN7V9j+9Ivmm3uc/+rqC6c/yuYbR09+cnf//u9f3b3x6sWb6vmbj3/95eNcPLj8HC7er9e/taeqDpDz5XjftYMzkOfR15c5CPZvHRLu/3y5aYHv/XXvC2CWwzns387Nl+vPoQyeu3z+u6ePPnz3sb+/Lw6q1g9sTM4Ob/DMegpm/yq5ttv2P/XQbj1xvjdcPbTVBrevaJS8lNMrt985feb4vw/CZMD+586e/TcwPqBOTl4k/ubwYnc8HwZ2Z8c4ON+5Hk9n7ynN0ccfv7cFrh+c/hBtnt21j3pz5y2Iwj8eXdi/PqA4OTlZ9/wTnu7Ws6zn0Pzx83F9ucQBnh49uaL4yy91NXyflPX2vHO4Hc1h0oi84DE+uX/fLUCvHn3C+l2P7xD/u3zq+MJQ/OvRx1w7+6mX9z/Nk8O37glmphqwtKPPOPRaXvnISz+Dsd70AGfLLRf3A/Sd18jXgZ0xzNhN69ZmM9Nty4WZbUybDaS2VYosxWqxSpJKSiqXJCQsU+QGMGybHmbM2GjNmDZG0wMAoigRC4kkKpJEimWBUGAGAMEwhgEGGgCQjBIRGBASaACsdwHDgM0MzcAwjBk0AFAoQghCkbBAkAnrQ9DajGF20zNtZrYZ3dNjZ2yj07sYlm3thWSNLLKkkqSiSlWsEQkrFNANQgNMiwbCrozuZRZsyy6jshJSlQBFMSsBelBgqwJMF0EIUVHbsGwzMzMaNoGtZxgN0DR2ABIUWLrBUE2LxogevZBImNFIMo0a0GOAEBQwbJAbMNhs9DAzYzNmxow2hjYzAJCIkkgiksQiKkhZFgj/B6KI5O4cXV8dAAAAAElFTkSuQmCC)}\n#webamp .selected .playlist-top-right {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAMAAABPqWaPAAABI1BMVEUdHS0dHS4eHS4eHi8eHyUfHzAfHzIgHzIhITQhIjQiITQiIjUjIzYkIzckIzgkJDklJTomJjsmJjwnJz0oJz4oKD8pKUApKUEpKkEqKUEqKkEqKkIrKUIrKkMrK0QsK0QsLEUtLUYtLkguLUcuLUguLkcuLkkvL0owL0swMEsxMEwyMU0yMU4yMk0yMk8zM1A0LhA0MlA0NFE1NFM2NVM2NVQ2NlU3NVY3N1Y4N1c4OFg4QlY5OFk5OVc6OVo7Olo7Olw8O109O149PFs9PF89PGA+PGA/QitFQTtYVjxnXEJqanpra3xsbHxsbH1tbX9uboFwb4NxcYZzbFJzcoh0c4p0dIp1dYx4do54d5CNcTisrbeukmWwmV7O4tDsznr////5EmU+AAABC0lEQVQYGQXBMUpcYRiG0ef7708qu4mgxYCFVdbgtIGsIesLZAOuQ0GIlfXFMEMgTOXc7308p/Z2Y1Q1JGgMzAcUVIIIqsjjPKUNm912a+uWEBkCIwsAAwYBYKMmB3UP8Oeid65wW8/9Pn/274P7BeDbS+PXsnbHKmZN5B8ABNba9XJalbkCWgCOBvvLhxTMa2BggQSo5WMpGMzlTMUS+D+a293J2vk3zF8crPMVwBmt4wqWUN/T2rETu022GOM6X+1Womokhv7x1AwoQACEAIEN5gMiKkFEeQRgntLjglvHdOeSaCgZhC6ImCgLCsIAMF1lUcimADCgqgBKYmsQgPlqt8R73tpWcwMAn2oG882E0Lr4AAAAAElFTkSuQmCC)}\n#webamp .playlist-middle-left {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAdAgMAAADjkWVKAAAADFBMVEUAAAAdHS0pKUBqano8VvpZAAAAD0lEQVQI12OoilvCQGcMALzxKw1EtyFgAAAAAElFTkSuQmCC)}\n#webamp .playlist-middle-right {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAdAgMAAADX6KRWAAAADFBMVEUAAAAdHS0pKUBqano8VvpZAAAAEklEQVQI12OwmrXq1UuGIUICAIEjYC7HaOXEAAAAAElFTkSuQmCC)}\n#webamp .playlist-scrollbar-handle {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAASBAMAAACUbIJFAAAAG1BMVEUJAgJ1XCKNcTibgkmwmV6+sX3aypzy8vT06sbDyd/kAAAAKElEQVQI12NIAwKGJCWlAoakiHYHhqRGD/KJimYHhnQXFwEGBQYGBgB4dhfwKIryTQAAAABJRU5ErkJggg==)}\n#webamp .playlist-middle-right.winamp-active .playlist-scrollbar-handle {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAASBAMAAACUbIJFAAAAGFBMVEUgDABsURh1XCKNcTihhkuwmV7DrnXaypzxKekLAAAAKklEQVQI12MIDQ0NYAgUFCxgCHRLN2AITDQjnyhLMmAINzYWYFBgYGAAAIGKEsehmtv8AAAAAElFTkSuQmCC)}\n#webamp .playlist-bottom {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAmAgMAAABMq9iIAAAACVBMVEUnJz04OFh0dIo98+79AAAAGUlEQVQY02NYBQYNDKFg4DDiaHSAKzygAADHT1L3iexI4AAAAABJRU5ErkJggg==)}\n#webamp .playlist-bottom-left {background-image: url(data:image/png;base64,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)}\n#webamp .playlist-bottom-right {background-image: url(data:image/png;base64,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)}\n#webamp .playlist-visualizer {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAmBAMAAAB+CntdAAAAIVBMVEUAAAAAAAwAABAACCEAa7UYGCkZGSMnJz04OFhjnPd0dIrCNSsmAAAAW0lEQVQ4y2NYRQxYwNBBDGgYDsrKiQELGIgCCxhYiQFEm8aiSpRpTMSZxkmcaYxEus2MmqaNum0Yuk1FU0VTRFPF0sQSOwZBovNCFXEFF1HZuYBYZQNSWhLnNgDqVFE4O/Zo0wAAAABJRU5ErkJggg==)}\n#webamp #playlist-window-shade {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOAgMAAACnVF/TAAAADFBMVEUAAAAdHS0pKUBqano8VvpZAAAAHUlEQVQI12MIBQMHhv9gcIBhFRg0MFALwMyD2gMAcRoULw29bBMAAAAASUVORK5CYII=)}\n#webamp #playlist-window-shade .left {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOAgMAAACnVF/TAAAADFBMVEUAAAAdHS0pKUBqano8VvpZAAAAIklEQVQI12MIBQMHhvr/IHCAoWoVCDQwVDFAAMU01DyoPQAU7xeZEgCs6QAAAABJRU5ErkJggg==)}\n#webamp #playlist-window-shade .right {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAOCAMAAABaWb9VAAAANlBMVEUAAAALDxYMDAwdHS0fEQopKUA0LhBGQh9ORDBQPx5YVjxnXEJqanpwTyxzk5p5ip6NcTiOkZBJ6prXAAAAbUlEQVQoz6XSORaAIAxFUQjyFTEO+9+sBI82ajT6KgpukYAL5txgLbhoLbjLfpFGkkMGESHfk2kXGEtiegbA0MiGUEm5GKnjxCCdCMJykDZxekdKqASc5idSZ6nk5SznjXnvtY2p7/Lh9e3fcgVRHAwq+Kdj5gAAAABJRU5ErkJggg==)}\n#webamp #playlist-window-shade.selected .right {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAOCAMAAABaWb9VAAAAM1BMVEUAAAAdHS0pKUA0LhBFQTtPSThYVjxnXEJqanpzk5p5ip6NcTiOkZCsrbewmV7O4tD///+ogWxMAAAAbElEQVQoz52SSQ7AIAgAsQjU3f+/tpIup9ZI58SBCSs4M7BbcbBZcfDKHyXeCV7RQBgRWb6VfkmeQilBHa7CUnmmnBJRGdCIUGqqgnNFJWqPwqknXlIGtFxFG/O5tUyLs0TrxuLsLj+ub3/LA63jB8yJpQTsAAAAAElFTkSuQmCC)}\n#webamp #playlist-add-menu.selected .bar {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAA2AgMAAAB/8csyAAAADFBMVEUvL0RGUF2BkqXt//98VqXeAAAAFklEQVQI12NgYTBhKGHYQmNYArSFBQBn5SMZFZ1KogAAAABJRU5ErkJggg==)}\n#webamp #playlist-add-menu .add-url {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAWElEQVQI14WOsQ2AMAwEv3LPKBYTABsgorTfxCtkfRyUOIiGq04v62Sk4EKugxPZOmVzpxAGKeoupInwcWD6e3eP+9FpTnppOvm3g6307cTPinSsHcW+BDd3RTueo3YTtwAAAABJRU5ErkJggg==)}\n#webamp #playlist-add-menu .hover .add-url {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAV0lEQVQI14WOyQ2AMAwE9+MCEEkDdEAnGwmXACWQ9skFmx/zGq2skbEJLALBB8eOmF8S4n11zupOIxzW3Eg3Y3NAPu/Fv/tB77CU5OTfDtZSQpg6q/5/AGMtMU3PzLN0AAAAAElFTkSuQmCC)}\n#webamp #playlist-add-menu .add-dir {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAWUlEQVQI122OsQ2AMAwEv/qeUSwmADZARG6/iVdgfRrHScFVp5d1MlrxwN/BDY+kH/AQhQC7wYNSkOoGD2D6ulPzfnQsO2K6gtLifzuF4Uunfja0a08M51Z82fg51vPZ5kgAAAAASUVORK5CYII=)}\n#webamp #playlist-add-menu .hover .add-dir {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAV0lEQVQI12NQQgAGQQRgEAmFghBDBtFyGAhkEC1Lg4BUEDs0gDWAIZSBFcxmDQgIZWUNALMZGBBsZHEgG64eCuDmBLBC2QFgLQg2NnGQehBbBMkcYYT7AQVAL9EsAFyYAAAAAElFTkSuQmCC)}\n#webamp #playlist-add-menu .add-file {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAXklEQVQI12WOsQ2AMAwEv3LPKBYTABsgorTfxCuwPpZJDIJzc3q9LaMkB+o52FGt0xZ3CmGQpu5CmgjDgcffuXv2xx13wseIcPOW8c4lXH65xQa+d/JnRdnmjmKdkguiDDkEOAftpAAAAABJRU5ErkJggg==)}\n#webamp #playlist-add-menu .hover .add-file {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAXUlEQVQI12WOwQ2AMAwD/ckAiHYBNmATI+ERYARYnzQttBKXz8lyomDpYOogqbGvyPfLhnydlaO4aIRg4UbKjOFA9zF3//qN4oSPiHB5S6y5hdsvV2x4Pw135v7/A+euLyJ1PQpNAAAAAElFTkSuQmCC)}\n#webamp #playlist-remove-menu.selected .bar {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAABIAgMAAABO2aeDAAAADFBMVEUvL0RGUF2BkqXt//98VqXeAAAAFklEQVQI12NgYTBhKGHYMghgCdAlLABvUy/BqCAQTQAAAABJRU5ErkJggg==)}\n#webamp #playlist-remove-menu .remove-all {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAWklEQVQI13WOMQqAQBADp0rvUw5foP5AlG23MV/w+xbenSI41RBCCHtnI87GSrhyTIQxknUUwpJM3o4xPLnU/Om3nULYSmf1zJfzk2eS+LvTPxf2ZawU5qFzAa7rOIxN5zmHAAAAAElFTkSuQmCC)}\n#webamp #playlist-remove-menu .hover .remove-all {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAWElEQVQI13WO0QmAMAxE7ycDiO0CbuAmJ3gj6Ai6vtGmpD8+CDwuIRyWBFOComBfUe/OhnqdjeN1QTCTfW5uoPVcQOY+4XkfNDeK4eTg+MnpG7iX4c+c/R8m4y6+oJDkfgAAAABJRU5ErkJggg==)}\n#webamp #playlist-remove-menu .crop {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAR0lEQVQI12MIhYMQhvByGAhiCE+DglRHJLYhHjZDAlsCEIPYCWkJYABlswGZyOIw9QlA9fjNxMGGu9mQIdTZGAoMGZwE4QAAjAZBLD2pp6oAAAAASUVORK5CYII=)}\n#webamp #playlist-remove-menu .hover .crop {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAASElEQVQI12NQQgAGQQRgEAmFghBDBtFyGAhkEC1Lg4BUEBumCC+bIYA1AIhB7IDQADCAslmBTGRxmPoAoPpQ4swXQWILI9wPAIC4Ne4ZKh5qAAAAAElFTkSuQmCC)}\n#webamp #playlist-remove-menu .remove-selected {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAXUlEQVQI112OvQnDUBgDr1KfUR6ZIMkGxuZr1VgreP0Ufj/gqw4hhDgmO3UNNiqd80OFIEVnoyIp+HZCYOXS8NUfO41KMO7uOMMja7pXbhmT58783Dh+707j+5r8AVpzN34SgZTJAAAAAElFTkSuQmCC)}\n#webamp #playlist-remove-menu .hover .remove-selected {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAWklEQVQI102O0QmAMAwF388bQGwXcAM3iWBG0BF0fWOb+rxSOI40FIvAJFA82VfUe7ChXmfneN3hIJ3NGQbj6A6ox03XfNIdBku3drLT+LmpR40X4eW3Z9b/H/ZpLd3ACl8TAAAAAElFTkSuQmCC)}\n#webamp #playlist-remove-menu .remove-misc {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAYUlEQVQI102Ouw0CQRQDJ3JOKSsqADpAd3qpk3ULtE+wn7uJLGtkmXNzUL/Fl8qkv6gQpKg3KpKCRyYErl5a+fLXTqMcO4TeKIs4Hj04mtl27O1bw7/v7M+N8/OcNN6PzR8ABzaO5fDK/gAAAABJRU5ErkJggg==)}\n#webamp #playlist-remove-menu .hover .remove-misc {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAXklEQVQI102O7QmAMAxE788NILYLuIGbRPBG0BF0fZN+EB8UXo9LCLYES4KiwbmjvpMD9bk7V7ggkGJzusE4cwGZ+xue/UG4ySwmmhPyf88BE4c7UZt9Y/TLb8+a93++ly0VHemPIgAAAABJRU5ErkJggg==)}\n#webamp #playlist-selection-menu.selected .bar {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAA2AgMAAAB/8csyAAAADFBMVEUvL0RGUF2BkqXt//98VqXeAAAAFklEQVQI12NgYTBhKGHYQmNYArSFBQBn5SMZFZ1KogAAAABJRU5ErkJggg==)}\n#webamp #playlist-selection-menu .invert-selection {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAXUlEQVQI113OsQ3DQAwEwY0udymEK7DdgSCBKZO/FtS+k39K0EYDgiDI0e3kudpIz8aHNFKVNYJ0mbu5LIxHzP3ldSdIu4Q0LcvLZdrWNccIPe/0z8Hxe8+C76v7A5OQN+oVjwHMAAAAAElFTkSuQmCC)}\n#webamp #playlist-selection-menu .hover .invert-selection {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAXUlEQVQI103OwQ2AMAxDUV88AIIswAZs4kh4BBihrM+BhvafnqooKfYRlhE2984D8VSJaPfXlYgmyKSciGaKkzFZFP3Pd9eBRDSLgrppuSyLZXO8w4LgxDbtWcf/X0qvMI9I7cp+AAAAAElFTkSuQmCC)}\n#webamp #playlist-selection-menu .select-zero {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAYElEQVQI102OwQ2AMAwD/cqfUSomADZAVHz9oSuwPm4aAtfPyXKtoCYHzvtlx9mCa+kOgvIip7/hzWjp/HKl+hF57Mh7SGs2OqoL9z5jw30+cu8z+r+dvLmgbnNQsE7JAyOvPXLeVffRAAAAAElFTkSuQmCC)}\n#webamp #playlist-selection-menu .hover .select-zero {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAX0lEQVQI102Oyw2AMAxDc8kAiHYBNmATI+ERYARYn3wK4fXyZLlWZClkKqRxsK/S75dN+nUmhzspEJDhiJdOhX6Oyi21HyNP3D2EUrNjdSPcZzQ95kcefXi//Xbmuv8BohAy09WnmqwAAAAASUVORK5CYII=)}\n#webamp #playlist-selection-menu .select-all {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAUklEQVQI12MIhYMQhvByGAhiCE+DglRHEJshgSEByDYEshPAEMJOY0tgg7MTEOJAUaAOqDjUHKh6hBpk9Qw4xBOwmgN3syFDqLMxFBgyOAnCAQD0WT/cwFbKdgAAAABJRU5ErkJggg==)}\n#webamp #playlist-selection-menu .hover .select-all {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAVElEQVQI12NQQgAGQQRgEAmFghBDBtFyGAhkEC1Lg4BUEDs0lCGAISA0FMwOAEMIO5Q1gBXODkCIA0WBOqDiEABTj1CDrJ4Bh3gA1BwRJHOEEe4HAB23NNar7KHYAAAAAElFTkSuQmCC)}\n#webamp #playlist-close-button.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAD1BMVEU0MCxnXEKGd02ukmX///8tdlhEAAAAKElEQVQI12MwBgIDBkMBBkEgySjIaMBgIKAgACSFnARgbIg4RA1YPQCfwgXpyvsxsgAAAABJRU5ErkJggg==)}\n#webamp #playlist-window #playlist-shade-button.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAFVBMVEVFQTtPSThYVjxnXEKukmW0r4e+sX1mGpZYAAAANklEQVQI12NwAQIHBpe0tBQHBrfUtDAHBmdjY2MHBidjYyMgqWys5MDgqKSkCFQjKCACJEHqAT9eCss1JzHfAAAAAElFTkSuQmCC)}\n#webamp #playlist-window-shade #playlist-shade-button.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAFVBMVEVFQTtPSThYVjyukmW0r4e+sX3BsGNteY1yAAAAMUlEQVQI12MwBgIDBmMBAWEDBkORkEADBiPV0CAgmQom09KUgOJpaYogNYLMQBKkHgD8fwlqtoGUgQAAAABJRU5ErkJggg==)}\n#webamp #playlist-misc-menu.selected .bar {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAA2AgMAAAB/8csyAAAADFBMVEUvL0RGUF2BkqXt//98VqXeAAAAFklEQVQI12NgYTBhKGHYQmNYArSFBQBn5SMZFZ1KogAAAABJRU5ErkJggg==)}\n#webamp #playlist-misc-menu .misc-options {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAYElEQVQI112OsQ0CQQwEN9qcUiwqADpAvJxOctsC7RPgPyEmmmA9so7NS/0+eaozrJuaQBStUmOFkFVqJOJxIIwH8He/O6VGmLMDv7eO4/HEYfaJ8X9n/1w6HtehdL9sPlWoO+DkW3+GAAAAAElFTkSuQmCC)}\n#webamp #playlist-misc-menu .hover .misc-options {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAYElEQVQI102O2xGAIAwE7ycFOEIDdmAn54xXgpag7Rsembj8LMwSwJZgSVA0OXfUNzhQn3twNadIQehukO/VHaBsutOy6GmjjwdGT2PMaX3eNfmaLnfO3p1+Xn5z1vz/BxcjMYQLzDa1AAAAAElFTkSuQmCC)}\n#webamp #playlist-misc-menu .file-info {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAX0lEQVQI12WOsQ2AMAwEv/qeUSwmADZARGndxCuwPomJTcGlOb0+L6MkF+odnKg2aRuqoj9TNOluxu7mTnf+cvMf3s+d4WOG4JtTSVo4iHSN3PvR+XbyZkE51olgX5IHU8k5In6uSFkAAAAASUVORK5CYII=)}\n#webamp #playlist-misc-menu .hover .file-info {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAXUlEQVQI12WOyw2AMAxDffEAiHYBNmCTIJERYAS6Pq1LKBIvlycrPywDTAMkf9hX5BJsyNfZOZobarlB7s7qLqecv9w1of44IG9rCPacRtLDQbxukau/efrsmcf/N3ldLzugWMN5AAAAAElFTkSuQmCC)}\n#webamp #playlist-misc-menu .sort-list {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAXklEQVQI102OsQ2AQAwDXaVnlIgJgA0Qr7Ru3iuwPgVJ4Corsk/BaC7EXZwIJXNDCASNmI6gSFI2HSEjaZn53WlEd8rzbiGUR0ZlXzLZL5cHRPt/nv7ZMY41cexL8wCXGToqpM1dFQAAAABJRU5ErkJggg==)}\n#webamp #playlist-misc-menu .hover .sort-list {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAXUlEQVQI102O0Q2AMAhE74cBjO0CbuAmZyIj6Ai6vtBS6fvpCzmOYkuwJCganDvqOzhQn7tzuSsICuFOpaHS5mIq4cy5Z/9MELvwru62rZG3V2Xy0dPuupepZ83/f5v5MBfSedE0AAAAAElFTkSuQmCC)}\n#webamp #playlist-list-menu.selected .bar {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAA2AgMAAAB/8csyAAAADFBMVEUvL0RGUF2BkqXt//98VqXeAAAAFklEQVQI12NgYTBhKGHYQmNYArSFBQBn5SMZFZ1KogAAAABJRU5ErkJggg==)}\n#webamp #playlist-list-menu .new-list {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAYElEQVQI123OsQ2DQBBE0R9NTiknKgB3YIE2nYRpgfYd3PlEwI9esBot5+yg7n9fKqNroxwhRVejLClSNyLQbSm4+3E/dxrlmGC6I2dsJooe9jDGLzvz58b5WUeNfZn9AKbQNSZ12uygAAAAAElFTkSuQmCC)}\n#webamp #playlist-list-menu .hover .new-list {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAXklEQVQI112O0QmAMAxE7+cGENsF3MBNIngj6Ai6vk3T0uKDwCM5kmAbYBkgqXHuyG/nQH7u4HI3EaRYnW4MByEgvAwE4z/fD0TfSt4QLnp1Fye35iVrtZ+mPev4/wORlyvp1GfF2gAAAABJRU5ErkJggg==)}\n#webamp #playlist-list-menu .load-list {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAWklEQVQI12MIhYMQhvByGAhiCE+DglRHhvCEtAQGIGRLNQSzwQDOZkBiw8RBqhMg6uHmQNQwpAHlIOw0NhCGsUEQzk6AssG2pmGYA3ezIUOoszEUGDI4CcIBAJZqO86fMyFaAAAAAElFTkSuQmCC)}\n#webamp #playlist-list-menu .hover .load-list {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAV0lEQVQI12NQQgAGQQRgEAmFghBDBtFyGAhkEC1Lg4BUEDsgNIABCFmhbDCAsxmQ2DBxkOoAiHqYBTBzQoFyEHYoKwjD2CAIZwdA2WBbQWwRJHOEEe4HAE6RMXWXqbP6AAAAAElFTkSuQmCC)}\n#webamp #playlist-list-menu .save-list {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAYklEQVQI102OuQ3EQAwDGSl3KYIrsK+Dwy2UTrJswe1fsA880YCgCKltfqpn8VV50i+VhQD1VGEA3FPlQED0VBlAIyfAMfp7Z9zKWjsO7FjueDnThZj5e2f/nGqfc5K6j80fAQw6zDOWMCAAAAAASUVORK5CYII=)}\n#webamp #playlist-list-menu .hover .save-list {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAYElEQVQI102O0Q2AIAxE76cDGHEBN3CTM7Ej6Ai6vlwL4iMkL5ejBesA0wDFG8eG5ensWO4rOeUOgiTkdAqP3CK3cKXInFYLlv2+oL2FZqXXRr3ddT5nc+2NvPzmzOP/L+cIMJ5Oo2aQAAAAAElFTkSuQmCC)}\n#webamp #equalizer-window:not(.shade) {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAB0CAMAAACR8SbcAAAByFBMVEUNDRQPDxYQEBgRERoRERsREhsSEhsSEh0TEx4TFB0UEx4UFB8VFSEWFiIXFyQXGCQYGCUYGCYZGScZGigaGScaGigbGyobHCsbHCwcGyscGywcHCscHCwdHS0dHS4dHi0dHi4eHS0eHS4eHi0eHi8fHzAfIDEgHzEgIDIhITQhITUhIjQhIjYiITQiITYiIjUjIzYjIzgjJDcjJDgkIzckIzgkJDckJDklJTklJTolJTwlJjklJjslJjwmJTsmJTwmJjsnJz0nJz4nKD4oJz4oKD0oKD8pKT8pKUApKUIpKkEpKkIqKUEqKUIqKkEqKkMrK0QrLEMrLEQsK0MsK0QsLEMsLEUtLUYtLUgtLkctLkguLUcuLUguLkcuLkgvL0ovL0swL0owMEsxMU0xMU4xMk0xMk4yMU0yMU4yMk0yMk8yMlAzM1AzM1IzNFE0M1E0NFE0NFM1NVQ1NVY1NlM1NlQ2NVM2NVQ2NlM2NlQ2NlU3N1Y3N1c3N1g3OFc3OFg4N1c4N1g4OFc4OFg4OFk4OFo5OFk5OVk5OVpcXGRgX2pkZHFoaHhsbH5vb4JxcYZzc4hzc4p0c4p0dIt1dYzUqAzU1NnX192pRLExAAAnOklEQVQYGQTBP8+20ZoX5ON3rrXu+5m992QGDcRCDbEwRk0oJCEUJnZ8AkJDSIgyBXEKvgEJjXYUU4z/YkOHH0ALC8sJlSFSQGECGQviVicO2e/73Os6T44jAAIIEAgVhOoFMhEgFIJQQSy6KgJhVyYKhLC7ylBkCQXKufPuaoWBAiJCb00BgK5mptqI0aWB4O72oUEb3K4W7e5roNMYbhuM+K8BAAACAAAEAAAEAAACACAAQAAAAQSQCTIRkxEmAAAmk4FhMsBkYACAAQADAJgM/v7m78bUhEAgJBTVlcAh4ShRgpCdWbOlZOptikVRXqPYj11hs4SaImQ9tSkLekNO2/cgBGtSxeoKYQIwwQTuyoXhqe/1mIxh+LnxofGM0fph6LTJ3F4+3Opn3zaXnmK6ZxAkEBIydMUgl1CAGcFGzR5ErQu6ETratl9lZluLYYYMuYrMPFRtOD6PHBIJtWUXefAwEzNAAA+rx1q1UFPPnhkgzr2fD93xMNq0GUZjJISWfduAW6AEmCHIDIEhrCoZVTQkwA4keqJqikwVsafZHkj05wIFrLMxsZLGcbwBGKqyd7spZZZhngTAyMzyTI1HnvA85Soj3B8/P3tDZSxD9TOCGSb3s8od9n20dne3XZRKMBCZoKJQCjyKmKsqjDGhktk8VOgEs4rCitdjF6BIGCJyQURPw7m3gQyh09/KnieShGQNACF5rJqsus/M/ZkzW8gM+8v+OAfxPEN3B4wis+v7fia6uQwfdNFAIgkTaGaiCyydhDmEykTstM7dz65K2Jm2aDV717zcFYBZGwBGowZ64/Phc9bBRJBxEFvTT4IAgFYzw5OM3u+6c80YuD/Ojc/HNEtgNfRkGGqJ6bKGKOgukiDDDIJMSVAID4M6XYYREGRbaeMso3SUDu279tPAyyaoFRB1y4RnFYh9+iDB2NIDrBpVnpkBAGqS4VkzaHnaZATO+eyBxNMz9AWqZgwu6JsHqkWrIgaQAJmCqAScs0FvokzE7qqJ65nq+NTQFNAPm2oSUsA0MLwQa3XBsW8fYIiu2d2U50k9nVmSAYBhJuLpuLd9vzbDYH5+9vVBz2jTaj8YGtwuBm11cy+KwjCEAQgGDfi0sFXLkDBuYeznUKGSKtNUka0uXczePQQlgpQmrNHNcTd+AAXTT+0SiqkIDABE6Dxm2K9tdQ/Afbnb4Y6WqNtPMUzGxA5o9agX27RuhSIggBlkCAnrFNylTIoQ+5bUrvOAtxkqVYGiWbslPKsNOgyptbdk1sMuPmfjOcBE7fK6LXrHI0EoAGaQTK+VzHXne3QwUNd2PpSxpinzAAjdLnSv29/TerRSgAyBkCoSqhg0RGjBCOyebJ+uUqBo3WPvitdrP6Ogz60ESYR5aCPPSuB83OurQFDz7N5lZp6xhAEAA2aImUl5UusSwU+fvXw+SHEHADPNjBuGW+4mbgmPDb8BZAICoUQmSiYEAUJCECoIFipBeN1NFITAphhq3x13Fyg4FAZUK5CMotqkoAvo6uqZ3Z0xoKshk6v66Wqga3yGJszTDAba4JthzN/5nykEQAAiGGqkugWDAYEGYAio7hjM+N4EQAZaMar23dG7QOGcbg1QCoiJ7nlYBQpAdcXTlYyABhNVVae6AP10NkAKAA39zQAezwb+KwBAAABAAACAAABAAACZAIAAgExARgAZxQiZmAAATGBgZJgMMGAAAAMAAwAw8PfJrE0Gf49AJhSFCsERQV6kZELUZl7qKVWnCGJT26x5MVUZ2X0QVhchu5CwpoTj7nm+IGSy9dEV60Yp8+wJEwBm8iye5Zm7PdXXpDOZyc/92Xegp3XMrQ9GZwbzfdodt62rH3pmGE8xAYBQZDADzgW1d4s2JGxSMmWVT4OlxL7WuJ6+RjZaMGnIuppYTAIftw5kZOKm+iczT0oZtiAATCo7UfOMY9b3NSaMqM++g+7ElFE3gcpg7L7o2kAVpqEIAELSTFRVgI1RqQqRgAHzVIVTM01XSV26/rOtapPNX1SBSfmPmd5d0v78sgZu9r/bBWLyZ1epuxbW7zB04FcGwK/C7Sbtd32+88lLAjw/uBtSwxhuzcA8GPOUS5t1d/e+tyOgGCCADGqAcBqJ0UzFCLUjtiwZdJRUgZJ2FbiaDCrAmcYUzIMzxvk5xEBPpvYk65H1VDIDAjDGrE4/j9F7XfNtAPfrATzySNMbhgCZ3tgXl0taQBGQAbSKCT2gS4JSJkNQLnIresapUoxm2INNldgwQQPuLhQiG5/UY76CiQyvadAl3BYzABCRZz0xK1Oms8mY4VM/Dx/cagzq8zB4MPS6d8YFajM8aAUwQYgiUBH0ZcZqEkRGddFr96cqpa40S5G9rSrPc0tsNhkkhNe4ZMLMAHUEmSCZvrWxJDe1a3QCAHB3PHIHe/U1A5xdbcMaQ6X7BpiF+I6NLmjThkZTIUhgGEyiBKiSJEVGZZigpKjdOF2j6KFwp7dFm2HChALyfbzKmKUnkH2ByQTzurvuNQ9TirIAMJjhsmpi+CSFgImASXmme8oMQ3sw5MLtBXEBRGEwgwQlGSuRrLVUxTg20WOE3qX3dVXiUwWrAKWuZ++SUA10NcxqqKyRHccx+wOoYbtVd5/sKgo0AIRJeu1xk0n0pJv0BD9/PHc7pMcS2EAGdD0bdg2tMYyHUQABBFlFtrWqTgJNDZUK7GcUFjiGXo8FKva2G8JzBUUlqNaKJ2b4HHtyIBA367Fj7hOZ6R4AYMiozNh3zPTz+hSZGHyxPx8Qj+HezzYwGJ2+l763fdNX66ct2AgATKqEqMqEGNnRBSZh3yP77qhwulSXVZIdz/ZgE8NBEGDfTVgPG1xOYGJg7pth3yfj2UZhAGLE0J4MOt/qiUnGZNbjfD48GTJU+ci0wWSk6gPWlU8AEEUAoKpqRl7nlWQlxXulrqJKgjK0F0x8turyDLXD167NxeyNRJIpgbtVzcyzRoO9V/+EkCiZuYSsSpYOCACBwcINa25MIO6zwR3uDN/Xx0hVEKofh8tlTqOJBzYThCCKyqriFDJd1+t7I10mUV2buptKJqYaC1MG+cv8pwDiLwDgPyIAfx4I/DkBMvNnJRMwv5oA+BUAfilmwsz8G/6fajD4wQesplq85zsy08SgyiP2tb919qXaIGYTwIRJV3Jynlck6OWMF2AKXQVMTGKlFXqdMkXyR/7SH8VmCX/hf18E4j/8J7tia/x7/xzn8/oc68/9S5QJ+8/83y/sZ02e3/0Tlek14Vd/Chh++0+nZnrI/M6vRxsjzPeqTwZdoeqma17tQ+ma6Ax1qdf3rdGtdQ/csgGAUoup9UqwfZaOR0bUlLBN0tmquibvllhPrRgvzwJsFYFFsNaUV2LfvQIyzsfnQIx4fS7EUxolUgJAJxMxo5481VqMGOT9szMZ6lYXUa3z2HfUoxp8ZLrWZX1ryuOhygYgUEveZ1XtJYv1dGZWC2QycWvzunp1JbpMCLvmFS+xSSqfgzCJTEKroZecD8fNTd6IAj5TXnfP6l4UQUYAlMFMVx5ThtfPYRh4m/w4PraMB1Hsi6k8iHn5OdWpzmdfeWYANgAo5H3WeueVenf9Zn1Pf6iZar0IO58zd/eewioDWzqvZ9/XAae+6whKeT3P6smIqIjP+aA6E1CA0W5Jm2cJIEyAicwzUk1Gr5lvMSNpGM/mfAhLt8lTl0x6Kj1wX33re3WXMfXU0/iwAYBaWWet97vetar7F1P95BtpZWLi7jNiDYnqUqqrtqJ+SQrlPbAy7M/esLDypCDJcwgESKW+k82w+hEmQAAxsUyv9Ri6ZJBMOow8NfMNM/XUrEwXmaEyI/XERjz7+xn0NDgfG0CosPZa79cv8soh3535Id+TKSaE3VVZJgVFMTtE3ixBYqJ6mchaEpNhzOZwufs6BHa5+9Oe9/dAJtazTHR1AWAiYj2zn3Am1QwRZCz5cT5Ietm6sd31mJEaazqWz+v7vvIZJtPAbMhgQlbWWtm/rNdZL5zvevzm7rkmU0CVLrm7a7K6ZkpJrZ3yFlKjNBNyvCKYhIijpmZ7ZQ0m0Pfk5Xt7BZFZ1tVZpQCgy0OrfkDsb5gMk4HHBVPu7llPNR4yMTFZ0+p89v3OmpFW8GEjEyLBqpNf/qJ+sd97ZXrW6189v+Xn7GsyCdvnJGp2ZeqIIrLf388rL7EQ6aVVnErC8pxnxQ58nxxCCMI9NfGiBdZMsmzMJACjZM9YAMNrvskQA8q+g7BV3dOq9x3CuWIi34s1091mGIPeGIRJrexXvdf6xXu/s/CsH7/0/Vv9QQTuPtBpq9TddKm462UnK0BKFpbYmaTPZCKcu74gACJrEWRWoPQyQAJARjqypgGC90/7jpGMka8fjg/AxlDrM07n3H1Zz/umurV6GjBqI2GigKqv93t/rZzqm/v1492fNe65w0SVid2r1nj9fE+pVSzbWVlxqvknArHl/6yEks0/51wH/MsMIZz/975AJv6E9eTxVPlTAPwpCCb//wPA/8eovjJhMvj59bkbxyebT07fqpZt8/Lqj8y67uvH67tVMzBdBAJyXuv1Oq/1tfZvvV/vr/fO1/vrfGUfkrD/9u9N/a2/ZTF/I3/tDVrZqUxWznvVXvVKNvaraq3XOefgQK4vSVIzCRO4L0lkAp71rL0LAAAeup7UgrXK5rvYCCLF+2M751xxrxN2qderKlWnUifFjru+Xa0nQ6IYgFoqdb5Wfa3X69SrznnvnFR2PJjfr/sHMv/9f/c3RwWtms2+2z6xq/Zau/LazzmnzCruzSTn45zwJZGoEDW85iWsDLDMCtAwAFjumnU9xSKeeN2nC2xBOOfee6/7fn993RxFoZK1a5+qlaRmb3uAixmbAEFWfh/+KPucu646PfNXwH9z2+/7239Y4r8g/gbHX/M/kS75KxD/OKvA4z8B/qncd6z9078P/AsEMv828MdvqGfN828Cv96A8jvAnwCo3wV+XTyruh7/FvDHuTlux/w7wD87wZcf5/MfAP/HKmLZz18a/K9z7YuujDEbwESO+sNf/vZv/3K/99nblx+1P/nf7r/6+Zuf2bf+4L/8wy4T/0OFf/DXP/7hX1Wysut/eeedVe8Tx6dG/WMix5kD+Xr+GW+RCdZD/hh4E+Kxfw2VDcCfAADUr1VjobTm/2Kw7+nc2Vf+hfn5/mkt4P3TP53LZJXjo3LPP3rm5zxkdCUGnQJQVZx6fb1WUq8ria+z3uv9VPJG+4Ou3/N7/Od/E38df5U26GNn5bVzcm9k75Bs5x5JwnojTMnrvdebAm+Cx6pnQQIAAAD2slgZk7HwUnh3quzXI8j7p68jEfI+skxWnHuTE5XYQke1ew1sgJCElZx19v1KSE8leT/76zf7e82k93+bfv2PU+ofcP6hUfactWWIuF/8yP70fljhCzEx+foRRF7Y/f7uat4E6/GsZV8VAAAAQOapmBrPWo+M18PrMy+F10/w8yyQMD8xS8TNKz+uajWsu78fap63wWyAoE69ar+Wylfy5mdOOhSvp0x10wWl63RNtaib52XLrpyLr89Vz6KcuyVk4AtigbLTB7BYac+aPQEAAABQxYxnh/XAWj7rAs4nw5dnIWR8/WCNKfHm68fR59v6XEU9c9dPpVsBjMqq5F0rOUfeeMet13rnRb1musqU24X41FB2bOwstdwvOGLFIBIhAkQtBPVxIQCzEAAAAACMkTEJBLQXgnoJLBIIDvOU44v4uhZuVrXCpocoQA0ke16cuiEJeUu8Kkkn9amEvaZSOadSTc9WlVDlHEniC6nl3DfsNwESIRG81kZYMBUCAAAAAEPIjmERPKcQwTcBgRDvS23HFwEq9izKo/uRoVWA2ckKqTmrfDngnZzIya48hhp7S3oGKEvULsUoKxI4wFuSd3mTBNgCwb3ASJLBAAAAAEBiwoxkMBiAEAYI71dEHPhcIvE+gQO2apMZoxAQjtdar6WOVBDcdWLjtUuRe5+pClUGT3HUlryWS0i4B+dGFLwhSQAIe4MKSMgAAAAAYDAiiCX61kUgXhIIFgjgQEhuWHE9+mo8ZCmApqxJPQkAUFXyWgfKsDcm5xrUCd8PQiyALzgWbEBgvAUAhAgQMgAAAAAGGBjzoPQLAAGG2rzgfXEuCYGKueVMcx+Dpgik5KFOvWRdWGvxzpusKlI7hR3EeAa6J1UiUc5JBHC4JQABAiwAAQAZAQAAABBkBKILegPAAInAGxyHLwBs2RgB6KsALLvyWjt2yQmIRImpRfZW6oGkVhSror2UmFy8X2/h697jLLxJeG0kNtQsJQiWAEwAAAAAIGOSCViBFwRgEQk2kMQ9HwjEG6hNjX0GNsUQWImrpHwpAM4iLzLthluYnLsHHtnRYk4AjoALCLgSPJDQJAwACAAAAABmBgQwAGARW2QGAOPNuQRvfFsogG+Mb4ow1JB9zC6EJRYQ+ynvKltqpxY+m8KCXQgIlLDcUwQIG3iJhbUwmQCAAQAAAEAwAKIBALgGoRA2uNcxBHkfRdwPRgaYgoRUJU/W61EHRMBl2Zsabdxr1DoUFrtespVaDgE4yyeiAB5QAB5EAIAAAAAAQDAGAAAsUDKIEER8wxJe3jDisY9uJS02hYxs8Ep5BQCIvKxbazrsXdmUKtNtBTweAx9eEOF8fcEIxAtsAAsAAAAAAADAxIQBMEAAFJmgIApvgAMYPO5TJdfDuBQm9MPO8OACIFawqaqnGRhtStFVhjkpyfkK8AIDNoB3yhkgAFgCwAAAAAAgpkkASwQGAAQKAAAXuJu8WB69MRiFoIpKXnYsBJCXAzX6WEenqCi6RPp1kWACJEgIogCwtwIRlgUAQAAAAAAwLAYABsJiAREQAG/nTbwgCLKH8hMYCkFHMjtVQt5WkEWoRK0qeZ4dK7yLYlr16z57IwUAAMAC3FsEQzweAAAAAAAAwAQABmAAgAGAYH0iQGAMSZfR9SAUBiwTswEAANmDWnrMOBctq9TtlwubKwQAggBBv8GCsQAAAAAAAAAYACQAASAmAGDwYABQQqtxjy6gSFCeQ1XFLgDAAUXJnqkUZTCj+qW9pIBZwAbCvy4IDlv3b++7sL8+n+9x/v6XZXBFc41tNpcQWNPCKBuYtgFhjRUUx7oaNMKg+Az2GGR7BqPPQHtHE6euWJng1sDAahQGXUfX3siNJMVhYvO/5e88v8fxee/1gssF1gOgKFwAAAAAAAAABYAcAABEBYCieBEAoFpmtL7NIKZB4ToltmofCgBQFgrdS+hW3Up7m+pFVEMBDhAKaOhGAdCBCwAAAAAAQEWUAC4KAKChACh8+ORDKQ94A01hrLgatgahPPqNazUFALgY68qjyoDZMnSN06V1FQCUN0B5w6EAQAFVQAEAAAAAAExKFCAAgEYBAKLIhk0BzkgMT2aAJiCNBgAo2LoU1WWa8rgvWsElmOCCBWwKFXBxAECAcy4QAAAAAAAAEwAMAQAYCgCABwBA4+BD0QJdGqrElAYAwEp3NNM03Jc0Tbe0EfCoosBSEABNsQEF5boCVQAAAAAAAFejArgoACgg+AAA6oY3ACqsS+YZKNM6hRJVJRcaAGDDhH50U0Xr4Wj0aFWgETBQCkABAIBTEAAAAAAAAKoIoAAADiKwAYADAFBsUxhg6wJwNCsAAGjW0jwZ5frQNc1FOavLI8AjAA0pBQAsAMDlcgEAAAAAAAAUIAGgAT6oKi4AcH8CFEAOpUPYYtNCUdLRrQAAoLVSwYX//psprr+Rb8hcLxyUogCghAIAwAUgAAAAAAAAQBwCUANAAbwIBqAA2AKgiVHYoLVSAIAHAADQ+oO/lfbrf+/v/03tKLpVqWsBUABUEQVcAARAhQIAAAAAAKA0FUCuC8CBC4ANEDgA4IEZS6Ak9FgAusFfKPwQAPwM4p+OqV/3t34TB3+D9mt+Kw8n+AXghwB8CfhR6oLDZ8CPqwC+AHwE4FPgIwCfAh8B+BT4GMDxReDHQPBngR8C8CXgBxbg/grxHa7aAxgWAswF/+cnP/X4Uw0A/ijP9/2uO/nNX/87Tbdp//Ab47d+1eyl6O/2h7fHqgLgh0HVG+cCfgRKFOAnnAUAPgIA+AgA4CeVlHMB8OOAAgZ/HFEA8IN4/4RCgccf3v9h38EBQBYa6CrOAgAAaGMev8njW9/0bXxD+1V6ncZcBAAAWrkAoJgLAA0AAAAAAICYywUAAOA6AAAAKZCCG4a9DQmDWjQUA5fyAAAAmB6l99/X7duX/sdtHQCpvQAAGJwL1wFSACqYqhQAAAAAAFABAAAADgAAgP3ANAAez63PTaUG0QwltHkgbgAAYFruR0ENrQvzxjhQswCAwMKlACgugIJKAQAAAAAAFAAAAAARAgCw4AaAmEzILiBNEXWlAAAAAHQ97jwsaaql1+qXa1GoAYCSohxxBBRwAQTn2gUAAAAAAJAcBwBgIxwAKACId08AYMio1ENEkdIFOEXfAwAAgCbULdplBpulLYpcAAAADQBxFFDocwEAAAAAAAAJAMICmgMgAAAAAYAR0qUQHaWLS9BeAAAIMLofHx4pnKtaz+rq7NZYAABAUHAIFAIIdQEAAAAAAKBQEwHAa4Oh8UIACAER4AZscA/ZQ9EwjcBoA4AAMNNOzIBSTO+JCaF2FQCUAlEAAACCOAAAAAAAABGcLiAo3hoAQPACAJ4EhBVkCtgFoQtCF9gNAIAM9OiamzTQrDEWnVgBAoyIIA4AAKCo0gAAAAAAAIA6gAAABgsIAhAACILHzEDPdIGGKgaMAACwQGvbfFgFTU+vWcW2G7sQAFCBAgACAMJsAAAAAAAAByBQxGxPkMARhADwBAAB2fQ8x8veAU1XoyEFEgCAMMtc1qjm0j1N6zeLFEsAAFEQAAAAQF8AAAAAAADAQQHo67aFGRgCQGxYawkATLgMZWkQDQBRDAAAduFOowPQ7M6ASSE3AIACAKAAAAoAAAAAAKAAAkGYVwOaAABYAjzxBO4zsCHbNBLNCIpwsjOeOABgMmpA4RpqrEVvXRaEAAARBQAAAJwDAAAAAABAAEqiwNzGgAJAAngBFgGgycvUI0cZoTS6YFUJCC8XAI4Mc6GnoClrDrOwdrFTig1sFATiHIAAgOsCAAAAAAAAAEgOeuGNcEAARkLiLPcN8JR3bhtxz+UGaDpgZ6ZgRyIA3IJCl8qQdE9319HbZC8Fj5tLiAUFUC4AxQGEEAAAAAAAQBwSHFDw2ngCeBHADXDvm3tFPIE4NTuiBCHRKLB0HxOBTJDjmcDeMWZ02lWX4dXVLF0LwX14AVskEYOAAC4AiAIAAAAAAIACIWAu8AIIAGDDAhuegmBX1IxaQDQB7spt+hVnARB5msiVai3DNaF6La3XISAdgDBAIAYAcS5AYQAAAAAAAAACODAbhCCIvJ8IgyPcwn0EWCFbw5gbFN0aqMic1wIAAIoMNCkj9BlrX9RhqgcCCICtOAcACEilGgEAAAAAAABw4joiABCEuiBuBs8l4oEAIyXGu94lwdABMPpasyU3iACHBAbTui7d9nRTWVxHZQAEAETQAHAAFaoAAAAAAAAEKWFUAiQJCOB+P/cTvNwimORegeTcNZK1Z94AaOkAV2kzI0cIRxxYNdj7pNFk9Fjr6GZ6nKAAgCQoGgwBcClITomqAgAAAJAAiIEAZwYzCJ4IT7GsJRIZcE/mhKck3M49IPfsDDB0AecAM3B7BsBtZ6OMQingYda+7F5X6wqWGHgpkBiAwsxLEOCiBQAAAABVAgCBAIJQCQDluTDglljqcHKDgJx5DYoNoKNKAfad2TNzguPIK5xMvUZfLQZXaYS9jra7Hea4VW6IFCgAMLPflEMiBQkBAAAAEACBAACiBPGCpwT3nfudgEMMsd4lrEzYmWPGAERforhajZhLbgscJO8GixlQbdLAm2O1NaODedwpL14ISLwEEuQNOEoloBQAAABACgEcsJEAeycRyADe141FROK+zxnjnFvwfmdkX7rvAQJ0lHB4So1JnBtBIGJvZEY33aD1XhZ2d4xOOUYmAYALKEwBWpIaRQEAAACgZESSAKwXCqIViLjPfkq4wSISlsrMjLKevC9n7NhJ7BCALlJcschr9ktG8hQ8WRmRGpoRw1iVtthNFbFe5aa4XyS4wdmCsCcIp6jKlagAAAAAQKpMCg6B60WSxOuWgGAfyCLjvt9JeHdO3GZObu/v686c02SPjQgYjUKzuasmx5xnvCRjcp97xBi6u65u3ZSZbfUu11bVewkSAAaRRYLX9XZBQORAAQAAABDCJUDg7AugCCCBxPOWOHiHrLvG7d6viazFHjLPM2JmkyBtAZRF5tmz172WeL29wtNIzNbnOjR63nZNeVOzJnUezMXolYoSkecnnVI8PyCsM/FoxbGyr0vZLAAAAICji5RzHeBJ7/MG9gT38eH5CUG8I841ncf7o5+S4ymYo29m7mRH9/s8clCAhqJSkohK5H5P8oyxjuT5KjsK9Y1fM7/2V9eU/hV/cU1LQPbI/cRE8Mn7eSHxAq/pqLklyLnOkd2uAQAAAAxzGK6D8MTI8/Uih/BY6/kgibCW2TvnjHvdz7VkXkLsOZOZM47zuu/kvICB0VBNDWpOXic5Z0mS8X7PE9dMj435X+jf+id/leaYVrUOlDY8RWDeyTNR6onXo25yiqJxXY5pdQAAAMAMHNc5B+EJkPV6vojned9W3iG83/ccMhF3ct+zJ5kzktfsfe59J69dMVlzdkTDWDCF2h+S2t+Ef7NuF7xnxlfBP2D+Jv+w8au0v8zlL/pOahe+WuB7+34Q3v0M8H01nXplz08D//ahp5vMF4GfFIBPgY8A9heBH63LITx/GvghNwz/OfC99+uRus+65+eA3+uryji5vyrwr67no82d47+GvzvpJ6QEFh5VINz/0d/9Uz/1U5+s9+u2Pzyt1/3M776/7rNV+tudHvitt4r//VfKd35ZLRf+1eVx1arHfuA+1h8trrlEzavS44csmbdUXacZP9bTyrkAPgIA4sdAnR7w8kOjoIjgjxY3j9Q7a91nfn9m5zEt5Tr27btHFOe6kZPnPzv3c2JnbUmCOWnchaKo12S/zsl93znJa++cIzU9wXS+4df41b8SfgW/jM3QsY/kXu/3eT/WDvueoyA9aHvnjRxXObRRQwcAAJADCNMJgi6QBLyv+77D7V4r933K7Ir77Fdm7tm3HJF9kp1kn5z7nO2lhlAtoi08QPe5nIfsc1/n+eG+ntxzJvdrdm1Qrn+sHv+ki39mnf+jqyzm6mlp5ypLWDcs+yFgJD1WV5ScFAyXq6JIAQBMAVDicK8bCCrAXrfdc01XbqR2Xg7COcstRzyl1r3qEOeus0+cmFsAoou7KNPteL2e536+T973fd/P52vPeeWeM3Xh6qE4WHU0it0mct3jzJe/fN/rZ77M477v27vPfelLX6r89Jda7Nccn33GZ3zxi1zOKV/4QvjCp/j0U4D96fxpX9AA8dln/Kev/6wlSSE+/5zP379MLp3K/KyvfGXunzs/nySJ+K9yv76aX/BLc0TuM1/b55e+9ry/fv+3M5PahcoMnMviMQpSnboy3/Tbr6/77usX+Nf56u+ev/DP/9L/+td8K3eTaFgaC6m4SFHnIfVz/2/x5T/0lT+88dje+b7P5/Mf+NIPitoPP/LZj/nij33xT7gqX/hIvvAxX/j46UeffgS5EOY6xOut8iOf/X9iIsTzQ/7c998fLLcaTor79/0Xv2fDiB6ZX8xJ3LHH2uxf/h0TL1Ovk7lJVQ1ka3YnPBanZju+9d8c3/mFk3/5u/urv/u1218y/sE3V6vSjelYtr1VaWeoxi3xs1+x4eAhPuDz7wNI7vuzz34c4BwHn35aRQFAMf70T85FvLztuz777N8dP/2DUBIfvHz+M3378vdkzjlqIjPGn//XOUeY5Pziv8TXvhPnXFeu4+nrX79v/92385zaFsYI0C0Ud0axXnzzW7df/p13v3ievuaF8de/taky0Gl7Vb8tWatNq0R4Kb//B1+5iMZ9P96eoKCCij/+0RcLYl1tx8effAoAkHKBqCxmnn/87/7jC4Kq3O/xve/9ucVr9sQMR+bn/6+bk0iSwC/Z5PXa83q97pfjn/72X3mRmC2bQiA01wa9hDvb39kvv/31p995jX9u/CPlW6A0lo6FTe0tDwBmAzPg8bCX+/PvC6QQMY7AyVyrnQIARBE/+YIzySAVL9sPv0SC0Yvb7f/5WdeYmf3i+V/+m813f2nA2eP5L77j9jtfv7LlzkTc2/b3vvncMyEUAGt4FH3Zy1wlstvL+Lr/zcvLCNMkC/ai97rO6qLVdGGaxe/9vP97/cHP+YOKuj36AvX9z32/k05Z/4kftfrRZ37c06f7T/6Mj/n4qY8+fuojgHL0pDJ9yvizfsgInrHq9Pe+7A/BzvQYN/687xridel5yQuO19RtduL1j/6abx/HOGaTMqkjUJ/8T/9z/Ym//Ru1muqq1Y/rw+XqtmxjpobRF01b6V6OXtRy3lCUrlVaV65KqZmF4hNQQRXaA9VznSvlLEgBgCmkTk8YJwEGTyEe9+OWyBhDeSFMpJ64doozc/Gq2cyAjMy93Y4dSU34t/nbv+HfL8DVPRdkf9ie/eHurtltwmkDaJZmrytLQe2l0Di52rRziVIpqKcPzw9CVVi7L/bKJJdZuVIowLlAQxi8OtVbKoGsWzz27WZUAbkhTKipWXtztrfdvNc9zORKbyPuiWmbqURlkMpqwv+oUKhKl7qU61wOcB2X8VBQa7+pqEalKBaKXj0dDdBDP9AI0KZRVdPTGgCA0YbR02fa9ACK6bkfNwPwunhBMdiCYBCvt5eQGByQyhEyBAKINQoAREvlqN51AA4spMAipacJCqZbzIu3w9JgmgcIoGe6UVIdTKqNBpg+l2lU5OjRANDjcTMAr2b3FFF7GRBMKlhbgJ4DIo5IDQEVQo3V+DP/AwoAUAAAABQAoAAABQAoUAAlBZWCkgIAiEoFBAIIQABAAEAqAAABAEAAAALKQvmNlUV1qhRvykPTD22aNO2i9Upbk9WKNet+K3RNK/qiS13najzux+ZxvX+iUigeSevS03OpVNQ0AKmUwCEVzL02EfC+uDGpYypb7xBkiH3NFkZsI/aYgynjns5R87KvLWSIyRbRCKcpCuGOVabK8zljVNNV9NLTs/RC1rLyJnSmq6JS3YLLCffD4s4nBMWq+zp7i1GOHBWNAEoxhau57eera0dQnPe1N+w06bK6gmIGXjNW2Lbt5ezNDKbGfY/J7NddihDENkD9VKFQgKIpFF3TBRe6FGppFA2qUiya9LRF0UDzMIsAemjQ0alpPbNGYxrTpndFTx8VA1AY0/fjTmA4+sQUtt4EwRBehFScCcTUBCKBQBCE/x8RUYSGZ4cLTgAAAABJRU5ErkJggg==)}\n#webamp .equalizer-top {background-image: url(data:image/png;base64,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)}\n#webamp .selected .equalizer-top {background-image: url(data:image/png;base64,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)}\n#webamp .band {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANEAAACBCAMAAABpaq8qAAABEVBMVEUAxv8SEh0SWwQTEx4XFyQaGigcGysdMBwfIDEhITQqKUIqKkEqmhYsK0MuLUcuLkgvL0ovL0svMiQwMEsxMC0xMU0xMU4yMU4yMk8yMlAzM1AzNFE0M1E0NFE0NFM1NVQ1NlQ2IRs2NVM2NlQ2NlU3N1Y3N1c3N1g4N1g4OFg4OFk5OFk5OVk9dCpCQl1EQTxNTWZYWHJZVjxasCxlmUVoaHhrcC1xzTR3QyiDg5WHd0yJ4jCNjp2QkJCQxz2SkqKTk6OTk6WWrI+ZmaidpDWfn62k4jipmGWrrZCtLSOvk4yvwziwcR3DcCrE2zLFVCrFhzDGeA/GszXOxtbTIhvTSR/cdx/gVB7gkijgsijgzTBk+3VYAAADm0lEQVR42u3bX09bNxjH8a8fP/lTombrhEC01TSkSuNik/Ym9q73XnKxqVs6VnUbNIFzbPcikNiIk4ZCIY4eXyB98OGIn+JjB4Wf+0aZN0l1KL5p4q+/VU91wqW0YXR0qsEnnHApPyJpUz5/dRe+4eJrU70nBjgaeG2jw3viyYTjYUaIOfs4t+KrtXwTSo75cBd+bO5OFSH+NAHtBfEREeIEJj+v2KeY7UPqZVTabjoFWXF4yV7TyfGAb88L8gVU8TCByS+hl5wgHgB8N5U2o4Lm1OLiQcDH7GeHzH0nB57B/N4U59zid+459Y7PU0E3vvgJqKpcDRdEqJ8iIVwJxVE/ld51QInaUj9l9Yo5glA/ZRlv+aVySlh+A6dQPxV3lfJqH6+esnyqHJDtE9VScRSjekoxFaifslOvz+qRupajfkqRTqmf4rxfPlIO6me5M+zC2MFEu3Yc2aqzRJbIElkiS2SJLJElskSWyBJZIktUT6JUun7u9KqL5UytFGIswlVPTalYjvVTs+crpET9LHaG1FI/7YTd/qHF+eSpn7JchiFBS/3UlJbHVFrshJXz+l8CiZAaqJ/Slu/56qcsT9wU8In6qeH6E7LkUhupn5r84kxypJZI/ZTUtg7AN8kHqJ8SQ9BjOBFPmwK38BJcxgCDjfkR2JgX0N6fGhMix4Nns1ZjhJgQOWGc0xVs2NNuxou1nLN31sn3eDe7NzW2DKZHvXYW274/Y8HhbB2bpptvP8Phv2uYhtyfGgQNfwBeIFA/Nfv7opXEDnDnhtvNRtUDNpteHzJ7Wuo9uksLHvA+4+H+3XgaunnINOcL2IQqQnwN4z+zdtK4LCut5UvhYLrivvLdP910JWG/nM15CIfvMvbpZ3wxgg+3UW9pNo2HMN+UDJjljaryVjfonhUX06NZM3ujfsW6ntcIRv9/YaPqBgXkcTpTIjlHMLJGlTWqrFH1lWiNqu2nNaq2n9ao2n5ao2r7aY0qa1TZJ8sPkMgaVbbqLJElskSWyBJZIktkiSyRJbJElsgSPVUia1TVtOqsUYU1qh6H1qjaftoJu/3DGlXbT2tUbT+tUWWNqsenNaq2hg5cd6PqPzjP2kl34l8l38GsmwkuM55C0z07LZtclzHGjGflxefLW+mijjQo2kmezTn/u2g2zeczf97J30fPc86mB8Xs976YnceQ3fntDyVf9ptbqQ9XZdqA06NUclpQhg9Aa1RtPz8But0Pz3B64+AAAAAASUVORK5CYII=)}\n#webamp .band .slider-handle {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALBAMAAABbgmoVAAAAGFBMVEUAAAAICBApKUJKWmt7hJSLm6etvcbd5ukLNggsAAAAMElEQVQI12NQZGBgYFRgEC8vLy8WYBBPS0tzRqIExXDyQlxcQJQxEAgwAE1hFFQAAB9KDSykox1vAAAAAElFTkSuQmCC)}\n#webamp .band.winamp-active .slider-handle {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALBAMAAABbgmoVAAAAD1BMVEUAAAApKUJKWmvd5un5/v8UiEZ+AAAAJ0lEQVQI12MQYAACAQZmY2NjIwYGZiCHCYlyccDNg1BKQAAyAGQKAHJPAsUS1KniAAAAAElFTkSuQmCC)}\n#webamp #on {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAMBAMAAACO67B7AAAAIVBMVEUAAAASWwQvN01KWmtSZnN7hJSLm6ettca9ztbV3vL5/v8M+RL1AAAATklEQVQI12MoRwIJDFWr4GC5A0NVBxyUGjBUNRsbdzRpNHVoQHiCkh0aTU0aKDwlKG/mTBCvCcID6UfoQzUTYTmQV54aCgcGDCnGCGAAAPUyQLvRdOj2AAAAAElFTkSuQmCC)}\n#webamp #on.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAMBAMAAACO67B7AAAAFVBMVEUICBASWwRSZnNje4R7jJyLm6etvcYvdU+XAAAAQElEQVQI12NgwAdMXODAgYHBLQ0OEoA8VDkgdnFgcXBhgfAERV1YHBxYUHgMUF5oKIjnAOGB9cP0maGYqYDkEgAFZxmn+1/+wgAAAABJRU5ErkJggg==)}\n#webamp #on.selected {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAMBAMAAACO67B7AAAAIVBMVEUAAAAA1gAvN01KWmtSZnN7hJSLm6ettca9ztbV3vL5/v911B9qAAAATklEQVQI12MoRwIJDFWr4GC5A0NVBxyUGjBUNRsbdzRpNHVoQHiCkh0aTU0aKDwlKG/mTBCvCcID6UfoQzUTYTmQV54aCgcGDCnGCGAAAPUyQLvRdOj2AAAAAElFTkSuQmCC)}\n#webamp #on.selected.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAMBAMAAACO67B7AAAAFVBMVEUA1gAICBBSZnNje4R7jJyLm6etvcapTzEQAAAARElEQVQI12MQRAYMaDwTFzhwZBB0S4ODRCAPVc5RUNDFUcTRRQTCY2B1EXF0FEHhCUJ5oaEgniOEB9YP02eGYqYiklsAdNMdgDKFw2kAAAAASUVORK5CYII=)}\n#webamp #auto {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAMBAMAAADxOqKKAAAAHlBMVEUSWwQvN01KWmtSZnN7hJSLm6ettca9ztbV3vL5/v/WADVeAAAAV0lEQVQI12NIQwWpDJkzUUAyQ2Y5MihzYsgsUlIqLxQvLBcXFC8UBwswcJSLFwIFQAgmICiILNDRgaoCZBaQI1heWA4xA8MWVIc5MaSFuCADJ4ZgJVQAABsNRRhxaDvQAAAAAElFTkSuQmCC)}\n#webamp #auto.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAMBAMAAADxOqKKAAAAFVBMVEUICBASWwRSZnNje4R7jJyLm6etvcYvdU+XAAAAS0lEQVQI14WOsQ2AQBDDAh8GYKMUHgF6ihP7j0CFxF+DS8tSIv0ymIh8T1xy9aIkI5wIEbmW/Qh2cPAr9BXb2QogOMaIaPSVtR19ACp1H3+cU6+ZAAAAAElFTkSuQmCC)}\n#webamp #auto.selected {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAMBAMAAADxOqKKAAAAHlBMVEUA1gAvN01KWmtSZnN7hJSLm6ettca9ztbV3vL5/v+vLTjBAAAAV0lEQVQI12NIQwWpDJkzUUAyQ2Y5MihzYsgsUlIqLxQvLBcXFC8UBwswcJSLFwIFQAgmICiILNDRgaoCZBaQI1heWA4xA8MWVIc5MaSFuCADJ4ZgJVQAABsNRRhxaDvQAAAAAElFTkSuQmCC)}\n#webamp #auto.selected.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAMBAMAAADxOqKKAAAAFVBMVEUA1gAICBBSZnNje4R7jJyLm6etvcapTzEQAAAATElEQVQI12WOwQmAQBADtwSjsaDAlKAFCIf9l+BL8NZ5DgNJqVE/sTGR8j1xlUcvhmSEEyFSHksdwQ4OfoW+Yj9bAQTHGJHa+sranj59DSTnUdDwigAAAABJRU5ErkJggg==)}\n#webamp #eqGraph {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAATCAMAAACQnBKzAAAAw1BMVEUqKUEqKUIqKkMrK0QrLEQsK0MsK0QsLEUtLUYtLUgtLkctLkguLUcuLUguLkcuLkgvL0ovL0swL0owMEsxMU0xMU4xMk0xMk4yMU0yMU4yMk0yMk8yMlAzM1AzM1IzNFE0M1E0NFE0NFM1NVQ1NVY1NlM1NlQ2NVM2NVQ2NlQ2NlU3N1Y3N1c3N1g3OFc3OFg4N1c4N1g4OFc4OFg4OFk4OFo5OFk5OVk5OVpsbH5vb4JxcYZzc4hzc4p0c4p0dIt1dYwbWqB2AAAC2klEQVQYGQXBIQ9lSRkFwDpf930zCQqBxaLQ/H+PRuDXrCQkbObd7kNVzD/+qSay+fu/BDL87d/MMtL5628iiP2X31cQ5M//6cp3nrJ//u+upgM//2gAfv7BO6aOP/33ndQx4HVJMQGeXnSgB0/V/lWicJvObrKOrDNJCwJQ1XVzz1F3DxYTsaHBBbx7MIhsfDNHfwSNlE8vuCO8V7QAEJGzTnSlYxL3nojNJkVC+NRLGtoC8wjSIOl9Z2NJ3syeugkAwLvjyFtMl6FaGhoGyK/HZ1SX20D2CzQN+nn3vK8eOoaxAFC0vKxplMlx14qEucCdC10XJquy4/Ho/gKmbO/Mu5/sGQZcAAhN7tr1Jk3cWcu6EM4rGCbBXNdwouX72M0DgXizjh19T6S9twBASU1a+632nn2wiPIgCLDfTViHDV52oFHo+4Oy35M6Ww0KEBXlOilu9uKs6AMCHYH3McpZdQe29gshzE17tlSWZLkDAkCKhnV4wxwW8t4ZCqUAZC8xeL5yLihY6Xx3NGfclqEAgLg30dPcW3dcNzBCigBAigvI95kPSMp36Udti+be6kkBoK0knVTXJzKLwnYgzBAea8Y0hwGery9I2vjkheSMe5iJjABwG5G0Rm6v27ksCXNfEMDXoLHSAq/nM0grfDs+r46LIUgLwKRoj1wd5TOzSG2ZLUgFmCu1dALPd7sFSVDXO3L1rDWARAElTmXuEe5qf8290uDdUqZDyHJnJAfwePrc7wtVsz+SPdou5xwKCCDK0pNFuehkkaI0dC7YXDe6kzP4ft/j+bGJ4J5fH4WIZSnXBYBGxDrvgt2MPRW2hhB30nDHIHTw4OXXD9BBn3yCNF3W62aNAYA7Dtfc4867j2sOxBkCiWIGUsrw5bXyA9FRJj0SzVJZ9qK3ANqRvWql7crWMitq27OBlNAro0E6+OKeF6Sy7XOPNhk3CmQCIORWVk/inPcO/g8Gk8tpHAw47gAAAABJRU5ErkJggg==)}\n#webamp #presets {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAMBAMAAADrBkIEAAAAGFBMVEUvN01KWmtSZnN7hJSLm6ettca9ztb5/v8/TtPPAAAAXUlEQVQY022PsQ2AQAwDXblnlBcbwAYI9K0bbgXWpwAEErnSuii2topV/ShY1PmzN3UiZOQIWY7uGDsBEwj+2pHjyCF+bJwACdfBGyNfD9Bt102qOU3bPP5pmoaKE9BgTHfswQ68AAAAAElFTkSuQmCC)}\n#webamp #presets.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAMBAMAAADrBkIEAAAAElBMVEUAAAAICBBSZnNje4R7jJytvcYlh7IyAAAAW0lEQVQY03WPsQ2AMAwEv/gFMgI7QP+RLgNQsP8qFAGBlOTK01m2VaZopXdGqkq7Rk6VtqiJkJEjZDl6NHYCJhD8ryPHkUP81jgBEvrAp5H7AmSqyjG/ZJt9eQMWOi9EkrQa+gAAAABJRU5ErkJggg==)}\n#webamp #preamp-line {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAABCAYAAADpXEERAAAAE0lEQVQoU2Pcdfruf4ZRMKRDAAD1lwNjTqcaUQAAAABJRU5ErkJggg==)}\n#webamp #equalizer-window.shade {background-image: url(data:image/png;base64,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)}\n#webamp #equalizer-window.shade.selected {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAAOCAMAAAA7SAh7AAACdlBMVEUAAAAAAAgNDRQNDhQODRQODhUPDxYPDxgQEBgRERsSERsSEhwTEx0TEx4TFB0TFB4UEx0UEx4UFB0UFB8VFSAVFSIVFiEVFiIWFSAWFiEWFiIXFyMXFyQXGCQYFyUYGCUZGCYZGSgZGicaGSgaGicaGigbGyobHCscGyscHCsdHS0dHS4dHi0dHi4eHS8eHi8eHyUfHzAfHzIfIDEfIDIgHzEgHzIgIDEgIDMhITQhIjQiITQiIjUjIzYjIzgjJDcjJDgkIzckIzgkJDckJDklJTolJiwlJjsmJTsmJjsmJj0nJz4nKD0nKD4oJz0oJz4oKD8pKUApKUIpKkEpKkIqKUEqKUIqKkEqKkMrK0QrLEQsK0QsLEUtLUctLUgtLkctLkguLUcuLUguLkcuLkkvL0ovMEswL0swL0wwMEsxMUwxMU4xMk0xMk4yMU0yMU4yMk8zM1AzNFEzNFI0M1E0M1I0NFE0NFI1NVM1NVQ1NlQ2NVU2Nhg2NlU3N1Y3N1g3OFc3OFg4N1c4N1g4OFc4OFk5OVo/QitCQTtKQT5SSj1aWmFbW2JbXGNcW2NcXGNcXWVdVztdXWddXmZeXWVeXWZeXmdeXmhgX2phYGphYWxiYm5jY29jY3BkZHFlZXJlZnRmZXRmZnNmZnVoZ3VoaHdoaHhpaXlpanlpanpqaXpqanlqanprXUFra3xrbH1sa3xsbH1sbH9tbYBtbn9ubYBuboFvb4NvcINwb4Nwb4RwcINxcIRxcYZxcodycYdycodyk5lzbFJzc4lzc4pzdIp0c4p0dIt1dYyCmI+Zc0KjlGqqurGxnVm2nF7O4s/sznr///8TArHKAAAEcUlEQVQYGd3BMc9m6xgG0HXdz/N+yEl0ujlx9AoqiehEq/MT/AoKgoK/oFRpFBqF6HQaEZXqJL7KdBIRM3vft/1+MxzORMxEZ62USxKXEJe4i7sE4XY8uMuUmyfFQhCqEMUkxCWsVJfNuVGhJnEJWUK5i3XakxHEa9sRpThuhvhXk6F7H5bT7MM/DLrGybhrg2MyGF1tmp460HTOcbf9kFBIF8ImPVvcxSVTngRBiJi4lEIEQaTKpaiuxJMocYnLNlheq1HLR0IyQSZiMsLEx00m4zJ0NcaTc52M9mSaOFzGZTSD4XTXLsd3N9+rnLcuIbLUJGpKZPa5EpdFcEPZdZYSKmq2lEy27MONEA+jCJW47FQoZWo711mLWC6zidRY50LYmEmhiAkTbxoZl2aqJ459GHfHYOjhnIzR8UKcaaO7x9CZzrQ5GEWfR9ore8lgptylKwZpd+WVYylRyOxBpBp7HwdCR4taMWPfwgxN9SGUu5O1tic9LBJ706RQzUwQHzf+VU3HMYcnrRITZ5eTMaa9YFobnCGMybRx19td+ay3N146+SR/FHGJKoIiBJmsUNjOYneFEpdgd9WUJ8EeUzHx2rd/RW+/CV0ux80/TZwVLzeH3W05vvUrfu5tfWFuLz/v8rvmG4/P+cyzn6jNPne9/+Obd/Tym5+S9zO3Y59bhVqTfeyEsGssKghVSyZUxXbaRFhds4WolkUmNtKNaueXgxFvmDDoah2Z/OzHN2/n5Te/eHw+X3rPX/zWPH7lw8dnH/ya2ZwuD97Vgwrj2OcuQU3YvSax1VRPymuTronXjn12kQlmM0LXLExsnEuhejGIN0zilWpKZuLBW3pQR7zHezGef/jB++vD52Y2N+EX3sF4pZFtpWuyRnASEzpdMXH38GJ7UmXCPtVxI5wPp0ti1iwEh01OrxTBxMcE467dzRS/8N+NJwdfO732+P4n/vZoZDPp8lXv7KcTl2OfqV7OFXfbk54tZCK4KYIud+t0c7eciwyTWZ5MbF2zx910jMjEv5kwYqjurjoKX/W2flrN4pc0z9bf9rPnGbviLP76ae/oz+Jun7dRyMi2ji3IUhMTJl7sEHabwhm9hNU1XSSDY3fhdmxm7FA+EiY+EmSMVqpYuv31097Onx3mxYMXRvnMBx8+Pvvc4xx2j+Lx+97Bn9y91+s7WDol4hJk93KpLjJLkMnFJS6JKOK15W55JZKZGorKt4k3TNyNu5lMOqq+/n3/3Z/cffHwe3e/nfbs1889f3xmS/3oB6wJO0GwRKgKQoqQjbL1ql6KZDtXSthic9rJVqZCahJqn1VClimbEJksFYRQ5RI2k3hS7uI/GZeuNunVOAyt99kG4xiD6V7HfpHWhj72S8OZmZzMYdLmD1WocTmPc1ySYBhDSMSlUC6bJRIOO8Te2IfYCWZkXJKhpyqotHI5hbBanwRT1S6x0U1ryiXBeMPMeKWd6T4Ox2FQ8vI0GMcsMSPrdJhpl+alu5oxnIfRLvG/iv8b4y5/B72CM+yl6NhDAAAAAElFTkSuQmCC)}\n#webamp #equalizer-volume.left::-webkit-slider-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU5QE1jXjujlGrsznokh70QAAAAE0lEQVQI12PYwPCF4QcYfmHYAAArXgYxq2vCDQAAAABJRU5ErkJggg==)}\n#webamp #equalizer-volume.left::-moz-range-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU5QE1jXjujlGrsznokh70QAAAAE0lEQVQI12PYwPCF4QcYfmHYAAArXgYxq2vCDQAAAABJRU5ErkJggg==)}\n#webamp #equalizer-volume.center::-webkit-slider-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAQMAAAD3d2XqAAAABlBMVEWjlGrsznoPowceAAAADklEQVQI12NwYHgAhw4AIi4E4a+iLsYAAAAASUVORK5CYII=)}\n#webamp #equalizer-volume.center::-moz-range-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAQMAAAD3d2XqAAAABlBMVEWjlGrsznoPowceAAAADklEQVQI12NwYHgAhw4AIi4E4a+iLsYAAAAASUVORK5CYII=)}\n#webamp #equalizer-volume.right::-webkit-slider-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU5QE1jXjujlGrsznokh70QAAAAEklEQVQI12OwYKhh2AOGNQwWABlSA52dOQTnAAAAAElFTkSuQmCC)}\n#webamp #equalizer-volume.right::-moz-range-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU5QE1jXjujlGrsznokh70QAAAAEklEQVQI12OwYKhh2AOGNQwWABlSA52dOQTnAAAAAElFTkSuQmCC)}\n#webamp #equalizer-balance.left::-webkit-slider-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU5QE1jXjujlGrsznokh70QAAAAE0lEQVQI12PYwPCF4QcYfmHYAAArXgYxq2vCDQAAAABJRU5ErkJggg==)}\n#webamp #equalizer-balance.left::-moz-range-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU5QE1jXjujlGrsznokh70QAAAAE0lEQVQI12PYwPCF4QcYfmHYAAArXgYxq2vCDQAAAABJRU5ErkJggg==)}\n#webamp #equalizer-balance.center::-webkit-slider-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAQMAAAD3d2XqAAAABlBMVEWjlGrsznoPowceAAAADklEQVQI12NwYHgAhw4AIi4E4a+iLsYAAAAASUVORK5CYII=)}\n#webamp #equalizer-balance.center::-moz-range-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAQMAAAD3d2XqAAAABlBMVEWjlGrsznoPowceAAAADklEQVQI12NwYHgAhw4AIi4E4a+iLsYAAAAASUVORK5CYII=)}\n#webamp #equalizer-balance.right::-webkit-slider-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU5QE1jXjujlGrsznokh70QAAAAEklEQVQI12OwYKhh2AOGNQwWABlSA52dOQTnAAAAAElFTkSuQmCC)}\n#webamp #equalizer-balance.right::-moz-range-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU5QE1jXjujlGrsznokh70QAAAAEklEQVQI12OwYKhh2AOGNQwWABlSA52dOQTnAAAAAElFTkSuQmCC)}\n#webamp #equalizer-shade.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAD1BMVEVKQT5SSj1sXUO0kWO/uX6z+JYEAAAAM0lEQVQIHQXBwRGAIAwAsLT07Z2zsP8qbuDBAliTmDjl1m8Gob6HK5uWti27V6uxDDFxfn1PDx8P0VYSAAAAAElFTkSuQmCC)}\n#webamp #equalizer-window.shade #equalizer-shade.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAD1BMVEVKQT5SSj20kWO/uX7CsWHebnl7AAAALUlEQVQI12NQAgIFBiUGBiYFBgVhYwMFBkVhY0Mg6QwmXVwEgeIuLgIwNWD1AJzCBeFqt4OOAAAAAElFTkSuQmCC)}\n#webamp #equalizer-window.selected #eq-buttons.clicked #equalizer-close {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAFVBMVEUpKUI1LxJZVjxkW0SHd0ypmGX5/v9OYEDlAAAAJ0lEQVQI12NgAANmRUFlBgamYOUgBgZGU1dDIKmSoghjQ8QhasAAAHO7BEc0qEt/AAAAAElFTkSuQmCC)}\n#webamp #equalizer-window.selected #eq-buttons.clicked #equalizer-close.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAElBMVEUxMC1ZVjxkW0SHd0ypmGX5/v/v3/6CAAAAKUlEQVQI12NwAQIHBicBBiEHBkcmIUYHBgcFAwUgKRwsAGNDxCFqwOoB1gEH67W94+0AAAAASUVORK5CYII=)}\n#webamp #equalizer-window.shade.selected #eq-buttons.clicked #equalizer-close {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAALVBMVEUoJz4oKD8pKUAqKUEqKUIqKkMrK0Q6MSljXjtsXUORbkq0h2O0kWPCsWH///8vo79mAAAAO0lEQVQI12NIdTFWUmDIbC/vFGCI2Nl5QoAhfM6a6UCy61U7A4P7nLVAdsTJzhsMDJ5ANQwMLkaKCgwA6D4RaTQt0CAAAAAASUVORK5CYII=)}\n#webamp #equalizer-window.shade.selected #eq-buttons.clicked #equalizer-close.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAElBMVEU6MSljXjtsXUORbkq0kWP////9IyyfAAAAKUlEQVQI12NwAQIHBicBBiEHBkcmIUYHBgcFAwUgKRwsAGNDxCFqwOoB1gEH67W94+0AAAAASUVORK5CYII=)}\n#webamp #position {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAAAKCAMAAACuVWMrAAAByFBMVEUPDxgPEBkQDxgQEBkRERoREhsSERsSEhsTEx0TEx4TFB4UEx8UFB8VFSEVFSIVFiEVFiIWFSEWFiIXFyMXFyQXGCUYFyUYGCUZGSYZGSgZGicZGigaGSYaGSgaGicaGikbGyobGywbHCsbHCwcGyscGywcHCsdHSwdHS4dHi0dHi4eHS0eHS4eHi0eHi8fHzAfHzEfHzIfIDEfIDIgHzEgHzIgIDEgIDMhITQhIjUiITUiIjUiIzYjIzcjJDgkIzckIzgkJDckJTklJTolJTwlJjslJjwmJTsmJTwmJjwnJz0nJz4nKD4oJz4oKD8pKUApKUIpKkEpKkIqKUEqKUIqKkErK0IrK0QrK0YrLEUrLEYsK0UsK0YsLEUtLUctLUgtLkctLkguLUcuLUguLkcuLkkvL0ovMEswL0swL0wwMEswMEwxMUwxMU1hYm1iYW1jY29jY3BjZHFkY3FlZHFlZXNmZXRmZnNnZnVnZ3ZoZ3VoaHVoaHdpaXhpaXppanlpanpqanlqanpra3xrbHxsbH1sbH9tbYBuboBvboFvb4NvcINwcINwcYVxcYZxcoZycYdycodzc4hzc4pzdIp0c4p0dIt1dYwExkcuAAACuklEQVQYGQXBAWEANxADMPmSFsOAjT+QNX+eFEYgZicIBCMQMBlphNGBIJgZQLjId3bmPtcHfncAkIZoAAAAAECBAuy7Hsfb2dnuwEPB7qKawjer1OYBhR0jAFMAFQIAQRJsAjSBnQUJF74aHp+DuQAgDVEAAAAA0EIVAPvgy7BSeLTgWUChFhr5QAsS/jFumXD3NrlkiGDOkNnJbGJigksiOHuIuyYmFdzxMmaH3/9+GHvAqKPTkMKgAQCbziLV77xZCiv/AZY+qB2bv/Oofmn5+1mPWnm0fPieUjVG5pZJMZJ9aqXB75nFTm3qxgAsxZ5SxrBNcN/uGQz256vdKdg5+aRBMSAAAFlorc0OCQtg11sXYnbtobUU7nJJ1FA+1D3QmNQZjHKXmptFA3+LmAzGK3D1OyAjxDo1swV0Abc95UQZY4toTBKjAAqgE1qdo5YW/HFh/OSBMuBiBLx97+GTtxrf0NVHpSbxHki4w65eI8GECWoGluBxP0gg7iQwgTdmAF9nx6iwmeecpNK0aVdQEKWKLch+MxB4zvVgAbCr3vewCp+5QKpU6FKASaQM7oWZ3y9vBPTMgtCMeyjoOzBN4fGZ3YDfmWVA7zcmpTjvWpVSVkYRQAiTgXxfp4uqrJt92KUPAJun+FJwAkpHFAsvoLuD81MLrLqSSwOHCRM2jBnhXi7iGxH3rmEGWH8H4P4NKglchgoTkwUA0M3aqJ67pgt8w9+MNcjlgcV3oaelLA/7bSgahUfBrBkMnlHoR1LMM0Ew7HQFfDcgi3pzQYB1i+HKDxbg+8yXENasqQAASbNa5c1OhjRr/d3HWNiF2tHOg1ShO6hxPCld4S8IuOPfCIjpIJiaHdMDaXL2QJAQEAYEGCKAEQRpgLGGaBoBAABomkIrWkAVbIFSNkVhU4raFMWbLYV2WcX/K67c097eK2wAAAAASUVORK5CYII=)}\n#webamp #position::-webkit-slider-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAKBAMAAAC6bkgfAAAAJ1BMVEUJAgJlZXNlZnN1WyKDaTCNdTqcgkqvmGHFsn7by57u4rv06sf19fW6wGFFAAAARElEQVQI12PQnIkMAhgkXZDAUQYGSY/dcLCnFMj3PgMHp8F8YziwBvPL4aAaxPdB6N8G4p9CyJebAvmhyICBQYABBQAALnc7YhsUgeUAAAAASUVORK5CYII=)}\n#webamp #position::-moz-range-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAKBAMAAAC6bkgfAAAAJ1BMVEUJAgJlZXNlZnN1WyKDaTCNdTqcgkqvmGHFsn7by57u4rv06sf19fW6wGFFAAAARElEQVQI12PQnIkMAhgkXZDAUQYGSY/dcLCnFMj3PgMHp8F8YziwBvPL4aAaxPdB6N8G4p9CyJebAvmhyICBQYABBQAALnc7YhsUgeUAAAAASUVORK5CYII=)}\n#webamp #position:active::-webkit-slider-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAKBAMAAAC6bkgfAAAAJ1BMVEUgDABhRhBmSxNsUBdwVRt4XSGBZyqPdTmhhkuwmF6+qG/DrnXYxZOv4MtwAAAAR0lEQVQI12PwnIkMAhg8XZDAUQYGT4/dcLCnlIHB0vsMHJwG85XgQBvML4eDaiBf0wehfxuIfwohX67KwCAZigwYGAQYUAAAXWI7mESGeYIAAAAASUVORK5CYII=)}\n#webamp #position:active::-moz-range-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAKBAMAAAC6bkgfAAAAJ1BMVEUgDABhRhBmSxNsUBdwVRt4XSGBZyqPdTmhhkuwmF6+qG/DrnXYxZOv4MtwAAAAR0lEQVQI12PwnIkMAhg8XZDAUQYGT4/dcLCnlIHB0vsMHJwG85XgQBvML4eDaiBf0wehfxuIfwohX67KwCAZigwYGAQYUAAAXWI7mESGeYIAAAAASUVORK5CYII=)}\n#webamp #shuffle {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAPCAMAAABDVWaoAAAAilBMVEUQWgAqKUIqKkEqKkMrK0QsK0MsK0QsLEUsLEYtLUcuLUcuLUguLkkvL0ovN00wL0swL0wwMEsxMU0xMU4yMU4yMk8zM1A0M1E0M1I0NFE0NFM1NVQ1NlQ2NVM2NlU2NlY3N1c3N1g3OFc4N1g4OFk5OVpKWmtSY3N7hJSElKWttca9ztbV3vLv///LbncEAAAAqklEQVQoz5WSsQ7CMBBD37WpGPgDpJtY+/8fAxLLfUbVM0OiNgKG4CGKL45jRbYbiSUIkBAiMZJEqI2EMjGYynVhHHoWmIfle1IEOeqeogCwAQwFq3oesIoADyfaAt4mBHivb/Av5h8nRQCslQVOHPrK/Nif/ouaSdDd+OlvXYDD2qOP1r9j98s8/p/5KlarMIoCu/SPXvmf/yb2SQJkotZD087Z2VrcBIM3KB9V4lGQbMMAAAAASUVORK5CYII=)}\n#webamp #shuffle.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAPBAMAAACGpYupAAAAGFBMVEUAAAAICBAQWgBSa3Nje4R7jJyPn6itvca8iDuFAAAAY0lEQVQY02MQxA4EGHBLuIZighBDoER4ORYQCJLAoiMUIiEoKIpdQkgpNYAhIJSVNQBIARkBDEgSoRCJUAiESoilgXQwYOoAgQBsOkDiIDsCWMHCDCg6sLoKh4Q7LglD7IEIAKjwVurEkbm9AAAAAElFTkSuQmCC)}\n#webamp #shuffle.selected {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAPCAMAAABDVWaoAAAAilBMVEUA1gAqKUIqKkEqKkMrK0QsK0MsK0QsLEUsLEYtLUcuLUcuLUguLkkvL0ovN00wL0swL0wwMEsxMU0xMU4yMU4yMk8zM1A0M1E0M1I0NFE0NFM1NVQ1NlQ2NVM2NlU2NlY3N1c3N1g3OFc4N1g4OFk5OVpKWmtSY3N7hJSElKWttca9ztbV3vLv//8gEwg9AAAAqklEQVQoz5WSsQ7CMBBD37WpGPgDpJtY+/8fAxLLfUbVM0OiNgKG4CGKL45jRbYbiSUIkBAiMZJEqI2EMjGYynVhHHoWmIfle1IEOeqeogCwAQwFq3oesIoADyfaAt4mBHivb/Av5h8nRQCslQVOHPrK/Nif/ouaSdDd+OlvXYDD2qOP1r9j98s8/p/5KlarMIoCu/SPXvmf/yb2SQJkotZD087Z2VrcBIM3KB9V4lGQbMMAAAAASUVORK5CYII=)}\n#webamp #shuffle.selected.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAPBAMAAACGpYupAAAAGFBMVEUAAAAA1gAICBBSa3Nje4R7jJyPn6itvcZs8alFAAAAY0lEQVQY02NQwg4UGHBLuIZighAjoER4ORYQBJLAoiMUIqGkpIpdQlEwNYAhIJSVNQBIARkBDEgSoRCJUAiESqilgXQwYOoAgQBsOkDiIDsCWMHCDCg6sLoKh4Q7Lgkj7IEIAGMfXXXsp3orAAAAAElFTkSuQmCC)}\n#webamp #repeat {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAPCAMAAADAkV+TAAAAeFBMVEUQWgAoKD8pKUApKkEqKUEqKkEqKkMrK0QsK0MsK0QsLEUsLEYtLUcuLUcuLUguLkkvL0ovN00wL0swL0wwMEsxMU01NlQ2NVM2NVQ2NlU2NlY3N1c3N1g3OFg4N1g4OFlKWmtSY3N7hJSElKWttca9ztbV3vLv//8ki4GoAAAAgUlEQVQYGQXBMQ7CUAwFMP+SzkgoO1vvfyQOgJBYWKB52OsOQpIVSJaZTdTnCgAAIDUuAACAcwoDAAAyKfCFHQBAAQ+OyO8NGlAAkL3Bs4Fa4AAvGgAqsAfQAKAWAPQTNKACgNYAoBYBAAAozgQAAFAyAQAAWLeRNSQRmS3j3GTCH4ZgNtlEi15VAAAAAElFTkSuQmCC)}\n#webamp #repeat.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAPBAMAAAAFYbKSAAAAFVBMVEUICBAQWgBSa3Nje4R7jJyPn6itvcb4vicLAAAASElEQVQI12NgwA9MXODAWYGBwS0NARyAXISsC5jLwMCCzGUUDAHpYkFwnUBSUC5raIgDA4ILkmFB5Tog9KJZhMI1Q+UqIHsAAPs1JqMDCtK2AAAAAElFTkSuQmCC)}\n#webamp #repeat.selected {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAPCAMAAADAkV+TAAAAeFBMVEUA1gAoKD8pKUApKkEqKUEqKkEqKkMrK0QsK0MsK0QsLEUsLEYtLUcuLUcuLUguLkkvL0ovN00wL0swL0wwMEsxMU01NlQ2NVM2NVQ2NlU2NlY3N1c3N1g3OFg4N1g4OFlKWmtSY3N7hJSElKWttca9ztbV3vLv///lInoXAAAAgUlEQVQYGQXBMQ7CUAwFMP+SzkgoO1vvfyQOgJBYWKB52OsOQpIVSJaZTdTnCgAAIDUuAACAcwoDAAAyKfCFHQBAAQ+OyO8NGlAAkL3Bs4Fa4AAvGgAqsAfQAKAWAPQTNKACgNYAoBYBAAAozgQAAFAyAQAAWLeRNSQRmS3j3GTCH4ZgNtlEi15VAAAAAElFTkSuQmCC)}\n#webamp #repeat.selected.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAPBAMAAAAFYbKSAAAAFVBMVEUA1gAICBBSa3Nje4R7jJyPn6itvcYox7XLAAAATElEQVQI12MQRAEM6FwTFzhwVmQQdEtDAEcgFyHrAuYKCoogcwUYQpwVwWIwrhNICsoVDQ1xFERwQTIiqFxHhF40i1C4ZqhcRWQvAAA51isA/VWazgAAAABJRU5ErkJggg==)}\n#webamp #equalizer-button {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAMCAMAAAC+5dbKAAAAUVBMVEUQWgAqKUIqKkMrK0QrLEQsK0MsK0QsK0YsLEUsLEYtLUcuLUcuLUguLkkvL0ovN00wL0wwMEsxMU1KWmtSY3N7hJSElKWttca9ztbV3vLv//9O4LHRAAAAaUlEQVQYGQXBwQ2DUAwFMEODRCao2H++HnrKofBf7e0NAAD5lhcAAM+6iwUAkJVXwQ8Ho42GVeDjimmmTSM7AGYAKHCBhmmww5GEntHTAykCcIozZ6A8CQAAqawAAEDda/NgbZFErMfuD041NCuZPULmAAAAAElFTkSuQmCC)}\n#webamp #equalizer-button.selected {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAMBAMAAAB7FTvLAAAAIVBMVEUA1gArK0QvN01KWmtSY3N7hJSElKWttca9ztbV3vLv//9R/wqlAAAAT0lEQVQI12Moh4MyAYaqVTBQAuR0QEF7MIhjbNzRpNGkAeEYcHZodGg0wTlKGjCO5UyQDFQZEAD1QGTg9gA55amhUADkpBjDgQCDIAIIAAAWsDNHmvvPEQAAAABJRU5ErkJggg==)}\n#webamp #equalizer-button.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAMBAMAAAB7FTvLAAAAGFBMVEUAAAAICBAQWgBSa3Nje4R7jJyPn6itvca8iDuFAAAASElEQVQI12MQRAABBhSOgGsoFAQDOeHlUFAK4sBkQsEcQcHQANYAVghHSC2UNZQ1AM5hYIVxxNJAMlBlQADUA5ZxRzbNEOECAM5YHW8MP5O/AAAAAElFTkSuQmCC)}\n#webamp #equalizer-button.selected.winamp-button {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAMBAMAAAB7FTvLAAAAGFBMVEUAAAAA1gAICBBSa3Nje4R7jJyPn6itvcZs8alFAAAAR0lEQVQI12NQUIIDBQZUjmsoFAQDOeHlUFAK4sBkQsEcJaXQANYAVghHUSyUNZQ1AM5hYIVx1NJAMlBlQADUA5ZxRzYNyQUAEUAg+7nvOG8AAAAASUVORK5CYII=)}\n#webamp #playlist-button {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAMCAMAAAC+5dbKAAAAUVBMVEUQWgAjIzgkIzckIzgkJDklJTolJjsmJTwmJjsnJz0nKD4oJz0oJz4oKD8pKUAqKUEqKUIqKkEvN01KWmtSY3N7hJSElKWttca9ztbV3vLv//+EzjHeAAAAXklEQVQYGQXBgRHCMAwEMLk4WYFj//nKAOHqR6o3AADk214AADyjGQCATKrhh+WwzwZygfve2ADUBYADwDT4gA2AhhUAxwZNACssAtqTAACgMwEAwPRRI5GpmTIhUX81UygSftVjhQAAAABJRU5ErkJggg==)}\n#webamp #playlist-button.selected {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAMBAMAAAB7FTvLAAAAIVBMVEUA1gArK0QvN01KWmtSY3N7hJSElKWttca9ztbV3vLv//9R/wqlAAAASklEQVQI12Moh4MyAYaqVTBQAuR0QEF7MIhjbNyhpKEB5RhwdmggcxAyljM7NDpgHCDQAMqBOXB7gJzy1FAoAHJSjOFAgEEQAQQAwMcyRToQk0kAAAAASUVORK5CYII=)}\n#webamp #playlist-button.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAMBAMAAAB7FTvLAAAAGFBMVEUAAAAICBAQWgBSa3Nje4R7jJyPn6itvca8iDuFAAAARElEQVQI12MQRAABBhQOo2soFDgDOeHlUFAK4sBkQsEcQcFQBlZWKEdILZQVmYOQEUsLZQ2FcYCAFSgH4rgjm2aIcAEAbLsb8tZoQy8AAAAASUVORK5CYII=)}\n#webamp #playlist-button.selected.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAMBAMAAAB7FTvLAAAAGFBMVEUAAAAA1gAICBBSa3Nje4R7jJyPn6itvcZs8alFAAAARElEQVQI12NgUoIDBQZUjmsoFDgDOeHlUFAK4sBkQsEcJaVQBlZWKEdRLJQVmYOQUUsLZQ2FcYCAFSgH4rgjm2aEcAEAZCcevKaFFFgAAAAASUVORK5CYII=)}\n#webamp #title-bar {background-image: url(data:image/png;base64,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)}\n#webamp .selected #title-bar {background-image: url(data:image/png;base64,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)}\n#webamp .llama #title-bar {background-image: url(data:image/png;base64,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)}\n#webamp .llama.selected #title-bar {background-image: url(data:image/png;base64,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)}\n#webamp .selected #title-bar #option.clicked {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAHlBMVEUUFB8VFSAVFSIVFiEWFSAWFiEWFiI0MCyah13sznoaG8L5AAAAPElEQVQI12NgYBAUCmBgmCCoaMDAWSmoZMAwvVIwNIBhRueMjgkMAoLTKwMYGAWnz0xgEBT0DAWxXdMSACxMDDJsyBoOAAAAAElFTkSuQmCC)}\n#webamp .selected #title-bar #option:active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAD1BMVEUhKDU0MCyah12jlGrsznoe/O3VAAAAMklEQVQI12MwBgIDBgMHBgYDBhMRASDpKCIIJJ1UnJQcGAwEHUWAsoyOLkCSgQWIweoBtzQG0TH1VqcAAAAASUVORK5CYII=)}\n#webamp .selected #title-bar #option.selected {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAD1BMVEUhKDU0MCyah12jlGrsznoe/O3VAAAAMklEQVQI12MwBgIDBgMHBgYDBhMRASDpKCIIJJ1UnJQcGAwEHUWAsoyOLkCSgQWIweoBtzQG0TH1VqcAAAAASUVORK5CYII=)}\n#webamp .selected #title-bar #minimize.clicked {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAMAAADXT/YiAAAASFBMVEUqKUIqKkMrK0QrLEQsK0QsLEUtLUctLUgtLkcuLUhFQTxSSj1aVzpoWTVrXUNzbFKId0mckXWqurG71tm/uX7AwcbE3+HO4c5KSa+JAAAAPElEQVQIHQXBwQHAMAjEMJvQfLv/lJ0ArpK3FsLQZxogW9uqXjqlkKQphYTmcGBI4wPU6OVd4FtvYEzyA+cLGDTjuSw1AAAAAElFTkSuQmCC)}\n#webamp .selected #title-bar #minimize.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAIVBMVEVFQTxSSj1aVzpoWTVrXUNzbFKId0mRbkqckXWjlGq/uX4Hs2WWAAAAOUlEQVQI12OYCQQTGKYzMLBPYJggKCgwgWGSiYvRBIYpYWkhExhmdK3qAJKrVq0AqunoaJ/AAFYPAAQVFS+2qihdAAAAAElFTkSuQmCC)}\n#webamp .selected #title-bar #shade.clicked {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAMFBMVEUtLUgtLkguLUcuLUguLkcuLkkvL0ovMEswL0swMEswMExFQTxSSj1rXUOqurHO4c6W/ePHAAAAQUlEQVQIHQE2AMn/AKqHZlVQAJnu7uUQAK7///4wAK3d3d0wAKzd3dwwAJzN3cwwAJvMzMNAAIi7u7MgAIZlVTAwDDgbUKzozR4AAAAASUVORK5CYII=)}\n#webamp .selected #title-bar #shade.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAD1BMVEVFQTxSSj1rXUOjlGq/uX5Idn/CAAAAM0lEQVQIHQXBwRGAIAwAsLT07Z2zsP8qbuDBAliTmDjl1m8Gob6HK5uWti27V6uxDDFxfn1PDx8P0VYSAAAAAElFTkSuQmCC)}\n#webamp .selected #title-bar #close.clicked {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAALVBMVEUoJz4oKD8pKUAqKUEqKUIqKkMrK0Q0MCxoWTVrXUORbkqjlGq0h2PCsWH///9ex0i3AAAAO0lEQVQI12NIdTFWUmDIbC/vFGCIONm5Q4AhfPbq6UCy61U7A4P77LVAdsTOzhsMDJ5ANQwMLkaKCgwA5wURVkMAFf0AAAAASUVORK5CYII=)}\n#webamp .selected #title-bar #close.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAElBMVEU0MCxoWTVrXUORbkqjlGr///+HjTObAAAAKUlEQVQI12NwAQIHBicBBiEHBkcmIUYHBgcFAwUgKRwsAGNDxCFqwOoB1gEH67W94+0AAAAASUVORK5CYII=)}\n#webamp #clutter-bar {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAArBAMAAAC3GdQgAAAAElBMVEUAAAAAAAgQECEYGCkzPElgYGraVCJcAAAAVElEQVQI132NsQ2AQAwDr8gCv0FGMNLTu8gKv/8qFCAgQqI7WWebbYyBACQJEUbyRDgaTf95Va3xeGWkKUTQqPz12m9eyyYB8s7eVEUSJs8VIPe1DmVJGRTmaMgdAAAAAElFTkSuQmCC)}\n#webamp #clutter-bar.disabled {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAArBAMAAAC3GdQgAAAAD1BMVEUAAAAAAAgQECEYGClgYGoHCnLLAAAAIklEQVQI12MwFBQUZDBgAAIDIBhULAVUlgJhFlivgomLCwA8qROh1kJ8awAAAABJRU5ErkJggg==)}\n#webamp #button-o:active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAgMAAAC5YVYYAAAACVBMVEUAAAAYGClwgY/qIgoqAAAAGUlEQVQI12Nw0GBwaWNwaIKRGQwODAwuLgA+SAT1jbNsAAAAAABJRU5ErkJggg==)}\n#webamp #button-0.selected {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAgMAAAC5YVYYAAAACVBMVEUAAAAYGClwgY/qIgoqAAAAGUlEQVQI12Nw0GBwaWNwaIKRGQwODAwuLgA+SAT1jbNsAAAAAABJRU5ErkJggg==)}\n#webamp #button-a:active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHAgMAAABIN+TNAAAACVBMVEUAAAAYGClwgY/qIgoqAAAAGElEQVQI12Nw0GBwaWNwaGJwWQUmgWwGADIVBK9/og4OAAAAAElFTkSuQmCC)}\n#webamp #button-a.selected {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHAgMAAABIN+TNAAAACVBMVEUAAAAYGClwgY/qIgoqAAAAGElEQVQI12Nw0GBwaWNwaGJwWQUmgWwGADIVBK9/og4OAAAAAElFTkSuQmCC)}\n#webamp #button-i:active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHAgMAAABIN+TNAAAACVBMVEUAAAAYGClwgY/qIgoqAAAAF0lEQVQI12NwcWFwWMHgksLgoAAjVwAALckEbUwsrjEAAAAASUVORK5CYII=)}\n#webamp #button-i.selected {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHAgMAAABIN+TNAAAACVBMVEUAAAAYGClwgY/qIgoqAAAAF0lEQVQI12NwcWFwWMHgksLgoAAjVwAALckEbUwsrjEAAAAASUVORK5CYII=)}\n#webamp #button-d:active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAgMAAAC5YVYYAAAADFBMVEUAAAAQECEYGClwgY/lGZUOAAAAHElEQVQI12NoYGDo6GBo+MPQcZqh4TCIdACSfwBnkgl9KMHv2wAAAABJRU5ErkJggg==)}\n#webamp #button-d.selected {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAgMAAAC5YVYYAAAADFBMVEUAAAAQECEYGClwgY/lGZUOAAAAHElEQVQI12NoYGDo6GBo+MPQcZqh4TCIdACSfwBnkgl9KMHv2wAAAABJRU5ErkJggg==)}\n#webamp #button-v:active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHAgMAAABIN+TNAAAADFBMVEUAAAAQECEYGClwgY/lGZUOAAAAF0lEQVQI12NwYGDwOM3gcBhG/mdwsAEAPG8GMJvxEOEAAAAASUVORK5CYII=)}\n#webamp #button-v.selected {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHAgMAAABIN+TNAAAADFBMVEUAAAAQECEYGClwgY/lGZUOAAAAF0lEQVQI12NwYGDwOM3gcBhG/mdwsAEAPG8GMJvxEOEAAAAASUVORK5CYII=)}\n#webamp .shade #title-bar {background-image: url(data:image/png;base64,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)}\n#webamp .shade.selected #title-bar {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAAOCAMAAAA7SAh7AAACFlBMVEUAAAAA+AAKDRYNDRQPDxcQEBkRERsTEh0TEx4TFB4UFB0UFB8VFSAVFSIVFiEVFiIWFSAWFiEWFiIXFyQXGCQYFyUYGCUZGSYZGicZGigaGScaGSgaGicaGigbGyobHCscGyscHCsdHS0dHS4dHi0dHi4eHS0eHS8eHi8eHyUfHzAfHzIfIDEgIDEgIDMhITQhIjQiITQiIjUjIzYjIzgjJDgkIzckIzgkJDklJTolJiwlJjIlJjsmJTsmJjsmJj0nJz4nKD4oJz4oKD8pKUApKkEqKUEqKUIqKjoqKkEqKkMrK0QrLEQsK0QsLDssLEUtLD0tLUctLUgtLkctLkguLUcuLUguLkcuLkkvL0EvL0ovMEswL0swMEswMEwxMUIxMU0xMk0xMk4yMU0yMU4yMk8zM1AzNFI0MCw0M1E0NFE0NFI1LRA1NVM1NVQ1NlQ2NVU2NlU3N0Q3N1Y3N1g3OFc3OFg4N1c4N1g4OFk5OUc5OVo9P0w/QitFQTxJSVlOTl9SSj1YWGJaVzpbW2JdXWdgYGpiYm5kZHJmZnVoWTVpaHdqanprXUNra3xsbH5uboFwcINxcYZzbFJzc4hzc4pzk5p0dIt1dYx3d4GBl42EhI2Id0mIiJeUlJ6Zc0Kah12ckXWjlGqlpauqurGztri2nFS71tm/uX7AwcbE3+HO4c7V1drj4+fsznrvvmbx8fP////Kv08RAAAFRklEQVRIx+2XTYiVVRjHf89z3jszXq4zmJozvpJhfoQp4a5NIrRwEYFIi4hUKsIW0aKdGISISZCLBDcRuFCIVm4icpXtohoilEEFwcXc8UrkoNnVYd7zPC3Oee/MnQ8cXHcY5p6P55z3Of/n638kkJvAgq70D5KkuNLorde7C3FRQFBwkbxNoBA1zYcEEFCXelEUmftOUdFwcWS+NoILgoAFvE9NwMXBXW1uVK8Apk6VuuA4EJOMY2ppQtwBg6hVkiw4QX+T5ceynFg90KUnZGm0F5+jC7ebzoPGEfCF+oFLDYapZXhqfKxPcGFnwUQSPlfA54hn0wgS0q+6IoTYME1WTTZmAFBELaQdKqgHRBCXBtKTFBpWO4Zq8iVVUARBKVws9NzPinSsZxgUCsBr70MxhR5E85uRcPD0J1RFla8XswtY7SGOGYZjYhhm5hhEcROPuIGjEC328CoyJHj6eqhEcECsz5DeCxTEg5PgNEDELF0jKhFBC8WMoiFgWT+MGPNhEVSLfD0HBVWKAgwSJA5WQ7UIkH6nNqGyqja+imCKmRBT9LhiII4loAQUHBePtbcU9VUvvgPiURVxEDcFYsjJoLZWz5WzB6s86tPpBitrO1YovgPgAACjHRil/pem6OgoU2psBGjjm5iELbdN1dyT4+hvGSHPjnNk3NkCcLPyxuxugD8MXuvehQ3NH9ACggW4ePniIRAEcfmao2dbH5wa/vjs0NGvBn8devnPb/RM0fmCMzw8eXyYY5+sg+rqJYRHx1rz73BwhZicWqH4KeDh6QMolFMbS9owWkJCZbQMUAam2FgCMCmUZXuyvK0GIq9eSYYfS95U9fKGPB8Atl/3andYP8yDPeN494Vmtzl2Czy5KBcvp4QLuNAdPtziozXTKXe8dAs4UngLoPXmaghw7dpb21RcGOFpWlh2ReYSX5YbySGysQwxzfVQ6ROMiEMos7jvDfuu4HU66WuNwQBxBq0CwzD8F87d5tjM4J27uBc5SF+BC/dh5H0EJnfugU2NO0nF1iZg8+xMa9cEs43dPB5yGB3AMIHxp8JkvD/tL1UbAPh9XkUqwxwA5SJQevUqlKAGewNh308YaUiViy+4NAdWwaNABTtn6s3dmWfudXGkSMn8kAsXfmH/ewjw/c7hx2GtnwugzFRrIYx0Z1uvTzC9fujBAMBI6++fXQS2PhUmW1foJ9tqRAzaPVAi7fmQaM8PKiC2Swy2EIHtN2uJSlJuBcTXMQiNtHMQJiBCc/DeYBPxVPEkV/39mRjcmG08CGv/zR+68KFwuBgYoAX8M9x5Docb36Wqw/3yaTBpLbvii+Taud+hBNOFiORK24ug9u2kUbtfoKgyaYnuhEFgVZRZ4vQapokENozd6TbHuhNGkWJWgHfPv5fZkk8/e4e13WyWiRsvsvnhp3KytQs6q89/lquQWoDmtyxFup7UvgRg+olyxwEOmqG06XRGUTp12FjuTcFUSrFRaU9WtI060uJ1eHsB1o7/+IYBlxyuMgmMe6R56y50mygSTpwmkbZCauaWyTQN6VFwBKQBKMHSWEEkYCqCQCNvQkWUgAUBCaYKWkRVtCbziZEJ4hJSWdeaAPb4mksf510ebKtZq4tJCiADx4IlDuJQ4YCbVmCeyYlVxSwGlbhLBW64GHZb50CMVaxzUJqq3xdSX7bWTXLVFoiERFobmSWReK9ZDl5VA/PEZbV+kBSZGgbBLZ3qmvKCUlCzO8uQqLJE9QAz6xk/iplVVInDCpJ7DlVAcMcqMNwzbWQ2we2Og1kqUiD/vwEXvQH/A3+xY8OlLccKAAAAAElFTkSuQmCC)}\n#webamp .shade.selected #title-bar #shade {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAMAAADXT/YiAAAAM1BMVEUtLUgtLkguLUcuLUguLkcuLkkvL0ovMEswL0swMEswMExFQTxSSj1zk5qBl42qurHO4c7FV37rAAAAOklEQVQIHQXBwQ2EQAwEMCdEPK7/YhFiM2fXzybCxAXvN1VVbe9tpenSDDCh+GhZVmpyHDwZu2HP9QfI+BkLtDdVPQAAAABJRU5ErkJggg==)}\n#webamp .shade #title-bar #shade.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAD1BMVEVFQTxSSj2jlGq/uX7CsWH/Y2uiAAAALUlEQVQI12NQAgIFBiUGBiYFBgVhYwMFBkVhY0Mg6QwmXVwEgeIuLgIwNWD1AJzCBeFqt4OOAAAAAElFTkSuQmCC)}\n#webamp .shade #position {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAHAgMAAACTjE7vAAAADFBMVEUAABAwMEsxMUJaa3u9OGBkAAAAIklEQVQI12NgAIIDDFqrVq06wCAaBiZDQ8PAZCiM/A8EBwAZeBBhq+F40QAAAABJRU5ErkJggg==)}\n#webamp .shade #position::-moz-range-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAQMAAAD3d2XqAAAABlBMVEWjlGrsznoPowceAAAADklEQVQI12NwYHgAhw4AIi4E4a+iLsYAAAAASUVORK5CYII=)}\n#webamp .shade #position::-webkit-slider-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAQMAAAD3d2XqAAAABlBMVEWjlGrsznoPowceAAAADklEQVQI12NwYHgAhw4AIi4E4a+iLsYAAAAASUVORK5CYII=)}\n#webamp .shade #position.left::-moz-range-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU9P0xoWTWjlGrsznp9Nqf9AAAAE0lEQVQI12PYwPCF4QcYfmHYAAArXgYxq2vCDQAAAABJRU5ErkJggg==)}\n#webamp .shade #position.left::-webkit-slider-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU9P0xoWTWjlGrsznp9Nqf9AAAAE0lEQVQI12PYwPCF4QcYfmHYAAArXgYxq2vCDQAAAABJRU5ErkJggg==)}\n#webamp .shade #position.right::-moz-range-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU9P0xoWTWjlGrsznp9Nqf9AAAAEklEQVQI12OwYKhh2AOGNQwWABlSA52dOQTnAAAAAElFTkSuQmCC)}\n#webamp .shade #position.right::-webkit-slider-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU9P0xoWTWjlGrsznp9Nqf9AAAAEklEQVQI12OwYKhh2AOGNQwWABlSA52dOQTnAAAAAElFTkSuQmCC)}\n#webamp #volume {background-image: url(data:image/png;base64,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)}\n#webamp #volume input::-webkit-slider-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALBAMAAAC9q6FRAAAAFVBMVEUAAAALDxYvL0RKWmt7hJStvMTa5+opTTwbAAAAMUlEQVQI12NQFAQBIQaxNBBIZGALBYIQAyAtKiqKlwapM2RgcwEBQwZhYxAwZICaBwCdgQ6Jd297uQAAAABJRU5ErkJggg==)}\n#webamp #volume input::-moz-range-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALBAMAAAC9q6FRAAAAFVBMVEUAAAALDxYvL0RKWmt7hJStvMTa5+opTTwbAAAAMUlEQVQI12NQFAQBIQaxNBBIZGALBYIQAyAtKiqKlwapM2RgcwEBQwZhYxAwZICaBwCdgQ6Jd297uQAAAABJRU5ErkJggg==)}\n#webamp #volume input:active::-webkit-slider-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALBAMAAAC9q6FRAAAAFVBMVEUAAAALDxYZICovL0RKWmva5+r///+U4Y9MAAAAMUlEQVQI12MwFAQBYQbRUBAQZGBlAAIWBiQ6ISEBKw2SV4TTIi4gIMhgJKQopCgoDAB2aAh/NddRQgAAAABJRU5ErkJggg==)}\n#webamp #volume input:active::-moz-range-thumb {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALBAMAAAC9q6FRAAAAFVBMVEUAAAALDxYZICovL0RKWmva5+r///+U4Y9MAAAAMUlEQVQI12MwFAQBYQbRUBAQZGBlAAIWBiQ6ISEBKw2SV4TTIi4gIMhgJKQopCgoDAB2aAh/NddRQgAAAABJRU5ErkJggg==)}\n#webamp .gen-window .gen-top {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUAgMAAAAFGX4uAAAACVBMVEUeHi8rK0Rra3zjkZV/AAAAG0lEQVQI12NggIJVYNDAEAoGDlSj0QGx9kABAFXxKF3wQT+3AAAAAElFTkSuQmCC)}\n#webamp .gen-window .gen-top-left {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAAB4ElEQVRIS61Vu04DMRDc3WuQqEBIVKlAQkKioEZU1PkVpHzhXZX8RUCiTpUjojs04/XrcjyUxFF09p3t8c7OjnU2exikaiqqmt6wryY6iLCrxg5+aGp4Wh77WszjDMwFyHw+r2GwEb9jmm+GycXmEYhgFjaM8/fWRZCuXYaj8kweTbExI4gbqYpxnIFThFxj+UBlJG27DFQ4DE9anb4Y+yYJhNSoqMWD/ATSrSIxKZJtv67TdeAo5SREoqJD4Ljv1/LydCO3s7MDt87LEsg4J/3nmywWr0cDkP6U+G4l0LKnXQByeXF+YhCoC1lxmQIEdJ2iTdAlzEu/e5f7u2t5frw6GqcG8QrFA3Ww+/o4GqDOCeny5iqD7vkP9ZzrZqJOyDTs5bdipLpEZNtv9guSi8MBcuXnwvMP2SmSE4y8awwyrnzaSGmMlc2MDTLazR8gMM1sM7Rb5im4cuHCUZFuQdlQs9ftJT7SBZCOVuNUaSNmOGEjhnfsF5R5Tho1GSpjLax+TBdB2pWXTsPUmzXBYV0M6JvfN3R8CZTGdxRM6cLTIMH+UTe8nCJl1jh1iDJSmNVVglBt1X1SqCtE4rIeSdpIHaIK9FF4BmKjOAA88Nv/InHgcJXmeyJTN3X91ur6BrqJo0MRJOhhAAAAAElFTkSuQmCC)}\n#webamp .gen-window .gen-top-left-end {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAABxklEQVRIS7WVvUoDQRDHZ/r4DIEThCiCtn4UCpa+gIiF76DmCWwv+D5WYm0nCFpZCSKWKZIdmY//Zu/CxSaXQPZuM7v/md2Z3/DO6FSEhESE9COSbCSbjUdKpC9qY7Nmu7wGa5MQsVn6Djy+qWMpRHwD1+nazIXwdVGTtfkU7+EZ8dHBpVnoD5tBcglsoqNGZ2Nsi7nCGbWx/+EYIhUhPj68Et/EpVTCDIsNTVznUyJhIUouZh7H8apzcIQ4HApRHg4rHH3cwHqHwaAivr87703k/XNKj88fxJPJpDcRPZO6fiDe39vtTSTxlH5/5sTXF2e9iWgkdlx93snTyze9vn0RV5tbvUUyn81osFGVdeJalu9R7VbBKVmN2JzWSVQ1UASUoBiBJq96rxdeF7u8lt3BJXZtj06CIisA2Y6uzbQcnQs5uhYI4vFtLZmuK6CIYyi5lsFYOBGYzAxTmwKQosjpZlcAEPfWuAtEUrQL3ImJAJDGOu0bIPAShb3XLHqP09lhGmgFqdVbPDdE0LDQrAoROwLNrPZcRn5k5X+o7+4nqXGMubdEerZT2BxpR+Ip7BlRpiHaL5pQo3aK7MpNOqLKTbHIrj9doofFD8vqAQAAAABJRU5ErkJggg==)}\n#webamp .gen-window .gen-top-right {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAMAAABPqWaPAAABYlBMVEULFRIMDAweHS4eHi8fHyIfHzAfHzIgHzEgHzIhIDIhITMhITQiITQiIjUiIyYjIjYkIzckIzgkJDklJDomJTkmJTsmJTwmJjsnJj0oJj0oJz4oKD8oKEApKEApKUApKkEqKUAqKUEqKkEqKkIrKUIrKkMrK0QsK0QsLEMsLEUsLEYtLUYuLUcuLUguLkcvJwgvLkkvL0ovMSUwL0kwL0owMEsxL0wxMC0xMEwxMU4yMU0yMU4zMk8zMlA0MlA0M1E1M1I1NFM2NFM2NVQ2Nhg3KxA3NlU3NlY4NVU4NlU4N1c5N1g5OFo6OFk6OVo7OVw7Ols7Olw8OVs8Olw8O11GQh9JRjlORDBQPx5dVztiWkVqanprXUFra3xsa3xsbH5tbX9tboBubX9vboFvb4JwTyxwb4Nxb4RxcIVxcYZycYZzcodzcoh0c4l0c4p1dIt1dIx2dY13dY6Gd02QkJCZc0LWhhB9AAABJUlEQVQYGT3BvWqUYRRG0X2++bRSGxsVhBls0oidP3W8gYCFXoW3JV6DVgmxslBbIQELJRAQA0Kc9zzbmcBkrVrZrTEaYuylEXs+EK/EEKNo4HA+SVf0n2mTMTqJcc00TTeBoGwUBZMINXPteTL2fn2E/XvHg/ktOz/fP4Ve7ZerU2Cqaw/YePdndXd1+qEWzIfsrKGbXNy+OCPN/IhrX1nI7+XFw3OqnO+z8wOa17dOz86XL79L3WHn7zMz9r59gSePP62pgxrG0bG1L23TraRWI24kRGNilv3iqJiaAgQRtEAomF+JIYRotPGIrfkki3UcncTkcqQHsjEtGEBRVeRymIBsTBYb3lCaqTqJbE0lG5WqVHrEyJX586A12omj45tj2foP9wDyBsXxPvcAAAAASUVORK5CYII=)}\n#webamp .gen-window .gen-top-right-end {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAAByUlEQVRIS7VVPUsDQRCdWRvBShGszoAKYg4C1mJj8m8Cgr2/1cLfENBu5b352D1NY7GXhLvszc57MzvzRqdpU1VV8MOlolJFpeCvFuEq3uMDGyxU3Ls1mrit22MvfWDffv9e7dGccfGXg3CYd5o6KS1GrtsbPoK0zuttNXtjh3thZG0zWaYTY8z3ngGVIlosMiMS0cNGhCBprCq1ihTEWVW0mPNMlRNAKrC5SAAZoRLA/uzsRed5Vw+HDxqNunS1uqnbp1u5m05HYQhB3t5ehwHweABycX42HgTpGnkxkvX9lTw/Xg7DYXV9fX8OA+CZzA8vVbwfotYhK9Zw3iuhAtmgaEhvvGhIykqoABq6UJ74vZ422YwhAyYLTbOsgTv5iOdOz9j1qVve/a5UekwgE2ThfAnSVMCpdXLS5MlOIQWyZ2tpa/q1EMbQOAV3k5c/kaYqe/r+L5AOvtAuW4voeKY8DmhfJ5BkXzwlfOksUBR5oFhvotkLa4BYVKHGATLvcp5AdS3DHYinrZ8XrQgccDEa4MMjCQVnCZ+oaEy7fkZ0g2kBQp1HfA3E5lArDpawF0OWcIaJ4/TDzPF7tMpatNYOffX5hPUW/wFZNjaZ4b4luAAAAABJRU5ErkJggg==)}\n#webamp .gen-window .gen-top-left-fill {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAAAWklEQVRIS2PU0nT8z0BjwFhe1kd7S2ysY4eJJfLySrT3SVu5L+0tmTBhAu0tMTTQpb0lSVGutLeELnGipKxGe5/QJTPSpeyiiyWjBSQpVRAjXVIXXSyhR+oCAGL8JbEqBdscAAAAAElFTkSuQmCC)}\n#webamp .gen-window .gen-top-right-fill {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAAAWklEQVRIS2PU0nT8z0BjwFhe1kd7S2ysY4eJJfLySrT3SVu5L+0tmTBhAu0tMTTQpb0lSVGutLeELnGipKxGe5/QJTPSpeyiiyWjBSQpVRAjXVIXXSyhR+oCAGL8JbEqBdscAAAAAElFTkSuQmCC)}\n#webamp .gen-window.selected .gen-top {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUAgMAAAAFGX4uAAAACVBMVEUeHi8rK0Rra3zjkZV/AAAAG0lEQVQI12NggIJVYNDAEAoGDlSj0QGx9kABAFXxKF3wQT+3AAAAAElFTkSuQmCC)}\n#webamp .gen-window.selected .gen-top-left {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAMAAABPqWaPAAABHVBMVEUdHS0dHS4dHi4eHS4eHi8eHyUfHzAfHzIfIDIgHzEgHzIhIDIhITMiITQiIjUjIjYkIzckIzgkJDckJDklJDolJiwmJTsmJTwnJj0oJj0oJz4pKUApKkEqKUAqKUEqKkEqKkIrKUIrKkMrK0QsK0MsK0QsLEUsLEYtLUYuLUcuLUgvLkkvL0owL0owMEsxL0wxMEwyMU0yMU4zMk8zMlA0Mk80MlA0M1E0NFE1M1I1NFM2NFM2NVQ3NVY3NlY4NVU4NlU4N1c5N1g5OFk6OFlCQTtqanpra3xrbHxsa3xsbH1sbH5tbX9ubYBuboBvboFvb4Jwb4Nxb4RxcIVxcYZycYZzbFJzcodzcoh0c4l0c4p1dIujlGrsznr///9wBmqFAAAAvklEQVQYGQXBwQlVSQBFwTq33+DWnUuj0RQmXMNwMzAKgjkI/7dVQYdtrZwyq3xFTlqqtUoP39dOa9apc9pOjXe8cRky8NDN/gcA8HDVj38DAHiYew0AwMNeD78BADy8hk8AAB4W/nwAAHh4nXz+BgDgoejjqXaqp22nHs79lZ0yM2tVgze8BHcBD68zX0yt1Jbp4XrPf6fqbJ72zz1tsN7e6N47eo07eFvBcrnQIPdyXbjyuu7DdOlnZk5Z1V/Roy8hK3ODtwAAAABJRU5ErkJggg==)}\n#webamp .gen-window.selected .gen-top-left-end {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAAByUlEQVRIS7WVPU4DQQyF7Z5cgaVJpAAnIFAk50AcgB4UwQEoKNJQp6GkpKCgp6ShoUFcgCJtkBgj/7zZ2Y0WmmwiZXcnXj97xv7MB+OZCAmJCOlHJNmVbDVuKZE+qI2tmu3mO3g3CRGbpXvg+cUiXoWIO3CdLmcuhK+Lmqytp3iOyIiPj07NQn/YDJJLwIleNTu7hlusFcGojf2PwJCpCPHJ5EzciUuphBkWDk1c11MiYSFKLmYRx/ZqcAiEOAIKUd6thtj6OIHtXgY7FfHX61VvIk8vK7q+fdZjyKe03RTCW7U3Ip5NJ71l8sMr+vz4Jr6/O+9NRJOx7erzTG6W7/Tw+EY8HB32lsl6vabBoCr7xLWs3qPbrYNTsh6xNe2T6GqgCChBMwJN3vXeL7wtdnkve4Ab7NofT4MifwCynV2baTk7F/KmqBHE88uFtQqI2QVFbEPJtQzGIojAZGaY2hSAFEVON7sCgDi3xlkgk2Jc4ExMBIA01uncAIE3KOyzpp49TmeHaaAVpNZocd8QwcDCsCpEbAu0stprGflRlf+hvnuepMY25tkS5dkuYQuknYmXsFdEWYYYvyiERu8U1ZWHdGRV47aurl8JSofPjXVkWwAAAABJRU5ErkJggg==)}\n#webamp .gen-window.selected .gen-top-right {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAMAAABPqWaPAAABO1BMVEUeHyUfHzAfHzIgHzEgHzIhIDIhITMhITQiITQiIjUjIjYkIzckIzgkJDklJDolJiwmJTsmJTwmJjsnJj0oJj0oJz4oKD8oKEApKEApKUApKkEqKUAqKUEqKkEqKkIrKUIrKkMrK0QsK0QsLEUsLEYtLUYuLUcuLUguLkcvLkkvL0owL0owMEsxMEwyMU0yMU4zMk8zMlA0MlA0M1E1M1I1NFM2NFM2NVQ2Nhg3NlU3NlY4NVU4NlU4N1c5N1g5OFo6OFk6OVo7OVw7Ols7Olw8OVs8Olw8O10/QitCQTtdVztqanprXUFra3xsa3xsbH5tbX9tboBubYBvboFvb4Jwb4Nxb4RxcIVxcYZycYZzbFJzcodzcoh0c4l0c4p1dIt1dIx2dY13dY6Zc0KjlGqxnVm2nF7sznr///+ZhXPBAAABBUlEQVQYGQXBwYmUURBG0Vv1P90KvWtnQCcBxyBEEAMxKWMSWjQAB2V2DeKyX33Xc+reGY3RoHHeGHHWR1HVMWgUDXxbT5mK3swYkyQab3T3SyAoQFFQIhQAAPA+5iFXOPVls74AADBf30HuOn3+A6wCAGABXPucfr7WMesXAICAkry4hQzrDgAAoIru29FUuQ4AAP6BnM7P6df5LfUKAOAvj5qHXOHU32/Uh9rGnTiaMSapza77HdWEqCbm7Txetj0UIIigJRBkfRJDGKJq5EID6ynHLe4kMTpxAKEPNlBUFRiQAhZtAbgUqgqqJDV0CVCpEqHAojesn5vRyBh0/PyD5tj8B5vM5TGngJW4AAAAAElFTkSuQmCC)}\n#webamp .gen-window.selected .gen-top-right-end {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAABzUlEQVRIS7VVu04DQQy0lx+gokuQEEjAiXwAJYSCgpIfoE1NgUTLT1KRjh4qKBbN+LF7kIZiL4nusuf1jL32WBeLVVVVwQ+XikoVlYK/WoSreI8PbLBQce/WaOK2bo+99IF9m81ztUdzxsVfDsJh3mnqpLQYuW5v+AjSOp1fV7M3drgXRtY2k2U6McZ87xlQKaLFIjMiET1sRAiSxqpSq0hBnFVFiznPVDkBpAKbiwSQESoB7M/OXnSa1vXjc0ujUZcuD0/qy+ON3F7uj8IQgmzfXocB8HgAcnx0MB4E6Rp5MZL7uwt5ejgdhsPq+vp+HwbAM5nOrqp4P0StQ1as4bxXQgWyQdGQ3njRkJSVUAE0dKE88btcrLIZQwZMFppmWQN38hHPnZ6x61O3vPtdqXSXQCbIzPkcpKmAU+vkpMmTnUIKZM/W0tb0ayaMoXEK7iYvfyJNVfb0/V8gHXymXbYW0fFMeRzQvk4gyb54SvjSWaAo8kCx3kSzF9YAsahCjQNkWuc8gepahjsQT1s/L1oROOBsNMCHRxIKzhLeU9GYdv2M6AbTDIQ6j/gaiM2hVhwsYS+GLOEME8fph5njd2eVtWitHfrq8wnrLf4D9zg6mAHJo5AAAAAASUVORK5CYII=)}\n#webamp .gen-window.selected .gen-top-left-fill {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAAAWklEQVRIS2PU0nT8z0BjwFhe1kd7S2ysY4eJJXLyqrT3yZtzVbS35P///7S3xMnRmvaWLJ6SRXtL6BInqmo6tPcJXTIjXcouulgyWkCSUgUx0iV10cUSeqQuABQNKbDZQyxmAAAAAElFTkSuQmCC)}\n#webamp .gen-window.selected .gen-top-right-fill {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAAAWklEQVRIS2PU0nT8z0BjwFhe1kd7S2ysY4eJJXLyqrT3yZtzVbS35P///7S3xMnRmvaWLJ6SRXtL6BInqmo6tPcJXTIjXcouulgyWkCSUgUx0iV10cUSeqQuABQNKbDZQyxmAAAAAElFTkSuQmCC)}\n#webamp .gen-window .gen-bottom-left {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAAOCAMAAAA16ON4AAABfVBMVEUdHS0dHS4dHi4eHS4eHi8fHzAfHzIgHzEgHzIhIDIhITMhITQiITQiIjUjIjYkIzckIzgkJDckJDklJDomJTsmJTwmJjsnJj0oJj0oJz4oKD8oKEApKEApKUApKkEqKUAqKUEqKkEqKkIrKUIrKkMrK0QrLEQsK0MsK0QsLEUsLEYtLUYtLUgtLkctLkguLUcuLUguLkcvLkkvL0ovMEowL0kwL0owMEsxL0wxMEwxMU4yMU0yMU4zMk8zMlA0MlA0M1E0NFE1M1I1NFM1NFQ2NFM2NFQ2NVQ3NlU3NlY4NVU4NlU4N1c5N1g5OFk5OFo6N1k6OFk6OVo7OVw7Ols7Olw8OVs8OVw8Olw8O109O149O2A9PF89PGA+O18+O2A+PF8+PGBqanpra3xsa3xsbH1sbH5tbX9ubX9ubYBuboBvboFvb4Jwb4Nxb4RxcIVxcYZycYZzcYhzcodzcoh0c4l0c4p1dIt1dIx2dY13dY53do54dY94do94d5Ap3ahhAAACBUlEQVQYGQXBAQEYNRAEwNlLig3E4KTCcFK81AZ8bpmJn7/89vOX3z+BgBAEgQyBNARCIEHS2YEICIEAIR0BUsEF8OcvxhhwKxiXKQNxZDCBMGJ0mL3OmhpJwxHBfacmzA4u333+gAGAMQk6PqlkL7tYrnOSWca2CaCb1g5vqESDReG8+koHcOdcHwYAI6SVPWcL+RgMvmA6kEQLdOrMDHYAOHaFxxl3Hxafz6Y9ywAQEZWKTEgVwQB9igVJqkbtpkA84Jl56tjNiaM78F1mtsMAaLSrxWjKTgIB4DQs1Wg13U5p0W3nALrS7TPd/x4MYHZzggGIBmlEvUrYizwLfWvBCAVNNB3zhMYDTo5xfpzPMQ4Bxk7+/f77GEDfiYyXYh3RrO+z3xgcqmWsgkjaRuweNSbn0VIv+rmM82jB4vtxzuUCf5OKQUBgEAiSgATSIBiCwGww0hAkHRyEA0BgAFSwAsDA7iaQAECRYUYCMDvMUBJoAp51AARw4c+/AASIRgTSmEYCIkAIIQ1iEAQEIg0CqVMBBBfrn67rHZEBmWCa+913YcLhwAghaSJx1umI2RwBZ08a15c5zyGBS3NoDGtekTFMmXNm26i6TsyMOk+2BkAlgjUZTM+8tiV7FJ9rzXlPAZv0CQGAMDUNBIaOkCbSEAIiMAEERo1UCCSB67vOOwBR8T8KSRhI0bzb7AAAAABJRU5ErkJggg==)}\n#webamp .gen-window .gen-bottom-right {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAAOCAMAAAA16ON4AAABfVBMVEUdHS0dHS4dHi4eHS4eHi8fHzAfHzIgHzEgHzIhIDIhITMhITQiITQiIjUjIjYkIzckIzgkJDklJDomJTkmJTsmJTwmJjsnJj0oJj0oJz4oKD8oKEApKEApKUApKkEqKUAqKUEqKkEqKkIrKUIrKkMrK0QrLEQsK0MsK0QsLEMsLEUsLEYtLUYuLUcuLUguLkcvLkkvL0ovMEowL0owMEsxL0wxMEwyMU0yMU4zMk8zMlA0Mk80MlA0M1E0NFE1M1I1NFM1NFQ2NFM2NFQ2NVQ3NlU3NlY4NVU4NlU4N1c5N1g5OFk5OFo6N1k6OFk6OVo7OVw7Ols7Olw8OVs8OVw8Olw8O109O149O2A9PF89PGA+O18+O2A+PF8+PGBAP1BAQFFAQFJfX3Fqanpra3xrbHxsa3xsbH1sbH5tbX9ubYBuboBvboFvb4Jwb4Nxb4RxcIVxcYZycYZzcYhzcodzcoh0c4l0c4p1dIt1dIx2dY13dY54dY94do94d5CUuEDKAAACKUlEQVQYGQXBwZFdRRAEwKyev3ZwwQ8gFisgdMIPzFlhhLhih2THvukiM3+jqRRolgIKpUAV2KZoU6WgaQGrKQoK3VQBvvH7Nz9e39nZ7ezsPJoFrni8PvOgNNUV91y7s21xqaaqWM2dy5qVLS12Ps3q1sL7v2Awd/u6Y56XmHB7N4960mOKVDO1uSwlSgsKjNQeZuhKStg9lkwM3i8wcPblwIOGfbzdFy6bfQFbaXtqZg+ROxEqBJ0ai91AUTvjhZox3u8HMKg8l31AlrfxibfXMHPQclzJubnWbTasVChFsFPQQXTgU6GM9/vxBRikk6zxAuHOcfAElAjS7dUTkxjOGBBgl1nAYjMLbxYhftt/vlxgIIfBA8rJTXa9WstC3UwS4s6dAl2ECjS7xI6Kxk6wDcT+0q9/7gcwwNnxvEAHV9t5PkPbCeFYHfSsG6gUGEV0UGMiomkhCeLXfvzZr1+A/ExTAFw8xwVdKIU1XdhZilIKFKWxpdGdsqBA2Ub565sfgzQAwHMu0AIKTAErSAMAKNJt0AoMAHsVLeD1B1QKaNEoqIJCUWiVpkpTTaEFbKooFLUACsDrO2zhARaXDg+3zNWUS+fiZnVn6ZaiTVk2FyzZplqWO4srzTaes2NgZ7AvUNyj1kOHc0mDmTjIIo2aCTQpRrOCDSvbbcApbaapcd2s13/QFMDlOXmgNtqURq1Ys3aWRosWUAW1qaZZDQuF7qkt+Gke/wNCVMxEPwTsWgAAAABJRU5ErkJggg==)}\n#webamp .gen-window .gen-bottom {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOAgMAAACnVF/TAAAACVBMVEUrKkM+PGB4d5A1hmUAAAAAGElEQVQI12NYBQYNDKFg4EAyjQ5wmQcFAFaEHSfLt0cNAAAAAElFTkSuQmCC)}\n#webamp .gen-window .gen-middle-left {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAdAgMAAAABTX4zAAAACVBMVEUdHS0qKUBqanoMSFahAAAAD0lEQVQI12NQ5QxhoDMGAFFyDru7vcmtAAAAAElFTkSuQmCC)}\n#webamp .gen-window .gen-middle-left-bottom {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAYAgMAAABRgO+AAAAACVBMVEUdHS0qKUBqanoMSFahAAAAD0lEQVQI12NQ5QxhoCEGAEUWDDHkAu/CAAAAAElFTkSuQmCC)}\n#webamp .gen-window .gen-middle-right {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAdAgMAAADqesUwAAAACVBMVEUdHS0qKUBqanoMSFahAAAADklEQVQI12OYOoWBBggAuDohplXr188AAAAASUVORK5CYII=)}\n#webamp .gen-window .gen-middle-right-bottom {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAYAgMAAAC6t1SDAAAACVBMVEUdHS0qKUBqanoMSFahAAAADklEQVQI12OYOoWBGggA6uEb2fBejlkAAAAASUVORK5CYII=)}\n#webamp .gen-window .gen-close.winamp-active {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAElBMVEU6MSljXjtsXUORbkq0kWP////9IyyfAAAAKUlEQVQI12NwAQIHBicBBiEHBkcmIUYHBgcFAwUgKRwsAGNDxCFqwOoB1gEH67W94+0AAAAASUVORK5CYII=)}\n#webamp .character-48 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAE0lEQVQI12NIYJjAsIHhApBMAAAULANhy/alSwAAAABJRU5ErkJggg==)}\n#webamp .character-49 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAD0lEQVQI12NQYEhgUIBAAAbMAQE/4OmzAAAAAElFTkSuQmCC)}\n#webamp .character-50 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12N4wCAAhAkMDQwfAA78AtFOxm3MAAAAAElFTkSuQmCC)}\n#webamp .character-51 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAFElEQVQIHWP4wKDAkMAgwDCBIQEAEHwCcej/ubUAAAAASUVORK5CYII=)}\n#webamp .character-52 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAFElEQVQIHWNQYEhgWMDwgUGBQQEADlwCUbptSVYAAAAASUVORK5CYII=)}\n#webamp .character-53 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAE0lEQVQI12P4wNDA8IBBAAgfAAAWXANRkouswAAAAABJRU5ErkJggg==)}\n#webamp .character-54 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12NIYGhgeMAwAQgTABOsA0E/JWQ/AAAAAElFTkSuQmCC)}\n#webamp .character-55 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEUlEQVQI12P4wCDAoMDgAIIADgwB4bVklkQAAAAASUVORK5CYII=)}\n#webamp .character-56 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEElEQVQI12NIYJjAAMJAEgAQvALRax9yugAAAABJRU5ErkJggg==)}\n#webamp .character-57 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12NIYJgAhAUMAgwJAA/sAmFIDiRPAAAAAElFTkSuQmCC)}\n#webamp .character-97 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEUlEQVQI12NIYJjA8AGIgRAAFNwDkUdAkdwAAAAASUVORK5CYII=)}\n#webamp .character-98 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEElEQVQI12N4wDCBAYSBJAAaPARRW/xs+gAAAABJRU5ErkJggg==)}\n#webamp .character-99 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12NIYJjA0ACEExgSABFMAuEl/r42AAAAAElFTkSuQmCC)}\n#webamp .character-100 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAIUlEQVQYV2NkeMTwnwEG5CAMRrAglMPwiIEBxKaKIJpFADZCEAGAIkAWAAAAAElFTkSuQmCC)}\n#webamp .character-101 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAE0lEQVQI12P4wNDA8ACIGxg+AAAZ7ARBle8LfgAAAABJRU5ErkJggg==)}\n#webamp .character-102 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEUlEQVQI12P4wNDA8ACIgRAAGXwD0QArRQgAAAAASUVORK5CYII=)}\n#webamp .character-103 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12MoYGhg2MAwAQgTABMMAyEYrKesAAAAAElFTkSuQmCC)}\n#webamp .character-104 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAIklEQVQYV2NkeMTwn0GOAQIeMTCA2Iy4BaEKwRR+lcSYCQBnQhEB2omL+AAAAABJRU5ErkJggg==)}\n#webamp .character-105 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADklEQVQI12MoYFCAwgIACEwBYXIvChIAAAAASUVORK5CYII=)}\n#webamp .character-106 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEElEQVQI12MQYADBCUCYAAAGnAGx9K9L/wAAAABJRU5ErkJggg==)}\n#webamp .character-107 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAE0lEQVQI12OYwLCA4QAQLmCYAAAXTAPhR2cHZQAAAABJRU5ErkJggg==)}\n#webamp .character-108 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAGUlEQVQYV2NkeMTwn0GOAQUw0kwQ2RqgpQBKiwwB5wSvgwAAAABJRU5ErkJggg==)}\n#webamp .character-109 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAIUlEQVQYV2NkeMTwn0GOAQIeMTCA2IxgQWSAXxCrdmIEAQtSEAH0ktA/AAAAAElFTkSuQmCC)}\n#webamp .character-110 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAE0lEQVQI12OYwMTAcIHpARAyAAATGAMpx84ilAAAAABJRU5ErkJggg==)}\n#webamp .character-111 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADklEQVQI12NIYJgAhQkAEgwDAakOOnUAAAAASUVORK5CYII=)}\n#webamp .character-112 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12N4wDCB4QFDAwgCABlcA9Fh/HqiAAAAAElFTkSuQmCC)}\n#webamp .character-113 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAE0lEQVQI12NIYJgAhBcYNjAUAAATvANxqBzBZwAAAABJRU5ErkJggg==)}\n#webamp .character-114 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12N4wKzA8IAJBD8AABkSBJqXbNZ9AAAAAElFTkSuQmCC)}\n#webamp .character-115 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12MoYGhgSGAQAMIHAA1cAlFD9hA9AAAAAElFTkSuQmCC)}\n#webamp .character-116 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADUlEQVQI12MoYFCAQQAH/AERspkQDgAAAABJRU5ErkJggg==)}\n#webamp .character-117 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADUlEQVQI12OYwACDCQAUHAMxvRgSGgAAAABJRU5ErkJggg==)}\n#webamp .character-118 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAD0lEQVQI12OYwACBCQwJABOMAwEw9lTJAAAAAElFTkSuQmCC)}\n#webamp .character-119 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEElEQVQI12OYwACCH4BwAgAXTAQhMxLiQgAAAABJRU5ErkJggg==)}\n#webamp .character-120 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEUlEQVQI12OYwDCBIQEIgTQAEgwDAb4oAK0AAAAASUVORK5CYII=)}\n#webamp .character-121 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEUlEQVQI12OYwDCBIYFBAQQBDwwB4W/sEnMAAAAASUVORK5CYII=)}\n#webamp .character-122 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAFElEQVQIHWP4wCDAoMDgwNDA8AEAD3wC0QyxJxkAAAAASUVORK5CYII=)}\n#webamp .character-34 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADUlEQVQIHWMIYGKAAQADkABTwIHJLQAAAABJRU5ErkJggg==)}\n#webamp .character-64 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12OQYFBgiABCBQYJAAbMASFkTTvgAAAAAElFTkSuQmCC)}\n#webamp .character-32 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAE0lEQVQYV2NkYGD4z4AGGOklCAChpQYBD5K5XgAAAABJRU5ErkJggg==)}\n#webamp .character-8230 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAC0lEQVQIHWNAgBUAALQAqf6ZnokAAAAASUVORK5CYII=)}\n#webamp .character-46 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAGUlEQVQYV2NkYGD4z4AGGGki+AhqkRzCNgCztQcBQ/F5qwAAAABJRU5ErkJggg==)}\n#webamp .character-58 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAG0lEQVQYV2NkYGD4z4AGGHELPoIqlYPQFKoEABHUCAEa7xBFAAAAAElFTkSuQmCC)}\n#webamp .character-40 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12NgYBBgUABCAQYGAAJMAGFQC8mLAAAAAElFTkSuQmCC)}\n#webamp .character-41 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12NgYGhgcADCBgYGAAkMAYFEejkbAAAAAElFTkSuQmCC)}\n#webamp .character-45 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAG0lEQVQYV2NkYGD4z4AGGEkQfISmXY6BgXjtANzFBwGYHC/oAAAAAElFTkSuQmCC)}\n#webamp .character-39 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADUlEQVQIHWNQYGKAAQABgAAjjGgVVgAAAABJRU5ErkJggg==)}\n#webamp .character-33 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAH0lEQVQYV2NkYGD4z/CIgYFBjgEOGKkhiDAOzMJqJgAQawsBnvEUjAAAAABJRU5ErkJggg==)}\n#webamp .character-95 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAFklEQVQYV2NkYGD4z4AGGGki+AjTIgCyawbjsVUKxAAAAABJRU5ErkJggg==)}\n#webamp .character-43 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEUlEQVQI12NQYGJg+MEAIhkACPABPfEgkLEAAAAASUVORK5CYII=)}\n#webamp .character-92 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAD0lEQVQI12NgYGhgZoBAAATIAI13IxiAAAAAAElFTkSuQmCC)}\n#webamp .character-47 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAFElEQVQIHWNgYOBgEGBQYHBgaAAAAqQA+cACQKYAAAAASUVORK5CYII=)}\n#webamp .character-91 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAHUlEQVQYV2NkYGD4z/CIAQLkIBQjXBAqQFVBJIsAMwMMAVy4DMAAAAAASUVORK5CYII=)}\n#webamp .character-93 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAIElEQVQYV2NkYGD4zwACj8AkA4McAwMjXBAmQU1BJIsACwMMAZBptUcAAAAASUVORK5CYII=)}\n#webamp .character-94 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEElEQVQIHWNQYAhg6GAAAwAH9AD5R+QUOwAAAABJRU5ErkJggg==)}\n#webamp .character-38 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12NQYAhgUGCIAJIaAAfsAWHaIpwJAAAAAElFTkSuQmCC)}\n#webamp .character-37 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAFElEQVQIHWNIYMhgEGBQYIhgkAAACgQBacCaDW0AAAAASUVORK5CYII=)}\n#webamp .character-44 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAHklEQVQYV2NkYGD4z4AGGKkl+IiBgUEOYjjCTCRBAMu1CAHlOP+DAAAAAElFTkSuQmCC)}\n#webamp .character-61 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAH0lEQVQYV2NkYGD4z4AGGMGCj5BE5RgYIIIUqkTTDgA65AgBoymWoAAAAABJRU5ErkJggg==)}\n#webamp .character-36 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12NQYChgSGAwAJIKAApcAbE85GZ1AAAAAElFTkSuQmCC)}\n#webamp .character-35 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAD0lEQVQI12NIYPjAAMEMABUMAwFxUzDLAAAAAElFTkSuQmCC)}\n#webamp .character-197 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12NIYJjAAMIfGCYAABIMA2Fjj6V0AAAAAElFTkSuQmCC)}\n#webamp .character-214 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEElEQVQI12OYwJDAMAEMEwASbAMBKm1nAQAAAABJRU5ErkJggg==)}\n#webamp .character-196 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAFElEQVQIHWOYwMDAkMAwgeEDwwQADwwDAcWvnbkAAAAASUVORK5CYII=)}\n#webamp .character-63 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAFElEQVQIHWNIYJjAIMCQwMDAkAAAC+wBwX8tiscAAAAASUVORK5CYII=)}\n#webamp .character-42 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAFElEQVQIHWNgYFBgeMBQwODAwAAACjwBsYRIp8kAAAAASUVORK5CYII=)}\n#webamp .character-60 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAHUlEQVQYV2NkYGD4z/CIAQLkIBQjXBAqQFVBJIsAMwMMAVy4DMAAAAAASUVORK5CYII=)}\n#webamp .character-62 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAIElEQVQYV2NkYGD4zwACj8AkA4McAwMjXBAmQU1BJIsACwMMAZBptUcAAAAASUVORK5CYII=)}\n#webamp .character-123 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAHUlEQVQYV2NkYGD4z/CIAQLkIBQjXBAqQFVBJIsAMwMMAVy4DMAAAAAASUVORK5CYII=)}\n#webamp .character-125 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAIElEQVQYV2NkYGD4zwACj8AkA4McAwMjXBAmQU1BJIsACwMMAZBptUcAAAAASUVORK5CYII=)}\n#webamp .gen-text-a {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAGFBMVEUpKUA3N01bW21iYnN4eIZ/f4yNjZmUlKDQ9WnQAAAAIUlEQVQIHWMAAcZyAQamdAUGVrMABnGVQgY11yKGIIZUACkrA92ildtqAAAAAElFTkSuQmCC)}\n#webamp .gen-window.selected .gen-text-a {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAGFBMVEUpKUBGRlmNjZmbm6bGxszU1Nnx8fL///8iRh7bAAAAIUlEQVQIHWMAAcZyAQamdAUGVrMABnGVQgY11yKGIIZUACkrA92ildtqAAAAAElFTkSuQmCC)}\n#webamp .gen-text-b {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAHlBMVEUpKUAxMUdGRlliYnNqanpwcIB4eIZ/f4yNjZmUlKBMQpI+AAAAIUlEQVQI12NgAAHOmVOARIKlAgNnWyuQVRQuAOXOnMoAAFkvBehWf7S3AAAAAElFTkSuQmCC)}\n#webamp .gen-window.selected .gen-text-b {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAHlBMVEUpKUA3N01iYnObm6apqbO4uL/GxszU1Nnx8fL////s2d+PAAAAIUlEQVQI12NgAAHOmVOARIKlAgNnWyuQVRQuAOXOnMoAAFkvBehWf7S3AAAAAElFTkSuQmCC)}\n#webamp .gen-text-c {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAJ1BMVEUpKUAxMUc3N00/P1NGRllUVGZbW21qanpwcIB4eIaGhpONjZmUlKBrx3tvAAAAJUlEQVQI12NgAAHWNZMZGHQSdzAw5DgwgAgFBgabgk6gxJ7JDABjoQaLYu6ObAAAAABJRU5ErkJggg==)}\n#webamp .gen-window.selected .gen-text-c {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAJ1BMVEUpKUA3N01GRllUVGZiYnN/f4yNjZmpqbO4uL/Gxszi4ubx8fL///9AK9zxAAAAJUlEQVQI12NgAAHWNZMZGHQSdzAw5DgwgAgFBgabgk6gxJ7JDABjoQaLYu6ObAAAAABJRU5ErkJggg==)}\n#webamp .gen-text-d {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAElBMVEUpKUBUVGZbW214eIaNjZmUlKBPxwelAAAAG0lEQVQI12NgAALTEAUGU6ZABlOGYAgGsUMUACkqA3OelxceAAAAAElFTkSuQmCC)}\n#webamp .gen-window.selected .gen-text-d {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAElBMVEUpKUB/f4yNjZnGxszx8fL///90u0SbAAAAG0lEQVQI12NgAALTEAUGU6ZABlOGYAgGsUMUACkqA3OelxceAAAAAElFTkSuQmCC)}\n#webamp .gen-text-e {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAHlBMVEUpKUA3N00/P1NGRllUVGZbW214eIZ/f4yNjZmUlKBpF6uKAAAAH0lEQVQI12NgAALOmVMZOBOAdJsDA2exABAbAcWmAQA4DwTidXJmqwAAAABJRU5ErkJggg==)}\n#webamp .gen-window.selected .gen-text-e {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAHlBMVEUpKUBGRllUVGZiYnN/f4yNjZnGxszU1Nnx8fL///+DgC81AAAAH0lEQVQI12NgAALOmVMZOBOAdJsDA2exABAbAcWmAQA4DwTidXJmqwAAAABJRU5ErkJggg==)}\n#webamp .gen-text-f {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAElBMVEUpKUA3N01GRllbW21qanqUlKC2H8YaAAAAGklEQVQI12NgAALT0CAGUwUg7SwAwSC2AgMAKTIC7Ms0rr0AAAAASUVORK5CYII=)}\n#webamp .gen-window.selected .gen-text-f {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAElBMVEUpKUBGRlliYnONjZmpqbP///9D5gpdAAAAGklEQVQI12NgAALT0CAGUwUg7SwAwSC2AgMAKTIC7Ms0rr0AAAAASUVORK5CYII=)}\n#webamp .gen-text-g {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAIVBMVEUpKUA/P1NGRllUVGZbW21wcIB4eIZ/f4yGhpONjZmUlKCnwN9hAAAAJ0lEQVQIHWMAA8aqZgYGzoQoAQYtBwYGBi2XVQoMnAVeCgyMXa0KAE4GBYcb4B3nAAAAAElFTkSuQmCC)}\n#webamp .gen-window.selected .gen-text-g {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAIVBMVEUpKUBUVGZiYnN/f4yNjZm4uL/GxszU1Nni4ubx8fL///+LwSrlAAAAJ0lEQVQIHWMAA8aqZgYGzoQoAQYtBwYGBi2XVQoMnAVeCgyMXa0KAE4GBYcb4B3nAAAAAElFTkSuQmCC)}\n#webamp .gen-text-h {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAJFBMVEUpKUBwcIBycoGCgo+hoauqqrO3t767u8O8vMPDw8nGxszKytD26YaTAAAAGElEQVQI12NgAAJphQoITl3BIO08A8YHADj6BOvV9DaxAAAAAElFTkSuQmCC)}\n#webamp .gen-window.selected .gen-text-h {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAFVBMVEUpKUCrq7TDw8no6Ovw8PH5+fr///9e3zXEAAAAFklEQVQI12NgAAIxgTQIDgFiozQYHwAqqAOv6ufnjgAAAABJRU5ErkJggg==)}\n#webamp .gen-text-i {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAHBAMAAADdS/HjAAAAFVBMVEUhITkkJDxra3xwcIBycoF6eoiCgo8pCsaXAAAAFUlEQVQI12MQEGQQCoQi4UQGERACABeTAqlm5PZ5AAAAAElFTkSuQmCC)}\n#webamp .gen-window.selected .gen-text-i {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAHBAMAAADdS/HjAAAAFVBMVEUkJDwxMULAwMfDw8ne3uHh4eXl5ehBk9l/AAAAFUlEQVQI12NgFGBgcgCjAAZmCEoAABAKAfHk6DTHAAAAAElFTkSuQmCC)}\n#webamp .gen-text-j {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAGFBMVEUpKUAxMUdGRllNTWBUVGZ4eIaNjZmUlKAAywzwAAAAE0lEQVQI12NgAIFSVCwCxOrJDAAh4QLodMJ9awAAAABJRU5ErkJggg==)}\n#webamp .gen-window.selected .gen-text-j {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAGFBMVEUpKUA3N01iYnNwcIB/f4zGxszx8fL///+/0FlwAAAAE0lEQVQI12NgAIFSVCwCxOrJDAAh4QLodMJ9awAAAABJRU5ErkJggg==)}\n#webamp .gen-text-k {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAHlBMVEUpKUAxMUc/P1NGRllNTWBUVGZbW22GhpONjZmUlKC0yuawAAAAIklEQVQI12NgAIFM00lAIiMBSHQGAImKAiDhNhVIGLYzAABxtgda2evVPQAAAABJRU5ErkJggg==)}\n#webamp .gen-window.selected .gen-text-k {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAHlBMVEUpKUA3N01UVGZiYnNwcIB/f4yNjZni4ubx8fL////1B4EGAAAAIklEQVQI12NgAIFM00lAIiMBSHQGAImKAiDhNhVIGLYzAABxtgda2evVPQAAAABJRU5ErkJggg==)}\n#webamp .gen-text-l {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHBAMAAAAyiZrdAAAAElBMVEUpKUAxMUdGRll4eIZ/f4yUlKDDTNTnAAAAFUlEQVQI12NgAIJgNByiJMAQGqoAABtZAp1Ff+GZAAAAAElFTkSuQmCC)}\n#webamp .gen-window.selected .gen-text-l {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHCAYAAADAp4fuAAAAMklEQVQYV2PU1HT4z4AGGP//////+PGzDMnJJXApaghevXqLoa9vFthMEBtsJrLlIAsBN0svzTt3mzcAAAAASUVORK5CYII=)}\n#webamp .gen-text-m {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHBAMAAADHdxFtAAAAIVBMVEUpKUAxMUdGRllUVGZbW21iYnNwcIB4eIZ/f4yGhpOUlKBZcblpAAAAI0lEQVQI12NgAAGtJZzLGbRWaAGJrjIg4bUYSGguBBKqCcsBjp0JorkYhMsAAAAASUVORK5CYII=)}\n#webamp .gen-window.selected .gen-text-m {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHBAMAAADHdxFtAAAAIVBMVEUpKUA3N01iYnN/f4yNjZmbm6a4uL/GxszU1Nni4ub////cS6NmAAAAI0lEQVQI12NgAAGtJZzLGbRWaAGJrjIg4bUYSGguBBKqCcsBjp0JorkYhMsAAAAASUVORK5CYII=)}\n#webamp .gen-text-n {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAHlBMVEUpKUAxMUc3N01GRllNTWBiYnNwcIB4eIaNjZmUlKCfa5y8AAAAIElEQVQI12NgAIIK5clMjA4MTP+NgPgKAxPDeiB+wwAASdwGGeDXGZQAAAAASUVORK5CYII=)}\n#webamp .gen-window.selected .gen-text-n {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAHlBMVEUpKUA3N01GRlliYnNwcICbm6a4uL/Gxszx8fL///8Fv7lnAAAAIElEQVQI12NgAIIK5clMjA4MTP+NgPgKAxPDeiB+wwAASdwGGeDXGZQAAAAASUVORK5CYII=)}\n#webamp .gen-text-o {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAHlBMVEUpKUA/P1NGRllUVGZbW214eIZ/f4yGhpONjZmUlKDmamWaAAAAHElEQVQI12NgAAKx6QYMrSwTGaYwTQFjEBsoBgBK6AZDMgIWOQAAAABJRU5ErkJggg==)}\n#webamp .gen-window.selected .gen-text-o {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAHlBMVEUpKUBUVGZiYnN/f4yNjZnGxszU1Nni4ubx8fL////xzWRAAAAAHElEQVQI12NgAAKx6QYMrSwTGaYwTQFjEBsoBgBK6AZDMgIWOQAAAABJRU5ErkJggg==)}\n#webamp .gen-text-p {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAJ1BMVEUpKUAxMUc/P1NGRllNTWBbW21iYnNqanpwcIB4eIZ/f4yGhpOUlKBLTaK7AAAAIElEQVQI12NgAIKYM5sYYgxPMMSEHGeIWZnIEGPAAMIAZzYHJUki1qIAAAAASUVORK5CYII=)}\n#webamp .gen-window.selected .gen-text-p {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAJ1BMVEUpKUA3N01UVGZiYnNwcICNjZmbm6apqbO4uL/GxszU1Nni4ub////2OqNjAAAAIElEQVQI12NgAIKYM5sYYgxPMMSEHGeIWZnIEGPAAMIAZzYHJUki1qIAAAAASUVORK5CYII=)}\n#webamp .gen-text-q {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAJFBMVEUpKUA3N00/P1NGRllUVGZbW214eIZ/f4yGhpONjZmSkp6UlKAHPYNOAAAAI0lEQVQI12NgAAGm6hYGBs6EaAEG6wDrAAjBmdBtAJTY1QAAWmwG3UPBF3oAAAAASUVORK5CYII=)}\n#webamp .gen-window.selected .gen-text-q {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAJ1BMVEUpKUBGRllUVGZiYnN/f4yNjZm4uMDGxszU1Nni4ubx8fL7+/v////Rx7x8AAAAI0lEQVQI12NgAAGmnikMDFwFMQIMNgE2ARCCq2COAVDidAIAYQkHOMhnyMoAAAAASUVORK5CYII=)}\n#webamp .gen-text-r {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAJ1BMVEUpKUAxMUc3N01GRllUVGZbW21qanpwcIB4eIZ/f4yGhpONjZmUlKDditvQAAAAIklEQVQI12NgAAGbM1uARMAcILHiJJBIPwQkQo4AicCTDACHOAih1LnoFgAAAABJRU5ErkJggg==)}\n#webamp .gen-window.selected .gen-text-r {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAJ1BMVEUpKUA3N01GRlliYnN/f4yNjZmpqbO4uL/GxszU1Nni4ubx8fL///9vCc2uAAAAIklEQVQI12NgAAGbM1uARMAcILHiJJBIPwQkQo4AicCTDACHOAih1LnoFgAAAABJRU5ErkJggg==)}\n#webamp .gen-text-s {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAJFBMVEUpKUAxMUc/P1NGRllUVGZbW21qanpwcIB4eIaGhpONjZmUlKCHjnJIAAAAIklEQVQIHWMAAY1dAQzVygoM1TsDGMRmb2IIZdvE4LnLAQBTHAco/pVKOwAAAABJRU5ErkJggg==)}\n#webamp .gen-window.selected .gen-text-s {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAJFBMVEUpKUA3N01UVGZiYnN/f4yNjZmpqbO4uL/Gxszi4ubx8fL///+qJyS0AAAAIklEQVQIHWMAAY1dAQzVygoM1TsDGMRmb2IIZdvE4LnLAQBTHAco/pVKOwAAAABJRU5ErkJggg==)}\n#webamp .gen-text-t {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHCAYAAADAp4fuAAAALklEQVQYV2PU0XH+z4AGGCdMmIMpqKZq819FVZHBzc2eYfXqLQyvX71hYKSBIACnryn7i49aBgAAAABJRU5ErkJggg==)}\n#webamp .gen-window.selected .gen-text-t {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHAgMAAAC9yW99AAAADFBMVEUpKUBUVGZycoH///9VDRy9AAAAE0lEQVQI12NgYGD4f4BBlwEZAQAkDAKhcYNEwQAAAABJRU5ErkJggg==)}\n#webamp .gen-text-u {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAFVBMVEUpKUAxMUdGRllUVGZbW21qanqUlKDA77WeAAAAFklEQVQI12NgAAI3hRRUHJLMIJoWAAA5UATxAlDxBQAAAABJRU5ErkJggg==)}\n#webamp .gen-window.selected .gen-text-u {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAFVBMVEUpKUA3N01iYnN/f4yNjZmpqbP///8SF7O4AAAAFklEQVQI12NgAAI3hRRUHJLMIJoWAAA5UATxAlDxBQAAAABJRU5ErkJggg==)}\n#webamp .gen-text-v {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAKlBMVEUpKUAxMUc/P1NGRllNTWBUVGZbW21iYnNqanpwcIB4eIaGhpONjZmUlKDthvA2AAAAIklEQVQIHWMAAd8EWQaeDTEMHJeWMzDfvMTAsHcDA0NtAgBSrAdcNQnv8gAAAABJRU5ErkJggg==)}\n#webamp .gen-window.selected .gen-text-v {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAKlBMVEUpKUA3N01UVGZiYnNwcIB/f4yNjZmbm6apqbO4uL/Gxszi4ubx8fL///81zHafAAAAIklEQVQIHWMAAd8EWQaeDTEMHJeWMzDfvMTAsHcDA0NtAgBSrAdcNQnv8gAAAABJRU5ErkJggg==)}\n#webamp .gen-text-w {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHBAMAAADHdxFtAAAALVBMVEUpKUAxMUc3N00/P1NGRllNTWBUVGZbW21iYnNqanpwcIB4eIZ/f4yNjZmUlKD3PA89AAAAKUlEQVQIHWMAg3nqT/wY8rKfdzPIzXt9nIHnXd9jBo7XcRcYWJ7zLQAAwo4M1uKKXVEAAAAASUVORK5CYII=)}\n#webamp .gen-window.selected .gen-text-w {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHBAMAAADHdxFtAAAALVBMVEUpKUA3N01GRllUVGZiYnNwcIB/f4yNjZmbm6apqbO4uL/GxszU1Nnx8fL///+8HCoLAAAAKUlEQVQIHWMAg3nqT/wY8rKfdzPIzXt9nIHnXd9jBo7XcRcYWJ7zLQAAwo4M1uKKXVEAAAAASUVORK5CYII=)}\n#webamp .gen-text-x {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAJFBMVEUpKUAxMUc3N01GRllNTWBbW21iYnNwcIB4eIaGhpONjZmUlKDqWCJLAAAAJElEQVQI12NgAAHJiVECDMzbtwCZ2Q0gYhEDA/PWHUCJhOwAAGilBx+T4WwNAAAAAElFTkSuQmCC)}\n#webamp .gen-window.selected .gen-text-x {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAJFBMVEUpKUA3N01GRlliYnNwcICNjZmbm6a4uL/Gxszi4ubx8fL///+x/boCAAAAJElEQVQI12NgAAHJiVECDMzbtwCZ2Q0gYhEDA/PWHUCJhOwAAGilBx+T4WwNAAAAAElFTkSuQmCC)}\n#webamp .gen-text-y {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAJFBMVEUpKUAxMUc/P1NGRllNTWBUVGZbW21iYnN4eIaGhpONjZmUlKAsqFJVAAAAHklEQVQI12NgAIIdrJsYsrMKGDh3CTCwbGNgYIZgAE8aBbSrMTxDAAAAAElFTkSuQmCC)}\n#webamp .gen-window.selected .gen-text-y {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAJFBMVEUpKUA3N01UVGZiYnNwcIB/f4yNjZmbm6bGxszi4ubx8fL///+UuWJCAAAAHklEQVQI12NgAIIdrJsYsrMKGDh3CTCwbGNgYIZgAE8aBbSrMTxDAAAAAElFTkSuQmCC)}\n#webamp .gen-text-z {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAHBAMAAAAsQKpuAAAAIVBMVEUAAAApKUAxMUc/P1NGRllbW21qanp4eIZ/f4yGhpOUlKAeeVtyAAAAAXRSTlMAQObYZgAAACdJREFUCNdjEBQUYACCqlULQJRgVgCIElkBFtRcDKaiShxA1CqwEgClfwdsfnJFGQAAAABJRU5ErkJggg==)}\n#webamp .gen-window.selected .gen-text-z {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAHBAMAAAAsQKpuAAAAIVBMVEUAAAApKUA3N01UVGZiYnONjZmpqbPGxszU1Nni4ub///8EpbEBAAAAAXRSTlMAQObYZgAAACdJREFUCNdjEBQUYACCqlULQJRgVgCIElkBFtRcDKaiShxA1CqwEgClfwdsfnJFGQAAAABJRU5ErkJggg==)}\n#webamp .gen-text-a {width: 6px;}\n#webamp .selected .gen-text-a {width: 6px;}\n#webamp .gen-text-b {width: 7px;}\n#webamp .selected .gen-text-b {width: 7px;}\n#webamp .gen-text-c {width: 7px;}\n#webamp .selected .gen-text-c {width: 7px;}\n#webamp .gen-text-d {width: 6px;}\n#webamp .selected .gen-text-d {width: 6px;}\n#webamp .gen-text-e {width: 6px;}\n#webamp .selected .gen-text-e {width: 6px;}\n#webamp .gen-text-f {width: 6px;}\n#webamp .selected .gen-text-f {width: 6px;}\n#webamp .gen-text-g {width: 7px;}\n#webamp .selected .gen-text-g {width: 7px;}\n#webamp .gen-text-h {width: 6px;}\n#webamp .selected .gen-text-h {width: 6px;}\n#webamp .gen-text-i {width: 4px;}\n#webamp .selected .gen-text-i {width: 4px;}\n#webamp .gen-text-j {width: 6px;}\n#webamp .selected .gen-text-j {width: 6px;}\n#webamp .gen-text-k {width: 7px;}\n#webamp .selected .gen-text-k {width: 7px;}\n#webamp .gen-text-l {width: 5px;}\n#webamp .selected .gen-text-l {width: 5px;}\n#webamp .gen-text-m {width: 8px;}\n#webamp .selected .gen-text-m {width: 8px;}\n#webamp .gen-text-n {width: 6px;}\n#webamp .selected .gen-text-n {width: 6px;}\n#webamp .gen-text-o {width: 6px;}\n#webamp .selected .gen-text-o {width: 6px;}\n#webamp .gen-text-p {width: 6px;}\n#webamp .selected .gen-text-p {width: 6px;}\n#webamp .gen-text-q {width: 7px;}\n#webamp .selected .gen-text-q {width: 7px;}\n#webamp .gen-text-r {width: 7px;}\n#webamp .selected .gen-text-r {width: 7px;}\n#webamp .gen-text-s {width: 6px;}\n#webamp .selected .gen-text-s {width: 6px;}\n#webamp .gen-text-t {width: 5px;}\n#webamp .selected .gen-text-t {width: 5px;}\n#webamp .gen-text-u {width: 6px;}\n#webamp .selected .gen-text-u {width: 6px;}\n#webamp .gen-text-v {width: 6px;}\n#webamp .selected .gen-text-v {width: 6px;}\n#webamp .gen-text-w {width: 8px;}\n#webamp .selected .gen-text-w {width: 8px;}\n#webamp .gen-text-x {width: 7px;}\n#webamp .selected .gen-text-x {width: 7px;}\n#webamp .gen-text-y {width: 6px;}\n#webamp .selected .gen-text-y {width: 6px;}\n#webamp .gen-text-z {width: 11px;}\n#webamp .selected .gen-text-z {width: 11px;}\n#webamp #title-bar #close {cursor: url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAgICAAMDAwAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAAAB/gAAIgAAAAAAAAAAAAAAAf4AACAAAAAAAAAAAAAcAB/gAAAAAAAAAAAAAAAAHgAf4AAAAAAAAAAAAAAAAB/gPgAAADwAAAAAAAAAAAAf/gAAAAA8AAAAAAAAAAAAH//iIiAAPAAAAAAAAAAAAB//4iIAADwAAAAAAAAAAAAf/iIgAAA8AAAAAAAAAAAAH/4iAAAAAAAAAAAAAAAAAB/iIAAAAAAAAAAAAAAAAAAf4gAAAAAAAAAAAAAAAAAAHiAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////j////w////8P///+HP//3hz//8w8///EP///wHz//8AE///ADP//wBz//8A8///AfP//wP///8H////D////x////8/////f////w==), auto}\n#webamp #equalizer-window .band {cursor: url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPcAAAAAAAAAAAAAAAAAAA/3cAAAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAAAAAAAAAAAAAAAAAAj3AAAA9wAAAAAAAAAAgACPcAAAAPcAAAAAAAAAAIcAj3AAAAAAAAAAAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAA/3cAAAAAAAAACP/3d3AAAA9wAAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////////////////////////////////////////////////////////////8////+H///jA///wwP//8P///+Hz//3h4f/8w+H//EPz//wH///8AED//ADA//wB4f/8A/P//Af///wP///8H////D////x////8/////f////w==), auto}\n#webamp #equalizer-window .title-bar {cursor: url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3AAAAAAAAAAAAAAAAAAAP93AAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAHAAAAAHAAAAAAAAAAj3AAdwAHcAB3AAAAAAgACPcAAP8AD/AA/wAAAAAIcAj3AAAPAAAAAPAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAAAP93AAAAAAAACP/3d3AAAAAPcAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////P////h///jwP//w8D//8M/P/+GMx/3hCEP8wwhD/EOMx/wHz8/8AHA//ADwP/wB+H/8A/z//Af///wP///8H////D////x////8/////f////w==), auto}\n#webamp #equalizer-window.shade {cursor: url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3AAAAAAAAAAAAAAAAAAAP93AAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAHAAAAAHAAAAAAAAAAj3AAdwAHcAB3AAAAAAgACPcAAP8AD/AA/wAAAAAIcAj3AAAPAAAAAPAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAAAP93AAAAAAAACP/3d3AAAAAPcAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////P////h///jwP//w8D//8M/P/+GMx/3hCEP8wwhD/EOMx/wHz8/8AHA//ADwP/wB+H/8A/z//Af///wP///8H////D////x////8/////f////w==), auto}\n#webamp #equalizer-window.shade input {cursor: url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3AAAAAAAAAAAAAAAAAAAP93AAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAHAAAAAHAAAAAAAAAAj3AAdwAHcAB3AAAAAAgACPcAAP8AD/AA/wAAAAAIcAj3AAAPAAAAAPAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAAAP93AAAAAAAACP/3d3AAAAAPcAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////P////h///jwP//w8D//8M/P/+GMx/3hCEP8wwhD/EOMx/wHz8/8AHA//ADwP/wB+H/8A/z//Af///wP///8H////D////x////8/////f////w==), auto}\n#webamp .window {cursor: url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAgICAAMDAwAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAcAB/gAAAAAAAAAAAAAAAAHgAf4AAAAAAAAAAAAAAAAB/gPgAAAAAAAAAAAAAAAAAf/gAAAAAAAAAAAAAAAAAAH//iIiAAAAAAAAAAAAAAAB//4iIAAAAAAAAAAAAAAAAf/iIgAAAAAAAAAAAAAAAAH/4iAAAAAAAAAAAAAAAAAB/iIAAAAAAAAAAAAAAAAAAf4gAAAAAAAAAAAAAAAAAAHiAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////j////w////8P///+H///3h///8w////EP///wH///8AH///AD///wB///8A////Af///wP///8H////D////x////8/////f////w==), auto}\n#webamp .window input {cursor: url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAgICAAMDAwAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAcAB/gAAAAAAAAAAAAAAAAHgAf4AAAAAAAAAAAAAAAAB/gPgAAAAAAAAAAAAAAAAAf/gAAAAAAAAAAAAAAAAAAH//iIiAAAAAAAAAAAAAAAB//4iIAAAAAAAAAAAAAAAAf/iIgAAAAAAAAAAAAAAAAH/4iAAAAAAAAAAAAAAAAAB/iIAAAAAAAAAAAAAAAAAAf4gAAAAAAAAAAAAAAAAAAHiAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////j////w////8P///+H///3h///8w////EP///wH///8AH///AD///wB///8A////Af///wP///8H////D////x////8/////f////w==), auto}\n#webamp #main-window {cursor: url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAgICAAMDAwAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAcAB/gAAAAAAAAAAAAAAAAHgAf4AAAAAAAAAAAAAAAAB/gPgAAAAAAAAAAAAAAAAAf/gAAAAAAAAAAAAAAAAAAH//iIiAAAAAAAAAAAAAAAB//4iIAAAAAAAAAAAAAAAAf/iIgAAAAAAAAAAAAAAAAH/4iAAAAAAAAAAAAAAAAAB/iIAAAAAAAAAAAAAAAAAAf4gAAAAAAAAAAAAAAAAAAHiAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////j////w////8P///+H///3h///8w////EP///wH///8AH///AD///wB///8A////Af///wP///8H////D////x////8/////f////w==), auto}\n#webamp #main-window.shade #title-bar {cursor: url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAgICAAMDAwAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAcAB/gAAAAAAAAAAAAAAAAHgAf4AAAAAAAAAAAAAAAAB/gPgAAAAAAAAAAAAAAAAAf/gAAAAAAAAAAAAAAAAAAH//iIiAAAAAAAAAAAAAAAB//4iIAAAAAAAAAAAAAAAAf/iIgAAAAAAAAAAAAAAAAH/4iAAAAAAAAAAAAAAAAAB/iIAAAAAAAAAAAAAAAAAAf4gAAAAAAAAAAAAAAAAAAHiAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////j////w////8P///+H///3h///8w////EP///wH///8AH///AD///wB///8A////Af///wP///8H////D////x////8/////f////w==), auto}\n#webamp #playlist-window {cursor: url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAgICAAMDAwAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAcAB/gAAAAAAAAAAAAAAAAHgAf4AAAAAAAAAAAAAAAAB/gPgAAAAAAAAAAAAAAAAAf/gAAAAAAAAAAAAAAAAAAH//iIiAAAAAAAAAAAAAAAB//4iIAAAAAAAAAAAAAAAAf/iIgAAAAAAAAAAAAAAAAH/4iAAAAAAAAAAAAAAAAAB/iIAAAAAAAAAAAAAAAAAAf4gAAAAAAAAAAAAAAAAAAHiAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////j////w////8P///+H///3h///8w////EP///wH///8AH///AD///wB///8A////Af///wP///8H////D////x////8/////f////w==), auto}\n#webamp #playlist-window .playlist-top {cursor: url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3AAAAAAAAAAAAAAAAAAAP93AAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAHAAAAAHAAAAAAAAAAj3AAdwAHcAB3AAAAAAgACPcAAP8AD/AA/wAAAAAIcAj3AAAPAAAAAPAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAAAP93AAAAAAAACP/3d3AAAAAPcAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////P////h///jwP//w8D//8M/P/+GMx/3hCEP8wwhD/EOMx/wHz8/8AHA//ADwP/wB+H/8A/z//Af///wP///8H////D////x////8/////f////w==), auto}\n#webamp #main-window #position {cursor: url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAHAAAAAHAAAAAAAAAAj3AAdwAHcAB3AAAAAAgACPcAAP8AD/AA/wAAAAAIcAj3AAAPAAAAAPAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAAAAAAAAAAAAAACP/3d3AAAAAAAAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////j////w////8M/P/+GMx/3hCEP8wwhD/EOMx/wHz8/8AH///AD///wB///8A////Af///wP///8H////D////x////8/////f////w==), auto}\n#webamp #playlist-window #playlist-resize-target {cursor: url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPcAAAAAAAAAAAAAAAAAAA/3cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAcAAAAAAAAAAACPcAAAdwAHcAAAAAAAAAAAj3AAAP8AD/AAAAAAAAgACPcAAAAAAA8AAAAAAAAIcAj3AAAAAAAAAAAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAAAAAAAAAAAAAACP/3d3AAAAAAAAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////////////////////////////////////n////w////4H///iB///w/n//8OY//+HCH/3hwh/8w+Y//EP+f/wH///8AH///AD///wB///8A////Af///wP///8H////D////x////8/////f////w==), auto}\n#webamp #playlist-window .playlist-scrollbar {cursor: url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPcAAAAAAAAAAAAAAAAAAA/3cAAAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAAAAAAAAAAAAAAAAAAj3AAAA9wAAAAAAAAAAgACPcAAAAPcAAAAAAAAAAIcAj3AAAAAAAAAAAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAA/3cAAAAAAAAACP/3d3AAAA9wAAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////////////////////////////////////////////////////////////8////+H///jA///wwP//8P///+Hz//3h4f/8w+H//EPz//wH///8AED//ADA//wB4f/8A/P//Af///wP///8H////D////x////8/////f////w==), auto}\n#webamp #main-window #title-bar {cursor: url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3AAAAAAAAAAAAAAAAAAAP93AAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAHAAAAAHAAAAAAAAAAj3AAdwAHcAB3AAAAAAgACPcAAP8AD/AA/wAAAAAIcAj3AAAPAAAAAPAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAAAP93AAAAAAAACP/3d3AAAAAPcAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////P////h///jwP//w8D//8M/P/+GMx/3hCEP8wwhD/EOMx/wHz8/8AHA//ADwP/wB+H/8A/z//Af///wP///8H////D////x////8/////f////w==), auto}\n#webamp #volume {cursor: url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAHAAAAAHAAAAAAAAAAj3AAdwAHcAB3AAAAAAgACPcAAP8AD/AA/wAAAAAIcAj3AAAPAAAAAPAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAAAAAAAAAAAAAACP/3d3AAAAAAAAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////j////w////8M/P/+GMx/3hCEP8wwhD/EOMx/wHz8/8AH///AD///wB///8A////Af///wP///8H////D////x////8/////f////w==), auto}\n#webamp #volume input {cursor: url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAHAAAAAHAAAAAAAAAAj3AAdwAHcAB3AAAAAAgACPcAAP8AD/AA/wAAAAAIcAj3AAAPAAAAAPAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAAAAAAAAAAAAAACP/3d3AAAAAAAAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////j////w////8M/P/+GMx/3hCEP8wwhD/EOMx/wHz8/8AH///AD///wB///8A////Af///wP///8H////D////x////8/////f////w==), auto}\n#webamp #balance {cursor: url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAHAAAAAHAAAAAAAAAAj3AAdwAHcAB3AAAAAAgACPcAAP8AD/AA/wAAAAAIcAj3AAAPAAAAAPAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAAAAAAAAAAAAAACP/3d3AAAAAAAAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////j////w////8M/P/+GMx/3hCEP8wwhD/EOMx/wHz8/8AH///AD///wB///8A////Af///wP///8H////D////x////8/////f////w==), auto}\n#webamp-context-menu .context-menu {\n  left: 0px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  cursor: default;\n}\n#webamp-context-menu .context-menu.bottom {\n  top: 12px;\n}\n#webamp-context-menu .context-menu.top {\n  top: 0px;\n}\n#webamp-context-menu .context-menu,\n#webamp-context-menu .context-menu ul {\n  z-index: 50; /* Gross */\n  background-color: #ffffff;\n  position: absolute;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  border: 1px solid #a7a394;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n}\n#webamp-context-menu .context-menu li {\n  position: relative;\n  font-family: \"Tahoma\";\n  font-size: 11px;\n  color: black;\n  white-space: nowrap;\n  margin: 2px;\n  padding: 1px 18px 3px 18px;\n  display: block;\n}\n#webamp-context-menu .context-menu li.checked:before {\n  float: left;\n  /* TODO: Use an image */\n  content: \"\\2713\";\n  margin-left: -12px;\n}\n#webamp-context-menu .context-menu li.parent:after {\n  float: right;\n  content: \"\\25b8\";\n  margin-right: -12px;\n}\n#webamp-context-menu .context-menu li a {\n  text-decoration: none;\n  color: black;\n  cursor: default;\n}\n#webamp-context-menu .context-menu li:hover,\n#webamp-context-menu .context-menu li:hover a {\n  background-color: #224eb7;\n  color: #ffffff;\n}\n#webamp-context-menu .context-menu li.hr {\n  padding: 2px 0;\n}\n#webamp-context-menu .context-menu li.hr:hover {\n  background-color: #ffffff;\n}\n#webamp-context-menu .context-menu li.hr hr {\n  border: none;\n  height: 1px;\n  background-color: #a7a394;\n  margin: 0;\n  padding: 0;\n}\n#webamp-context-menu .context-menu ul {\n  display: none;\n  left: 100%;\n  margin-left: -3px;\n}\n#webamp-context-menu .context-menu li:hover > ul {\n  display: block;\n}\n/* Styles */\n#webamp #equalizer-window {\n  height: 116px;\n  width: 275px;\n}\n#webamp #equalizer-window.shade {\n  height: 14px;\n}\n#webamp #equalizer-volume {\n  position: absolute;\n  left: 61px;\n  top: 4px;\n  height: 6px;\n  width: 97px;\n  background-position: 0 0;\n}\n#webamp #equalizer-volume::-webkit-slider-thumb {\n  height: 7px;\n  width: 3px;\n}\n#webamp #equalizer-volume::-moz-range-thumb {\n  height: 7px;\n  width: 3px;\n}\n#webamp #equalizer-balance {\n  position: absolute;\n  left: 164px;\n  top: 4px;\n  height: 6px;\n  width: 43px;\n  background-position: 0 0;\n}\n#webamp #equalizer-balance::-webkit-slider-thumb {\n  height: 7px;\n  width: 3px;\n}\n#webamp #equalizer-balance::-moz-range-thumb {\n  height: 7px;\n  width: 3px;\n}\n#webamp .equalizer-top {\n  height: 14px;\n  width: 275px;\n  position: relative;\n}\n#webamp #equalizer-close {\n  position: absolute;\n  height: 9px;\n  width: 9px;\n  left: 264px;\n  top: 3px;\n}\n#webamp #equalizer-shade {\n  position: absolute;\n  height: 9px;\n  width: 9px;\n  left: 254px;\n  top: 3px;\n}\n#webamp #on {\n  position: absolute;\n  width: 26px;\n  height: 12px;\n  top: 18px;\n  left: 14px;\n}\n#webamp #auto {\n  position: absolute;\n  width: 32px;\n  height: 12px;\n  top: 18px;\n  left: 40px;\n}\n#webamp #presets-context {\n  position: absolute;\n  width: 44px;\n  height: 12px;\n  top: 18px;\n  left: 217px;\n}\n#webamp #presets {\n  width: 100%;\n  height: 100%;\n}\n#webamp #eqGraph {\n  position: absolute;\n  width: 113px;\n  height: 19px;\n  top: 17px;\n  left: 86px;\n}\n#webamp #preamp {\n  position: absolute;\n  left: 21px;\n  top: 38px;\n}\n#webamp #plus12db {\n  position: absolute;\n  left: 45px;\n  top: 36px;\n  width: 22px;\n  height: 8px;\n}\n#webamp #zerodb {\n  position: absolute;\n  left: 45px;\n  top: 64px;\n  width: 22px;\n  height: 8px;\n}\n#webamp #minus12db {\n  position: absolute;\n  left: 45px;\n  top: 95px;\n  width: 22px;\n  height: 8px;\n}\n#webamp #band-60 {\n  position: absolute;\n  left: 78px;\n  top: 38px;\n}\n#webamp #band-170 {\n  position: absolute;\n  left: 96px;\n  top: 38px;\n}\n#webamp #band-310 {\n  position: absolute;\n  left: 114px;\n  top: 38px;\n}\n#webamp #band-600 {\n  position: absolute;\n  left: 132px;\n  top: 38px;\n}\n#webamp #band-1000 {\n  position: absolute;\n  left: 150px;\n  top: 38px;\n}\n#webamp #band-3000 {\n  position: absolute;\n  left: 168px;\n  top: 38px;\n}\n#webamp #band-6000 {\n  position: absolute;\n  left: 186px;\n  top: 38px;\n}\n#webamp #band-12000 {\n  position: absolute;\n  left: 204px;\n  top: 38px;\n}\n#webamp #band-14000 {\n  position: absolute;\n  left: 222px;\n  top: 38px;\n}\n#webamp #band-16000 {\n  position: absolute;\n  left: 240px;\n  top: 38px;\n}\n#webamp .gen-text-space {\n  width: 5px;\n}\n#webamp .gen-text-letter {\n  height: 7px;\n  display: inline-block;\n}\n#webamp .gen-window {\n  /* Default size */\n  width: 275px;\n  height: 116px;\n  display: flex;\n  flex-direction: column;\n}\n#webamp .gen-top {\n  height: 20px;\n  display: flex;\n  flex-direction: row;\n}\n#webamp .gen-top-left {\n  width: 25px;\n  height: 20px;\n}\n#webamp .gen-top-title {\n  line-height: 7px;\n  margin-top: 2px;\n  /* TODO: This should be a conciquence of the repeating tiles, not hard coded */\n  padding: 0 3px 0 4px;\n}\n#webamp .gen-top-left-fill {\n  flex-grow: 1;\n  height: 20px;\n  background-position: left;\n}\n#webamp .gen-top-right-fill {\n  flex-grow: 1;\n  height: 20px;\n  background-position: right;\n}\n#webamp .gen-top-left-end {\n  width: 25px;\n  height: 20px;\n}\n#webamp .gen-top-right {\n  width: 25px;\n  height: 20px;\n}\n#webamp .gen-top-right-end {\n  width: 25px;\n  height: 20px;\n}\n#webamp .gen-close {\n  width: 9px;\n  height: 9px;\n  position: absolute;\n  right: 2px;\n  top: 3px;\n}\n#webamp .gen-middle {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n}\n#webamp .gen-middle-left {\n  width: 11px;\n}\n#webamp .gen-middle-left-bottom {\n  width: 11px;\n  height: 24px;\n  bottom: 0;\n  position: absolute;\n}\n#webamp .gen-middle-center {\n  flex-grow: 1;\n  position: relative;\n}\n#webamp .gen-middle-right {\n  width: 8px;\n}\n#webamp .gen-middle-right-bottom {\n  width: 8px;\n  height: 24px;\n  bottom: 0;\n  position: absolute;\n}\n#webamp .gen-bottom {\n  height: 14px;\n  background-repeat: repeat-x;\n}\n#webamp .gen-bottom-left {\n  position: absolute;\n  left: 0;\n  width: 125px;\n  height: 14px;\n}\n#webamp .gen-bottom-right {\n  position: absolute;\n  right: 0;\n  width: 125px;\n  height: 14px;\n}\n#webamp .gen-bottom-right #gen-resize-target {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  height: 20px;\n  width: 20px;\n}\n/* Styles */\n#webamp #main-window {\n  position: absolute;\n  height: 116px;\n  width: 275px;\n  /* Ask the browser to scale showing large pixels if possible */\n  image-rendering: -moz-crisp-edges; /* Firefox */\n  image-rendering: -o-crisp-edges; /* Opera */\n  image-rendering: -webkit-optimize-contrast; /* Safari */\n  image-rendering: pixelated; /* Only in Chrome > 40 */\n  -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */\n}\n#webamp #title-bar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 14px;\n  width: 275px;\n}\n#webamp #option-context,\n#webamp #minimize,\n#webamp #shade,\n#webamp #close {\n  position: absolute;\n  height: 9px;\n  width: 9px;\n  top: 3px;\n}\n#webamp #title-bar #option {\n  width: 100%;\n  height: 100%;\n}\n#webamp #title-bar #option-context {\n  left: 6px;\n}\n#webamp #title-bar #minimize {\n  left: 244px;\n}\n#webamp #title-bar #shade {\n  left: 254px;\n}\n#webamp #title-bar #close {\n  left: 264px;\n}\n#webamp #clutter-bar {\n  position: absolute;\n  top: 22px;\n  left: 10px;\n  height: 43px;\n  width: 8px;\n}\n#webamp #clutter-bar div {\n  position: absolute;\n  height: 7px;\n  width: 8px;\n  left: 0px;\n}\n#webamp #clutter-bar #button-o {\n  top: 3px;\n  height: 8px;\n}\n#webamp #clutter-bar #button-a {\n  top: 11px;\n}\n#webamp #clutter-bar #button-i {\n  top: 18px;\n}\n#webamp #clutter-bar #button-d {\n  top: 25px;\n  height: 8px;\n}\n#webamp #clutter-bar #button-v {\n  top: 33px;\n}\n#webamp #play-pause {\n  position: absolute;\n  top: 28px;\n  left: 26px;\n  height: 9px;\n  width: 9px;\n  background-repeat: no-repeat;\n}\n#webamp .play #work-indicator,\n#webamp #work-indicator.selected {\n  position: absolute;\n  top: 28px;\n  left: 24px;\n  height: 9px;\n  width: 3px;\n}\n#webamp .webamp-status #time {\n  position: absolute;\n  left: 39px;\n  top: 26px;\n  /* Just to make it clickable */\n  height: 13px;\n  width: 59px;\n}\n#webamp .stop .webamp-status #time {\n  display: none;\n}\n#webamp .pause .webamp-status #time {\n  animation: blink 2s step-start 1s infinite;\n  -webkit-animation: blink 2s step-start 1s infinite;\n}\n#webamp .webamp-status #time #minus-sign {\n  /* Note that this get's augmented by the skin CSS if NUM_EX.BMP is present */\n  position: absolute;\n  top: 6px;\n  left: -1px;\n  width: 5px;\n  height: 1px;\n}\n#webamp .webamp-status #time #minute-first-digit {\n  position: absolute;\n  pointer-events: none;\n  left: 9px;\n  height: 13px;\n  width: 9px;\n}\n#webamp .webamp-status #time #minute-second-digit {\n  position: absolute;\n  pointer-events: none;\n  left: 21px;\n  height: 13px;\n  width: 9px;\n}\n#webamp .webamp-status #time #second-first-digit {\n  position: absolute;\n  pointer-events: none;\n  left: 39px;\n  height: 13px;\n  width: 9px;\n}\n#webamp .webamp-status #time #second-second-digit {\n  position: absolute;\n  pointer-events: none;\n  left: 51px;\n  height: 13px;\n  width: 9px;\n}\n#webamp #main-window #visualizer {\n  position: absolute;\n  top: 43px;\n  left: 24px;\n}\n#webamp #main-window.shade #visualizer {\n  top: 5px;\n  left: 79px;\n}\n#webamp .text {\n  display: none;\n}\n#webamp #marquee {\n  position: absolute;\n  left: 111px;\n  top: 24px;\n  width: 154px;\n  height: 6px;\n  overflow: hidden;\n  display: block;\n  padding: 3px 0px; /* Ensure the target is correct for the cursor */\n}\n#webamp .media-info #kbps {\n  position: absolute;\n  left: 111px;\n  top: 43px;\n  width: 15px;\n  height: 6px;\n  overflow: hidden;\n}\n#webamp .stop .media-info #kbps {\n  display: none;\n}\n#webamp .media-info #khz {\n  position: absolute;\n  left: 156px;\n  top: 43px;\n  width: 10px;\n  height: 6px;\n  overflow: hidden;\n}\n#webamp .stop .media-info #khz {\n  display: none;\n}\n#webamp .media-info .mono-stereo {\n  position: absolute;\n  left: 212px;\n  top: 41px;\n  width: 57px;\n  height: 12px;\n}\n#webamp .media-info .mono-stereo div {\n  position: absolute;\n  height: 12px;\n}\n#webamp .media-info .mono-stereo #mono {\n  width: 27px;\n}\n#webamp .media-info .mono-stereo #stereo {\n  left: 27px;\n  width: 29px;\n}\n#webamp #volume {\n  position: absolute;\n  left: 107px;\n  top: 57px;\n  height: 13px;\n  width: 68px;\n  background-position: 0 0;\n}\n#webamp #volume input {\n  height: 13px;\n  /* The input itself, is actually 3px shorter than the background\n     * https://twitter.com/LuigiHann/status/959275940688867328\n     */\n  width: 65px;\n  display: block;\n}\n#webamp #volume input::-webkit-slider-thumb {\n  top: 1px;\n  height: 11px;\n  width: 14px;\n}\n#webamp #volume input::-moz-range-thumb {\n  top: 1px;\n  height: 11px;\n  width: 14px;\n}\n#webamp #balance {\n  position: absolute;\n  left: 177px;\n  top: 57px;\n  height: 13px;\n  width: 38px;\n  background-position: 0 0;\n}\n#webamp #balance::-webkit-slider-thumb {\n  top: 1px;\n  height: 11px;\n  width: 14px;\n}\n#webamp #balance::-moz-range-thumb {\n  top: 1px;\n  height: 11px;\n  width: 14px;\n}\n#webamp .windows {\n  position: absolute;\n  left: 219px;\n  top: 58px;\n  width: 46px;\n  height: 12px;\n}\n#webamp .windows div {\n  position: absolute;\n  width: 23px;\n  height: 12px;\n}\n#webamp .windows #equalizer-button {\n  left: 0;\n}\n#webamp .windows #playlist-button {\n  left: 23px;\n}\n#webamp #position {\n  position: absolute;\n  left: 16px;\n  top: 72px;\n  width: 248px;\n  height: 10px;\n}\n#webamp #position::-webkit-slider-thumb {\n  height: 10px;\n  width: 29px;\n  /*\n     * Fix the strange bug in Safair/mobile-chrome\n     * http://stackoverflow.com/questions/26727769/rendering-glitch-when-manipulating-range-input-value-via-javascript-in-webkit\n     */\n  -webkit-box-sizing: border-box;\n  position: relative;\n}\n#webamp #position::-moz-range-thumb {\n  height: 10px;\n  width: 29px;\n}\n/* For some reason, we can't use display: none here */\n#webamp .stop #position::-webkit-slider-thumb {\n  visibility: hidden;\n}\n#webamp .stop #position::-moz-range-thumb {\n  visibility: hidden;\n}\n/* For some reason this is needed for the position slider to show up now that\n * we are using React.\n */\n#webamp .play #position::-webkit-slider-thumb {\n  visibility: visible;\n}\n#webamp .actions div {\n  height: 18px;\n  width: 23px;\n  position: absolute;\n}\n#webamp .actions #previous {\n  top: 88px;\n  left: 16px;\n}\n#webamp .actions #play {\n  top: 88px;\n  left: 39px;\n}\n#webamp .actions #pause {\n  top: 88px;\n  left: 62px;\n}\n#webamp .actions #stop {\n  top: 88px;\n  left: 85px;\n}\n#webamp .actions #next {\n  top: 88px;\n  left: 108px;\n  width: 22px;\n}\n#webamp #eject {\n  position: absolute;\n  top: 89px;\n  left: 136px;\n  height: 16px;\n  width: 22px;\n}\n#webamp .shuffle-repeat {\n  position: absolute;\n  top: 89px;\n  left: 164px;\n  width: 74px;\n}\n#webamp .shuffle-repeat div {\n  position: absolute;\n  height: 15px;\n}\n#webamp .shuffle-repeat #shuffle {\n  width: 47px;\n}\n#webamp .shuffle-repeat #repeat {\n  left: 46px;\n  width: 28px;\n}\n#webamp #about {\n  position: absolute;\n  top: 91px;\n  left: 253px;\n  height: 15px;\n  width: 13px;\n}\n#webamp .digit {\n  position: absolute;\n  display: inline-block;\n  width: 9px;\n  height: 13px;\n  background-repeat: no-repeat;\n  text-indent: -9999px;\n}\n/* Shade View */\n#webamp #main-window.shade {\n  height: 14px;\n}\n#webamp .shade .media-info,\n#webamp .shade .windows,\n#webamp .shade #volume,\n#webamp .shade #balance,\n#webamp .shade .shuffle-repeat,\n#webamp .shade .webamp-status {\n  display: none;\n}\n#webamp .shade #title-bar {\n}\n#webamp .shade .actions div {\n  position: absolute;\n}\n#webamp .shade .actions #previous,\n#webamp .shade .actions #previous.winamp-active {\n  background: none;\n  height: 10px;\n  width: 7px;\n  top: 2px;\n  left: 169px;\n}\n#webamp .shade .actions #play,\n#webamp .shade .actions #play.winamp-active {\n  background: none;\n  height: 10px;\n  width: 10px;\n  top: 2px;\n  left: 176px;\n}\n#webamp .shade .actions #pause,\n#webamp .shade .actions #pause.winamp-active {\n  background: none;\n  height: 10px;\n  width: 9px;\n  top: 2px;\n  left: 186px;\n}\n#webamp .shade .actions #stop,\n#webamp .shade .actions #stop.winamp-active {\n  background: none;\n  height: 10px;\n  width: 9px;\n  top: 2px;\n  left: 195px;\n}\n#webamp .shade .actions #next,\n#webamp .shade .actions #next.winamp-active {\n  background: none;\n  height: 10px;\n  width: 10px;\n  top: 2px;\n  left: 204px;\n}\n#webamp .shade #eject,\n#webamp .shade #eject.winamp-active {\n  height: 10px;\n  width: 10px;\n  top: 2px;\n  left: 215px;\n  background: none;\n}\n#webamp .shade #position {\n  position: absolute;\n  left: 226px;\n  top: 4px;\n  width: 17px;\n  height: 7px;\n}\n#webamp .shade #position::-webkit-slider-thumb {\n  height: 7px;\n  width: 3px;\n  /* This make it appear. Not sure why */\n  background: none;\n}\n#webamp .shade #position::-moz-range-thumb {\n  height: 7px;\n  width: 3px;\n  /* This make it appear. Not sure why */\n  background: none;\n}\n#webamp #main-window .mini-time {\n  position: absolute;\n  top: 4px;\n  left: 127px;\n}\n.webamp-desktop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n}\n#webamp .mini-time {\n  display: block;\n  height: 6px;\n  width: 25px;\n}\n#webamp .mini-time.blinking .character:not(.background-character) {\n  animation: blink 2s step-start 1s infinite;\n  -webkit-animation: blink 2s step-start 1s infinite;\n}\n#webamp .mini-time .background-character {\n  z-index: 1;\n}\n#webamp .mini-time .character {\n  position: absolute;\n  top: 0;\n  z-index: 2;\n}\n/* Styles */\n#webamp #playlist-window {\n  display: flex;\n  flex-direction: column;\n}\n#webamp .playlist-top {\n  width: 100%;\n  min-height: 20px;\n  max-height: 20px;\n  position: relative;\n  display: flex;\n}\n#webamp .playlist-top-left {\n  width: 25px;\n}\n#webamp .playlist-top-left-spacer {\n  width: 12px;\n}\n#webamp .playlist-top-left-fill {\n  flex-grow: 1;\n  background-position: right;\n}\n#webamp .playlist-top-right-spacer {\n  /* This goes to the right of the center */\n  width: 13px;\n}\n#webamp .playlist-top-right-fill {\n  flex-grow: 1;\n  background-position: right;\n}\n#webamp .playlist-top-title {\n  width: 100px;\n}\n#webamp .playlist-top-right {\n  width: 25px;\n}\n#webamp .playlist-middle {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n}\n#webamp .playlist-middle-left {\n  background-repeat: repeat-y;\n  width: 12px;\n  min-width: 12px;\n}\n#webamp .playlist-middle-center {\n  flex-grow: 1;\n  padding: 3px 0;\n  min-width: 0; /* Not sure why this is needed */\n}\n#webamp .playlist-tracks {\n  display: flex;\n  flex: 1 0 auto;\n}\n#webamp .playlist-tracks .track-cell {\n  height: 13px;\n  line-height: 13px;\n  font-size: 9px;\n  letter-spacing: 0.5px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n#webamp .playlist-track-durations > div {\n  padding-right: 3px;\n  text-align: right;\n}\n#webamp .playlist-track-titles {\n  flex: 1 1 auto;\n  overflow: hidden;\n}\n#webamp .playlist-track-titles > div {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n#webamp .playlist-middle-right {\n  background-repeat: repeat-y;\n  background-position: top right;\n  width: 20px;\n  min-width: 20px;\n  position: relative;\n  padding-bottom: 18px;\n}\n#webamp .playlist-bottom {\n  width: 100%;\n  height: 38px;\n  min-height: 38px;\n  max-height: 38px;\n  position: relative;\n}\n#webamp .playlist-bottom-left {\n  width: 125px;\n  height: 100%;\n  position: absolute;\n}\n#webamp .playlist-menu li {\n  list-style: none;\n  display: none;\n  width: 22px;\n  height: 18px;\n  padding: 0;\n  margin: 0;\n}\n#webamp .playlist-menu li > div {\n  height: 100%;\n}\n#webamp .playlist-menu ul {\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  bottom: 0;\n}\n#webamp .playlist-menu.selected li {\n  display: block;\n}\n#webamp .playlist-menu .bar {\n  position: absolute;\n  bottom: 0;\n  left: -3px;\n  width: 3px;\n  height: 54px;\n}\n#webamp #playlist-add-menu {\n  position: absolute;\n  bottom: 12px;\n  left: 14px;\n  width: 22px;\n  height: 18px;\n}\n#webamp #playlist-remove-menu.playlist-menu .bar {\n  height: 72px;\n}\n#webamp #playlist-remove-menu {\n  position: absolute;\n  bottom: 12px;\n  left: 43px;\n  width: 22px;\n  height: 18px;\n}\n#webamp #playlist-selection-menu {\n  position: absolute;\n  bottom: 12px;\n  left: 72px;\n  width: 22px;\n  height: 18px;\n}\n#webamp #playlist-misc-menu {\n  position: absolute;\n  bottom: 12px;\n  left: 101px;\n  width: 22px;\n  height: 18px;\n}\n#webamp #playlist-list-menu {\n  position: absolute;\n  bottom: 12px;\n  right: 22px;\n  width: 22px;\n  height: 18px;\n}\n#webamp .playlist-bottom-right {\n  width: 150px;\n  height: 100%;\n  position: absolute;\n  right: 0;\n}\n#webamp .playlist-running-time-display {\n  position: absolute;\n  top: 10px;\n  left: 7px;\n  height: 10px;\n}\n#webamp .playlist-action-buttons {\n  position: absolute;\n  top: 22px;\n  left: 3px;\n  display: flex;\n}\n#webamp .playlist-action-buttons > div {\n  height: 10px;\n  width: 10px;\n}\n#webamp #playlist-window .playlist-visualizer {\n  width: 75px;\n  height: 100%;\n  position: absolute;\n  right: 150px;\n}\n#webamp #playlist-window .mini-time {\n  position: absolute;\n  top: 23px;\n  left: 66px;\n}\n#webamp #playlist-window #playlist-resize-target {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  height: 20px;\n  width: 20px;\n}\n#webamp #playlist-close-button {\n  position: absolute;\n  right: 2px;\n  height: 9px;\n  width: 9px;\n  top: 3px;\n}\n#webamp #playlist-shade-button {\n  position: absolute;\n  right: 12px;\n  height: 9px;\n  width: 9px;\n  top: 3px;\n}\n#webamp #playlist-window-shade {\n  height: 14px;\n}\n#webamp #playlist-window-shade .left {\n  height: 14px;\n  background-repeat: no-repeat;\n}\n#webamp #playlist-window-shade .right {\n  height: 14px;\n  background-repeat: no-repeat;\n  background-position-x: right;\n}\n#webamp #playlist-window #playlist-scroll-up-button,\n#webamp #playlist-window #playlist-scroll-down-button {\n  position: absolute;\n  width: 8px;\n  height: 5px;\n  right: 7px;\n}\n#webamp #playlist-window #playlist-scroll-up-button {\n  top: 2px;\n}\n#webamp #playlist-window #playlist-scroll-down-button {\n  top: 8px;\n}\n#webamp #playlist-window-shade #playlist-resize-target {\n  position: absolute;\n  right: 20px;\n  top: 3px;\n  height: 9px;\n  width: 9px;\n}\n#webamp #playlist-shade-track-title {\n  position: absolute;\n  top: 4px;\n  left: 5px;\n}\n#webamp #playlist-shade-time {\n  position: absolute;\n  top: 4px;\n  right: 30px;\n}\n#webamp #playlist-window .visualizer-wrapper {\n  position: absolute;\n  top: 12px;\n  left: 2px;\n  width: 72px;\n  overflow: hidden;\n}\n/* Rules used by all windows */\n#webamp {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n/* Prevent accidental highlighting */\n#webamp canvas {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n#webamp * {\n  /* Some environments globably change the box-sizing */\n  box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n}\n#webamp *:focus {\n  outline: 0;\n}\n/* Range input css reset */\n#webamp input[type=\"range\"] {\n  -webkit-appearance: none;\n  margin: 0;\n  padding: 0;\n  background: none;\n  border: none;\n}\n#webamp input[type=\"range\"]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 0;\n  background: none;\n}\n#webamp input[type=\"range\"]::-moz-range-thumb {\n  border: none;\n  border-radius: 0;\n  background: none;\n}\n#webamp input[type=\"range\"]::-moz-range-track {\n  border: none;\n  background: none;\n}\n#webamp input[type=\"range\"]:focus {\n  outline: none;\n}\n#webamp input[type=\"range\"]::-moz-focus-outer {\n  border: 0;\n}\n#webamp a:focus {\n  outline: none;\n}\n/* Animation */\n@keyframes blink {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes blink {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n#webamp .character {\n  display: inline-block;\n  vertical-align: top;\n  width: 5px;\n  height: 6px;\n  /* background-image: TEXT.BMP via Javascript */\n  text-indent: -9999px;\n}\n#webamp .window {\n  position: absolute;\n  /* Ask the browser to scale showing large pixels if possible */\n  image-rendering: -moz-crisp-edges; /* Firefox */\n  image-rendering: -o-crisp-edges; /* Opera */\n  image-rendering: -webkit-optimize-contrast; /* Safari */\n  image-rendering: pixelated; /* Only in Chrome > 40 */\n  -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */\n}\n#webamp .window {\n  /* Work around rendering bug with clip-path */\n  -webkit-transform: translateZ(0);\n}\n#webamp .window.doubled {\n  -moz-transform: translateZ(0) scale(2);\n  -moz-transform-origin: top left;\n  -webkit-transform: translateZ(0) scale(2);\n  -webkit-transform-origin: top left;\n}\n";

	/**
	 * Constructs the windows to render
	 */
	function App({ media, filePickers }) {
	    const closed = useTypedSelector(getClosed);
	    const genWindowsInfo = useTypedSelector(getGenWindows);
	    const zIndex = useTypedSelector(getZIndex);
	    const browserWindowSizeChanged$1 = useActionCreator(browserWindowSizeChanged);
	    const setFocusedWindow$1 = useActionCreator(setFocusedWindow);
	    const [webampNode] = reactExports.useState(() => {
	        const node = document.createElement("div");
	        node.id = "webamp";
	        // @ts-ignore I think I'm supposed to set this with setAttribute, but I can't confirm.
	        node.role = "application";
	        return node;
	    });
	    reactExports.useLayoutEffect(() => {
	        webampNode.style.zIndex = String(zIndex);
	    }, [webampNode, zIndex]);
	    reactExports.useLayoutEffect(() => {
	        document.body.appendChild(webampNode);
	        return () => {
	            document.body.removeChild(webampNode);
	        };
	    }, [webampNode]);
	    reactExports.useEffect(() => {
	        const handleWindowResize = () => {
	            if (webampNode == null) {
	                return;
	            }
	            // It's a bit tricky to measure the "natural" size of the browser window.
	            // Specifically we want to know how large the window would be without our
	            // own Webamp windows influencing it. To achieve this, we temporarily make
	            // our container `overflow: hidden;`. We then make our container full
	            // screen by setting the bottom/right properties to zero. This second part
	            // allows our Webamp windows to stay visible during the resize. After we
	            // measure, we set the style back so that we don't end up interfering with
	            // click events outside of our Webamp windows.
	            webampNode.style.right = "0";
	            webampNode.style.bottom = "0";
	            webampNode.style.overflow = "hidden";
	            browserWindowSizeChanged$1(getWindowSize$1());
	            webampNode.style.right = "auto";
	            webampNode.style.bottom = "auto";
	            webampNode.style.overflow = "visible";
	        };
	        handleWindowResize();
	        window.addEventListener("resize", handleWindowResize);
	        return () => {
	            window.removeEventListener("resize", handleWindowResize);
	        };
	    }, [browserWindowSizeChanged$1, webampNode]);
	    const renderWindows = reactExports.useCallback(() => {
	        return objectMap(genWindowsInfo, (w, id) => {
	            if (!w.open) {
	                return null;
	            }
	            switch (id) {
	                case WINDOWS.MAIN:
	                    return (jsxRuntimeExports.jsx(MainWindow, { analyser: media.getAnalyser(), filePickers: filePickers }));
	                case WINDOWS.EQUALIZER:
	                    return jsxRuntimeExports.jsx(EqualizerWindow, {});
	                case WINDOWS.PLAYLIST:
	                    return jsxRuntimeExports.jsx(PlaylistWindow, { analyser: media.getAnalyser() });
	                case WINDOWS.MILKDROP:
	                    return jsxRuntimeExports.jsx(Milkdrop, { analyser: media.getAnalyser() });
	                default:
	                    throw new Error(`Tried to render an unknown window: ${id}`);
	            }
	        });
	    }, [media, filePickers, genWindowsInfo]);
	    const handleBlur = (e) => {
	        if (!e.currentTarget.contains(e.relatedTarget)) {
	            setFocusedWindow$1(null);
	        }
	    };
	    if (closed) {
	        return null;
	    }
	    return ReactDOM.createPortal(jsxRuntimeExports.jsxs(reactExports.StrictMode, { children: [jsxRuntimeExports.jsx(Css, { children: css_248z }), jsxRuntimeExports.jsxs("div", { onBlur: handleBlur, children: [jsxRuntimeExports.jsx(Skin, {}), jsxRuntimeExports.jsx(ContextMenuWraper, { renderContents: () => jsxRuntimeExports.jsx(MainContextMenu, { filePickers: filePickers }), children: jsxRuntimeExports.jsx(WindowManager, { windows: renderWindows() }) })] })] }), webampNode);
	}

	const IGNORE_EVENTS_FROM_TAGS = new Set(["input", "textarea", "select"]);
	function bindHotkeys(dispatch) {
	    let currentPos = 0;
	    const trigger = [
	        78, // N
	        85, // U
	        76, // L
	        76, // L
	        83, // S
	        79, // O
	        70, // F
	        84, // T
	    ];
	    const listener = (e) => {
	        if (e.target instanceof Element &&
	            IGNORE_EVENTS_FROM_TAGS.has(e.target.tagName.toLowerCase())) {
	            return;
	        }
	        if (e.ctrlKey) {
	            switch (e.keyCode) {
	                case 68: // CTRL+D
	                    dispatch(toggleDoubleSizeMode());
	                    e.preventDefault(); // Supress the "Bookmark" action on windows.
	                    break;
	                case 76: // CTRL+L FIXME
	                    break;
	                case 82: // CTRL+R
	                    dispatch(reverseList());
	                    break;
	                case 84: // CTRL+T
	                    dispatch({ type: TOGGLE_TIME_MODE });
	                    break;
	            }
	        }
	        else if (e.altKey) {
	            switch (e.keyCode) {
	                case 87: // ALT+W
	                    dispatch(toggleWindow("main"));
	                    break;
	                case 69: // ALT+E
	                    dispatch(toggleWindow("playlist"));
	                    break;
	                case 71: // ALT+G
	                    dispatch(toggleWindow("equalizer"));
	                    break;
	            }
	        }
	        else {
	            switch (e.keyCode) {
	                case 37: // left arrow
	                    dispatch(seekBackward(5));
	                    break;
	                case 38: // up arrow
	                    dispatch(adjustVolume(1));
	                    break;
	                case 39: // right arrow
	                    dispatch(seekForward(5));
	                    break;
	                case 40: // down arrow
	                    dispatch(adjustVolume(-1));
	                    break;
	                case 66: // B
	                    dispatch(next());
	                    break;
	                case 67: // C
	                    dispatch(pause());
	                    break;
	                case 76: // L
	                    dispatch(openMediaFileDialog());
	                    break;
	                case 82: // R
	                    dispatch(toggleRepeat());
	                    break;
	                case 83: // S
	                    dispatch(toggleShuffle());
	                    break;
	                case 86: // V
	                    dispatch(stop());
	                    break;
	                case 88: // X
	                    dispatch(play());
	                    break;
	                case 90: // Z
	                    dispatch(previous());
	                    break;
	                case 96: // numpad 0
	                    dispatch(openMediaFileDialog());
	                    break;
	                case 97: // numpad 1
	                    dispatch(nextN(-10));
	                    break;
	                case 98: // numpad 2
	                    dispatch(adjustVolume(-1));
	                    break;
	                case 99: // numpad 3
	                    dispatch(nextN(10));
	                    break;
	                case 100: // numpad 4
	                    dispatch(previous());
	                    break;
	                case 101: // numpad 5
	                    dispatch(play());
	                    break;
	                case 102: // numpad 6
	                    dispatch(next());
	                    break;
	                case 103: // numpad 7
	                    dispatch(seekBackward(5));
	                    break;
	                case 104: // numpad 8
	                    dispatch(adjustVolume(1));
	                    break;
	                case 105: // numpad 9
	                    dispatch(seekForward(5));
	                    break;
	            }
	        }
	        // Easter Egg
	        // Ignore escape. Usually this gets swallowed by the browser, but not always.
	        if (e.keyCode !== 27) {
	            currentPos = e.keyCode === trigger[currentPos] ? currentPos + 1 : 0;
	            if (currentPos === trigger.length) {
	                dispatch({ type: TOGGLE_LLAMA_MODE });
	            }
	        }
	    };
	    document.addEventListener("keydown", listener);
	    return () => {
	        document.removeEventListener("keydown", listener);
	    };
	}

	class Emitter {
	    _listeners;
	    constructor() {
	        this._listeners = {};
	    }
	    on(event, callback) {
	        const eventListeners = this._listeners[event] || [];
	        eventListeners.push(callback);
	        this._listeners[event] = eventListeners;
	        const unsubscribe = () => {
	            this._listeners[event] = eventListeners.filter((cb) => cb !== callback);
	        };
	        return unsubscribe;
	    }
	    trigger(event, ...args) {
	        const callbacks = this._listeners[event];
	        if (callbacks) {
	            callbacks.forEach((cb) => cb(...args));
	        }
	    }
	    dispose() {
	        this._listeners = {};
	    }
	}

	// The Web Audio API does not offer an easy way to make a stereo balance
	// control. This is an attempt to fill that void, using an API similar to
	// [StereoPannerNode](https://developer.mozilla.org/en-US/docs/Web/API/StereoPannerNode)
	function StereoBalanceNode(context, options = {
	  balance: 0
	}) {
	  let balance = 0;

	  // ChannelSplitterNode cannot be told to use a `channelInterperatation` of
	  // "speakers". This means that if we get a mono file, we will end up only
	  // playing in the left speaker. So instead we use this dummy gain node to
	  // convert whatever source we get (stereo, mono, or n channels) into a stereo
	  // signal.
	  // Idea credit: https://github.com/WebAudio/web-audio-api/issues/975#issue-177242377
	  const upMixer = context.createGain();
	  upMixer.channelCount = 2;
	  upMixer.channelCountMode = "explicit";
	  upMixer.channelInterpretation = "speakers";
	  const splitter = context.createChannelSplitter(2);

	  // Create the gains for left and right
	  const leftGain = context.createGain();
	  const rightGain = context.createGain();
	  const merger = context.createChannelMerger(2);
	  upMixer.connect(splitter);
	  splitter.connect(leftGain, 0);
	  splitter.connect(rightGain, 1);
	  leftGain.connect(merger, 0, 0);
	  rightGain.connect(merger, 0, 1);

	  // -1 (left) to 1 (right)
	  function set(rawValue) {
	    const value = Number(rawValue);
	    leftGain.gain.value = value > 0 ? 1 - value : 1;
	    rightGain.gain.value = value > 0 ? 1 : 1 + value;
	    balance = value;
	  }
	  function get() {
	    return balance;
	  }

	  // Create our own version of an [AudioParam](https://developer.mozilla.org/en-US/docs/Web/API/AudioParam).
	  // We don't currently support any of the "over time" methods, but maybe some day
	  // we'll want to.
	  const audioParam = {};
	  Object.defineProperties(audioParam, {
	    value: {
	      get,
	      set,
	      enumerable: true,
	      configurable: true
	    }
	  });

	  // The way the `.connect` API works, we can't actually construct our own
	  // AudioNode. Instead we have to take an existing node and monkey patch it.
	  Object.defineProperties(upMixer, {
	    balance: {
	      value: audioParam,
	      enumerable: true,
	      writable: false,
	      configurable: true
	    },
	    connect: {
	      value: AudioNode.prototype.connect.bind(merger),
	      enumerable: false,
	      writable: false,
	      configurable: true
	    },
	    disconnect: {
	      value: AudioNode.prototype.disconnect.bind(merger),
	      enumerable: false,
	      writable: false,
	      configurable: true
	    }
	  });
	  if (balance !== options.balance) {
	    set(options.balance);
	  }
	  return upMixer;
	}

	class ElementSource {
	    _emitter;
	    _context;
	    _source;
	    _destination;
	    _audio;
	    _stalled;
	    _status;
	    on(eventType, cb) {
	        return this._emitter.on(eventType, cb);
	    }
	    constructor(context, destination) {
	        this._emitter = new Emitter();
	        this._context = context;
	        this._destination = destination;
	        this._audio = document.createElement("audio");
	        this._audio.crossOrigin = "anonymous";
	        this._stalled = false;
	        this._status = MEDIA_STATUS.STOPPED;
	        // TODO: #leak
	        this._audio.addEventListener("suspend", () => {
	            this._setStalled(true);
	        });
	        // TODO: #leak
	        this._audio.addEventListener("durationchange", () => {
	            this._emitter.trigger("loaded");
	            this._setStalled(false);
	        });
	        // TODO: #leak
	        this._audio.addEventListener("ended", () => {
	            this._emitter.trigger("ended");
	            this._setStatus(MEDIA_STATUS.STOPPED);
	        });
	        // TODO: Throttle to 50 (if needed)
	        // TODO: #leak
	        this._audio.addEventListener("timeupdate", () => {
	            this._emitter.trigger("positionChange");
	        });
	        // TODO: #leak
	        this._audio.addEventListener("error", (e) => {
	            switch (this._audio.error.code) {
	                case 1:
	                    // The fetching of the associated resource was aborted by the user's request.
	                    console.error("MEDIA_ERR_ABORTED", e);
	                    break;
	                case 2:
	                    console.error("MEDIA_ERR_NETWORK", e);
	                    // Some kind of network error occurred which prevented the media from being successfully fetched, despite having previously been available.
	                    break;
	                case 3:
	                    // Despite having previously been determined to be usable, an error occurred while trying to decode the media resource, resulting in an error.
	                    // There is a bug in Chrome where improperly terminated mp3s can cuase this error.
	                    // https://bugs.chromium.org/p/chromium/issues/detail?id=794782
	                    // Related: Commit f44e826c83c74fef04c2c448af30cfb353b28312
	                    console.error("PIPELINE_ERROR_DECODE", e);
	                    break;
	                case 4:
	                    console.error("MEDIA_ERR_SRC_NOT_SUPPORTED", e);
	                    // The associated resource or media provider object (such as a MediaStream) has been found to be unsuitable.
	                    break;
	            }
	            // Rather than just geting stuck in this error state, we can just pretend this is
	            // the end of the track.
	            this._emitter.trigger("ended");
	            this._setStatus(MEDIA_STATUS.STOPPED);
	        });
	        this._source = this._context.createMediaElementSource(this._audio);
	        this._source.connect(destination);
	    }
	    _setStalled(stalled) {
	        this._stalled = stalled;
	        this._emitter.trigger("stallChanged");
	    }
	    disconnect() {
	        this._source.disconnect();
	    }
	    // Async for now, for compatibility with BufferAudioSource
	    // TODO: This does not need to be async
	    async loadUrl(url) {
	        this._audio.src = url;
	    }
	    async play() {
	        if (this._status !== MEDIA_STATUS.PAUSED) {
	            this.seekToTime(0);
	        }
	        try {
	            await this._audio.play();
	            // TODO #race
	        }
	        catch (err) {
	            //
	        }
	        this._setStatus(MEDIA_STATUS.PLAYING);
	    }
	    pause() {
	        this._audio.pause();
	        this._setStatus(MEDIA_STATUS.PAUSED);
	    }
	    stop() {
	        this._audio.pause();
	        this._audio.currentTime = 0;
	        this._setStatus(MEDIA_STATUS.STOPPED);
	    }
	    seekToTime(time) {
	        /* TODO: We could check if this is actually seekable:
	        const { seekable } = this._audio;
	        for (let i = 0; i < seekable.length; i++) {
	          console.log("start", seekable.start(i), "end", seekable.end(i));
	        }
	        */
	        this._audio.currentTime = clamp(time, 0, this.getDuration());
	        this._emitter.trigger("positionChange");
	    }
	    getStalled() {
	        return this._stalled;
	    }
	    getStatus() {
	        return this._status;
	    }
	    getDuration() {
	        const { duration } = this._audio;
	        // Safari on iOS currently has a strange behavior where it reports
	        // the duration as infinity if an Accept-Ranges header is not returned.
	        // For now, 0 is better even though it's still wrong.
	        return isNaN(duration) || duration === Infinity ? 0 : duration;
	    }
	    getTimeElapsed() {
	        return this._audio.currentTime;
	    }
	    _setStatus(status) {
	        this._status = status;
	        this._emitter.trigger("statusChange");
	    }
	    dispose() {
	        // TODO: Dispose subscriptions to this.audio
	        this.stop();
	        this._emitter.dispose();
	    }
	}

	/* Emulate the native <audio> element with Web Audio API */
	// NOTE: While this is not technically a public API, https://winampify.io/ is
	// replacing this class with a custom version. Breaking changes to this API
	// surface should be communicated to Remi.
	class Media {
	    _emitter;
	    _context;
	    _balance;
	    _staticSource;
	    _preamp;
	    _analyser;
	    _gainNode;
	    _source;
	    _bands;
	    constructor() {
	        this._emitter = new Emitter();
	        // @ts-ignore Typescript does not know about webkitAudioContext
	        this._context = new (window.AudioContext || window.webkitAudioContext)();
	        // Fix for iOS and Chrome (Canary) which require that the context be created
	        // or resumed by a user interaction.
	        // https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
	        // https://gist.github.com/laziel/7aefabe99ee57b16081c
	        // Via: https://stackoverflow.com/a/43395068/1263117
	        // TODO #leak
	        if (this._context.state === "suspended") {
	            const resume = async () => {
	                await this._context.resume();
	                if (this._context.state === "running") {
	                    // TODO: Add this to the disposable
	                    document.body.removeEventListener("touchend", resume, false);
	                    document.body.removeEventListener("click", resume, false);
	                    document.body.removeEventListener("keydown", resume, false);
	                }
	            };
	            document.body.addEventListener("touchend", resume, false);
	            document.body.addEventListener("click", resume, false);
	            document.body.addEventListener("keydown", resume, false);
	        }
	        // TODO: Maybe we can get rid of this now that we are using AudioAbstraction?
	        this._staticSource = this._context.createGain(); // Just a noop node
	        // @ts-ignore The way this class has to be monkey patched, makes it very hard to type.
	        this._balance = new StereoBalanceNode(this._context);
	        // Create the preamp node
	        this._preamp = this._context.createGain();
	        // Create the analyser node for the visualizer
	        this._analyser = this._context.createAnalyser();
	        this._analyser.fftSize = 2048;
	        // don't smooth audio analysis
	        this._analyser.smoothingTimeConstant = 0.0;
	        // Create the gain node for the volume control
	        this._gainNode = this._context.createGain();
	        // Connect all the nodes in the correct way
	        // (Note, source is created and connected later)
	        //
	        //                <source>
	        //                    |
	        //                    |_____________
	        //                    |             \
	        //                <preamp>          |
	        //                    |             | <-- Optional bypass
	        //           [...biquadFilters]     |
	        //                    |_____________/
	        //                    |
	        //              <staticSource>
	        //                    |
	        //                <balance>
	        //                    |
	        //                    |\
	        //                    | <analyser>
	        //                  <gain>
	        //                    |
	        //              <destination>
	        this._source = new ElementSource(this._context, this._staticSource);
	        this._source.on("positionChange", () => {
	            this._emitter.trigger("timeupdate");
	        });
	        this._source.on("ended", () => {
	            this._emitter.trigger("ended");
	        });
	        this._source.on("statusChange", () => {
	            switch (this._source.getStatus()) {
	                case MEDIA_STATUS.PLAYING:
	                    this._emitter.trigger("playing");
	                    break;
	            }
	            this._emitter.trigger("timeupdate");
	        });
	        this._source.on("loaded", () => {
	            this._emitter.trigger("fileLoaded");
	        });
	        this._staticSource.connect(this._preamp);
	        let output = this._preamp;
	        this._bands = {};
	        BANDS.forEach((band, i) => {
	            const filter = this._context.createBiquadFilter();
	            this._bands[band] = filter;
	            if (i === 0) {
	                // The first filter, includes all lower frequencies
	                filter.type = "lowshelf";
	            }
	            else if (i === BANDS.length - 1) {
	                // The last filter, includes all higher frequencies
	                filter.type = "highshelf";
	            }
	            else {
	                filter.type = "peaking";
	            }
	            filter.frequency.value = band;
	            filter.gain.value = 0;
	            output.connect(filter);
	            output = filter;
	        });
	        output.connect(this._balance);
	        this._balance.connect(this._gainNode);
	        this._balance.connect(this._analyser);
	        this._gainNode.connect(this._context.destination);
	    }
	    getAnalyser() {
	        return this._analyser;
	    }
	    /* Properties */
	    duration() {
	        return this._source.getDuration();
	    }
	    timeElapsed() {
	        return this._source.getTimeElapsed();
	    }
	    timeRemaining() {
	        return this.duration() - this.timeElapsed();
	    }
	    percentComplete() {
	        return (this.timeElapsed() / this.duration()) * 100;
	    }
	    /* Actions */
	    async play() {
	        await this._source.play();
	    }
	    pause() {
	        this._source.pause();
	    }
	    stop() {
	        this._source.stop();
	    }
	    /* Actions with arguments */
	    seekToPercentComplete(percent) {
	        const seekTime = this.duration() * (percent / 100);
	        this.seekToTime(seekTime);
	    }
	    // From 0-1
	    setVolume(volume) {
	        this._gainNode.gain.value = volume / 100;
	    }
	    // from 0 to 100
	    // The input value here is 0-100 which is kinda wrong, since it represents -12db to 12db.
	    // For now, 50 is 0db (no change).
	    // Equation used is: 10^((dB)/20) = x, where x (preamp.gain.value) is passed on to gainnode for boosting or attenuation.
	    setPreamp(value) {
	        const db = (value / 100) * 24 - 12;
	        this._preamp.gain.value = Math.pow(10, db / 20);
	    }
	    // From -100 to 100
	    setBalance(balance) {
	        // Yo Dawg.
	        this._balance.balance.value = balance / 100;
	    }
	    setEqBand(band, value) {
	        const db = (value / 100) * 24 - 12;
	        this._bands[band].gain.value = db;
	    }
	    disableEq() {
	        this._staticSource.disconnect();
	        this._staticSource.connect(this._balance);
	    }
	    enableEq() {
	        this._staticSource.disconnect();
	        this._staticSource.connect(this._preamp);
	    }
	    /* Listeners */
	    on(event, callback) {
	        this._emitter.on(event, callback);
	    }
	    seekToTime(time) {
	        this._source.seekToTime(time);
	    }
	    // Used only for the initial load, since it must have a CORS header
	    async loadFromUrl(url, autoPlay) {
	        this._emitter.trigger("waiting");
	        await this._source.loadUrl(url);
	        // TODO #race
	        this._emitter.trigger("stopWaiting");
	        if (autoPlay) {
	            this.play();
	        }
	    }
	    dispose() {
	        this._source.dispose();
	        this._emitter.dispose();
	    }
	}

	class Disposable {
	    _teardowns = [];
	    disposed;
	    constructor() {
	        this.disposed = false;
	    }
	    add(...teardowns) {
	        if (this.disposed) {
	            throw new Error("Attempted to add a new teardown to a disposed disposable.");
	        }
	        this._teardowns.push(...teardowns);
	    }
	    dispose() {
	        if (this.disposed) {
	            throw new Error("Attempted to dispose disposable which is already disposed.");
	        }
	        this._teardowns.forEach((teardown) => {
	            if (typeof teardown === "function") {
	                teardown();
	            }
	            else if (typeof teardown.dispose === "function") {
	                teardown.dispose();
	            }
	        });
	        this._teardowns = [];
	        this.disposed = true;
	    }
	}

	class Webamp {
	    static VERSION = "1.5.0";
	    _actionEmitter;
	    _root;
	    _disposable;
	    options; // TODO: Make this _private
	    media; // TODO: Make this _private
	    store; // TODO: Make this _private
	    /**
	     * Returns a true if the current browser supports the features that Webamp depends upon.
	     *
	     * It is recommended to check this before you attempt to instantiate an instance of Winamp.
	     */
	    static browserIsSupported() {
	        const supportsAudioApi = !!(window.AudioContext ||
	            // @ts-ignore
	            window.webkitAudioContext);
	        const supportsCanvas = !!window.document.createElement("canvas").getContext;
	        const supportsPromises = typeof Promise !== "undefined";
	        return supportsAudioApi && supportsCanvas && supportsPromises;
	    }
	    constructor(options) {
	        this._root = null;
	        this._disposable = new Disposable();
	        this._actionEmitter = new Emitter();
	        this.options = options;
	        const { initialTracks, initialSkin, availableSkins, enableHotkeys = false, zIndex, requireJSZip, requireMusicMetadata, handleTrackDropEvent, handleAddUrlEvent, handleLoadListEvent, handleSaveListEvent, enableDoubleSizeMode, __butterchurnOptions, __customMediaClass, } = this.options;
	        // TODO: Make this much cleaner
	        let convertPreset = null;
	        if (__butterchurnOptions != null) {
	            const { importConvertPreset, presetConverterEndpoint } = __butterchurnOptions;
	            if (importConvertPreset != null && presetConverterEndpoint != null) {
	                convertPreset = async (file) => {
	                    const { convertPreset: convert } = await importConvertPreset();
	                    return convert(await genStringFromFileReference(file), presetConverterEndpoint);
	                };
	            }
	        }
	        // TODO: Validate required options
	        this.media = new (__customMediaClass || Media)();
	        this.store = createWebampStore(this.media, this._actionEmitter, this.options.__customMiddlewares, this.options.__initialState, {
	            requireJSZip,
	            requireMusicMetadata,
	            convertPreset,
	            // @ts-ignore Typescript is drunk
	            handleTrackDropEvent,
	            handleAddUrlEvent,
	            handleLoadListEvent,
	            handleSaveListEvent,
	        });
	        if (enableDoubleSizeMode) {
	            this.store.dispatch(toggleDoubleSizeMode());
	        }
	        if (navigator.onLine) {
	            this.store.dispatch({ type: NETWORK_CONNECTED });
	        }
	        else {
	            this.store.dispatch({ type: NETWORK_DISCONNECTED });
	        }
	        if (zIndex != null) {
	            this.store.dispatch({ type: SET_Z_INDEX, zIndex });
	        }
	        if (options.__butterchurnOptions) {
	            this.store.dispatch({
	                type: ENABLE_MILKDROP,
	                open: options.__butterchurnOptions.butterchurnOpen,
	            });
	            this.store.dispatch(initializePresets(options.__butterchurnOptions));
	        }
	        const handleOnline = () => this.store.dispatch({ type: NETWORK_CONNECTED });
	        const handleOffline = () => this.store.dispatch({ type: NETWORK_DISCONNECTED });
	        window.addEventListener("online", handleOnline);
	        window.addEventListener("offline", handleOffline);
	        this._disposable.add(() => {
	            window.removeEventListener("online", handleOnline);
	            window.removeEventListener("offline", handleOffline);
	        });
	        if (initialSkin) {
	            this.store.dispatch(setSkinFromUrl(initialSkin.url));
	        }
	        else {
	            // We are using the default skin.
	            this.store.dispatch({ type: LOADED });
	        }
	        if (initialTracks) {
	            this._bufferTracks(initialTracks);
	        }
	        // @ts-ignore
	        if (options.avaliableSkins != null) {
	            console.warn("The misspelled option `avaliableSkins` is deprecated. Please use `availableSkins` instead.");
	            // @ts-ignore
	            this.store.dispatch({ type: SET_AVAILABLE_SKINS, skins: avaliableSkins });
	        }
	        else if (availableSkins != null) {
	            this.store.dispatch({ type: SET_AVAILABLE_SKINS, skins: availableSkins });
	        }
	        this.store.dispatch(setWindowLayout(options.windowLayout));
	        if (enableHotkeys) {
	            this._disposable.add(bindHotkeys(this.store.dispatch));
	        }
	    }
	    /**
	     * Play the current tack
	     */
	    play() {
	        this.store.dispatch(play());
	    }
	    /**
	     * Pause the current tack
	     */
	    pause() {
	        this.store.dispatch(pause());
	    }
	    /**
	     * Stop the currently playing audio. Equivalent to pressing the "stop" button
	     */
	    stop() {
	        this.store.dispatch(stop());
	    }
	    /**
	     * Set volume from 0 - 100
	     */
	    setVolume(volume) {
	        this.store.dispatch(setVolume(volume));
	    }
	    /**
	     * Seek backward n seconds in the curent track
	     */
	    seekBackward(seconds) {
	        this.store.dispatch(seekBackward(seconds));
	    }
	    /**
	     * Seek forward n seconds in the curent track
	     */
	    seekForward(seconds) {
	        this.store.dispatch(seekForward(seconds));
	    }
	    /**
	     * Seek to a given time within the current track
	     */
	    seekToTime(seconds) {
	        this.store.dispatch(seekToTime(seconds));
	    }
	    /**
	     * Play the next track
	     */
	    nextTrack() {
	        this.store.dispatch(next());
	    }
	    /**
	     * Play the previous track
	     */
	    previousTrack() {
	        this.store.dispatch(previous());
	    }
	    /**
	     * Add an array of `Track`s to the end of the playlist.
	     */
	    appendTracks(tracks) {
	        const nextIndex = getTrackCount(this.store.getState());
	        this.store.dispatch(loadMediaFiles(tracks, LOAD_STYLE.NONE, nextIndex));
	    }
	    /**
	     * Replace the playlist with an array of `Track`s and begin playing the first track.
	     */
	    setTracksToPlay(tracks) {
	        this.store.dispatch(loadMediaFiles(tracks, LOAD_STYLE.PLAY));
	    }
	    /**
	     * Get the current "playing" status.
	     */
	    getMediaStatus() {
	        return getMediaStatus(this.store.getState());
	    }
	    /**
	     * A callback which will be called when Webamp is _about to_ close. Returns an
	     * "unsubscribe" function. The callback will be passed a `cancel` function
	     * which you can use to conditionally prevent Webamp from being closed.
	     *
	     * @returns An "unsubscribe" function. Useful if at some point in the future you want to stop listening to these events.
	     */
	    onWillClose(cb) {
	        return this._actionEmitter.on(CLOSE_REQUESTED, (action) => {
	            cb(action.cancel);
	        });
	    }
	    /**
	     * A callback which will be called when Webamp is closed.
	     *
	     * @returns An "unsubscribe" function. Useful if at some point in the future you want to stop listening to these events.
	     */
	    onClose(cb) {
	        return this._actionEmitter.on(CLOSE_WINAMP, cb);
	    }
	    /**
	     * Equivalent to selection "Close" from Webamp's options menu. Once closed,
	     * you can open it again with `.reopen()`.
	     */
	    close() {
	        this.store.dispatch(close());
	    }
	    /**
	     * After `.close()`ing this instance, you can reopen it by calling this method.
	     */
	    reopen() {
	        this.store.dispatch(open());
	    }
	    /**
	     * A callback which will be called when a new track starts loading.
	     *
	     * This can happen on startup when the first track starts buffering, or when a subsequent track starts playing.
	     * The callback will be called with an object `({url: 'https://example.com/track.mp3'})` containing the URL of the track.
	     * Note: If the user drags in a track, the URL may be an ObjectURL.
	     *
	     * @returns An "unsubscribe" function. Useful if at some point in the future you want to stop listening to these events.
	     */
	    onTrackDidChange(cb) {
	        let previousTrackId = null;
	        // TODO #leak
	        return this.store.subscribe(() => {
	            const state = this.store.getState();
	            const trackId = getCurrentlyPlayingTrackIdIfLoaded(state);
	            if (trackId === previousTrackId) {
	                return;
	            }
	            previousTrackId = trackId;
	            cb(trackId == null ? null : getCurrentTrackInfo(state));
	        });
	    }
	    /**
	     * A callback which will be called when Webamp is minimized.
	     *
	     * @returns An "unsubscribe" function. Useful if at some point in the future you want to stop listening to these events.
	     */
	    onMinimize(cb) {
	        return this._actionEmitter.on(MINIMIZE_WINAMP, cb);
	    }
	    /**
	     * Set the skin to use. This can be a URL or a base64 encoded string. The skin
	     * will be loaded asynchronously.
	     *
	     * NOTE: If the URL is not on the same domain as the page, you will need to consider CORS.
	     * https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
	     */
	    setSkinFromUrl(url) {
	        this.store.dispatch(setSkinFromUrl(url));
	        // TODO: Should this return a promise?
	        // return this.skinIsLoaded(); ??
	    }
	    /**
	     * Returns a promise that resolves when the skin is done loading.
	     */
	    async skinIsLoaded() {
	        // Wait for the skin to load.
	        // TODO #leak
	        await storeHas(this.store, (state) => !state.display.loading);
	        // We attempt to pre-resolve these promises before we declare the skin
	        // loaded. That's because `<EqGraph>` needs these in order to render fully.
	        // As long as these are resolved before we attempt to render, we can ensure
	        // that we will have all the data we need on first paint.
	        //
	        // Note: This won't help for non-initial skin loads.
	        await Promise.all([
	            getPreampLineImage(this.store.getState()),
	            getLineColorsImage(this.store.getState()),
	        ]);
	        return;
	    }
	    /**
	     * Webamp will wait until it has fetched the skin and fully parsed it and then render itself.
	     *
	     * Webamp is rendered into a new DOM node at the end of the <body> tag with the id `#webamp`.
	     *
	     * If a domNode is passed, Webamp will place itself in the center of that DOM node.
	     *
	     * @returns A promise is returned which will resolve after the render is complete.
	     */
	    async renderWhenReady(node) {
	        this.store.dispatch(centerWindowsInContainer(node));
	        await this.skinIsLoaded();
	        if (this._disposable.disposed) {
	            return;
	        }
	        if (this._root != null) {
	            throw new Error("Cannot render a Webamp instance twice");
	        }
	        this._root = client.createRoot(node);
	        this._disposable.add(() => {
	            if (this._root != null) {
	                this._root.unmount();
	                this._root = null;
	            }
	        });
	        this._root.render(jsxRuntimeExports.jsx(Provider, { store: this.store, children: jsxRuntimeExports.jsx(App, { media: this.media, filePickers: this.options.filePickers || [] }) }));
	    }
	    /**
	     * **Note:** _This method is not fully functional. It is currently impossible to
	     * clean up a Winamp instance. This method makes an effort, but it still leaks
	     * the whole instance. In the future the behavior of this method will improve,
	     * so you might as well call it._
	     *
	     * When you are done with a Webamp instance, call this method and Webamp will
	     * attempt to clean itself up to avoid memory leaks.
	     */
	    dispose() {
	        // TODO: Clean up store subscription in onTrackDidChange
	        // TODO: Every storeHas call represents a potential race condition
	        this.media.dispose();
	        this._actionEmitter.dispose();
	        this._disposable.dispose();
	    }
	    __loadSerializedState(serializedState) {
	        this.store.dispatch(loadSerializedState(serializedState));
	    }
	    __getSerializedState() {
	        return getSerlializedState(this.store.getState());
	    }
	    __onStateChange(cb) {
	        // TODO #leak
	        return this.store.subscribe(cb);
	    }
	    _bufferTracks(tracks) {
	        const nextIndex = getTrackCount(this.store.getState());
	        this.store.dispatch(loadMediaFiles(tracks, LOAD_STYLE.BUFFER, nextIndex));
	    }
	}
	// Return a promise that resolves when the store matches a predicate.
	// TODO #leak
	const storeHas = (store, predicate) => new Promise((resolve) => {
	    if (predicate(store.getState())) {
	        resolve();
	        return;
	    }
	    const unsubscribe = store.subscribe(() => {
	        if (predicate(store.getState())) {
	            resolve();
	            unsubscribe();
	        }
	    });
	});
	// @ts-ignore
	window.Webamp = Webamp;

	return Webamp;

}));
//# sourceMappingURL=webamp.lazy-bundle.js.map
