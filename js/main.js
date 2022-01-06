/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/components/picturefill.js":
/*!**********************************************!*\
  !*** ./src/blocks/components/picturefill.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picturefill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picturefill */ "./node_modules/picturefill/dist/picturefill.js");
/* harmony import */ var picturefill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(picturefill__WEBPACK_IMPORTED_MODULE_0__);
// eslint-disable-next-line no-unused-vars


/***/ }),

/***/ "./src/blocks/components/repeat.js":
/*!*****************************************!*\
  !*** ./src/blocks/components/repeat.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!String.prototype.repeat) {
  String.prototype.repeat = function (count) {
    'use strict';

    if (this == null) {
      throw new TypeError('can\'t convert ' + this + ' to object');
    }

    var str = '' + this;
    count = +count;

    if (count != count) {
      count = 0;
    }

    if (count < 0) {
      throw new RangeError('repeat count must be non-negative');
    }

    if (count == Infinity) {
      throw new RangeError('repeat count must be less than infinity');
    }

    count = Math.floor(count);

    if (str.length == 0 || count == 0) {
      return '';
    } // Обеспечение того, что count является 31-битным целым числом, позволяет нам значительно
    // соптимизировать главную часть функции. Впрочем, большинство современных (на август
    // 2014 года) браузеров не обрабатывают строки, длиннее 1 << 28 символов, так что:


    if (str.length * count >= 1 << 28) {
      throw new RangeError('repeat count must not overflow maximum string size');
    }

    var rpt = '';

    for (var i = 0; i < count; i++) {
      rpt += str;
    }

    return rpt;
  };
}

/***/ }),

/***/ "./src/blocks/components/svg4everybody.js":
/*!************************************************!*\
  !*** ./src/blocks/components/svg4everybody.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_0__);

svg4everybody__WEBPACK_IMPORTED_MODULE_0___default()();

/***/ }),

/***/ "./src/blocks/components/tabs.js":
/*!***************************************!*\
  !*** ./src/blocks/components/tabs.js ***!
  \***************************************/
/*! exports provided: tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabs", function() { return tabs; });
var tabs = function tabs(slider) {
  var tabsBtn = document.querySelectorAll(".tabs__btn");

  var _loop = function _loop(i) {
    var el = tabsBtn[i];
    el.addEventListener("click", function () {
      var tabsPath = el.getAttribute("data-tabs-path");
      el.closest(".tabs").querySelector('.tabs__btn--active').classList.remove('tabs__btn--active');
      el.closest(".tabs").querySelector("[data-tabs-path=\"".concat(tabsPath, "\"]")).classList.add('tabs__btn--active');
      var tabsContent = el.closest(".tabs").querySelectorAll(".tabs__content");

      var switchContent = function switchContent(path, element) {
        slider === null || slider === void 0 ? void 0 : slider.update();

        for (var _i = 0; _i < tabsContent.length; _i++) {
          var _el = tabsContent[_i];

          _el.classList.remove('tabs__content--active');
        }

        element.closest(".tabs").querySelector("[data-tabs-target=\"".concat(path, "\"]")).classList.add('tabs__content--active');
      };

      switchContent(tabsPath, el);
    });
  };

  for (var i = 0; i < tabsBtn.length; i++) {
    _loop(i);
  }
};

/***/ }),

/***/ "./src/blocks/modules/about/video.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/about/video.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var videos = document.querySelectorAll('.video');

var generateUrl = function generateUrl(id) {
  var query = '?rel=0&showinfo=0&autoplay=1';
  return 'https://www.youtube.com/embed/' + id + query;
};

var createIframe = function createIframe(id) {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay; encrypted-media');
  iframe.setAttribute('src', generateUrl(id));
  iframe.classList.add('video__iframe');
  return iframe;
};

var _loop = function _loop(i) {
  var el = videos[i];
  var videoHref = el.getAttribute('data-video');
  var deletedLength = 'https://youtu.be/'.length;
  var videoId = videoHref.substring(deletedLength, videoHref.length);
  var img = el.querySelector('.video__image');
  var youtubeImgSrc = 'https://i.ytimg.com/vi/' + videoId + '/sddefault.jpg';
  img.style.cssText = "background-image: url(".concat(youtubeImgSrc, ")");
  el.addEventListener('click', function (e) {
    e.preventDefault();
    var iframe = createIframe(videoId);
    el.querySelector('.video__image').style.display = 'none';
    el.appendChild(iframe);
    el.querySelector('button').style.display = 'none';
  });
};

for (var i = 0; i < videos.length; i++) {
  _loop(i);
}

;

/***/ }),

/***/ "./src/blocks/modules/advantages/adv-slider.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/advantages/adv-slider.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/core */ "./node_modules/swiper/swiper.esm.js");
 // configure Swiper to use modules

swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["Pagination"]]); // init Swiper:

