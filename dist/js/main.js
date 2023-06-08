/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const calc = () => {

};

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./src/js/modules/popup.js":
/*!*********************************!*\
  !*** ./src/js/modules/popup.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const popup = () => {
	const popupLinks =document.querySelectorAll('.popup-link');
	const body = document.querySelector('body');
	const lockPadding = document.querySelectorAll('.lock-padding'); //Для объектов, которые спозиционированы абсолютно, чтобы они не смещались при открытие попапа

	let unlock = true;

	const timeout = 300; //Та же цифра, которая указана в transition для класса popup

	if(popupLinks.length > 0) {
		for (let index = 0; index < popupLinks.length; index++) {
			const popuplink = popupLinks[index];
			popuplink.addEventListener("click", function (e) {
				const popupName = popuplink.getAttribute('href').replace('#', '');
				const currentPopup = document.getElementById(popupName);
				popupOpen(currentPopup);
				e.preventDefault();
			});
		}
	}

	const popupCloseIcon =document.querySelectorAll('.close-popup');
	if (popupCloseIcon.length > 0) {
		for (let index = 0; index < popupCloseIcon.length; index++) {
			const el = popupCloseIcon[index];
			el.addEventListener("click", function (e) {
				popupClose(el.closest('.popup'));
				e.preventDefault();
			});
		}
	}

	function popupOpen(currentPopup) {
		if (currentPopup && unlock) {
			const popupActive = document.querySelector('.popup.open');
			if (popupActive) {
				popupClose(popupActive, false);
			} else {
				bodyLock();
			}
			currentPopup.classList.add('open');
			currentPopup.addEventListener("click", function (e) {
				if (!e.target.closest('.popup__content')) {
					popupClose(e.target.closest('.popup'));
				}
			});
		}
	}

	function popupClose(popupActive, doUnlock = true) {
		if (unlock) {
			popupActive.classList.remove('open');
			if (doUnlock) {
				bodyUnlock();
			}
		}
	}

	function bodyLock() {
		const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + "px";

		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPaddingValue.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = lockPaddingValue;
			}
		}

		body.style.paddingRight = lockPaddingValue;
		body.classList.add('lock');

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, timeout);

	}

	function bodyUnlock() {
		setTimeout(function () {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = "0px";
			}
			body.style.paddingRight = "0px";
			body.classList.remove('lock');
		}, timeout);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, timeout);
	}

	document.addEventListener('keydown', function(e) {
		if (e.which === 27) {
			const popupActive = document.querySelector('.popup.open');
			popupClose(popupActive);
		}
	});
};

/* harmony default export */ __webpack_exports__["default"] = (popup);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
	const header = document.querySelector(headerSelector),
		tab = document.querySelectorAll(tabSelector),
		content = document.querySelectorAll(contentSelector);

	function hideTabContent() {
		content.forEach((item) => {
			item.style.display = 'none';
		});

		tab.forEach(item => {
			item.classList.remove(activeClass);
		});
	}

	function showTabContent(i = 0) {
		content[i].style.display = display;
		content[i].classList.add(activeClass);
		tab[i].classList.add(activeClass);
	}

	hideTabContent();
	showTabContent();

	header.addEventListener('click', (e) => {
		const target = e.target;
		if (target &&
			(target.classList.contains(tabSelector.replace(/\./, "")) ||
				target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
			tab.forEach((item, i) => {
				if (target == item || target.parentNode == item) {
					hideTabContent();
					showTabContent(i);
					// target.classList.add(activeClass.replace(/\./, ""));
				}
			});
		}
	});
}
/* harmony default export */ __webpack_exports__["default"] = (tabs);

// export default tabs;

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popup */ "./src/js/modules/popup.js");
// "use sctrict"





window.addEventListener("DOMContentLoaded", function() {
	(0,_modules_popup__WEBPACK_IMPORTED_MODULE_2__["default"])();
	(0,_modules_calc__WEBPACK_IMPORTED_MODULE_0__["default"])();
	(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_1__["default"])('.tabs', '.tabs__title', '.tabs__body', 'active');
});
}();
/******/ })()
;
//# sourceMappingURL=main.js.map