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

/***/ "./src/js/components/missionCountdown/index.ts":
/*!*****************************************************!*\
  !*** ./src/js/components/missionCountdown/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handleLaunch)\n/* harmony export */ });\n// export default function handleCountdown(): void {\n//   getLaunches();\n//   updateTimeLeft();\n//   setInterval(updateTimeLeft, 1000);\n// }\nlet deadline;\nfunction handleLaunch() {\n    fetch(\"https://api.spacexdata.com/v3/launches/next\")\n        .then(function (response) {\n        return response.json();\n    })\n        .then(function (data) {\n        getDeadline(data);\n        // updateTimeLeft();\n        setInterval(updateTimeLeft, 1000);\n    })\n        .catch(function (error) {\n        console.log(error);\n    });\n}\nfunction getDeadline(nextLaunch) {\n    deadline = new Date(Date.parse(nextLaunch.launch_date_local)).getTime(); // deadline.launch_date_local\n    updateTimeLeft();\n}\nfunction updateTimeLeft() {\n    const today = new Date().getTime();\n    const timeLeft = deadline - today;\n    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)).toString();\n    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();\n    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)).toString();\n    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000).toString();\n    const daysDisplayed = document.querySelector(\"#days\");\n    daysDisplayed.innerText = days;\n    const hoursDisplayed = document.querySelector(\"#hours\");\n    hoursDisplayed.innerText = hours;\n    const minsDisplayed = document.querySelector(\"#minutes\");\n    minsDisplayed.innerText = minutes;\n    const secsDisplayed = document.querySelector(\"#seconds\");\n    secsDisplayed.innerText = seconds;\n    const minText = document.querySelector(\"#minutes-text\");\n    const secText = document.querySelector(\"#seconds-text\");\n    if (window.matchMedia(\"(max-width: 639px)\").matches) {\n        minText.innerText = \"Mins\";\n        secText.innerText = \"Secs\";\n    }\n    else {\n        minText.innerText = \"Minutes\";\n        secText.innerText = \"Seconds\";\n    }\n}\n// setInterval(updateTimeLeft, 1000);\n\n\n//# sourceURL=webpack://spacex/./src/js/components/missionCountdown/index.ts?");

/***/ }),

/***/ "./src/js/components/timeline/index.ts":
/*!*********************************************!*\
  !*** ./src/js/components/timeline/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handleLaunches)\n/* harmony export */ });\nfunction handleLaunches() {\n    fetch(\"https://api.spacexdata.com/v3/launches/past\")\n        .then(function (response) {\n        return response.json();\n    })\n        .then(function (json) {\n        displayLaunch(json);\n        // console.log(json);\n    })\n        .catch(function (error) {\n        console.dir(error);\n    });\n}\nfunction displayLaunch(json) {\n    const results = json.reverse();\n    const container = document.querySelector(\"#previous-missions\");\n    for (let i = 0; i < 20; i++) {\n        const fullLaunchDate = results[i].launch_date_local.toString();\n        const launchDate = fullLaunchDate.substring(0, 10);\n        const missionName = results[i].mission_name;\n        const details = results[i].details;\n        container.innerHTML += `<div class=\"launch rectangle\">\n                                    <span class=\"line\"></span>\n                                    <span class=\"circle\"></span>\n                                    <span class=\"launch-date\">${launchDate}</span>\n                                    <h3 class=\"mission-name\">${missionName}</h3>\n                                    <p class=\"details\">${details}</p>\n                                </div>`;\n    }\n}\n\n\n//# sourceURL=webpack://spacex/./src/js/components/timeline/index.ts?");

/***/ }),

/***/ "./src/js/missions.ts":
/*!****************************!*\
  !*** ./src/js/missions.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_common_navigation_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/common/navigation/index */ \"./src/js/components/common/navigation/index.ts\");\n/* harmony import */ var _components_common_loadingSpinner_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/common/loadingSpinner/index */ \"./src/js/components/common/loadingSpinner/index.ts\");\n/* harmony import */ var _components_missionCountdown_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/missionCountdown/index */ \"./src/js/components/missionCountdown/index.ts\");\n/* harmony import */ var _components_timeline_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/timeline/index */ \"./src/js/components/timeline/index.ts\");\n// <script src=\"./js/navigation.js\"></script>\n// <script src=\"./js/mission-countdown.js\"></script>\n// <script src=\"./js/timeline.js\"></script>\n// <script src=\"./js/loading.js\"></script>\n\n\n\n\n(0,_components_common_navigation_index__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_components_common_loadingSpinner_index__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_components_missionCountdown_index__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_components_timeline_index__WEBPACK_IMPORTED_MODULE_3__.default)();\n\n\n//# sourceURL=webpack://spacex/./src/js/missions.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/missions.ts");
/******/ 	
/******/ })()
;