var headerSlider = new swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"]('.advantages-slider', {
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  pagination: {
    el: '.advantages-slider__pag',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    769: {
      slidesPerGroup: 2
    },
    1025: {
      slidesPerGroup: 3
    }
  },
  // Navigation arrows
  navigation: {
    prevEl: '.advantages-slider__btn--prev',
    nextEl: '.advantages-slider__btn--next'
  }
});

/***/ }),

/***/ "./src/blocks/modules/articles/articles-slider.js":
/*!********************************************************!*\
  !*** ./src/blocks/modules/articles/articles-slider.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");

document.addEventListener("DOMContentLoaded", function () {
  var articlesSlider = document.querySelector('.articles-slider');
  var mySwiper;

  var initializeSlider = function initializeSlider() {
    mySwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](articlesSlider, {
      slidesPerView: 'auto'
    });
    articlesSlider.dataset.mobile = 'true';
  };

  if (window.innerWidth <= 1024) {
    initializeSlider();
  }

  var mobileSlider = function mobileSlider() {
    if (window.innerWidth <= 1024 && articlesSlider.dataset.mobile == 'false') {
      initializeSlider();
    }

    if (window.innerWidth > 1024) {
      articlesSlider.dataset.mobile = 'false';

      if (articlesSlider.classList.contains('swiper-container-initialized')) {
        mySwiper.destroy();
      }
    }
  };

  mobileSlider();
  window.addEventListener('resize', function () {
    mobileSlider();
  });
});

/***/ }),

/***/ "./src/blocks/modules/articles/lazy.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/articles/lazy.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vanilla-lazyload */ "./node_modules/vanilla-lazyload/dist/lazyload.min.js");
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0__);

var lazyLoadInstance = new vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0___default.a({// Your custom settings go here
});

/***/ }),

/***/ "./src/blocks/modules/card/card-roll-up.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/card/card-roll-up.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  var cardInfoRollUp = document.querySelector(".card-info__roll-up");
  var cardInfoList = document.querySelector(".card-info__list");
  cardInfoRollUp === null || cardInfoRollUp === void 0 ? void 0 : cardInfoRollUp.addEventListener("click", function (e) {
    var target = e.currentTarget.querySelector("span");
    e.currentTarget.classList.toggle("active");
    target.innerHTML !== 'Свернуть' ? target.innerHTML = 'Свернуть' : target.innerHTML = "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C";
    cardInfoList.classList.toggle("hidden");
  });
});

/***/ }),

/***/ "./src/blocks/modules/card/card-slider.js":
/*!************************************************!*\
  !*** ./src/blocks/modules/card/card-slider.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/core */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var fslightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fslightbox */ "./node_modules/fslightbox/index.js");
/* harmony import */ var fslightbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fslightbox__WEBPACK_IMPORTED_MODULE_1__);
Number.isNaN = Number.isNaN || function (value) {
  return typeof value === 'number' && isNaN(value);
};



swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["Scrollbar"]]);
document.addEventListener("DOMContentLoaded", function () {
  var cardSliderThumbs = new swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"](".card-slider__nav", {
    slidesPerView: 'auto',
    spaceBetween: 4,
    watchSlidesVisibility: true,
    watchSlidesProgress: true
  });
  var cardSliderMain = new swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"](".card-slider__main", {
    spaceBetween: 4,
    scrollbar: {
      el: '.card-slider__scrollbar',
      draggable: true
    },
    navigation: {
      nextEl: '.card-slider__btn--next',
      prevEl: '.card-slider__btn--prev'
    },
    thumbs: {
      swiper: cardSliderThumbs
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/card/card-ways.js":
/*!**********************************************!*\
  !*** ./src/blocks/modules/card/card-ways.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  var cardWays = document.querySelector(".card-ways");

  if (cardWays) {
    var cardWaysBtn = document.querySelector(".card-ways__btn");
    cardWaysBtn.addEventListener("click", function () {
      cardWays.classList.toggle("show");
    });
  }
});

/***/ }),

/***/ "./src/blocks/modules/card/goodshare.js":
/*!**********************************************!*\
  !*** ./src/blocks/modules/card/goodshare.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/card/info-tabs.js":
/*!**********************************************!*\
  !*** ./src/blocks/modules/card/info-tabs.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/tabs */ "./src/blocks/components/tabs.js");

Object(_components_tabs__WEBPACK_IMPORTED_MODULE_0__["tabs"])();

/***/ }),

