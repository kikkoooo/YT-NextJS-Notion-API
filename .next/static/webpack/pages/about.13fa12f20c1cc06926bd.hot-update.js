/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/hobbes/Dev/github/midbymidwest/pages/about.js\",\n    _s = $RefreshSig$();\n\n\nvar __N_SSG = true;\nfunction About(_ref) {\n  _s();\n\n  var _this = this;\n\n  var data = _ref.data;\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    console.log(data.results);\n  });\n\n  var getPageDisplay = function getPageDisplay() {\n    var jsx = [];\n    data.results.forEach(function (block) {\n      if (block.type === 'paragraph') {\n        var _block$paragraph$text;\n\n        jsx.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: (_block$paragraph$text = block.paragraph.text[0]) === null || _block$paragraph$text === void 0 ? void 0 : _block$paragraph$text.plain_text\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 18\n        }, _this));\n      }\n\n      if (block.type === 'bulleted_list_item') {\n        var _block$bulleted_list_;\n\n        jsx.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: (_block$bulleted_list_ = block.bulleted_list_item.text[0]) === null || _block$bulleted_list_ === void 0 ? void 0 : _block$bulleted_list_.plain_text\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, _this));\n      }\n\n      if (block.type === 'heading_1') {\n        var _block$heading_1$text;\n\n        jsx.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          children: (_block$heading_1$text = block.heading_1.text[0]) === null || _block$heading_1$text === void 0 ? void 0 : _block$heading_1$text.text.content\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 18\n        }, _this));\n      }\n    });\n    return jsx;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: getPageDisplay()\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 10\n  }, this);\n}\n\n_s(About, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = About;\n\nvar _c;\n\n$RefreshReg$(_c, \"About\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanM/MjZlYyJdLCJuYW1lcyI6WyJBYm91dCIsImRhdGEiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0cyIsImdldFBhZ2VEaXNwbGF5IiwianN4IiwiZm9yRWFjaCIsImJsb2NrIiwidHlwZSIsInB1c2giLCJwYXJhZ3JhcGgiLCJ0ZXh0IiwicGxhaW5fdGV4dCIsImJ1bGxldGVkX2xpc3RfaXRlbSIsImhlYWRpbmdfMSIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUVlLFNBQVNBLEtBQVQsT0FBeUI7QUFBQTs7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDdENDLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBSSxDQUFDSSxPQUFqQjtBQUNELEdBRlEsQ0FBVDs7QUFJQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsUUFBSUMsR0FBRyxHQUFHLEVBQVY7QUFFQU4sUUFBSSxDQUFDSSxPQUFMLENBQWFHLE9BQWIsQ0FBcUIsVUFBQ0MsS0FBRCxFQUFXO0FBRTlCLFVBQUlBLEtBQUssQ0FBQ0MsSUFBTixLQUFlLFdBQW5CLEVBQWdDO0FBQUE7O0FBQzlCSCxXQUFHLENBQUNJLElBQUosZUFBUztBQUFBLDZDQUFJRixLQUFLLENBQUNHLFNBQU4sQ0FBZ0JDLElBQWhCLENBQXFCLENBQXJCLENBQUosMERBQUksc0JBQXlCQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFUO0FBQ0Q7O0FBRUQsVUFBSUwsS0FBSyxDQUFDQyxJQUFOLEtBQWUsb0JBQW5CLEVBQXlDO0FBQUE7O0FBQ3ZDSCxXQUFHLENBQUNJLElBQUosZUFDRTtBQUFBLGlDQUNFO0FBQUEsK0NBQUtGLEtBQUssQ0FBQ00sa0JBQU4sQ0FBeUJGLElBQXpCLENBQThCLENBQTlCLENBQUwsMERBQUssc0JBQWtDQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUtEOztBQUVELFVBQUlMLEtBQUssQ0FBQ0MsSUFBTixLQUFlLFdBQW5CLEVBQWdDO0FBQUE7O0FBQzlCSCxXQUFHLENBQUNJLElBQUosZUFBUztBQUFBLDZDQUFLRixLQUFLLENBQUNPLFNBQU4sQ0FBZ0JILElBQWhCLENBQXFCLENBQXJCLENBQUwsMERBQUssc0JBQXlCQSxJQUF6QixDQUE4Qkk7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBVDtBQUNEO0FBSUYsS0FwQkQ7QUFxQkEsV0FBT1YsR0FBUDtBQUNELEdBekJEOztBQTJCQSxzQkFBTztBQUFBLGNBQU1ELGNBQWM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0dBakN1Qk4sSzs7S0FBQUEsSyIsImZpbGUiOiIuL3BhZ2VzL2Fib3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnQG5vdGlvbmhxL2NsaWVudCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KHsgZGF0YSB9KSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0YS5yZXN1bHRzKTtcbiAgfSk7XG5cbiAgY29uc3QgZ2V0UGFnZURpc3BsYXkgPSAoKSA9PiB7XG4gICAgbGV0IGpzeCA9IFtdO1xuXG4gICAgZGF0YS5yZXN1bHRzLmZvckVhY2goKGJsb2NrKSA9PiB7XG5cbiAgICAgIGlmIChibG9jay50eXBlID09PSAncGFyYWdyYXBoJykge1xuICAgICAgICBqc3gucHVzaCg8cD57YmxvY2sucGFyYWdyYXBoLnRleHRbMF0/LnBsYWluX3RleHR9PC9wPik7XG4gICAgICB9XG5cbiAgICAgIGlmIChibG9jay50eXBlID09PSAnYnVsbGV0ZWRfbGlzdF9pdGVtJykge1xuICAgICAgICBqc3gucHVzaChcbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+e2Jsb2NrLmJ1bGxldGVkX2xpc3RfaXRlbS50ZXh0WzBdPy5wbGFpbl90ZXh0fTwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJsb2NrLnR5cGUgPT09ICdoZWFkaW5nXzEnKSB7XG4gICAgICAgIGpzeC5wdXNoKDxoMT57YmxvY2suaGVhZGluZ18xLnRleHRbMF0/LnRleHQuY29udGVudH08L2gxPik7XG4gICAgICB9XG5cblxuXG4gICAgfSk7XG4gICAgcmV0dXJuIGpzeDtcbiAgfTtcblxuICByZXR1cm4gPGRpdj57Z2V0UGFnZURpc3BsYXkoKX08L2Rpdj47XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3Qgbm90aW9uID0gbmV3IENsaWVudCh7IGF1dGg6IHByb2Nlc3MuZW52Lk5PVElPTl9BUElfS0VZIH0pO1xuICBjb25zdCBibG9ja0lkID0gJzQ3YzJjODM3ZTYxYjQ4ZDk5NjJiYmMyMTMyYWEyM2JkJztcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBub3Rpb24uYmxvY2tzLmNoaWxkcmVuLmxpc3Qoe1xuICAgIGJsb2NrX2lkOiBibG9ja0lkLFxuICAgIHBhZ2Vfc2l6ZTogNTAsXG4gIH0pO1xuICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZGF0YTogcmVzcG9uc2UsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ })

});