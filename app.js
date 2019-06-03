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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const Data = [];

function getData(partId) {
  if (arguments.length === 0) {
    return Data;
  }

  if (arguments.length !== 0 && Data[partId]) {
    return Data[partId];
  }

  return false;
}

function getSelectedFrame() {
  let X;
  Data.forEach((item, i) => {
    if (item.selected === 1) X = i;
  });
  return X;
}

function setSelectedFrame(fr) {
  Data.forEach((item, i) => {
    if (fr == i) {
      item.selected = 1;
    } else {
      item.selected = 0;
    }
  });
}

function pushData(data, part, selected) {
  if (arguments.length === 0) {
    Data.push({
      data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAALUlEQVRYR+3QQREAAAABQfqXFsNnFTizzXk99+MAAQIECBAgQIAAAQIECBAgMBo/ACHo7lH9AAAAAElFTkSuQmCC',
      part: `${Data.length}`,
      selected: 1
    });
    setSelectedFrame(Data.length - 1);
  }

  if (arguments.length === 1 || arguments.length === 2 || arguments.length === 3) {
    Data.push({
      data,
      part,
      selected
    });
    setSelectedFrame(Data.length - 1);
  }
}

function resetDataImg(datta, part) {
  Data[part].data = datta;
}

function deleteFrame(delF) {
  if (Data[delF]) {
    if (Data[delF].selected === 1) {
      setSelectedFrame(delF - 1);
    }

    Data.splice(delF, 1);
    Data.map((item, i) => {
      item.part = i;
      return true;
    });
    return Data;
  }

  return false;
}

function insertCopyFrame(copyIndex) {
  if (Data[copyIndex]) {
    const copied = { ...Data[copyIndex]
    };
    copied.selected = 0;
    Data.splice(copyIndex + 1, 0, copied);
    Data.map((item, i) => {
      item.part = i;
    });
  }
}

module.exports = {
  getData,
  pushData,
  resetDataImg,
  deleteFrame,
  getSelectedFrame,
  setSelectedFrame,
  insertCopyFrame
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(2);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(7)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Imports
var urlEscape = __webpack_require__(4);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(5));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(6));