/***/ "./src/blocks/modules/card/price.js":
/*!******************************************!*\
  !*** ./src/blocks/modules/card/price.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* document.addEventListener("DOMContentLoaded", () => {
    const priceSum = document.querySelector(".price-sum");
    if (priceSum) {
        const priceTotal = document.querySelector(".price__total");
        const stepper = document.querySelector(".stepper");
        const stepperInput = stepper.querySelector('.stepper__input');
        const stepperBtnUp = stepper.querySelector('.stepper__btn--up');
        const stepperBtnDown = stepper.querySelector('.stepper__btn--down');
        let priceValue = priceSum.dataset.sum;

        const priceWithoutSpaces = (str) => {
            return str.replace(/\s/g, '');
        };

        const plusFullPrice = (currentPrice) => {
            return price += currentPrice;
        };

        const minusFullPrice = (currentPrice) => {
            return price -= currentPrice;
        };

        const printFullPrice = () => {
            fullPrice.textContent = `${normalPrice(price)} р`;
        };

        const printQuantity = (num) => {
            cartCount.textContent = num;
        };

        const normalPrice = (str) => {
            return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        };

        console.log(priceWithoutSpaces(priceValue));

        stepperBtnUp.addEventListener("click", () => {
            setPrice();
        });
        stepperBtnDown.addEventListener("click", () => {
            priceTotal.innerHTML -= priceValue;
        });
    }
}); */

/***/ }),

/***/ "./src/blocks/modules/catalog/more.js":
/*!********************************************!*\
  !*** ./src/blocks/modules/catalog/more.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  var moreBtn = document.querySelector(".catalog__more");
  var flag = 0;
  moreBtn === null || moreBtn === void 0 ? void 0 : moreBtn.addEventListener("click", function (e) {
    e.currentTarget.classList.toggle(".catalog__more--active");

    if (flag == 0) {
      var _e$currentTarget$pare;

      e.currentTarget.innerHTML = "Свернуть обратно";
      (_e$currentTarget$pare = e.currentTarget.parentElement.querySelector(".catalog__grid--hidden")) === null || _e$currentTarget$pare === void 0 ? void 0 : _e$currentTarget$pare.classList.remove("catalog__grid--hidden");
      flag++;
    } else {
      var _e$currentTarget$pare2;

      e.currentTarget.innerHTML = "Показать больше";
      (_e$currentTarget$pare2 = e.currentTarget.parentElement.querySelector(".catalog__grid")) === null || _e$currentTarget$pare2 === void 0 ? void 0 : _e$currentTarget$pare2.classList.add("catalog__grid--hidden");
      flag--;
    }

    ;
  });
});

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/adapt.js":
/*!********************************************!*\
  !*** ./src/blocks/modules/header/adapt.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle


function DynamicAdapt(type) {
  this.type = type;
}

DynamicAdapt.prototype.init = function () {
  var _this2 = this;

  var _this = this; // массив объектов


  this.оbjects = [];
  this.daClassname = "_dynamic_adapt_"; // массив DOM-элементов

  this.nodes = document.querySelectorAll("[data-da]"); // наполнение оbjects объктами

  for (var i = 0; i < this.nodes.length; i++) {
    var node = this.nodes[i];
    var data = node.dataset.da.trim();
    var dataArray = data.split(",");
    var оbject = {};
    оbject.element = node;
    оbject.parent = node.parentNode;
    оbject.destination = document.querySelector(dataArray[0].trim());
    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
    оbject.index = this.indexInParent(оbject.parent, оbject.element);
    this.оbjects.push(оbject);
  }

  this.arraySort(this.оbjects); // массив уникальных медиа-запросов

  this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
    return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
  }, this);
  this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
    return Array.prototype.indexOf.call(self, item) === index;
  }); // навешивание слушателя на медиа-запрос
  // и вызов обработчика при первом запуске

  var _loop = function _loop(_i) {
    var media = _this2.mediaQueries[_i];
    var mediaSplit = String.prototype.split.call(media, ',');
    var matchMedia = window.matchMedia(mediaSplit[0]);
    var mediaBreakpoint = mediaSplit[1]; // массив объектов с подходящим брейкпоинтом

    var оbjectsFilter = Array.prototype.filter.call(_this2.оbjects, function (item) {
      return item.breakpoint === mediaBreakpoint;
    });
    matchMedia.addListener(function () {
      _this.mediaHandler(matchMedia, оbjectsFilter);
    });

    _this2.mediaHandler(matchMedia, оbjectsFilter);
  };

  for (var _i = 0; _i < this.mediaQueries.length; _i++) {
    _loop(_i);
  }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
  if (matchMedia.matches) {
    for (var i = 0; i < оbjects.length; i++) {
      var оbject = оbjects[i];
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.moveTo(оbject.place, оbject.element, оbject.destination);
    }
  } else {
    for (var _i2 = 0; _i2 < оbjects.length; _i2++) {
      var _оbject = оbjects[_i2];

      if (_оbject.element.classList.contains(this.daClassname)) {
        this.moveBack(_оbject.parent, _оbject.element, _оbject.index);
      }
    }
  }
}; // Функция перемещения


DynamicAdapt.prototype.moveTo = function (place, element, destination) {
  element.classList.add(this.daClassname);

  if (place === 'last' || place >= destination.children.length) {
    destination.insertAdjacentElement('beforeend', element);
    return;
  }

  if (place === 'first') {
    destination.insertAdjacentElement('afterbegin', element);
    return;
  }

  destination.children[place].insertAdjacentElement('beforebegin', element);
}; // Функция возврата


DynamicAdapt.prototype.moveBack = function (parent, element, index) {
  element.classList.remove(this.daClassname);

  if (parent.children[index] !== undefined) {
    parent.children[index].insertAdjacentElement('beforebegin', element);
  } else {
    parent.insertAdjacentElement('beforeend', element);
  }
}; // Функция получения индекса внутри родителя


DynamicAdapt.prototype.indexInParent = function (parent, element) {
  var array = Array.prototype.slice.call(parent.children);
  return Array.prototype.indexOf.call(array, element);
}; // Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max


DynamicAdapt.prototype.arraySort = function (arr) {
  if (this.type === "min") {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return -1;
        }

        if (a.place === "last" || b.place === "first") {
          return 1;
        }

        return a.place - b.place;
      }

      return a.breakpoint - b.breakpoint;
    });
  } else {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return 1;
        }

        if (a.place === "last" || b.place === "first") {
          return -1;
        }

        return b.place - a.place;
      }

      return b.breakpoint - a.breakpoint;
    });
    return;
  }
};

var da = new DynamicAdapt("max");
da.init();

/***/ }),

