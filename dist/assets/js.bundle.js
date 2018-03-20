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

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {\n    \"use strict\";\n\n    if (global.setImmediate) {\n        return;\n    }\n\n    var nextHandle = 1; // Spec says greater than zero\n    var tasksByHandle = {};\n    var currentlyRunningATask = false;\n    var doc = global.document;\n    var registerImmediate;\n\n    function setImmediate(callback) {\n      // Callback can either be a function or a string\n      if (typeof callback !== \"function\") {\n        callback = new Function(\"\" + callback);\n      }\n      // Copy function arguments\n      var args = new Array(arguments.length - 1);\n      for (var i = 0; i < args.length; i++) {\n          args[i] = arguments[i + 1];\n      }\n      // Store and register the task\n      var task = { callback: callback, args: args };\n      tasksByHandle[nextHandle] = task;\n      registerImmediate(nextHandle);\n      return nextHandle++;\n    }\n\n    function clearImmediate(handle) {\n        delete tasksByHandle[handle];\n    }\n\n    function run(task) {\n        var callback = task.callback;\n        var args = task.args;\n        switch (args.length) {\n        case 0:\n            callback();\n            break;\n        case 1:\n            callback(args[0]);\n            break;\n        case 2:\n            callback(args[0], args[1]);\n            break;\n        case 3:\n            callback(args[0], args[1], args[2]);\n            break;\n        default:\n            callback.apply(undefined, args);\n            break;\n        }\n    }\n\n    function runIfPresent(handle) {\n        // From the spec: \"Wait until any invocations of this algorithm started before this one have completed.\"\n        // So if we're currently running a task, we'll need to delay this invocation.\n        if (currentlyRunningATask) {\n            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a\n            // \"too much recursion\" error.\n            setTimeout(runIfPresent, 0, handle);\n        } else {\n            var task = tasksByHandle[handle];\n            if (task) {\n                currentlyRunningATask = true;\n                try {\n                    run(task);\n                } finally {\n                    clearImmediate(handle);\n                    currentlyRunningATask = false;\n                }\n            }\n        }\n    }\n\n    function installNextTickImplementation() {\n        registerImmediate = function(handle) {\n            process.nextTick(function () { runIfPresent(handle); });\n        };\n    }\n\n    function canUsePostMessage() {\n        // The test against `importScripts` prevents this implementation from being installed inside a web worker,\n        // where `global.postMessage` means something completely different and can't be used for this purpose.\n        if (global.postMessage && !global.importScripts) {\n            var postMessageIsAsynchronous = true;\n            var oldOnMessage = global.onmessage;\n            global.onmessage = function() {\n                postMessageIsAsynchronous = false;\n            };\n            global.postMessage(\"\", \"*\");\n            global.onmessage = oldOnMessage;\n            return postMessageIsAsynchronous;\n        }\n    }\n\n    function installPostMessageImplementation() {\n        // Installs an event handler on `global` for the `message` event: see\n        // * https://developer.mozilla.org/en/DOM/window.postMessage\n        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages\n\n        var messagePrefix = \"setImmediate$\" + Math.random() + \"$\";\n        var onGlobalMessage = function(event) {\n            if (event.source === global &&\n                typeof event.data === \"string\" &&\n                event.data.indexOf(messagePrefix) === 0) {\n                runIfPresent(+event.data.slice(messagePrefix.length));\n            }\n        };\n\n        if (global.addEventListener) {\n            global.addEventListener(\"message\", onGlobalMessage, false);\n        } else {\n            global.attachEvent(\"onmessage\", onGlobalMessage);\n        }\n\n        registerImmediate = function(handle) {\n            global.postMessage(messagePrefix + handle, \"*\");\n        };\n    }\n\n    function installMessageChannelImplementation() {\n        var channel = new MessageChannel();\n        channel.port1.onmessage = function(event) {\n            var handle = event.data;\n            runIfPresent(handle);\n        };\n\n        registerImmediate = function(handle) {\n            channel.port2.postMessage(handle);\n        };\n    }\n\n    function installReadyStateChangeImplementation() {\n        var html = doc.documentElement;\n        registerImmediate = function(handle) {\n            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted\n            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.\n            var script = doc.createElement(\"script\");\n            script.onreadystatechange = function () {\n                runIfPresent(handle);\n                script.onreadystatechange = null;\n                html.removeChild(script);\n                script = null;\n            };\n            html.appendChild(script);\n        };\n    }\n\n    function installSetTimeoutImplementation() {\n        registerImmediate = function(handle) {\n            setTimeout(runIfPresent, 0, handle);\n        };\n    }\n\n    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.\n    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);\n    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;\n\n    // Don't get fooled by e.g. browserify environments.\n    if ({}.toString.call(global.process) === \"[object process]\") {\n        // For Node.js before 0.9\n        installNextTickImplementation();\n\n    } else if (canUsePostMessage()) {\n        // For non-IE10 modern browsers\n        installPostMessageImplementation();\n\n    } else if (global.MessageChannel) {\n        // For web workers, where supported\n        installMessageChannelImplementation();\n\n    } else if (doc && \"onreadystatechange\" in doc.createElement(\"script\")) {\n        // For IE 6–8\n        installReadyStateChangeImplementation();\n\n    } else {\n        // For older browsers\n        installSetTimeoutImplementation();\n    }\n\n    attachTo.setImmediate = setImmediate;\n    attachTo.clearImmediate = clearImmediate;\n}(typeof self === \"undefined\" ? typeof global === \"undefined\" ? this : global : self));\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\"), __webpack_require__(/*! ./../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/setimmediate/setImmediate.js?");

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var apply = Function.prototype.apply;\n\n// DOM APIs, for completeness\n\nexports.setTimeout = function() {\n  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);\n};\nexports.setInterval = function() {\n  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);\n};\nexports.clearTimeout =\nexports.clearInterval = function(timeout) {\n  if (timeout) {\n    timeout.close();\n  }\n};\n\nfunction Timeout(id, clearFn) {\n  this._id = id;\n  this._clearFn = clearFn;\n}\nTimeout.prototype.unref = Timeout.prototype.ref = function() {};\nTimeout.prototype.close = function() {\n  this._clearFn.call(window, this._id);\n};\n\n// Does not start the time, just sets up the members needed.\nexports.enroll = function(item, msecs) {\n  clearTimeout(item._idleTimeoutId);\n  item._idleTimeout = msecs;\n};\n\nexports.unenroll = function(item) {\n  clearTimeout(item._idleTimeoutId);\n  item._idleTimeout = -1;\n};\n\nexports._unrefActive = exports.active = function(item) {\n  clearTimeout(item._idleTimeoutId);\n\n  var msecs = item._idleTimeout;\n  if (msecs >= 0) {\n    item._idleTimeoutId = setTimeout(function onTimeout() {\n      if (item._onTimeout)\n        item._onTimeout();\n    }, msecs);\n  }\n};\n\n// setimmediate attaches itself to the global object\n__webpack_require__(/*! setimmediate */ \"./node_modules/setimmediate/setImmediate.js\");\n// On some exotic environments, it's not clear which object `setimmeidate` was\n// able to install onto.  Search each possibility in the same order as the\n// `setimmediate` library.\nexports.setImmediate = (typeof self !== \"undefined\" && self.setImmediate) ||\n                       (typeof global !== \"undefined\" && global.setImmediate) ||\n                       (this && this.setImmediate);\nexports.clearImmediate = (typeof self !== \"undefined\" && self.clearImmediate) ||\n                         (typeof global !== \"undefined\" && global.clearImmediate) ||\n                         (this && this.clearImmediate);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/timers-browserify/main.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\r\n} catch (e) {\r\n\t// This works if the window reference is available\r\n\tif (typeof window === \"object\") g = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/lib/cool-parallax.js":
/*!**********************************!*\
  !*** ./src/lib/cool-parallax.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _timers = __webpack_require__(/*! timers */ \"./node_modules/timers-browserify/main.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/* \n* Cool Parallax\n* version 0.5.0\n* by Jeewhan Kim (webdeveloper.jee@gmail.com)\n*/\nvar win = $(window);\nvar doc = $(document);\nvar nav = $('.nav');\nvar stickyNav = $('#sticky-menu');\nvar navButtons = nav.find('li');\n\nvar elements = [];\nvar offSets = [];\nvar animate = false;\nvar scrollSpeed = 600;\n\nvar Elements = function Elements() {\n  _classCallCheck(this, Elements);\n\n  this.container = null, this.options = {};\n};\n\nvar initAnimation = function initAnimation() {\n  if (currentChapter === 0) {\n    $('.section-video').css('opacity', 1);\n    logoAnimation();\n  }\n};\n\nvar genContents = function genContents() {\n  if (typeof contents === 'undefined') return;\n  $.map(contents, function (val, prop) {\n    $('#' + prop).html(val);\n  });\n};\n\nvar init = function init() {\n  $('.cool-parallax').each(function (i, elm) {\n    var obj = new Elements();\n    obj.container = $(elm);\n    obj.options = $(elm).attr('data-animate') ? JSON.parse($(elm).attr('data-animate')) : {};\n    elements.push(obj);\n    // console.log(obj.options)\n  });\n  $('.chapter').each(function (i, elm) {\n    offSets.push($(elm).offset().top + stickyNav.outerHeight());\n  });\n\n  navButtons.click(function (e) {\n    if (animate) return;\n    animate = true;\n    var target = $(e.currentTarget).data('for'),\n        moveTo = $(target).offset().top - stickyNav.outerHeight();\n    $(\"html, body\").animate({\n      scrollTop: moveTo\n    }, scrollSpeed, function () {\n      animate = false;\n    });\n  });\n\n  // document.getElementById(\"video\").play();\n};\n\nvar hashDetect = function hashDetect() {\n  var hash = window.location.hash;\n  if (hash.length === 0) return;\n\n  $('.section-video, .section-main, .section-about, .section-services').hide();\n\n  if (hash === '#principals') {\n    currentChapter = 1;\n    $('.section-principals').fadeIn();\n    $('#nav-principals').addClass('active');\n  }\n  if (hash === '#clients') {\n    currentChapter = 2;\n    $('.section-clients').fadeIn();\n    $('#nav-clients').addClass('active');\n  }\n  if (hash === '#contacts') {\n    currentChapter = 3;\n    $('.section-contacts').fadeIn();\n    $('#nav-contacts').addClass('active');\n  }\n};\n\nvar scrollDetect = function scrollDetect() {\n  var st = $(window).scrollTop();\n  var windowHeight = window.innerHeight;\n\n  /* Chapter indicators */\n  navButtons.each(function (i, elm) {\n    if (i === 0) {\n      st <= offSets[i + 1] - windowHeight / 2 ? $(elm).addClass('active') : $(elm).removeClass('active');\n    } else if (i + 1 < navButtons.length) {\n      st > offSets[i] - windowHeight / 2 && st <= offSets[i + 1] - windowHeight / 2 ? $(elm).addClass('active') : $(elm).removeClass('active');\n    } else {\n      st > offSets[i] - windowHeight / 2 ? $(elm).addClass('active') : $(elm).removeClass('active');\n    }\n  });\n\n  /* cool parallax animation handler */\n  elements.forEach(function (elm) {\n    var o = elm.options;\n    if (o.effect === \"stickyLogo\" && o.target !== undefined) {\n      return $(o.target).offset().top + o.offset < st ? $(elm.container).addClass('active') : $(elm.container).removeClass('active');\n    }\n    if (o.class !== undefined) {\n      var revisedSt = o.trigger === \"top\" ? st : st + windowHeight;\n      // console.log('revisedSt')\n      if (revisedSt + o.offset > $(o.target).offset().top) {\n        $(elm.container).addClass(o.class);\n      } else if (!o.once) {\n        $(elm.container).removeClass(o.class);\n      }\n    }\n  });\n};\n\nvar menuVisible = false;\nvar currentChapter = 0;\n\nvar navClickEvents = function navClickEvents() {\n  $('#sticky-menu a').click(function (e) {\n    e.preventDefault();\n    var $target = $(e.currentTarget);\n    $target.parent().parent().find('a').removeClass('active');\n    $target.addClass('active');\n    var targetLinkTo = $target.attr('href');\n\n    if (targetLinkTo === '#principals' || targetLinkTo === '#clients' || targetLinkTo === '#contacts') {\n      $('.section-video, .section-main, .section-about, .section-services').fadeOut();\n      $('html, body').animate({\n        scrollTop: 0\n      }, 200);\n      if (targetLinkTo === '#principals') {\n        currentChapter = 1;\n        $('.section-clients, .section-contacts').fadeOut();\n        $('.section-principals').delay(0).fadeIn();\n        window.location.hash = '#principals';\n      }\n      if (targetLinkTo === '#clients') {\n        currentChapter = 2;\n        $('.section-principals, .section-contacts').fadeOut();\n        $('.section-clients').delay(0).fadeIn();\n        window.location.hash = '#clients';\n      }\n      if (targetLinkTo === '#contacts') {\n        currentChapter = 3;\n        $('.section-principals, .section-clients').fadeOut();\n        $('.section-contacts').delay(0).fadeIn();\n        window.location.hash = '#contacts';\n      }\n      // scrollDetect()\n    } else {\n      window.location.hash = '';\n      if (currentChapter != 0) {\n        $('.section-principals, .section-clients, .section-contacts').fadeOut();\n        $('.section-main .section-right').removeClass('section-ani');\n        $('.section-about .section-right').removeClass('section-ani');\n        $('.section-services .section-right').removeClass('section-ani');\n\n        $('.video-static').hide();\n        $('.video-slices, .video-placeholder').show().css('opacity', 0);\n\n        $('.section-video, .section-main, .section-about, .section-services').delay(400).fadeIn(400, function () {\n          currentChapter = 0;\n          initAnimation();\n\n          if (targetLinkTo !== 'body') {\n            $('html, body').delay(400).animate({\n              scrollTop: $(targetLinkTo).offset().top - 20\n            }, 300);\n          }\n        });\n      } else {\n        $('html, body').animate({\n          scrollTop: $(targetLinkTo).offset().top - 20\n        }, 600);\n      }\n    }\n\n    $('#sticky-menu').addClass('active');\n    // console.log($(e.currentTarget).attr('href'));\n  });\n  $('#logo').click(function () {\n    !$('#sticky-menu').hasClass('active') ? $('#sticky-menu').addClass('active') : $('#sticky-menu').removeClass('active');\n    // $('#logo').siblings().css('opacity', menuVisible ? 1 : 0)\n  });\n  $('.emailSubmit').click(function (e) {\n    var $tg = $(e.currentTarget).parent();\n    var mailto = $tg.find('.vl-email').html();\n    var subject = $tg.find('.subject').val();\n    var body = $tg.find('.content').val();\n    window.open('mailto:' + mailto + '?subject=' + subject + '&body=' + body);\n  });\n};\n\nvar logoAnimation = function logoAnimation() {\n  // if(currentChapter !== 0) return\n  console.log('logoAnimation');\n  var $videoContainer = $('.video-slices');\n  $videoContainer.css('opacity', 1);\n  var videoHeight = $videoContainer.find('img:eq(0)').outerHeight();\n  $videoContainer.find('img').css('height', videoHeight);\n  var $videoSlices = $videoContainer.find('img');\n\n  var offsetY = 0;\n  $.each($videoSlices, function (index, val) {\n    // console.log('tttt')\n    (0, _timers.setTimeout)(function () {\n      $videoContainer.css('top', '-' + offsetY + 'px');\n      offsetY += $(val).outerHeight();\n    }, 33 * index);\n  });\n};\n\nvar navLogoAnimation = function navLogoAnimation() {\n  var $navContainer = $('.logo-slices');\n  var navHeight = $navContainer.find('img:eq(0)').outerHeight();\n  $navContainer.find('img').css('height', navHeight);\n  var $navSlices = $navContainer.find('img');\n  var offsetY = 0;\n  $.each($navSlices, function (index, val) {\n    (0, _timers.setTimeout)(function () {\n      $navContainer.css('top', '-' + offsetY + 'px');\n      offsetY += $(val).outerHeight();\n    }, 33 * index);\n  });\n};\n\nnavClickEvents();\ngenContents();\ninit();\nhashDetect();\nscrollDetect();\n\nwin.scroll(function (_) {\n  scrollDetect();\n});\nwin.resize(function (_) {\n  scrollDetect();\n  $('.video-slices, .video-placeholder, .logo-slices, .logo-placeholder').hide();\n  $('.video-static, .logo-static').show();\n});\nwin.load(function (_) {\n  initAnimation();\n  navLogoAnimation();\n});\n\n//# sourceURL=webpack:///./src/lib/cool-parallax.js?");

/***/ })

/******/ });