"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./src/styles/globals.css":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./src/styles/globals.css ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\n@import url(\\\"https://fonts.googleapis.com/css?family=Saira+Semi+Condensed&display=swap\\\");\\r\\n\\r\\nhtml,\\r\\nbody {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\\r\\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\r\\n}\\r\\n\\r\\na {\\r\\n  color: inherit;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n* {\\r\\n  box-sizing: border-box;\\r\\n  font-family: \\\"Saira Semi Condensed\\\", sans-serif;\\r\\n  transition: all 0.5s ease;\\r\\n}\\r\\n\\r\\n@media (prefers-color-scheme: dark) {\\r\\n  html {\\r\\n    color-scheme: dark;\\r\\n  }\\r\\n  body {\\r\\n    color: #000;\\r\\n    background: #dfdfdf;\\r\\n  }\\r\\n}\\r\\n\\r\\nbody, h1 {\\r\\n  color : #27da7b;\\r\\n}\\r\\n\\r\\nbody, span {\\r\\n  color : #000;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.styleInputs {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 8px;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.styleInputs .InputWithUnit {\\r\\n  flex-flow: row nowrap;\\r\\n}\\r\\n\\r\\n\\r\\n.container {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  padding: 0 16px;\\r\\n  display: flex;\\r\\n  flex-flow: row nowrap;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\nform {\\r\\n  width: 400px;\\r\\n  display: flex;\\r\\n  flex-flow: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\nform div, form label, form textarea {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n\\r\\n.field:nth-of-type(1) {\\r\\n  margin: 2rem ;\\r\\n}\\r\\n\\r\\nlabel, input, textarea {\\r\\n  padding: 8px;\\r\\n  margin: 0.7rem 0rem ;\\r\\n}\\r\\n\\r\\nlabel, [placeholder] {\\r\\n  color: #555;\\r\\n}\\r\\n\\r\\nlabel i {\\r\\n  margin: 0 10px 0 0;\\r\\n}\\r\\n\\r\\n.field:focus-within label {\\r\\n  color: #000;\\r\\n  letter-spacing: 2px;\\r\\n}\\r\\n\\r\\ninput, textarea {\\r\\n  background: rgba(255, 255, 255, 0.5);\\r\\n  border: none;\\r\\n  border-radius: 4px;\\r\\n  box-shadow: 0 8px 6px -6px #555;\\r\\n}\\r\\ninput:focus, textarea:focus {\\r\\n  background: white;\\r\\n  box-shadow: none;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  resize: none;\\r\\n}\\r\\ntextarea::-webkit-scrollbar {\\r\\n  width: 0;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  background: #27da7b;\\r\\n  margin: 16px 0 50px 0;\\r\\n  padding: 8px 16px;\\r\\n  color: #fff;\\r\\n  border: none;\\r\\n  border-radius: 4px;\\r\\n  cursor: pointer;\\r\\n  box-shadow: 0 8px 6px -6px #555;\\r\\n}\\r\\nbutton:hover {\\r\\n  letter-spacing: 2px;\\r\\n  box-shadow: none;\\r\\n}\\r\\n\\r\\n\\r\\n@media (max-width: 425px) {\\r\\n  form {\\r\\n    width: 100%;\\r\\n  }\\r\\n}\\r\\n\\r\\n.cabecario {\\r\\n  background-color: #000;\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.css\"],\"names\":[],\"mappings\":\";AACA,wFAAwF;;AAExF;;EAEE,UAAU;EACV,SAAS;EACT;wEACsE;AACxE;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;EACtB,+CAA+C;EAC/C,yBAAyB;AAC3B;;AAEA;EACE;IACE,kBAAkB;EACpB;EACA;IACE,WAAW;IACX,mBAAmB;EACrB;AACF;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;;;AAIA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;;AAGA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,WAAW;AACb;;;AAGA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,kBAAkB;EAClB,+BAA+B;AACjC;AACA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;AACA;EACE,QAAQ;AACV;;AAEA;EACE,mBAAmB;EACnB,qBAAqB;EACrB,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,+BAA+B;AACjC;AACA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;;AAGA;EACE;IACE,WAAW;EACb;AACF;;AAEA;EACE,sBAAsB;AACxB\",\"sourcesContent\":[\"\\r\\n@import url(\\\"https://fonts.googleapis.com/css?family=Saira+Semi+Condensed&display=swap\\\");\\r\\n\\r\\nhtml,\\r\\nbody {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\\r\\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\r\\n}\\r\\n\\r\\na {\\r\\n  color: inherit;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n* {\\r\\n  box-sizing: border-box;\\r\\n  font-family: \\\"Saira Semi Condensed\\\", sans-serif;\\r\\n  transition: all 0.5s ease;\\r\\n}\\r\\n\\r\\n@media (prefers-color-scheme: dark) {\\r\\n  html {\\r\\n    color-scheme: dark;\\r\\n  }\\r\\n  body {\\r\\n    color: #000;\\r\\n    background: #dfdfdf;\\r\\n  }\\r\\n}\\r\\n\\r\\nbody, h1 {\\r\\n  color : #27da7b;\\r\\n}\\r\\n\\r\\nbody, span {\\r\\n  color : #000;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.styleInputs {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 8px;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.styleInputs .InputWithUnit {\\r\\n  flex-flow: row nowrap;\\r\\n}\\r\\n\\r\\n\\r\\n.container {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  padding: 0 16px;\\r\\n  display: flex;\\r\\n  flex-flow: row nowrap;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\nform {\\r\\n  width: 400px;\\r\\n  display: flex;\\r\\n  flex-flow: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\nform div, form label, form textarea {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n\\r\\n.field:nth-of-type(1) {\\r\\n  margin: 2rem ;\\r\\n}\\r\\n\\r\\nlabel, input, textarea {\\r\\n  padding: 8px;\\r\\n  margin: 0.7rem 0rem ;\\r\\n}\\r\\n\\r\\nlabel, [placeholder] {\\r\\n  color: #555;\\r\\n}\\r\\n\\r\\nlabel i {\\r\\n  margin: 0 10px 0 0;\\r\\n}\\r\\n\\r\\n.field:focus-within label {\\r\\n  color: #000;\\r\\n  letter-spacing: 2px;\\r\\n}\\r\\n\\r\\ninput, textarea {\\r\\n  background: rgba(255, 255, 255, 0.5);\\r\\n  border: none;\\r\\n  border-radius: 4px;\\r\\n  box-shadow: 0 8px 6px -6px #555;\\r\\n}\\r\\ninput:focus, textarea:focus {\\r\\n  background: white;\\r\\n  box-shadow: none;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  resize: none;\\r\\n}\\r\\ntextarea::-webkit-scrollbar {\\r\\n  width: 0;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  background: #27da7b;\\r\\n  margin: 16px 0 50px 0;\\r\\n  padding: 8px 16px;\\r\\n  color: #fff;\\r\\n  border: none;\\r\\n  border-radius: 4px;\\r\\n  cursor: pointer;\\r\\n  box-shadow: 0 8px 6px -6px #555;\\r\\n}\\r\\nbutton:hover {\\r\\n  letter-spacing: 2px;\\r\\n  box-shadow: none;\\r\\n}\\r\\n\\r\\n\\r\\n@media (max-width: 425px) {\\r\\n  form {\\r\\n    width: 100%;\\r\\n  }\\r\\n}\\r\\n\\r\\n.cabecario {\\r\\n  background-color: #000;\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUMySDtBQUMzSCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EseUlBQXlJLHVCQUF1QixpQkFBaUIsZ0JBQWdCLDRKQUE0SixLQUFLLFdBQVcscUJBQXFCLDRCQUE0QixLQUFLLFdBQVcsNkJBQTZCLHdEQUF3RCxnQ0FBZ0MsS0FBSyw2Q0FBNkMsWUFBWSwyQkFBMkIsT0FBTyxZQUFZLG9CQUFvQiw0QkFBNEIsT0FBTyxLQUFLLGtCQUFrQixzQkFBc0IsS0FBSyxvQkFBb0IsbUJBQW1CLEtBQUssOEJBQThCLG9CQUFvQiw2QkFBNkIsZUFBZSwwQkFBMEIsS0FBSyxxQ0FBcUMsNEJBQTRCLEtBQUssd0JBQXdCLGtCQUFrQixtQkFBbUIsc0JBQXNCLG9CQUFvQiw0QkFBNEIsMEJBQTBCLDhCQUE4QixLQUFLLGNBQWMsbUJBQW1CLG9CQUFvQix3QkFBd0IsMEJBQTBCLDhCQUE4QixLQUFLLHlDQUF5QyxrQkFBa0IsS0FBSyxtQ0FBbUMsb0JBQW9CLEtBQUssZ0NBQWdDLG1CQUFtQiwyQkFBMkIsS0FBSyw4QkFBOEIsa0JBQWtCLEtBQUssaUJBQWlCLHlCQUF5QixLQUFLLG1DQUFtQyxrQkFBa0IsMEJBQTBCLEtBQUsseUJBQXlCLDJDQUEyQyxtQkFBbUIseUJBQXlCLHNDQUFzQyxLQUFLLGlDQUFpQyx3QkFBd0IsdUJBQXVCLEtBQUssa0JBQWtCLG1CQUFtQixLQUFLLGlDQUFpQyxlQUFlLEtBQUssZ0JBQWdCLDBCQUEwQiw0QkFBNEIsd0JBQXdCLGtCQUFrQixtQkFBbUIseUJBQXlCLHNCQUFzQixzQ0FBc0MsS0FBSyxrQkFBa0IsMEJBQTBCLHVCQUF1QixLQUFLLHVDQUF1QyxZQUFZLG9CQUFvQixPQUFPLEtBQUssb0JBQW9CLDZCQUE2QixLQUFLLFdBQVcsbUZBQW1GLGFBQWEsT0FBTyxVQUFVLFVBQVUsS0FBSyxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSx5SEFBeUgsdUJBQXVCLGlCQUFpQixnQkFBZ0IsNEpBQTRKLEtBQUssV0FBVyxxQkFBcUIsNEJBQTRCLEtBQUssV0FBVyw2QkFBNkIsd0RBQXdELGdDQUFnQyxLQUFLLDZDQUE2QyxZQUFZLDJCQUEyQixPQUFPLFlBQVksb0JBQW9CLDRCQUE0QixPQUFPLEtBQUssa0JBQWtCLHNCQUFzQixLQUFLLG9CQUFvQixtQkFBbUIsS0FBSyw4QkFBOEIsb0JBQW9CLDZCQUE2QixlQUFlLDBCQUEwQixLQUFLLHFDQUFxQyw0QkFBNEIsS0FBSyx3QkFBd0Isa0JBQWtCLG1CQUFtQixzQkFBc0Isb0JBQW9CLDRCQUE0QiwwQkFBMEIsOEJBQThCLEtBQUssY0FBYyxtQkFBbUIsb0JBQW9CLHdCQUF3QiwwQkFBMEIsOEJBQThCLEtBQUsseUNBQXlDLGtCQUFrQixLQUFLLG1DQUFtQyxvQkFBb0IsS0FBSyxnQ0FBZ0MsbUJBQW1CLDJCQUEyQixLQUFLLDhCQUE4QixrQkFBa0IsS0FBSyxpQkFBaUIseUJBQXlCLEtBQUssbUNBQW1DLGtCQUFrQiwwQkFBMEIsS0FBSyx5QkFBeUIsMkNBQTJDLG1CQUFtQix5QkFBeUIsc0NBQXNDLEtBQUssaUNBQWlDLHdCQUF3Qix1QkFBdUIsS0FBSyxrQkFBa0IsbUJBQW1CLEtBQUssaUNBQWlDLGVBQWUsS0FBSyxnQkFBZ0IsMEJBQTBCLDRCQUE0Qix3QkFBd0Isa0JBQWtCLG1CQUFtQix5QkFBeUIsc0JBQXNCLHNDQUFzQyxLQUFLLGtCQUFrQiwwQkFBMEIsdUJBQXVCLEtBQUssdUNBQXVDLFlBQVksb0JBQW9CLE9BQU8sS0FBSyxvQkFBb0IsNkJBQTZCLEtBQUssdUJBQXVCO0FBQ242TDtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3M/MGYzNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1TYWlyYStTZW1pK0NvbmRlbnNlZCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbixcXHJcXG4gICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2FpcmEgU2VtaSBDb25kZW5zZWRcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcclxcbiAgaHRtbCB7XFxyXFxuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcXHJcXG4gIH1cXHJcXG4gIGJvZHkge1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2RmZGZkZjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuYm9keSwgaDEge1xcclxcbiAgY29sb3IgOiAjMjdkYTdiO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LCBzcGFuIHtcXHJcXG4gIGNvbG9yIDogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnN0eWxlSW5wdXRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3R5bGVJbnB1dHMgLklucHV0V2l0aFVuaXQge1xcclxcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcGFkZGluZzogMCAxNnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbmZvcm0gZGl2LCBmb3JtIGxhYmVsLCBmb3JtIHRleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZmllbGQ6bnRoLW9mLXR5cGUoMSkge1xcclxcbiAgbWFyZ2luOiAycmVtIDtcXHJcXG59XFxyXFxuXFxyXFxubGFiZWwsIGlucHV0LCB0ZXh0YXJlYSB7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBtYXJnaW46IDAuN3JlbSAwcmVtIDtcXHJcXG59XFxyXFxuXFxyXFxubGFiZWwsIFtwbGFjZWhvbGRlcl0ge1xcclxcbiAgY29sb3I6ICM1NTU7XFxyXFxufVxcclxcblxcclxcbmxhYmVsIGkge1xcclxcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmllbGQ6Zm9jdXMtd2l0aGluIGxhYmVsIHtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsIHRleHRhcmVhIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4ICM1NTU7XFxyXFxufVxcclxcbmlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxudGV4dGFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZDogIzI3ZGE3YjtcXHJcXG4gIG1hcmdpbjogMTZweCAwIDUwcHggMDtcXHJcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCAjNTU1O1xcclxcbn1cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xcclxcbiAgZm9ybSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY2FiZWNhcmlvIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQSx3RkFBd0Y7O0FBRXhGOztFQUVFLFVBQVU7RUFDVixTQUFTO0VBQ1Q7d0VBQ3NFO0FBQ3hFOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QiwrQ0FBK0M7RUFDL0MseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7Ozs7QUFJQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7OztBQUdBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7OztBQUdBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNhaXJhK1NlbWkrQ29uZGVuc2VkJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxcclxcbiAgICBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJTYWlyYSBTZW1pIENvbmRlbnNlZFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxyXFxuICBodG1sIHtcXHJcXG4gICAgY29sb3Itc2NoZW1lOiBkYXJrO1xcclxcbiAgfVxcclxcbiAgYm9keSB7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZGZkZmRmO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5ib2R5LCBoMSB7XFxyXFxuICBjb2xvciA6ICMyN2RhN2I7XFxyXFxufVxcclxcblxcclxcbmJvZHksIHNwYW4ge1xcclxcbiAgY29sb3IgOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uc3R5bGVJbnB1dHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDhweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zdHlsZUlucHV0cyAuSW5wdXRXaXRoVW5pdCB7XFxyXFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDE2cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuZm9ybSBkaXYsIGZvcm0gbGFiZWwsIGZvcm0gdGV4dGFyZWEge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5maWVsZDpudGgtb2YtdHlwZSgxKSB7XFxyXFxuICBtYXJnaW46IDJyZW0gO1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCwgaW5wdXQsIHRleHRhcmVhIHtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIG1hcmdpbjogMC43cmVtIDByZW0gO1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCwgW3BsYWNlaG9sZGVyXSB7XFxyXFxuICBjb2xvcjogIzU1NTtcXHJcXG59XFxyXFxuXFxyXFxubGFiZWwgaSB7XFxyXFxuICBtYXJnaW46IDAgMTBweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5maWVsZDpmb2N1cy13aXRoaW4gbGFiZWwge1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCwgdGV4dGFyZWEge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggIzU1NTtcXHJcXG59XFxyXFxuaW5wdXQ6Zm9jdXMsIHRleHRhcmVhOmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG50ZXh0YXJlYTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDA7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMjdkYTdiO1xcclxcbiAgbWFyZ2luOiAxNnB4IDAgNTBweCAwO1xcclxcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4ICM1NTU7XFxyXFxufVxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XFxyXFxuICBmb3JtIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jYWJlY2FyaW8ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./src/styles/globals.css\n"));

/***/ })

});