/***/ "./src/blocks/modules/header/burger.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/burger.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".nav");
  var body = document.body;

  var navOpen = function navOpen() {
    burger.classList.toggle("burger-close");
    body.classList.toggle("lock");
    nav === null || nav === void 0 ? void 0 : nav.classList.toggle("show");
  };

  burger === null || burger === void 0 ? void 0 : burger.addEventListener("click", navOpen);
});

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var navItem = document.querySelectorAll(".nav__item");
var mainMenuLink = document.querySelector(".main-menu__link--active");
document.addEventListener("click", function (e) {
  if (!e.target.closest(".main-menu__item")) {
    var _mainMenuLink$parentE;

    mainMenuLink === null || mainMenuLink === void 0 ? void 0 : mainMenuLink.classList.remove("active");
    mainMenuLink === null || mainMenuLink === void 0 ? void 0 : (_mainMenuLink$parentE = mainMenuLink.parentElement.querySelector(".menu-dropdown")) === null || _mainMenuLink$parentE === void 0 ? void 0 : _mainMenuLink$parentE.classList.remove("show");
  }
});
mainMenuLink === null || mainMenuLink === void 0 ? void 0 : mainMenuLink.addEventListener("click", function (e) {
  var _e$currentTarget$pare;

  e.currentTarget.classList.toggle("active");
  (_e$currentTarget$pare = e.currentTarget.parentElement.querySelector(".menu-dropdown")) === null || _e$currentTarget$pare === void 0 ? void 0 : _e$currentTarget$pare.classList.toggle("show");
});

var headerMenu = function headerMenu() {
  if (window.innerWidth <= 1024) {
    for (var i = 0; i < navItem.length; i++) {
      var el = navItem[i];
      el.addEventListener("click", function (e) {
        e.currentTarget.querySelector(".nav-dropdown").classList.toggle("show");
        e.currentTarget.classList.toggle("active");
      });
    }
  }
};

headerMenu();

var changeHeight = function changeHeight() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
};

changeHeight();
window.addEventListener('resize', function () {
  changeHeight();
});

/***/ }),

/***/ "./src/blocks/modules/header/slider.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/slider.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/core */ "./node_modules/swiper/swiper.esm.js");
Number.isNaN = Number.isNaN || function (value) {
  return typeof value === 'number' && isNaN(value);
};


swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["Pagination"]]);
document.addEventListener("DOMContentLoaded", function () {
  var headerSlider = new swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"]('.header-slider', {
    slidesPerView: 'auto',
    pagination: {
      el: '.header__slider-pag',
      type: 'fraction'
    },
    // Navigation arrows
    navigation: {
      nextEl: '.header__slider-btn--next',
      prevEl: '.header__slider-btn--prev'
    },
    renderFraction: function renderFraction(currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' + ' <span>-</span> ' + '<span class="' + totalClass + '"></span>';
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/modal/imask.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/modal/imask.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");

var tells = document.querySelectorAll('.tell-mask');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};

for (var i = 0; i < tells.length; i++) {
  var el = tells[i];
  var mask = Object(imask__WEBPACK_IMPORTED_MODULE_0__["default"])(el, maskOptions);
}

/***/ }),

/***/ "./src/blocks/modules/modal/modal.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/modal/modal.js ***!
  \*******************************************/
