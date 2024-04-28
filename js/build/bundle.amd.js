define(['exports'], (function (exports) { 'use strict';

  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return e;
    };
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e];
    }
    try {
      define({}, "");
    } catch (t) {
      define = function (t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c)
      }), a;
    }
    function tryCatch(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function (t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = s, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ("normal" === p.type) {
            if (o = n.done ? s : l, p.arg === y) continue;
            return {
              value: p.arg,
              done: n.done
            };
          }
          "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
      var i = tryCatch(o, e.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
      var a = i.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError(typeof e + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function (e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
      },
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeFunction(fn) {
    try {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    } catch (e) {
      return typeof fn === "function";
    }
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }
        return desc.value;
      };
    }
    return _get.apply(this, arguments);
  }
  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        var F = function () {};
        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var dist = {exports: {}};

  var formats = {};

  (function (exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.formatNames = exports.fastFormats = exports.fullFormats = void 0;
    function fmtDef(validate, compare) {
      return {
        validate: validate,
        compare: compare
      };
    }
    exports.fullFormats = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: fmtDef(date, compareDate),
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: fmtDef(getTime(true), compareTime),
      "date-time": fmtDef(getDateTime(true), compareDateTime),
      "iso-time": fmtDef(getTime(), compareIsoTime),
      "iso-date-time": fmtDef(getDateTime(), compareIsoDateTime),
      // duration: https://tools.ietf.org/html/rfc3339#appendix-A
      duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
      uri: uri,
      "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
      // uri-template: https://tools.ietf.org/html/rfc6570
      "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
      // For the source: https://gist.github.com/dperini/729294
      // For test cases: https://mathiasbynens.be/demo/url-regex
      url: /^(?:http[s\u017F]?|ftp):\/\/(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!(?:10|127)(?:\.[0-9]{1,3}){3})(?!(?:169\.254|192\.168)(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\x2D)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\x2D)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:(?![\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF])*)?$/i,
      email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
      hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
      // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
      ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
      ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
      regex: regex,
      // uuid: http://tools.ietf.org/html/rfc4122
      uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
      // JSON-pointer: https://tools.ietf.org/html/rfc6901
      // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
      "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
      "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
      // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
      "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
      // the following formats are used by the openapi specification: https://spec.openapis.org/oas/v3.0.0#data-types
      // byte: https://github.com/miguelmota/is-base64
      "byte": _byte,
      // signed 32 bit integer
      int32: {
        type: "number",
        validate: validateInt32
      },
      // signed 64 bit integer
      int64: {
        type: "number",
        validate: validateInt64
      },
      // C-type float
      "float": {
        type: "number",
        validate: validateNumber
      },
      // C-type double
      "double": {
        type: "number",
        validate: validateNumber
      },
      // hint to the UI to hide input strings
      password: true,
      // unchecked string payload
      binary: true
    };
    exports.fastFormats = _objectSpread2(_objectSpread2({}, exports.fullFormats), {}, {
      date: fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, compareDate),
      time: fmtDef(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, compareTime),
      "date-time": fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, compareDateTime),
      "iso-time": fmtDef(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, compareIsoTime),
      "iso-date-time": fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, compareIsoDateTime),
      // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
      uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
      "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
      // email (sources from jsen validator):
      // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
      // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'wilful violation')
      email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
    });
    exports.formatNames = Object.keys(exports.fullFormats);
    function isLeapYear(year) {
      // https://tools.ietf.org/html/rfc3339#appendix-C
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
    var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
    var DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function date(str) {
      // full-date from http://tools.ietf.org/html/rfc3339#section-5.6
      var matches = DATE.exec(str);
      if (!matches) return false;
      var year = +matches[1];
      var month = +matches[2];
      var day = +matches[3];
      return month >= 1 && month <= 12 && day >= 1 && day <= (month === 2 && isLeapYear(year) ? 29 : DAYS[month]);
    }
    function compareDate(d1, d2) {
      if (!(d1 && d2)) return undefined;
      if (d1 > d2) return 1;
      if (d1 < d2) return -1;
      return 0;
    }
    var TIME = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function getTime(strictTimeZone) {
      return function time(str) {
        var matches = TIME.exec(str);
        if (!matches) return false;
        var hr = +matches[1];
        var min = +matches[2];
        var sec = +matches[3];
        var tz = matches[4];
        var tzSign = matches[5] === "-" ? -1 : 1;
        var tzH = +(matches[6] || 0);
        var tzM = +(matches[7] || 0);
        if (tzH > 23 || tzM > 59 || strictTimeZone && !tz) return false;
        if (hr <= 23 && min <= 59 && sec < 60) return true;
        // leap second
        var utcMin = min - tzM * tzSign;
        var utcHr = hr - tzH * tzSign - (utcMin < 0 ? 1 : 0);
        return (utcHr === 23 || utcHr === -1) && (utcMin === 59 || utcMin === -1) && sec < 61;
      };
    }
    function compareTime(s1, s2) {
      if (!(s1 && s2)) return undefined;
      var t1 = new Date("2020-01-01T" + s1).valueOf();
      var t2 = new Date("2020-01-01T" + s2).valueOf();
      if (!(t1 && t2)) return undefined;
      return t1 - t2;
    }
    function compareIsoTime(t1, t2) {
      if (!(t1 && t2)) return undefined;
      var a1 = TIME.exec(t1);
      var a2 = TIME.exec(t2);
      if (!(a1 && a2)) return undefined;
      t1 = a1[1] + a1[2] + a1[3];
      t2 = a2[1] + a2[2] + a2[3];
      if (t1 > t2) return 1;
      if (t1 < t2) return -1;
      return 0;
    }
    var DATE_TIME_SEPARATOR = /t|\s/i;
    function getDateTime(strictTimeZone) {
      var time = getTime(strictTimeZone);
      return function date_time(str) {
        // http://tools.ietf.org/html/rfc3339#section-5.6
        var dateTime = str.split(DATE_TIME_SEPARATOR);
        return dateTime.length === 2 && date(dateTime[0]) && time(dateTime[1]);
      };
    }
    function compareDateTime(dt1, dt2) {
      if (!(dt1 && dt2)) return undefined;
      var d1 = new Date(dt1).valueOf();
      var d2 = new Date(dt2).valueOf();
      if (!(d1 && d2)) return undefined;
      return d1 - d2;
    }
    function compareIsoDateTime(dt1, dt2) {
      if (!(dt1 && dt2)) return undefined;
      var _dt1$split = dt1.split(DATE_TIME_SEPARATOR),
        _dt1$split2 = _slicedToArray(_dt1$split, 2),
        d1 = _dt1$split2[0],
        t1 = _dt1$split2[1];
      var _dt2$split = dt2.split(DATE_TIME_SEPARATOR),
        _dt2$split2 = _slicedToArray(_dt2$split, 2),
        d2 = _dt2$split2[0],
        t2 = _dt2$split2[1];
      var res = compareDate(d1, d2);
      if (res === undefined) return undefined;
      return res || compareTime(t1, t2);
    }
    var NOT_URI_FRAGMENT = /\/|:/;
    var URI = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function uri(str) {
      // http://jmrware.com/articles/2009/uri_regexp/URI_regex.html + optional protocol + required "."
      return NOT_URI_FRAGMENT.test(str) && URI.test(str);
    }
    var BYTE = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function _byte(str) {
      BYTE.lastIndex = 0;
      return BYTE.test(str);
    }
    var MIN_INT32 = -Math.pow(2, 31);
    var MAX_INT32 = Math.pow(2, 31) - 1;
    function validateInt32(value) {
      return Number.isInteger(value) && value <= MAX_INT32 && value >= MIN_INT32;
    }
    function validateInt64(value) {
      // JSON and javascript max Int is 2**53, so any int that passes isInteger is valid for Int64
      return Number.isInteger(value);
    }
    function validateNumber() {
      return true;
    }
    var Z_ANCHOR = /[^\\]\\Z/;
    function regex(str) {
      if (Z_ANCHOR.test(str)) return false;
      try {
        new RegExp(str);
        return true;
      } catch (e) {
        return false;
      }
    }
  })(formats);

  var limit = {};

  var ajv = {exports: {}};

  var core$2 = {};

  var validate = {};

  var boolSchema = {};

  var errors = {};

  var codegen = {};

  var code$1 = {};

  var _templateObject$B, _templateObject2$y;
  (function (exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.regexpCode = exports.getEsmExportName = exports.getProperty = exports.safeStringify = exports.stringify = exports.strConcat = exports.addCodeArg = exports.str = exports._ = exports.nil = exports._Code = exports.Name = exports.IDENTIFIER = exports._CodeOrName = void 0;
    var _CodeOrName = /*#__PURE__*/_createClass(function _CodeOrName() {
      _classCallCheck(this, _CodeOrName);
    });
    exports._CodeOrName = _CodeOrName;
    exports.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    var Name = /*#__PURE__*/function (_CodeOrName2) {
      function Name(s) {
        var _this;
        _classCallCheck(this, Name);
        _this = _callSuper(this, Name);
        if (!exports.IDENTIFIER.test(s)) throw new Error("CodeGen: name must be a valid identifier");
        _this.str = s;
        return _this;
      }
      _inherits(Name, _CodeOrName2);
      return _createClass(Name, [{
        key: "toString",
        value: function toString() {
          return this.str;
        }
      }, {
        key: "emptyStr",
        value: function emptyStr() {
          return false;
        }
      }, {
        key: "names",
        get: function get() {
          return _defineProperty({}, this.str, 1);
        }
      }]);
    }(_CodeOrName);
    exports.Name = Name;
    var _Code = /*#__PURE__*/function (_CodeOrName3) {
      function _Code(code) {
        var _this2;
        _classCallCheck(this, _Code);
        _this2 = _callSuper(this, _Code);
        _this2._items = typeof code === "string" ? [code] : code;
        return _this2;
      }
      _inherits(_Code, _CodeOrName3);
      return _createClass(_Code, [{
        key: "toString",
        value: function toString() {
          return this.str;
        }
      }, {
        key: "emptyStr",
        value: function emptyStr() {
          if (this._items.length > 1) return false;
          var item = this._items[0];
          return item === "" || item === '""';
        }
      }, {
        key: "str",
        get: function get() {
          var _a;
          return (_a = this._str) !== null && _a !== void 0 ? _a : this._str = this._items.reduce(function (s, c) {
            return "".concat(s).concat(c);
          }, "");
        }
      }, {
        key: "names",
        get: function get() {
          var _a;
          return (_a = this._names) !== null && _a !== void 0 ? _a : this._names = this._items.reduce(function (names, c) {
            if (c instanceof Name) names[c.str] = (names[c.str] || 0) + 1;
            return names;
          }, {});
        }
      }]);
    }(_CodeOrName);
    exports._Code = _Code;
    exports.nil = new _Code("");
    function _(strs) {
      var code = [strs[0]];
      var i = 0;
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      while (i < args.length) {
        addCodeArg(code, args[i]);
        code.push(strs[++i]);
      }
      return new _Code(code);
    }
    exports._ = _;
    var plus = new _Code("+");
    function str(strs) {
      var expr = [safeStringify(strs[0])];
      var i = 0;
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      while (i < args.length) {
        expr.push(plus);
        addCodeArg(expr, args[i]);
        expr.push(plus, safeStringify(strs[++i]));
      }
      optimize(expr);
      return new _Code(expr);
    }
    exports.str = str;
    function addCodeArg(code, arg) {
      if (arg instanceof _Code) code.push.apply(code, _toConsumableArray(arg._items));else if (arg instanceof Name) code.push(arg);else code.push(interpolate(arg));
    }
    exports.addCodeArg = addCodeArg;
    function optimize(expr) {
      var i = 1;
      while (i < expr.length - 1) {
        if (expr[i] === plus) {
          var res = mergeExprItems(expr[i - 1], expr[i + 1]);
          if (res !== undefined) {
            expr.splice(i - 1, 3, res);
            continue;
          }
          expr[i++] = "+";
        }
        i++;
      }
    }
    function mergeExprItems(a, b) {
      if (b === '""') return a;
      if (a === '""') return b;
      if (typeof a == "string") {
        if (b instanceof Name || a[a.length - 1] !== '"') return;
        if (typeof b != "string") return "".concat(a.slice(0, -1)).concat(b, "\"");
        if (b[0] === '"') return a.slice(0, -1) + b.slice(1);
        return;
      }
      if (typeof b == "string" && b[0] === '"' && !(a instanceof Name)) return "\"".concat(a).concat(b.slice(1));
      return;
    }
    function strConcat(c1, c2) {
      return c2.emptyStr() ? c1 : c1.emptyStr() ? c2 : str(_templateObject$B || (_templateObject$B = _taggedTemplateLiteral(["", "", ""])), c1, c2);
    }
    exports.strConcat = strConcat;
    // TODO do not allow arrays here
    function interpolate(x) {
      return typeof x == "number" || typeof x == "boolean" || x === null ? x : safeStringify(Array.isArray(x) ? x.join(",") : x);
    }
    function stringify(x) {
      return new _Code(safeStringify(x));
    }
    exports.stringify = stringify;
    function safeStringify(x) {
      return JSON.stringify(x).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    exports.safeStringify = safeStringify;
    function getProperty(key) {
      return typeof key == "string" && exports.IDENTIFIER.test(key) ? new _Code(".".concat(key)) : _(_templateObject2$y || (_templateObject2$y = _taggedTemplateLiteral(["[", "]"])), key);
    }
    exports.getProperty = getProperty;
    //Does best effort to format the name properly
    function getEsmExportName(key) {
      if (typeof key == "string" && exports.IDENTIFIER.test(key)) {
        return new _Code("".concat(key));
      }
      throw new Error("CodeGen: invalid export name: ".concat(key, ", use explicit $id name mapping"));
    }
    exports.getEsmExportName = getEsmExportName;
    function regexpCode(rx) {
      return new _Code(rx.toString());
    }
    exports.regexpCode = regexpCode;
  })(code$1);

  var scope = {};

  var _templateObject$A, _templateObject2$x, _templateObject3$s, _templateObject4$l, _templateObject5$h;
  (function (exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ValueScope = exports.ValueScopeName = exports.Scope = exports.varKinds = exports.UsedValueState = void 0;
    var code_1 = code$1;
    var ValueError = /*#__PURE__*/function (_Error) {
      function ValueError(name) {
        var _this;
        _classCallCheck(this, ValueError);
        _this = _callSuper(this, ValueError, ["CodeGen: \"code\" for ".concat(name, " not defined")]);
        _this.value = name.value;
        return _this;
      }
      _inherits(ValueError, _Error);
      return _createClass(ValueError);
    }( /*#__PURE__*/_wrapNativeSuper(Error));
    var UsedValueState;
    (function (UsedValueState) {
      UsedValueState[UsedValueState["Started"] = 0] = "Started";
      UsedValueState[UsedValueState["Completed"] = 1] = "Completed";
    })(UsedValueState = exports.UsedValueState || (exports.UsedValueState = {}));
    exports.varKinds = {
      "const": new code_1.Name("const"),
      "let": new code_1.Name("let"),
      "var": new code_1.Name("var")
    };
    var Scope = /*#__PURE__*/function () {
      function Scope() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          prefixes = _ref.prefixes,
          parent = _ref.parent;
        _classCallCheck(this, Scope);
        this._names = {};
        this._prefixes = prefixes;
        this._parent = parent;
      }
      return _createClass(Scope, [{
        key: "toName",
        value: function toName(nameOrPrefix) {
          return nameOrPrefix instanceof code_1.Name ? nameOrPrefix : this.name(nameOrPrefix);
        }
      }, {
        key: "name",
        value: function name(prefix) {
          return new code_1.Name(this._newName(prefix));
        }
      }, {
        key: "_newName",
        value: function _newName(prefix) {
          var ng = this._names[prefix] || this._nameGroup(prefix);
          return "".concat(prefix).concat(ng.index++);
        }
      }, {
        key: "_nameGroup",
        value: function _nameGroup(prefix) {
          var _a, _b;
          if (((_b = (_a = this._parent) === null || _a === void 0 ? void 0 : _a._prefixes) === null || _b === void 0 ? void 0 : _b.has(prefix)) || this._prefixes && !this._prefixes.has(prefix)) {
            throw new Error("CodeGen: prefix \"".concat(prefix, "\" is not allowed in this scope"));
          }
          return this._names[prefix] = {
            prefix: prefix,
            index: 0
          };
        }
      }]);
    }();
    exports.Scope = Scope;
    var ValueScopeName = /*#__PURE__*/function (_code_1$Name) {
      function ValueScopeName(prefix, nameStr) {
        var _this2;
        _classCallCheck(this, ValueScopeName);
        _this2 = _callSuper(this, ValueScopeName, [nameStr]);
        _this2.prefix = prefix;
        return _this2;
      }
      _inherits(ValueScopeName, _code_1$Name);
      return _createClass(ValueScopeName, [{
        key: "setValue",
        value: function setValue(value, _ref2) {
          var property = _ref2.property,
            itemIndex = _ref2.itemIndex;
          this.value = value;
          this.scopePath = (0, code_1._)(_templateObject$A || (_templateObject$A = _taggedTemplateLiteral([".", "[", "]"])), new code_1.Name(property), itemIndex);
        }
      }]);
    }(code_1.Name);
    exports.ValueScopeName = ValueScopeName;
    var line = (0, code_1._)(_templateObject2$x || (_templateObject2$x = _taggedTemplateLiteral(["\n"], ["\\n"])));
    var ValueScope = /*#__PURE__*/function (_Scope) {
      function ValueScope(opts) {
        var _this3;
        _classCallCheck(this, ValueScope);
        _this3 = _callSuper(this, ValueScope, [opts]);
        _this3._values = {};
        _this3._scope = opts.scope;
        _this3.opts = _objectSpread2(_objectSpread2({}, opts), {}, {
          _n: opts.lines ? line : code_1.nil
        });
        return _this3;
      }
      _inherits(ValueScope, _Scope);
      return _createClass(ValueScope, [{
        key: "get",
        value: function get() {
          return this._scope;
        }
      }, {
        key: "name",
        value: function name(prefix) {
          return new ValueScopeName(prefix, this._newName(prefix));
        }
      }, {
        key: "value",
        value: function value(nameOrPrefix, _value) {
          var _a;
          if (_value.ref === undefined) throw new Error("CodeGen: ref must be passed in value");
          var name = this.toName(nameOrPrefix);
          var prefix = name.prefix;
          var valueKey = (_a = _value.key) !== null && _a !== void 0 ? _a : _value.ref;
          var vs = this._values[prefix];
          if (vs) {
            var _name = vs.get(valueKey);
            if (_name) return _name;
          } else {
            vs = this._values[prefix] = new Map();
          }
          vs.set(valueKey, name);
          var s = this._scope[prefix] || (this._scope[prefix] = []);
          var itemIndex = s.length;
          s[itemIndex] = _value.ref;
          name.setValue(_value, {
            property: prefix,
            itemIndex: itemIndex
          });
          return name;
        }
      }, {
        key: "getValue",
        value: function getValue(prefix, keyOrRef) {
          var vs = this._values[prefix];
          if (!vs) return;
          return vs.get(keyOrRef);
        }
      }, {
        key: "scopeRefs",
        value: function scopeRefs(scopeName) {
          var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._values;
          return this._reduceValues(values, function (name) {
            if (name.scopePath === undefined) throw new Error("CodeGen: name \"".concat(name, "\" has no value"));
            return (0, code_1._)(_templateObject3$s || (_templateObject3$s = _taggedTemplateLiteral(["", "", ""])), scopeName, name.scopePath);
          });
        }
      }, {
        key: "scopeCode",
        value: function scopeCode() {
          var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._values;
          var usedValues = arguments.length > 1 ? arguments[1] : undefined;
          var getCode = arguments.length > 2 ? arguments[2] : undefined;
          return this._reduceValues(values, function (name) {
            if (name.value === undefined) throw new Error("CodeGen: name \"".concat(name, "\" has no value"));
            return name.value.code;
          }, usedValues, getCode);
        }
      }, {
        key: "_reduceValues",
        value: function _reduceValues(values, valueCode) {
          var _this4 = this;
          var usedValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var getCode = arguments.length > 3 ? arguments[3] : undefined;
          var code = code_1.nil;
          var _loop = function _loop() {
            var vs = values[prefix];
            if (!vs) return 1; // continue
            var nameSet = usedValues[prefix] = usedValues[prefix] || new Map();
            vs.forEach(function (name) {
              if (nameSet.has(name)) return;
              nameSet.set(name, UsedValueState.Started);
              var c = valueCode(name);
              if (c) {
                var def = _this4.opts.es5 ? exports.varKinds["var"] : exports.varKinds["const"];
                code = (0, code_1._)(_templateObject4$l || (_templateObject4$l = _taggedTemplateLiteral(["", "", " ", " = ", ";", ""])), code, def, name, c, _this4.opts._n);
              } else if (c = getCode === null || getCode === void 0 ? void 0 : getCode(name)) {
                code = (0, code_1._)(_templateObject5$h || (_templateObject5$h = _taggedTemplateLiteral(["", "", "", ""])), code, c, _this4.opts._n);
              } else {
                throw new ValueError(name);
              }
              nameSet.set(name, UsedValueState.Completed);
            });
          };
          for (var prefix in values) {
            if (_loop()) continue;
          }
          return code;
        }
      }]);
    }(Scope);
    exports.ValueScope = ValueScope;
  })(scope);

  var _templateObject$z, _templateObject2$w, _templateObject3$r, _templateObject4$k, _templateObject5$g, _templateObject6$b;
  (function (exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.or = exports.and = exports.not = exports.CodeGen = exports.operators = exports.varKinds = exports.ValueScopeName = exports.ValueScope = exports.Scope = exports.Name = exports.regexpCode = exports.stringify = exports.getProperty = exports.nil = exports.strConcat = exports.str = exports._ = void 0;
    var code_1 = code$1;
    var scope_1 = scope;
    var code_2 = code$1;
    Object.defineProperty(exports, "_", {
      enumerable: true,
      get: function get() {
        return code_2._;
      }
    });
    Object.defineProperty(exports, "str", {
      enumerable: true,
      get: function get() {
        return code_2.str;
      }
    });
    Object.defineProperty(exports, "strConcat", {
      enumerable: true,
      get: function get() {
        return code_2.strConcat;
      }
    });
    Object.defineProperty(exports, "nil", {
      enumerable: true,
      get: function get() {
        return code_2.nil;
      }
    });
    Object.defineProperty(exports, "getProperty", {
      enumerable: true,
      get: function get() {
        return code_2.getProperty;
      }
    });
    Object.defineProperty(exports, "stringify", {
      enumerable: true,
      get: function get() {
        return code_2.stringify;
      }
    });
    Object.defineProperty(exports, "regexpCode", {
      enumerable: true,
      get: function get() {
        return code_2.regexpCode;
      }
    });
    Object.defineProperty(exports, "Name", {
      enumerable: true,
      get: function get() {
        return code_2.Name;
      }
    });
    var scope_2 = scope;
    Object.defineProperty(exports, "Scope", {
      enumerable: true,
      get: function get() {
        return scope_2.Scope;
      }
    });
    Object.defineProperty(exports, "ValueScope", {
      enumerable: true,
      get: function get() {
        return scope_2.ValueScope;
      }
    });
    Object.defineProperty(exports, "ValueScopeName", {
      enumerable: true,
      get: function get() {
        return scope_2.ValueScopeName;
      }
    });
    Object.defineProperty(exports, "varKinds", {
      enumerable: true,
      get: function get() {
        return scope_2.varKinds;
      }
    });
    exports.operators = {
      GT: new code_1._Code(">"),
      GTE: new code_1._Code(">="),
      LT: new code_1._Code("<"),
      LTE: new code_1._Code("<="),
      EQ: new code_1._Code("==="),
      NEQ: new code_1._Code("!=="),
      NOT: new code_1._Code("!"),
      OR: new code_1._Code("||"),
      AND: new code_1._Code("&&"),
      ADD: new code_1._Code("+")
    };
    var Node = /*#__PURE__*/function () {
      function Node() {
        _classCallCheck(this, Node);
      }
      return _createClass(Node, [{
        key: "optimizeNodes",
        value: function optimizeNodes() {
          return this;
        }
      }, {
        key: "optimizeNames",
        value: function optimizeNames(_names, _constants) {
          return this;
        }
      }]);
    }();
    var Def = /*#__PURE__*/function (_Node) {
      function Def(varKind, name, rhs) {
        var _this;
        _classCallCheck(this, Def);
        _this = _callSuper(this, Def);
        _this.varKind = varKind;
        _this.name = name;
        _this.rhs = rhs;
        return _this;
      }
      _inherits(Def, _Node);
      return _createClass(Def, [{
        key: "render",
        value: function render(_ref) {
          var es5 = _ref.es5,
            _n = _ref._n;
          var varKind = es5 ? scope_1.varKinds["var"] : this.varKind;
          var rhs = this.rhs === undefined ? "" : " = ".concat(this.rhs);
          return "".concat(varKind, " ").concat(this.name).concat(rhs, ";") + _n;
        }
      }, {
        key: "optimizeNames",
        value: function optimizeNames(names, constants) {
          if (!names[this.name.str]) return;
          if (this.rhs) this.rhs = optimizeExpr(this.rhs, names, constants);
          return this;
        }
      }, {
        key: "names",
        get: function get() {
          return this.rhs instanceof code_1._CodeOrName ? this.rhs.names : {};
        }
      }]);
    }(Node);
    var Assign = /*#__PURE__*/function (_Node2) {
      function Assign(lhs, rhs, sideEffects) {
        var _this2;
        _classCallCheck(this, Assign);
        _this2 = _callSuper(this, Assign);
        _this2.lhs = lhs;
        _this2.rhs = rhs;
        _this2.sideEffects = sideEffects;
        return _this2;
      }
      _inherits(Assign, _Node2);
      return _createClass(Assign, [{
        key: "render",
        value: function render(_ref2) {
          var _n = _ref2._n;
          return "".concat(this.lhs, " = ").concat(this.rhs, ";") + _n;
        }
      }, {
        key: "optimizeNames",
        value: function optimizeNames(names, constants) {
          if (this.lhs instanceof code_1.Name && !names[this.lhs.str] && !this.sideEffects) return;
          this.rhs = optimizeExpr(this.rhs, names, constants);
          return this;
        }
      }, {
        key: "names",
        get: function get() {
          var names = this.lhs instanceof code_1.Name ? {} : _objectSpread2({}, this.lhs.names);
          return addExprNames(names, this.rhs);
        }
      }]);
    }(Node);
    var AssignOp = /*#__PURE__*/function (_Assign) {
      function AssignOp(lhs, op, rhs, sideEffects) {
        var _this3;
        _classCallCheck(this, AssignOp);
        _this3 = _callSuper(this, AssignOp, [lhs, rhs, sideEffects]);
        _this3.op = op;
        return _this3;
      }
      _inherits(AssignOp, _Assign);
      return _createClass(AssignOp, [{
        key: "render",
        value: function render(_ref3) {
          var _n = _ref3._n;
          return "".concat(this.lhs, " ").concat(this.op, "= ").concat(this.rhs, ";") + _n;
        }
      }]);
    }(Assign);
    var Label = /*#__PURE__*/function (_Node3) {
      function Label(label) {
        var _this4;
        _classCallCheck(this, Label);
        _this4 = _callSuper(this, Label);
        _this4.label = label;
        _this4.names = {};
        return _this4;
      }
      _inherits(Label, _Node3);
      return _createClass(Label, [{
        key: "render",
        value: function render(_ref4) {
          var _n = _ref4._n;
          return "".concat(this.label, ":") + _n;
        }
      }]);
    }(Node);
    var Break = /*#__PURE__*/function (_Node4) {
      function Break(label) {
        var _this5;
        _classCallCheck(this, Break);
        _this5 = _callSuper(this, Break);
        _this5.label = label;
        _this5.names = {};
        return _this5;
      }
      _inherits(Break, _Node4);
      return _createClass(Break, [{
        key: "render",
        value: function render(_ref5) {
          var _n = _ref5._n;
          var label = this.label ? " ".concat(this.label) : "";
          return "break".concat(label, ";") + _n;
        }
      }]);
    }(Node);
    var Throw = /*#__PURE__*/function (_Node5) {
      function Throw(error) {
        var _this6;
        _classCallCheck(this, Throw);
        _this6 = _callSuper(this, Throw);
        _this6.error = error;
        return _this6;
      }
      _inherits(Throw, _Node5);
      return _createClass(Throw, [{
        key: "render",
        value: function render(_ref6) {
          var _n = _ref6._n;
          return "throw ".concat(this.error, ";") + _n;
        }
      }, {
        key: "names",
        get: function get() {
          return this.error.names;
        }
      }]);
    }(Node);
    var AnyCode = /*#__PURE__*/function (_Node6) {
      function AnyCode(code) {
        var _this7;
        _classCallCheck(this, AnyCode);
        _this7 = _callSuper(this, AnyCode);
        _this7.code = code;
        return _this7;
      }
      _inherits(AnyCode, _Node6);
      return _createClass(AnyCode, [{
        key: "render",
        value: function render(_ref7) {
          var _n = _ref7._n;
          return "".concat(this.code, ";") + _n;
        }
      }, {
        key: "optimizeNodes",
        value: function optimizeNodes() {
          return "".concat(this.code) ? this : undefined;
        }
      }, {
        key: "optimizeNames",
        value: function optimizeNames(names, constants) {
          this.code = optimizeExpr(this.code, names, constants);
          return this;
        }
      }, {
        key: "names",
        get: function get() {
          return this.code instanceof code_1._CodeOrName ? this.code.names : {};
        }
      }]);
    }(Node);
    var ParentNode = /*#__PURE__*/function (_Node7) {
      function ParentNode() {
        var _this8;
        var nodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        _classCallCheck(this, ParentNode);
        _this8 = _callSuper(this, ParentNode);
        _this8.nodes = nodes;
        return _this8;
      }
      _inherits(ParentNode, _Node7);
      return _createClass(ParentNode, [{
        key: "render",
        value: function render(opts) {
          return this.nodes.reduce(function (code, n) {
            return code + n.render(opts);
          }, "");
        }
      }, {
        key: "optimizeNodes",
        value: function optimizeNodes() {
          var nodes = this.nodes;
          var i = nodes.length;
          while (i--) {
            var n = nodes[i].optimizeNodes();
            if (Array.isArray(n)) nodes.splice.apply(nodes, [i, 1].concat(_toConsumableArray(n)));else if (n) nodes[i] = n;else nodes.splice(i, 1);
          }
          return nodes.length > 0 ? this : undefined;
        }
      }, {
        key: "optimizeNames",
        value: function optimizeNames(names, constants) {
          var nodes = this.nodes;
          var i = nodes.length;
          while (i--) {
            // iterating backwards improves 1-pass optimization
            var n = nodes[i];
            if (n.optimizeNames(names, constants)) continue;
            subtractNames(names, n.names);
            nodes.splice(i, 1);
          }
          return nodes.length > 0 ? this : undefined;
        }
      }, {
        key: "names",
        get: function get() {
          return this.nodes.reduce(function (names, n) {
            return addNames(names, n.names);
          }, {});
        }
      }]);
    }(Node);
    var BlockNode = /*#__PURE__*/function (_ParentNode) {
      function BlockNode() {
        _classCallCheck(this, BlockNode);
        return _callSuper(this, BlockNode, arguments);
      }
      _inherits(BlockNode, _ParentNode);
      return _createClass(BlockNode, [{
        key: "render",
        value: function render(opts) {
          return "{" + opts._n + _get(_getPrototypeOf(BlockNode.prototype), "render", this).call(this, opts) + "}" + opts._n;
        }
      }]);
    }(ParentNode);
    var Root = /*#__PURE__*/function (_ParentNode2) {
      function Root() {
        _classCallCheck(this, Root);
        return _callSuper(this, Root, arguments);
      }
      _inherits(Root, _ParentNode2);
      return _createClass(Root);
    }(ParentNode);
    var Else = /*#__PURE__*/function (_BlockNode) {
      function Else() {
        _classCallCheck(this, Else);
        return _callSuper(this, Else, arguments);
      }
      _inherits(Else, _BlockNode);
      return _createClass(Else);
    }(BlockNode);
    Else.kind = "else";
    var If = /*#__PURE__*/function (_BlockNode2) {
      function If(condition, nodes) {
        var _this9;
        _classCallCheck(this, If);
        _this9 = _callSuper(this, If, [nodes]);
        _this9.condition = condition;
        return _this9;
      }
      _inherits(If, _BlockNode2);
      return _createClass(If, [{
        key: "render",
        value: function render(opts) {
          var code = "if(".concat(this.condition, ")") + _get(_getPrototypeOf(If.prototype), "render", this).call(this, opts);
          if (this["else"]) code += "else " + this["else"].render(opts);
          return code;
        }
      }, {
        key: "optimizeNodes",
        value: function optimizeNodes() {
          _get(_getPrototypeOf(If.prototype), "optimizeNodes", this).call(this);
          var cond = this.condition;
          if (cond === true) return this.nodes; // else is ignored here
          var e = this["else"];
          if (e) {
            var ns = e.optimizeNodes();
            e = this["else"] = Array.isArray(ns) ? new Else(ns) : ns;
          }
          if (e) {
            if (cond === false) return e instanceof If ? e : e.nodes;
            if (this.nodes.length) return this;
            return new If(not(cond), e instanceof If ? [e] : e.nodes);
          }
          if (cond === false || !this.nodes.length) return undefined;
          return this;
        }
      }, {
        key: "optimizeNames",
        value: function optimizeNames(names, constants) {
          var _a;
          this["else"] = (_a = this["else"]) === null || _a === void 0 ? void 0 : _a.optimizeNames(names, constants);
          if (!(_get(_getPrototypeOf(If.prototype), "optimizeNames", this).call(this, names, constants) || this["else"])) return;
          this.condition = optimizeExpr(this.condition, names, constants);
          return this;
        }
      }, {
        key: "names",
        get: function get() {
          var names = _get(_getPrototypeOf(If.prototype), "names", this);
          addExprNames(names, this.condition);
          if (this["else"]) addNames(names, this["else"].names);
          return names;
        }
      }]);
    }(BlockNode);
    If.kind = "if";
    var For = /*#__PURE__*/function (_BlockNode3) {
      function For() {
        _classCallCheck(this, For);
        return _callSuper(this, For, arguments);
      }
      _inherits(For, _BlockNode3);
      return _createClass(For);
    }(BlockNode);
    For.kind = "for";
    var ForLoop = /*#__PURE__*/function (_For) {
      function ForLoop(iteration) {
        var _this10;
        _classCallCheck(this, ForLoop);
        _this10 = _callSuper(this, ForLoop);
        _this10.iteration = iteration;
        return _this10;
      }
      _inherits(ForLoop, _For);
      return _createClass(ForLoop, [{
        key: "render",
        value: function render(opts) {
          return "for(".concat(this.iteration, ")") + _get(_getPrototypeOf(ForLoop.prototype), "render", this).call(this, opts);
        }
      }, {
        key: "optimizeNames",
        value: function optimizeNames(names, constants) {
          if (!_get(_getPrototypeOf(ForLoop.prototype), "optimizeNames", this).call(this, names, constants)) return;
          this.iteration = optimizeExpr(this.iteration, names, constants);
          return this;
        }
      }, {
        key: "names",
        get: function get() {
          return addNames(_get(_getPrototypeOf(ForLoop.prototype), "names", this), this.iteration.names);
        }
      }]);
    }(For);
    var ForRange = /*#__PURE__*/function (_For2) {
      function ForRange(varKind, name, from, to) {
        var _this11;
        _classCallCheck(this, ForRange);
        _this11 = _callSuper(this, ForRange);
        _this11.varKind = varKind;
        _this11.name = name;
        _this11.from = from;
        _this11.to = to;
        return _this11;
      }
      _inherits(ForRange, _For2);
      return _createClass(ForRange, [{
        key: "render",
        value: function render(opts) {
          var varKind = opts.es5 ? scope_1.varKinds["var"] : this.varKind;
          var name = this.name,
            from = this.from,
            to = this.to;
          return "for(".concat(varKind, " ").concat(name, "=").concat(from, "; ").concat(name, "<").concat(to, "; ").concat(name, "++)") + _get(_getPrototypeOf(ForRange.prototype), "render", this).call(this, opts);
        }
      }, {
        key: "names",
        get: function get() {
          var names = addExprNames(_get(_getPrototypeOf(ForRange.prototype), "names", this), this.from);
          return addExprNames(names, this.to);
        }
      }]);
    }(For);
    var ForIter = /*#__PURE__*/function (_For3) {
      function ForIter(loop, varKind, name, iterable) {
        var _this12;
        _classCallCheck(this, ForIter);
        _this12 = _callSuper(this, ForIter);
        _this12.loop = loop;
        _this12.varKind = varKind;
        _this12.name = name;
        _this12.iterable = iterable;
        return _this12;
      }
      _inherits(ForIter, _For3);
      return _createClass(ForIter, [{
        key: "render",
        value: function render(opts) {
          return "for(".concat(this.varKind, " ").concat(this.name, " ").concat(this.loop, " ").concat(this.iterable, ")") + _get(_getPrototypeOf(ForIter.prototype), "render", this).call(this, opts);
        }
      }, {
        key: "optimizeNames",
        value: function optimizeNames(names, constants) {
          if (!_get(_getPrototypeOf(ForIter.prototype), "optimizeNames", this).call(this, names, constants)) return;
          this.iterable = optimizeExpr(this.iterable, names, constants);
          return this;
        }
      }, {
        key: "names",
        get: function get() {
          return addNames(_get(_getPrototypeOf(ForIter.prototype), "names", this), this.iterable.names);
        }
      }]);
    }(For);
    var Func = /*#__PURE__*/function (_BlockNode4) {
      function Func(name, args, async) {
        var _this13;
        _classCallCheck(this, Func);
        _this13 = _callSuper(this, Func);
        _this13.name = name;
        _this13.args = args;
        _this13.async = async;
        return _this13;
      }
      _inherits(Func, _BlockNode4);
      return _createClass(Func, [{
        key: "render",
        value: function render(opts) {
          var _async = this.async ? "async " : "";
          return "".concat(_async, "function ").concat(this.name, "(").concat(this.args, ")") + _get(_getPrototypeOf(Func.prototype), "render", this).call(this, opts);
        }
      }]);
    }(BlockNode);
    Func.kind = "func";
    var Return = /*#__PURE__*/function (_ParentNode3) {
      function Return() {
        _classCallCheck(this, Return);
        return _callSuper(this, Return, arguments);
      }
      _inherits(Return, _ParentNode3);
      return _createClass(Return, [{
        key: "render",
        value: function render(opts) {
          return "return " + _get(_getPrototypeOf(Return.prototype), "render", this).call(this, opts);
        }
      }]);
    }(ParentNode);
    Return.kind = "return";
    var Try = /*#__PURE__*/function (_BlockNode5) {
      function Try() {
        _classCallCheck(this, Try);
        return _callSuper(this, Try, arguments);
      }
      _inherits(Try, _BlockNode5);
      return _createClass(Try, [{
        key: "render",
        value: function render(opts) {
          var code = "try" + _get(_getPrototypeOf(Try.prototype), "render", this).call(this, opts);
          if (this["catch"]) code += this["catch"].render(opts);
          if (this["finally"]) code += this["finally"].render(opts);
          return code;
        }
      }, {
        key: "optimizeNodes",
        value: function optimizeNodes() {
          var _a, _b;
          _get(_getPrototypeOf(Try.prototype), "optimizeNodes", this).call(this);
          (_a = this["catch"]) === null || _a === void 0 ? void 0 : _a.optimizeNodes();
          (_b = this["finally"]) === null || _b === void 0 ? void 0 : _b.optimizeNodes();
          return this;
        }
      }, {
        key: "optimizeNames",
        value: function optimizeNames(names, constants) {
          var _a, _b;
          _get(_getPrototypeOf(Try.prototype), "optimizeNames", this).call(this, names, constants);
          (_a = this["catch"]) === null || _a === void 0 ? void 0 : _a.optimizeNames(names, constants);
          (_b = this["finally"]) === null || _b === void 0 ? void 0 : _b.optimizeNames(names, constants);
          return this;
        }
      }, {
        key: "names",
        get: function get() {
          var names = _get(_getPrototypeOf(Try.prototype), "names", this);
          if (this["catch"]) addNames(names, this["catch"].names);
          if (this["finally"]) addNames(names, this["finally"].names);
          return names;
        }
      }]);
    }(BlockNode);
    var Catch = /*#__PURE__*/function (_BlockNode6) {
      function Catch(error) {
        var _this14;
        _classCallCheck(this, Catch);
        _this14 = _callSuper(this, Catch);
        _this14.error = error;
        return _this14;
      }
      _inherits(Catch, _BlockNode6);
      return _createClass(Catch, [{
        key: "render",
        value: function render(opts) {
          return "catch(".concat(this.error, ")") + _get(_getPrototypeOf(Catch.prototype), "render", this).call(this, opts);
        }
      }]);
    }(BlockNode);
    Catch.kind = "catch";
    var Finally = /*#__PURE__*/function (_BlockNode7) {
      function Finally() {
        _classCallCheck(this, Finally);
        return _callSuper(this, Finally, arguments);
      }
      _inherits(Finally, _BlockNode7);
      return _createClass(Finally, [{
        key: "render",
        value: function render(opts) {
          return "finally" + _get(_getPrototypeOf(Finally.prototype), "render", this).call(this, opts);
        }
      }]);
    }(BlockNode);
    Finally.kind = "finally";
    var CodeGen = /*#__PURE__*/function () {
      function CodeGen(extScope) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        _classCallCheck(this, CodeGen);
        this._values = {};
        this._blockStarts = [];
        this._constants = {};
        this.opts = _objectSpread2(_objectSpread2({}, opts), {}, {
          _n: opts.lines ? "\n" : ""
        });
        this._extScope = extScope;
        this._scope = new scope_1.Scope({
          parent: extScope
        });
        this._nodes = [new Root()];
      }
      return _createClass(CodeGen, [{
        key: "toString",
        value: function toString() {
          return this._root.render(this.opts);
        }
        // returns unique name in the internal scope
      }, {
        key: "name",
        value: function name(prefix) {
          return this._scope.name(prefix);
        }
        // reserves unique name in the external scope
      }, {
        key: "scopeName",
        value: function scopeName(prefix) {
          return this._extScope.name(prefix);
        }
        // reserves unique name in the external scope and assigns value to it
      }, {
        key: "scopeValue",
        value: function scopeValue(prefixOrName, value) {
          var name = this._extScope.value(prefixOrName, value);
          var vs = this._values[name.prefix] || (this._values[name.prefix] = new Set());
          vs.add(name);
          return name;
        }
      }, {
        key: "getScopeValue",
        value: function getScopeValue(prefix, keyOrRef) {
          return this._extScope.getValue(prefix, keyOrRef);
        }
        // return code that assigns values in the external scope to the names that are used internally
        // (same names that were returned by gen.scopeName or gen.scopeValue)
      }, {
        key: "scopeRefs",
        value: function scopeRefs(scopeName) {
          return this._extScope.scopeRefs(scopeName, this._values);
        }
      }, {
        key: "scopeCode",
        value: function scopeCode() {
          return this._extScope.scopeCode(this._values);
        }
      }, {
        key: "_def",
        value: function _def(varKind, nameOrPrefix, rhs, constant) {
          var name = this._scope.toName(nameOrPrefix);
          if (rhs !== undefined && constant) this._constants[name.str] = rhs;
          this._leafNode(new Def(varKind, name, rhs));
          return name;
        }
        // `const` declaration (`var` in es5 mode)
      }, {
        key: "const",
        value: function _const(nameOrPrefix, rhs, _constant) {
          return this._def(scope_1.varKinds["const"], nameOrPrefix, rhs, _constant);
        }
        // `let` declaration with optional assignment (`var` in es5 mode)
      }, {
        key: "let",
        value: function _let(nameOrPrefix, rhs, _constant) {
          return this._def(scope_1.varKinds["let"], nameOrPrefix, rhs, _constant);
        }
        // `var` declaration with optional assignment
      }, {
        key: "var",
        value: function _var(nameOrPrefix, rhs, _constant) {
          return this._def(scope_1.varKinds["var"], nameOrPrefix, rhs, _constant);
        }
        // assignment code
      }, {
        key: "assign",
        value: function assign(lhs, rhs, sideEffects) {
          return this._leafNode(new Assign(lhs, rhs, sideEffects));
        }
        // `+=` code
      }, {
        key: "add",
        value: function add(lhs, rhs) {
          return this._leafNode(new AssignOp(lhs, exports.operators.ADD, rhs));
        }
        // appends passed SafeExpr to code or executes Block
      }, {
        key: "code",
        value: function code(c) {
          if (typeof c == "function") c();else if (c !== code_1.nil) this._leafNode(new AnyCode(c));
          return this;
        }
        // returns code for object literal for the passed argument list of key-value pairs
      }, {
        key: "object",
        value: function object() {
          var code = ["{"];
          for (var _len = arguments.length, keyValues = new Array(_len), _key = 0; _key < _len; _key++) {
            keyValues[_key] = arguments[_key];
          }
          for (var _i = 0, _keyValues = keyValues; _i < _keyValues.length; _i++) {
            var _keyValues$_i = _slicedToArray(_keyValues[_i], 2),
              key = _keyValues$_i[0],
              value = _keyValues$_i[1];
            if (code.length > 1) code.push(",");
            code.push(key);
            if (key !== value || this.opts.es5) {
              code.push(":");
              (0, code_1.addCodeArg)(code, value);
            }
          }
          code.push("}");
          return new code_1._Code(code);
        }
        // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      }, {
        key: "if",
        value: function _if(condition, thenBody, elseBody) {
          this._blockNode(new If(condition));
          if (thenBody && elseBody) {
            this.code(thenBody)["else"]().code(elseBody).endIf();
          } else if (thenBody) {
            this.code(thenBody).endIf();
          } else if (elseBody) {
            throw new Error('CodeGen: "else" body without "then" body');
          }
          return this;
        }
        // `else if` clause - invalid without `if` or after `else` clauses
      }, {
        key: "elseIf",
        value: function elseIf(condition) {
          return this._elseNode(new If(condition));
        }
        // `else` clause - only valid after `if` or `else if` clauses
      }, {
        key: "else",
        value: function _else() {
          return this._elseNode(new Else());
        }
        // end `if` statement (needed if gen.if was used only with condition)
      }, {
        key: "endIf",
        value: function endIf() {
          return this._endBlockNode(If, Else);
        }
      }, {
        key: "_for",
        value: function _for(node, forBody) {
          this._blockNode(node);
          if (forBody) this.code(forBody).endFor();
          return this;
        }
        // a generic `for` clause (or statement if `forBody` is passed)
      }, {
        key: "for",
        value: function _for(iteration, forBody) {
          return this._for(new ForLoop(iteration), forBody);
        }
        // `for` statement for a range of values
      }, {
        key: "forRange",
        value: function forRange(nameOrPrefix, from, to, forBody) {
          var varKind = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.opts.es5 ? scope_1.varKinds["var"] : scope_1.varKinds["let"];
          var name = this._scope.toName(nameOrPrefix);
          return this._for(new ForRange(varKind, name, from, to), function () {
            return forBody(name);
          });
        }
        // `for-of` statement (in es5 mode replace with a normal for loop)
      }, {
        key: "forOf",
        value: function forOf(nameOrPrefix, iterable, forBody) {
          var _this15 = this;
          var varKind = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : scope_1.varKinds["const"];
          var name = this._scope.toName(nameOrPrefix);
          if (this.opts.es5) {
            var arr = iterable instanceof code_1.Name ? iterable : this["var"]("_arr", iterable);
            return this.forRange("_i", 0, (0, code_1._)(_templateObject$z || (_templateObject$z = _taggedTemplateLiteral(["", ".length"])), arr), function (i) {
              _this15["var"](name, (0, code_1._)(_templateObject2$w || (_templateObject2$w = _taggedTemplateLiteral(["", "[", "]"])), arr, i));
              forBody(name);
            });
          }
          return this._for(new ForIter("of", varKind, name, iterable), function () {
            return forBody(name);
          });
        }
        // `for-in` statement.
        // With option `ownProperties` replaced with a `for-of` loop for object keys
      }, {
        key: "forIn",
        value: function forIn(nameOrPrefix, obj, forBody) {
          var varKind = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.opts.es5 ? scope_1.varKinds["var"] : scope_1.varKinds["const"];
          if (this.opts.ownProperties) {
            return this.forOf(nameOrPrefix, (0, code_1._)(_templateObject3$r || (_templateObject3$r = _taggedTemplateLiteral(["Object.keys(", ")"])), obj), forBody);
          }
          var name = this._scope.toName(nameOrPrefix);
          return this._for(new ForIter("in", varKind, name, obj), function () {
            return forBody(name);
          });
        }
        // end `for` loop
      }, {
        key: "endFor",
        value: function endFor() {
          return this._endBlockNode(For);
        }
        // `label` statement
      }, {
        key: "label",
        value: function label(_label) {
          return this._leafNode(new Label(_label));
        }
        // `break` statement
      }, {
        key: "break",
        value: function _break(label) {
          return this._leafNode(new Break(label));
        }
        // `return` statement
      }, {
        key: "return",
        value: function _return(value) {
          var node = new Return();
          this._blockNode(node);
          this.code(value);
          if (node.nodes.length !== 1) throw new Error('CodeGen: "return" should have one node');
          return this._endBlockNode(Return);
        }
        // `try` statement
      }, {
        key: "try",
        value: function _try(tryBody, catchCode, finallyCode) {
          if (!catchCode && !finallyCode) throw new Error('CodeGen: "try" without "catch" and "finally"');
          var node = new Try();
          this._blockNode(node);
          this.code(tryBody);
          if (catchCode) {
            var error = this.name("e");
            this._currNode = node["catch"] = new Catch(error);
            catchCode(error);
          }
          if (finallyCode) {
            this._currNode = node["finally"] = new Finally();
            this.code(finallyCode);
          }
          return this._endBlockNode(Catch, Finally);
        }
        // `throw` statement
      }, {
        key: "throw",
        value: function _throw(error) {
          return this._leafNode(new Throw(error));
        }
        // start self-balancing block
      }, {
        key: "block",
        value: function block(body, nodeCount) {
          this._blockStarts.push(this._nodes.length);
          if (body) this.code(body).endBlock(nodeCount);
          return this;
        }
        // end the current self-balancing block
      }, {
        key: "endBlock",
        value: function endBlock(nodeCount) {
          var len = this._blockStarts.pop();
          if (len === undefined) throw new Error("CodeGen: not in self-balancing block");
          var toClose = this._nodes.length - len;
          if (toClose < 0 || nodeCount !== undefined && toClose !== nodeCount) {
            throw new Error("CodeGen: wrong number of nodes: ".concat(toClose, " vs ").concat(nodeCount, " expected"));
          }
          this._nodes.length = len;
          return this;
        }
        // `function` heading (or definition if funcBody is passed)
      }, {
        key: "func",
        value: function func(name) {
          var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : code_1.nil;
          var async = arguments.length > 2 ? arguments[2] : undefined;
          var funcBody = arguments.length > 3 ? arguments[3] : undefined;
          this._blockNode(new Func(name, args, async));
          if (funcBody) this.code(funcBody).endFunc();
          return this;
        }
        // end function definition
      }, {
        key: "endFunc",
        value: function endFunc() {
          return this._endBlockNode(Func);
        }
      }, {
        key: "optimize",
        value: function optimize() {
          var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          while (n-- > 0) {
            this._root.optimizeNodes();
            this._root.optimizeNames(this._root.names, this._constants);
          }
        }
      }, {
        key: "_leafNode",
        value: function _leafNode(node) {
          this._currNode.nodes.push(node);
          return this;
        }
      }, {
        key: "_blockNode",
        value: function _blockNode(node) {
          this._currNode.nodes.push(node);
          this._nodes.push(node);
        }
      }, {
        key: "_endBlockNode",
        value: function _endBlockNode(N1, N2) {
          var n = this._currNode;
          if (n instanceof N1 || N2 && n instanceof N2) {
            this._nodes.pop();
            return this;
          }
          throw new Error("CodeGen: not in block \"".concat(N2 ? "".concat(N1.kind, "/").concat(N2.kind) : N1.kind, "\""));
        }
      }, {
        key: "_elseNode",
        value: function _elseNode(node) {
          var n = this._currNode;
          if (!(n instanceof If)) {
            throw new Error('CodeGen: "else" without "if"');
          }
          this._currNode = n["else"] = node;
          return this;
        }
      }, {
        key: "_root",
        get: function get() {
          return this._nodes[0];
        }
      }, {
        key: "_currNode",
        get: function get() {
          var ns = this._nodes;
          return ns[ns.length - 1];
        },
        set: function set(node) {
          var ns = this._nodes;
          ns[ns.length - 1] = node;
        }
      }]);
    }();
    exports.CodeGen = CodeGen;
    function addNames(names, from) {
      for (var n in from) names[n] = (names[n] || 0) + (from[n] || 0);
      return names;
    }
    function addExprNames(names, from) {
      return from instanceof code_1._CodeOrName ? addNames(names, from.names) : names;
    }
    function optimizeExpr(expr, names, constants) {
      if (expr instanceof code_1.Name) return replaceName(expr);
      if (!canOptimize(expr)) return expr;
      return new code_1._Code(expr._items.reduce(function (items, c) {
        if (c instanceof code_1.Name) c = replaceName(c);
        if (c instanceof code_1._Code) items.push.apply(items, _toConsumableArray(c._items));else items.push(c);
        return items;
      }, []));
      function replaceName(n) {
        var c = constants[n.str];
        if (c === undefined || names[n.str] !== 1) return n;
        delete names[n.str];
        return c;
      }
      function canOptimize(e) {
        return e instanceof code_1._Code && e._items.some(function (c) {
          return c instanceof code_1.Name && names[c.str] === 1 && constants[c.str] !== undefined;
        });
      }
    }
    function subtractNames(names, from) {
      for (var n in from) names[n] = (names[n] || 0) - (from[n] || 0);
    }
    function not(x) {
      return typeof x == "boolean" || typeof x == "number" || x === null ? !x : (0, code_1._)(_templateObject4$k || (_templateObject4$k = _taggedTemplateLiteral(["!", ""])), par(x));
    }
    exports.not = not;
    var andCode = mappend(exports.operators.AND);
    // boolean AND (&&) expression with the passed arguments
    function and() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return args.reduce(andCode);
    }
    exports.and = and;
    var orCode = mappend(exports.operators.OR);
    // boolean OR (||) expression with the passed arguments
    function or() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return args.reduce(orCode);
    }
    exports.or = or;
    function mappend(op) {
      return function (x, y) {
        return x === code_1.nil ? y : y === code_1.nil ? x : (0, code_1._)(_templateObject5$g || (_templateObject5$g = _taggedTemplateLiteral(["", " ", " ", ""])), par(x), op, par(y));
      };
    }
    function par(x) {
      return x instanceof code_1.Name ? x : (0, code_1._)(_templateObject6$b || (_templateObject6$b = _taggedTemplateLiteral(["(", ")"])), x);
    }
  })(codegen);

  var util = {};

  var _templateObject$y, _templateObject2$v, _templateObject3$q, _templateObject4$j, _templateObject5$f, _templateObject6$a, _templateObject7$a, _templateObject8$a, _templateObject9$9, _templateObject10$8, _templateObject11$7, _templateObject12$7, _templateObject13$6, _templateObject14$6, _templateObject15$6, _templateObject16$5, _templateObject17$5, _templateObject18$3;
  (function (exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.checkStrictMode = exports.getErrorPath = exports.Type = exports.useFunc = exports.setEvaluated = exports.evaluatedPropsToName = exports.mergeEvaluated = exports.eachItem = exports.unescapeJsonPointer = exports.escapeJsonPointer = exports.escapeFragment = exports.unescapeFragment = exports.schemaRefOrVal = exports.schemaHasRulesButRef = exports.schemaHasRules = exports.checkUnknownRules = exports.alwaysValidSchema = exports.toHash = void 0;
    var codegen_1 = codegen;
    var code_1 = code$1;
    // TODO refactor to use Set
    function toHash(arr) {
      var hash = {};
      var _iterator = _createForOfIteratorHelper(arr),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          hash[item] = true;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return hash;
    }
    exports.toHash = toHash;
    function alwaysValidSchema(it, schema) {
      if (typeof schema == "boolean") return schema;
      if (Object.keys(schema).length === 0) return true;
      checkUnknownRules(it, schema);
      return !schemaHasRules(schema, it.self.RULES.all);
    }
    exports.alwaysValidSchema = alwaysValidSchema;
    function checkUnknownRules(it) {
      var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : it.schema;
      var opts = it.opts,
        self = it.self;
      if (!opts.strictSchema) return;
      if (typeof schema === "boolean") return;
      var rules = self.RULES.keywords;
      for (var key in schema) {
        if (!rules[key]) checkStrictMode(it, "unknown keyword: \"".concat(key, "\""));
      }
    }
    exports.checkUnknownRules = checkUnknownRules;
    function schemaHasRules(schema, rules) {
      if (typeof schema == "boolean") return !schema;
      for (var key in schema) if (rules[key]) return true;
      return false;
    }
    exports.schemaHasRules = schemaHasRules;
    function schemaHasRulesButRef(schema, RULES) {
      if (typeof schema == "boolean") return !schema;
      for (var key in schema) if (key !== "$ref" && RULES.all[key]) return true;
      return false;
    }
    exports.schemaHasRulesButRef = schemaHasRulesButRef;
    function schemaRefOrVal(_ref, schema, keyword, $data) {
      var topSchemaRef = _ref.topSchemaRef,
        schemaPath = _ref.schemaPath;
      if (!$data) {
        if (typeof schema == "number" || typeof schema == "boolean") return schema;
        if (typeof schema == "string") return (0, codegen_1._)(_templateObject$y || (_templateObject$y = _taggedTemplateLiteral(["", ""])), schema);
      }
      return (0, codegen_1._)(_templateObject2$v || (_templateObject2$v = _taggedTemplateLiteral(["", "", "", ""])), topSchemaRef, schemaPath, (0, codegen_1.getProperty)(keyword));
    }
    exports.schemaRefOrVal = schemaRefOrVal;
    function unescapeFragment(str) {
      return unescapeJsonPointer(decodeURIComponent(str));
    }
    exports.unescapeFragment = unescapeFragment;
    function escapeFragment(str) {
      return encodeURIComponent(escapeJsonPointer(str));
    }
    exports.escapeFragment = escapeFragment;
    function escapeJsonPointer(str) {
      if (typeof str == "number") return "".concat(str);
      return str.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    exports.escapeJsonPointer = escapeJsonPointer;
    function unescapeJsonPointer(str) {
      return str.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    exports.unescapeJsonPointer = unescapeJsonPointer;
    function eachItem(xs, f) {
      if (Array.isArray(xs)) {
        var _iterator2 = _createForOfIteratorHelper(xs),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var x = _step2.value;
            f(x);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else {
        f(xs);
      }
    }
    exports.eachItem = eachItem;
    function makeMergeEvaluated(_ref2) {
      var mergeNames = _ref2.mergeNames,
        mergeToName = _ref2.mergeToName,
        mergeValues = _ref2.mergeValues,
        resultToName = _ref2.resultToName;
      return function (gen, from, to, toName) {
        var res = to === undefined ? from : to instanceof codegen_1.Name ? (from instanceof codegen_1.Name ? mergeNames(gen, from, to) : mergeToName(gen, from, to), to) : from instanceof codegen_1.Name ? (mergeToName(gen, to, from), from) : mergeValues(from, to);
        return toName === codegen_1.Name && !(res instanceof codegen_1.Name) ? resultToName(gen, res) : res;
      };
    }
    exports.mergeEvaluated = {
      props: makeMergeEvaluated({
        mergeNames: function mergeNames(gen, from, to) {
          return gen["if"]((0, codegen_1._)(_templateObject3$q || (_templateObject3$q = _taggedTemplateLiteral(["", " !== true && ", " !== undefined"])), to, from), function () {
            gen["if"]((0, codegen_1._)(_templateObject4$j || (_templateObject4$j = _taggedTemplateLiteral(["", " === true"])), from), function () {
              return gen.assign(to, true);
            }, function () {
              return gen.assign(to, (0, codegen_1._)(_templateObject5$f || (_templateObject5$f = _taggedTemplateLiteral(["", " || {}"])), to)).code((0, codegen_1._)(_templateObject6$a || (_templateObject6$a = _taggedTemplateLiteral(["Object.assign(", ", ", ")"])), to, from));
            });
          });
        },
        mergeToName: function mergeToName(gen, from, to) {
          return gen["if"]((0, codegen_1._)(_templateObject7$a || (_templateObject7$a = _taggedTemplateLiteral(["", " !== true"])), to), function () {
            if (from === true) {
              gen.assign(to, true);
            } else {
              gen.assign(to, (0, codegen_1._)(_templateObject8$a || (_templateObject8$a = _taggedTemplateLiteral(["", " || {}"])), to));
              setEvaluated(gen, to, from);
            }
          });
        },
        mergeValues: function mergeValues(from, to) {
          return from === true ? true : _objectSpread2(_objectSpread2({}, from), to);
        },
        resultToName: evaluatedPropsToName
      }),
      items: makeMergeEvaluated({
        mergeNames: function mergeNames(gen, from, to) {
          return gen["if"]((0, codegen_1._)(_templateObject9$9 || (_templateObject9$9 = _taggedTemplateLiteral(["", " !== true && ", " !== undefined"])), to, from), function () {
            return gen.assign(to, (0, codegen_1._)(_templateObject10$8 || (_templateObject10$8 = _taggedTemplateLiteral(["", " === true ? true : ", " > ", " ? ", " : ", ""])), from, to, from, to, from));
          });
        },
        mergeToName: function mergeToName(gen, from, to) {
          return gen["if"]((0, codegen_1._)(_templateObject11$7 || (_templateObject11$7 = _taggedTemplateLiteral(["", " !== true"])), to), function () {
            return gen.assign(to, from === true ? true : (0, codegen_1._)(_templateObject12$7 || (_templateObject12$7 = _taggedTemplateLiteral(["", " > ", " ? ", " : ", ""])), to, from, to, from));
          });
        },
        mergeValues: function mergeValues(from, to) {
          return from === true ? true : Math.max(from, to);
        },
        resultToName: function resultToName(gen, items) {
          return gen["var"]("items", items);
        }
      })
    };
    function evaluatedPropsToName(gen, ps) {
      if (ps === true) return gen["var"]("props", true);
      var props = gen["var"]("props", (0, codegen_1._)(_templateObject13$6 || (_templateObject13$6 = _taggedTemplateLiteral(["{}"]))));
      if (ps !== undefined) setEvaluated(gen, props, ps);
      return props;
    }
    exports.evaluatedPropsToName = evaluatedPropsToName;
    function setEvaluated(gen, props, ps) {
      Object.keys(ps).forEach(function (p) {
        return gen.assign((0, codegen_1._)(_templateObject14$6 || (_templateObject14$6 = _taggedTemplateLiteral(["", "", ""])), props, (0, codegen_1.getProperty)(p)), true);
      });
    }
    exports.setEvaluated = setEvaluated;
    var snippets = {};
    function useFunc(gen, f) {
      return gen.scopeValue("func", {
        ref: f,
        code: snippets[f.code] || (snippets[f.code] = new code_1._Code(f.code))
      });
    }
    exports.useFunc = useFunc;
    var Type;
    (function (Type) {
      Type[Type["Num"] = 0] = "Num";
      Type[Type["Str"] = 1] = "Str";
    })(Type = exports.Type || (exports.Type = {}));
    function getErrorPath(dataProp, dataPropType, jsPropertySyntax) {
      // let path
      if (dataProp instanceof codegen_1.Name) {
        var isNumber = dataPropType === Type.Num;
        return jsPropertySyntax ? isNumber ? (0, codegen_1._)(_templateObject15$6 || (_templateObject15$6 = _taggedTemplateLiteral(["\"[\" + ", " + \"]\""])), dataProp) : (0, codegen_1._)(_templateObject16$5 || (_templateObject16$5 = _taggedTemplateLiteral(["\"['\" + ", " + \"']\""])), dataProp) : isNumber ? (0, codegen_1._)(_templateObject17$5 || (_templateObject17$5 = _taggedTemplateLiteral(["\"/\" + ", ""])), dataProp) : (0, codegen_1._)(_templateObject18$3 || (_templateObject18$3 = _taggedTemplateLiteral(["\"/\" + ", ".replace(/~/g, \"~0\").replace(/\\//g, \"~1\")"], ["\"/\" + ", ".replace(/~/g, \"~0\").replace(/\\\\//g, \"~1\")"])), dataProp); // TODO maybe use global escapePointer
      }
      return jsPropertySyntax ? (0, codegen_1.getProperty)(dataProp).toString() : "/" + escapeJsonPointer(dataProp);
    }
    exports.getErrorPath = getErrorPath;
    function checkStrictMode(it, msg) {
      var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : it.opts.strictSchema;
      if (!mode) return;
      msg = "strict mode: ".concat(msg);
      if (mode === true) throw new Error(msg);
      it.self.logger.warn(msg);
    }
    exports.checkStrictMode = checkStrictMode;
  })(util);

  var names = {};

  var hasRequiredNames;
  function requireNames() {
    if (hasRequiredNames) return names;
    hasRequiredNames = 1;
    Object.defineProperty(names, "__esModule", {
      value: true
    });
    var codegen_1 = codegen;
    var names$1 = {
      // validation function arguments
      data: new codegen_1.Name("data"),
      // args passed from referencing schema
      valCxt: new codegen_1.Name("valCxt"),
      instancePath: new codegen_1.Name("instancePath"),
      parentData: new codegen_1.Name("parentData"),
      parentDataProperty: new codegen_1.Name("parentDataProperty"),
      rootData: new codegen_1.Name("rootData"),
      dynamicAnchors: new codegen_1.Name("dynamicAnchors"),
      // function scoped variables
      vErrors: new codegen_1.Name("vErrors"),
      errors: new codegen_1.Name("errors"),
      "this": new codegen_1.Name("this"),
      // "globals"
      self: new codegen_1.Name("self"),
      scope: new codegen_1.Name("scope"),
      // JTD serialize/parse name for JSON string and position
      json: new codegen_1.Name("json"),
      jsonPos: new codegen_1.Name("jsonPos"),
      jsonLen: new codegen_1.Name("jsonLen"),
      jsonPart: new codegen_1.Name("jsonPart")
    };
    names["default"] = names$1;
    return names;
  }

  var _templateObject$x, _templateObject2$u, _templateObject3$p, _templateObject4$i, _templateObject5$e, _templateObject6$9, _templateObject7$9, _templateObject8$9, _templateObject9$8, _templateObject10$7, _templateObject11$6, _templateObject12$6, _templateObject13$5, _templateObject14$5, _templateObject15$5, _templateObject16$4, _templateObject17$4, _templateObject18$2, _templateObject19$2, _templateObject20$2, _templateObject21$2, _templateObject22$2, _templateObject23$2, _templateObject24$2, _templateObject25$2;
  var hasRequiredErrors;
  function requireErrors() {
    if (hasRequiredErrors) return errors;
    hasRequiredErrors = 1;
    (function (exports) {

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.extendErrors = exports.resetErrorsCount = exports.reportExtraError = exports.reportError = exports.keyword$DataError = exports.keywordError = void 0;
      var codegen_1 = codegen;
      var util_1 = util;
      var names_1 = requireNames();
      exports.keywordError = {
        message: function message(_ref) {
          var keyword = _ref.keyword;
          return (0, codegen_1.str)(_templateObject$x || (_templateObject$x = _taggedTemplateLiteral(["must pass \"", "\" keyword validation"])), keyword);
        }
      };
      exports.keyword$DataError = {
        message: function message(_ref2) {
          var keyword = _ref2.keyword,
            schemaType = _ref2.schemaType;
          return schemaType ? (0, codegen_1.str)(_templateObject2$u || (_templateObject2$u = _taggedTemplateLiteral(["\"", "\" keyword must be ", " ($data)"])), keyword, schemaType) : (0, codegen_1.str)(_templateObject3$p || (_templateObject3$p = _taggedTemplateLiteral(["\"", "\" keyword is invalid ($data)"])), keyword);
        }
      };
      function reportError(cxt) {
        var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : exports.keywordError;
        var errorPaths = arguments.length > 2 ? arguments[2] : undefined;
        var overrideAllErrors = arguments.length > 3 ? arguments[3] : undefined;
        var it = cxt.it;
        var gen = it.gen,
          compositeRule = it.compositeRule,
          allErrors = it.allErrors;
        var errObj = errorObjectCode(cxt, error, errorPaths);
        if (overrideAllErrors !== null && overrideAllErrors !== void 0 ? overrideAllErrors : compositeRule || allErrors) {
          addError(gen, errObj);
        } else {
          returnErrors(it, (0, codegen_1._)(_templateObject4$i || (_templateObject4$i = _taggedTemplateLiteral(["[", "]"])), errObj));
        }
      }
      exports.reportError = reportError;
      function reportExtraError(cxt) {
        var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : exports.keywordError;
        var errorPaths = arguments.length > 2 ? arguments[2] : undefined;
        var it = cxt.it;
        var gen = it.gen,
          compositeRule = it.compositeRule,
          allErrors = it.allErrors;
        var errObj = errorObjectCode(cxt, error, errorPaths);
        addError(gen, errObj);
        if (!(compositeRule || allErrors)) {
          returnErrors(it, names_1["default"].vErrors);
        }
      }
      exports.reportExtraError = reportExtraError;
      function resetErrorsCount(gen, errsCount) {
        gen.assign(names_1["default"].errors, errsCount);
        gen["if"]((0, codegen_1._)(_templateObject5$e || (_templateObject5$e = _taggedTemplateLiteral(["", " !== null"])), names_1["default"].vErrors), function () {
          return gen["if"](errsCount, function () {
            return gen.assign((0, codegen_1._)(_templateObject6$9 || (_templateObject6$9 = _taggedTemplateLiteral(["", ".length"])), names_1["default"].vErrors), errsCount);
          }, function () {
            return gen.assign(names_1["default"].vErrors, null);
          });
        });
      }
      exports.resetErrorsCount = resetErrorsCount;
      function extendErrors(_ref3) {
        var gen = _ref3.gen,
          keyword = _ref3.keyword,
          schemaValue = _ref3.schemaValue,
          data = _ref3.data,
          errsCount = _ref3.errsCount,
          it = _ref3.it;
        /* istanbul ignore if */
        if (errsCount === undefined) throw new Error("ajv implementation error");
        var err = gen.name("err");
        gen.forRange("i", errsCount, names_1["default"].errors, function (i) {
          gen["const"](err, (0, codegen_1._)(_templateObject7$9 || (_templateObject7$9 = _taggedTemplateLiteral(["", "[", "]"])), names_1["default"].vErrors, i));
          gen["if"]((0, codegen_1._)(_templateObject8$9 || (_templateObject8$9 = _taggedTemplateLiteral(["", ".instancePath === undefined"])), err), function () {
            return gen.assign((0, codegen_1._)(_templateObject9$8 || (_templateObject9$8 = _taggedTemplateLiteral(["", ".instancePath"])), err), (0, codegen_1.strConcat)(names_1["default"].instancePath, it.errorPath));
          });
          gen.assign((0, codegen_1._)(_templateObject10$7 || (_templateObject10$7 = _taggedTemplateLiteral(["", ".schemaPath"])), err), (0, codegen_1.str)(_templateObject11$6 || (_templateObject11$6 = _taggedTemplateLiteral(["", "/", ""])), it.errSchemaPath, keyword));
          if (it.opts.verbose) {
            gen.assign((0, codegen_1._)(_templateObject12$6 || (_templateObject12$6 = _taggedTemplateLiteral(["", ".schema"])), err), schemaValue);
            gen.assign((0, codegen_1._)(_templateObject13$5 || (_templateObject13$5 = _taggedTemplateLiteral(["", ".data"])), err), data);
          }
        });
      }
      exports.extendErrors = extendErrors;
      function addError(gen, errObj) {
        var err = gen["const"]("err", errObj);
        gen["if"]((0, codegen_1._)(_templateObject14$5 || (_templateObject14$5 = _taggedTemplateLiteral(["", " === null"])), names_1["default"].vErrors), function () {
          return gen.assign(names_1["default"].vErrors, (0, codegen_1._)(_templateObject15$5 || (_templateObject15$5 = _taggedTemplateLiteral(["[", "]"])), err));
        }, (0, codegen_1._)(_templateObject16$4 || (_templateObject16$4 = _taggedTemplateLiteral(["", ".push(", ")"])), names_1["default"].vErrors, err));
        gen.code((0, codegen_1._)(_templateObject17$4 || (_templateObject17$4 = _taggedTemplateLiteral(["", "++"])), names_1["default"].errors));
      }
      function returnErrors(it, errs) {
        var gen = it.gen,
          validateName = it.validateName,
          schemaEnv = it.schemaEnv;
        if (schemaEnv.$async) {
          gen["throw"]((0, codegen_1._)(_templateObject18$2 || (_templateObject18$2 = _taggedTemplateLiteral(["new ", "(", ")"])), it.ValidationError, errs));
        } else {
          gen.assign((0, codegen_1._)(_templateObject19$2 || (_templateObject19$2 = _taggedTemplateLiteral(["", ".errors"])), validateName), errs);
          gen["return"](false);
        }
      }
      var E = {
        keyword: new codegen_1.Name("keyword"),
        schemaPath: new codegen_1.Name("schemaPath"),
        params: new codegen_1.Name("params"),
        propertyName: new codegen_1.Name("propertyName"),
        message: new codegen_1.Name("message"),
        schema: new codegen_1.Name("schema"),
        parentSchema: new codegen_1.Name("parentSchema")
      };
      function errorObjectCode(cxt, error, errorPaths) {
        var createErrors = cxt.it.createErrors;
        if (createErrors === false) return (0, codegen_1._)(_templateObject20$2 || (_templateObject20$2 = _taggedTemplateLiteral(["{}"])));
        return errorObject(cxt, error, errorPaths);
      }
      function errorObject(cxt, error) {
        var errorPaths = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var gen = cxt.gen,
          it = cxt.it;
        var keyValues = [errorInstancePath(it, errorPaths), errorSchemaPath(cxt, errorPaths)];
        extraErrorProps(cxt, error, keyValues);
        return gen.object.apply(gen, keyValues);
      }
      function errorInstancePath(_ref4, _ref5) {
        var errorPath = _ref4.errorPath;
        var instancePath = _ref5.instancePath;
        var instPath = instancePath ? (0, codegen_1.str)(_templateObject21$2 || (_templateObject21$2 = _taggedTemplateLiteral(["", "", ""])), errorPath, (0, util_1.getErrorPath)(instancePath, util_1.Type.Str)) : errorPath;
        return [names_1["default"].instancePath, (0, codegen_1.strConcat)(names_1["default"].instancePath, instPath)];
      }
      function errorSchemaPath(_ref6, _ref7) {
        var keyword = _ref6.keyword,
          errSchemaPath = _ref6.it.errSchemaPath;
        var schemaPath = _ref7.schemaPath,
          parentSchema = _ref7.parentSchema;
        var schPath = parentSchema ? errSchemaPath : (0, codegen_1.str)(_templateObject22$2 || (_templateObject22$2 = _taggedTemplateLiteral(["", "/", ""])), errSchemaPath, keyword);
        if (schemaPath) {
          schPath = (0, codegen_1.str)(_templateObject23$2 || (_templateObject23$2 = _taggedTemplateLiteral(["", "", ""])), schPath, (0, util_1.getErrorPath)(schemaPath, util_1.Type.Str));
        }
        return [E.schemaPath, schPath];
      }
      function extraErrorProps(cxt, _ref8, keyValues) {
        var params = _ref8.params,
          message = _ref8.message;
        var keyword = cxt.keyword,
          data = cxt.data,
          schemaValue = cxt.schemaValue,
          it = cxt.it;
        var opts = it.opts,
          propertyName = it.propertyName,
          topSchemaRef = it.topSchemaRef,
          schemaPath = it.schemaPath;
        keyValues.push([E.keyword, keyword], [E.params, typeof params == "function" ? params(cxt) : params || (0, codegen_1._)(_templateObject24$2 || (_templateObject24$2 = _taggedTemplateLiteral(["{}"])))]);
        if (opts.messages) {
          keyValues.push([E.message, typeof message == "function" ? message(cxt) : message]);
        }
        if (opts.verbose) {
          keyValues.push([E.schema, schemaValue], [E.parentSchema, (0, codegen_1._)(_templateObject25$2 || (_templateObject25$2 = _taggedTemplateLiteral(["", "", ""])), topSchemaRef, schemaPath)], [names_1["default"].data, data]);
        }
        if (propertyName) keyValues.push([E.propertyName, propertyName]);
      }
    })(errors);
    return errors;
  }

  var _templateObject$w;
  var hasRequiredBoolSchema;
  function requireBoolSchema() {
    if (hasRequiredBoolSchema) return boolSchema;
    hasRequiredBoolSchema = 1;
    Object.defineProperty(boolSchema, "__esModule", {
      value: true
    });
    boolSchema.boolOrEmptySchema = boolSchema.topBoolOrEmptySchema = void 0;
    var errors_1 = requireErrors();
    var codegen_1 = codegen;
    var names_1 = requireNames();
    var boolError = {
      message: "boolean schema is false"
    };
    function topBoolOrEmptySchema(it) {
      var gen = it.gen,
        schema = it.schema,
        validateName = it.validateName;
      if (schema === false) {
        falseSchemaError(it, false);
      } else if (_typeof(schema) == "object" && schema.$async === true) {
        gen["return"](names_1["default"].data);
      } else {
        gen.assign((0, codegen_1._)(_templateObject$w || (_templateObject$w = _taggedTemplateLiteral(["", ".errors"])), validateName), null);
        gen["return"](true);
      }
    }
    boolSchema.topBoolOrEmptySchema = topBoolOrEmptySchema;
    function boolOrEmptySchema(it, valid) {
      var gen = it.gen,
        schema = it.schema;
      if (schema === false) {
        gen["var"](valid, false); // TODO var
        falseSchemaError(it);
      } else {
        gen["var"](valid, true); // TODO var
      }
    }
    boolSchema.boolOrEmptySchema = boolOrEmptySchema;
    function falseSchemaError(it, overrideAllErrors) {
      var gen = it.gen,
        data = it.data;
      // TODO maybe some other interface should be used for non-keyword validation errors...
      var cxt = {
        gen: gen,
        keyword: "false schema",
        data: data,
        schema: false,
        schemaCode: false,
        schemaValue: false,
        params: {},
        it: it
      };
      (0, errors_1.reportError)(cxt, boolError, undefined, overrideAllErrors);
    }
    return boolSchema;
  }

  var dataType = {};

  var rules = {};

  Object.defineProperty(rules, "__esModule", {
    value: true
  });
  rules.getRules = rules.isJSONType = void 0;
  var _jsonTypes = ["string", "number", "integer", "boolean", "null", "object", "array"];
  var jsonTypes = new Set(_jsonTypes);
  function isJSONType(x) {
    return typeof x == "string" && jsonTypes.has(x);
  }
  rules.isJSONType = isJSONType;
  function getRules() {
    var groups = {
      number: {
        type: "number",
        rules: []
      },
      string: {
        type: "string",
        rules: []
      },
      array: {
        type: "array",
        rules: []
      },
      object: {
        type: "object",
        rules: []
      }
    };
    return {
      types: _objectSpread2(_objectSpread2({}, groups), {}, {
        integer: true,
        "boolean": true,
        "null": true
      }),
      rules: [{
        rules: []
      }, groups.number, groups.string, groups.array, groups.object],
      post: {
        rules: []
      },
      all: {},
      keywords: {}
    };
  }
  rules.getRules = getRules;

  var applicability = {};

  var hasRequiredApplicability;
  function requireApplicability() {
    if (hasRequiredApplicability) return applicability;
    hasRequiredApplicability = 1;
    Object.defineProperty(applicability, "__esModule", {
      value: true
    });
    applicability.shouldUseRule = applicability.shouldUseGroup = applicability.schemaHasRulesForType = void 0;
    function schemaHasRulesForType(_ref, type) {
      var schema = _ref.schema,
        self = _ref.self;
      var group = self.RULES.types[type];
      return group && group !== true && shouldUseGroup(schema, group);
    }
    applicability.schemaHasRulesForType = schemaHasRulesForType;
    function shouldUseGroup(schema, group) {
      return group.rules.some(function (rule) {
        return shouldUseRule(schema, rule);
      });
    }
    applicability.shouldUseGroup = shouldUseGroup;
    function shouldUseRule(schema, rule) {
      var _a;
      return schema[rule.keyword] !== undefined || ((_a = rule.definition["implements"]) === null || _a === void 0 ? void 0 : _a.some(function (kwd) {
        return schema[kwd] !== undefined;
      }));
    }
    applicability.shouldUseRule = shouldUseRule;
    return applicability;
  }

  var _templateObject$v, _templateObject2$t, _templateObject3$o, _templateObject4$h, _templateObject5$d, _templateObject6$8, _templateObject7$8, _templateObject8$8, _templateObject9$7, _templateObject10$6, _templateObject11$5, _templateObject12$5, _templateObject13$4, _templateObject14$4, _templateObject15$4, _templateObject16$3, _templateObject17$3, _templateObject18$1, _templateObject19$1, _templateObject20$1, _templateObject21$1, _templateObject22$1, _templateObject23$1, _templateObject24$1, _templateObject25$1, _templateObject26$1, _templateObject27$1, _templateObject28$1, _templateObject29$1, _templateObject30$1, _templateObject31$1, _templateObject32$1, _templateObject33$1;
  (function (exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.reportTypeError = exports.checkDataTypes = exports.checkDataType = exports.coerceAndCheckDataType = exports.getJSONTypes = exports.getSchemaTypes = exports.DataType = void 0;
    var rules_1 = rules;
    var applicability_1 = requireApplicability();
    var errors_1 = requireErrors();
    var codegen_1 = codegen;
    var util_1 = util;
    var DataType;
    (function (DataType) {
      DataType[DataType["Correct"] = 0] = "Correct";
      DataType[DataType["Wrong"] = 1] = "Wrong";
    })(DataType = exports.DataType || (exports.DataType = {}));
    function getSchemaTypes(schema) {
      var types = getJSONTypes(schema.type);
      var hasNull = types.includes("null");
      if (hasNull) {
        if (schema.nullable === false) throw new Error("type: null contradicts nullable: false");
      } else {
        if (!types.length && schema.nullable !== undefined) {
          throw new Error('"nullable" cannot be used without "type"');
        }
        if (schema.nullable === true) types.push("null");
      }
      return types;
    }
    exports.getSchemaTypes = getSchemaTypes;
    function getJSONTypes(ts) {
      var types = Array.isArray(ts) ? ts : ts ? [ts] : [];
      if (types.every(rules_1.isJSONType)) return types;
      throw new Error("type must be JSONType or JSONType[]: " + types.join(","));
    }
    exports.getJSONTypes = getJSONTypes;
    function coerceAndCheckDataType(it, types) {
      var gen = it.gen,
        data = it.data,
        opts = it.opts;
      var coerceTo = coerceToTypes(types, opts.coerceTypes);
      var checkTypes = types.length > 0 && !(coerceTo.length === 0 && types.length === 1 && (0, applicability_1.schemaHasRulesForType)(it, types[0]));
      if (checkTypes) {
        var wrongType = checkDataTypes(types, data, opts.strictNumbers, DataType.Wrong);
        gen["if"](wrongType, function () {
          if (coerceTo.length) coerceData(it, types, coerceTo);else reportTypeError(it);
        });
      }
      return checkTypes;
    }
    exports.coerceAndCheckDataType = coerceAndCheckDataType;
    var COERCIBLE = new Set(["string", "number", "integer", "boolean", "null"]);
    function coerceToTypes(types, coerceTypes) {
      return coerceTypes ? types.filter(function (t) {
        return COERCIBLE.has(t) || coerceTypes === "array" && t === "array";
      }) : [];
    }
    function coerceData(it, types, coerceTo) {
      var gen = it.gen,
        data = it.data,
        opts = it.opts;
      var dataType = gen["let"]("dataType", (0, codegen_1._)(_templateObject$v || (_templateObject$v = _taggedTemplateLiteral(["typeof ", ""])), data));
      var coerced = gen["let"]("coerced", (0, codegen_1._)(_templateObject2$t || (_templateObject2$t = _taggedTemplateLiteral(["undefined"]))));
      if (opts.coerceTypes === "array") {
        gen["if"]((0, codegen_1._)(_templateObject3$o || (_templateObject3$o = _taggedTemplateLiteral(["", " == 'object' && Array.isArray(", ") && ", ".length == 1"])), dataType, data, data), function () {
          return gen.assign(data, (0, codegen_1._)(_templateObject4$h || (_templateObject4$h = _taggedTemplateLiteral(["", "[0]"])), data)).assign(dataType, (0, codegen_1._)(_templateObject5$d || (_templateObject5$d = _taggedTemplateLiteral(["typeof ", ""])), data))["if"](checkDataTypes(types, data, opts.strictNumbers), function () {
            return gen.assign(coerced, data);
          });
        });
      }
      gen["if"]((0, codegen_1._)(_templateObject6$8 || (_templateObject6$8 = _taggedTemplateLiteral(["", " !== undefined"])), coerced));
      var _iterator = _createForOfIteratorHelper(coerceTo),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var t = _step.value;
          if (COERCIBLE.has(t) || t === "array" && opts.coerceTypes === "array") {
            coerceSpecificType(t);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      gen["else"]();
      reportTypeError(it);
      gen.endIf();
      gen["if"]((0, codegen_1._)(_templateObject7$8 || (_templateObject7$8 = _taggedTemplateLiteral(["", " !== undefined"])), coerced), function () {
        gen.assign(data, coerced);
        assignParentData(it, coerced);
      });
      function coerceSpecificType(t) {
        switch (t) {
          case "string":
            gen.elseIf((0, codegen_1._)(_templateObject8$8 || (_templateObject8$8 = _taggedTemplateLiteral(["", " == \"number\" || ", " == \"boolean\""])), dataType, dataType)).assign(coerced, (0, codegen_1._)(_templateObject9$7 || (_templateObject9$7 = _taggedTemplateLiteral(["\"\" + ", ""])), data)).elseIf((0, codegen_1._)(_templateObject10$6 || (_templateObject10$6 = _taggedTemplateLiteral(["", " === null"])), data)).assign(coerced, (0, codegen_1._)(_templateObject11$5 || (_templateObject11$5 = _taggedTemplateLiteral(["\"\""]))));
            return;
          case "number":
            gen.elseIf((0, codegen_1._)(_templateObject12$5 || (_templateObject12$5 = _taggedTemplateLiteral(["", " == \"boolean\" || ", " === null\n              || (", " == \"string\" && ", " && ", " == +", ")"])), dataType, data, dataType, data, data, data)).assign(coerced, (0, codegen_1._)(_templateObject13$4 || (_templateObject13$4 = _taggedTemplateLiteral(["+", ""])), data));
            return;
          case "integer":
            gen.elseIf((0, codegen_1._)(_templateObject14$4 || (_templateObject14$4 = _taggedTemplateLiteral(["", " === \"boolean\" || ", " === null\n              || (", " === \"string\" && ", " && ", " == +", " && !(", " % 1))"])), dataType, data, dataType, data, data, data, data)).assign(coerced, (0, codegen_1._)(_templateObject15$4 || (_templateObject15$4 = _taggedTemplateLiteral(["+", ""])), data));
            return;
          case "boolean":
            gen.elseIf((0, codegen_1._)(_templateObject16$3 || (_templateObject16$3 = _taggedTemplateLiteral(["", " === \"false\" || ", " === 0 || ", " === null"])), data, data, data)).assign(coerced, false).elseIf((0, codegen_1._)(_templateObject17$3 || (_templateObject17$3 = _taggedTemplateLiteral(["", " === \"true\" || ", " === 1"])), data, data)).assign(coerced, true);
            return;
          case "null":
            gen.elseIf((0, codegen_1._)(_templateObject18$1 || (_templateObject18$1 = _taggedTemplateLiteral(["", " === \"\" || ", " === 0 || ", " === false"])), data, data, data));
            gen.assign(coerced, null);
            return;
          case "array":
            gen.elseIf((0, codegen_1._)(_templateObject19$1 || (_templateObject19$1 = _taggedTemplateLiteral(["", " === \"string\" || ", " === \"number\"\n              || ", " === \"boolean\" || ", " === null"])), dataType, dataType, dataType, data)).assign(coerced, (0, codegen_1._)(_templateObject20$1 || (_templateObject20$1 = _taggedTemplateLiteral(["[", "]"])), data));
        }
      }
    }
    function assignParentData(_ref, expr) {
      var gen = _ref.gen,
        parentData = _ref.parentData,
        parentDataProperty = _ref.parentDataProperty;
      // TODO use gen.property
      gen["if"]((0, codegen_1._)(_templateObject21$1 || (_templateObject21$1 = _taggedTemplateLiteral(["", " !== undefined"])), parentData), function () {
        return gen.assign((0, codegen_1._)(_templateObject22$1 || (_templateObject22$1 = _taggedTemplateLiteral(["", "[", "]"])), parentData, parentDataProperty), expr);
      });
    }
    function checkDataType(dataType, data, strictNums) {
      var correct = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DataType.Correct;
      var EQ = correct === DataType.Correct ? codegen_1.operators.EQ : codegen_1.operators.NEQ;
      var cond;
      switch (dataType) {
        case "null":
          return (0, codegen_1._)(_templateObject23$1 || (_templateObject23$1 = _taggedTemplateLiteral(["", " ", " null"])), data, EQ);
        case "array":
          cond = (0, codegen_1._)(_templateObject24$1 || (_templateObject24$1 = _taggedTemplateLiteral(["Array.isArray(", ")"])), data);
          break;
        case "object":
          cond = (0, codegen_1._)(_templateObject25$1 || (_templateObject25$1 = _taggedTemplateLiteral(["", " && typeof ", " == \"object\" && !Array.isArray(", ")"])), data, data, data);
          break;
        case "integer":
          cond = numCond((0, codegen_1._)(_templateObject26$1 || (_templateObject26$1 = _taggedTemplateLiteral(["!(", " % 1) && !isNaN(", ")"])), data, data));
          break;
        case "number":
          cond = numCond();
          break;
        default:
          return (0, codegen_1._)(_templateObject27$1 || (_templateObject27$1 = _taggedTemplateLiteral(["typeof ", " ", " ", ""])), data, EQ, dataType);
      }
      return correct === DataType.Correct ? cond : (0, codegen_1.not)(cond);
      function numCond() {
        var _cond = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : codegen_1.nil;
        return (0, codegen_1.and)((0, codegen_1._)(_templateObject28$1 || (_templateObject28$1 = _taggedTemplateLiteral(["typeof ", " == \"number\""])), data), _cond, strictNums ? (0, codegen_1._)(_templateObject29$1 || (_templateObject29$1 = _taggedTemplateLiteral(["isFinite(", ")"])), data) : codegen_1.nil);
      }
    }
    exports.checkDataType = checkDataType;
    function checkDataTypes(dataTypes, data, strictNums, correct) {
      if (dataTypes.length === 1) {
        return checkDataType(dataTypes[0], data, strictNums, correct);
      }
      var cond;
      var types = (0, util_1.toHash)(dataTypes);
      if (types.array && types.object) {
        var notObj = (0, codegen_1._)(_templateObject30$1 || (_templateObject30$1 = _taggedTemplateLiteral(["typeof ", " != \"object\""])), data);
        cond = types["null"] ? notObj : (0, codegen_1._)(_templateObject31$1 || (_templateObject31$1 = _taggedTemplateLiteral(["!", " || ", ""])), data, notObj);
        delete types["null"];
        delete types.array;
        delete types.object;
      } else {
        cond = codegen_1.nil;
      }
      if (types.number) delete types.integer;
      for (var t in types) cond = (0, codegen_1.and)(cond, checkDataType(t, data, strictNums, correct));
      return cond;
    }
    exports.checkDataTypes = checkDataTypes;
    var typeError = {
      message: function message(_ref2) {
        var schema = _ref2.schema;
        return "must be ".concat(schema);
      },
      params: function params(_ref3) {
        var schema = _ref3.schema,
          schemaValue = _ref3.schemaValue;
        return typeof schema == "string" ? (0, codegen_1._)(_templateObject32$1 || (_templateObject32$1 = _taggedTemplateLiteral(["{type: ", "}"])), schema) : (0, codegen_1._)(_templateObject33$1 || (_templateObject33$1 = _taggedTemplateLiteral(["{type: ", "}"])), schemaValue);
      }
    };
    function reportTypeError(it) {
      var cxt = getTypeErrorContext(it);
      (0, errors_1.reportError)(cxt, typeError);
    }
    exports.reportTypeError = reportTypeError;
    function getTypeErrorContext(it) {
      var gen = it.gen,
        data = it.data,
        schema = it.schema;
      var schemaCode = (0, util_1.schemaRefOrVal)(it, schema, "type");
      return {
        gen: gen,
        keyword: "type",
        data: data,
        schema: schema.type,
        schemaCode: schemaCode,
        schemaValue: schemaCode,
        parentSchema: schema,
        params: {},
        it: it
      };
    }
  })(dataType);

  var defaults = {};

  var _templateObject$u, _templateObject2$s, _templateObject3$n, _templateObject4$g;
  var hasRequiredDefaults;
  function requireDefaults() {
    if (hasRequiredDefaults) return defaults;
    hasRequiredDefaults = 1;
    Object.defineProperty(defaults, "__esModule", {
      value: true
    });
    defaults.assignDefaults = void 0;
    var codegen_1 = codegen;
    var util_1 = util;
    function assignDefaults(it, ty) {
      var _it$schema = it.schema,
        properties = _it$schema.properties,
        items = _it$schema.items;
      if (ty === "object" && properties) {
        for (var key in properties) {
          assignDefault(it, key, properties[key]["default"]);
        }
      } else if (ty === "array" && Array.isArray(items)) {
        items.forEach(function (sch, i) {
          return assignDefault(it, i, sch["default"]);
        });
      }
    }
    defaults.assignDefaults = assignDefaults;
    function assignDefault(it, prop, defaultValue) {
      var gen = it.gen,
        compositeRule = it.compositeRule,
        data = it.data,
        opts = it.opts;
      if (defaultValue === undefined) return;
      var childData = (0, codegen_1._)(_templateObject$u || (_templateObject$u = _taggedTemplateLiteral(["", "", ""])), data, (0, codegen_1.getProperty)(prop));
      if (compositeRule) {
        (0, util_1.checkStrictMode)(it, "default is ignored for: ".concat(childData));
        return;
      }
      var condition = (0, codegen_1._)(_templateObject2$s || (_templateObject2$s = _taggedTemplateLiteral(["", " === undefined"])), childData);
      if (opts.useDefaults === "empty") {
        condition = (0, codegen_1._)(_templateObject3$n || (_templateObject3$n = _taggedTemplateLiteral(["", " || ", " === null || ", " === \"\""])), condition, childData, childData);
      }
      // `${childData} === undefined` +
      // (opts.useDefaults === "empty" ? ` || ${childData} === null || ${childData} === ""` : "")
      gen["if"](condition, (0, codegen_1._)(_templateObject4$g || (_templateObject4$g = _taggedTemplateLiteral(["", " = ", ""])), childData, (0, codegen_1.stringify)(defaultValue)));
    }
    return defaults;
  }

  var keyword = {};

  var code = {};

  var _templateObject$t, _templateObject2$r, _templateObject3$m, _templateObject4$f, _templateObject5$c, _templateObject6$7, _templateObject7$7, _templateObject8$7, _templateObject9$6, _templateObject10$5, _templateObject11$4, _templateObject12$4, _templateObject13$3, _templateObject14$3, _templateObject15$3;
  var hasRequiredCode;
  function requireCode() {
    if (hasRequiredCode) return code;
    hasRequiredCode = 1;
    Object.defineProperty(code, "__esModule", {
      value: true
    });
    code.validateUnion = code.validateArray = code.usePattern = code.callValidateCode = code.schemaProperties = code.allSchemaProperties = code.noPropertyInData = code.propertyInData = code.isOwnProperty = code.hasPropFunc = code.reportMissingProp = code.checkMissingProp = code.checkReportMissingProp = void 0;
    var codegen_1 = codegen;
    var util_1 = util;
    var names_1 = requireNames();
    var util_2 = util;
    function checkReportMissingProp(cxt, prop) {
      var gen = cxt.gen,
        data = cxt.data,
        it = cxt.it;
      gen["if"](noPropertyInData(gen, data, prop, it.opts.ownProperties), function () {
        cxt.setParams({
          missingProperty: (0, codegen_1._)(_templateObject$t || (_templateObject$t = _taggedTemplateLiteral(["", ""])), prop)
        }, true);
        cxt.error();
      });
    }
    code.checkReportMissingProp = checkReportMissingProp;
    function checkMissingProp(_ref, properties, missing) {
      var gen = _ref.gen,
        data = _ref.data,
        opts = _ref.it.opts;
      return (codegen_1.or).apply(void 0, _toConsumableArray(properties.map(function (prop) {
        return (0, codegen_1.and)(noPropertyInData(gen, data, prop, opts.ownProperties), (0, codegen_1._)(_templateObject2$r || (_templateObject2$r = _taggedTemplateLiteral(["", " = ", ""])), missing, prop));
      })));
    }
    code.checkMissingProp = checkMissingProp;
    function reportMissingProp(cxt, missing) {
      cxt.setParams({
        missingProperty: missing
      }, true);
      cxt.error();
    }
    code.reportMissingProp = reportMissingProp;
    function hasPropFunc(gen) {
      return gen.scopeValue("func", {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        ref: Object.prototype.hasOwnProperty,
        code: (0, codegen_1._)(_templateObject3$m || (_templateObject3$m = _taggedTemplateLiteral(["Object.prototype.hasOwnProperty"])))
      });
    }
    code.hasPropFunc = hasPropFunc;
    function isOwnProperty(gen, data, property) {
      return (0, codegen_1._)(_templateObject4$f || (_templateObject4$f = _taggedTemplateLiteral(["", ".call(", ", ", ")"])), hasPropFunc(gen), data, property);
    }
    code.isOwnProperty = isOwnProperty;
    function propertyInData(gen, data, property, ownProperties) {
      var cond = (0, codegen_1._)(_templateObject5$c || (_templateObject5$c = _taggedTemplateLiteral(["", "", " !== undefined"])), data, (0, codegen_1.getProperty)(property));
      return ownProperties ? (0, codegen_1._)(_templateObject6$7 || (_templateObject6$7 = _taggedTemplateLiteral(["", " && ", ""])), cond, isOwnProperty(gen, data, property)) : cond;
    }
    code.propertyInData = propertyInData;
    function noPropertyInData(gen, data, property, ownProperties) {
      var cond = (0, codegen_1._)(_templateObject7$7 || (_templateObject7$7 = _taggedTemplateLiteral(["", "", " === undefined"])), data, (0, codegen_1.getProperty)(property));
      return ownProperties ? (0, codegen_1.or)(cond, (0, codegen_1.not)(isOwnProperty(gen, data, property))) : cond;
    }
    code.noPropertyInData = noPropertyInData;
    function allSchemaProperties(schemaMap) {
      return schemaMap ? Object.keys(schemaMap).filter(function (p) {
        return p !== "__proto__";
      }) : [];
    }
    code.allSchemaProperties = allSchemaProperties;
    function schemaProperties(it, schemaMap) {
      return allSchemaProperties(schemaMap).filter(function (p) {
        return !(0, util_1.alwaysValidSchema)(it, schemaMap[p]);
      });
    }
    code.schemaProperties = schemaProperties;
    function callValidateCode(_ref2, func, context, passSchema) {
      var schemaCode = _ref2.schemaCode,
        data = _ref2.data,
        _ref2$it = _ref2.it,
        gen = _ref2$it.gen,
        topSchemaRef = _ref2$it.topSchemaRef,
        schemaPath = _ref2$it.schemaPath,
        errorPath = _ref2$it.errorPath,
        it = _ref2.it;
      var dataAndSchema = passSchema ? (0, codegen_1._)(_templateObject8$7 || (_templateObject8$7 = _taggedTemplateLiteral(["", ", ", ", ", "", ""])), schemaCode, data, topSchemaRef, schemaPath) : data;
      var valCxt = [[names_1["default"].instancePath, (0, codegen_1.strConcat)(names_1["default"].instancePath, errorPath)], [names_1["default"].parentData, it.parentData], [names_1["default"].parentDataProperty, it.parentDataProperty], [names_1["default"].rootData, names_1["default"].rootData]];
      if (it.opts.dynamicRef) valCxt.push([names_1["default"].dynamicAnchors, names_1["default"].dynamicAnchors]);
      var args = (0, codegen_1._)(_templateObject9$6 || (_templateObject9$6 = _taggedTemplateLiteral(["", ", ", ""])), dataAndSchema, gen.object.apply(gen, valCxt));
      return context !== codegen_1.nil ? (0, codegen_1._)(_templateObject10$5 || (_templateObject10$5 = _taggedTemplateLiteral(["", ".call(", ", ", ")"])), func, context, args) : (0, codegen_1._)(_templateObject11$4 || (_templateObject11$4 = _taggedTemplateLiteral(["", "(", ")"])), func, args);
    }
    code.callValidateCode = callValidateCode;
    var newRegExp = (0, codegen_1._)(_templateObject12$4 || (_templateObject12$4 = _taggedTemplateLiteral(["new RegExp"])));
    function usePattern(_ref3, pattern) {
      var gen = _ref3.gen,
        opts = _ref3.it.opts;
      var u = opts.unicodeRegExp ? "u" : "";
      var regExp = opts.code.regExp;
      var rx = regExp(pattern, u);
      return gen.scopeValue("pattern", {
        key: rx.toString(),
        ref: rx,
        code: (0, codegen_1._)(_templateObject13$3 || (_templateObject13$3 = _taggedTemplateLiteral(["", "(", ", ", ")"])), regExp.code === "new RegExp" ? newRegExp : (0, util_2.useFunc)(gen, regExp), pattern, u)
      });
    }
    code.usePattern = usePattern;
    function validateArray(cxt) {
      var gen = cxt.gen,
        data = cxt.data,
        keyword = cxt.keyword,
        it = cxt.it;
      var valid = gen.name("valid");
      if (it.allErrors) {
        var validArr = gen["let"]("valid", true);
        validateItems(function () {
          return gen.assign(validArr, false);
        });
        return validArr;
      }
      gen["var"](valid, true);
      validateItems(function () {
        return gen["break"]();
      });
      return valid;
      function validateItems(notValid) {
        var len = gen["const"]("len", (0, codegen_1._)(_templateObject14$3 || (_templateObject14$3 = _taggedTemplateLiteral(["", ".length"])), data));
        gen.forRange("i", 0, len, function (i) {
          cxt.subschema({
            keyword: keyword,
            dataProp: i,
            dataPropType: util_1.Type.Num
          }, valid);
          gen["if"]((0, codegen_1.not)(valid), notValid);
        });
      }
    }
    code.validateArray = validateArray;
    function validateUnion(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        keyword = cxt.keyword,
        it = cxt.it;
      /* istanbul ignore if */
      if (!Array.isArray(schema)) throw new Error("ajv implementation error");
      var alwaysValid = schema.some(function (sch) {
        return (0, util_1.alwaysValidSchema)(it, sch);
      });
      if (alwaysValid && !it.opts.unevaluated) return;
      var valid = gen["let"]("valid", false);
      var schValid = gen.name("_valid");
      gen.block(function () {
        return schema.forEach(function (_sch, i) {
          var schCxt = cxt.subschema({
            keyword: keyword,
            schemaProp: i,
            compositeRule: true
          }, schValid);
          gen.assign(valid, (0, codegen_1._)(_templateObject15$3 || (_templateObject15$3 = _taggedTemplateLiteral(["", " || ", ""])), valid, schValid));
          var merged = cxt.mergeValidEvaluated(schCxt, schValid);
          // can short-circuit if `unevaluatedProperties/Items` not supported (opts.unevaluated !== true)
          // or if all properties and items were evaluated (it.props === true && it.items === true)
          if (!merged) gen["if"]((0, codegen_1.not)(valid));
        });
      });
      cxt.result(valid, function () {
        return cxt.reset();
      }, function () {
        return cxt.error(true);
      });
    }
    code.validateUnion = validateUnion;
    return code;
  }

  var _templateObject$s, _templateObject2$q, _templateObject3$l, _templateObject4$e, _templateObject5$b, _templateObject6$6, _templateObject7$6, _templateObject8$6, _templateObject9$5, _templateObject10$4;
  var hasRequiredKeyword;
  function requireKeyword() {
    if (hasRequiredKeyword) return keyword;
    hasRequiredKeyword = 1;
    Object.defineProperty(keyword, "__esModule", {
      value: true
    });
    keyword.validateKeywordUsage = keyword.validSchemaType = keyword.funcKeywordCode = keyword.macroKeywordCode = void 0;
    var codegen_1 = codegen;
    var names_1 = requireNames();
    var code_1 = requireCode();
    var errors_1 = requireErrors();
    function macroKeywordCode(cxt, def) {
      var gen = cxt.gen,
        keyword = cxt.keyword,
        schema = cxt.schema,
        parentSchema = cxt.parentSchema,
        it = cxt.it;
      var macroSchema = def.macro.call(it.self, schema, parentSchema, it);
      var schemaRef = useKeyword(gen, keyword, macroSchema);
      if (it.opts.validateSchema !== false) it.self.validateSchema(macroSchema, true);
      var valid = gen.name("valid");
      cxt.subschema({
        schema: macroSchema,
        schemaPath: codegen_1.nil,
        errSchemaPath: "".concat(it.errSchemaPath, "/").concat(keyword),
        topSchemaRef: schemaRef,
        compositeRule: true
      }, valid);
      cxt.pass(valid, function () {
        return cxt.error(true);
      });
    }
    keyword.macroKeywordCode = macroKeywordCode;
    function funcKeywordCode(cxt, def) {
      var _a;
      var gen = cxt.gen,
        keyword = cxt.keyword,
        schema = cxt.schema,
        parentSchema = cxt.parentSchema,
        $data = cxt.$data,
        it = cxt.it;
      checkAsyncKeyword(it, def);
      var validate = !$data && def.compile ? def.compile.call(it.self, schema, parentSchema, it) : def.validate;
      var validateRef = useKeyword(gen, keyword, validate);
      var valid = gen["let"]("valid");
      cxt.block$data(valid, validateKeyword);
      cxt.ok((_a = def.valid) !== null && _a !== void 0 ? _a : valid);
      function validateKeyword() {
        if (def.errors === false) {
          assignValid();
          if (def.modifying) modifyData(cxt);
          reportErrs(function () {
            return cxt.error();
          });
        } else {
          var ruleErrs = def.async ? validateAsync() : validateSync();
          if (def.modifying) modifyData(cxt);
          reportErrs(function () {
            return addErrs(cxt, ruleErrs);
          });
        }
      }
      function validateAsync() {
        var ruleErrs = gen["let"]("ruleErrs", null);
        gen["try"](function () {
          return assignValid((0, codegen_1._)(_templateObject$s || (_templateObject$s = _taggedTemplateLiteral(["await "]))));
        }, function (e) {
          return gen.assign(valid, false)["if"]((0, codegen_1._)(_templateObject2$q || (_templateObject2$q = _taggedTemplateLiteral(["", " instanceof ", ""])), e, it.ValidationError), function () {
            return gen.assign(ruleErrs, (0, codegen_1._)(_templateObject3$l || (_templateObject3$l = _taggedTemplateLiteral(["", ".errors"])), e));
          }, function () {
            return gen["throw"](e);
          });
        });
        return ruleErrs;
      }
      function validateSync() {
        var validateErrs = (0, codegen_1._)(_templateObject4$e || (_templateObject4$e = _taggedTemplateLiteral(["", ".errors"])), validateRef);
        gen.assign(validateErrs, null);
        assignValid(codegen_1.nil);
        return validateErrs;
      }
      function assignValid() {
        var _await = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : def.async ? (0, codegen_1._)(_templateObject5$b || (_templateObject5$b = _taggedTemplateLiteral(["await "]))) : codegen_1.nil;
        var passCxt = it.opts.passContext ? names_1["default"]["this"] : names_1["default"].self;
        var passSchema = !("compile" in def && !$data || def.schema === false);
        gen.assign(valid, (0, codegen_1._)(_templateObject6$6 || (_templateObject6$6 = _taggedTemplateLiteral(["", "", ""])), _await, (0, code_1.callValidateCode)(cxt, validateRef, passCxt, passSchema)), def.modifying);
      }
      function reportErrs(errors) {
        var _a;
        gen["if"]((0, codegen_1.not)((_a = def.valid) !== null && _a !== void 0 ? _a : valid), errors);
      }
    }
    keyword.funcKeywordCode = funcKeywordCode;
    function modifyData(cxt) {
      var gen = cxt.gen,
        data = cxt.data,
        it = cxt.it;
      gen["if"](it.parentData, function () {
        return gen.assign(data, (0, codegen_1._)(_templateObject7$6 || (_templateObject7$6 = _taggedTemplateLiteral(["", "[", "]"])), it.parentData, it.parentDataProperty));
      });
    }
    function addErrs(cxt, errs) {
      var gen = cxt.gen;
      gen["if"]((0, codegen_1._)(_templateObject8$6 || (_templateObject8$6 = _taggedTemplateLiteral(["Array.isArray(", ")"])), errs), function () {
        gen.assign(names_1["default"].vErrors, (0, codegen_1._)(_templateObject9$5 || (_templateObject9$5 = _taggedTemplateLiteral(["", " === null ? ", " : ", ".concat(", ")"])), names_1["default"].vErrors, errs, names_1["default"].vErrors, errs)).assign(names_1["default"].errors, (0, codegen_1._)(_templateObject10$4 || (_templateObject10$4 = _taggedTemplateLiteral(["", ".length"])), names_1["default"].vErrors));
        (0, errors_1.extendErrors)(cxt);
      }, function () {
        return cxt.error();
      });
    }
    function checkAsyncKeyword(_ref, def) {
      var schemaEnv = _ref.schemaEnv;
      if (def.async && !schemaEnv.$async) throw new Error("async keyword in sync schema");
    }
    function useKeyword(gen, keyword, result) {
      if (result === undefined) throw new Error("keyword \"".concat(keyword, "\" failed to compile"));
      return gen.scopeValue("keyword", typeof result == "function" ? {
        ref: result
      } : {
        ref: result,
        code: (0, codegen_1.stringify)(result)
      });
    }
    function validSchemaType(schema, schemaType) {
      var allowUndefined = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      // TODO add tests
      return !schemaType.length || schemaType.some(function (st) {
        return st === "array" ? Array.isArray(schema) : st === "object" ? schema && _typeof(schema) == "object" && !Array.isArray(schema) : _typeof(schema) == st || allowUndefined && typeof schema == "undefined";
      });
    }
    keyword.validSchemaType = validSchemaType;
    function validateKeywordUsage(_ref2, def, keyword) {
      var schema = _ref2.schema,
        opts = _ref2.opts,
        self = _ref2.self,
        errSchemaPath = _ref2.errSchemaPath;
      /* istanbul ignore if */
      if (Array.isArray(def.keyword) ? !def.keyword.includes(keyword) : def.keyword !== keyword) {
        throw new Error("ajv implementation error");
      }
      var deps = def.dependencies;
      if (deps === null || deps === void 0 ? void 0 : deps.some(function (kwd) {
        return !Object.prototype.hasOwnProperty.call(schema, kwd);
      })) {
        throw new Error("parent schema must have dependencies of ".concat(keyword, ": ").concat(deps.join(",")));
      }
      if (def.validateSchema) {
        var valid = def.validateSchema(schema[keyword]);
        if (!valid) {
          var msg = "keyword \"".concat(keyword, "\" value is invalid at path \"").concat(errSchemaPath, "\": ") + self.errorsText(def.validateSchema.errors);
          if (opts.validateSchema === "log") self.logger.error(msg);else throw new Error(msg);
        }
      }
    }
    keyword.validateKeywordUsage = validateKeywordUsage;
    return keyword;
  }

  var subschema = {};

  var _templateObject$r, _templateObject2$p, _templateObject3$k, _templateObject4$d, _templateObject5$a;
  var hasRequiredSubschema;
  function requireSubschema() {
    if (hasRequiredSubschema) return subschema;
    hasRequiredSubschema = 1;
    Object.defineProperty(subschema, "__esModule", {
      value: true
    });
    subschema.extendSubschemaMode = subschema.extendSubschemaData = subschema.getSubschema = void 0;
    var codegen_1 = codegen;
    var util_1 = util;
    function getSubschema(it, _ref) {
      var keyword = _ref.keyword,
        schemaProp = _ref.schemaProp,
        schema = _ref.schema,
        schemaPath = _ref.schemaPath,
        errSchemaPath = _ref.errSchemaPath,
        topSchemaRef = _ref.topSchemaRef;
      if (keyword !== undefined && schema !== undefined) {
        throw new Error('both "keyword" and "schema" passed, only one allowed');
      }
      if (keyword !== undefined) {
        var sch = it.schema[keyword];
        return schemaProp === undefined ? {
          schema: sch,
          schemaPath: (0, codegen_1._)(_templateObject$r || (_templateObject$r = _taggedTemplateLiteral(["", "", ""])), it.schemaPath, (0, codegen_1.getProperty)(keyword)),
          errSchemaPath: "".concat(it.errSchemaPath, "/").concat(keyword)
        } : {
          schema: sch[schemaProp],
          schemaPath: (0, codegen_1._)(_templateObject2$p || (_templateObject2$p = _taggedTemplateLiteral(["", "", "", ""])), it.schemaPath, (0, codegen_1.getProperty)(keyword), (0, codegen_1.getProperty)(schemaProp)),
          errSchemaPath: "".concat(it.errSchemaPath, "/").concat(keyword, "/").concat((0, util_1.escapeFragment)(schemaProp))
        };
      }
      if (schema !== undefined) {
        if (schemaPath === undefined || errSchemaPath === undefined || topSchemaRef === undefined) {
          throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
        }
        return {
          schema: schema,
          schemaPath: schemaPath,
          topSchemaRef: topSchemaRef,
          errSchemaPath: errSchemaPath
        };
      }
      throw new Error('either "keyword" or "schema" must be passed');
    }
    subschema.getSubschema = getSubschema;
    function extendSubschemaData(subschema, it, _ref2) {
      var dataProp = _ref2.dataProp,
        dpType = _ref2.dataPropType,
        data = _ref2.data,
        dataTypes = _ref2.dataTypes,
        propertyName = _ref2.propertyName;
      if (data !== undefined && dataProp !== undefined) {
        throw new Error('both "data" and "dataProp" passed, only one allowed');
      }
      var gen = it.gen;
      if (dataProp !== undefined) {
        var errorPath = it.errorPath,
          dataPathArr = it.dataPathArr,
          opts = it.opts;
        var nextData = gen["let"]("data", (0, codegen_1._)(_templateObject3$k || (_templateObject3$k = _taggedTemplateLiteral(["", "", ""])), it.data, (0, codegen_1.getProperty)(dataProp)), true);
        dataContextProps(nextData);
        subschema.errorPath = (0, codegen_1.str)(_templateObject4$d || (_templateObject4$d = _taggedTemplateLiteral(["", "", ""])), errorPath, (0, util_1.getErrorPath)(dataProp, dpType, opts.jsPropertySyntax));
        subschema.parentDataProperty = (0, codegen_1._)(_templateObject5$a || (_templateObject5$a = _taggedTemplateLiteral(["", ""])), dataProp);
        subschema.dataPathArr = [].concat(_toConsumableArray(dataPathArr), [subschema.parentDataProperty]);
      }
      if (data !== undefined) {
        var _nextData2 = data instanceof codegen_1.Name ? data : gen["let"]("data", data, true); // replaceable if used once?
        dataContextProps(_nextData2);
        if (propertyName !== undefined) subschema.propertyName = propertyName;
        // TODO something is possibly wrong here with not changing parentDataProperty and not appending dataPathArr
      }
      if (dataTypes) subschema.dataTypes = dataTypes;
      function dataContextProps(_nextData) {
        subschema.data = _nextData;
        subschema.dataLevel = it.dataLevel + 1;
        subschema.dataTypes = [];
        it.definedProperties = new Set();
        subschema.parentData = it.data;
        subschema.dataNames = [].concat(_toConsumableArray(it.dataNames), [_nextData]);
      }
    }
    subschema.extendSubschemaData = extendSubschemaData;
    function extendSubschemaMode(subschema, _ref3) {
      var jtdDiscriminator = _ref3.jtdDiscriminator,
        jtdMetadata = _ref3.jtdMetadata,
        compositeRule = _ref3.compositeRule,
        createErrors = _ref3.createErrors,
        allErrors = _ref3.allErrors;
      if (compositeRule !== undefined) subschema.compositeRule = compositeRule;
      if (createErrors !== undefined) subschema.createErrors = createErrors;
      if (allErrors !== undefined) subschema.allErrors = allErrors;
      subschema.jtdDiscriminator = jtdDiscriminator; // not inherited
      subschema.jtdMetadata = jtdMetadata; // not inherited
    }
    subschema.extendSubschemaMode = extendSubschemaMode;
    return subschema;
  }

  var resolve$1 = {};

  // do not edit .js files directly - edit src/index.jst

  var fastDeepEqual = function equal(a, b) {
    if (a === b) return true;
    if (a && b && _typeof(a) == 'object' && _typeof(b) == 'object') {
      if (a.constructor !== b.constructor) return false;
      var length, i, keys;
      if (Array.isArray(a)) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;
        return true;
      }
      if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
      if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
      if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
      keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length) return false;
      for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      for (i = length; i-- !== 0;) {
        var key = keys[i];
        if (!equal(a[key], b[key])) return false;
      }
      return true;
    }

    // true if both NaN, false otherwise
    return a !== a && b !== b;
  };

  var jsonSchemaTraverse = {exports: {}};

  var traverse$1 = jsonSchemaTraverse.exports = function (schema, opts, cb) {
    // Legacy support for v0.3.1 and earlier.
    if (typeof opts == 'function') {
      cb = opts;
      opts = {};
    }
    cb = opts.cb || cb;
    var pre = typeof cb == 'function' ? cb : cb.pre || function () {};
    var post = cb.post || function () {};
    _traverse(opts, pre, post, schema, '', schema);
  };
  traverse$1.keywords = {
    additionalItems: true,
    items: true,
    contains: true,
    additionalProperties: true,
    propertyNames: true,
    not: true,
    "if": true,
    then: true,
    "else": true
  };
  traverse$1.arrayKeywords = {
    items: true,
    allOf: true,
    anyOf: true,
    oneOf: true
  };
  traverse$1.propsKeywords = {
    $defs: true,
    definitions: true,
    properties: true,
    patternProperties: true,
    dependencies: true
  };
  traverse$1.skipKeywords = {
    "default": true,
    "enum": true,
    "const": true,
    required: true,
    maximum: true,
    minimum: true,
    exclusiveMaximum: true,
    exclusiveMinimum: true,
    multipleOf: true,
    maxLength: true,
    minLength: true,
    pattern: true,
    format: true,
    maxItems: true,
    minItems: true,
    uniqueItems: true,
    maxProperties: true,
    minProperties: true
  };
  function _traverse(opts, pre, post, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
    if (schema && _typeof(schema) == 'object' && !Array.isArray(schema)) {
      pre(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
      for (var key in schema) {
        var sch = schema[key];
        if (Array.isArray(sch)) {
          if (key in traverse$1.arrayKeywords) {
            for (var i = 0; i < sch.length; i++) _traverse(opts, pre, post, sch[i], jsonPtr + '/' + key + '/' + i, rootSchema, jsonPtr, key, schema, i);
          }
        } else if (key in traverse$1.propsKeywords) {
          if (sch && _typeof(sch) == 'object') {
            for (var prop in sch) _traverse(opts, pre, post, sch[prop], jsonPtr + '/' + key + '/' + escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);
          }
        } else if (key in traverse$1.keywords || opts.allKeys && !(key in traverse$1.skipKeywords)) {
          _traverse(opts, pre, post, sch, jsonPtr + '/' + key, rootSchema, jsonPtr, key, schema);
        }
      }
      post(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
    }
  }
  function escapeJsonPtr(str) {
    return str.replace(/~/g, '~0').replace(/\//g, '~1');
  }
  var jsonSchemaTraverseExports = jsonSchemaTraverse.exports;

  Object.defineProperty(resolve$1, "__esModule", {
    value: true
  });
  resolve$1.getSchemaRefs = resolve$1.resolveUrl = resolve$1.normalizeId = resolve$1._getFullPath = resolve$1.getFullPath = resolve$1.inlineRef = void 0;
  var util_1$l = util;
  var equal$2 = fastDeepEqual;
  var traverse = jsonSchemaTraverseExports;
  // TODO refactor to use keyword definitions
  var SIMPLE_INLINED = new Set(["type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum", "const"]);
  function inlineRef(schema) {
    var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (typeof schema == "boolean") return true;
    if (limit === true) return !hasRef(schema);
    if (!limit) return false;
    return countKeys(schema) <= limit;
  }
  resolve$1.inlineRef = inlineRef;
  var REF_KEYWORDS = new Set(["$ref", "$recursiveRef", "$recursiveAnchor", "$dynamicRef", "$dynamicAnchor"]);
  function hasRef(schema) {
    for (var key in schema) {
      if (REF_KEYWORDS.has(key)) return true;
      var sch = schema[key];
      if (Array.isArray(sch) && sch.some(hasRef)) return true;
      if (_typeof(sch) == "object" && hasRef(sch)) return true;
    }
    return false;
  }
  function countKeys(schema) {
    var count = 0;
    for (var key in schema) {
      if (key === "$ref") return Infinity;
      count++;
      if (SIMPLE_INLINED.has(key)) continue;
      if (_typeof(schema[key]) == "object") {
        (0, util_1$l.eachItem)(schema[key], function (sch) {
          return count += countKeys(sch);
        });
      }
      if (count === Infinity) return Infinity;
    }
    return count;
  }
  function getFullPath(resolver) {
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var normalize = arguments.length > 2 ? arguments[2] : undefined;
    if (normalize !== false) id = normalizeId(id);
    var p = resolver.parse(id);
    return _getFullPath(resolver, p);
  }
  resolve$1.getFullPath = getFullPath;
  function _getFullPath(resolver, p) {
    var serialized = resolver.serialize(p);
    return serialized.split("#")[0] + "#";
  }
  resolve$1._getFullPath = _getFullPath;
  var TRAILING_SLASH_HASH = /#\/?$/;
  function normalizeId(id) {
    return id ? id.replace(TRAILING_SLASH_HASH, "") : "";
  }
  resolve$1.normalizeId = normalizeId;
  function resolveUrl(resolver, baseId, id) {
    id = normalizeId(id);
    return resolver.resolve(baseId, id);
  }
  resolve$1.resolveUrl = resolveUrl;
  var ANCHOR = /^[a-z_][-a-z0-9._]*$/i;
  function getSchemaRefs(schema, baseId) {
    var _this = this;
    if (typeof schema == "boolean") return {};
    var _this$opts = this.opts,
      schemaId = _this$opts.schemaId,
      uriResolver = _this$opts.uriResolver;
    var schId = normalizeId(schema[schemaId] || baseId);
    var baseIds = {
      "": schId
    };
    var pathPrefix = getFullPath(uriResolver, schId, false);
    var localRefs = {};
    var schemaRefs = new Set();
    traverse(schema, {
      allKeys: true
    }, function (sch, jsonPtr, _, parentJsonPtr) {
      if (parentJsonPtr === undefined) return;
      var fullPath = pathPrefix + jsonPtr;
      var baseId = baseIds[parentJsonPtr];
      if (typeof sch[schemaId] == "string") baseId = addRef.call(_this, sch[schemaId]);
      addAnchor.call(_this, sch.$anchor);
      addAnchor.call(_this, sch.$dynamicAnchor);
      baseIds[jsonPtr] = baseId;
      function addRef(ref) {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        var _resolve = this.opts.uriResolver.resolve;
        ref = normalizeId(baseId ? _resolve(baseId, ref) : ref);
        if (schemaRefs.has(ref)) throw ambiguos(ref);
        schemaRefs.add(ref);
        var schOrRef = this.refs[ref];
        if (typeof schOrRef == "string") schOrRef = this.refs[schOrRef];
        if (_typeof(schOrRef) == "object") {
          checkAmbiguosRef(sch, schOrRef.schema, ref);
        } else if (ref !== normalizeId(fullPath)) {
          if (ref[0] === "#") {
            checkAmbiguosRef(sch, localRefs[ref], ref);
            localRefs[ref] = sch;
          } else {
            this.refs[ref] = fullPath;
          }
        }
        return ref;
      }
      function addAnchor(anchor) {
        if (typeof anchor == "string") {
          if (!ANCHOR.test(anchor)) throw new Error("invalid anchor \"".concat(anchor, "\""));
          addRef.call(this, "#".concat(anchor));
        }
      }
    });
    return localRefs;
    function checkAmbiguosRef(sch1, sch2, ref) {
      if (sch2 !== undefined && !equal$2(sch1, sch2)) throw ambiguos(ref);
    }
    function ambiguos(ref) {
      return new Error("reference \"".concat(ref, "\" resolves to more than one schema"));
    }
  }
  resolve$1.getSchemaRefs = getSchemaRefs;

  var _templateObject$q, _templateObject2$o, _templateObject3$j, _templateObject4$c, _templateObject5$9, _templateObject6$5, _templateObject7$5, _templateObject8$5, _templateObject9$4, _templateObject10$3, _templateObject11$3, _templateObject12$3, _templateObject13$2, _templateObject14$2, _templateObject15$2, _templateObject16$2, _templateObject17$2, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39;
  var hasRequiredValidate;
  function requireValidate() {
    if (hasRequiredValidate) return validate;
    hasRequiredValidate = 1;
    Object.defineProperty(validate, "__esModule", {
      value: true
    });
    validate.getData = validate.KeywordCxt = validate.validateFunctionCode = void 0;
    var boolSchema_1 = requireBoolSchema();
    var dataType_1 = dataType;
    var applicability_1 = requireApplicability();
    var dataType_2 = dataType;
    var defaults_1 = requireDefaults();
    var keyword_1 = requireKeyword();
    var subschema_1 = requireSubschema();
    var codegen_1 = codegen;
    var names_1 = requireNames();
    var resolve_1 = resolve$1;
    var util_1 = util;
    var errors_1 = requireErrors();
    // schema compilation - generates validation function, subschemaCode (below) is used for subschemas
    function validateFunctionCode(it) {
      if (isSchemaObj(it)) {
        checkKeywords(it);
        if (schemaCxtHasRules(it)) {
          topSchemaObjCode(it);
          return;
        }
      }
      validateFunction(it, function () {
        return (0, boolSchema_1.topBoolOrEmptySchema)(it);
      });
    }
    validate.validateFunctionCode = validateFunctionCode;
    function validateFunction(_ref, body) {
      var gen = _ref.gen,
        validateName = _ref.validateName,
        schema = _ref.schema,
        schemaEnv = _ref.schemaEnv,
        opts = _ref.opts;
      if (opts.code.es5) {
        gen.func(validateName, (0, codegen_1._)(_templateObject$q || (_templateObject$q = _taggedTemplateLiteral(["", ", ", ""])), names_1["default"].data, names_1["default"].valCxt), schemaEnv.$async, function () {
          gen.code((0, codegen_1._)(_templateObject2$o || (_templateObject2$o = _taggedTemplateLiteral(["\"use strict\"; ", ""])), funcSourceUrl(schema, opts)));
          destructureValCxtES5(gen, opts);
          gen.code(body);
        });
      } else {
        gen.func(validateName, (0, codegen_1._)(_templateObject3$j || (_templateObject3$j = _taggedTemplateLiteral(["", ", ", ""])), names_1["default"].data, destructureValCxt(opts)), schemaEnv.$async, function () {
          return gen.code(funcSourceUrl(schema, opts)).code(body);
        });
      }
    }
    function destructureValCxt(opts) {
      return (0, codegen_1._)(_templateObject4$c || (_templateObject4$c = _taggedTemplateLiteral(["{", "=\"\", ", ", ", ", ", "=", "", "}={}"])), names_1["default"].instancePath, names_1["default"].parentData, names_1["default"].parentDataProperty, names_1["default"].rootData, names_1["default"].data, opts.dynamicRef ? (0, codegen_1._)(_templateObject5$9 || (_templateObject5$9 = _taggedTemplateLiteral([", ", "={}"])), names_1["default"].dynamicAnchors) : codegen_1.nil);
    }
    function destructureValCxtES5(gen, opts) {
      gen["if"](names_1["default"].valCxt, function () {
        gen["var"](names_1["default"].instancePath, (0, codegen_1._)(_templateObject6$5 || (_templateObject6$5 = _taggedTemplateLiteral(["", ".", ""])), names_1["default"].valCxt, names_1["default"].instancePath));
        gen["var"](names_1["default"].parentData, (0, codegen_1._)(_templateObject7$5 || (_templateObject7$5 = _taggedTemplateLiteral(["", ".", ""])), names_1["default"].valCxt, names_1["default"].parentData));
        gen["var"](names_1["default"].parentDataProperty, (0, codegen_1._)(_templateObject8$5 || (_templateObject8$5 = _taggedTemplateLiteral(["", ".", ""])), names_1["default"].valCxt, names_1["default"].parentDataProperty));
        gen["var"](names_1["default"].rootData, (0, codegen_1._)(_templateObject9$4 || (_templateObject9$4 = _taggedTemplateLiteral(["", ".", ""])), names_1["default"].valCxt, names_1["default"].rootData));
        if (opts.dynamicRef) gen["var"](names_1["default"].dynamicAnchors, (0, codegen_1._)(_templateObject10$3 || (_templateObject10$3 = _taggedTemplateLiteral(["", ".", ""])), names_1["default"].valCxt, names_1["default"].dynamicAnchors));
      }, function () {
        gen["var"](names_1["default"].instancePath, (0, codegen_1._)(_templateObject11$3 || (_templateObject11$3 = _taggedTemplateLiteral(["\"\""]))));
        gen["var"](names_1["default"].parentData, (0, codegen_1._)(_templateObject12$3 || (_templateObject12$3 = _taggedTemplateLiteral(["undefined"]))));
        gen["var"](names_1["default"].parentDataProperty, (0, codegen_1._)(_templateObject13$2 || (_templateObject13$2 = _taggedTemplateLiteral(["undefined"]))));
        gen["var"](names_1["default"].rootData, names_1["default"].data);
        if (opts.dynamicRef) gen["var"](names_1["default"].dynamicAnchors, (0, codegen_1._)(_templateObject14$2 || (_templateObject14$2 = _taggedTemplateLiteral(["{}"]))));
      });
    }
    function topSchemaObjCode(it) {
      var schema = it.schema,
        opts = it.opts,
        gen = it.gen;
      validateFunction(it, function () {
        if (opts.$comment && schema.$comment) commentKeyword(it);
        checkNoDefault(it);
        gen["let"](names_1["default"].vErrors, null);
        gen["let"](names_1["default"].errors, 0);
        if (opts.unevaluated) resetEvaluated(it);
        typeAndKeywords(it);
        returnResults(it);
      });
      return;
    }
    function resetEvaluated(it) {
      // TODO maybe some hook to execute it in the end to check whether props/items are Name, as in assignEvaluated
      var gen = it.gen,
        validateName = it.validateName;
      it.evaluated = gen["const"]("evaluated", (0, codegen_1._)(_templateObject15$2 || (_templateObject15$2 = _taggedTemplateLiteral(["", ".evaluated"])), validateName));
      gen["if"]((0, codegen_1._)(_templateObject16$2 || (_templateObject16$2 = _taggedTemplateLiteral(["", ".dynamicProps"])), it.evaluated), function () {
        return gen.assign((0, codegen_1._)(_templateObject17$2 || (_templateObject17$2 = _taggedTemplateLiteral(["", ".props"])), it.evaluated), (0, codegen_1._)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["undefined"]))));
      });
      gen["if"]((0, codegen_1._)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["", ".dynamicItems"])), it.evaluated), function () {
        return gen.assign((0, codegen_1._)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["", ".items"])), it.evaluated), (0, codegen_1._)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["undefined"]))));
      });
    }
    function funcSourceUrl(schema, opts) {
      var schId = _typeof(schema) == "object" && schema[opts.schemaId];
      return schId && (opts.code.source || opts.code.process) ? (0, codegen_1._)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["/*# sourceURL=", " */"])), schId) : codegen_1.nil;
    }
    // schema compilation - this function is used recursively to generate code for sub-schemas
    function subschemaCode(it, valid) {
      if (isSchemaObj(it)) {
        checkKeywords(it);
        if (schemaCxtHasRules(it)) {
          subSchemaObjCode(it, valid);
          return;
        }
      }
      (0, boolSchema_1.boolOrEmptySchema)(it, valid);
    }
    function schemaCxtHasRules(_ref2) {
      var schema = _ref2.schema,
        self = _ref2.self;
      if (typeof schema == "boolean") return !schema;
      for (var key in schema) if (self.RULES.all[key]) return true;
      return false;
    }
    function isSchemaObj(it) {
      return typeof it.schema != "boolean";
    }
    function subSchemaObjCode(it, valid) {
      var schema = it.schema,
        gen = it.gen,
        opts = it.opts;
      if (opts.$comment && schema.$comment) commentKeyword(it);
      updateContext(it);
      checkAsyncSchema(it);
      var errsCount = gen["const"]("_errs", names_1["default"].errors);
      typeAndKeywords(it, errsCount);
      // TODO var
      gen["var"](valid, (0, codegen_1._)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["", " === ", ""])), errsCount, names_1["default"].errors));
    }
    function checkKeywords(it) {
      (0, util_1.checkUnknownRules)(it);
      checkRefsAndKeywords(it);
    }
    function typeAndKeywords(it, errsCount) {
      if (it.opts.jtd) return schemaKeywords(it, [], false, errsCount);
      var types = (0, dataType_1.getSchemaTypes)(it.schema);
      var checkedTypes = (0, dataType_1.coerceAndCheckDataType)(it, types);
      schemaKeywords(it, types, !checkedTypes, errsCount);
    }
    function checkRefsAndKeywords(it) {
      var schema = it.schema,
        errSchemaPath = it.errSchemaPath,
        opts = it.opts,
        self = it.self;
      if (schema.$ref && opts.ignoreKeywordsWithRef && (0, util_1.schemaHasRulesButRef)(schema, self.RULES)) {
        self.logger.warn("$ref: keywords ignored in schema at path \"".concat(errSchemaPath, "\""));
      }
    }
    function checkNoDefault(it) {
      var schema = it.schema,
        opts = it.opts;
      if (schema["default"] !== undefined && opts.useDefaults && opts.strictSchema) {
        (0, util_1.checkStrictMode)(it, "default is ignored in the schema root");
      }
    }
    function updateContext(it) {
      var schId = it.schema[it.opts.schemaId];
      if (schId) it.baseId = (0, resolve_1.resolveUrl)(it.opts.uriResolver, it.baseId, schId);
    }
    function checkAsyncSchema(it) {
      if (it.schema.$async && !it.schemaEnv.$async) throw new Error("async schema in sync schema");
    }
    function commentKeyword(_ref3) {
      var gen = _ref3.gen,
        schemaEnv = _ref3.schemaEnv,
        schema = _ref3.schema,
        errSchemaPath = _ref3.errSchemaPath,
        opts = _ref3.opts;
      var msg = schema.$comment;
      if (opts.$comment === true) {
        gen.code((0, codegen_1._)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["", ".logger.log(", ")"])), names_1["default"].self, msg));
      } else if (typeof opts.$comment == "function") {
        var schemaPath = (0, codegen_1.str)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["", "/$comment"])), errSchemaPath);
        var rootName = gen.scopeValue("root", {
          ref: schemaEnv.root
        });
        gen.code((0, codegen_1._)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["", ".opts.$comment(", ", ", ", ", ".schema)"])), names_1["default"].self, msg, schemaPath, rootName));
      }
    }
    function returnResults(it) {
      var gen = it.gen,
        schemaEnv = it.schemaEnv,
        validateName = it.validateName,
        ValidationError = it.ValidationError,
        opts = it.opts;
      if (schemaEnv.$async) {
        // TODO assign unevaluated
        gen["if"]((0, codegen_1._)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["", " === 0"])), names_1["default"].errors), function () {
          return gen["return"](names_1["default"].data);
        }, function () {
          return gen["throw"]((0, codegen_1._)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["new ", "(", ")"])), ValidationError, names_1["default"].vErrors));
        });
      } else {
        gen.assign((0, codegen_1._)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["", ".errors"])), validateName), names_1["default"].vErrors);
        if (opts.unevaluated) assignEvaluated(it);
        gen["return"]((0, codegen_1._)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["", " === 0"])), names_1["default"].errors));
      }
    }
    function assignEvaluated(_ref4) {
      var gen = _ref4.gen,
        evaluated = _ref4.evaluated,
        props = _ref4.props,
        items = _ref4.items;
      if (props instanceof codegen_1.Name) gen.assign((0, codegen_1._)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["", ".props"])), evaluated), props);
      if (items instanceof codegen_1.Name) gen.assign((0, codegen_1._)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["", ".items"])), evaluated), items);
    }
    function schemaKeywords(it, types, typeErrors, errsCount) {
      var gen = it.gen,
        schema = it.schema,
        data = it.data,
        allErrors = it.allErrors,
        opts = it.opts,
        self = it.self;
      var RULES = self.RULES;
      if (schema.$ref && (opts.ignoreKeywordsWithRef || !(0, util_1.schemaHasRulesButRef)(schema, RULES))) {
        gen.block(function () {
          return keywordCode(it, "$ref", RULES.all.$ref.definition);
        }); // TODO typecast
        return;
      }
      if (!opts.jtd) checkStrictTypes(it, types);
      gen.block(function () {
        var _iterator = _createForOfIteratorHelper(RULES.rules),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var group = _step.value;
            groupKeywords(group);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        groupKeywords(RULES.post);
      });
      function groupKeywords(group) {
        if (!(0, applicability_1.shouldUseGroup)(schema, group)) return;
        if (group.type) {
          gen["if"]((0, dataType_2.checkDataType)(group.type, data, opts.strictNumbers));
          iterateKeywords(it, group);
          if (types.length === 1 && types[0] === group.type && typeErrors) {
            gen["else"]();
            (0, dataType_2.reportTypeError)(it);
          }
          gen.endIf();
        } else {
          iterateKeywords(it, group);
        }
        // TODO make it "ok" call?
        if (!allErrors) gen["if"]((0, codegen_1._)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["", " === ", ""])), names_1["default"].errors, errsCount || 0));
      }
    }
    function iterateKeywords(it, group) {
      var gen = it.gen,
        schema = it.schema,
        useDefaults = it.opts.useDefaults;
      if (useDefaults) (0, defaults_1.assignDefaults)(it, group.type);
      gen.block(function () {
        var _iterator2 = _createForOfIteratorHelper(group.rules),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var rule = _step2.value;
            if ((0, applicability_1.shouldUseRule)(schema, rule)) {
              keywordCode(it, rule.keyword, rule.definition, group.type);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      });
    }
    function checkStrictTypes(it, types) {
      if (it.schemaEnv.meta || !it.opts.strictTypes) return;
      checkContextTypes(it, types);
      if (!it.opts.allowUnionTypes) checkMultipleTypes(it, types);
      checkKeywordTypes(it, it.dataTypes);
    }
    function checkContextTypes(it, types) {
      if (!types.length) return;
      if (!it.dataTypes.length) {
        it.dataTypes = types;
        return;
      }
      types.forEach(function (t) {
        if (!includesType(it.dataTypes, t)) {
          strictTypesError(it, "type \"".concat(t, "\" not allowed by context \"").concat(it.dataTypes.join(","), "\""));
        }
      });
      narrowSchemaTypes(it, types);
    }
    function checkMultipleTypes(it, ts) {
      if (ts.length > 1 && !(ts.length === 2 && ts.includes("null"))) {
        strictTypesError(it, "use allowUnionTypes to allow union type keyword");
      }
    }
    function checkKeywordTypes(it, ts) {
      var rules = it.self.RULES.all;
      for (var keyword in rules) {
        var rule = rules[keyword];
        if (_typeof(rule) == "object" && (0, applicability_1.shouldUseRule)(it.schema, rule)) {
          var type = rule.definition.type;
          if (type.length && !type.some(function (t) {
            return hasApplicableType(ts, t);
          })) {
            strictTypesError(it, "missing type \"".concat(type.join(","), "\" for keyword \"").concat(keyword, "\""));
          }
        }
      }
    }
    function hasApplicableType(schTs, kwdT) {
      return schTs.includes(kwdT) || kwdT === "number" && schTs.includes("integer");
    }
    function includesType(ts, t) {
      return ts.includes(t) || t === "integer" && ts.includes("number");
    }
    function narrowSchemaTypes(it, withTypes) {
      var ts = [];
      var _iterator3 = _createForOfIteratorHelper(it.dataTypes),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var t = _step3.value;
          if (includesType(withTypes, t)) ts.push(t);else if (withTypes.includes("integer") && t === "number") ts.push("integer");
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      it.dataTypes = ts;
    }
    function strictTypesError(it, msg) {
      var schemaPath = it.schemaEnv.baseId + it.errSchemaPath;
      msg += " at \"".concat(schemaPath, "\" (strictTypes)");
      (0, util_1.checkStrictMode)(it, msg, it.opts.strictTypes);
    }
    var KeywordCxt = /*#__PURE__*/function () {
      function KeywordCxt(it, def, keyword) {
        _classCallCheck(this, KeywordCxt);
        (0, keyword_1.validateKeywordUsage)(it, def, keyword);
        this.gen = it.gen;
        this.allErrors = it.allErrors;
        this.keyword = keyword;
        this.data = it.data;
        this.schema = it.schema[keyword];
        this.$data = def.$data && it.opts.$data && this.schema && this.schema.$data;
        this.schemaValue = (0, util_1.schemaRefOrVal)(it, this.schema, keyword, this.$data);
        this.schemaType = def.schemaType;
        this.parentSchema = it.schema;
        this.params = {};
        this.it = it;
        this.def = def;
        if (this.$data) {
          this.schemaCode = it.gen["const"]("vSchema", getData(this.$data, it));
        } else {
          this.schemaCode = this.schemaValue;
          if (!(0, keyword_1.validSchemaType)(this.schema, def.schemaType, def.allowUndefined)) {
            throw new Error("".concat(keyword, " value must be ").concat(JSON.stringify(def.schemaType)));
          }
        }
        if ("code" in def ? def.trackErrors : def.errors !== false) {
          this.errsCount = it.gen["const"]("_errs", names_1["default"].errors);
        }
      }
      return _createClass(KeywordCxt, [{
        key: "result",
        value: function result(condition, successAction, failAction) {
          this.failResult((0, codegen_1.not)(condition), successAction, failAction);
        }
      }, {
        key: "failResult",
        value: function failResult(condition, successAction, failAction) {
          this.gen["if"](condition);
          if (failAction) failAction();else this.error();
          if (successAction) {
            this.gen["else"]();
            successAction();
            if (this.allErrors) this.gen.endIf();
          } else {
            if (this.allErrors) this.gen.endIf();else this.gen["else"]();
          }
        }
      }, {
        key: "pass",
        value: function pass(condition, failAction) {
          this.failResult((0, codegen_1.not)(condition), undefined, failAction);
        }
      }, {
        key: "fail",
        value: function fail(condition) {
          if (condition === undefined) {
            this.error();
            if (!this.allErrors) this.gen["if"](false); // this branch will be removed by gen.optimize
            return;
          }
          this.gen["if"](condition);
          this.error();
          if (this.allErrors) this.gen.endIf();else this.gen["else"]();
        }
      }, {
        key: "fail$data",
        value: function fail$data(condition) {
          if (!this.$data) return this.fail(condition);
          var schemaCode = this.schemaCode;
          this.fail((0, codegen_1._)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["", " !== undefined && (", ")"])), schemaCode, (0, codegen_1.or)(this.invalid$data(), condition)));
        }
      }, {
        key: "error",
        value: function error(append, errorParams, errorPaths) {
          if (errorParams) {
            this.setParams(errorParams);
            this._error(append, errorPaths);
            this.setParams({});
            return;
          }
          this._error(append, errorPaths);
        }
      }, {
        key: "_error",
        value: function _error(append, errorPaths) {
          (append ? errors_1.reportExtraError : errors_1.reportError)(this, this.def.error, errorPaths);
        }
      }, {
        key: "$dataError",
        value: function $dataError() {
          (0, errors_1.reportError)(this, this.def.$dataError || errors_1.keyword$DataError);
        }
      }, {
        key: "reset",
        value: function reset() {
          if (this.errsCount === undefined) throw new Error('add "trackErrors" to keyword definition');
          (0, errors_1.resetErrorsCount)(this.gen, this.errsCount);
        }
      }, {
        key: "ok",
        value: function ok(cond) {
          if (!this.allErrors) this.gen["if"](cond);
        }
      }, {
        key: "setParams",
        value: function setParams(obj, assign) {
          if (assign) Object.assign(this.params, obj);else this.params = obj;
        }
      }, {
        key: "block$data",
        value: function block$data(valid, codeBlock) {
          var _this = this;
          var $dataValid = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : codegen_1.nil;
          this.gen.block(function () {
            _this.check$data(valid, $dataValid);
            codeBlock();
          });
        }
      }, {
        key: "check$data",
        value: function check$data() {
          var valid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : codegen_1.nil;
          var $dataValid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : codegen_1.nil;
          if (!this.$data) return;
          var gen = this.gen,
            schemaCode = this.schemaCode,
            schemaType = this.schemaType,
            def = this.def;
          gen["if"]((0, codegen_1.or)((0, codegen_1._)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["", " === undefined"])), schemaCode), $dataValid));
          if (valid !== codegen_1.nil) gen.assign(valid, true);
          if (schemaType.length || def.validateSchema) {
            gen.elseIf(this.invalid$data());
            this.$dataError();
            if (valid !== codegen_1.nil) gen.assign(valid, false);
          }
          gen["else"]();
        }
      }, {
        key: "invalid$data",
        value: function invalid$data() {
          var gen = this.gen,
            schemaCode = this.schemaCode,
            schemaType = this.schemaType,
            def = this.def,
            it = this.it;
          return (0, codegen_1.or)(wrong$DataType(), invalid$DataSchema());
          function wrong$DataType() {
            if (schemaType.length) {
              /* istanbul ignore if */
              if (!(schemaCode instanceof codegen_1.Name)) throw new Error("ajv implementation error");
              var st = Array.isArray(schemaType) ? schemaType : [schemaType];
              return (0, codegen_1._)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["", ""])), (0, dataType_2.checkDataTypes)(st, schemaCode, it.opts.strictNumbers, dataType_2.DataType.Wrong));
            }
            return codegen_1.nil;
          }
          function invalid$DataSchema() {
            if (def.validateSchema) {
              var validateSchemaRef = gen.scopeValue("validate$data", {
                ref: def.validateSchema
              }); // TODO value.code for standalone
              return (0, codegen_1._)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["!", "(", ")"])), validateSchemaRef, schemaCode);
            }
            return codegen_1.nil;
          }
        }
      }, {
        key: "subschema",
        value: function subschema(appl, valid) {
          var subschema = (0, subschema_1.getSubschema)(this.it, appl);
          (0, subschema_1.extendSubschemaData)(subschema, this.it, appl);
          (0, subschema_1.extendSubschemaMode)(subschema, appl);
          var nextContext = _objectSpread2(_objectSpread2(_objectSpread2({}, this.it), subschema), {}, {
            items: undefined,
            props: undefined
          });
          subschemaCode(nextContext, valid);
          return nextContext;
        }
      }, {
        key: "mergeEvaluated",
        value: function mergeEvaluated(schemaCxt, toName) {
          var it = this.it,
            gen = this.gen;
          if (!it.opts.unevaluated) return;
          if (it.props !== true && schemaCxt.props !== undefined) {
            it.props = util_1.mergeEvaluated.props(gen, schemaCxt.props, it.props, toName);
          }
          if (it.items !== true && schemaCxt.items !== undefined) {
            it.items = util_1.mergeEvaluated.items(gen, schemaCxt.items, it.items, toName);
          }
        }
      }, {
        key: "mergeValidEvaluated",
        value: function mergeValidEvaluated(schemaCxt, valid) {
          var _this2 = this;
          var it = this.it,
            gen = this.gen;
          if (it.opts.unevaluated && (it.props !== true || it.items !== true)) {
            gen["if"](valid, function () {
              return _this2.mergeEvaluated(schemaCxt, codegen_1.Name);
            });
            return true;
          }
        }
      }]);
    }();
    validate.KeywordCxt = KeywordCxt;
    function keywordCode(it, keyword, def, ruleType) {
      var cxt = new KeywordCxt(it, def, keyword);
      if ("code" in def) {
        def.code(cxt, ruleType);
      } else if (cxt.$data && def.validate) {
        (0, keyword_1.funcKeywordCode)(cxt, def);
      } else if ("macro" in def) {
        (0, keyword_1.macroKeywordCode)(cxt, def);
      } else if (def.compile || def.validate) {
        (0, keyword_1.funcKeywordCode)(cxt, def);
      }
    }
    var JSON_POINTER = /^\/(?:[^~]|~0|~1)*$/;
    var RELATIVE_JSON_POINTER = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
    function getData($data, _ref5) {
      var dataLevel = _ref5.dataLevel,
        dataNames = _ref5.dataNames,
        dataPathArr = _ref5.dataPathArr;
      var jsonPointer;
      var data;
      if ($data === "") return names_1["default"].rootData;
      if ($data[0] === "/") {
        if (!JSON_POINTER.test($data)) throw new Error("Invalid JSON-pointer: ".concat($data));
        jsonPointer = $data;
        data = names_1["default"].rootData;
      } else {
        var matches = RELATIVE_JSON_POINTER.exec($data);
        if (!matches) throw new Error("Invalid JSON-pointer: ".concat($data));
        var up = +matches[1];
        jsonPointer = matches[2];
        if (jsonPointer === "#") {
          if (up >= dataLevel) throw new Error(errorMsg("property/index", up));
          return dataPathArr[dataLevel - up];
        }
        if (up > dataLevel) throw new Error(errorMsg("data", up));
        data = dataNames[dataLevel - up];
        if (!jsonPointer) return data;
      }
      var expr = data;
      var segments = jsonPointer.split("/");
      var _iterator4 = _createForOfIteratorHelper(segments),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var segment = _step4.value;
          if (segment) {
            data = (0, codegen_1._)(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["", "", ""])), data, (0, codegen_1.getProperty)((0, util_1.unescapeJsonPointer)(segment)));
            expr = (0, codegen_1._)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["", " && ", ""])), expr, data);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return expr;
      function errorMsg(pointerType, up) {
        return "Cannot access ".concat(pointerType, " ").concat(up, " levels up, current level is ").concat(dataLevel);
      }
    }
    validate.getData = getData;
    return validate;
  }

  var validation_error = {};

  var hasRequiredValidation_error;
  function requireValidation_error() {
    if (hasRequiredValidation_error) return validation_error;
    hasRequiredValidation_error = 1;
    Object.defineProperty(validation_error, "__esModule", {
      value: true
    });
    var ValidationError = /*#__PURE__*/function (_Error) {
      function ValidationError(errors) {
        var _this;
        _classCallCheck(this, ValidationError);
        _this = _callSuper(this, ValidationError, ["validation failed"]);
        _this.errors = errors;
        _this.ajv = _this.validation = true;
        return _this;
      }
      _inherits(ValidationError, _Error);
      return _createClass(ValidationError);
    }( /*#__PURE__*/_wrapNativeSuper(Error));
    validation_error["default"] = ValidationError;
    return validation_error;
  }

  var ref_error = {};

  var hasRequiredRef_error;
  function requireRef_error() {
    if (hasRequiredRef_error) return ref_error;
    hasRequiredRef_error = 1;
    Object.defineProperty(ref_error, "__esModule", {
      value: true
    });
    var resolve_1 = resolve$1;
    var MissingRefError = /*#__PURE__*/function (_Error) {
      function MissingRefError(resolver, baseId, ref, msg) {
        var _this;
        _classCallCheck(this, MissingRefError);
        _this = _callSuper(this, MissingRefError, [msg || "can't resolve reference ".concat(ref, " from id ").concat(baseId)]);
        _this.missingRef = (0, resolve_1.resolveUrl)(resolver, baseId, ref);
        _this.missingSchema = (0, resolve_1.normalizeId)((0, resolve_1.getFullPath)(resolver, _this.missingRef));
        return _this;
      }
      _inherits(MissingRefError, _Error);
      return _createClass(MissingRefError);
    }( /*#__PURE__*/_wrapNativeSuper(Error));
    ref_error["default"] = MissingRefError;
    return ref_error;
  }

  var compile = {};

  var _templateObject$p, _templateObject2$n;
  Object.defineProperty(compile, "__esModule", {
    value: true
  });
  compile.resolveSchema = compile.getCompilingSchema = compile.resolveRef = compile.compileSchema = compile.SchemaEnv = void 0;
  var codegen_1$m = codegen;
  var validation_error_1 = requireValidation_error();
  var names_1$2 = requireNames();
  var resolve_1 = resolve$1;
  var util_1$k = util;
  var validate_1$1 = requireValidate();
  var SchemaEnv = /*#__PURE__*/_createClass(function SchemaEnv(env) {
    _classCallCheck(this, SchemaEnv);
    var _a;
    this.refs = {};
    this.dynamicAnchors = {};
    var schema;
    if (_typeof(env.schema) == "object") schema = env.schema;
    this.schema = env.schema;
    this.schemaId = env.schemaId;
    this.root = env.root || this;
    this.baseId = (_a = env.baseId) !== null && _a !== void 0 ? _a : (0, resolve_1.normalizeId)(schema === null || schema === void 0 ? void 0 : schema[env.schemaId || "$id"]);
    this.schemaPath = env.schemaPath;
    this.localRefs = env.localRefs;
    this.meta = env.meta;
    this.$async = schema === null || schema === void 0 ? void 0 : schema.$async;
    this.refs = {};
  });
  compile.SchemaEnv = SchemaEnv;
  // let codeSize = 0
  // let nodeCount = 0
  // Compiles schema in SchemaEnv
  function compileSchema(sch) {
    // TODO refactor - remove compilations
    var _sch = getCompilingSchema.call(this, sch);
    if (_sch) return _sch;
    var rootId = (0, resolve_1.getFullPath)(this.opts.uriResolver, sch.root.baseId); // TODO if getFullPath removed 1 tests fails
    var _this$opts$code = this.opts.code,
      es5 = _this$opts$code.es5,
      lines = _this$opts$code.lines;
    var ownProperties = this.opts.ownProperties;
    var gen = new codegen_1$m.CodeGen(this.scope, {
      es5: es5,
      lines: lines,
      ownProperties: ownProperties
    });
    var _ValidationError;
    if (sch.$async) {
      _ValidationError = gen.scopeValue("Error", {
        ref: validation_error_1["default"],
        code: (0, codegen_1$m._)(_templateObject$p || (_templateObject$p = _taggedTemplateLiteral(["require(\"ajv/dist/runtime/validation_error\").default"])))
      });
    }
    var validateName = gen.scopeName("validate");
    sch.validateName = validateName;
    var schemaCxt = {
      gen: gen,
      allErrors: this.opts.allErrors,
      data: names_1$2["default"].data,
      parentData: names_1$2["default"].parentData,
      parentDataProperty: names_1$2["default"].parentDataProperty,
      dataNames: [names_1$2["default"].data],
      dataPathArr: [codegen_1$m.nil],
      dataLevel: 0,
      dataTypes: [],
      definedProperties: new Set(),
      topSchemaRef: gen.scopeValue("schema", this.opts.code.source === true ? {
        ref: sch.schema,
        code: (0, codegen_1$m.stringify)(sch.schema)
      } : {
        ref: sch.schema
      }),
      validateName: validateName,
      ValidationError: _ValidationError,
      schema: sch.schema,
      schemaEnv: sch,
      rootId: rootId,
      baseId: sch.baseId || rootId,
      schemaPath: codegen_1$m.nil,
      errSchemaPath: sch.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, codegen_1$m._)(_templateObject2$n || (_templateObject2$n = _taggedTemplateLiteral(["\"\""]))),
      opts: this.opts,
      self: this
    };
    var sourceCode;
    try {
      this._compilations.add(sch);
      (0, validate_1$1.validateFunctionCode)(schemaCxt);
      gen.optimize(this.opts.code.optimize);
      // gen.optimize(1)
      var validateCode = gen.toString();
      sourceCode = "".concat(gen.scopeRefs(names_1$2["default"].scope), "return ").concat(validateCode);
      // console.log((codeSize += sourceCode.length), (nodeCount += gen.nodeCount))
      if (this.opts.code.process) sourceCode = this.opts.code.process(sourceCode, sch);
      // console.log("\n\n\n *** \n", sourceCode)
      var makeValidate = new Function("".concat(names_1$2["default"].self), "".concat(names_1$2["default"].scope), sourceCode);
      var validate = makeValidate(this, this.scope.get());
      this.scope.value(validateName, {
        ref: validate
      });
      validate.errors = null;
      validate.schema = sch.schema;
      validate.schemaEnv = sch;
      if (sch.$async) validate.$async = true;
      if (this.opts.code.source === true) {
        validate.source = {
          validateName: validateName,
          validateCode: validateCode,
          scopeValues: gen._values
        };
      }
      if (this.opts.unevaluated) {
        var props = schemaCxt.props,
          items = schemaCxt.items;
        validate.evaluated = {
          props: props instanceof codegen_1$m.Name ? undefined : props,
          items: items instanceof codegen_1$m.Name ? undefined : items,
          dynamicProps: props instanceof codegen_1$m.Name,
          dynamicItems: items instanceof codegen_1$m.Name
        };
        if (validate.source) validate.source.evaluated = (0, codegen_1$m.stringify)(validate.evaluated);
      }
      sch.validate = validate;
      return sch;
    } catch (e) {
      delete sch.validate;
      delete sch.validateName;
      if (sourceCode) this.logger.error("Error compiling schema, function code:", sourceCode);
      // console.log("\n\n\n *** \n", sourceCode, this.opts)
      throw e;
    } finally {
      this._compilations["delete"](sch);
    }
  }
  compile.compileSchema = compileSchema;
  function resolveRef$1(root, baseId, ref) {
    var _a;
    ref = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, ref);
    var schOrFunc = root.refs[ref];
    if (schOrFunc) return schOrFunc;
    var _sch = resolve.call(this, root, ref);
    if (_sch === undefined) {
      var schema = (_a = root.localRefs) === null || _a === void 0 ? void 0 : _a[ref]; // TODO maybe localRefs should hold SchemaEnv
      var schemaId = this.opts.schemaId;
      if (schema) _sch = new SchemaEnv({
        schema: schema,
        schemaId: schemaId,
        root: root,
        baseId: baseId
      });
    }
    if (_sch === undefined) return;
    return root.refs[ref] = inlineOrCompile.call(this, _sch);
  }
  compile.resolveRef = resolveRef$1;
  function inlineOrCompile(sch) {
    if ((0, resolve_1.inlineRef)(sch.schema, this.opts.inlineRefs)) return sch.schema;
    return sch.validate ? sch : compileSchema.call(this, sch);
  }
  // Index of schema compilation in the currently compiled list
  function getCompilingSchema(schEnv) {
    var _iterator = _createForOfIteratorHelper(this._compilations),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var sch = _step.value;
        if (sameSchemaEnv(sch, schEnv)) return sch;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  compile.getCompilingSchema = getCompilingSchema;
  function sameSchemaEnv(s1, s2) {
    return s1.schema === s2.schema && s1.root === s2.root && s1.baseId === s2.baseId;
  }
  // resolve and compile the references ($ref)
  // TODO returns AnySchemaObject (if the schema can be inlined) or validation function
  function resolve(root,
  // information about the root schema for the current schema
  ref // reference to resolve
  ) {
    var sch;
    while (typeof (sch = this.refs[ref]) == "string") ref = sch;
    return sch || this.schemas[ref] || resolveSchema.call(this, root, ref);
  }
  // Resolve schema, its root and baseId
  function resolveSchema(root,
  // root object with properties schema, refs TODO below SchemaEnv is assigned to it
  ref // reference to resolve
  ) {
    var p = this.opts.uriResolver.parse(ref);
    var refPath = (0, resolve_1._getFullPath)(this.opts.uriResolver, p);
    var baseId = (0, resolve_1.getFullPath)(this.opts.uriResolver, root.baseId, undefined);
    // TODO `Object.keys(root.schema).length > 0` should not be needed - but removing breaks 2 tests
    if (Object.keys(root.schema).length > 0 && refPath === baseId) {
      return getJsonPointer.call(this, p, root);
    }
    var id = (0, resolve_1.normalizeId)(refPath);
    var schOrRef = this.refs[id] || this.schemas[id];
    if (typeof schOrRef == "string") {
      var sch = resolveSchema.call(this, root, schOrRef);
      if (_typeof(sch === null || sch === void 0 ? void 0 : sch.schema) !== "object") return;
      return getJsonPointer.call(this, p, sch);
    }
    if (_typeof(schOrRef === null || schOrRef === void 0 ? void 0 : schOrRef.schema) !== "object") return;
    if (!schOrRef.validate) compileSchema.call(this, schOrRef);
    if (id === (0, resolve_1.normalizeId)(ref)) {
      var schema = schOrRef.schema;
      var schemaId = this.opts.schemaId;
      var schId = schema[schemaId];
      if (schId) baseId = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schId);
      return new SchemaEnv({
        schema: schema,
        schemaId: schemaId,
        root: root,
        baseId: baseId
      });
    }
    return getJsonPointer.call(this, p, schOrRef);
  }
  compile.resolveSchema = resolveSchema;
  var PREVENT_SCOPE_CHANGE = new Set(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
  function getJsonPointer(parsedRef, _ref) {
    var baseId = _ref.baseId,
      schema = _ref.schema,
      root = _ref.root;
    var _a;
    if (((_a = parsedRef.fragment) === null || _a === void 0 ? void 0 : _a[0]) !== "/") return;
    var _iterator2 = _createForOfIteratorHelper(parsedRef.fragment.slice(1).split("/")),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var part = _step2.value;
        if (typeof schema === "boolean") return;
        var partSchema = schema[(0, util_1$k.unescapeFragment)(part)];
        if (partSchema === undefined) return;
        schema = partSchema;
        // TODO PREVENT_SCOPE_CHANGE could be defined in keyword def?
        var schId = _typeof(schema) === "object" && schema[this.opts.schemaId];
        if (!PREVENT_SCOPE_CHANGE.has(part) && schId) {
          baseId = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schId);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var env;
    if (typeof schema != "boolean" && schema.$ref && !(0, util_1$k.schemaHasRulesButRef)(schema, this.RULES)) {
      var $ref = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schema.$ref);
      env = resolveSchema.call(this, root, $ref);
    }
    // even though resolution failed we need to return SchemaEnv to throw exception
    // so that compileAsync loads missing schema.
    var schemaId = this.opts.schemaId;
    env = env || new SchemaEnv({
      schema: schema,
      schemaId: schemaId,
      root: root,
      baseId: baseId
    });
    if (env.schema !== env.root.schema) return env;
    return undefined;
  }

  var $id$1 = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#";
  var description = "Meta-schema for $data reference (JSON AnySchema extension proposal)";
  var type$1 = "object";
  var required$1 = [
  	"$data"
  ];
  var properties$2 = {
  	$data: {
  		type: "string",
  		anyOf: [
  			{
  				format: "relative-json-pointer"
  			},
  			{
  				format: "json-pointer"
  			}
  		]
  	}
  };
  var additionalProperties$1 = false;
  var require$$9 = {
  	$id: $id$1,
  	description: description,
  	type: type$1,
  	required: required$1,
  	properties: properties$2,
  	additionalProperties: additionalProperties$1
  };

  var uri$1 = {};

  var uri_all = {exports: {}};

  /** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */
  (function (module, exports) {
    (function (global, factory) {
      factory(exports) ;
    })(commonjsGlobal, function (exports) {

      function merge() {
        for (var _len = arguments.length, sets = Array(_len), _key = 0; _key < _len; _key++) {
          sets[_key] = arguments[_key];
        }
        if (sets.length > 1) {
          sets[0] = sets[0].slice(0, -1);
          var xl = sets.length - 1;
          for (var x = 1; x < xl; ++x) {
            sets[x] = sets[x].slice(1, -1);
          }
          sets[xl] = sets[xl].slice(1);
          return sets.join('');
        } else {
          return sets[0];
        }
      }
      function subexp(str) {
        return "(?:" + str + ")";
      }
      function typeOf(o) {
        return o === undefined ? "undefined" : o === null ? "null" : Object.prototype.toString.call(o).split(" ").pop().split("]").shift().toLowerCase();
      }
      function toUpperCase(str) {
        return str.toUpperCase();
      }
      function toArray(obj) {
        return obj !== undefined && obj !== null ? obj instanceof Array ? obj : typeof obj.length !== "number" || obj.split || obj.setInterval || obj.call ? [obj] : Array.prototype.slice.call(obj) : [];
      }
      function assign(target, source) {
        var obj = target;
        if (source) {
          for (var key in source) {
            obj[key] = source[key];
          }
        }
        return obj;
      }
      function buildExps(isIRI) {
        var ALPHA$$ = "[A-Za-z]",
          DIGIT$$ = "[0-9]",
          HEXDIG$$ = merge(DIGIT$$, "[A-Fa-f]"),
          PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$)),
          //expanded
          GEN_DELIMS$$ = "[\\:\\/\\?\\#\\[\\]\\@]",
          SUB_DELIMS$$ = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",
          RESERVED$$ = merge(GEN_DELIMS$$, SUB_DELIMS$$),
          UCSCHAR$$ = isIRI ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]",
          //subset, excludes bidi control characters
          IPRIVATE$$ = isIRI ? "[\\uE000-\\uF8FF]" : "[]",
          //subset
          UNRESERVED$$ = merge(ALPHA$$, DIGIT$$, "[\\-\\.\\_\\~]", UCSCHAR$$);
          subexp(ALPHA$$ + merge(ALPHA$$, DIGIT$$, "[\\+\\-\\.]") + "*");
          subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:]")) + "*");
          var DEC_OCTET_RELAXED$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("0?[1-9]" + DIGIT$$) + "|0?0?" + DIGIT$$),
          //relaxed parsing rules
          IPV4ADDRESS$ = subexp(DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$),
          H16$ = subexp(HEXDIG$$ + "{1,4}"),
          LS32$ = subexp(subexp(H16$ + "\\:" + H16$) + "|" + IPV4ADDRESS$),
          IPV6ADDRESS1$ = subexp(subexp(H16$ + "\\:") + "{6}" + LS32$),
          //                           6( h16 ":" ) ls32
          IPV6ADDRESS2$ = subexp("\\:\\:" + subexp(H16$ + "\\:") + "{5}" + LS32$),
          //                      "::" 5( h16 ":" ) ls32
          IPV6ADDRESS3$ = subexp(subexp(H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{4}" + LS32$),
          //[               h16 ] "::" 4( h16 ":" ) ls32
          IPV6ADDRESS4$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,1}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{3}" + LS32$),
          //[ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
          IPV6ADDRESS5$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,2}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{2}" + LS32$),
          //[ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
          IPV6ADDRESS6$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,3}" + H16$) + "?\\:\\:" + H16$ + "\\:" + LS32$),
          //[ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
          IPV6ADDRESS7$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,4}" + H16$) + "?\\:\\:" + LS32$),
          //[ *4( h16 ":" ) h16 ] "::"              ls32
          IPV6ADDRESS8$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,5}" + H16$) + "?\\:\\:" + H16$),
          //[ *5( h16 ":" ) h16 ] "::"              h16
          IPV6ADDRESS9$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,6}" + H16$) + "?\\:\\:"),
          //[ *6( h16 ":" ) h16 ] "::"
          IPV6ADDRESS$ = subexp([IPV6ADDRESS1$, IPV6ADDRESS2$, IPV6ADDRESS3$, IPV6ADDRESS4$, IPV6ADDRESS5$, IPV6ADDRESS6$, IPV6ADDRESS7$, IPV6ADDRESS8$, IPV6ADDRESS9$].join("|")),
          ZONEID$ = subexp(subexp(UNRESERVED$$ + "|" + PCT_ENCODED$) + "+");
          //RFC 6874, with relaxed parsing rules
          subexp("[vV]" + HEXDIG$$ + "+\\." + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:]") + "+");
          //RFC 6874
          subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$)) + "*");
          var PCHAR$ = subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@]"));
          subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\@]")) + "+");
          subexp(subexp(PCHAR$ + "|" + merge("[\\/\\?]", IPRIVATE$$)) + "*");
        return {
          NOT_SCHEME: new RegExp(merge("[^]", ALPHA$$, DIGIT$$, "[\\+\\-\\.]"), "g"),
          NOT_USERINFO: new RegExp(merge("[^\\%\\:]", UNRESERVED$$, SUB_DELIMS$$), "g"),
          NOT_HOST: new RegExp(merge("[^\\%\\[\\]\\:]", UNRESERVED$$, SUB_DELIMS$$), "g"),
          NOT_PATH: new RegExp(merge("[^\\%\\/\\:\\@]", UNRESERVED$$, SUB_DELIMS$$), "g"),
          NOT_PATH_NOSCHEME: new RegExp(merge("[^\\%\\/\\@]", UNRESERVED$$, SUB_DELIMS$$), "g"),
          NOT_QUERY: new RegExp(merge("[^\\%]", UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@\\/\\?]", IPRIVATE$$), "g"),
          NOT_FRAGMENT: new RegExp(merge("[^\\%]", UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@\\/\\?]"), "g"),
          ESCAPE: new RegExp(merge("[^]", UNRESERVED$$, SUB_DELIMS$$), "g"),
          UNRESERVED: new RegExp(UNRESERVED$$, "g"),
          OTHER_CHARS: new RegExp(merge("[^\\%]", UNRESERVED$$, RESERVED$$), "g"),
          PCT_ENCODED: new RegExp(PCT_ENCODED$, "g"),
          IPV4ADDRESS: new RegExp("^(" + IPV4ADDRESS$ + ")$"),
          IPV6ADDRESS: new RegExp("^\\[?(" + IPV6ADDRESS$ + ")" + subexp(subexp("\\%25|\\%(?!" + HEXDIG$$ + "{2})") + "(" + ZONEID$ + ")") + "?\\]?$") //RFC 6874, with relaxed parsing rules
        };
      }
      var URI_PROTOCOL = buildExps(false);
      var IRI_PROTOCOL = buildExps(true);
      var slicedToArray = function () {
        function sliceIterator(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"]) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
        return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();
      var toConsumableArray = function toConsumableArray(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
          return arr2;
        } else {
          return Array.from(arr);
        }
      };

      /** Highest positive signed 32-bit float value */

      var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

      /** Bootstring parameters */
      var base = 36;
      var tMin = 1;
      var tMax = 26;
      var skew = 38;
      var damp = 700;
      var initialBias = 72;
      var initialN = 128; // 0x80
      var delimiter = '-'; // '\x2D'

      /** Regular expressions */
      var regexPunycode = /^xn--/;
      var regexNonASCII = /[^\0-\x7E]/; // non-ASCII chars
      var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

      /** Error messages */
      var errors = {
        'overflow': 'Overflow: input needs wider integers to process',
        'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
        'invalid-input': 'Invalid input'
      };

      /** Convenience shortcuts */
      var baseMinusTMin = base - tMin;
      var floor = Math.floor;
      var stringFromCharCode = String.fromCharCode;

      /*--------------------------------------------------------------------------*/

      /**
       * A generic error utility function.
       * @private
       * @param {String} type The error type.
       * @returns {Error} Throws a `RangeError` with the applicable error message.
       */
      function error$1(type) {
        throw new RangeError(errors[type]);
      }

      /**
       * A generic `Array#map` utility function.
       * @private
       * @param {Array} array The array to iterate over.
       * @param {Function} callback The function that gets called for every array
       * item.
       * @returns {Array} A new array of values returned by the callback function.
       */
      function map(array, fn) {
        var result = [];
        var length = array.length;
        while (length--) {
          result[length] = fn(array[length]);
        }
        return result;
      }

      /**
       * A simple `Array#map`-like wrapper to work with domain name strings or email
       * addresses.
       * @private
       * @param {String} domain The domain name or email address.
       * @param {Function} callback The function that gets called for every
       * character.
       * @returns {Array} A new string of characters returned by the callback
       * function.
       */
      function mapDomain(string, fn) {
        var parts = string.split('@');
        var result = '';
        if (parts.length > 1) {
          // In email addresses, only the domain name should be punycoded. Leave
          // the local part (i.e. everything up to `@`) intact.
          result = parts[0] + '@';
          string = parts[1];
        }
        // Avoid `split(regex)` for IE8 compatibility. See #17.
        string = string.replace(regexSeparators, '\x2E');
        var labels = string.split('.');
        var encoded = map(labels, fn).join('.');
        return result + encoded;
      }

      /**
       * Creates an array containing the numeric code points of each Unicode
       * character in the string. While JavaScript uses UCS-2 internally,
       * this function will convert a pair of surrogate halves (each of which
       * UCS-2 exposes as separate characters) into a single code point,
       * matching UTF-16.
       * @see `punycode.ucs2.encode`
       * @see <https://mathiasbynens.be/notes/javascript-encoding>
       * @memberOf punycode.ucs2
       * @name decode
       * @param {String} string The Unicode input string (UCS-2).
       * @returns {Array} The new array of code points.
       */
      function ucs2decode(string) {
        var output = [];
        var counter = 0;
        var length = string.length;
        while (counter < length) {
          var value = string.charCodeAt(counter++);
          if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
            // It's a high surrogate, and there is a next character.
            var extra = string.charCodeAt(counter++);
            if ((extra & 0xFC00) == 0xDC00) {
              // Low surrogate.
              output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
            } else {
              // It's an unmatched surrogate; only append this code unit, in case the
              // next code unit is the high surrogate of a surrogate pair.
              output.push(value);
              counter--;
            }
          } else {
            output.push(value);
          }
        }
        return output;
      }

      /**
       * Creates a string based on an array of numeric code points.
       * @see `punycode.ucs2.decode`
       * @memberOf punycode.ucs2
       * @name encode
       * @param {Array} codePoints The array of numeric code points.
       * @returns {String} The new Unicode string (UCS-2).
       */
      var ucs2encode = function ucs2encode(array) {
        return String.fromCodePoint.apply(String, toConsumableArray(array));
      };

      /**
       * Converts a basic code point into a digit/integer.
       * @see `digitToBasic()`
       * @private
       * @param {Number} codePoint The basic numeric code point value.
       * @returns {Number} The numeric value of a basic code point (for use in
       * representing integers) in the range `0` to `base - 1`, or `base` if
       * the code point does not represent a value.
       */
      var basicToDigit = function basicToDigit(codePoint) {
        if (codePoint - 0x30 < 0x0A) {
          return codePoint - 0x16;
        }
        if (codePoint - 0x41 < 0x1A) {
          return codePoint - 0x41;
        }
        if (codePoint - 0x61 < 0x1A) {
          return codePoint - 0x61;
        }
        return base;
      };

      /**
       * Converts a digit/integer into a basic code point.
       * @see `basicToDigit()`
       * @private
       * @param {Number} digit The numeric value of a basic code point.
       * @returns {Number} The basic code point whose value (when used for
       * representing integers) is `digit`, which needs to be in the range
       * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
       * used; else, the lowercase form is used. The behavior is undefined
       * if `flag` is non-zero and `digit` has no uppercase form.
       */
      var digitToBasic = function digitToBasic(digit, flag) {
        //  0..25 map to ASCII a..z or A..Z
        // 26..35 map to ASCII 0..9
        return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
      };

      /**
       * Bias adaptation function as per section 3.4 of RFC 3492.
       * https://tools.ietf.org/html/rfc3492#section-3.4
       * @private
       */
      var adapt = function adapt(delta, numPoints, firstTime) {
        var k = 0;
        delta = firstTime ? floor(delta / damp) : delta >> 1;
        delta += floor(delta / numPoints);
        for (; /* no initialization */delta > baseMinusTMin * tMax >> 1; k += base) {
          delta = floor(delta / baseMinusTMin);
        }
        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
      };

      /**
       * Converts a Punycode string of ASCII-only symbols to a string of Unicode
       * symbols.
       * @memberOf punycode
       * @param {String} input The Punycode string of ASCII-only symbols.
       * @returns {String} The resulting string of Unicode symbols.
       */
      var decode = function decode(input) {
        // Don't use UCS-2.
        var output = [];
        var inputLength = input.length;
        var i = 0;
        var n = initialN;
        var bias = initialBias;

        // Handle the basic code points: let `basic` be the number of input code
        // points before the last delimiter, or `0` if there is none, then copy
        // the first basic code points to the output.

        var basic = input.lastIndexOf(delimiter);
        if (basic < 0) {
          basic = 0;
        }
        for (var j = 0; j < basic; ++j) {
          // if it's not a basic code point
          if (input.charCodeAt(j) >= 0x80) {
            error$1('not-basic');
          }
          output.push(input.charCodeAt(j));
        }

        // Main decoding loop: start just after the last delimiter if any basic code
        // points were copied; start at the beginning otherwise.

        for (var index = basic > 0 ? basic + 1 : 0; index < inputLength;) /* no final expression */{
          // `index` is the index of the next character to be consumed.
          // Decode a generalized variable-length integer into `delta`,
          // which gets added to `i`. The overflow checking is easier
          // if we increase `i` as we go, then subtract off its starting
          // value at the end to obtain `delta`.
          var oldi = i;
          for (var w = 1, k = base;; /* no condition */k += base) {
            if (index >= inputLength) {
              error$1('invalid-input');
            }
            var digit = basicToDigit(input.charCodeAt(index++));
            if (digit >= base || digit > floor((maxInt - i) / w)) {
              error$1('overflow');
            }
            i += digit * w;
            var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
            if (digit < t) {
              break;
            }
            var baseMinusT = base - t;
            if (w > floor(maxInt / baseMinusT)) {
              error$1('overflow');
            }
            w *= baseMinusT;
          }
          var out = output.length + 1;
          bias = adapt(i - oldi, out, oldi == 0);

          // `i` was supposed to wrap around from `out` to `0`,
          // incrementing `n` each time, so we'll fix that now:
          if (floor(i / out) > maxInt - n) {
            error$1('overflow');
          }
          n += floor(i / out);
          i %= out;

          // Insert `n` at position `i` of the output.
          output.splice(i++, 0, n);
        }
        return String.fromCodePoint.apply(String, output);
      };

      /**
       * Converts a string of Unicode symbols (e.g. a domain name label) to a
       * Punycode string of ASCII-only symbols.
       * @memberOf punycode
       * @param {String} input The string of Unicode symbols.
       * @returns {String} The resulting Punycode string of ASCII-only symbols.
       */
      var encode = function encode(input) {
        var output = [];

        // Convert the input in UCS-2 to an array of Unicode code points.
        input = ucs2decode(input);

        // Cache the length.
        var inputLength = input.length;

        // Initialize the state.
        var n = initialN;
        var delta = 0;
        var bias = initialBias;

        // Handle the basic code points.
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;
        try {
          for (var _iterator = input[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _currentValue2 = _step.value;
            if (_currentValue2 < 0x80) {
              output.push(stringFromCharCode(_currentValue2));
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"]) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
        var basicLength = output.length;
        var handledCPCount = basicLength;

        // `handledCPCount` is the number of code points that have been handled;
        // `basicLength` is the number of basic code points.

        // Finish the basic string with a delimiter unless it's empty.
        if (basicLength) {
          output.push(delimiter);
        }

        // Main encoding loop:
        while (handledCPCount < inputLength) {
          // All non-basic code points < n have been handled already. Find the next
          // larger one:
          var m = maxInt;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;
          try {
            for (var _iterator2 = input[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var currentValue = _step2.value;
              if (currentValue >= n && currentValue < m) {
                m = currentValue;
              }
            }

            // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
            // but guard against overflow.
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
          var handledCPCountPlusOne = handledCPCount + 1;
          if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
            error$1('overflow');
          }
          delta += (m - n) * handledCPCountPlusOne;
          n = m;
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;
          try {
            for (var _iterator3 = input[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var _currentValue = _step3.value;
              if (_currentValue < n && ++delta > maxInt) {
                error$1('overflow');
              }
              if (_currentValue == n) {
                // Represent delta as a generalized variable-length integer.
                var q = delta;
                for (var k = base;; /* no condition */k += base) {
                  var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                  if (q < t) {
                    break;
                  }
                  var qMinusT = q - t;
                  var baseMinusT = base - t;
                  output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                  q = floor(qMinusT / baseMinusT);
                }
                output.push(stringFromCharCode(digitToBasic(q, 0)));
                bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                delta = 0;
                ++handledCPCount;
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
                _iterator3["return"]();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
          ++delta;
          ++n;
        }
        return output.join('');
      };

      /**
       * Converts a Punycode string representing a domain name or an email address
       * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
       * it doesn't matter if you call it on a string that has already been
       * converted to Unicode.
       * @memberOf punycode
       * @param {String} input The Punycoded domain name or email address to
       * convert to Unicode.
       * @returns {String} The Unicode representation of the given Punycode
       * string.
       */
      var toUnicode = function toUnicode(input) {
        return mapDomain(input, function (string) {
          return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
        });
      };

      /**
       * Converts a Unicode string representing a domain name or an email address to
       * Punycode. Only the non-ASCII parts of the domain name will be converted,
       * i.e. it doesn't matter if you call it with a domain that's already in
       * ASCII.
       * @memberOf punycode
       * @param {String} input The domain name or email address to convert, as a
       * Unicode string.
       * @returns {String} The Punycode representation of the given domain name or
       * email address.
       */
      var toASCII = function toASCII(input) {
        return mapDomain(input, function (string) {
          return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
        });
      };

      /*--------------------------------------------------------------------------*/

      /** Define the public API */
      var punycode = {
        /**
         * A string representing the current Punycode.js version number.
         * @memberOf punycode
         * @type String
         */
        'version': '2.1.0',
        /**
         * An object of methods to convert from JavaScript's internal character
         * representation (UCS-2) to Unicode code points, and back.
         * @see <https://mathiasbynens.be/notes/javascript-encoding>
         * @memberOf punycode
         * @type Object
         */
        'ucs2': {
          'decode': ucs2decode,
          'encode': ucs2encode
        },
        'decode': decode,
        'encode': encode,
        'toASCII': toASCII,
        'toUnicode': toUnicode
      };

      /**
       * URI.js
       *
       * @fileoverview An RFC 3986 compliant, scheme extendable URI parsing/validating/resolving library for JavaScript.
       * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
       * @see http://github.com/garycourt/uri-js
       */
      /**
       * Copyright 2011 Gary Court. All rights reserved.
       *
       * Redistribution and use in source and binary forms, with or without modification, are
       * permitted provided that the following conditions are met:
       *
       *    1. Redistributions of source code must retain the above copyright notice, this list of
       *       conditions and the following disclaimer.
       *
       *    2. Redistributions in binary form must reproduce the above copyright notice, this list
       *       of conditions and the following disclaimer in the documentation and/or other materials
       *       provided with the distribution.
       *
       * THIS SOFTWARE IS PROVIDED BY GARY COURT ``AS IS'' AND ANY EXPRESS OR IMPLIED
       * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
       * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL GARY COURT OR
       * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
       * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
       * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
       * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
       * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
       * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
       *
       * The views and conclusions contained in the software and documentation are those of the
       * authors and should not be interpreted as representing official policies, either expressed
       * or implied, of Gary Court.
       */
      var SCHEMES = {};
      function pctEncChar(chr) {
        var c = chr.charCodeAt(0);
        var e = void 0;
        if (c < 16) e = "%0" + c.toString(16).toUpperCase();else if (c < 128) e = "%" + c.toString(16).toUpperCase();else if (c < 2048) e = "%" + (c >> 6 | 192).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();else e = "%" + (c >> 12 | 224).toString(16).toUpperCase() + "%" + (c >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();
        return e;
      }
      function pctDecChars(str) {
        var newStr = "";
        var i = 0;
        var il = str.length;
        while (i < il) {
          var c = parseInt(str.substr(i + 1, 2), 16);
          if (c < 128) {
            newStr += String.fromCharCode(c);
            i += 3;
          } else if (c >= 194 && c < 224) {
            if (il - i >= 6) {
              var c2 = parseInt(str.substr(i + 4, 2), 16);
              newStr += String.fromCharCode((c & 31) << 6 | c2 & 63);
            } else {
              newStr += str.substr(i, 6);
            }
            i += 6;
          } else if (c >= 224) {
            if (il - i >= 9) {
              var _c = parseInt(str.substr(i + 4, 2), 16);
              var c3 = parseInt(str.substr(i + 7, 2), 16);
              newStr += String.fromCharCode((c & 15) << 12 | (_c & 63) << 6 | c3 & 63);
            } else {
              newStr += str.substr(i, 9);
            }
            i += 9;
          } else {
            newStr += str.substr(i, 3);
            i += 3;
          }
        }
        return newStr;
      }
      function _normalizeComponentEncoding(components, protocol) {
        function decodeUnreserved(str) {
          var decStr = pctDecChars(str);
          return !decStr.match(protocol.UNRESERVED) ? str : decStr;
        }
        if (components.scheme) components.scheme = String(components.scheme).replace(protocol.PCT_ENCODED, decodeUnreserved).toLowerCase().replace(protocol.NOT_SCHEME, "");
        if (components.userinfo !== undefined) components.userinfo = String(components.userinfo).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_USERINFO, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.host !== undefined) components.host = String(components.host).replace(protocol.PCT_ENCODED, decodeUnreserved).toLowerCase().replace(protocol.NOT_HOST, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.path !== undefined) components.path = String(components.path).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(components.scheme ? protocol.NOT_PATH : protocol.NOT_PATH_NOSCHEME, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.query !== undefined) components.query = String(components.query).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_QUERY, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.fragment !== undefined) components.fragment = String(components.fragment).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_FRAGMENT, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        return components;
      }
      function _stripLeadingZeros(str) {
        return str.replace(/^0*(.*)/, "$1") || "0";
      }
      function _normalizeIPv4(host, protocol) {
        var matches = host.match(protocol.IPV4ADDRESS) || [];
        var _matches = slicedToArray(matches, 2),
          address = _matches[1];
        if (address) {
          return address.split(".").map(_stripLeadingZeros).join(".");
        } else {
          return host;
        }
      }
      function _normalizeIPv6(host, protocol) {
        var matches = host.match(protocol.IPV6ADDRESS) || [];
        var _matches2 = slicedToArray(matches, 3),
          address = _matches2[1],
          zone = _matches2[2];
        if (address) {
          var _address$toLowerCase$ = address.toLowerCase().split('::').reverse(),
            _address$toLowerCase$2 = slicedToArray(_address$toLowerCase$, 2),
            last = _address$toLowerCase$2[0],
            first = _address$toLowerCase$2[1];
          var firstFields = first ? first.split(":").map(_stripLeadingZeros) : [];
          var lastFields = last.split(":").map(_stripLeadingZeros);
          var isLastFieldIPv4Address = protocol.IPV4ADDRESS.test(lastFields[lastFields.length - 1]);
          var fieldCount = isLastFieldIPv4Address ? 7 : 8;
          var lastFieldsStart = lastFields.length - fieldCount;
          var fields = Array(fieldCount);
          for (var x = 0; x < fieldCount; ++x) {
            fields[x] = firstFields[x] || lastFields[lastFieldsStart + x] || '';
          }
          if (isLastFieldIPv4Address) {
            fields[fieldCount - 1] = _normalizeIPv4(fields[fieldCount - 1], protocol);
          }
          var allZeroFields = fields.reduce(function (acc, field, index) {
            if (!field || field === "0") {
              var lastLongest = acc[acc.length - 1];
              if (lastLongest && lastLongest.index + lastLongest.length === index) {
                lastLongest.length++;
              } else {
                acc.push({
                  index: index,
                  length: 1
                });
              }
            }
            return acc;
          }, []);
          var longestZeroFields = allZeroFields.sort(function (a, b) {
            return b.length - a.length;
          })[0];
          var newHost = void 0;
          if (longestZeroFields && longestZeroFields.length > 1) {
            var newFirst = fields.slice(0, longestZeroFields.index);
            var newLast = fields.slice(longestZeroFields.index + longestZeroFields.length);
            newHost = newFirst.join(":") + "::" + newLast.join(":");
          } else {
            newHost = fields.join(":");
          }
          if (zone) {
            newHost += "%" + zone;
          }
          return newHost;
        } else {
          return host;
        }
      }
      var URI_PARSE = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i;
      var NO_MATCH_IS_UNDEFINED = "".match(/(){0}/)[1] === undefined;
      function parse(uriString) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var components = {};
        var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
        if (options.reference === "suffix") uriString = (options.scheme ? options.scheme + ":" : "") + "//" + uriString;
        var matches = uriString.match(URI_PARSE);
        if (matches) {
          if (NO_MATCH_IS_UNDEFINED) {
            //store each component
            components.scheme = matches[1];
            components.userinfo = matches[3];
            components.host = matches[4];
            components.port = parseInt(matches[5], 10);
            components.path = matches[6] || "";
            components.query = matches[7];
            components.fragment = matches[8];
            //fix port number
            if (isNaN(components.port)) {
              components.port = matches[5];
            }
          } else {
            //IE FIX for improper RegExp matching
            //store each component
            components.scheme = matches[1] || undefined;
            components.userinfo = uriString.indexOf("@") !== -1 ? matches[3] : undefined;
            components.host = uriString.indexOf("//") !== -1 ? matches[4] : undefined;
            components.port = parseInt(matches[5], 10);
            components.path = matches[6] || "";
            components.query = uriString.indexOf("?") !== -1 ? matches[7] : undefined;
            components.fragment = uriString.indexOf("#") !== -1 ? matches[8] : undefined;
            //fix port number
            if (isNaN(components.port)) {
              components.port = uriString.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? matches[4] : undefined;
            }
          }
          if (components.host) {
            //normalize IP hosts
            components.host = _normalizeIPv6(_normalizeIPv4(components.host, protocol), protocol);
          }
          //determine reference type
          if (components.scheme === undefined && components.userinfo === undefined && components.host === undefined && components.port === undefined && !components.path && components.query === undefined) {
            components.reference = "same-document";
          } else if (components.scheme === undefined) {
            components.reference = "relative";
          } else if (components.fragment === undefined) {
            components.reference = "absolute";
          } else {
            components.reference = "uri";
          }
          //check for reference errors
          if (options.reference && options.reference !== "suffix" && options.reference !== components.reference) {
            components.error = components.error || "URI is not a " + options.reference + " reference.";
          }
          //find scheme handler
          var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
          //check if scheme can't handle IRIs
          if (!options.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport)) {
            //if host component is a domain name
            if (components.host && (options.domainHost || schemeHandler && schemeHandler.domainHost)) {
              //convert Unicode IDN -> ASCII IDN
              try {
                components.host = punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase());
              } catch (e) {
                components.error = components.error || "Host's domain name can not be converted to ASCII via punycode: " + e;
              }
            }
            //convert IRI -> URI
            _normalizeComponentEncoding(components, URI_PROTOCOL);
          } else {
            //normalize encodings
            _normalizeComponentEncoding(components, protocol);
          }
          //perform scheme specific parsing
          if (schemeHandler && schemeHandler.parse) {
            schemeHandler.parse(components, options);
          }
        } else {
          components.error = components.error || "URI can not be parsed.";
        }
        return components;
      }
      function _recomposeAuthority(components, options) {
        var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
        var uriTokens = [];
        if (components.userinfo !== undefined) {
          uriTokens.push(components.userinfo);
          uriTokens.push("@");
        }
        if (components.host !== undefined) {
          //normalize IP hosts, add brackets and escape zone separator for IPv6
          uriTokens.push(_normalizeIPv6(_normalizeIPv4(String(components.host), protocol), protocol).replace(protocol.IPV6ADDRESS, function (_, $1, $2) {
            return "[" + $1 + ($2 ? "%25" + $2 : "") + "]";
          }));
        }
        if (typeof components.port === "number" || typeof components.port === "string") {
          uriTokens.push(":");
          uriTokens.push(String(components.port));
        }
        return uriTokens.length ? uriTokens.join("") : undefined;
      }
      var RDS1 = /^\.\.?\//;
      var RDS2 = /^\/\.(\/|$)/;
      var RDS3 = /^\/\.\.(\/|$)/;
      var RDS5 = /^\/?(?:.|\n)*?(?=\/|$)/;
      function removeDotSegments(input) {
        var output = [];
        while (input.length) {
          if (input.match(RDS1)) {
            input = input.replace(RDS1, "");
          } else if (input.match(RDS2)) {
            input = input.replace(RDS2, "/");
          } else if (input.match(RDS3)) {
            input = input.replace(RDS3, "/");
            output.pop();
          } else if (input === "." || input === "..") {
            input = "";
          } else {
            var im = input.match(RDS5);
            if (im) {
              var s = im[0];
              input = input.slice(s.length);
              output.push(s);
            } else {
              throw new Error("Unexpected dot segment condition");
            }
          }
        }
        return output.join("");
      }
      function serialize(components) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var protocol = options.iri ? IRI_PROTOCOL : URI_PROTOCOL;
        var uriTokens = [];
        //find scheme handler
        var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
        //perform scheme specific serialization
        if (schemeHandler && schemeHandler.serialize) schemeHandler.serialize(components, options);
        if (components.host) {
          //if host component is an IPv6 address
          if (protocol.IPV6ADDRESS.test(components.host)) ;
          //TODO: normalize IPv6 address as per RFC 5952

          //if host component is a domain name
          else if (options.domainHost || schemeHandler && schemeHandler.domainHost) {
            //convert IDN via punycode
            try {
              components.host = !options.iri ? punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase()) : punycode.toUnicode(components.host);
            } catch (e) {
              components.error = components.error || "Host's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
            }
          }
        }
        //normalize encoding
        _normalizeComponentEncoding(components, protocol);
        if (options.reference !== "suffix" && components.scheme) {
          uriTokens.push(components.scheme);
          uriTokens.push(":");
        }
        var authority = _recomposeAuthority(components, options);
        if (authority !== undefined) {
          if (options.reference !== "suffix") {
            uriTokens.push("//");
          }
          uriTokens.push(authority);
          if (components.path && components.path.charAt(0) !== "/") {
            uriTokens.push("/");
          }
        }
        if (components.path !== undefined) {
          var s = components.path;
          if (!options.absolutePath && (!schemeHandler || !schemeHandler.absolutePath)) {
            s = removeDotSegments(s);
          }
          if (authority === undefined) {
            s = s.replace(/^\/\//, "/%2F"); //don't allow the path to start with "//"
          }
          uriTokens.push(s);
        }
        if (components.query !== undefined) {
          uriTokens.push("?");
          uriTokens.push(components.query);
        }
        if (components.fragment !== undefined) {
          uriTokens.push("#");
          uriTokens.push(components.fragment);
        }
        return uriTokens.join(""); //merge tokens into a string
      }
      function resolveComponents(base, relative) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var skipNormalization = arguments[3];
        var target = {};
        if (!skipNormalization) {
          base = parse(serialize(base, options), options); //normalize base components
          relative = parse(serialize(relative, options), options); //normalize relative components
        }
        options = options || {};
        if (!options.tolerant && relative.scheme) {
          target.scheme = relative.scheme;
          //target.authority = relative.authority;
          target.userinfo = relative.userinfo;
          target.host = relative.host;
          target.port = relative.port;
          target.path = removeDotSegments(relative.path || "");
          target.query = relative.query;
        } else {
          if (relative.userinfo !== undefined || relative.host !== undefined || relative.port !== undefined) {
            //target.authority = relative.authority;
            target.userinfo = relative.userinfo;
            target.host = relative.host;
            target.port = relative.port;
            target.path = removeDotSegments(relative.path || "");
            target.query = relative.query;
          } else {
            if (!relative.path) {
              target.path = base.path;
              if (relative.query !== undefined) {
                target.query = relative.query;
              } else {
                target.query = base.query;
              }
            } else {
              if (relative.path.charAt(0) === "/") {
                target.path = removeDotSegments(relative.path);
              } else {
                if ((base.userinfo !== undefined || base.host !== undefined || base.port !== undefined) && !base.path) {
                  target.path = "/" + relative.path;
                } else if (!base.path) {
                  target.path = relative.path;
                } else {
                  target.path = base.path.slice(0, base.path.lastIndexOf("/") + 1) + relative.path;
                }
                target.path = removeDotSegments(target.path);
              }
              target.query = relative.query;
            }
            //target.authority = base.authority;
            target.userinfo = base.userinfo;
            target.host = base.host;
            target.port = base.port;
          }
          target.scheme = base.scheme;
        }
        target.fragment = relative.fragment;
        return target;
      }
      function resolve(baseURI, relativeURI, options) {
        var schemelessOptions = assign({
          scheme: 'null'
        }, options);
        return serialize(resolveComponents(parse(baseURI, schemelessOptions), parse(relativeURI, schemelessOptions), schemelessOptions, true), schemelessOptions);
      }
      function normalize(uri, options) {
        if (typeof uri === "string") {
          uri = serialize(parse(uri, options), options);
        } else if (typeOf(uri) === "object") {
          uri = parse(serialize(uri, options), options);
        }
        return uri;
      }
      function equal(uriA, uriB, options) {
        if (typeof uriA === "string") {
          uriA = serialize(parse(uriA, options), options);
        } else if (typeOf(uriA) === "object") {
          uriA = serialize(uriA, options);
        }
        if (typeof uriB === "string") {
          uriB = serialize(parse(uriB, options), options);
        } else if (typeOf(uriB) === "object") {
          uriB = serialize(uriB, options);
        }
        return uriA === uriB;
      }
      function escapeComponent(str, options) {
        return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.ESCAPE : IRI_PROTOCOL.ESCAPE, pctEncChar);
      }
      function unescapeComponent(str, options) {
        return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.PCT_ENCODED : IRI_PROTOCOL.PCT_ENCODED, pctDecChars);
      }
      var handler = {
        scheme: "http",
        domainHost: true,
        parse: function parse(components, options) {
          //report missing host
          if (!components.host) {
            components.error = components.error || "HTTP URIs must have a host.";
          }
          return components;
        },
        serialize: function serialize(components, options) {
          var secure = String(components.scheme).toLowerCase() === "https";
          //normalize the default port
          if (components.port === (secure ? 443 : 80) || components.port === "") {
            components.port = undefined;
          }
          //normalize the empty path
          if (!components.path) {
            components.path = "/";
          }
          //NOTE: We do not parse query strings for HTTP URIs
          //as WWW Form Url Encoded query strings are part of the HTML4+ spec,
          //and not the HTTP spec.
          return components;
        }
      };
      var handler$1 = {
        scheme: "https",
        domainHost: handler.domainHost,
        parse: handler.parse,
        serialize: handler.serialize
      };
      function isSecure(wsComponents) {
        return typeof wsComponents.secure === 'boolean' ? wsComponents.secure : String(wsComponents.scheme).toLowerCase() === "wss";
      }
      //RFC 6455
      var handler$2 = {
        scheme: "ws",
        domainHost: true,
        parse: function parse(components, options) {
          var wsComponents = components;
          //indicate if the secure flag is set
          wsComponents.secure = isSecure(wsComponents);
          //construct resouce name
          wsComponents.resourceName = (wsComponents.path || '/') + (wsComponents.query ? '?' + wsComponents.query : '');
          wsComponents.path = undefined;
          wsComponents.query = undefined;
          return wsComponents;
        },
        serialize: function serialize(wsComponents, options) {
          //normalize the default port
          if (wsComponents.port === (isSecure(wsComponents) ? 443 : 80) || wsComponents.port === "") {
            wsComponents.port = undefined;
          }
          //ensure scheme matches secure flag
          if (typeof wsComponents.secure === 'boolean') {
            wsComponents.scheme = wsComponents.secure ? 'wss' : 'ws';
            wsComponents.secure = undefined;
          }
          //reconstruct path from resource name
          if (wsComponents.resourceName) {
            var _wsComponents$resourc = wsComponents.resourceName.split('?'),
              _wsComponents$resourc2 = slicedToArray(_wsComponents$resourc, 2),
              path = _wsComponents$resourc2[0],
              query = _wsComponents$resourc2[1];
            wsComponents.path = path && path !== '/' ? path : undefined;
            wsComponents.query = query;
            wsComponents.resourceName = undefined;
          }
          //forbid fragment component
          wsComponents.fragment = undefined;
          return wsComponents;
        }
      };
      var handler$3 = {
        scheme: "wss",
        domainHost: handler$2.domainHost,
        parse: handler$2.parse,
        serialize: handler$2.serialize
      };
      var O = {};
      //RFC 3986
      var UNRESERVED$$ = "[A-Za-z0-9\\-\\.\\_\\~" + ("\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF" ) + "]";
      var HEXDIG$$ = "[0-9A-Fa-f]"; //case-insensitive
      var PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$)); //expanded
      //RFC 5322, except these symbols as per RFC 6068: @ : / ? # [ ] & ; =
      //const ATEXT$$ = "[A-Za-z0-9\\!\\#\\$\\%\\&\\'\\*\\+\\-\\/\\=\\?\\^\\_\\`\\{\\|\\}\\~]";
      //const WSP$$ = "[\\x20\\x09]";
      //const OBS_QTEXT$$ = "[\\x01-\\x08\\x0B\\x0C\\x0E-\\x1F\\x7F]";  //(%d1-8 / %d11-12 / %d14-31 / %d127)
      //const QTEXT$$ = merge("[\\x21\\x23-\\x5B\\x5D-\\x7E]", OBS_QTEXT$$);  //%d33 / %d35-91 / %d93-126 / obs-qtext
      //const VCHAR$$ = "[\\x21-\\x7E]";
      //const WSP$$ = "[\\x20\\x09]";
      //const OBS_QP$ = subexp("\\\\" + merge("[\\x00\\x0D\\x0A]", OBS_QTEXT$$));  //%d0 / CR / LF / obs-qtext
      //const FWS$ = subexp(subexp(WSP$$ + "*" + "\\x0D\\x0A") + "?" + WSP$$ + "+");
      //const QUOTED_PAIR$ = subexp(subexp("\\\\" + subexp(VCHAR$$ + "|" + WSP$$)) + "|" + OBS_QP$);
      //const QUOTED_STRING$ = subexp('\\"' + subexp(FWS$ + "?" + QCONTENT$) + "*" + FWS$ + "?" + '\\"');
      var ATEXT$$ = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]";
      var QTEXT$$ = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]";
      var VCHAR$$ = merge(QTEXT$$, "[\\\"\\\\]");
      var SOME_DELIMS$$ = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]";
      var UNRESERVED = new RegExp(UNRESERVED$$, "g");
      var PCT_ENCODED = new RegExp(PCT_ENCODED$, "g");
      var NOT_LOCAL_PART = new RegExp(merge("[^]", ATEXT$$, "[\\.]", '[\\"]', VCHAR$$), "g");
      var NOT_HFNAME = new RegExp(merge("[^]", UNRESERVED$$, SOME_DELIMS$$), "g");
      var NOT_HFVALUE = NOT_HFNAME;
      function decodeUnreserved(str) {
        var decStr = pctDecChars(str);
        return !decStr.match(UNRESERVED) ? str : decStr;
      }
      var handler$4 = {
        scheme: "mailto",
        parse: function parse$$1(components, options) {
          var mailtoComponents = components;
          var to = mailtoComponents.to = mailtoComponents.path ? mailtoComponents.path.split(",") : [];
          mailtoComponents.path = undefined;
          if (mailtoComponents.query) {
            var unknownHeaders = false;
            var headers = {};
            var hfields = mailtoComponents.query.split("&");
            for (var x = 0, xl = hfields.length; x < xl; ++x) {
              var hfield = hfields[x].split("=");
              switch (hfield[0]) {
                case "to":
                  var toAddrs = hfield[1].split(",");
                  for (var _x = 0, _xl = toAddrs.length; _x < _xl; ++_x) {
                    to.push(toAddrs[_x]);
                  }
                  break;
                case "subject":
                  mailtoComponents.subject = unescapeComponent(hfield[1], options);
                  break;
                case "body":
                  mailtoComponents.body = unescapeComponent(hfield[1], options);
                  break;
                default:
                  unknownHeaders = true;
                  headers[unescapeComponent(hfield[0], options)] = unescapeComponent(hfield[1], options);
                  break;
              }
            }
            if (unknownHeaders) mailtoComponents.headers = headers;
          }
          mailtoComponents.query = undefined;
          for (var _x2 = 0, _xl2 = to.length; _x2 < _xl2; ++_x2) {
            var addr = to[_x2].split("@");
            addr[0] = unescapeComponent(addr[0]);
            if (!options.unicodeSupport) {
              //convert Unicode IDN -> ASCII IDN
              try {
                addr[1] = punycode.toASCII(unescapeComponent(addr[1], options).toLowerCase());
              } catch (e) {
                mailtoComponents.error = mailtoComponents.error || "Email address's domain name can not be converted to ASCII via punycode: " + e;
              }
            } else {
              addr[1] = unescapeComponent(addr[1], options).toLowerCase();
            }
            to[_x2] = addr.join("@");
          }
          return mailtoComponents;
        },
        serialize: function serialize$$1(mailtoComponents, options) {
          var components = mailtoComponents;
          var to = toArray(mailtoComponents.to);
          if (to) {
            for (var x = 0, xl = to.length; x < xl; ++x) {
              var toAddr = String(to[x]);
              var atIdx = toAddr.lastIndexOf("@");
              var localPart = toAddr.slice(0, atIdx).replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_LOCAL_PART, pctEncChar);
              var domain = toAddr.slice(atIdx + 1);
              //convert IDN via punycode
              try {
                domain = !options.iri ? punycode.toASCII(unescapeComponent(domain, options).toLowerCase()) : punycode.toUnicode(domain);
              } catch (e) {
                components.error = components.error || "Email address's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
              }
              to[x] = localPart + "@" + domain;
            }
            components.path = to.join(",");
          }
          var headers = mailtoComponents.headers = mailtoComponents.headers || {};
          if (mailtoComponents.subject) headers["subject"] = mailtoComponents.subject;
          if (mailtoComponents.body) headers["body"] = mailtoComponents.body;
          var fields = [];
          for (var name in headers) {
            if (headers[name] !== O[name]) {
              fields.push(name.replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFNAME, pctEncChar) + "=" + headers[name].replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFVALUE, pctEncChar));
            }
          }
          if (fields.length) {
            components.query = fields.join("&");
          }
          return components;
        }
      };
      var URN_PARSE = /^([^\:]+)\:(.*)/;
      //RFC 2141
      var handler$5 = {
        scheme: "urn",
        parse: function parse$$1(components, options) {
          var matches = components.path && components.path.match(URN_PARSE);
          var urnComponents = components;
          if (matches) {
            var scheme = options.scheme || urnComponents.scheme || "urn";
            var nid = matches[1].toLowerCase();
            var nss = matches[2];
            var urnScheme = scheme + ":" + (options.nid || nid);
            var schemeHandler = SCHEMES[urnScheme];
            urnComponents.nid = nid;
            urnComponents.nss = nss;
            urnComponents.path = undefined;
            if (schemeHandler) {
              urnComponents = schemeHandler.parse(urnComponents, options);
            }
          } else {
            urnComponents.error = urnComponents.error || "URN can not be parsed.";
          }
          return urnComponents;
        },
        serialize: function serialize$$1(urnComponents, options) {
          var scheme = options.scheme || urnComponents.scheme || "urn";
          var nid = urnComponents.nid;
          var urnScheme = scheme + ":" + (options.nid || nid);
          var schemeHandler = SCHEMES[urnScheme];
          if (schemeHandler) {
            urnComponents = schemeHandler.serialize(urnComponents, options);
          }
          var uriComponents = urnComponents;
          var nss = urnComponents.nss;
          uriComponents.path = (nid || options.nid) + ":" + nss;
          return uriComponents;
        }
      };
      var UUID = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/;
      //RFC 4122
      var handler$6 = {
        scheme: "urn:uuid",
        parse: function parse(urnComponents, options) {
          var uuidComponents = urnComponents;
          uuidComponents.uuid = uuidComponents.nss;
          uuidComponents.nss = undefined;
          if (!options.tolerant && (!uuidComponents.uuid || !uuidComponents.uuid.match(UUID))) {
            uuidComponents.error = uuidComponents.error || "UUID is not valid.";
          }
          return uuidComponents;
        },
        serialize: function serialize(uuidComponents, options) {
          var urnComponents = uuidComponents;
          //normalize UUID
          urnComponents.nss = (uuidComponents.uuid || "").toLowerCase();
          return urnComponents;
        }
      };
      SCHEMES[handler.scheme] = handler;
      SCHEMES[handler$1.scheme] = handler$1;
      SCHEMES[handler$2.scheme] = handler$2;
      SCHEMES[handler$3.scheme] = handler$3;
      SCHEMES[handler$4.scheme] = handler$4;
      SCHEMES[handler$5.scheme] = handler$5;
      SCHEMES[handler$6.scheme] = handler$6;
      exports.SCHEMES = SCHEMES;
      exports.pctEncChar = pctEncChar;
      exports.pctDecChars = pctDecChars;
      exports.parse = parse;
      exports.removeDotSegments = removeDotSegments;
      exports.serialize = serialize;
      exports.resolveComponents = resolveComponents;
      exports.resolve = resolve;
      exports.normalize = normalize;
      exports.equal = equal;
      exports.escapeComponent = escapeComponent;
      exports.unescapeComponent = unescapeComponent;
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
    });
  })(uri_all, uri_all.exports);
  var uri_allExports = uri_all.exports;

  Object.defineProperty(uri$1, "__esModule", {
    value: true
  });
  var uri = uri_allExports;
  uri.code = 'require("ajv/dist/runtime/uri").default';
  uri$1["default"] = uri;

  (function (exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = void 0;
    var validate_1 = requireValidate();
    Object.defineProperty(exports, "KeywordCxt", {
      enumerable: true,
      get: function get() {
        return validate_1.KeywordCxt;
      }
    });
    var codegen_1 = codegen;
    Object.defineProperty(exports, "_", {
      enumerable: true,
      get: function get() {
        return codegen_1._;
      }
    });
    Object.defineProperty(exports, "str", {
      enumerable: true,
      get: function get() {
        return codegen_1.str;
      }
    });
    Object.defineProperty(exports, "stringify", {
      enumerable: true,
      get: function get() {
        return codegen_1.stringify;
      }
    });
    Object.defineProperty(exports, "nil", {
      enumerable: true,
      get: function get() {
        return codegen_1.nil;
      }
    });
    Object.defineProperty(exports, "Name", {
      enumerable: true,
      get: function get() {
        return codegen_1.Name;
      }
    });
    Object.defineProperty(exports, "CodeGen", {
      enumerable: true,
      get: function get() {
        return codegen_1.CodeGen;
      }
    });
    var validation_error_1 = requireValidation_error();
    var ref_error_1 = requireRef_error();
    var rules_1 = rules;
    var compile_1 = compile;
    var codegen_2 = codegen;
    var resolve_1 = resolve$1;
    var dataType_1 = dataType;
    var util_1 = util;
    var $dataRefSchema = require$$9;
    var uri_1 = uri$1;
    var defaultRegExp = function defaultRegExp(str, flags) {
      return new RegExp(str, flags);
    };
    defaultRegExp.code = "new RegExp";
    var META_IGNORE_OPTIONS = ["removeAdditional", "useDefaults", "coerceTypes"];
    var EXT_SCOPE_NAMES = new Set(["validate", "serialize", "parse", "wrapper", "root", "schema", "keyword", "pattern", "formats", "validate$data", "func", "obj", "Error"]);
    var removedOptions = {
      errorDataPath: "",
      format: "`validateFormats: false` can be used instead.",
      nullable: '"nullable" keyword is supported by default.',
      jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
      extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
      missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
      processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
      sourceCode: "Use option `code: {source: true}`",
      strictDefaults: "It is default now, see option `strict`.",
      strictKeywords: "It is default now, see option `strict`.",
      uniqueItems: '"uniqueItems" keyword is always validated.',
      unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
      cache: "Map is used as cache, schema object as key.",
      serialize: "Map is used as cache, schema object as key.",
      ajvErrors: "It is default now."
    };
    var deprecatedOptions = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    };
    var MAX_EXPRESSION = 200;
    // eslint-disable-next-line complexity
    function requiredOptions(o) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
      var s = o.strict;
      var _optz = (_a = o.code) === null || _a === void 0 ? void 0 : _a.optimize;
      var optimize = _optz === true || _optz === undefined ? 1 : _optz || 0;
      var regExp = (_c = (_b = o.code) === null || _b === void 0 ? void 0 : _b.regExp) !== null && _c !== void 0 ? _c : defaultRegExp;
      var uriResolver = (_d = o.uriResolver) !== null && _d !== void 0 ? _d : uri_1["default"];
      return {
        strictSchema: (_f = (_e = o.strictSchema) !== null && _e !== void 0 ? _e : s) !== null && _f !== void 0 ? _f : true,
        strictNumbers: (_h = (_g = o.strictNumbers) !== null && _g !== void 0 ? _g : s) !== null && _h !== void 0 ? _h : true,
        strictTypes: (_k = (_j = o.strictTypes) !== null && _j !== void 0 ? _j : s) !== null && _k !== void 0 ? _k : "log",
        strictTuples: (_m = (_l = o.strictTuples) !== null && _l !== void 0 ? _l : s) !== null && _m !== void 0 ? _m : "log",
        strictRequired: (_p = (_o = o.strictRequired) !== null && _o !== void 0 ? _o : s) !== null && _p !== void 0 ? _p : false,
        code: o.code ? _objectSpread2(_objectSpread2({}, o.code), {}, {
          optimize: optimize,
          regExp: regExp
        }) : {
          optimize: optimize,
          regExp: regExp
        },
        loopRequired: (_q = o.loopRequired) !== null && _q !== void 0 ? _q : MAX_EXPRESSION,
        loopEnum: (_r = o.loopEnum) !== null && _r !== void 0 ? _r : MAX_EXPRESSION,
        meta: (_s = o.meta) !== null && _s !== void 0 ? _s : true,
        messages: (_t = o.messages) !== null && _t !== void 0 ? _t : true,
        inlineRefs: (_u = o.inlineRefs) !== null && _u !== void 0 ? _u : true,
        schemaId: (_v = o.schemaId) !== null && _v !== void 0 ? _v : "$id",
        addUsedSchema: (_w = o.addUsedSchema) !== null && _w !== void 0 ? _w : true,
        validateSchema: (_x = o.validateSchema) !== null && _x !== void 0 ? _x : true,
        validateFormats: (_y = o.validateFormats) !== null && _y !== void 0 ? _y : true,
        unicodeRegExp: (_z = o.unicodeRegExp) !== null && _z !== void 0 ? _z : true,
        int32range: (_0 = o.int32range) !== null && _0 !== void 0 ? _0 : true,
        uriResolver: uriResolver
      };
    }
    var Ajv = /*#__PURE__*/function () {
      function Ajv() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Ajv);
        this.schemas = {};
        this.refs = {};
        this.formats = {};
        this._compilations = new Set();
        this._loading = {};
        this._cache = new Map();
        opts = this.opts = _objectSpread2(_objectSpread2({}, opts), requiredOptions(opts));
        var _this$opts$code = this.opts.code,
          es5 = _this$opts$code.es5,
          lines = _this$opts$code.lines;
        this.scope = new codegen_2.ValueScope({
          scope: {},
          prefixes: EXT_SCOPE_NAMES,
          es5: es5,
          lines: lines
        });
        this.logger = getLogger(opts.logger);
        var formatOpt = opts.validateFormats;
        opts.validateFormats = false;
        this.RULES = (0, rules_1.getRules)();
        checkOptions.call(this, removedOptions, opts, "NOT SUPPORTED");
        checkOptions.call(this, deprecatedOptions, opts, "DEPRECATED", "warn");
        this._metaOpts = getMetaSchemaOptions.call(this);
        if (opts.formats) addInitialFormats.call(this);
        this._addVocabularies();
        this._addDefaultMetaSchema();
        if (opts.keywords) addInitialKeywords.call(this, opts.keywords);
        if (_typeof(opts.meta) == "object") this.addMetaSchema(opts.meta);
        addInitialSchemas.call(this);
        opts.validateFormats = formatOpt;
      }
      return _createClass(Ajv, [{
        key: "_addVocabularies",
        value: function _addVocabularies() {
          this.addKeyword("$async");
        }
      }, {
        key: "_addDefaultMetaSchema",
        value: function _addDefaultMetaSchema() {
          var _this$opts = this.opts,
            $data = _this$opts.$data,
            meta = _this$opts.meta,
            schemaId = _this$opts.schemaId;
          var _dataRefSchema = $dataRefSchema;
          if (schemaId === "id") {
            _dataRefSchema = _objectSpread2({}, $dataRefSchema);
            _dataRefSchema.id = _dataRefSchema.$id;
            delete _dataRefSchema.$id;
          }
          if (meta && $data) this.addMetaSchema(_dataRefSchema, _dataRefSchema[schemaId], false);
        }
      }, {
        key: "defaultMeta",
        value: function defaultMeta() {
          var _this$opts2 = this.opts,
            meta = _this$opts2.meta,
            schemaId = _this$opts2.schemaId;
          return this.opts.defaultMeta = _typeof(meta) == "object" ? meta[schemaId] || meta : undefined;
        }
      }, {
        key: "validate",
        value: function validate(schemaKeyRef,
        // key, ref or schema object
        data // to be validated
        ) {
          var v;
          if (typeof schemaKeyRef == "string") {
            v = this.getSchema(schemaKeyRef);
            if (!v) throw new Error("no schema with key or ref \"".concat(schemaKeyRef, "\""));
          } else {
            v = this.compile(schemaKeyRef);
          }
          var valid = v(data);
          if (!("$async" in v)) this.errors = v.errors;
          return valid;
        }
      }, {
        key: "compile",
        value: function compile(schema, _meta) {
          var sch = this._addSchema(schema, _meta);
          return sch.validate || this._compileSchemaEnv(sch);
        }
      }, {
        key: "compileAsync",
        value: function compileAsync(schema, meta) {
          if (typeof this.opts.loadSchema != "function") {
            throw new Error("options.loadSchema should be a function");
          }
          var loadSchema = this.opts.loadSchema;
          return runCompileAsync.call(this, schema, meta);
          function runCompileAsync(_x2, _x3) {
            return _runCompileAsync.apply(this, arguments);
          }
          function _runCompileAsync() {
            _runCompileAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_schema, _meta) {
              var sch;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return loadMetaSchema.call(this, _schema.$schema);
                  case 2:
                    sch = this._addSchema(_schema, _meta);
                    return _context.abrupt("return", sch.validate || _compileAsync.call(this, sch));
                  case 4:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
            return _runCompileAsync.apply(this, arguments);
          }
          function loadMetaSchema(_x4) {
            return _loadMetaSchema.apply(this, arguments);
          }
          function _loadMetaSchema() {
            _loadMetaSchema = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2($ref) {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!($ref && !this.getSchema($ref))) {
                      _context2.next = 3;
                      break;
                    }
                    _context2.next = 3;
                    return runCompileAsync.call(this, {
                      $ref: $ref
                    }, true);
                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
            return _loadMetaSchema.apply(this, arguments);
          }
          function _compileAsync(_x5) {
            return _compileAsync2.apply(this, arguments);
          }
          function _compileAsync2() {
            _compileAsync2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(sch) {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    return _context3.abrupt("return", this._compileSchemaEnv(sch));
                  case 4:
                    _context3.prev = 4;
                    _context3.t0 = _context3["catch"](0);
                    if (_context3.t0 instanceof ref_error_1["default"]) {
                      _context3.next = 8;
                      break;
                    }
                    throw _context3.t0;
                  case 8:
                    checkLoaded.call(this, _context3.t0);
                    _context3.next = 11;
                    return loadMissingSchema.call(this, _context3.t0.missingSchema);
                  case 11:
                    return _context3.abrupt("return", _compileAsync.call(this, sch));
                  case 12:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this, [[0, 4]]);
            }));
            return _compileAsync2.apply(this, arguments);
          }
          function checkLoaded(_ref) {
            var ref = _ref.missingSchema,
              missingRef = _ref.missingRef;
            if (this.refs[ref]) {
              throw new Error("AnySchema ".concat(ref, " is loaded but ").concat(missingRef, " cannot be resolved"));
            }
          }
          function loadMissingSchema(_x6) {
            return _loadMissingSchema.apply(this, arguments);
          }
          function _loadMissingSchema() {
            _loadMissingSchema = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(ref) {
              var _schema;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return _loadSchema.call(this, ref);
                  case 2:
                    _schema = _context4.sent;
                    if (this.refs[ref]) {
                      _context4.next = 6;
                      break;
                    }
                    _context4.next = 6;
                    return loadMetaSchema.call(this, _schema.$schema);
                  case 6:
                    if (!this.refs[ref]) this.addSchema(_schema, ref, meta);
                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
            return _loadMissingSchema.apply(this, arguments);
          }
          function _loadSchema(_x7) {
            return _loadSchema2.apply(this, arguments);
          }
          function _loadSchema2() {
            _loadSchema2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(ref) {
              var p;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    p = this._loading[ref];
                    if (!p) {
                      _context5.next = 3;
                      break;
                    }
                    return _context5.abrupt("return", p);
                  case 3:
                    _context5.prev = 3;
                    _context5.next = 6;
                    return this._loading[ref] = loadSchema(ref);
                  case 6:
                    return _context5.abrupt("return", _context5.sent);
                  case 7:
                    _context5.prev = 7;
                    delete this._loading[ref];
                    return _context5.finish(7);
                  case 10:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this, [[3,, 7, 10]]);
            }));
            return _loadSchema2.apply(this, arguments);
          }
        }
        // Adds schema to the instance
      }, {
        key: "addSchema",
        value: function addSchema(schema,
        // If array is passed, `key` will be ignored
        key,
        // Optional schema key. Can be passed to `validate` method instead of schema object or id/ref. One schema per instance can have empty `id` and `key`.
        _meta) {
          var _validateSchema = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.opts.validateSchema;
          if (Array.isArray(schema)) {
            var _iterator = _createForOfIteratorHelper(schema),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var sch = _step.value;
                this.addSchema(sch, undefined, _meta, _validateSchema);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            return this;
          }
          var id;
          if (_typeof(schema) === "object") {
            var schemaId = this.opts.schemaId;
            id = schema[schemaId];
            if (id !== undefined && typeof id != "string") {
              throw new Error("schema ".concat(schemaId, " must be string"));
            }
          }
          key = (0, resolve_1.normalizeId)(key || id);
          this._checkUnique(key);
          this.schemas[key] = this._addSchema(schema, _meta, key, _validateSchema, true);
          return this;
        }
        // Add schema that will be used to validate other schemas
        // options in META_IGNORE_OPTIONS are alway set to false
      }, {
        key: "addMetaSchema",
        value: function addMetaSchema(schema, key) {
          var _validateSchema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.opts.validateSchema;
          this.addSchema(schema, key, true, _validateSchema);
          return this;
        }
        //  Validate schema against its meta-schema
      }, {
        key: "validateSchema",
        value: function validateSchema(schema, throwOrLogError) {
          if (typeof schema == "boolean") return true;
          var $schema;
          $schema = schema.$schema;
          if ($schema !== undefined && typeof $schema != "string") {
            throw new Error("$schema must be a string");
          }
          $schema = $schema || this.opts.defaultMeta || this.defaultMeta();
          if (!$schema) {
            this.logger.warn("meta-schema not available");
            this.errors = null;
            return true;
          }
          var valid = this.validate($schema, schema);
          if (!valid && throwOrLogError) {
            var message = "schema is invalid: " + this.errorsText();
            if (this.opts.validateSchema === "log") this.logger.error(message);else throw new Error(message);
          }
          return valid;
        }
        // Get compiled schema by `key` or `ref`.
        // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      }, {
        key: "getSchema",
        value: function getSchema(keyRef) {
          var sch;
          while (typeof (sch = getSchEnv.call(this, keyRef)) == "string") keyRef = sch;
          if (sch === undefined) {
            var schemaId = this.opts.schemaId;
            var root = new compile_1.SchemaEnv({
              schema: {},
              schemaId: schemaId
            });
            sch = compile_1.resolveSchema.call(this, root, keyRef);
            if (!sch) return;
            this.refs[keyRef] = sch;
          }
          return sch.validate || this._compileSchemaEnv(sch);
        }
        // Remove cached schema(s).
        // If no parameter is passed all schemas but meta-schemas are removed.
        // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
        // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      }, {
        key: "removeSchema",
        value: function removeSchema(schemaKeyRef) {
          if (schemaKeyRef instanceof RegExp) {
            this._removeAllSchemas(this.schemas, schemaKeyRef);
            this._removeAllSchemas(this.refs, schemaKeyRef);
            return this;
          }
          switch (_typeof(schemaKeyRef)) {
            case "undefined":
              this._removeAllSchemas(this.schemas);
              this._removeAllSchemas(this.refs);
              this._cache.clear();
              return this;
            case "string":
              {
                var sch = getSchEnv.call(this, schemaKeyRef);
                if (_typeof(sch) == "object") this._cache["delete"](sch.schema);
                delete this.schemas[schemaKeyRef];
                delete this.refs[schemaKeyRef];
                return this;
              }
            case "object":
              {
                var cacheKey = schemaKeyRef;
                this._cache["delete"](cacheKey);
                var id = schemaKeyRef[this.opts.schemaId];
                if (id) {
                  id = (0, resolve_1.normalizeId)(id);
                  delete this.schemas[id];
                  delete this.refs[id];
                }
                return this;
              }
            default:
              throw new Error("ajv.removeSchema: invalid parameter");
          }
        }
        // add "vocabulary" - a collection of keywords
      }, {
        key: "addVocabulary",
        value: function addVocabulary(definitions) {
          var _iterator2 = _createForOfIteratorHelper(definitions),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var def = _step2.value;
              this.addKeyword(def);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          return this;
        }
      }, {
        key: "addKeyword",
        value: function addKeyword(kwdOrDef, def // deprecated
        ) {
          var _this = this;
          var keyword;
          if (typeof kwdOrDef == "string") {
            keyword = kwdOrDef;
            if (_typeof(def) == "object") {
              this.logger.warn("these parameters are deprecated, see docs for addKeyword");
              def.keyword = keyword;
            }
          } else if (_typeof(kwdOrDef) == "object" && def === undefined) {
            def = kwdOrDef;
            keyword = def.keyword;
            if (Array.isArray(keyword) && !keyword.length) {
              throw new Error("addKeywords: keyword must be string or non-empty array");
            }
          } else {
            throw new Error("invalid addKeywords parameters");
          }
          checkKeyword.call(this, keyword, def);
          if (!def) {
            (0, util_1.eachItem)(keyword, function (kwd) {
              return addRule.call(_this, kwd);
            });
            return this;
          }
          keywordMetaschema.call(this, def);
          var definition = _objectSpread2(_objectSpread2({}, def), {}, {
            type: (0, dataType_1.getJSONTypes)(def.type),
            schemaType: (0, dataType_1.getJSONTypes)(def.schemaType)
          });
          (0, util_1.eachItem)(keyword, definition.type.length === 0 ? function (k) {
            return addRule.call(_this, k, definition);
          } : function (k) {
            return definition.type.forEach(function (t) {
              return addRule.call(_this, k, definition, t);
            });
          });
          return this;
        }
      }, {
        key: "getKeyword",
        value: function getKeyword(keyword) {
          var rule = this.RULES.all[keyword];
          return _typeof(rule) == "object" ? rule.definition : !!rule;
        }
        // Remove keyword
      }, {
        key: "removeKeyword",
        value: function removeKeyword(keyword) {
          // TODO return type should be Ajv
          var RULES = this.RULES;
          delete RULES.keywords[keyword];
          delete RULES.all[keyword];
          var _iterator3 = _createForOfIteratorHelper(RULES.rules),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var group = _step3.value;
              var i = group.rules.findIndex(function (rule) {
                return rule.keyword === keyword;
              });
              if (i >= 0) group.rules.splice(i, 1);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          return this;
        }
        // Add format
      }, {
        key: "addFormat",
        value: function addFormat(name, format) {
          if (typeof format == "string") format = new RegExp(format);
          this.formats[name] = format;
          return this;
        }
      }, {
        key: "errorsText",
        value: function errorsText() {
          var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.errors;
          var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref2$separator = _ref2.separator,
            separator = _ref2$separator === void 0 ? ", " : _ref2$separator,
            _ref2$dataVar = _ref2.dataVar,
            dataVar = _ref2$dataVar === void 0 ? "data" : _ref2$dataVar;
          if (!errors || errors.length === 0) return "No errors";
          return errors.map(function (e) {
            return "".concat(dataVar).concat(e.instancePath, " ").concat(e.message);
          }).reduce(function (text, msg) {
            return text + separator + msg;
          });
        }
      }, {
        key: "$dataMetaSchema",
        value: function $dataMetaSchema(metaSchema, keywordsJsonPointers) {
          var rules = this.RULES.all;
          metaSchema = JSON.parse(JSON.stringify(metaSchema));
          var _iterator4 = _createForOfIteratorHelper(keywordsJsonPointers),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var jsonPointer = _step4.value;
              var segments = jsonPointer.split("/").slice(1); // first segment is an empty string
              var keywords = metaSchema;
              var _iterator5 = _createForOfIteratorHelper(segments),
                _step5;
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var seg = _step5.value;
                  keywords = keywords[seg];
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
              for (var key in rules) {
                var rule = rules[key];
                if (_typeof(rule) != "object") continue;
                var $data = rule.definition.$data;
                var schema = keywords[key];
                if ($data && schema) keywords[key] = schemaOrData(schema);
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          return metaSchema;
        }
      }, {
        key: "_removeAllSchemas",
        value: function _removeAllSchemas(schemas, regex) {
          for (var keyRef in schemas) {
            var sch = schemas[keyRef];
            if (!regex || regex.test(keyRef)) {
              if (typeof sch == "string") {
                delete schemas[keyRef];
              } else if (sch && !sch.meta) {
                this._cache["delete"](sch.schema);
                delete schemas[keyRef];
              }
            }
          }
        }
      }, {
        key: "_addSchema",
        value: function _addSchema(schema, meta, baseId) {
          var validateSchema = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.opts.validateSchema;
          var addSchema = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.opts.addUsedSchema;
          var id;
          var schemaId = this.opts.schemaId;
          if (_typeof(schema) == "object") {
            id = schema[schemaId];
          } else {
            if (this.opts.jtd) throw new Error("schema must be object");else if (typeof schema != "boolean") throw new Error("schema must be object or boolean");
          }
          var sch = this._cache.get(schema);
          if (sch !== undefined) return sch;
          baseId = (0, resolve_1.normalizeId)(id || baseId);
          var localRefs = resolve_1.getSchemaRefs.call(this, schema, baseId);
          sch = new compile_1.SchemaEnv({
            schema: schema,
            schemaId: schemaId,
            meta: meta,
            baseId: baseId,
            localRefs: localRefs
          });
          this._cache.set(sch.schema, sch);
          if (addSchema && !baseId.startsWith("#")) {
            // TODO atm it is allowed to overwrite schemas without id (instead of not adding them)
            if (baseId) this._checkUnique(baseId);
            this.refs[baseId] = sch;
          }
          if (validateSchema) this.validateSchema(schema, true);
          return sch;
        }
      }, {
        key: "_checkUnique",
        value: function _checkUnique(id) {
          if (this.schemas[id] || this.refs[id]) {
            throw new Error("schema with key or id \"".concat(id, "\" already exists"));
          }
        }
      }, {
        key: "_compileSchemaEnv",
        value: function _compileSchemaEnv(sch) {
          if (sch.meta) this._compileMetaSchema(sch);else compile_1.compileSchema.call(this, sch);
          /* istanbul ignore if */
          if (!sch.validate) throw new Error("ajv implementation error");
          return sch.validate;
        }
      }, {
        key: "_compileMetaSchema",
        value: function _compileMetaSchema(sch) {
          var currentOpts = this.opts;
          this.opts = this._metaOpts;
          try {
            compile_1.compileSchema.call(this, sch);
          } finally {
            this.opts = currentOpts;
          }
        }
      }]);
    }();
    exports["default"] = Ajv;
    Ajv.ValidationError = validation_error_1["default"];
    Ajv.MissingRefError = ref_error_1["default"];
    function checkOptions(checkOpts, options, msg) {
      var log = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "error";
      for (var key in checkOpts) {
        var opt = key;
        if (opt in options) this.logger[log]("".concat(msg, ": option ").concat(key, ". ").concat(checkOpts[opt]));
      }
    }
    function getSchEnv(keyRef) {
      keyRef = (0, resolve_1.normalizeId)(keyRef); // TODO tests fail without this line
      return this.schemas[keyRef] || this.refs[keyRef];
    }
    function addInitialSchemas() {
      var optsSchemas = this.opts.schemas;
      if (!optsSchemas) return;
      if (Array.isArray(optsSchemas)) this.addSchema(optsSchemas);else for (var key in optsSchemas) this.addSchema(optsSchemas[key], key);
    }
    function addInitialFormats() {
      for (var name in this.opts.formats) {
        var format = this.opts.formats[name];
        if (format) this.addFormat(name, format);
      }
    }
    function addInitialKeywords(defs) {
      if (Array.isArray(defs)) {
        this.addVocabulary(defs);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (var keyword in defs) {
        var def = defs[keyword];
        if (!def.keyword) def.keyword = keyword;
        this.addKeyword(def);
      }
    }
    function getMetaSchemaOptions() {
      var metaOpts = _objectSpread2({}, this.opts);
      var _iterator6 = _createForOfIteratorHelper(META_IGNORE_OPTIONS),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var opt = _step6.value;
          delete metaOpts[opt];
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      return metaOpts;
    }
    var noLogs = {
      log: function log() {},
      warn: function warn() {},
      error: function error() {}
    };
    function getLogger(logger) {
      if (logger === false) return noLogs;
      if (logger === undefined) return console;
      if (logger.log && logger.warn && logger.error) return logger;
      throw new Error("logger must implement log, warn and error methods");
    }
    var KEYWORD_NAME = /^[a-z_$][a-z0-9_$:-]*$/i;
    function checkKeyword(keyword, def) {
      var RULES = this.RULES;
      (0, util_1.eachItem)(keyword, function (kwd) {
        if (RULES.keywords[kwd]) throw new Error("Keyword ".concat(kwd, " is already defined"));
        if (!KEYWORD_NAME.test(kwd)) throw new Error("Keyword ".concat(kwd, " has invalid name"));
      });
      if (!def) return;
      if (def.$data && !("code" in def || "validate" in def)) {
        throw new Error('$data keyword must have "code" or "validate" function');
      }
    }
    function addRule(keyword, definition, dataType) {
      var _this2 = this;
      var _a;
      var post = definition === null || definition === void 0 ? void 0 : definition.post;
      if (dataType && post) throw new Error('keyword with "post" flag cannot have "type"');
      var RULES = this.RULES;
      var ruleGroup = post ? RULES.post : RULES.rules.find(function (_ref3) {
        var t = _ref3.type;
        return t === dataType;
      });
      if (!ruleGroup) {
        ruleGroup = {
          type: dataType,
          rules: []
        };
        RULES.rules.push(ruleGroup);
      }
      RULES.keywords[keyword] = true;
      if (!definition) return;
      var rule = {
        keyword: keyword,
        definition: _objectSpread2(_objectSpread2({}, definition), {}, {
          type: (0, dataType_1.getJSONTypes)(definition.type),
          schemaType: (0, dataType_1.getJSONTypes)(definition.schemaType)
        })
      };
      if (definition.before) addBeforeRule.call(this, ruleGroup, rule, definition.before);else ruleGroup.rules.push(rule);
      RULES.all[keyword] = rule;
      (_a = definition["implements"]) === null || _a === void 0 ? void 0 : _a.forEach(function (kwd) {
        return _this2.addKeyword(kwd);
      });
    }
    function addBeforeRule(ruleGroup, rule, before) {
      var i = ruleGroup.rules.findIndex(function (_rule) {
        return _rule.keyword === before;
      });
      if (i >= 0) {
        ruleGroup.rules.splice(i, 0, rule);
      } else {
        ruleGroup.rules.push(rule);
        this.logger.warn("rule ".concat(before, " is not defined"));
      }
    }
    function keywordMetaschema(def) {
      var metaSchema = def.metaSchema;
      if (metaSchema === undefined) return;
      if (def.$data && this.opts.$data) metaSchema = schemaOrData(metaSchema);
      def.validateSchema = this.compile(metaSchema, true);
    }
    var $dataRef = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function schemaOrData(schema) {
      return {
        anyOf: [schema, $dataRef]
      };
    }
  })(core$2);

  var draft7 = {};

  var core$1 = {};

  var id = {};

  Object.defineProperty(id, "__esModule", {
    value: true
  });
  var def$s = {
    keyword: "id",
    code: function code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  id["default"] = def$s;

  var ref = {};

  var _templateObject$o, _templateObject2$m, _templateObject3$i, _templateObject4$b, _templateObject5$8, _templateObject6$4, _templateObject7$4, _templateObject8$4, _templateObject9$3;
  Object.defineProperty(ref, "__esModule", {
    value: true
  });
  ref.callRef = ref.getValidate = void 0;
  var ref_error_1 = requireRef_error();
  var code_1$8 = requireCode();
  var codegen_1$l = codegen;
  var names_1$1 = requireNames();
  var compile_1$1 = compile;
  var util_1$j = util;
  var def$r = {
    keyword: "$ref",
    schemaType: "string",
    code: function code(cxt) {
      var gen = cxt.gen,
        $ref = cxt.schema,
        it = cxt.it;
      var baseId = it.baseId,
        env = it.schemaEnv,
        validateName = it.validateName,
        opts = it.opts,
        self = it.self;
      var root = env.root;
      if (($ref === "#" || $ref === "#/") && baseId === root.baseId) return callRootRef();
      var schOrEnv = compile_1$1.resolveRef.call(self, root, baseId, $ref);
      if (schOrEnv === undefined) throw new ref_error_1["default"](it.opts.uriResolver, baseId, $ref);
      if (schOrEnv instanceof compile_1$1.SchemaEnv) return callValidate(schOrEnv);
      return inlineRefSchema(schOrEnv);
      function callRootRef() {
        if (env === root) return callRef(cxt, validateName, env, env.$async);
        var rootName = gen.scopeValue("root", {
          ref: root
        });
        return callRef(cxt, (0, codegen_1$l._)(_templateObject$o || (_templateObject$o = _taggedTemplateLiteral(["", ".validate"])), rootName), root, root.$async);
      }
      function callValidate(sch) {
        var v = getValidate(cxt, sch);
        callRef(cxt, v, sch, sch.$async);
      }
      function inlineRefSchema(sch) {
        var schName = gen.scopeValue("schema", opts.code.source === true ? {
          ref: sch,
          code: (0, codegen_1$l.stringify)(sch)
        } : {
          ref: sch
        });
        var valid = gen.name("valid");
        var schCxt = cxt.subschema({
          schema: sch,
          dataTypes: [],
          schemaPath: codegen_1$l.nil,
          topSchemaRef: schName,
          errSchemaPath: $ref
        }, valid);
        cxt.mergeEvaluated(schCxt);
        cxt.ok(valid);
      }
    }
  };
  function getValidate(cxt, sch) {
    var gen = cxt.gen;
    return sch.validate ? gen.scopeValue("validate", {
      ref: sch.validate
    }) : (0, codegen_1$l._)(_templateObject2$m || (_templateObject2$m = _taggedTemplateLiteral(["", ".validate"])), gen.scopeValue("wrapper", {
      ref: sch
    }));
  }
  ref.getValidate = getValidate;
  function callRef(cxt, v, sch, $async) {
    var gen = cxt.gen,
      it = cxt.it;
    var allErrors = it.allErrors,
      env = it.schemaEnv,
      opts = it.opts;
    var passCxt = opts.passContext ? names_1$1["default"]["this"] : codegen_1$l.nil;
    if ($async) callAsyncRef();else callSyncRef();
    function callAsyncRef() {
      if (!env.$async) throw new Error("async schema referenced by sync schema");
      var valid = gen["let"]("valid");
      gen["try"](function () {
        gen.code((0, codegen_1$l._)(_templateObject3$i || (_templateObject3$i = _taggedTemplateLiteral(["await ", ""])), (0, code_1$8.callValidateCode)(cxt, v, passCxt)));
        addEvaluatedFrom(v); // TODO will not work with async, it has to be returned with the result
        if (!allErrors) gen.assign(valid, true);
      }, function (e) {
        gen["if"]((0, codegen_1$l._)(_templateObject4$b || (_templateObject4$b = _taggedTemplateLiteral(["!(", " instanceof ", ")"])), e, it.ValidationError), function () {
          return gen["throw"](e);
        });
        addErrorsFrom(e);
        if (!allErrors) gen.assign(valid, false);
      });
      cxt.ok(valid);
    }
    function callSyncRef() {
      cxt.result((0, code_1$8.callValidateCode)(cxt, v, passCxt), function () {
        return addEvaluatedFrom(v);
      }, function () {
        return addErrorsFrom(v);
      });
    }
    function addErrorsFrom(source) {
      var errs = (0, codegen_1$l._)(_templateObject5$8 || (_templateObject5$8 = _taggedTemplateLiteral(["", ".errors"])), source);
      gen.assign(names_1$1["default"].vErrors, (0, codegen_1$l._)(_templateObject6$4 || (_templateObject6$4 = _taggedTemplateLiteral(["", " === null ? ", " : ", ".concat(", ")"])), names_1$1["default"].vErrors, errs, names_1$1["default"].vErrors, errs)); // TODO tagged
      gen.assign(names_1$1["default"].errors, (0, codegen_1$l._)(_templateObject7$4 || (_templateObject7$4 = _taggedTemplateLiteral(["", ".length"])), names_1$1["default"].vErrors));
    }
    function addEvaluatedFrom(source) {
      var _a;
      if (!it.opts.unevaluated) return;
      var schEvaluated = (_a = sch === null || sch === void 0 ? void 0 : sch.validate) === null || _a === void 0 ? void 0 : _a.evaluated;
      // TODO refactor
      if (it.props !== true) {
        if (schEvaluated && !schEvaluated.dynamicProps) {
          if (schEvaluated.props !== undefined) {
            it.props = util_1$j.mergeEvaluated.props(gen, schEvaluated.props, it.props);
          }
        } else {
          var props = gen["var"]("props", (0, codegen_1$l._)(_templateObject8$4 || (_templateObject8$4 = _taggedTemplateLiteral(["", ".evaluated.props"])), source));
          it.props = util_1$j.mergeEvaluated.props(gen, props, it.props, codegen_1$l.Name);
        }
      }
      if (it.items !== true) {
        if (schEvaluated && !schEvaluated.dynamicItems) {
          if (schEvaluated.items !== undefined) {
            it.items = util_1$j.mergeEvaluated.items(gen, schEvaluated.items, it.items);
          }
        } else {
          var items = gen["var"]("items", (0, codegen_1$l._)(_templateObject9$3 || (_templateObject9$3 = _taggedTemplateLiteral(["", ".evaluated.items"])), source));
          it.items = util_1$j.mergeEvaluated.items(gen, items, it.items, codegen_1$l.Name);
        }
      }
    }
  }
  ref.callRef = callRef;
  ref["default"] = def$r;

  Object.defineProperty(core$1, "__esModule", {
    value: true
  });
  var id_1 = id;
  var ref_1 = ref;
  var core = ["$schema", "$id", "$defs", "$vocabulary", {
    keyword: "$comment"
  }, "definitions", id_1["default"], ref_1["default"]];
  core$1["default"] = core;

  var validation$1 = {};

  var limitNumber = {};

  var _templateObject$n, _templateObject2$l, _templateObject3$h;
  Object.defineProperty(limitNumber, "__esModule", {
    value: true
  });
  var codegen_1$k = codegen;
  var ops = codegen_1$k.operators;
  var KWDs = {
    maximum: {
      okStr: "<=",
      ok: ops.LTE,
      fail: ops.GT
    },
    minimum: {
      okStr: ">=",
      ok: ops.GTE,
      fail: ops.LT
    },
    exclusiveMaximum: {
      okStr: "<",
      ok: ops.LT,
      fail: ops.GTE
    },
    exclusiveMinimum: {
      okStr: ">",
      ok: ops.GT,
      fail: ops.LTE
    }
  };
  var error$i = {
    message: function message(_ref) {
      var keyword = _ref.keyword,
        schemaCode = _ref.schemaCode;
      return (0, codegen_1$k.str)(_templateObject$n || (_templateObject$n = _taggedTemplateLiteral(["must be ", " ", ""])), KWDs[keyword].okStr, schemaCode);
    },
    params: function params(_ref2) {
      var keyword = _ref2.keyword,
        schemaCode = _ref2.schemaCode;
      return (0, codegen_1$k._)(_templateObject2$l || (_templateObject2$l = _taggedTemplateLiteral(["{comparison: ", ", limit: ", "}"])), KWDs[keyword].okStr, schemaCode);
    }
  };
  var def$q = {
    keyword: Object.keys(KWDs),
    type: "number",
    schemaType: "number",
    $data: true,
    error: error$i,
    code: function code(cxt) {
      var keyword = cxt.keyword,
        data = cxt.data,
        schemaCode = cxt.schemaCode;
      cxt.fail$data((0, codegen_1$k._)(_templateObject3$h || (_templateObject3$h = _taggedTemplateLiteral(["", " ", " ", " || isNaN(", ")"])), data, KWDs[keyword].fail, schemaCode, data));
    }
  };
  limitNumber["default"] = def$q;

  var multipleOf = {};

  var _templateObject$m, _templateObject2$k, _templateObject3$g, _templateObject4$a, _templateObject5$7;
  Object.defineProperty(multipleOf, "__esModule", {
    value: true
  });
  var codegen_1$j = codegen;
  var error$h = {
    message: function message(_ref) {
      var schemaCode = _ref.schemaCode;
      return (0, codegen_1$j.str)(_templateObject$m || (_templateObject$m = _taggedTemplateLiteral(["must be multiple of ", ""])), schemaCode);
    },
    params: function params(_ref2) {
      var schemaCode = _ref2.schemaCode;
      return (0, codegen_1$j._)(_templateObject2$k || (_templateObject2$k = _taggedTemplateLiteral(["{multipleOf: ", "}"])), schemaCode);
    }
  };
  var def$p = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: true,
    error: error$h,
    code: function code(cxt) {
      var gen = cxt.gen,
        data = cxt.data,
        schemaCode = cxt.schemaCode,
        it = cxt.it;
      // const bdt = bad$DataType(schemaCode, <string>def.schemaType, $data)
      var prec = it.opts.multipleOfPrecision;
      var res = gen["let"]("res");
      var invalid = prec ? (0, codegen_1$j._)(_templateObject3$g || (_templateObject3$g = _taggedTemplateLiteral(["Math.abs(Math.round(", ") - ", ") > 1e-", ""])), res, res, prec) : (0, codegen_1$j._)(_templateObject4$a || (_templateObject4$a = _taggedTemplateLiteral(["", " !== parseInt(", ")"])), res, res);
      cxt.fail$data((0, codegen_1$j._)(_templateObject5$7 || (_templateObject5$7 = _taggedTemplateLiteral(["(", " === 0 || (", " = ", "/", ", ", "))"])), schemaCode, res, data, schemaCode, invalid));
    }
  };
  multipleOf["default"] = def$p;

  var limitLength = {};

  var ucs2length$1 = {};

  Object.defineProperty(ucs2length$1, "__esModule", {
    value: true
  });
  // https://mathiasbynens.be/notes/javascript-encoding
  // https://github.com/bestiejs/punycode.js - punycode.ucs2.decode
  function ucs2length(str) {
    var len = str.length;
    var length = 0;
    var pos = 0;
    var value;
    while (pos < len) {
      length++;
      value = str.charCodeAt(pos++);
      if (value >= 0xd800 && value <= 0xdbff && pos < len) {
        // high surrogate, and there is a next character
        value = str.charCodeAt(pos);
        if ((value & 0xfc00) === 0xdc00) pos++; // low surrogate
      }
    }
    return length;
  }
  ucs2length$1["default"] = ucs2length;
  ucs2length.code = 'require("ajv/dist/runtime/ucs2length").default';

  var _templateObject$l, _templateObject2$j, _templateObject3$f, _templateObject4$9, _templateObject5$6;
  Object.defineProperty(limitLength, "__esModule", {
    value: true
  });
  var codegen_1$i = codegen;
  var util_1$i = util;
  var ucs2length_1 = ucs2length$1;
  var error$g = {
    message: function message(_ref) {
      var keyword = _ref.keyword,
        schemaCode = _ref.schemaCode;
      var comp = keyword === "maxLength" ? "more" : "fewer";
      return (0, codegen_1$i.str)(_templateObject$l || (_templateObject$l = _taggedTemplateLiteral(["must NOT have ", " than ", " characters"])), comp, schemaCode);
    },
    params: function params(_ref2) {
      var schemaCode = _ref2.schemaCode;
      return (0, codegen_1$i._)(_templateObject2$j || (_templateObject2$j = _taggedTemplateLiteral(["{limit: ", "}"])), schemaCode);
    }
  };
  var def$o = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: true,
    error: error$g,
    code: function code(cxt) {
      var keyword = cxt.keyword,
        data = cxt.data,
        schemaCode = cxt.schemaCode,
        it = cxt.it;
      var op = keyword === "maxLength" ? codegen_1$i.operators.GT : codegen_1$i.operators.LT;
      var len = it.opts.unicode === false ? (0, codegen_1$i._)(_templateObject3$f || (_templateObject3$f = _taggedTemplateLiteral(["", ".length"])), data) : (0, codegen_1$i._)(_templateObject4$9 || (_templateObject4$9 = _taggedTemplateLiteral(["", "(", ")"])), (0, util_1$i.useFunc)(cxt.gen, ucs2length_1["default"]), data);
      cxt.fail$data((0, codegen_1$i._)(_templateObject5$6 || (_templateObject5$6 = _taggedTemplateLiteral(["", " ", " ", ""])), len, op, schemaCode));
    }
  };
  limitLength["default"] = def$o;

  var pattern = {};

  var _templateObject$k, _templateObject2$i, _templateObject3$e, _templateObject4$8;
  Object.defineProperty(pattern, "__esModule", {
    value: true
  });
  var code_1$7 = requireCode();
  var codegen_1$h = codegen;
  var error$f = {
    message: function message(_ref) {
      var schemaCode = _ref.schemaCode;
      return (0, codegen_1$h.str)(_templateObject$k || (_templateObject$k = _taggedTemplateLiteral(["must match pattern \"", "\""])), schemaCode);
    },
    params: function params(_ref2) {
      var schemaCode = _ref2.schemaCode;
      return (0, codegen_1$h._)(_templateObject2$i || (_templateObject2$i = _taggedTemplateLiteral(["{pattern: ", "}"])), schemaCode);
    }
  };
  var def$n = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: true,
    error: error$f,
    code: function code(cxt) {
      var data = cxt.data,
        $data = cxt.$data,
        schema = cxt.schema,
        schemaCode = cxt.schemaCode,
        it = cxt.it;
      // TODO regexp should be wrapped in try/catchs
      var u = it.opts.unicodeRegExp ? "u" : "";
      var regExp = $data ? (0, codegen_1$h._)(_templateObject3$e || (_templateObject3$e = _taggedTemplateLiteral(["(new RegExp(", ", ", "))"])), schemaCode, u) : (0, code_1$7.usePattern)(cxt, schema);
      cxt.fail$data((0, codegen_1$h._)(_templateObject4$8 || (_templateObject4$8 = _taggedTemplateLiteral(["!", ".test(", ")"])), regExp, data));
    }
  };
  pattern["default"] = def$n;

  var limitProperties = {};

  var _templateObject$j, _templateObject2$h, _templateObject3$d;
  Object.defineProperty(limitProperties, "__esModule", {
    value: true
  });
  var codegen_1$g = codegen;
  var error$e = {
    message: function message(_ref) {
      var keyword = _ref.keyword,
        schemaCode = _ref.schemaCode;
      var comp = keyword === "maxProperties" ? "more" : "fewer";
      return (0, codegen_1$g.str)(_templateObject$j || (_templateObject$j = _taggedTemplateLiteral(["must NOT have ", " than ", " properties"])), comp, schemaCode);
    },
    params: function params(_ref2) {
      var schemaCode = _ref2.schemaCode;
      return (0, codegen_1$g._)(_templateObject2$h || (_templateObject2$h = _taggedTemplateLiteral(["{limit: ", "}"])), schemaCode);
    }
  };
  var def$m = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: true,
    error: error$e,
    code: function code(cxt) {
      var keyword = cxt.keyword,
        data = cxt.data,
        schemaCode = cxt.schemaCode;
      var op = keyword === "maxProperties" ? codegen_1$g.operators.GT : codegen_1$g.operators.LT;
      cxt.fail$data((0, codegen_1$g._)(_templateObject3$d || (_templateObject3$d = _taggedTemplateLiteral(["Object.keys(", ").length ", " ", ""])), data, op, schemaCode));
    }
  };
  limitProperties["default"] = def$m;

  var required = {};

  var _templateObject$i, _templateObject2$g;
  Object.defineProperty(required, "__esModule", {
    value: true
  });
  var code_1$6 = requireCode();
  var codegen_1$f = codegen;
  var util_1$h = util;
  var error$d = {
    message: function message(_ref) {
      var missingProperty = _ref.params.missingProperty;
      return (0, codegen_1$f.str)(_templateObject$i || (_templateObject$i = _taggedTemplateLiteral(["must have required property '", "'"])), missingProperty);
    },
    params: function params(_ref2) {
      var missingProperty = _ref2.params.missingProperty;
      return (0, codegen_1$f._)(_templateObject2$g || (_templateObject2$g = _taggedTemplateLiteral(["{missingProperty: ", "}"])), missingProperty);
    }
  };
  var def$l = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: true,
    error: error$d,
    code: function code(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        schemaCode = cxt.schemaCode,
        data = cxt.data,
        $data = cxt.$data,
        it = cxt.it;
      var opts = it.opts;
      if (!$data && schema.length === 0) return;
      var useLoop = schema.length >= opts.loopRequired;
      if (it.allErrors) allErrorsMode();else exitOnErrorMode();
      if (opts.strictRequired) {
        var props = cxt.parentSchema.properties;
        var definedProperties = cxt.it.definedProperties;
        var _iterator = _createForOfIteratorHelper(schema),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var requiredKey = _step.value;
            if ((props === null || props === void 0 ? void 0 : props[requiredKey]) === undefined && !definedProperties.has(requiredKey)) {
              var schemaPath = it.schemaEnv.baseId + it.errSchemaPath;
              var msg = "required property \"".concat(requiredKey, "\" is not defined at \"").concat(schemaPath, "\" (strictRequired)");
              (0, util_1$h.checkStrictMode)(it, msg, it.opts.strictRequired);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      function allErrorsMode() {
        if (useLoop || $data) {
          cxt.block$data(codegen_1$f.nil, loopAllRequired);
        } else {
          var _iterator2 = _createForOfIteratorHelper(schema),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var prop = _step2.value;
              (0, code_1$6.checkReportMissingProp)(cxt, prop);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
      function exitOnErrorMode() {
        var missing = gen["let"]("missing");
        if (useLoop || $data) {
          var valid = gen["let"]("valid", true);
          cxt.block$data(valid, function () {
            return loopUntilMissing(missing, valid);
          });
          cxt.ok(valid);
        } else {
          gen["if"]((0, code_1$6.checkMissingProp)(cxt, schema, missing));
          (0, code_1$6.reportMissingProp)(cxt, missing);
          gen["else"]();
        }
      }
      function loopAllRequired() {
        gen.forOf("prop", schemaCode, function (prop) {
          cxt.setParams({
            missingProperty: prop
          });
          gen["if"]((0, code_1$6.noPropertyInData)(gen, data, prop, opts.ownProperties), function () {
            return cxt.error();
          });
        });
      }
      function loopUntilMissing(missing, valid) {
        cxt.setParams({
          missingProperty: missing
        });
        gen.forOf(missing, schemaCode, function () {
          gen.assign(valid, (0, code_1$6.propertyInData)(gen, data, missing, opts.ownProperties));
          gen["if"]((0, codegen_1$f.not)(valid), function () {
            cxt.error();
            gen["break"]();
          });
        }, codegen_1$f.nil);
      }
    }
  };
  required["default"] = def$l;

  var limitItems = {};

  var _templateObject$h, _templateObject2$f, _templateObject3$c;
  Object.defineProperty(limitItems, "__esModule", {
    value: true
  });
  var codegen_1$e = codegen;
  var error$c = {
    message: function message(_ref) {
      var keyword = _ref.keyword,
        schemaCode = _ref.schemaCode;
      var comp = keyword === "maxItems" ? "more" : "fewer";
      return (0, codegen_1$e.str)(_templateObject$h || (_templateObject$h = _taggedTemplateLiteral(["must NOT have ", " than ", " items"])), comp, schemaCode);
    },
    params: function params(_ref2) {
      var schemaCode = _ref2.schemaCode;
      return (0, codegen_1$e._)(_templateObject2$f || (_templateObject2$f = _taggedTemplateLiteral(["{limit: ", "}"])), schemaCode);
    }
  };
  var def$k = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: true,
    error: error$c,
    code: function code(cxt) {
      var keyword = cxt.keyword,
        data = cxt.data,
        schemaCode = cxt.schemaCode;
      var op = keyword === "maxItems" ? codegen_1$e.operators.GT : codegen_1$e.operators.LT;
      cxt.fail$data((0, codegen_1$e._)(_templateObject3$c || (_templateObject3$c = _taggedTemplateLiteral(["", ".length ", " ", ""])), data, op, schemaCode));
    }
  };
  limitItems["default"] = def$k;

  var uniqueItems = {};

  var equal$1 = {};

  Object.defineProperty(equal$1, "__esModule", {
    value: true
  });
  // https://github.com/ajv-validator/ajv/issues/889
  var equal = fastDeepEqual;
  equal.code = 'require("ajv/dist/runtime/equal").default';
  equal$1["default"] = equal;

  var _templateObject$g, _templateObject2$e, _templateObject3$b, _templateObject4$7, _templateObject5$5, _templateObject6$3, _templateObject7$3, _templateObject8$3, _templateObject9$2, _templateObject10$2, _templateObject11$2, _templateObject12$2, _templateObject13$1, _templateObject14$1, _templateObject15$1, _templateObject16$1, _templateObject17$1;
  Object.defineProperty(uniqueItems, "__esModule", {
    value: true
  });
  var dataType_1 = dataType;
  var codegen_1$d = codegen;
  var util_1$g = util;
  var equal_1$2 = equal$1;
  var error$b = {
    message: function message(_ref) {
      var _ref$params = _ref.params,
        i = _ref$params.i,
        j = _ref$params.j;
      return (0, codegen_1$d.str)(_templateObject$g || (_templateObject$g = _taggedTemplateLiteral(["must NOT have duplicate items (items ## ", " and ", " are identical)"])), j, i);
    },
    params: function params(_ref2) {
      var _ref2$params = _ref2.params,
        i = _ref2$params.i,
        j = _ref2$params.j;
      return (0, codegen_1$d._)(_templateObject2$e || (_templateObject2$e = _taggedTemplateLiteral(["{i: ", ", j: ", "}"])), i, j);
    }
  };
  var def$j = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: true,
    error: error$b,
    code: function code(cxt) {
      var gen = cxt.gen,
        data = cxt.data,
        $data = cxt.$data,
        schema = cxt.schema,
        parentSchema = cxt.parentSchema,
        schemaCode = cxt.schemaCode,
        it = cxt.it;
      if (!$data && !schema) return;
      var valid = gen["let"]("valid");
      var itemTypes = parentSchema.items ? (0, dataType_1.getSchemaTypes)(parentSchema.items) : [];
      cxt.block$data(valid, validateUniqueItems, (0, codegen_1$d._)(_templateObject3$b || (_templateObject3$b = _taggedTemplateLiteral(["", " === false"])), schemaCode));
      cxt.ok(valid);
      function validateUniqueItems() {
        var i = gen["let"]("i", (0, codegen_1$d._)(_templateObject4$7 || (_templateObject4$7 = _taggedTemplateLiteral(["", ".length"])), data));
        var j = gen["let"]("j");
        cxt.setParams({
          i: i,
          j: j
        });
        gen.assign(valid, true);
        gen["if"]((0, codegen_1$d._)(_templateObject5$5 || (_templateObject5$5 = _taggedTemplateLiteral(["", " > 1"])), i), function () {
          return (canOptimize() ? loopN : loopN2)(i, j);
        });
      }
      function canOptimize() {
        return itemTypes.length > 0 && !itemTypes.some(function (t) {
          return t === "object" || t === "array";
        });
      }
      function loopN(i, j) {
        var item = gen.name("item");
        var wrongType = (0, dataType_1.checkDataTypes)(itemTypes, item, it.opts.strictNumbers, dataType_1.DataType.Wrong);
        var indices = gen["const"]("indices", (0, codegen_1$d._)(_templateObject6$3 || (_templateObject6$3 = _taggedTemplateLiteral(["{}"]))));
        gen["for"]((0, codegen_1$d._)(_templateObject7$3 || (_templateObject7$3 = _taggedTemplateLiteral([";", "--;"])), i), function () {
          gen["let"](item, (0, codegen_1$d._)(_templateObject8$3 || (_templateObject8$3 = _taggedTemplateLiteral(["", "[", "]"])), data, i));
          gen["if"](wrongType, (0, codegen_1$d._)(_templateObject9$2 || (_templateObject9$2 = _taggedTemplateLiteral(["continue"]))));
          if (itemTypes.length > 1) gen["if"]((0, codegen_1$d._)(_templateObject10$2 || (_templateObject10$2 = _taggedTemplateLiteral(["typeof ", " == \"string\""])), item), (0, codegen_1$d._)(_templateObject11$2 || (_templateObject11$2 = _taggedTemplateLiteral(["", " += \"_\""])), item));
          gen["if"]((0, codegen_1$d._)(_templateObject12$2 || (_templateObject12$2 = _taggedTemplateLiteral(["typeof ", "[", "] == \"number\""])), indices, item), function () {
            gen.assign(j, (0, codegen_1$d._)(_templateObject13$1 || (_templateObject13$1 = _taggedTemplateLiteral(["", "[", "]"])), indices, item));
            cxt.error();
            gen.assign(valid, false)["break"]();
          }).code((0, codegen_1$d._)(_templateObject14$1 || (_templateObject14$1 = _taggedTemplateLiteral(["", "[", "] = ", ""])), indices, item, i));
        });
      }
      function loopN2(i, j) {
        var eql = (0, util_1$g.useFunc)(gen, equal_1$2["default"]);
        var outer = gen.name("outer");
        gen.label(outer)["for"]((0, codegen_1$d._)(_templateObject15$1 || (_templateObject15$1 = _taggedTemplateLiteral([";", "--;"])), i), function () {
          return gen["for"]((0, codegen_1$d._)(_templateObject16$1 || (_templateObject16$1 = _taggedTemplateLiteral(["", " = ", "; ", "--;"])), j, i, j), function () {
            return gen["if"]((0, codegen_1$d._)(_templateObject17$1 || (_templateObject17$1 = _taggedTemplateLiteral(["", "(", "[", "], ", "[", "])"])), eql, data, i, data, j), function () {
              cxt.error();
              gen.assign(valid, false)["break"](outer);
            });
          });
        });
      }
    }
  };
  uniqueItems["default"] = def$j;

  var _const = {};

  var _templateObject$f, _templateObject2$d, _templateObject3$a;
  Object.defineProperty(_const, "__esModule", {
    value: true
  });
  var codegen_1$c = codegen;
  var util_1$f = util;
  var equal_1$1 = equal$1;
  var error$a = {
    message: "must be equal to constant",
    params: function params(_ref) {
      var schemaCode = _ref.schemaCode;
      return (0, codegen_1$c._)(_templateObject$f || (_templateObject$f = _taggedTemplateLiteral(["{allowedValue: ", "}"])), schemaCode);
    }
  };
  var def$i = {
    keyword: "const",
    $data: true,
    error: error$a,
    code: function code(cxt) {
      var gen = cxt.gen,
        data = cxt.data,
        $data = cxt.$data,
        schemaCode = cxt.schemaCode,
        schema = cxt.schema;
      if ($data || schema && _typeof(schema) == "object") {
        cxt.fail$data((0, codegen_1$c._)(_templateObject2$d || (_templateObject2$d = _taggedTemplateLiteral(["!", "(", ", ", ")"])), (0, util_1$f.useFunc)(gen, equal_1$1["default"]), data, schemaCode));
      } else {
        cxt.fail((0, codegen_1$c._)(_templateObject3$a || (_templateObject3$a = _taggedTemplateLiteral(["", " !== ", ""])), schema, data));
      }
    }
  };
  _const["default"] = def$i;

  var _enum = {};

  var _templateObject$e, _templateObject2$c, _templateObject3$9, _templateObject4$6;
  Object.defineProperty(_enum, "__esModule", {
    value: true
  });
  var codegen_1$b = codegen;
  var util_1$e = util;
  var equal_1 = equal$1;
  var error$9 = {
    message: "must be equal to one of the allowed values",
    params: function params(_ref) {
      var schemaCode = _ref.schemaCode;
      return (0, codegen_1$b._)(_templateObject$e || (_templateObject$e = _taggedTemplateLiteral(["{allowedValues: ", "}"])), schemaCode);
    }
  };
  var def$h = {
    keyword: "enum",
    schemaType: "array",
    $data: true,
    error: error$9,
    code: function code(cxt) {
      var gen = cxt.gen,
        data = cxt.data,
        $data = cxt.$data,
        schema = cxt.schema,
        schemaCode = cxt.schemaCode,
        it = cxt.it;
      if (!$data && schema.length === 0) throw new Error("enum must have non-empty array");
      var useLoop = schema.length >= it.opts.loopEnum;
      var eql;
      var getEql = function getEql() {
        return eql !== null && eql !== void 0 ? eql : eql = (0, util_1$e.useFunc)(gen, equal_1["default"]);
      };
      var valid;
      if (useLoop || $data) {
        valid = gen["let"]("valid");
        cxt.block$data(valid, loopEnum);
      } else {
        /* istanbul ignore if */
        if (!Array.isArray(schema)) throw new Error("ajv implementation error");
        var vSchema = gen["const"]("vSchema", schemaCode);
        valid = (codegen_1$b.or).apply(void 0, _toConsumableArray(schema.map(function (_x, i) {
          return equalCode(vSchema, i);
        })));
      }
      cxt.pass(valid);
      function loopEnum() {
        gen.assign(valid, false);
        gen.forOf("v", schemaCode, function (v) {
          return gen["if"]((0, codegen_1$b._)(_templateObject2$c || (_templateObject2$c = _taggedTemplateLiteral(["", "(", ", ", ")"])), getEql(), data, v), function () {
            return gen.assign(valid, true)["break"]();
          });
        });
      }
      function equalCode(vSchema, i) {
        var sch = schema[i];
        return _typeof(sch) === "object" && sch !== null ? (0, codegen_1$b._)(_templateObject3$9 || (_templateObject3$9 = _taggedTemplateLiteral(["", "(", ", ", "[", "])"])), getEql(), data, vSchema, i) : (0, codegen_1$b._)(_templateObject4$6 || (_templateObject4$6 = _taggedTemplateLiteral(["", " === ", ""])), data, sch);
      }
    }
  };
  _enum["default"] = def$h;

  Object.defineProperty(validation$1, "__esModule", {
    value: true
  });
  var limitNumber_1 = limitNumber;
  var multipleOf_1 = multipleOf;
  var limitLength_1 = limitLength;
  var pattern_1 = pattern;
  var limitProperties_1 = limitProperties;
  var required_1 = required;
  var limitItems_1 = limitItems;
  var uniqueItems_1 = uniqueItems;
  var const_1 = _const;
  var enum_1 = _enum;
  var validation = [
  // number
  limitNumber_1["default"], multipleOf_1["default"],
  // string
  limitLength_1["default"], pattern_1["default"],
  // object
  limitProperties_1["default"], required_1["default"],
  // array
  limitItems_1["default"], uniqueItems_1["default"],
  // any
  {
    keyword: "type",
    schemaType: ["string", "array"]
  }, {
    keyword: "nullable",
    schemaType: "boolean"
  }, const_1["default"], enum_1["default"]];
  validation$1["default"] = validation;

  var applicator = {};

  var additionalItems = {};

  var _templateObject$d, _templateObject2$b, _templateObject3$8, _templateObject4$5, _templateObject5$4;
  Object.defineProperty(additionalItems, "__esModule", {
    value: true
  });
  additionalItems.validateAdditionalItems = void 0;
  var codegen_1$a = codegen;
  var util_1$d = util;
  var error$8 = {
    message: function message(_ref) {
      var len = _ref.params.len;
      return (0, codegen_1$a.str)(_templateObject$d || (_templateObject$d = _taggedTemplateLiteral(["must NOT have more than ", " items"])), len);
    },
    params: function params(_ref2) {
      var len = _ref2.params.len;
      return (0, codegen_1$a._)(_templateObject2$b || (_templateObject2$b = _taggedTemplateLiteral(["{limit: ", "}"])), len);
    }
  };
  var def$g = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: error$8,
    code: function code(cxt) {
      var parentSchema = cxt.parentSchema,
        it = cxt.it;
      var items = parentSchema.items;
      if (!Array.isArray(items)) {
        (0, util_1$d.checkStrictMode)(it, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      validateAdditionalItems(cxt, items);
    }
  };
  function validateAdditionalItems(cxt, items) {
    var gen = cxt.gen,
      schema = cxt.schema,
      data = cxt.data,
      keyword = cxt.keyword,
      it = cxt.it;
    it.items = true;
    var len = gen["const"]("len", (0, codegen_1$a._)(_templateObject3$8 || (_templateObject3$8 = _taggedTemplateLiteral(["", ".length"])), data));
    if (schema === false) {
      cxt.setParams({
        len: items.length
      });
      cxt.pass((0, codegen_1$a._)(_templateObject4$5 || (_templateObject4$5 = _taggedTemplateLiteral(["", " <= ", ""])), len, items.length));
    } else if (_typeof(schema) == "object" && !(0, util_1$d.alwaysValidSchema)(it, schema)) {
      var valid = gen["var"]("valid", (0, codegen_1$a._)(_templateObject5$4 || (_templateObject5$4 = _taggedTemplateLiteral(["", " <= ", ""])), len, items.length)); // TODO var
      gen["if"]((0, codegen_1$a.not)(valid), function () {
        return validateItems(valid);
      });
      cxt.ok(valid);
    }
    function validateItems(valid) {
      gen.forRange("i", items.length, len, function (i) {
        cxt.subschema({
          keyword: keyword,
          dataProp: i,
          dataPropType: util_1$d.Type.Num
        }, valid);
        if (!it.allErrors) gen["if"]((0, codegen_1$a.not)(valid), function () {
          return gen["break"]();
        });
      });
    }
  }
  additionalItems.validateAdditionalItems = validateAdditionalItems;
  additionalItems["default"] = def$g;

  var prefixItems = {};

  var items = {};

  var _templateObject$c, _templateObject2$a;
  Object.defineProperty(items, "__esModule", {
    value: true
  });
  items.validateTuple = void 0;
  var codegen_1$9 = codegen;
  var util_1$c = util;
  var code_1$5 = requireCode();
  var def$f = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code: function code(cxt) {
      var schema = cxt.schema,
        it = cxt.it;
      if (Array.isArray(schema)) return validateTuple(cxt, "additionalItems", schema);
      it.items = true;
      if ((0, util_1$c.alwaysValidSchema)(it, schema)) return;
      cxt.ok((0, code_1$5.validateArray)(cxt));
    }
  };
  function validateTuple(cxt, extraItems) {
    var schArr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : cxt.schema;
    var gen = cxt.gen,
      parentSchema = cxt.parentSchema,
      data = cxt.data,
      keyword = cxt.keyword,
      it = cxt.it;
    checkStrictTuple(parentSchema);
    if (it.opts.unevaluated && schArr.length && it.items !== true) {
      it.items = util_1$c.mergeEvaluated.items(gen, schArr.length, it.items);
    }
    var valid = gen.name("valid");
    var len = gen["const"]("len", (0, codegen_1$9._)(_templateObject$c || (_templateObject$c = _taggedTemplateLiteral(["", ".length"])), data));
    schArr.forEach(function (sch, i) {
      if ((0, util_1$c.alwaysValidSchema)(it, sch)) return;
      gen["if"]((0, codegen_1$9._)(_templateObject2$a || (_templateObject2$a = _taggedTemplateLiteral(["", " > ", ""])), len, i), function () {
        return cxt.subschema({
          keyword: keyword,
          schemaProp: i,
          dataProp: i
        }, valid);
      });
      cxt.ok(valid);
    });
    function checkStrictTuple(sch) {
      var opts = it.opts,
        errSchemaPath = it.errSchemaPath;
      var l = schArr.length;
      var fullTuple = l === sch.minItems && (l === sch.maxItems || sch[extraItems] === false);
      if (opts.strictTuples && !fullTuple) {
        var msg = "\"".concat(keyword, "\" is ").concat(l, "-tuple, but minItems or maxItems/").concat(extraItems, " are not specified or different at path \"").concat(errSchemaPath, "\"");
        (0, util_1$c.checkStrictMode)(it, msg, opts.strictTuples);
      }
    }
  }
  items.validateTuple = validateTuple;
  items["default"] = def$f;

  Object.defineProperty(prefixItems, "__esModule", {
    value: true
  });
  var items_1$1 = items;
  var def$e = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: function code(cxt) {
      return (0, items_1$1.validateTuple)(cxt, "items");
    }
  };
  prefixItems["default"] = def$e;

  var items2020 = {};

  var _templateObject$b, _templateObject2$9;
  Object.defineProperty(items2020, "__esModule", {
    value: true
  });
  var codegen_1$8 = codegen;
  var util_1$b = util;
  var code_1$4 = requireCode();
  var additionalItems_1$1 = additionalItems;
  var error$7 = {
    message: function message(_ref) {
      var len = _ref.params.len;
      return (0, codegen_1$8.str)(_templateObject$b || (_templateObject$b = _taggedTemplateLiteral(["must NOT have more than ", " items"])), len);
    },
    params: function params(_ref2) {
      var len = _ref2.params.len;
      return (0, codegen_1$8._)(_templateObject2$9 || (_templateObject2$9 = _taggedTemplateLiteral(["{limit: ", "}"])), len);
    }
  };
  var def$d = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: error$7,
    code: function code(cxt) {
      var schema = cxt.schema,
        parentSchema = cxt.parentSchema,
        it = cxt.it;
      var prefixItems = parentSchema.prefixItems;
      it.items = true;
      if ((0, util_1$b.alwaysValidSchema)(it, schema)) return;
      if (prefixItems) (0, additionalItems_1$1.validateAdditionalItems)(cxt, prefixItems);else cxt.ok((0, code_1$4.validateArray)(cxt));
    }
  };
  items2020["default"] = def$d;

  var contains = {};

  var _templateObject$a, _templateObject2$8, _templateObject3$7, _templateObject4$4, _templateObject5$3, _templateObject6$2, _templateObject7$2, _templateObject8$2, _templateObject9$1, _templateObject10$1, _templateObject11$1, _templateObject12$1;
  Object.defineProperty(contains, "__esModule", {
    value: true
  });
  var codegen_1$7 = codegen;
  var util_1$a = util;
  var error$6 = {
    message: function message(_ref) {
      var _ref$params = _ref.params,
        min = _ref$params.min,
        max = _ref$params.max;
      return max === undefined ? (0, codegen_1$7.str)(_templateObject$a || (_templateObject$a = _taggedTemplateLiteral(["must contain at least ", " valid item(s)"])), min) : (0, codegen_1$7.str)(_templateObject2$8 || (_templateObject2$8 = _taggedTemplateLiteral(["must contain at least ", " and no more than ", " valid item(s)"])), min, max);
    },
    params: function params(_ref2) {
      var _ref2$params = _ref2.params,
        min = _ref2$params.min,
        max = _ref2$params.max;
      return max === undefined ? (0, codegen_1$7._)(_templateObject3$7 || (_templateObject3$7 = _taggedTemplateLiteral(["{minContains: ", "}"])), min) : (0, codegen_1$7._)(_templateObject4$4 || (_templateObject4$4 = _taggedTemplateLiteral(["{minContains: ", ", maxContains: ", "}"])), min, max);
    }
  };
  var def$c = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: true,
    error: error$6,
    code: function code(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        parentSchema = cxt.parentSchema,
        data = cxt.data,
        it = cxt.it;
      var min;
      var max;
      var minContains = parentSchema.minContains,
        maxContains = parentSchema.maxContains;
      if (it.opts.next) {
        min = minContains === undefined ? 1 : minContains;
        max = maxContains;
      } else {
        min = 1;
      }
      var len = gen["const"]("len", (0, codegen_1$7._)(_templateObject5$3 || (_templateObject5$3 = _taggedTemplateLiteral(["", ".length"])), data));
      cxt.setParams({
        min: min,
        max: max
      });
      if (max === undefined && min === 0) {
        (0, util_1$a.checkStrictMode)(it, "\"minContains\" == 0 without \"maxContains\": \"contains\" keyword ignored");
        return;
      }
      if (max !== undefined && min > max) {
        (0, util_1$a.checkStrictMode)(it, "\"minContains\" > \"maxContains\" is always invalid");
        cxt.fail();
        return;
      }
      if ((0, util_1$a.alwaysValidSchema)(it, schema)) {
        var cond = (0, codegen_1$7._)(_templateObject6$2 || (_templateObject6$2 = _taggedTemplateLiteral(["", " >= ", ""])), len, min);
        if (max !== undefined) cond = (0, codegen_1$7._)(_templateObject7$2 || (_templateObject7$2 = _taggedTemplateLiteral(["", " && ", " <= ", ""])), cond, len, max);
        cxt.pass(cond);
        return;
      }
      it.items = true;
      var valid = gen.name("valid");
      if (max === undefined && min === 1) {
        validateItems(valid, function () {
          return gen["if"](valid, function () {
            return gen["break"]();
          });
        });
      } else if (min === 0) {
        gen["let"](valid, true);
        if (max !== undefined) gen["if"]((0, codegen_1$7._)(_templateObject8$2 || (_templateObject8$2 = _taggedTemplateLiteral(["", ".length > 0"])), data), validateItemsWithCount);
      } else {
        gen["let"](valid, false);
        validateItemsWithCount();
      }
      cxt.result(valid, function () {
        return cxt.reset();
      });
      function validateItemsWithCount() {
        var schValid = gen.name("_valid");
        var count = gen["let"]("count", 0);
        validateItems(schValid, function () {
          return gen["if"](schValid, function () {
            return checkLimits(count);
          });
        });
      }
      function validateItems(_valid, block) {
        gen.forRange("i", 0, len, function (i) {
          cxt.subschema({
            keyword: "contains",
            dataProp: i,
            dataPropType: util_1$a.Type.Num,
            compositeRule: true
          }, _valid);
          block();
        });
      }
      function checkLimits(count) {
        gen.code((0, codegen_1$7._)(_templateObject9$1 || (_templateObject9$1 = _taggedTemplateLiteral(["", "++"])), count));
        if (max === undefined) {
          gen["if"]((0, codegen_1$7._)(_templateObject10$1 || (_templateObject10$1 = _taggedTemplateLiteral(["", " >= ", ""])), count, min), function () {
            return gen.assign(valid, true)["break"]();
          });
        } else {
          gen["if"]((0, codegen_1$7._)(_templateObject11$1 || (_templateObject11$1 = _taggedTemplateLiteral(["", " > ", ""])), count, max), function () {
            return gen.assign(valid, false)["break"]();
          });
          if (min === 1) gen.assign(valid, true);else gen["if"]((0, codegen_1$7._)(_templateObject12$1 || (_templateObject12$1 = _taggedTemplateLiteral(["", " >= ", ""])), count, min), function () {
            return gen.assign(valid, true);
          });
        }
      }
    }
  };
  contains["default"] = def$c;

  var dependencies = {};

  var _templateObject$9, _templateObject2$7, _templateObject3$6;
  (function (exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.validateSchemaDeps = exports.validatePropertyDeps = exports.error = void 0;
    var codegen_1 = codegen;
    var util_1 = util;
    var code_1 = requireCode();
    exports.error = {
      message: function message(_ref) {
        var _ref$params = _ref.params,
          property = _ref$params.property,
          depsCount = _ref$params.depsCount,
          deps = _ref$params.deps;
        var property_ies = depsCount === 1 ? "property" : "properties";
        return (0, codegen_1.str)(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteral(["must have ", " ", " when property ", " is present"])), property_ies, deps, property);
      },
      params: function params(_ref2) {
        var _ref2$params = _ref2.params,
          property = _ref2$params.property,
          depsCount = _ref2$params.depsCount,
          deps = _ref2$params.deps,
          missingProperty = _ref2$params.missingProperty;
        return (0, codegen_1._)(_templateObject2$7 || (_templateObject2$7 = _taggedTemplateLiteral(["{property: ", ",\n    missingProperty: ", ",\n    depsCount: ", ",\n    deps: ", "}"])), property, missingProperty, depsCount, deps);
      } // TODO change to reference
    };
    var def = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: exports.error,
      code: function code(cxt) {
        var _splitDependencies = splitDependencies(cxt),
          _splitDependencies2 = _slicedToArray(_splitDependencies, 2),
          propDeps = _splitDependencies2[0],
          schDeps = _splitDependencies2[1];
        validatePropertyDeps(cxt, propDeps);
        validateSchemaDeps(cxt, schDeps);
      }
    };
    function splitDependencies(_ref3) {
      var schema = _ref3.schema;
      var propertyDeps = {};
      var schemaDeps = {};
      for (var key in schema) {
        if (key === "__proto__") continue;
        var deps = Array.isArray(schema[key]) ? propertyDeps : schemaDeps;
        deps[key] = schema[key];
      }
      return [propertyDeps, schemaDeps];
    }
    function validatePropertyDeps(cxt) {
      var propertyDeps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : cxt.schema;
      var gen = cxt.gen,
        data = cxt.data,
        it = cxt.it;
      if (Object.keys(propertyDeps).length === 0) return;
      var missing = gen["let"]("missing");
      var _loop = function _loop() {
        var deps = propertyDeps[prop];
        if (deps.length === 0) return 1; // continue
        var hasProperty = (0, code_1.propertyInData)(gen, data, prop, it.opts.ownProperties);
        cxt.setParams({
          property: prop,
          depsCount: deps.length,
          deps: deps.join(", ")
        });
        if (it.allErrors) {
          gen["if"](hasProperty, function () {
            var _iterator = _createForOfIteratorHelper(deps),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var depProp = _step.value;
                (0, code_1.checkReportMissingProp)(cxt, depProp);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          });
        } else {
          gen["if"]((0, codegen_1._)(_templateObject3$6 || (_templateObject3$6 = _taggedTemplateLiteral(["", " && (", ")"])), hasProperty, (0, code_1.checkMissingProp)(cxt, deps, missing)));
          (0, code_1.reportMissingProp)(cxt, missing);
          gen["else"]();
        }
      };
      for (var prop in propertyDeps) {
        if (_loop()) continue;
      }
    }
    exports.validatePropertyDeps = validatePropertyDeps;
    function validateSchemaDeps(cxt) {
      var schemaDeps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : cxt.schema;
      var gen = cxt.gen,
        data = cxt.data,
        keyword = cxt.keyword,
        it = cxt.it;
      var valid = gen.name("valid");
      var _loop2 = function _loop2(prop) {
        if ((0, util_1.alwaysValidSchema)(it, schemaDeps[prop])) return 1; // continue
        gen["if"]((0, code_1.propertyInData)(gen, data, prop, it.opts.ownProperties), function () {
          var schCxt = cxt.subschema({
            keyword: keyword,
            schemaProp: prop
          }, valid);
          cxt.mergeValidEvaluated(schCxt, valid);
        }, function () {
          return gen["var"](valid, true);
        } // TODO var
        );
        cxt.ok(valid);
      };
      for (var prop in schemaDeps) {
        if (_loop2(prop)) continue;
      }
    }
    exports.validateSchemaDeps = validateSchemaDeps;
    exports["default"] = def;
  })(dependencies);

  var propertyNames = {};

  var _templateObject$8;
  Object.defineProperty(propertyNames, "__esModule", {
    value: true
  });
  var codegen_1$6 = codegen;
  var util_1$9 = util;
  var error$5 = {
    message: "property name must be valid",
    params: function params(_ref) {
      var _params = _ref.params;
      return (0, codegen_1$6._)(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral(["{propertyName: ", "}"])), _params.propertyName);
    }
  };
  var def$b = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: error$5,
    code: function code(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        data = cxt.data,
        it = cxt.it;
      if ((0, util_1$9.alwaysValidSchema)(it, schema)) return;
      var valid = gen.name("valid");
      gen.forIn("key", data, function (key) {
        cxt.setParams({
          propertyName: key
        });
        cxt.subschema({
          keyword: "propertyNames",
          data: key,
          dataTypes: ["string"],
          propertyName: key,
          compositeRule: true
        }, valid);
        gen["if"]((0, codegen_1$6.not)(valid), function () {
          cxt.error(true);
          if (!it.allErrors) gen["break"]();
        });
      });
      cxt.ok(valid);
    }
  };
  propertyNames["default"] = def$b;

  var additionalProperties = {};

  var _templateObject$7, _templateObject2$6, _templateObject3$5, _templateObject4$3, _templateObject5$2;
  Object.defineProperty(additionalProperties, "__esModule", {
    value: true
  });
  var code_1$3 = requireCode();
  var codegen_1$5 = codegen;
  var names_1 = requireNames();
  var util_1$8 = util;
  var error$4 = {
    message: "must NOT have additional properties",
    params: function params(_ref) {
      var _params = _ref.params;
      return (0, codegen_1$5._)(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["{additionalProperty: ", "}"])), _params.additionalProperty);
    }
  };
  var def$a = {
    keyword: "additionalProperties",
    type: ["object"],
    schemaType: ["boolean", "object"],
    allowUndefined: true,
    trackErrors: true,
    error: error$4,
    code: function code(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        parentSchema = cxt.parentSchema,
        data = cxt.data,
        errsCount = cxt.errsCount,
        it = cxt.it;
      /* istanbul ignore if */
      if (!errsCount) throw new Error("ajv implementation error");
      var allErrors = it.allErrors,
        opts = it.opts;
      it.props = true;
      if (opts.removeAdditional !== "all" && (0, util_1$8.alwaysValidSchema)(it, schema)) return;
      var props = (0, code_1$3.allSchemaProperties)(parentSchema.properties);
      var patProps = (0, code_1$3.allSchemaProperties)(parentSchema.patternProperties);
      checkAdditionalProperties();
      cxt.ok((0, codegen_1$5._)(_templateObject2$6 || (_templateObject2$6 = _taggedTemplateLiteral(["", " === ", ""])), errsCount, names_1["default"].errors));
      function checkAdditionalProperties() {
        gen.forIn("key", data, function (key) {
          if (!props.length && !patProps.length) additionalPropertyCode(key);else gen["if"](isAdditional(key), function () {
            return additionalPropertyCode(key);
          });
        });
      }
      function isAdditional(key) {
        var definedProp;
        if (props.length > 8) {
          // TODO maybe an option instead of hard-coded 8?
          var propsSchema = (0, util_1$8.schemaRefOrVal)(it, parentSchema.properties, "properties");
          definedProp = (0, code_1$3.isOwnProperty)(gen, propsSchema, key);
        } else if (props.length) {
          definedProp = (codegen_1$5.or).apply(void 0, _toConsumableArray(props.map(function (p) {
            return (0, codegen_1$5._)(_templateObject3$5 || (_templateObject3$5 = _taggedTemplateLiteral(["", " === ", ""])), key, p);
          })));
        } else {
          definedProp = codegen_1$5.nil;
        }
        if (patProps.length) {
          definedProp = (codegen_1$5.or).apply(void 0, [definedProp].concat(_toConsumableArray(patProps.map(function (p) {
            return (0, codegen_1$5._)(_templateObject4$3 || (_templateObject4$3 = _taggedTemplateLiteral(["", ".test(", ")"])), (0, code_1$3.usePattern)(cxt, p), key);
          }))));
        }
        return (0, codegen_1$5.not)(definedProp);
      }
      function deleteAdditional(key) {
        gen.code((0, codegen_1$5._)(_templateObject5$2 || (_templateObject5$2 = _taggedTemplateLiteral(["delete ", "[", "]"])), data, key));
      }
      function additionalPropertyCode(key) {
        if (opts.removeAdditional === "all" || opts.removeAdditional && schema === false) {
          deleteAdditional(key);
          return;
        }
        if (schema === false) {
          cxt.setParams({
            additionalProperty: key
          });
          cxt.error();
          if (!allErrors) gen["break"]();
          return;
        }
        if (_typeof(schema) == "object" && !(0, util_1$8.alwaysValidSchema)(it, schema)) {
          var valid = gen.name("valid");
          if (opts.removeAdditional === "failing") {
            applyAdditionalSchema(key, valid, false);
            gen["if"]((0, codegen_1$5.not)(valid), function () {
              cxt.reset();
              deleteAdditional(key);
            });
          } else {
            applyAdditionalSchema(key, valid);
            if (!allErrors) gen["if"]((0, codegen_1$5.not)(valid), function () {
              return gen["break"]();
            });
          }
        }
      }
      function applyAdditionalSchema(key, valid, errors) {
        var subschema = {
          keyword: "additionalProperties",
          dataProp: key,
          dataPropType: util_1$8.Type.Str
        };
        if (errors === false) {
          Object.assign(subschema, {
            compositeRule: true,
            createErrors: false,
            allErrors: false
          });
        }
        cxt.subschema(subschema, valid);
      }
    }
  };
  additionalProperties["default"] = def$a;

  var properties$1 = {};

  Object.defineProperty(properties$1, "__esModule", {
    value: true
  });
  var validate_1 = requireValidate();
  var code_1$2 = requireCode();
  var util_1$7 = util;
  var additionalProperties_1$1 = additionalProperties;
  var def$9 = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code: function code(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        parentSchema = cxt.parentSchema,
        data = cxt.data,
        it = cxt.it;
      if (it.opts.removeAdditional === "all" && parentSchema.additionalProperties === undefined) {
        additionalProperties_1$1["default"].code(new validate_1.KeywordCxt(it, additionalProperties_1$1["default"], "additionalProperties"));
      }
      var allProps = (0, code_1$2.allSchemaProperties)(schema);
      var _iterator = _createForOfIteratorHelper(allProps),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var prop = _step.value;
          it.definedProperties.add(prop);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (it.opts.unevaluated && allProps.length && it.props !== true) {
        it.props = util_1$7.mergeEvaluated.props(gen, (0, util_1$7.toHash)(allProps), it.props);
      }
      var properties = allProps.filter(function (p) {
        return !(0, util_1$7.alwaysValidSchema)(it, schema[p]);
      });
      if (properties.length === 0) return;
      var valid = gen.name("valid");
      var _iterator2 = _createForOfIteratorHelper(properties),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _prop = _step2.value;
          if (hasDefault(_prop)) {
            applyPropertySchema(_prop);
          } else {
            gen["if"]((0, code_1$2.propertyInData)(gen, data, _prop, it.opts.ownProperties));
            applyPropertySchema(_prop);
            if (!it.allErrors) gen["else"]()["var"](valid, true);
            gen.endIf();
          }
          cxt.it.definedProperties.add(_prop);
          cxt.ok(valid);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      function hasDefault(prop) {
        return it.opts.useDefaults && !it.compositeRule && schema[prop]["default"] !== undefined;
      }
      function applyPropertySchema(prop) {
        cxt.subschema({
          keyword: "properties",
          schemaProp: prop,
          dataProp: prop
        }, valid);
      }
    }
  };
  properties$1["default"] = def$9;

  var patternProperties = {};

  var _templateObject$6, _templateObject2$5;
  Object.defineProperty(patternProperties, "__esModule", {
    value: true
  });
  var code_1$1 = requireCode();
  var codegen_1$4 = codegen;
  var util_1$6 = util;
  var util_2 = util;
  var def$8 = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code: function code(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        data = cxt.data,
        parentSchema = cxt.parentSchema,
        it = cxt.it;
      var opts = it.opts;
      var patterns = (0, code_1$1.allSchemaProperties)(schema);
      var alwaysValidPatterns = patterns.filter(function (p) {
        return (0, util_1$6.alwaysValidSchema)(it, schema[p]);
      });
      if (patterns.length === 0 || alwaysValidPatterns.length === patterns.length && (!it.opts.unevaluated || it.props === true)) {
        return;
      }
      var checkProperties = opts.strictSchema && !opts.allowMatchingProperties && parentSchema.properties;
      var valid = gen.name("valid");
      if (it.props !== true && !(it.props instanceof codegen_1$4.Name)) {
        it.props = (0, util_2.evaluatedPropsToName)(gen, it.props);
      }
      var props = it.props;
      validatePatternProperties();
      function validatePatternProperties() {
        var _iterator = _createForOfIteratorHelper(patterns),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var pat = _step.value;
            if (checkProperties) checkMatchingProperties(pat);
            if (it.allErrors) {
              validateProperties(pat);
            } else {
              gen["var"](valid, true); // TODO var
              validateProperties(pat);
              gen["if"](valid);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      function checkMatchingProperties(pat) {
        for (var prop in checkProperties) {
          if (new RegExp(pat).test(prop)) {
            (0, util_1$6.checkStrictMode)(it, "property ".concat(prop, " matches pattern ").concat(pat, " (use allowMatchingProperties)"));
          }
        }
      }
      function validateProperties(pat) {
        gen.forIn("key", data, function (key) {
          gen["if"]((0, codegen_1$4._)(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["", ".test(", ")"])), (0, code_1$1.usePattern)(cxt, pat), key), function () {
            var alwaysValid = alwaysValidPatterns.includes(pat);
            if (!alwaysValid) {
              cxt.subschema({
                keyword: "patternProperties",
                schemaProp: pat,
                dataProp: key,
                dataPropType: util_2.Type.Str
              }, valid);
            }
            if (it.opts.unevaluated && props !== true) {
              gen.assign((0, codegen_1$4._)(_templateObject2$5 || (_templateObject2$5 = _taggedTemplateLiteral(["", "[", "]"])), props, key), true);
            } else if (!alwaysValid && !it.allErrors) {
              // can short-circuit if `unevaluatedProperties` is not supported (opts.next === false)
              // or if all properties were evaluated (props === true)
              gen["if"]((0, codegen_1$4.not)(valid), function () {
                return gen["break"]();
              });
            }
          });
        });
      }
    }
  };
  patternProperties["default"] = def$8;

  var not = {};

  Object.defineProperty(not, "__esModule", {
    value: true
  });
  var util_1$5 = util;
  var def$7 = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: true,
    code: function code(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        it = cxt.it;
      if ((0, util_1$5.alwaysValidSchema)(it, schema)) {
        cxt.fail();
        return;
      }
      var valid = gen.name("valid");
      cxt.subschema({
        keyword: "not",
        compositeRule: true,
        createErrors: false,
        allErrors: false
      }, valid);
      cxt.failResult(valid, function () {
        return cxt.reset();
      }, function () {
        return cxt.error();
      });
    },
    error: {
      message: "must NOT be valid"
    }
  };
  not["default"] = def$7;

  var anyOf = {};

  Object.defineProperty(anyOf, "__esModule", {
    value: true
  });
  var code_1 = requireCode();
  var def$6 = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: true,
    code: code_1.validateUnion,
    error: {
      message: "must match a schema in anyOf"
    }
  };
  anyOf["default"] = def$6;

  var oneOf = {};

  var _templateObject$5, _templateObject2$4, _templateObject3$4;
  Object.defineProperty(oneOf, "__esModule", {
    value: true
  });
  var codegen_1$3 = codegen;
  var util_1$4 = util;
  var error$3 = {
    message: "must match exactly one schema in oneOf",
    params: function params(_ref) {
      var _params = _ref.params;
      return (0, codegen_1$3._)(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["{passingSchemas: ", "}"])), _params.passing);
    }
  };
  var def$5 = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: true,
    error: error$3,
    code: function code(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        parentSchema = cxt.parentSchema,
        it = cxt.it;
      /* istanbul ignore if */
      if (!Array.isArray(schema)) throw new Error("ajv implementation error");
      if (it.opts.discriminator && parentSchema.discriminator) return;
      var schArr = schema;
      var valid = gen["let"]("valid", false);
      var passing = gen["let"]("passing", null);
      var schValid = gen.name("_valid");
      cxt.setParams({
        passing: passing
      });
      // TODO possibly fail straight away (with warning or exception) if there are two empty always valid schemas
      gen.block(validateOneOf);
      cxt.result(valid, function () {
        return cxt.reset();
      }, function () {
        return cxt.error(true);
      });
      function validateOneOf() {
        schArr.forEach(function (sch, i) {
          var schCxt;
          if ((0, util_1$4.alwaysValidSchema)(it, sch)) {
            gen["var"](schValid, true);
          } else {
            schCxt = cxt.subschema({
              keyword: "oneOf",
              schemaProp: i,
              compositeRule: true
            }, schValid);
          }
          if (i > 0) {
            gen["if"]((0, codegen_1$3._)(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteral(["", " && ", ""])), schValid, valid)).assign(valid, false).assign(passing, (0, codegen_1$3._)(_templateObject3$4 || (_templateObject3$4 = _taggedTemplateLiteral(["[", ", ", "]"])), passing, i))["else"]();
          }
          gen["if"](schValid, function () {
            gen.assign(valid, true);
            gen.assign(passing, i);
            if (schCxt) cxt.mergeEvaluated(schCxt, codegen_1$3.Name);
          });
        });
      }
    }
  };
  oneOf["default"] = def$5;

  var allOf = {};

  Object.defineProperty(allOf, "__esModule", {
    value: true
  });
  var util_1$3 = util;
  var def$4 = {
    keyword: "allOf",
    schemaType: "array",
    code: function code(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        it = cxt.it;
      /* istanbul ignore if */
      if (!Array.isArray(schema)) throw new Error("ajv implementation error");
      var valid = gen.name("valid");
      schema.forEach(function (sch, i) {
        if ((0, util_1$3.alwaysValidSchema)(it, sch)) return;
        var schCxt = cxt.subschema({
          keyword: "allOf",
          schemaProp: i
        }, valid);
        cxt.ok(valid);
        cxt.mergeEvaluated(schCxt);
      });
    }
  };
  allOf["default"] = def$4;

  var _if = {};

  var _templateObject$4, _templateObject2$3, _templateObject3$3;
  Object.defineProperty(_if, "__esModule", {
    value: true
  });
  var codegen_1$2 = codegen;
  var util_1$2 = util;
  var error$2 = {
    message: function message(_ref) {
      var params = _ref.params;
      return (0, codegen_1$2.str)(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["must match \"", "\" schema"])), params.ifClause);
    },
    params: function params(_ref2) {
      var _params = _ref2.params;
      return (0, codegen_1$2._)(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral(["{failingKeyword: ", "}"])), _params.ifClause);
    }
  };
  var def$3 = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: true,
    error: error$2,
    code: function code(cxt) {
      var gen = cxt.gen,
        parentSchema = cxt.parentSchema,
        it = cxt.it;
      if (parentSchema.then === undefined && parentSchema["else"] === undefined) {
        (0, util_1$2.checkStrictMode)(it, '"if" without "then" and "else" is ignored');
      }
      var hasThen = hasSchema(it, "then");
      var hasElse = hasSchema(it, "else");
      if (!hasThen && !hasElse) return;
      var valid = gen["let"]("valid", true);
      var schValid = gen.name("_valid");
      validateIf();
      cxt.reset();
      if (hasThen && hasElse) {
        var ifClause = gen["let"]("ifClause");
        cxt.setParams({
          ifClause: ifClause
        });
        gen["if"](schValid, validateClause("then", ifClause), validateClause("else", ifClause));
      } else if (hasThen) {
        gen["if"](schValid, validateClause("then"));
      } else {
        gen["if"]((0, codegen_1$2.not)(schValid), validateClause("else"));
      }
      cxt.pass(valid, function () {
        return cxt.error(true);
      });
      function validateIf() {
        var schCxt = cxt.subschema({
          keyword: "if",
          compositeRule: true,
          createErrors: false,
          allErrors: false
        }, schValid);
        cxt.mergeEvaluated(schCxt);
      }
      function validateClause(keyword, ifClause) {
        return function () {
          var schCxt = cxt.subschema({
            keyword: keyword
          }, schValid);
          gen.assign(valid, schValid);
          cxt.mergeValidEvaluated(schCxt, valid);
          if (ifClause) gen.assign(ifClause, (0, codegen_1$2._)(_templateObject3$3 || (_templateObject3$3 = _taggedTemplateLiteral(["", ""])), keyword));else cxt.setParams({
            ifClause: keyword
          });
        };
      }
    }
  };
  function hasSchema(it, keyword) {
    var schema = it.schema[keyword];
    return schema !== undefined && !(0, util_1$2.alwaysValidSchema)(it, schema);
  }
  _if["default"] = def$3;

  var thenElse = {};

  Object.defineProperty(thenElse, "__esModule", {
    value: true
  });
  var util_1$1 = util;
  var def$2 = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code: function code(_ref) {
      var keyword = _ref.keyword,
        parentSchema = _ref.parentSchema,
        it = _ref.it;
      if (parentSchema["if"] === undefined) (0, util_1$1.checkStrictMode)(it, "\"".concat(keyword, "\" without \"if\" is ignored"));
    }
  };
  thenElse["default"] = def$2;

  Object.defineProperty(applicator, "__esModule", {
    value: true
  });
  var additionalItems_1 = additionalItems;
  var prefixItems_1 = prefixItems;
  var items_1 = items;
  var items2020_1 = items2020;
  var contains_1 = contains;
  var dependencies_1 = dependencies;
  var propertyNames_1 = propertyNames;
  var additionalProperties_1 = additionalProperties;
  var properties_1 = properties$1;
  var patternProperties_1 = patternProperties;
  var not_1 = not;
  var anyOf_1 = anyOf;
  var oneOf_1 = oneOf;
  var allOf_1 = allOf;
  var if_1 = _if;
  var thenElse_1 = thenElse;
  function getApplicator() {
    var draft2020 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var applicator = [
    // any
    not_1["default"], anyOf_1["default"], oneOf_1["default"], allOf_1["default"], if_1["default"], thenElse_1["default"],
    // object
    propertyNames_1["default"], additionalProperties_1["default"], dependencies_1["default"], properties_1["default"], patternProperties_1["default"]];
    // array
    if (draft2020) applicator.push(prefixItems_1["default"], items2020_1["default"]);else applicator.push(additionalItems_1["default"], items_1["default"]);
    applicator.push(contains_1["default"]);
    return applicator;
  }
  applicator["default"] = getApplicator;

  var format$2 = {};

  var format$1 = {};

  var _templateObject$3, _templateObject2$2, _templateObject3$2, _templateObject4$2, _templateObject5$1, _templateObject6$1, _templateObject7$1, _templateObject8$1, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;
  Object.defineProperty(format$1, "__esModule", {
    value: true
  });
  var codegen_1$1 = codegen;
  var error$1 = {
    message: function message(_ref) {
      var schemaCode = _ref.schemaCode;
      return (0, codegen_1$1.str)(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["must match format \"", "\""])), schemaCode);
    },
    params: function params(_ref2) {
      var schemaCode = _ref2.schemaCode;
      return (0, codegen_1$1._)(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["{format: ", "}"])), schemaCode);
    }
  };
  var def$1 = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: true,
    error: error$1,
    code: function code(cxt, ruleType) {
      var gen = cxt.gen,
        data = cxt.data,
        $data = cxt.$data,
        schema = cxt.schema,
        schemaCode = cxt.schemaCode,
        it = cxt.it;
      var opts = it.opts,
        errSchemaPath = it.errSchemaPath,
        schemaEnv = it.schemaEnv,
        self = it.self;
      if (!opts.validateFormats) return;
      if ($data) validate$DataFormat();else validateFormat();
      function validate$DataFormat() {
        var fmts = gen.scopeValue("formats", {
          ref: self.formats,
          code: opts.code.formats
        });
        var fDef = gen["const"]("fDef", (0, codegen_1$1._)(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral(["", "[", "]"])), fmts, schemaCode));
        var fType = gen["let"]("fType");
        var format = gen["let"]("format");
        // TODO simplify
        gen["if"]((0, codegen_1$1._)(_templateObject4$2 || (_templateObject4$2 = _taggedTemplateLiteral(["typeof ", " == \"object\" && !(", " instanceof RegExp)"])), fDef, fDef), function () {
          return gen.assign(fType, (0, codegen_1$1._)(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteral(["", ".type || \"string\""])), fDef)).assign(format, (0, codegen_1$1._)(_templateObject6$1 || (_templateObject6$1 = _taggedTemplateLiteral(["", ".validate"])), fDef));
        }, function () {
          return gen.assign(fType, (0, codegen_1$1._)(_templateObject7$1 || (_templateObject7$1 = _taggedTemplateLiteral(["\"string\""])))).assign(format, fDef);
        });
        cxt.fail$data((0, codegen_1$1.or)(unknownFmt(), invalidFmt()));
        function unknownFmt() {
          if (opts.strictSchema === false) return codegen_1$1.nil;
          return (0, codegen_1$1._)(_templateObject8$1 || (_templateObject8$1 = _taggedTemplateLiteral(["", " && !", ""])), schemaCode, format);
        }
        function invalidFmt() {
          var callFormat = schemaEnv.$async ? (0, codegen_1$1._)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["(", ".async ? await ", "(", ") : ", "(", "))"])), fDef, format, data, format, data) : (0, codegen_1$1._)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["", "(", ")"])), format, data);
          var validData = (0, codegen_1$1._)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["(typeof ", " == \"function\" ? ", " : ", ".test(", "))"])), format, callFormat, format, data);
          return (0, codegen_1$1._)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["", " && ", " !== true && ", " === ", " && !", ""])), format, format, fType, ruleType, validData);
        }
      }
      function validateFormat() {
        var formatDef = self.formats[schema];
        if (!formatDef) {
          unknownFormat();
          return;
        }
        if (formatDef === true) return;
        var _getFormat = getFormat(formatDef),
          _getFormat2 = _slicedToArray(_getFormat, 3),
          fmtType = _getFormat2[0],
          format = _getFormat2[1],
          fmtRef = _getFormat2[2];
        if (fmtType === ruleType) cxt.pass(validCondition());
        function unknownFormat() {
          if (opts.strictSchema === false) {
            self.logger.warn(unknownMsg());
            return;
          }
          throw new Error(unknownMsg());
          function unknownMsg() {
            return "unknown format \"".concat(schema, "\" ignored in schema at path \"").concat(errSchemaPath, "\"");
          }
        }
        function getFormat(fmtDef) {
          var code = fmtDef instanceof RegExp ? (0, codegen_1$1.regexpCode)(fmtDef) : opts.code.formats ? (0, codegen_1$1._)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["", "", ""])), opts.code.formats, (0, codegen_1$1.getProperty)(schema)) : undefined;
          var fmt = gen.scopeValue("formats", {
            key: schema,
            ref: fmtDef,
            code: code
          });
          if (_typeof(fmtDef) == "object" && !(fmtDef instanceof RegExp)) {
            return [fmtDef.type || "string", fmtDef.validate, (0, codegen_1$1._)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["", ".validate"])), fmt)];
          }
          return ["string", fmtDef, fmt];
        }
        function validCondition() {
          if (_typeof(formatDef) == "object" && !(formatDef instanceof RegExp) && formatDef.async) {
            if (!schemaEnv.$async) throw new Error("async format in sync schema");
            return (0, codegen_1$1._)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["await ", "(", ")"])), fmtRef, data);
          }
          return typeof format == "function" ? (0, codegen_1$1._)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["", "(", ")"])), fmtRef, data) : (0, codegen_1$1._)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["", ".test(", ")"])), fmtRef, data);
        }
      }
    }
  };
  format$1["default"] = def$1;

  Object.defineProperty(format$2, "__esModule", {
    value: true
  });
  var format_1$1 = format$1;
  var format = [format_1$1["default"]];
  format$2["default"] = format;

  var metadata = {};

  Object.defineProperty(metadata, "__esModule", {
    value: true
  });
  metadata.contentVocabulary = metadata.metadataVocabulary = void 0;
  metadata.metadataVocabulary = ["title", "description", "default", "deprecated", "readOnly", "writeOnly", "examples"];
  metadata.contentVocabulary = ["contentMediaType", "contentEncoding", "contentSchema"];

  Object.defineProperty(draft7, "__esModule", {
    value: true
  });
  var core_1 = core$1;
  var validation_1 = validation$1;
  var applicator_1 = applicator;
  var format_1 = format$2;
  var metadata_1 = metadata;
  var draft7Vocabularies = [core_1["default"], validation_1["default"], (0, applicator_1["default"])(), format_1["default"], metadata_1.metadataVocabulary, metadata_1.contentVocabulary];
  draft7["default"] = draft7Vocabularies;

  var discriminator = {};

  var types$1 = {};

  (function (exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DiscrError = void 0;
    (function (DiscrError) {
      DiscrError["Tag"] = "tag";
      DiscrError["Mapping"] = "mapping";
    })(exports.DiscrError || (exports.DiscrError = {}));
  })(types$1);

  var _templateObject$2, _templateObject2$1, _templateObject3$1, _templateObject4$1;
  Object.defineProperty(discriminator, "__esModule", {
    value: true
  });
  var codegen_1 = codegen;
  var types_1 = types$1;
  var compile_1 = compile;
  var util_1 = util;
  var error = {
    message: function message(_ref) {
      var _ref$params = _ref.params,
        discrError = _ref$params.discrError,
        tagName = _ref$params.tagName;
      return discrError === types_1.DiscrError.Tag ? "tag \"".concat(tagName, "\" must be string") : "value of tag \"".concat(tagName, "\" must be in oneOf");
    },
    params: function params(_ref2) {
      var _ref2$params = _ref2.params,
        discrError = _ref2$params.discrError,
        tag = _ref2$params.tag,
        tagName = _ref2$params.tagName;
      return (0, codegen_1._)(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["{error: ", ", tag: ", ", tagValue: ", "}"])), discrError, tagName, tag);
    }
  };
  var def = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: error,
    code: function code(cxt) {
      var gen = cxt.gen,
        data = cxt.data,
        schema = cxt.schema,
        parentSchema = cxt.parentSchema,
        it = cxt.it;
      var oneOf = parentSchema.oneOf;
      if (!it.opts.discriminator) {
        throw new Error("discriminator: requires discriminator option");
      }
      var tagName = schema.propertyName;
      if (typeof tagName != "string") throw new Error("discriminator: requires propertyName");
      if (schema.mapping) throw new Error("discriminator: mapping is not supported");
      if (!oneOf) throw new Error("discriminator: requires oneOf keyword");
      var valid = gen["let"]("valid", false);
      var tag = gen["const"]("tag", (0, codegen_1._)(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["", "", ""])), data, (0, codegen_1.getProperty)(tagName)));
      gen["if"]((0, codegen_1._)(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["typeof ", " == \"string\""])), tag), function () {
        return validateMapping();
      }, function () {
        return cxt.error(false, {
          discrError: types_1.DiscrError.Tag,
          tag: tag,
          tagName: tagName
        });
      });
      cxt.ok(valid);
      function validateMapping() {
        var mapping = getMapping();
        gen["if"](false);
        for (var tagValue in mapping) {
          gen.elseIf((0, codegen_1._)(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["", " === ", ""])), tag, tagValue));
          gen.assign(valid, applyTagSchema(mapping[tagValue]));
        }
        gen["else"]();
        cxt.error(false, {
          discrError: types_1.DiscrError.Mapping,
          tag: tag,
          tagName: tagName
        });
        gen.endIf();
      }
      function applyTagSchema(schemaProp) {
        var _valid = gen.name("valid");
        var schCxt = cxt.subschema({
          keyword: "oneOf",
          schemaProp: schemaProp
        }, _valid);
        cxt.mergeEvaluated(schCxt, codegen_1.Name);
        return _valid;
      }
      function getMapping() {
        var _a;
        var oneOfMapping = {};
        var topRequired = hasRequired(parentSchema);
        var tagRequired = true;
        for (var i = 0; i < oneOf.length; i++) {
          var sch = oneOf[i];
          if ((sch === null || sch === void 0 ? void 0 : sch.$ref) && !(0, util_1.schemaHasRulesButRef)(sch, it.self.RULES)) {
            sch = compile_1.resolveRef.call(it.self, it.schemaEnv.root, it.baseId, sch === null || sch === void 0 ? void 0 : sch.$ref);
            if (sch instanceof compile_1.SchemaEnv) sch = sch.schema;
          }
          var propSch = (_a = sch === null || sch === void 0 ? void 0 : sch.properties) === null || _a === void 0 ? void 0 : _a[tagName];
          if (_typeof(propSch) != "object") {
            throw new Error("discriminator: oneOf subschemas (or referenced schemas) must have \"properties/".concat(tagName, "\""));
          }
          tagRequired = tagRequired && (topRequired || hasRequired(sch));
          addMappings(propSch, i);
        }
        if (!tagRequired) throw new Error("discriminator: \"".concat(tagName, "\" must be required"));
        return oneOfMapping;
        function hasRequired(_ref3) {
          var required = _ref3.required;
          return Array.isArray(required) && required.includes(tagName);
        }
        function addMappings(sch, i) {
          if (sch["const"]) {
            addMapping(sch["const"], i);
          } else if (sch["enum"]) {
            var _iterator = _createForOfIteratorHelper(sch["enum"]),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var tagValue = _step.value;
                addMapping(tagValue, i);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          } else {
            throw new Error("discriminator: \"properties/".concat(tagName, "\" must have \"const\" or \"enum\""));
          }
        }
        function addMapping(tagValue, i) {
          if (typeof tagValue != "string" || tagValue in oneOfMapping) {
            throw new Error("discriminator: \"".concat(tagName, "\" values must be unique strings"));
          }
          oneOfMapping[tagValue] = i;
        }
      }
    }
  };
  discriminator["default"] = def;

  var $schema = "http://json-schema.org/draft-07/schema#";
  var $id = "http://json-schema.org/draft-07/schema#";
  var title = "Core schema meta-schema";
  var definitions = {
  	schemaArray: {
  		type: "array",
  		minItems: 1,
  		items: {
  			$ref: "#"
  		}
  	},
  	nonNegativeInteger: {
  		type: "integer",
  		minimum: 0
  	},
  	nonNegativeIntegerDefault0: {
  		allOf: [
  			{
  				$ref: "#/definitions/nonNegativeInteger"
  			},
  			{
  				"default": 0
  			}
  		]
  	},
  	simpleTypes: {
  		"enum": [
  			"array",
  			"boolean",
  			"integer",
  			"null",
  			"number",
  			"object",
  			"string"
  		]
  	},
  	stringArray: {
  		type: "array",
  		items: {
  			type: "string"
  		},
  		uniqueItems: true,
  		"default": [
  		]
  	}
  };
  var type = [
  	"object",
  	"boolean"
  ];
  var properties = {
  	$id: {
  		type: "string",
  		format: "uri-reference"
  	},
  	$schema: {
  		type: "string",
  		format: "uri"
  	},
  	$ref: {
  		type: "string",
  		format: "uri-reference"
  	},
  	$comment: {
  		type: "string"
  	},
  	title: {
  		type: "string"
  	},
  	description: {
  		type: "string"
  	},
  	"default": true,
  	readOnly: {
  		type: "boolean",
  		"default": false
  	},
  	examples: {
  		type: "array",
  		items: true
  	},
  	multipleOf: {
  		type: "number",
  		exclusiveMinimum: 0
  	},
  	maximum: {
  		type: "number"
  	},
  	exclusiveMaximum: {
  		type: "number"
  	},
  	minimum: {
  		type: "number"
  	},
  	exclusiveMinimum: {
  		type: "number"
  	},
  	maxLength: {
  		$ref: "#/definitions/nonNegativeInteger"
  	},
  	minLength: {
  		$ref: "#/definitions/nonNegativeIntegerDefault0"
  	},
  	pattern: {
  		type: "string",
  		format: "regex"
  	},
  	additionalItems: {
  		$ref: "#"
  	},
  	items: {
  		anyOf: [
  			{
  				$ref: "#"
  			},
  			{
  				$ref: "#/definitions/schemaArray"
  			}
  		],
  		"default": true
  	},
  	maxItems: {
  		$ref: "#/definitions/nonNegativeInteger"
  	},
  	minItems: {
  		$ref: "#/definitions/nonNegativeIntegerDefault0"
  	},
  	uniqueItems: {
  		type: "boolean",
  		"default": false
  	},
  	contains: {
  		$ref: "#"
  	},
  	maxProperties: {
  		$ref: "#/definitions/nonNegativeInteger"
  	},
  	minProperties: {
  		$ref: "#/definitions/nonNegativeIntegerDefault0"
  	},
  	required: {
  		$ref: "#/definitions/stringArray"
  	},
  	additionalProperties: {
  		$ref: "#"
  	},
  	definitions: {
  		type: "object",
  		additionalProperties: {
  			$ref: "#"
  		},
  		"default": {
  		}
  	},
  	properties: {
  		type: "object",
  		additionalProperties: {
  			$ref: "#"
  		},
  		"default": {
  		}
  	},
  	patternProperties: {
  		type: "object",
  		additionalProperties: {
  			$ref: "#"
  		},
  		propertyNames: {
  			format: "regex"
  		},
  		"default": {
  		}
  	},
  	dependencies: {
  		type: "object",
  		additionalProperties: {
  			anyOf: [
  				{
  					$ref: "#"
  				},
  				{
  					$ref: "#/definitions/stringArray"
  				}
  			]
  		}
  	},
  	propertyNames: {
  		$ref: "#"
  	},
  	"const": true,
  	"enum": {
  		type: "array",
  		items: true,
  		minItems: 1,
  		uniqueItems: true
  	},
  	type: {
  		anyOf: [
  			{
  				$ref: "#/definitions/simpleTypes"
  			},
  			{
  				type: "array",
  				items: {
  					$ref: "#/definitions/simpleTypes"
  				},
  				minItems: 1,
  				uniqueItems: true
  			}
  		]
  	},
  	format: {
  		type: "string"
  	},
  	contentMediaType: {
  		type: "string"
  	},
  	contentEncoding: {
  		type: "string"
  	},
  	"if": {
  		$ref: "#"
  	},
  	then: {
  		$ref: "#"
  	},
  	"else": {
  		$ref: "#"
  	},
  	allOf: {
  		$ref: "#/definitions/schemaArray"
  	},
  	anyOf: {
  		$ref: "#/definitions/schemaArray"
  	},
  	oneOf: {
  		$ref: "#/definitions/schemaArray"
  	},
  	not: {
  		$ref: "#"
  	}
  };
  var require$$3 = {
  	$schema: $schema,
  	$id: $id,
  	title: title,
  	definitions: definitions,
  	type: type,
  	properties: properties,
  	"default": true
  };

  (function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MissingRefError = exports.ValidationError = exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = void 0;
    var core_1 = core$2;
    var draft7_1 = draft7;
    var discriminator_1 = discriminator;
    var draft7MetaSchema = require$$3;
    var META_SUPPORT_DATA = ["/properties"];
    var META_SCHEMA_ID = "http://json-schema.org/draft-07/schema";
    var Ajv = /*#__PURE__*/function (_core_1$default) {
      function Ajv() {
        _classCallCheck(this, Ajv);
        return _callSuper(this, Ajv, arguments);
      }
      _inherits(Ajv, _core_1$default);
      return _createClass(Ajv, [{
        key: "_addVocabularies",
        value: function _addVocabularies() {
          var _this = this;
          _get(_getPrototypeOf(Ajv.prototype), "_addVocabularies", this).call(this);
          draft7_1["default"].forEach(function (v) {
            return _this.addVocabulary(v);
          });
          if (this.opts.discriminator) this.addKeyword(discriminator_1["default"]);
        }
      }, {
        key: "_addDefaultMetaSchema",
        value: function _addDefaultMetaSchema() {
          _get(_getPrototypeOf(Ajv.prototype), "_addDefaultMetaSchema", this).call(this);
          if (!this.opts.meta) return;
          var metaSchema = this.opts.$data ? this.$dataMetaSchema(draft7MetaSchema, META_SUPPORT_DATA) : draft7MetaSchema;
          this.addMetaSchema(metaSchema, META_SCHEMA_ID, false);
          this.refs["http://json-schema.org/schema"] = META_SCHEMA_ID;
        }
      }, {
        key: "defaultMeta",
        value: function defaultMeta() {
          return this.opts.defaultMeta = _get(_getPrototypeOf(Ajv.prototype), "defaultMeta", this).call(this) || (this.getSchema(META_SCHEMA_ID) ? META_SCHEMA_ID : undefined);
        }
      }]);
    }(core_1["default"]);
    module.exports = exports = Ajv;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = Ajv;
    var validate_1 = requireValidate();
    Object.defineProperty(exports, "KeywordCxt", {
      enumerable: true,
      get: function get() {
        return validate_1.KeywordCxt;
      }
    });
    var codegen_1 = codegen;
    Object.defineProperty(exports, "_", {
      enumerable: true,
      get: function get() {
        return codegen_1._;
      }
    });
    Object.defineProperty(exports, "str", {
      enumerable: true,
      get: function get() {
        return codegen_1.str;
      }
    });
    Object.defineProperty(exports, "stringify", {
      enumerable: true,
      get: function get() {
        return codegen_1.stringify;
      }
    });
    Object.defineProperty(exports, "nil", {
      enumerable: true,
      get: function get() {
        return codegen_1.nil;
      }
    });
    Object.defineProperty(exports, "Name", {
      enumerable: true,
      get: function get() {
        return codegen_1.Name;
      }
    });
    Object.defineProperty(exports, "CodeGen", {
      enumerable: true,
      get: function get() {
        return codegen_1.CodeGen;
      }
    });
    var validation_error_1 = requireValidation_error();
    Object.defineProperty(exports, "ValidationError", {
      enumerable: true,
      get: function get() {
        return validation_error_1["default"];
      }
    });
    var ref_error_1 = requireRef_error();
    Object.defineProperty(exports, "MissingRefError", {
      enumerable: true,
      get: function get() {
        return ref_error_1["default"];
      }
    });
  })(ajv, ajv.exports);
  var ajvExports = ajv.exports;

  var _templateObject$1, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
  (function (exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.formatLimitDefinition = void 0;
    var ajv_1 = ajvExports;
    var codegen_1 = codegen;
    var ops = codegen_1.operators;
    var KWDs = {
      formatMaximum: {
        okStr: "<=",
        ok: ops.LTE,
        fail: ops.GT
      },
      formatMinimum: {
        okStr: ">=",
        ok: ops.GTE,
        fail: ops.LT
      },
      formatExclusiveMaximum: {
        okStr: "<",
        ok: ops.LT,
        fail: ops.GTE
      },
      formatExclusiveMinimum: {
        okStr: ">",
        ok: ops.GT,
        fail: ops.LTE
      }
    };
    var error = {
      message: function message(_ref) {
        var keyword = _ref.keyword,
          schemaCode = _ref.schemaCode;
        return (0, codegen_1.str)(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["should be ", " ", ""])), KWDs[keyword].okStr, schemaCode);
      },
      params: function params(_ref2) {
        var keyword = _ref2.keyword,
          schemaCode = _ref2.schemaCode;
        return (0, codegen_1._)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["{comparison: ", ", limit: ", "}"])), KWDs[keyword].okStr, schemaCode);
      }
    };
    exports.formatLimitDefinition = {
      keyword: Object.keys(KWDs),
      type: "string",
      schemaType: "string",
      $data: true,
      error: error,
      code: function code(cxt) {
        var gen = cxt.gen,
          data = cxt.data,
          schemaCode = cxt.schemaCode,
          keyword = cxt.keyword,
          it = cxt.it;
        var opts = it.opts,
          self = it.self;
        if (!opts.validateFormats) return;
        var fCxt = new ajv_1.KeywordCxt(it, self.RULES.all.format.definition, "format");
        if (fCxt.$data) validate$DataFormat();else validateFormat();
        function validate$DataFormat() {
          var fmts = gen.scopeValue("formats", {
            ref: self.formats,
            code: opts.code.formats
          });
          var fmt = gen["const"]("fmt", (0, codegen_1._)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["", "[", "]"])), fmts, fCxt.schemaCode));
          cxt.fail$data((0, codegen_1.or)((0, codegen_1._)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["typeof ", " != \"object\""])), fmt), (0, codegen_1._)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["", " instanceof RegExp"])), fmt), (0, codegen_1._)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["typeof ", ".compare != \"function\""])), fmt), compareCode(fmt)));
        }
        function validateFormat() {
          var format = fCxt.schema;
          var fmtDef = self.formats[format];
          if (!fmtDef || fmtDef === true) return;
          if (_typeof(fmtDef) != "object" || fmtDef instanceof RegExp || typeof fmtDef.compare != "function") {
            throw new Error("\"".concat(keyword, "\": format \"").concat(format, "\" does not define \"compare\" function"));
          }
          var fmt = gen.scopeValue("formats", {
            key: format,
            ref: fmtDef,
            code: opts.code.formats ? (0, codegen_1._)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["", "", ""])), opts.code.formats, (0, codegen_1.getProperty)(format)) : undefined
          });
          cxt.fail$data(compareCode(fmt));
        }
        function compareCode(fmt) {
          return (0, codegen_1._)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["", ".compare(", ", ", ") ", " 0"])), fmt, data, schemaCode, KWDs[keyword].fail);
        }
      },
      dependencies: ["format"]
    };
    var formatLimitPlugin = function formatLimitPlugin(ajv) {
      ajv.addKeyword(exports.formatLimitDefinition);
      return ajv;
    };
    exports["default"] = formatLimitPlugin;
  })(limit);

  var _templateObject;
  (function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var formats_1 = formats;
    var limit_1 = limit;
    var codegen_1 = codegen;
    var fullName = new codegen_1.Name("fullFormats");
    var fastName = new codegen_1.Name("fastFormats");
    var formatsPlugin = function formatsPlugin(ajv) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        keywords: true
      };
      if (Array.isArray(opts)) {
        addFormats(ajv, opts, formats_1.fullFormats, fullName);
        return ajv;
      }
      var _ref = opts.mode === "fast" ? [formats_1.fastFormats, fastName] : [formats_1.fullFormats, fullName],
        _ref2 = _slicedToArray(_ref, 2),
        formats = _ref2[0],
        exportName = _ref2[1];
      var list = opts.formats || formats_1.formatNames;
      addFormats(ajv, list, formats, exportName);
      if (opts.keywords) (0, limit_1["default"])(ajv);
      return ajv;
    };
    formatsPlugin.get = function (name) {
      var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "full";
      var formats = mode === "fast" ? formats_1.fastFormats : formats_1.fullFormats;
      var f = formats[name];
      if (!f) throw new Error("Unknown format \"".concat(name, "\""));
      return f;
    };
    function addFormats(ajv, list, fs, exportName) {
      var _a;
      var _b;
      (_a = (_b = ajv.opts.code).formats) !== null && _a !== void 0 ? _a : _b.formats = (0, codegen_1._)(_templateObject || (_templateObject = _taggedTemplateLiteral(["require(\"ajv-formats/dist/formats\").", ""])), exportName);
      var _iterator = _createForOfIteratorHelper(list),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var f = _step.value;
          ajv.addFormat(f, fs[f]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    module.exports = exports = formatsPlugin;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = formatsPlugin;
  })(dist, dist.exports);
  var distExports = dist.exports;

  var dereferenceJsonSchema = {};

  var types = {};

  Object.defineProperty(types, "__esModule", {
    value: true
  });

  var dereference = {};

  var klona = {};

  (function (exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "klona", {
      enumerable: true,
      get: function get() {
        return klona;
      }
    });
    function klona(val) {
      var index, out, tmp;
      if (Array.isArray(val)) {
        out = Array(index = val.length);
        while (index--) out[index] = (tmp = val[index]) && _typeof(tmp) === "object" ? klona(tmp) : tmp;
        return out;
      }
      if (Object.prototype.toString.call(val) === "[object Object]") {
        out = {}; // null
        for (index in val) {
          if (index === "__proto__") {
            Object.defineProperty(out, index, {
              value: klona(val[index]),
              configurable: true,
              enumerable: true,
              writable: true
            });
          } else {
            out[index] = (tmp = val[index]) && _typeof(tmp) === "object" ? klona(tmp) : tmp;
          }
        }
        return out;
      }
      return val;
    }
  })(klona);

  var resolveRef = {};

  (function (exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "resolveRefSync", {
      enumerable: true,
      get: function get() {
        return resolveRefSync;
      }
    });
    var cache = new Map();
    var resolveRefSync = function resolveRefSync(schema, ref) {
      if (!cache.has(schema)) {
        cache.set(schema, new Map());
      }
      var schemaCache = cache.get(schema);
      if (schemaCache.has(ref)) {
        return schemaCache.get(ref);
      }
      var path = ref.split("/").slice(1);
      var current = schema;
      var _iteratorNormalCompletion = true,
        _didIteratorError = false,
        _iteratorError = undefined;
      try {
        for (var _iterator = path[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var segment = _step.value;
          if (!current || _typeof(current) !== "object") {
            // we've reached a dead end
            current = null;
          }
          var _current_segment;
          current = (_current_segment = current[segment]) !== null && _current_segment !== void 0 ? _current_segment : null;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
      schemaCache.set(ref, current);
      return current;
    };
  })(resolveRef);

  (function (exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "dereferenceSync", {
      enumerable: true,
      get: function get() {
        return dereferenceSync;
      }
    });
    var _klona = klona;
    var _resolveRef = resolveRef;
    var cache = new Map();
    var dereferenceSync = function dereferenceSync(schema) {
      if (cache.has(schema)) {
        return cache.get(schema);
      }
      var visitedNodes = new Set();
      var cloned = (0, _klona.klona)(schema);
      var resolve = function resolve(current, path) {
        if (_typeof(current) === "object" && current !== null) {
          // make sure we don't visit the same node twice
          if (visitedNodes.has(current)) {
            return current;
          }
          visitedNodes.add(current);
          if (Array.isArray(current)) {
            // array
            for (var index = 0; index < current.length; index++) {
              current[index] = resolve(current[index]);
            }
          } else {
            // object
            if ("$ref" in current && typeof current["$ref"] === "string") {
              return (0, _resolveRef.resolveRefSync)(cloned, current["$ref"]);
            }
            for (var key in current) {
              current[key] = resolve(current[key]);
            }
          }
        }
        return current;
      };
      var result = resolve(cloned);
      cache.set(schema, result);
      return result;
    };
  })(dereference);

  (function (exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    _exportStar(types, exports);
    _exportStar(dereference, exports);
    _exportStar(resolveRef, exports);
    function _exportStar(from, to) {
      Object.keys(from).forEach(function (k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) Object.defineProperty(to, k, {
          enumerable: true,
          get: function get() {
            return from[k];
          }
        });
      });
      return from;
    }
  })(dereferenceJsonSchema);

  exports.addFormats = distExports.addFormats;
  exports.dereferenceSync = dereferenceJsonSchema.dereferenceSync;

}));
