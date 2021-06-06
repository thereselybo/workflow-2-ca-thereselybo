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

/***/ "./src/js/components/marsCountdown/index.ts":
/*!**************************************************!*\
  !*** ./src/js/components/marsCountdown/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updateTimer)\n/* harmony export */ });\nfunction updateTimer() {\n    const deadline = new Date(\"2025-01-01\").getTime();\n    const today = new Date().getTime();\n    const timeLeft = deadline - today;\n    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)).toString();\n    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();\n    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)).toString();\n    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000).toString();\n    const daysDisplayed = document.querySelector(\"#days\");\n    daysDisplayed.innerText = days;\n    const hoursDisplayed = document.querySelector(\"#hours\");\n    hoursDisplayed.innerText = hours;\n    const minsDisplayed = document.querySelector(\"#minutes\");\n    minsDisplayed.innerText = minutes;\n    const secsDisplayed = document.querySelector(\"#seconds\");\n    secsDisplayed.innerText = seconds;\n    const minText = document.querySelector(\"#minutes-text\");\n    const secText = document.querySelector(\"#seconds-text\");\n    if (window.matchMedia(\"(max-width: 639px)\").matches) {\n        minText.innerText = \"Mins\";\n        secText.innerText = \"Secs\";\n    }\n    else {\n        minText.innerText = \"Minutes\";\n        secText.innerText = \"Seconds\";\n    }\n    let success = false;\n    if (timeLeft === 0) {\n        clearInterval(countdownToManOnMars);\n        const countdownCopy = document.querySelector(\".countdown p\");\n        if (success) {\n            countdownCopy.innerText += ` He has now succeeded. Huzzah`;\n        }\n        else {\n            countdownCopy.innerText += ` He has now failed. Damn it Elon`;\n        }\n    }\n}\nconst countdownToManOnMars = setInterval(updateTimer, 1000);\n\n\n//# sourceURL=webpack://spacex/./src/js/components/marsCountdown/index.ts?");

/***/ }),

/***/ "./src/js/components/weather/index.ts":
/*!********************************************!*\
  !*** ./src/js/components/weather/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handleWeather)\n/* harmony export */ });\nfunction handleWeather() {\n    fetch(\"https://api.nasa.gov/insight_weather/?api_key=yqhLhEsvHwxQuxrqhhAgVRGLkZUtZP4E7Zkbir3k&feedtype=json&ver=1.0\")\n        .then(function (response) {\n        return response.json();\n    })\n        .then(function (data) {\n        displayWeather(data);\n    })\n        .catch(function (error) {\n        console.log(error);\n    });\n}\n// WORK IN PROGRESS TO GET RID OF WEATHER: ANY\n// interface Weather {\n//   [index: string]: Sol;\n//   sol_keys?: string,\n//   // solIndex: {\n//   //   [sol: string]: {\n//   //     First_UTC: string,\n//   //   };\n//   // };\n// }\n// interface Sol {\n//   First_UTC: string,\n//   PRE: {\n//     mn: number,\n//     mx: number,\n//   }\n// }\nfunction displayWeather(weather) {\n    console.log(weather);\n    const allSols = weather.sol_keys;\n    const numberOfSols = allSols.length;\n    const weatherSection = document.querySelector(\".weather-section\");\n    if (!allSols.length) {\n        weatherSection.style.display = \"none\";\n        return;\n    }\n    const mostRecentContainer = document.querySelector(\"#most-recent-report\");\n    const moreReportsContainer = document.querySelector(\"#more-reports\");\n    let sol;\n    let fullDate;\n    let numberedMonth;\n    let month = \"\";\n    let date;\n    let highTemp;\n    let lowTemp;\n    for (let i = numberOfSols - 1; i >= 0; i--) {\n        sol = allSols[i];\n        const currentSolData = weather[sol];\n        fullDate = currentSolData.First_UTC;\n        numberedMonth = fullDate.substring(5, 7);\n        switch (numberedMonth) {\n            case \"01\":\n                month = \"Jan\";\n                break;\n            case \"02\":\n                month = \"Feb\";\n                break;\n            case \"03\":\n                month = \"March\";\n                break;\n            case \"04\":\n                month = \"April\";\n                break;\n            case \"05\":\n                month = \"May\";\n                break;\n            case \"06\":\n                month = \"June\";\n                break;\n            case \"07\":\n                month = \"July\";\n                break;\n            case \"08\":\n                month = \"Aug\";\n                break;\n            case \"09\":\n                month = \"Sep\";\n                break;\n            case \"10\":\n                month = \"Oct\";\n                break;\n            case \"11\":\n                month = \"Nov\";\n                break;\n            case \"12\":\n                month = \"Dec\";\n        }\n        date = fullDate.substring(8, 10);\n        (() => {\n            highTemp = currentSolData.PRE.mx.toString();\n            highTemp = highTemp.split(\".\")[0];\n        })();\n        (() => {\n            lowTemp = currentSolData.PRE.mn.toString();\n            lowTemp = lowTemp.split(\".\")[0];\n        })();\n        if (i === numberOfSols - 1) {\n            mostRecentContainer.innerHTML += `\n                <div class=\"mars-date row\">\n                    <span class=\"sol\">Sol ${sol}</span>\n                    <span>${month} ${date}</span>\n                </div>\n                <div class=\"mars-temp row\">\n                    <span>High: ${highTemp} &#8451</span>\n                    <span>Low: ${lowTemp} &#8451</span>\n                </div>`;\n        }\n        else {\n            moreReportsContainer.innerHTML += `\n                <div class=\"report-div row\">\n                    <div class=\"mars-date\">\n                        <span class=\"sol\">Sol ${sol}</span>\n                        <span>${month} ${date}</span>\n                    </div>\n                    <div class=\"mars-temp\">\n                        <span>High: ${highTemp} &#8451</span>\n                        <span>Low: ${lowTemp} &#8451</span>\n                    </div>\n                </div>`;\n        }\n    }\n}\n\n\n//# sourceURL=webpack://spacex/./src/js/components/weather/index.ts?");

/***/ }),

/***/ "./src/js/mars.ts":
/*!************************!*\
  !*** ./src/js/mars.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_common_navigation_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/common/navigation/index */ \"./src/js/components/common/navigation/index.ts\");\n/* harmony import */ var _components_common_loadingSpinner_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/common/loadingSpinner/index */ \"./src/js/components/common/loadingSpinner/index.ts\");\n/* harmony import */ var _components_marsCountdown_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/marsCountdown/index */ \"./src/js/components/marsCountdown/index.ts\");\n/* harmony import */ var _components_weather_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/weather/index */ \"./src/js/components/weather/index.ts\");\n\n\n\n\n(0,_components_common_navigation_index__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_components_common_loadingSpinner_index__WEBPACK_IMPORTED_MODULE_1__.default)();\nconst countdownToManOnMars = setInterval(_components_marsCountdown_index__WEBPACK_IMPORTED_MODULE_2__.default, 1000);\n(0,_components_weather_index__WEBPACK_IMPORTED_MODULE_3__.default)();\n\n\n//# sourceURL=webpack://spacex/./src/js/mars.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/mars.ts");
/******/ 	
/******/ })()
;