/*! exports provided: GraphModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphModal", function() { return GraphModal; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

if (!Object.assign) {
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function value(target, firstSource) {
      'use strict';

      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object');
      }

      var to = Object(target);

      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];

        if (nextSource === undefined || nextSource === null) {
          continue;
        }

        var keysArray = Object.keys(Object(nextSource));

        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }

      return to;
    }
  });
}

(function (ELEMENT) {
  ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;

  ELEMENT.closest = ELEMENT.closest || function closest(selector) {
    if (!this) return null;
    if (this.matches(selector)) return this;

    if (!this.parentElement) {
      return null;
    } else return this.parentElement.closest(selector);
  };
})(Element.prototype);

var GraphModal = /*#__PURE__*/function () {
  function GraphModal(t) {
    _classCallCheck(this, GraphModal);

    this.options = Object.assign({
      isOpen: function isOpen() {},
      isClose: function isClose() {}
    }, t), this.modal = document.querySelector(".modal"), this.speed = 300, this.animation = "fade", this._reOpen = !1, this._nextContainer = !1, this.modalContainer = !1, this.isOpen = !1, this.previousActiveElement = !1, this._focusElements = ["a[href]", "input", "select", "textarea", "button", "iframe", "[contenteditable]", "[tabindex]:not([tabindex^=\"-\"])"], this._fixBlocks = document.querySelectorAll(".fix-block"), this.events();
  }

  _createClass(GraphModal, [{
    key: "events",
    value: function events() {
      this.modal && (document.addEventListener("click", function (t) {
        var e = t.target.closest("[data-graph-path]");

        if (e) {
          var _t = e.dataset.graphPath,
              s = e.dataset.graphAnimation,
              i = e.dataset.graphSpeed;
          return this.animation = s || "fade", this.speed = i ? parseInt(i) : 300, this._nextContainer = document.querySelector("[data-graph-target=\"".concat(_t, "\"]")), void this.open();
        }

        t.target.closest(".modal__close") && this.close();
      }.bind(this)), window.addEventListener("keydown", function (t) {
        27 == t.keyCode && this.isOpen && this.close(), 9 == t.which && this.isOpen && this.focusCatch(t);
      }.bind(this)), this.modal.addEventListener("click", function (t) {
        t.target.classList.contains("modal__container") || t.target.closest(".modal__container") || !this.isOpen || this.close();
      }.bind(this)));
    }
  }, {
    key: "open",
    value: function open(t) {
      var _this = this;

      if (this.previousActiveElement = document.activeElement, this.isOpen) return this.reOpen = !0, void this.close();
      this.modalContainer = this._nextContainer, t && (this.modalContainer = document.querySelector("[data-graph-target=\"".concat(t, "\"]"))), this.modal.style.setProperty("--transition-time", "".concat(this.speed / 1e3, "s")), this.modal.classList.add("is-open"), this.disableScroll(), this.modalContainer.classList.add("modal-open"), this.modalContainer.classList.add(this.animation), setTimeout(function () {
        _this.options.isOpen(_this), _this.modalContainer.classList.add("animate-open"), _this.isOpen = !0, _this.focusTrap();
      }, this.speed);
    }
  }, {
    key: "close",
    value: function close() {
      this.modalContainer && (this.modalContainer.classList.remove("animate-open"), this.modalContainer.classList.remove(this.animation), this.modal.classList.remove("is-open"), this.modalContainer.classList.remove("modal-open"), this.enableScroll(), this.options.isClose(this), this.isOpen = !1, this.focusTrap(), this.reOpen && (this.reOpen = !1, this.open()));
    }
  }, {
    key: "focusCatch",
    value: function focusCatch(t) {
      var e = this.modalContainer.querySelectorAll(this._focusElements),
          s = Array.prototype.slice.call(e),
          i = s.indexOf(document.activeElement);
      t.shiftKey && 0 === i && (s[s.length - 1].focus(), t.preventDefault()), t.shiftKey || i !== s.length - 1 || (s[0].focus(), t.preventDefault());
    }
  }, {
    key: "focusTrap",
    value: function focusTrap() {
      var t = this.modalContainer.querySelectorAll(this._focusElements);
      this.isOpen ? t.length && t[0].focus() : this.previousActiveElement.focus();
    }
  }, {
    key: "disableScroll",
    value: function disableScroll() {
      document.body.classList.add("lock");
    }
  }, {
    key: "enableScroll",
    value: function enableScroll() {
      document.body.classList.remove("lock");
    }
  }]);

  return GraphModal;
}();
/* Setup */

var nav = document.querySelector(".nav");
var burger = document.querySelector(".burger");
new GraphModal({
  isOpen: function isOpen() {
    nav === null || nav === void 0 ? void 0 : nav.classList.remove("show");
    burger === null || burger === void 0 ? void 0 : burger.classList.remove("burger-close");
  }
});

/***/ }),

/***/ "./src/blocks/modules/modal/purchase-remove.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/modal/purchase-remove.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/blocks/modules/modal/modal.js");