// Module
exports.push([module.i, "::-webkit-scrollbar-button {\r\n    background-repeat: no-repeat;\r\n    width: 6px;\r\n    height: 0px\r\n}\r\n\r\n ::-webkit-scrollbar-track {\r\n    background-color: #32312e;\r\n    box-shadow: 0px 0px 3px #000 inset;\r\n}\r\n\r\n ::-webkit-scrollbar-thumb {\r\n    -webkit-border-radius: 5px;\r\n    border-radius: 5px;\r\n    background-color: #ffcb17;\r\n    box-shadow: 0px 1px 1px #fff inset;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n ::-webkit-resizer {\r\n    background-repeat: no-repeat;\r\n    width: 7px;\r\n    height: 0px\r\n}\r\n\r\n ::-webkit-scrollbar {\r\n    width: 11px;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    position: relative;\r\n}\r\n\r\np {\r\n    font-family: Roboto;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    display: flex;\r\n    align-items: center;\r\n    color: rgba(0, 0, 0, 0.541327);\r\n}\r\n\r\n.app {\r\n    display: grid;\r\n    grid-template-areas: \"pallete-container frames block-container preview\" \"colors-container frames block-container preview\";\r\n    grid-template-columns: auto 215px 50vw 1fr;\r\n    margin-top: 5vw;\r\n}\r\n\r\n.frames {\r\n    grid-area: frames;\r\n    width: 100%;\r\n}\r\n\r\n.preview-list-scroller {\r\n    overflow-y: scroll;\r\n    height: 81vh;\r\n}\r\n\r\n.preview-list-scroller * {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.preview-list li {\r\n    margin: 3px;\r\n    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABlBMVEVMTExVVVUnhsEkAAAAHUlEQVR4AWOAAUYoQOePEAUj3v9oYDQ9gMBoegAAJFwCAbLaTIMAAAAASUVORK5CYII=') repeat;\r\n    width: 190px;\r\n    height: 190px;\r\n    position: relative;\r\n    list-style-type: none;\r\n}\r\n\r\n.preview-list li button {\r\n    position: absolute;\r\n    width: 30px;\r\n    height: 30px;\r\n    border: 1px solid yellow;\r\n}\r\n\r\n.frame-delete {\r\n    left: calc(100% - 30px);\r\n    background-image: url(054718cd9f64b0abff70e915c3f565f9.png);\r\n    background-size: cover;\r\n}\r\n\r\n.frame-copy {\r\n    left: calc(100% - 30px);\r\n    top: calc(100% - 30px);\r\n    background-image: url(2aede2da4a2389d9a70bc8f4ea912f4d.png);\r\n    background-size: cover;\r\n}\r\n\r\n.frame-move {\r\n    top: calc(100% - 30px);\r\n}\r\n\r\n.tile-view {\r\n    position: absolute;\r\n    width: 100%;\r\n}\r\n\r\n.preview {\r\n    width: 100%;\r\n}\r\n\r\n.preview-block {\r\n    width: 18vw;\r\n    height: 18vw;\r\n    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABlBMVEVMTExVVVUnhsEkAAAAHUlEQVR4AWOAAUYoQOePEAUj3v9oYDQ9gMBoegAAJFwCAbLaTIMAAAAASUVORK5CYII=') repeat;\r\n}\r\n\r\n.img-preview-block {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\n:fullscreen .img-preview-block {\r\n    width: 100vh;\r\n    position: relative;\r\n    margin: auto;\r\n}\r\n\r\n.full-screen {\r\n    position: absolute;\r\n    left: calc(100% - 59px);\r\n    top: calc(100% - 21px);\r\n    background: dimgrey;\r\n    border: 1px solid blanchedalmond;\r\n}\r\n\r\n.fps-range {\r\n    width: 18vw;\r\n}\r\n\r\n.fps-value {\r\n    display: inline;\r\n    position: relative;\r\n    font-size: 1.4rem;\r\n    font-weight: bold;\r\n    color: ghostwhite;\r\n}\r\n\r\n.pallete-container *,\r\n.colors-container * {\r\n    display: flex;\r\n}\r\n\r\n.pallete-container {\r\n    grid-area: pallete-container;\r\n}\r\n\r\n.pallete-container button {\r\n    border: none;\r\n    background: transparent;\r\n    margin: 1vw;\r\n}\r\n\r\n.colors-container {\r\n    grid-area: colors-container;\r\n}\r\n\r\n.colors-container * {\r\n    margin: 1vw;\r\n}\r\n\r\n.current-color button {\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 10px;\r\n    background: #C4C4C4;\r\n    border: 1px solid #000000;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.block-container {\r\n    width: 40vw;\r\n    height: 40vw;\r\n    grid-area: block-container;\r\n    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABlBMVEVMTExVVVUnhsEkAAAAHUlEQVR4AWOAAUYoQOePEAUj3v9oYDQ9gMBoegAAJFwCAbLaTIMAAAAASUVORK5CYII=') repeat;\r\n    margin: 0 auto;\r\n}\r\n\r\n.mainCanvas {\r\n    width: 100%;\r\n    image-rendering: pixelated;\r\n    cursor: crosshair;\r\n}\r\n\r\n.preview-list-scroller canvas {\r\n    position: absolute;\r\n    image-rendering: pixelated;\r\n    width: 100%;\r\n}\r\n\r\n.add-new-frame {\r\n    position: relative;\r\n    left: 7px;\r\n    border: 3px solid darkgrey;\r\n    border-radius: 12px;\r\n    width: 180px;\r\n    height: 50px;\r\n    background: transparent;\r\n    margin-left: 1px;\r\n    font-size: 2rem;\r\n    color: darkgreen;\r\n}\r\n\r\n.preview-tile button {\r\n    background-color: transparent;\r\n}\r\n\r\n.selected {\r\n    border: 3px solid firebrick;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: gray;\r\n    cursor: cell;\r\n}\r\n\r\ninput:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.preview-tile:hover {\r\n    transform: rotate(0.5deg);\r\n    cursor: pointer;\r\n}", ""]);



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
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
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "054718cd9f64b0abff70e915c3f565f9.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2aede2da4a2389d9a70bc8f4ea912f4d.png";

/***/ }),
/* 7 */
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

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
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

