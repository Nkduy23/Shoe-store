/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/countdown.js":
/*!*****************************!*\
  !*** ./src/js/countdown.js ***!
  \*****************************/
/***/ (() => {

eval("// Giả sử đây là thời gian kết thúc\nvar saleEndTime = new Date(\"2024-12-15T23:59:59\").getTime();\n\n// Hàm update thời gian\nfunction updateCountdown() {\n  var now = new Date().getTime();\n  var timeLeft = saleEndTime - now;\n  if (timeLeft <= 0) {\n    clearInterval(countdownInterval);\n    document.getElementById(\"countdown__item-time\").textContent = \"Đã Kết Thúc Sale!\";\n    return;\n  }\n\n  // Tính toán thời gian\n  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));\n  var hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n  var minutes = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60));\n  var seconds = Math.floor(timeLeft % (1000 * 60) / 1000);\n\n  // Chọn tất cả các <span> theo class\n  var countdownUnits = document.querySelectorAll(\"#countdown__item-time .countdown-unit\");\n\n  // Cập nhật nội dung từng <span>\n  countdownUnits[0].textContent = days.toString().padStart(2, \"0\"); // Ngày\n  countdownUnits[1].textContent = hours.toString().padStart(2, \"0\"); // Giờ\n  countdownUnits[2].textContent = minutes.toString().padStart(2, \"0\"); // Phút\n  countdownUnits[3].textContent = seconds.toString().padStart(2, \"0\"); // Giây\n}\n\n// Gọi hàm đếm ngược mỗi giây\nvar countdownInterval = setInterval(updateCountdown, 1000);\n// Gọi ngay lập tức để tránh delay 1 giây đầu tiên\nupdateCountdown();\n\n//# sourceURL=webpack://product-list-app/./src/js/countdown.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _countdown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countdown.js */ \"./src/js/countdown.js\");\n/* harmony import */ var _countdown_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_countdown_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./src/js/main.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nav_mobile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-mobile.js */ \"./src/js/nav-mobile.js\");\n/* harmony import */ var _nav_mobile_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nav_mobile_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider.js */ \"./src/js/slider.js\");\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_slider_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sass/main.scss */ \"./sass/main.scss\");\n// Import các file JS\n\n\n\n\n\n// Import SCSS\n\n\n// (Tùy chọn) Thêm các đoạn mã khởi tạo nếu cần\nconsole.log('All scripts loaded successfully!');\n\n//# sourceURL=webpack://product-list-app/./src/js/index.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("// public/js/main.js\nwindow.onload = function () {\n  var productTemplateSource = document.getElementById(\"product-template\").innerHTML;\n  var productTemplate = Handlebars.compile(productTemplateSource);\n  fetch('/api/products').then(function (response) {\n    return response.json();\n  }).then(function (products) {\n    var html = productTemplate({\n      products: products\n    });\n    document.getElementById(\"product-list\").innerHTML = html;\n  })[\"catch\"](function (error) {\n    return console.error('Error loading products:', error);\n  });\n};\n\n//# sourceURL=webpack://product-list-app/./src/js/main.js?");

/***/ }),

/***/ "./src/js/nav-mobile.js":
/*!******************************!*\
  !*** ./src/js/nav-mobile.js ***!
  \******************************/
/***/ (() => {

eval("document.querySelectorAll(\".menu__item\").forEach(function (item) {\n  item.addEventListener(\"click\", function () {\n    var checkboxId = this.dataset.checkbox;\n    var checkbox = document.getElementById(checkboxId);\n    checkbox.checked = !checkbox.checked;\n    var url = this.dataset.url;\n    if (checkbox) {\n      checkbox.checked = true;\n    }\n    window.location.href = url;\n  });\n});\n\n//# sourceURL=webpack://product-list-app/./src/js/nav-mobile.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  initImageUpdate();\n  initSlider();\n});\n\n// Hàm xử lú logic đổi ảnh\nfunction initImageUpdate() {\n  var images = document.querySelectorAll(\".slider__img\");\n  function updateImageSources() {\n    images.forEach(function (img) {\n      var largeSrc = img.getAttribute(\"data-large\");\n      var smallSrc = img.getAttribute(\"data-small\");\n      var currentSrc = img.getAttribute(\"src\");\n      if (window.innerWidth <= 768 && currentSrc !== smallSrc) {\n        img.setAttribute(\"src\", smallSrc);\n      } else if (window.innerWidth > 768 && currentSrc !== largeSrc) {\n        img.setAttribute(\"src\", largeSrc);\n      }\n    });\n  }\n  updateImageSources();\n  window.addEventListener(\"resize\", updateImageSources);\n}\n\n// Hàm thêm tính năng chuyển ảnh và tự động chuyển ảnh\nfunction initSlider() {\n  var slider = document.querySelector(\".slider__wrap\");\n  var slides = document.querySelectorAll(\".slider__img\");\n  var nextButton = document.querySelector(\".next\");\n  var prevButton = document.querySelector(\".prev\");\n  var currentIndex = 0;\n  var autoSlideInterval;\n  var startX = 0;\n  var isDragging = false;\n  var currentX = 0;\n\n  // Cập nhật vị trí slider\n  function updateSliderPosition() {\n    var transition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n    slider.style.transition = transition ? \"transform 0.3s ease\" : \"none\";\n    slider.style.transform = \"translateX(-\".concat(currentIndex * 100, \"%)\");\n  }\n\n  // Chuyển đến slide tiếp theo\n  function changeSlide(direction) {\n    clearInterval(autoSlideInterval);\n    if (direction === \"next\") {\n      currentIndex++;\n      if (currentIndex >= slides.length) {\n        currentIndex = 0;\n        updateSliderPosition(false); // Nhảy ngay về slide đầu tiên\n      }\n    } else if (direction === \"prev\") {\n      currentIndex--;\n      if (currentIndex < 0) {\n        currentIndex = slides.length - 1;\n        updateSliderPosition(false); // Nhảy ngay về slide cuối cùng\n      }\n    }\n    setTimeout(function () {\n      updateSliderPosition();\n    }, 20);\n    startAutoPlay();\n  }\n\n  // Hàm tự động chạy\n  function startAutoPlay() {\n    clearInterval(autoSlideInterval);\n    autoSlideInterval = setInterval(function () {\n      currentIndex++;\n      if (currentIndex >= slides.length) {\n        currentIndex = 0;\n        updateSliderPosition(false); // Nhảy ngay về slide đầu tiên\n      }\n      setTimeout(function () {\n        updateSliderPosition();\n      }, 20);\n    }, 3000);\n  }\n\n  // Lắng nghe sự kiện khi bắt đầu kéo (chuột và cảm ứng)\n  var startEvent = function startEvent(e) {\n    startX = e.touches ? e.touches[0].clientX : e.clientX;\n    isDragging = true;\n    slider.style.transition = \"none\";\n  };\n\n  //  Lắng nghe sự kiện kéo chuột hoặc cảm ứng\n  var moveEvent = function moveEvent(e) {\n    if (!isDragging) return;\n    currentX = (e.touches ? e.touches[0].clientX : e.clientX) - startX;\n    slider.style.transform = \"translateX(calc(\".concat(-currentIndex * 100, \"% + \").concat(currentX, \"px))\");\n  };\n\n  // Lắng nghe sự kiện thả chuột hoặc kết thúc chạm\n  var endEvent = function endEvent() {\n    isDragging = false;\n    if (Math.abs(currentX) > 100) {\n      if (currentX < 0) {\n        currentIndex++;\n      } else {\n        currentIndex--;\n      }\n    }\n    // Đảm bảo currentIndex trong phạm vi hợp lệ\n    if (currentIndex < 0) {\n      currentIndex = slides.length - 1;\n    } else if (currentIndex >= slides.length) {\n      currentIndex = 0;\n    }\n    setTimeout(function () {\n      updateSliderPosition();\n    }, 200);\n    startAutoPlay();\n  };\n\n  // Lắng nghe sự kiện cảm ứng và chuột\n  slider.addEventListener(\"mousedown\", startEvent);\n  slider.addEventListener(\"mousemove\", moveEvent);\n  slider.addEventListener(\"mouseup\", endEvent);\n  slider.addEventListener(\"mouseleave\", endEvent);\n\n  // Các sự kiện cảm ứng cho thiết bị di động\n  slider.addEventListener(\"touchstart\", startEvent);\n  slider.addEventListener(\"touchmove\", moveEvent);\n  slider.addEventListener(\"touchend\", endEvent);\n\n  // Gắn sự kiện cho nút next và prev\n  nextButton.addEventListener(\"click\", function () {\n    return changeSlide(\"next\");\n  });\n  prevButton.addEventListener(\"click\", function () {\n    return changeSlide(\"prev\");\n  });\n\n  // Khởi chạy autoplay\n  startAutoPlay();\n}\n\n// Còn ở trên điện thoại không lướt cảm ứng liên tục được, \n// Nên thêm tính năng chạm dừng khi người dùng chạm dừng lại để xem ảnh\n\n//# sourceURL=webpack://product-list-app/./src/js/slider.js?");

/***/ }),

/***/ "./sass/main.scss":
/*!************************!*\
  !*** ./sass/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://product-list-app/./sass/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;