document.addEventListener("DOMContentLoaded", function () {
  var modal = new _modal__WEBPACK_IMPORTED_MODULE_0__["GraphModal"]();
  var purchaseRemoveBtns = document.querySelectorAll(".purchase__remove");

  var _loop = function _loop(i) {
    var el = purchaseRemoveBtns[i];
    el.addEventListener("click", function (e) {
      setTimeout(function () {
        el.parentElement.remove();

        if (document.querySelectorAll(".purchase__item").length == 0) {
          modal.close();
        }
      }, 0);
    });
  };

  for (var i = 0; i < purchaseRemoveBtns.length; i++) {
    _loop(i);
  }
});

/***/ }),

/***/ "./src/blocks/modules/producers/prod-slider.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/producers/prod-slider.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/core */ "./node_modules/swiper/swiper.esm.js");
Number.isNaN = Number.isNaN || function (value) {
  return typeof value === 'number' && isNaN(value);
};


swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_0__["Navigation"]]);
document.addEventListener("DOMContentLoaded", function () {
  var prodSlider = new swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"]('.producers-slider', {
    slidesPerView: 1,
    lazy: true,
    preloadImages: true,
    navigation: {
      prevEl: '.producers-slider__btn--prev',
      nextEl: '.producers-slider__btn--next'
    },
    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      1025: {
        slidesPerView: 6,
        spaceBetween: 40
      }
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/products/product.js":
/*!************************************************!*\
  !*** ./src/blocks/modules/products/product.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fslightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fslightbox */ "./node_modules/fslightbox/index.js");
/* harmony import */ var fslightbox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fslightbox__WEBPACK_IMPORTED_MODULE_0__);

document.addEventListener("DOMContentLoaded", function () {
  var steppers = document.querySelectorAll('.stepper');

  var _loop = function _loop(i) {
    var stepper = steppers[i];
    var stepperInput = stepper.querySelector('.stepper__input');
    var stepperBtnUp = stepper.querySelector('.stepper__btn--up');
    var stepperBtnDown = stepper.querySelector('.stepper__btn--down');
    var count = stepperInput.value;

    if (count <= 1) {
      stepperBtnDown.classList.add('stepper__btn--disabled');
    } else {
      stepperBtnDown.classList.remove('stepper__btn--disabled');
    }

    ;

    var isNotApple = function isNotApple() {
      if (!/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        return false;
      }

      return true;
    };

    function allowNumbersOnly(e) {
      var code = e.which ? e.which : e.keyCode;

      if (code > 31 && (code < 48 || code > 57)) {
        e.preventDefault();
      }
    }

    stepperInput.addEventListener('keyup', function (e) {
      var self = e.currentTarget;

      if (self.value == '0') {
        self.value = 1;
      }

      if (isNotApple) {
        self.style.width = "".concat(self.value.length + 1, "ex");
      } else {
        self.style.width = "".concat(self.value.length + 2, "ex");
      }

      count = stepperInput.value;

      if (count == 1) {
        stepperBtnDown.classList.add('stepper__btn--disabled');
      } else {
        stepperBtnDown.classList.remove('stepper__btn--disabled');
      }
    });
    stepperInput.addEventListener('keypress', function (e) {
      allowNumbersOnly(e);
    });
    stepperInput.addEventListener('change', function (e) {
      var self = e.currentTarget;

      if (!self.value) {
        self.value = 1;
      }

      count = stepperInput.value;

      if (count == 1) {
        stepperBtnDown.classList.add('stepper__btn--disabled');
      } else {
        stepperBtnDown.classList.remove('stepper__btn--disabled');
      }
    });
    stepperBtnUp.addEventListener('click', function (e) {
      e.preventDefault();
      count++;

      if (count == 1) {
        stepperBtnDown.classList.add('stepper__btn--disabled');
      } else {
        stepperBtnDown.classList.remove('stepper__btn--disabled');
      }

      stepperInput.value = count;

      if (isNotApple) {
        stepperInput.style.width = "".concat(stepperInput.value.length + 1, "ex");
      } else {
        stepperInput.style.width = "".concat(stepperInput.value.length + 2, "ex");
      }
    });
    stepperBtnDown.addEventListener('click', function (e) {
      e.preventDefault();
      count--;

      if (count == 1) {
        stepperBtnDown.classList.add('stepper__btn--disabled');
      } else {
        stepperBtnDown.classList.remove('stepper__btn--disabled');
      }

      stepperInput.value = count;

      if (isNotApple) {
        stepperInput.style.width = "".concat(stepperInput.value.length + 1, "ex");
      } else {
        stepperInput.style.width = "".concat(stepperInput.value.length + 2, "ex");
      }
    });
  };

  for (var i = 0; i < steppers.length; i++) {
    _loop(i);
  }
});

/***/ }),

/***/ "./src/blocks/modules/products/products-slider.js":
/*!********************************************************!*\
  !*** ./src/blocks/modules/products/products-slider.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/tabs */ "./src/blocks/components/tabs.js");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/core */ "./node_modules/swiper/swiper.esm.js");


