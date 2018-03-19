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
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/* \n* Cool Parallax\n* version 0.5.0\n* by Jeewhan Kim (webdeveloper.jee@gmail.com)\n*/\nvar win = $(window);\nvar doc = $(document);\nvar nav = $('.nav');\nvar stickyNav = $('#sticky-menu');\nvar navButtons = nav.find('li');\n\nvar elements = [];\nvar offSets = [];\nvar animate = false;\nvar scrollSpeed = 600;\n\nvar Elements = function Elements() {\n  _classCallCheck(this, Elements);\n\n  this.container = null, this.options = {};\n};\n\nvar genContents = function genContents() {\n  if (typeof contents === 'undefined') return;\n  $.map(contents, function (val, prop) {\n    $('#' + prop).html(val);\n  });\n};\n\nvar chapterInitial = function chapterInitial() {};\n\nvar init = function init() {\n  $('.cool-parallax').each(function (i, elm) {\n    var obj = new Elements();\n    obj.container = $(elm);\n    obj.options = $(elm).attr('data-animate') ? JSON.parse($(elm).attr('data-animate')) : {};\n    elements.push(obj);\n    // console.log(obj.options)\n  });\n  $('.chapter').each(function (i, elm) {\n    offSets.push($(elm).offset().top + stickyNav.outerHeight());\n  });\n\n  navButtons.click(function (e) {\n    if (animate) return;\n    animate = true;\n    var target = $(e.currentTarget).data('for'),\n        moveTo = $(target).offset().top - stickyNav.outerHeight();\n    $(\"html, body\").animate({\n      scrollTop: moveTo\n    }, scrollSpeed, function () {\n      animate = false;\n    });\n  });\n\n  document.getElementById(\"video\").play();\n};\n\nvar hashDetect = function hashDetect() {\n  var hash = window.location.hash;\n  if (hash.length === 0) return;\n\n  $('.section-video, .section-main, .section-about, .section-services').hide();\n\n  if (hash === '#principals') {\n    currentChapter = 1;\n    $('.section-principals').fadeIn();\n    $('#nav-principals').addClass('active');\n  }\n  if (hash === '#clients') {\n    currentChapter = 2;\n    $('.section-clients').fadeIn();\n    $('#nav-clients').addClass('active');\n  }\n  if (hash === '#contacts') {\n    currentChapter = 3;\n    $('.section-contacts').fadeIn();\n    $('#nav-contacts').addClass('active');\n  }\n};\n\nvar scrollDetect = function scrollDetect() {\n  var st = $(window).scrollTop();\n  var windowHeight = window.innerHeight;\n\n  /* Chapter indicators */\n  navButtons.each(function (i, elm) {\n    if (i === 0) {\n      st <= offSets[i + 1] - windowHeight / 2 ? $(elm).addClass('active') : $(elm).removeClass('active');\n    } else if (i + 1 < navButtons.length) {\n      st > offSets[i] - windowHeight / 2 && st <= offSets[i + 1] - windowHeight / 2 ? $(elm).addClass('active') : $(elm).removeClass('active');\n    } else {\n      st > offSets[i] - windowHeight / 2 ? $(elm).addClass('active') : $(elm).removeClass('active');\n    }\n  });\n\n  /* cool parallax animation handler */\n  elements.forEach(function (elm) {\n    var o = elm.options;\n    if (o.effect === \"stickyLogo\" && o.target !== undefined) {\n      return $(o.target).offset().top + o.offset < st ? $(elm.container).addClass('active') : $(elm.container).removeClass('active');\n    }\n    if (o.class !== undefined) {\n      var revisedSt = o.trigger === \"top\" ? st : st + windowHeight;\n      if (revisedSt + o.offset > $(o.target).offset().top) {\n        $(elm.container).addClass(o.class);\n      } else if (!o.once) {\n        $(elm.container).removeClass(o.class);\n      }\n    }\n  });\n};\n\nvar menuVisible = false;\nvar currentChapter = 0;\n\nvar navClickEvents = function navClickEvents() {\n  $('#sticky-menu a').click(function (e) {\n    e.preventDefault();\n    var $target = $(e.currentTarget);\n    $target.parent().parent().find('a').removeClass('active');\n    $target.addClass('active');\n    var targetLinkTo = $target.attr('href');\n\n    if (targetLinkTo === '#principals' || targetLinkTo === '#clients' || targetLinkTo === '#contacts') {\n      $('.section-video, .section-main, .section-about, .section-services').fadeOut();\n      $('html, body').animate({\n        scrollTop: 0\n      }, 200);\n      if (targetLinkTo === '#principals') {\n        currentChapter = 1;\n        $('.section-clients, .section-contacts').fadeOut();\n        $('.section-principals').delay(0).fadeIn();\n        window.location.hash = '#principals';\n      }\n      if (targetLinkTo === '#clients') {\n        currentChapter = 2;\n        $('.section-principals, .section-contacts').fadeOut();\n        $('.section-clients').delay(0).fadeIn();\n        window.location.hash = '#clients';\n      }\n      if (targetLinkTo === '#contacts') {\n        currentChapter = 3;\n        $('.section-principals, .section-clients').fadeOut();\n        $('.section-contacts').delay(0).fadeIn();\n        window.location.hash = '#contacts';\n      }\n    } else {\n      window.location.hash = '';\n      if (currentChapter != 0) {\n        $('.section-principals, .section-clients, .section-contacts').fadeOut();\n\n        $('.section-main .section-right').removeClass('section-ani');\n        $('.section-about .section-right').removeClass('section-ani');\n        $('.section-services .section-right').removeClass('section-ani');\n\n        $('.section-video, .section-main, .section-about, .section-services').delay(400).fadeIn(400, function () {\n          $('html, body').delay(400).animate({\n            scrollTop: $(targetLinkTo).offset().top - 20\n          }, 300);\n        });\n      } else {\n        $('html, body').animate({\n          scrollTop: $(targetLinkTo).offset().top - 20\n        }, 600);\n      }\n      currentChapter = 0;\n    }\n    // console.log($(e.currentTarget).attr('href'));\n  });\n  $('#logo').click(function () {\n    !$('#sticky-menu').hasClass('active') ? $('#sticky-menu').addClass('active') : $('#sticky-menu').removeClass('active');\n    // $('#logo').siblings().css('opacity', menuVisible ? 1 : 0)\n  });\n  $('.emailSubmit').click(function (e) {\n    var $tg = $(e.currentTarget).parent();\n    var mailto = $tg.find('.vl-email').html();\n    var subject = $tg.find('.subject').val();\n    var body = $tg.find('.content').val();\n    window.open('mailto:' + mailto + '?subject=' + subject + '&body=' + body);\n  });\n};\n\nchapterInitial();\nnavClickEvents();\ngenContents();\ninit();\nhashDetect();\nscrollDetect();\nwin.scroll(function (_) {\n  scrollDetect();\n});\n\n//# sourceURL=webpack:///./src/lib/cool-parallax.js?");

/***/ })

/******/ });