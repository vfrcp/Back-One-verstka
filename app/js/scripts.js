/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/burger.js":
/*!*************************************!*\
  !*** ./src/js/components/burger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "burger": () => (/* binding */ burger)
/* harmony export */ });
function burger(){
  const burgerTriger = document.querySelector(".burger")
  const burgerMenu = document.querySelector(".burgerMenu")
  const navButtons = document.querySelectorAll("[data-buttonTo]")

  const closeMenu = () => {
    burgerTriger.classList.remove("active")
    burgerMenu.classList.remove("active")
    document.body.style.overflow = "auto"
  }

  const classToggle = () => {
    if(burgerTriger.classList.contains("active") === burgerMenu.classList.contains("active")){
      burgerTriger.classList.toggle("active")
      burgerMenu.classList.toggle("active")
      if(burgerTriger.classList.contains("active")){
        document.body.style.overflow = "hidden"
      }else{
        document.body.style.overflow = "auto"
      }
    }else{
      closeMenu()
    }  
  }

  burgerTriger.addEventListener("click", classToggle)
  navButtons.forEach(btn => {
    btn.addEventListener("click", closeMenu)
  })
}

/***/ }),

/***/ "./src/js/components/scroll.js":
/*!*************************************!*\
  !*** ./src/js/components/scroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scroll": () => (/* binding */ scroll)
/* harmony export */ });
function scroll(){
  const navsMenu = document.querySelectorAll(".menu")
  const homePlace = document.querySelector(".labelSection")
  const portfolioPlace = document.querySelector(".portfolio")
  const aboutPlace = document.querySelector(".aboutUs")
  const contactPlace = document.querySelector(".contactUs") 

  const scrollFunc = (event) => {
    const {target} = event
    switch(target.getAttribute("data-buttonTo")){
      case "home": homePlace.scrollIntoView({behavior: "smooth"})
        break
      case "portfolio": portfolioPlace.scrollIntoView({behavior: "smooth"})
        break
      case "about": aboutPlace.scrollIntoView({behavior: "smooth"})
        break
      case "contact": contactPlace.scrollIntoView({behavior: "smooth"})
    }
  }
  navsMenu.forEach(menu => {
    menu.addEventListener("click", scrollFunc)
  })
}

/***/ }),

/***/ "./src/js/components/sortPortfolio.js":
/*!********************************************!*\
  !*** ./src/js/components/sortPortfolio.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortPortfolio": () => (/* binding */ sortPortfolio)
/* harmony export */ });
function sortPortfolio(){
  const sortBtnsPlace = document.querySelector(".sortButtons")
  const sortBtns = document.querySelectorAll(".sortButton")
  const portfItems = document.querySelectorAll("[data-portfType]")
  
  const sort = (event) => {
    const {target} = event
    const attributeValue = target.getAttribute("data-sortPorf")
    portfItems.forEach(item => {
      switch(attributeValue){
        case "all": item.style.display = "block"
          break
        case item.getAttribute("data-portfType"):  item.style.display = "block"
          break
        default : item.style.display = "none"

      }
    })
    sortBtns.forEach(btn => {
      btn.classList.remove("active")
      if(btn === target){
        target.classList.add("active")
      }
    })
    
  }
  
  sortBtnsPlace.addEventListener("click", sort)
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/burger */ "./src/js/components/burger.js");
/* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/scroll */ "./src/js/components/scroll.js");
/* harmony import */ var _components_sortPortfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sortPortfolio */ "./src/js/components/sortPortfolio.js");




document.addEventListener("DOMContentLoaded", () => {
  (0,_components_burger__WEBPACK_IMPORTED_MODULE_0__.burger)()
  ;(0,_components_scroll__WEBPACK_IMPORTED_MODULE_1__.scroll)()
  ;(0,_components_sortPortfolio__WEBPACK_IMPORTED_MODULE_2__.sortPortfolio)()
})
})();

/******/ })()
;
//# sourceMappingURL=scripts.js.map