Number.isNaN = Number.isNaN || function (value) {
  return typeof value === 'number' && isNaN(value);
};


swiper_core__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper_core__WEBPACK_IMPORTED_MODULE_1__["Pagination"]]);
document.addEventListener("DOMContentLoaded", function () {
  var productsSliders = document.querySelectorAll(".products-slider");

  for (var i = 0; i < productsSliders.length; i++) {
    var slider = productsSliders[i];
    var productsSlider = new swiper_core__WEBPACK_IMPORTED_MODULE_1__["default"](slider, {
      slidesPerView: 1,
      spaceBetween: 24,
      pagination: {
        el: '.products-slider__pag',
        type: 'bullets',
        clickable: true
      },
      // Navigation arrows
      navigation: {
        nextEl: '.products-slider__btn--next',
        prevEl: '.products-slider__btn--prev'
      },
      breakpoints: {
        577: {
          slidesPerView: 'auto'
        }
      }
    });
    Object(_components_tabs__WEBPACK_IMPORTED_MODULE_0__["tabs"])(productsSlider);
  }
});

/***/ }),

/***/ "./src/blocks/modules/recommended-products/recommended-products-slider.js":
/*!********************************************************************************!*\
  !*** ./src/blocks/modules/recommended-products/recommended-products-slider.js ***!
  \********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/core */ "./node_modules/swiper/swiper.esm.js");
Number.isNaN = Number.isNaN || function (value) {
  return typeof value === 'number' && isNaN(value);
};


swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["Pagination"]]);
document.addEventListener("DOMContentLoaded", function () {
  var recProdSlider = new swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"](".recommended-products-slider", {
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: '.products-slider__pag',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.products-slider__btn--next',
      prevEl: '.products-slider__btn--prev'
    },
    breakpoints: {
      577: {
        slidesPerView: 'auto'
      }
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/services/serv-slider.js":
/*!****************************************************!*\
  !*** ./src/blocks/modules/services/serv-slider.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");

document.addEventListener("DOMContentLoaded", function () {
  var servicesSlider = document.querySelector('.services-slider');

  if (servicesSlider) {
    var mySwiper;

    var initializeSlider = function initializeSlider() {
      mySwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](servicesSlider, {
        slidesPerView: 'auto',
        spaceBetween: 10,
        pagination: {
          el: '.services-slider__pag',
          type: 'bullets',
          clickable: true
        },
        // Navigation arrows
        navigation: {
          prevEl: '.services-slider__btn--prev',
          nextEl: '.services-slider__btn--next'
        }
      });
      servicesSlider.dataset.mobile = 'true';
    };

    if (window.innerWidth <= 576) {
      initializeSlider();
    }

    var mobileSlider = function mobileSlider() {
      if (window.innerWidth <= 576 && servicesSlider.dataset.mobile == 'false') {
        initializeSlider();
      }

      if (window.innerWidth > 576) {
        servicesSlider.dataset.mobile = 'false';

        if (servicesSlider.classList.contains('swiper-container-initialized')) {
          mySwiper.destroy();
        }
      }
    };

    mobileSlider();
    window.addEventListener('resize', function () {
      mobileSlider();
    });
  }
});

/***/ }),

/***/ "./src/blocks/modules/videos/videos-slider.js":
/*!****************************************************!*\
  !*** ./src/blocks/modules/videos/videos-slider.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/core */ "./node_modules/swiper/swiper.esm.js");
Number.isNaN = Number.isNaN || function (value) {
  return typeof value === 'number' && isNaN(value);
};


swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["Pagination"]]);
document.addEventListener("DOMContentLoaded", function () {
  var videosSlider = new swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"]('.videos-slider', {
    slidesPerView: 1,
    spaceBetween: 25,
    pagination: {
      el: '.videos-slider__pag',
      type: 'bullets',
      clickable: true
    },
    // Navigation arrows
    navigation: {
      nextEl: '.videos-slider__btn--next',
      prevEl: '.videos-slider__btn--prev'
    },
    breakpoints: {
      769: {
        slidesPerView: 2
      },
      1025: {
        slidesPerView: 3
      }
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/we-work/we-work-slider.js":
/*!******************************************************!*\
  !*** ./src/blocks/modules/we-work/we-work-slider.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");

document.addEventListener("DOMContentLoaded", function () {
  var weWorkSlider = document.querySelector('.we-work-slider');

  if (weWorkSlider) {
    var mySwiper;

    var initializeSlider = function initializeSlider() {
      mySwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](weWorkSlider, {
        slidesPerView: 'auto',
        spaceBetween: 50,
        pagination: {
          el: '.we-work-slider__pag',
          type: 'bullets',
          clickable: true
        },
        // Navigation arrows
        navigation: {
          prevEl: '.we-work-slider__btn--prev',
          nextEl: '.we-work-slider__btn--next'
        }
      });
      weWorkSlider.dataset.mobile = 'true';
    };

    if (window.innerWidth <= 768) {
      initializeSlider();
    }

    var mobileSlider = function mobileSlider() {
      if (window.innerWidth <= 768 && weWorkSlider.dataset.mobile == 'false') {
        initializeSlider();
      }

      if (window.innerWidth > 768) {
        weWorkSlider.dataset.mobile = 'false';

        if (weWorkSlider.classList.contains('swiper-container-initialized')) {
          mySwiper.destroy();
        }
      }
    };

    mobileSlider();
    window.addEventListener('resize', function () {
      mobileSlider();
    });
  }
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_components_picturefill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/components/picturefill */ "./src/blocks/components/picturefill.js");
/* harmony import */ var _blocks_components_svg4everybody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/components/svg4everybody */ "./src/blocks/components/svg4everybody.js");
/* harmony import */ var _blocks_components_repeat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/components/repeat */ "./src/blocks/components/repeat.js");
/* harmony import */ var _blocks_components_repeat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blocks_components_repeat__WEBPACK_IMPORTED_MODULE_2__);
/* Repair tag picture in IE */

