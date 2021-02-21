/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/common/loadingSpinner/index.ts":
/*!**********************************************************!*\
  !*** ./src/js/components/common/loadingSpinner/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handleLoadingSpinner)\n/* harmony export */ });\nconst loadingWrapper = document.querySelector(\".loading-wrapper\");\nconst loader = document.querySelector(\".loader\");\nfunction handleLoadingSpinner() {\n    fadeLoader();\n    removeLoader();\n    window.addEventListener(\"load\", function () {\n        setTimeout(fadeLoader, 1000);\n        setTimeout(removeLoader, 1200);\n    });\n}\nfunction fadeLoader() {\n    loadingWrapper.style.opacity = \"0\";\n    loadingWrapper.style.transition = \"all ease-in .2s\";\n    loader.style.opacity = \"0\";\n    loader.style.transition = \"all ease-in .2s\";\n}\nfunction removeLoader() {\n    loadingWrapper.style.display = \"none\";\n    loader.style.display = \"none\";\n}\n\n\n//# sourceURL=webpack://spacex/./src/js/components/common/loadingSpinner/index.ts?");

/***/ }),

/***/ "./src/js/components/common/navigation/index.ts":
/*!******************************************************!*\
  !*** ./src/js/components/common/navigation/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayNav)\n/* harmony export */ });\nfunction displayNav() {\n    const burger = document.querySelector(\".burger\");\n    const nav = document.querySelector(\".mainnav\");\n    burger.addEventListener(\"click\", function () {\n        if (nav.style.display === \"none\") {\n            nav.style.display = \"block\";\n        }\n        else {\n            nav.style.display = \"none\";\n        }\n    });\n}\n\n\n//# sourceURL=webpack://spacex/./src/js/components/common/navigation/index.ts?");

/***/ }),

/***/ "./src/js/components/contactForm/index.ts":
/*!************************************************!*\
  !*** ./src/js/components/contactForm/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handleContactForm)\n/* harmony export */ });\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index */ \"./src/js/utils/index.ts\");\n\nfunction handleContactForm() {\n    const contactForm = document.querySelector(\"#contactForm\");\n    contactForm.addEventListener(\"submit\", validateContactForm);\n}\nfunction validateContactForm(event) {\n    event.preventDefault();\n    const firstName = document.querySelector(\"#firstName\");\n    const firstNameError = document.querySelector(\"#firstNameError\");\n    const firstNameValue = firstName.value;\n    if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.checkInputLength)(firstNameValue)) {\n        firstNameError.style.display = \"none\";\n    }\n    else {\n        firstNameError.style.display = \"block\";\n    }\n    const lastName = document.querySelector(\"#lastName\");\n    const lastNameError = document.querySelector(\"#lastNameError\");\n    const lastNameValue = lastName.value;\n    if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.checkInputLength)(lastNameValue)) {\n        lastNameError.style.display = \"none\";\n    }\n    else {\n        lastNameError.style.display = \"block\";\n    }\n    const email = document.querySelector(\"#email\");\n    const noEmailError = document.querySelector(\"#noEmailError\");\n    const invalidEmailError = document.querySelector(\"#invalidEmailError\");\n    const emailValue = email.value;\n    if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.checkInputLength)(emailValue)) {\n        noEmailError.style.display = \"none\";\n        if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.validateEmailValue)(emailValue)) {\n            invalidEmailError.style.display = \"none\";\n        }\n        else {\n            invalidEmailError.style.display = \"block\";\n        }\n    }\n    else {\n        noEmailError.style.display = \"block\";\n    }\n    const message = document.querySelector(\"#message\");\n    const messageError = document.querySelector(\"#messageError\");\n    const messageValue = message.value;\n    if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.checkInputLength)(messageValue)) {\n        messageError.style.display = \"none\";\n    }\n    else {\n        messageError.style.display = \"block\";\n    }\n    const formValidated = document.querySelector(\"#formValidated\");\n    if (firstNameError.style.display === \"none\" &&\n        lastNameError.style.display === \"none\" &&\n        noEmailError.style.display === \"none\" &&\n        invalidEmailError.style.display === \"none\" &&\n        messageError.style.display === \"none\") {\n        formValidated.style.display = \"block\";\n    }\n    else {\n        formValidated.style.display = \"none\";\n    }\n}\n// export function checkInputLength(value: string): boolean {\n//   const trimmed = value.trim();\n//   if (trimmed) {\n//     return true;\n//   } else {\n//     return false;\n//   }\n// }\n// export function validateEmailValue(email: string): boolean {\n//   //double check\n//   const regEx = /\\S+@\\S+\\.\\S+/;\n//   return regEx.test(email);\n// }\n\n\n//# sourceURL=webpack://spacex/./src/js/components/contactForm/index.ts?");

/***/ }),

/***/ "./src/js/contact.ts":
/*!***************************!*\
  !*** ./src/js/contact.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_common_navigation_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/common/navigation/index */ \"./src/js/components/common/navigation/index.ts\");\n/* harmony import */ var _components_common_loadingSpinner_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/common/loadingSpinner/index */ \"./src/js/components/common/loadingSpinner/index.ts\");\n/* harmony import */ var _components_contactForm_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/contactForm/index */ \"./src/js/components/contactForm/index.ts\");\n\n\n\n(0,_components_common_navigation_index__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_components_common_loadingSpinner_index__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_components_contactForm_index__WEBPACK_IMPORTED_MODULE_2__.default)();\n\n\n//# sourceURL=webpack://spacex/./src/js/contact.ts?");

/***/ }),

/***/ "./src/js/utils/index.ts":
/*!*******************************!*\
  !*** ./src/js/utils/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkInputLength\": () => (/* binding */ checkInputLength),\n/* harmony export */   \"validateEmailValue\": () => (/* binding */ validateEmailValue)\n/* harmony export */ });\nfunction checkInputLength(value) {\n    const trimmed = value.trim();\n    if (trimmed) {\n        return true;\n    }\n    else {\n        return false;\n    }\n}\nfunction validateEmailValue(email) {\n    //double check\n    const regEx = /\\S+@\\S+\\.\\S+/;\n    return regEx.test(email);\n}\n\n\n//# sourceURL=webpack://spacex/./src/js/utils/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/contact.ts");
/******/ 	
/******/ })()
;