var	fixUrls = __webpack_require__(8);

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
		var nextSibling = getElement(options.insertAt.before, target);
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

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
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

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

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
/* 8 */
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
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

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

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


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
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/js/framesDataController/framesData.js
var framesData = __webpack_require__(0);

// CONCATENATED MODULE: ./src/js/clearCanvas.js
const canvas = document.querySelector('.mainCanvas');
function clearCanvas(cctx) {
  cctx.save();
  cctx.setTransform(1, 0, 0, 1, 0, 0);
  cctx.clearRect(0, 0, canvas.width, canvas.height);
  cctx.restore();
}
// CONCATENATED MODULE: ./src/js/displaySelection.js

function displaySelection() {
  const selected = framesData["getSelectedFrame"]();
  const ul = document.querySelectorAll('.preview-list li');
  ul.forEach(item => {
    item.classList.remove('selected');
  });
  ul[selected].classList.add('selected');
}
// CONCATENATED MODULE: ./src/js/newFrame/addNewFrame.js



const addNewFrame_ul = document.querySelector('.preview-list');
const addNewFrame_canvas = document.querySelector('.mainCanvas');
const ctx = addNewFrame_canvas.getContext('2d');
function addNewFrame() {
  framesData["pushData"]();
  clearCanvas(ctx);
  const part = document.querySelectorAll('.preview-list li').length;
  addNewFrame_ul.insertAdjacentHTML('beforeEnd', ` <li data-part="${part}" class="preview-tile">
  
    <canvas width="32" height="32" data-part="${part}"  class="preview-canvas"></canvas>
  
    <button  class="frame-move">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13.7571 16.6311L10.6636 19.7247C10.2974 20.0909 9.70387 20.0909 9.33773 19.7247L6.24414 16.6311C5.65355 16.0406 6.07184 15.0307 6.90707 15.0308H8.90559L8.90555 11.093H4.96789V13.0916C4.96789 13.9268 3.95809 14.3451 3.36746 13.7545L0.273867 10.6609C-0.0922656 10.2948 -0.0922656 9.70117 0.273867 9.33508L3.36746 6.24148C3.95805 5.65089 4.96789 6.06917 4.96789 6.90441V8.90555H8.90555V4.96788H6.90438C6.06914 4.96788 5.65086 3.95808 6.24145 3.36745L9.33504 0.273852C9.70117 -0.092281 10.2947 -0.092281 10.6609 0.273852L13.7545 3.36745C14.345 3.95804 13.9268 4.96788 13.0915 4.96788H11.093V8.90555H15.0307V6.90703C15.0307 6.07179 16.0405 5.65351 16.6311 6.2441L19.7246 9.33769C20.0908 9.70383 20.0908 10.2974 19.7246 10.6635L16.6311 13.7571C16.0405 14.3477 15.0306 13.9294 15.0307 13.0942V11.093H11.093V15.0307H13.0942C13.9295 15.0307 14.3477 16.0405 13.7571 16.6311Z"
            fill="black" fill-opacity="0.5413" />
        </svg>
        </button>
    <button class="frame-delete">
        </button>
    <button class="frame-copy">    </button>
  
    <div class="frame-number"> ${part + 1}</div>
  
  </li>`);
  displaySelection();
}
// CONCATENATED MODULE: ./src/js/getMousePosition.js
const block = document.querySelector('.block-container');
function getMousePosition(e) {
  return [Math.floor(e.offsetX * 32 / block.offsetWidth), Math.floor(e.offsetY * 32 / block.offsetHeight)];
}
// CONCATENATED MODULE: ./src/js/animationStart.js

const previewAnimation = document.querySelector('.img-preview-block');
const range = document.querySelector('.fps-range');
const fpsValue = document.querySelector('.fps-value');
let currentPictire = 0;
let imgData = framesData["getData"]();
let fps = range.value;

function changeFps() {
  fpsValue.innerHTML = this.value;
  fps = this.value;
  imgData = framesData["getData"]();
}

function nextPicture() {
  if (imgData[0]) {
    if (imgData[currentPictire] && currentPictire < imgData.length - 1) {
      currentPictire += 1;
      return imgData[currentPictire].data;
    }

    currentPictire = 0;
    return imgData[0].data;
  }

  return '';
}