/* Repair sprites in IE */


/* Repair Repeat for Objects */



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_adapt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/adapt */ "./src/blocks/modules/header/adapt.js");
/* harmony import */ var _modules_header_adapt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_adapt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_header_burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/header/burger */ "./src/blocks/modules/header/burger.js");
/* harmony import */ var _modules_header_burger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_header_burger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_header_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/header/slider */ "./src/blocks/modules/header/slider.js");
/* harmony import */ var _modules_advantages_adv_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/advantages/adv-slider */ "./src/blocks/modules/advantages/adv-slider.js");
/* harmony import */ var _modules_about_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/about/video */ "./src/blocks/modules/about/video.js");
/* harmony import */ var _modules_about_video__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_about_video__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_services_serv_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/services/serv-slider */ "./src/blocks/modules/services/serv-slider.js");
/* harmony import */ var _modules_catalog_more__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/catalog/more */ "./src/blocks/modules/catalog/more.js");
/* harmony import */ var _modules_catalog_more__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_catalog_more__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_producers_prod_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/producers/prod-slider */ "./src/blocks/modules/producers/prod-slider.js");
/* harmony import */ var _modules_we_work_we_work_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/we-work/we-work-slider */ "./src/blocks/modules/we-work/we-work-slider.js");
/* harmony import */ var _modules_products_products_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/products/products-slider */ "./src/blocks/modules/products/products-slider.js");
/* harmony import */ var _modules_products_product__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/products/product */ "./src/blocks/modules/products/product.js");
/* harmony import */ var _modules_videos_videos_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/videos/videos-slider */ "./src/blocks/modules/videos/videos-slider.js");
/* harmony import */ var _modules_articles_articles_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/articles/articles-slider */ "./src/blocks/modules/articles/articles-slider.js");
/* harmony import */ var _modules_articles_lazy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! %modules%/articles/lazy */ "./src/blocks/modules/articles/lazy.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");
/* harmony import */ var _modules_modal_imask__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! %modules%/modal/imask */ "./src/blocks/modules/modal/imask.js");
/* harmony import */ var _modules_modal_purchase_remove__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! %modules%/modal/purchase-remove */ "./src/blocks/modules/modal/purchase-remove.js");
/* harmony import */ var _modules_recommended_products_recommended_products_slider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! %modules%/recommended-products/recommended-products-slider */ "./src/blocks/modules/recommended-products/recommended-products-slider.js");
/* harmony import */ var _modules_card_card_slider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! %modules%/card/card-slider */ "./src/blocks/modules/card/card-slider.js");
/* harmony import */ var _modules_card_price__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! %modules%/card/price */ "./src/blocks/modules/card/price.js");
/* harmony import */ var _modules_card_price__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_modules_card_price__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _modules_card_card_ways__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! %modules%/card/card-ways */ "./src/blocks/modules/card/card-ways.js");
/* harmony import */ var _modules_card_card_ways__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_modules_card_card_ways__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _modules_card_info_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! %modules%/card/info-tabs */ "./src/blocks/modules/card/info-tabs.js");
/* harmony import */ var _modules_card_goodshare__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! %modules%/card/goodshare */ "./src/blocks/modules/card/goodshare.js");
/* harmony import */ var _modules_card_goodshare__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_modules_card_goodshare__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _modules_card_card_roll_up__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! %modules%/card/card-roll-up */ "./src/blocks/modules/card/card-roll-up.js");
/* harmony import */ var _modules_card_card_roll_up__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_modules_card_card_roll_up__WEBPACK_IMPORTED_MODULE_25__);



























/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");



/***/ })

/******/ });
//# sourceMappingURL=main.js.map