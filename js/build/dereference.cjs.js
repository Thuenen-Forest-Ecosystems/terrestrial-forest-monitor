'use strict';

function _mergeNamespaces(n, m) {
	m.forEach(function (e) {
		e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
			if (k !== 'default' && !(k in n)) {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	});
	return Object.freeze(n);
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var dereferenceJsonSchema = {};

var types = {};

Object.defineProperty(types, "__esModule", {
  value: true
});

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

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
var index = /*@__PURE__*/getDefaultExportFromCjs(dereferenceJsonSchema);

var index$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: index
}, [dereferenceJsonSchema]);

exports.Dereference = index$1;