function animationStart() {
  previewAnimation.style.background = `url('${nextPicture()}')`;
  previewAnimation.style.backgroundSize = 'cover';
  previewAnimation.style.imageRendering = 'pixelated';
  setTimeout(animationStart, 1000 / fps);
}
range.addEventListener('input', changeFps);
// CONCATENATED MODULE: ./src/js/newFrame/insertNewFrame.js
function insertNewFrame_addNewFrame(afterThisNode) {
  const part = document.querySelectorAll('.preview-list li').length;
  afterThisNode.insertAdjacentHTML('afterEnd', ` <li data-part="${part}" class="preview-tile">
  
    <canvas width="32" height="32" data-part="${part}" class="preview-canvas"></canvas>
  
    <button  class="frame-move">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13.7571 16.6311L10.6636 19.7247C10.2974 20.0909 9.70387 20.0909 9.33773 19.7247L6.24414 16.6311C5.65355 16.0406 6.07184 15.0307 6.90707 15.0308H8.90559L8.90555 11.093H4.96789V13.0916C4.96789 13.9268 3.95809 14.3451 3.36746 13.7545L0.273867 10.6609C-0.0922656 10.2948 -0.0922656 9.70117 0.273867 9.33508L3.36746 6.24148C3.95805 5.65089 4.96789 6.06917 4.96789 6.90441V8.90555H8.90555V4.96788H6.90438C6.06914 4.96788 5.65086 3.95808 6.24145 3.36745L9.33504 0.273852C9.70117 -0.092281 10.2947 -0.092281 10.6609 0.273852L13.7545 3.36745C14.345 3.95804 13.9268 4.96788 13.0915 4.96788H11.093V8.90555H15.0307V6.90703C15.0307 6.07179 16.0405 5.65351 16.6311 6.2441L19.7246 9.33769C20.0908 9.70383 20.0908 10.2974 19.7246 10.6635L16.6311 13.7571C16.0405 14.3477 15.0306 13.9294 15.0307 13.0942V11.093H11.093V15.0307H13.0942C13.9295 15.0307 14.3477 16.0405 13.7571 16.6311Z"
            fill="black" fill-opacity="0.5413" />
        </svg>
        </button>
    <button class="frame-delete">
        </button>
    <button class="frame-copy">    </button>
  
    <div class="frame-number"> ${part + 1}</div>
  
  </li>`);
}
// CONCATENATED MODULE: ./src/js/copyToFromCanvas.js
function copyToFromCanvas(to, from) {
  const imageData = from.getContext('2d').getImageData(0, 0, 32, 32);
  to.getContext('2d').putImageData(imageData, 0, 0);
}
// CONCATENATED MODULE: ./src/js/updateDataPartLi.js
function updateDataPartLi() {
  const elements = document.querySelectorAll('.preview-list li');
  const elementsOfParagraf = document.querySelectorAll('.frame-number');
  const elementsC = document.querySelectorAll('.preview-list canvas');
  elements.forEach((item, i) => {
    item.setAttribute('data-part', i);
    elementsOfParagraf[i].innerHTML = i + 1;
    elementsC[i].setAttribute('data-part', i);
  });
}
// CONCATENATED MODULE: ./src/js/deleteOrCopyFrame.js






