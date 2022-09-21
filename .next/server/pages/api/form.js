"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/form";
exports.ids = ["pages/api/form"];
exports.modules = {

/***/ "(api)/./src/pages/api/form.js":
/*!*******************************!*\
  !*** ./src/pages/api/form.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ form)\n/* harmony export */ });\nconst circuitElements = [];\nfunction form(req, res) {\n    if (req.method === \"POST\") {\n        post(req, res);\n    } else if (req.method === \"GET\") {\n        get(req, res);\n    } else {\n        res.status(405).send();\n    }\n};\nfunction post(req, res) {\n    const circuitElement = JSON.parse(req.body);\n    circuitElements.push(circuitElement);\n    res.status(200).send();\n}\nfunction get(req, res) {\n    res.status(200).json(circuitElements);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2Zvcm0uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLGVBQWUsR0FBRyxFQUFFO0FBRVgsU0FBU0MsSUFBSSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUVyQyxJQUFHRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUM7UUFDdkJDLElBQUksQ0FBQ0gsR0FBRyxFQUFFQyxHQUFHLENBQUM7S0FDZixNQUFLLElBQUdELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFBQztRQUU1QkUsR0FBRyxDQUFDSixHQUFHLEVBQUVDLEdBQUcsQ0FBQztLQUNkLE1BQUk7UUFDSEEsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksRUFBRTtLQUN2QjtDQUVGO0FBRUQsU0FBU0gsSUFBSSxDQUFDSCxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUV0QixNQUFNTSxjQUFjLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDVCxHQUFHLENBQUNVLElBQUksQ0FBQztJQUMzQ1osZUFBZSxDQUFDYSxJQUFJLENBQUNKLGNBQWMsQ0FBQztJQUNwQ04sR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksRUFBRTtDQUVyQjtBQUVILFNBQVNGLEdBQUcsQ0FBQ0osR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFckJBLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDTyxJQUFJLENBQUNkLGVBQWUsQ0FBQztDQUV0QyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbGN1bG9fcXVlZGFfdGVuc2FvLy4vc3JjL3BhZ2VzL2FwaS9mb3JtLmpzP2E0NWQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2lyY3VpdEVsZW1lbnRzID0gW11cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm0ocmVxLCByZXMpIHtcclxuXHJcbiAgaWYocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKXtcclxuICAgIHBvc3QocmVxLCByZXMpXHJcbiAgfWVsc2UgaWYocmVxLm1ldGhvZCA9PT0gJ0dFVCcpe1xyXG4gIFxyXG4gICAgZ2V0KHJlcSwgcmVzKVxyXG4gIH1lbHNle1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLnNlbmQoKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvc3QocmVxLCByZXMpIHtcclxuICBcclxuICBjb25zdCBjaXJjdWl0RWxlbWVudCA9IEpTT04ucGFyc2UocmVxLmJvZHkpXHJcbiAgY2lyY3VpdEVsZW1lbnRzLnB1c2goY2lyY3VpdEVsZW1lbnQpXHJcbiAgcmVzLnN0YXR1cygyMDApLnNlbmQoKVxyXG5cclxuICB9XHJcblxyXG5mdW5jdGlvbiBnZXQocmVxLCByZXMpIHtcclxuXHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oY2lyY3VpdEVsZW1lbnRzKVxyXG5cclxufVxyXG4iXSwibmFtZXMiOlsiY2lyY3VpdEVsZW1lbnRzIiwiZm9ybSIsInJlcSIsInJlcyIsIm1ldGhvZCIsInBvc3QiLCJnZXQiLCJzdGF0dXMiLCJzZW5kIiwiY2lyY3VpdEVsZW1lbnQiLCJKU09OIiwicGFyc2UiLCJib2R5IiwicHVzaCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/form.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/form.js"));
module.exports = __webpack_exports__;

})();