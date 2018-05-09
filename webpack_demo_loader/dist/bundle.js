/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__count__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addImages__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addImages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__addImages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addCss__ = __webpack_require__(5);


console.log(Object(__WEBPACK_IMPORTED_MODULE_0__count__["a" /* default */])(1, 3));

 // 添加图片
 // 添加css

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// babel-loader 用于让 webpack 知道如何运行 babel

// babel-core 可以看做编译器，这个库知道如何解析代码

// babel-preset-env 这个库可以根据环境的不同转换代码

/* harmony default export */ __webpack_exports__["a"] = ((a, b) => {
	return a + b;
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// file-loader url-loader  现在只用url-loader（在file-loader的基础上面封装）

let smImg = document.createElement('img');
smImg.src = __webpack_require__(3);

let bgImg = document.createElement('img');
bgImg.src = __webpack_require__(4);

document.getElementById('app').appendChild(smImg);
document.getElementById('app').appendChild(bgImg);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAAA0CAYAAAAXBNP2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiZGY1ZWMzZS01ZTEwLTdmNDktODI5Yy04MzAwZjkyOWQwMjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkY4NTQ1NkRGNkFEMTFFNzk0QTdDMzJBNDhCNjQ5N0UiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkY4NTQ1NkNGNkFEMTFFNzk0QTdDMzJBNDhCNjQ5N0UiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjMwOTVBMDU1RjZBRDExRTdBNjk1QTQ1NTU0MTU5MTk3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjMwOTVBMDU2RjZBRDExRTdBNjk1QTQ1NTU0MTU5MTk3Ii8+IDwvcmRmOkRlc2Ny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"

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/bgImg.jpeg?t=1525770936990";

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_index_less__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_index_less__);
// npm i --save-dev css-loader style-loader less less-loader



/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(7);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./index.less", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./index.less");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "body {\n  background: teal;\n}\nbody img {\n  display: block;\n  border: 10px solid #fff;\n  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.4);\n}\n", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(10);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);