const deleteOrCopyFrame_ul = document.querySelector('.preview-list');
const deleteOrCopyFrame_canvas = document.querySelector('.mainCanvas');
const deleteOrCopyFrame_ctx = deleteOrCopyFrame_canvas.getContext('2d');
function deleteOrCopyFrame(e) {
  let previewCanvases = document.querySelectorAll('.preview-list canvas');
  const eventItem = +e.target.parentNode.dataset.part;

  if (e.target.classList[0] === 'frame-delete' && +e.target.parentNode.dataset.part === 0) {
    const li = document.querySelectorAll('.preview-list li');
    const selected = framesData["getSelectedFrame"]();

    if (li.length === 1) {
      deleteOrCopyFrame_ul.removeChild(e.target.parentNode);
      clearCanvas(deleteOrCopyFrame_ctx);
      framesData["deleteFrame"](0);
    }

    if (li.length !== 1 && selected === eventItem) {
      deleteOrCopyFrame_ul.removeChild(e.target.parentNode);
      framesData["deleteFrame"](0);
      framesData["setSelectedFrame"](0);
      displaySelection();
      updateDataPartLi();
    }

    if (li.length !== 1 && selected !== eventItem) {
      deleteOrCopyFrame_ul.removeChild(e.target.parentNode);
      framesData["deleteFrame"](0);
      updateDataPartLi();
    }

    return;
  }

  if (e.target.classList[0] === 'frame-delete' && +framesData["getData"](eventItem).part !== 0) {
    if (framesData["getSelectedFrame"]() == eventItem) {
      clearCanvas(deleteOrCopyFrame_ctx);
      copyToFromCanvas(deleteOrCopyFrame_canvas, previewCanvases[eventItem - 1]);
    }

    deleteOrCopyFrame_ul.removeChild(e.target.parentNode);
    framesData["deleteFrame"](eventItem);
    displaySelection();
    updateDataPartLi();
  }

  if (e.target.classList[0] === 'frame-copy') {
    framesData["insertCopyFrame"](eventItem);
    insertNewFrame_addNewFrame(e.target.parentNode);
    updateDataPartLi();
    previewCanvases = document.querySelectorAll('.preview-list canvas');
    copyToFromCanvas(previewCanvases[eventItem + 1], previewCanvases[eventItem]);
  }
}
// CONCATENATED MODULE: ./src/js/common.js








addNewFrame();
displaySelection();
const fullScreen = document.querySelector('.full-screen');
const common_ul = document.querySelector('.preview-list');
const common_canvas = document.querySelector('.mainCanvas');
const common_ctx = common_canvas.getContext('2d');
const mainContainerCanvas = document.querySelector('.block-container');
const addFrame = document.querySelector('.add-new-frame');
const colorPick = document.querySelector('.myColor');
let common_previewCanvases = document.querySelectorAll('.preview-list canvas');
let myColor = [0, 0, 0];
let drawing = false;

function setPixel(x, y) {
  const p = common_ctx.createImageData(1, 1);
  p.data[0] = myColor[0];
  p.data[1] = myColor[1];
  p.data[2] = myColor[2];
  p.data[3] = 255;
  common_ctx.putImageData(p, x, y);
}

function drawingStartFunc(e) {
  const mousePosition = getMousePosition(e);
  drawing = true;
  setPixel(mousePosition[0], mousePosition[1]);
}

function drawingFunc(e) {
  if (drawing) {
    const mousePosition = getMousePosition(e);
    setPixel(mousePosition[0], mousePosition[1]);
  }
}

function drawingEndFuncAndCopyCanvas() {
  common_previewCanvases = document.querySelectorAll('.preview-list canvas');

  if (common_previewCanvases[0]) {
    drawing = false;
    const ctxPreviewCanvas = common_previewCanvases[framesData["getSelectedFrame"]()].getContext('2d');
    const imageData = common_ctx.getImageData(0, 0, 32, 32);
    ctxPreviewCanvas.putImageData(imageData, 0, 0);
    framesData["resetDataImg"](common_canvas.toDataURL(), framesData["getSelectedFrame"]());
  }
}

function changeColor() {
  const hex = this.value;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  myColor = [r, g, b];
}

function changeCurrentCanvas(e) {
  if (e.target.classList[0] === 'preview-canvas') {
    clearCanvas(common_ctx);
    copyToFromCanvas(common_canvas, e.target);
    framesData["setSelectedFrame"](e.target.dataset.part);
    displaySelection();
  }
}

function toFullScreen() {
  document.querySelector('.preview-block').requestFullscreen();
}

mainContainerCanvas.addEventListener('mousedown', drawingStartFunc);
mainContainerCanvas.addEventListener('mousemove', drawingFunc);
mainContainerCanvas.addEventListener('mouseup', drawingEndFuncAndCopyCanvas);
mainContainerCanvas.addEventListener('mouseleave', drawingEndFuncAndCopyCanvas);
common_ul.addEventListener('click', changeCurrentCanvas);
addFrame.addEventListener('click', addNewFrame);
common_ul.addEventListener('click', deleteOrCopyFrame);
colorPick.addEventListener('input', changeColor);
document.addEventListener('DOMContentLoaded', animationStart);
fullScreen.addEventListener('click', toFullScreen);
// EXTERNAL MODULE: ./src/css/main.css
var main = __webpack_require__(1);

// CONCATENATED MODULE: ./src/index.js



/***/ })
/******/ ]);