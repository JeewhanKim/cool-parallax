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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lib/cool-parallax.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lib/cool-parallax.js":
/*!**********************************!*\
  !*** ./src/lib/cool-parallax.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// alert('jee test');\nvar win = $(window);\nvar doc = $(document);\nvar elements = [];\nvar navButtons = $('.nav').find('li');\nvar offSets = [];\nvar animate = false;\nvar scrollSpeed = 600;\n\nvar Elements = function Elements() {\n  _classCallCheck(this, Elements);\n\n  this.container = null, this.options = {};\n};\n\nvar genContents = function genContents() {\n  if (contents === undefined) return;\n  $.map(contents, function (val, prop) {\n    $('#' + prop).html(val);\n  });\n};\n\nvar genNav = function genNav() {};\n\nvar init = function init() {\n  $('.cool-parallax').each(function (i, elm) {\n    var obj = new Elements();\n    obj.container = $(elm);\n    obj.options = $(elm).attr('data-animate') ? JSON.parse($(elm).attr('data-animate')) : {};\n    elements.push(obj);\n    // console.log(obj.options)\n  });\n  $('.chapter').each(function (i, elm) {\n    offSets.push($(elm).offset().top);\n  });\n  console.log(offSets);\n\n  navButtons.click(function (e) {\n    if (animate) return;\n    animate = true;\n    var target = $(e.currentTarget).data('for'),\n        moveTo = $('.' + target).offset().top;\n    $(\"html, body\").animate({\n      scrollTop: moveTo\n    }, scrollSpeed, function () {\n      animate = false;\n    });\n  });\n};\n\nvar scrollDetect = function scrollDetect() {\n  // console.log('scrollDetect')\n  var st = $(window).scrollTop();\n  var windowHeight = window.innerHeight;\n\n  /* Chapter Active Detection */\n  navButtons.each(function (i, elm) {\n    if (i === 0) {\n      st <= offSets[i + 1] - windowHeight / 2 ? $(elm).addClass('active') : $(elm).removeClass('active');\n    } else if (i + 1 < navButtons.length) {\n      st > offSets[i] - windowHeight / 2 && st <= offSets[i + 1] - windowHeight / 2 ? $(elm).addClass('active') : $(elm).removeClass('active');\n    } else {\n      st > offSets[i] - windowHeight / 2 ? $(elm).addClass('active') : $(elm).removeClass('active');\n    }\n  });\n\n  elements.forEach(function (elm) {\n    if (elm.options.effect === \"stickyLogo\" && elm.options.target !== undefined) {\n      $(elm.options.target).offset().top + elm.options.offset < st ? $(elm.container).addClass('active') : $(elm.container).removeClass('active');\n    }\n  });\n\n  // , offSets = []\n  // , detects = []\n\n  // elements.each((i, element) => { \n  //   const options = element.attr('data-animate-options')\n  //   console.log(options)\n  // })\n};\n\ngenContents();\ngenNav();\ninit();\nscrollDetect();\n\n// win.resize( _ =>  { initialStyles() });\nwin.scroll(function (_) {\n  scrollDetect();\n});\n\n//# sourceURL=webpack:///./src/lib/cool-parallax.js?");

/***/ })

/******/ });