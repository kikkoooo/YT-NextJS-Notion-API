/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/about";
exports.ids = ["pages/about"];
exports.modules = {

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ About; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @notionhq/client */ \"@notionhq/client\");\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_notionhq_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/hobbes/Dev/github/midbymidwest/pages/about.js\";\n\n\nfunction About({\n  data\n}) {\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    console.log(data.results);\n  });\n\n  const getPageDisplay = () => {\n    let jsx = [];\n    data.results.forEach(block => {\n      if (block.type === 'paragraph') {\n        var _block$paragraph$text;\n\n        jsx.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: (_block$paragraph$text = block.paragraph.text[0]) === null || _block$paragraph$text === void 0 ? void 0 : _block$paragraph$text.plain_text\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 18\n        }, this));\n      }\n\n      if (block.type === 'bulleted_list_item') {\n        var _block$bulleted_list_;\n\n        jsx.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: (_block$bulleted_list_ = block.bulleted_list_item.text[0]) === null || _block$bulleted_list_ === void 0 ? void 0 : _block$bulleted_list_.plain_text\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, this));\n      }\n\n      if (block.type === 'heading_1') {\n        var _block$heading_1$text;\n\n        jsx.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          children: (_block$heading_1$text = block.heading_1.text[0]) === null || _block$heading_1$text === void 0 ? void 0 : _block$heading_1$text.text.content\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 18\n        }, this));\n      }\n\n      if (block.type === 'heading_2') {\n        var _block$heading_2$text;\n\n        jsx.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          children: (_block$heading_2$text = block.heading_2.text[0]) === null || _block$heading_2$text === void 0 ? void 0 : _block$heading_2$text.text.content\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 18\n        }, this));\n      }\n\n      if (block.type === 'heading_3') {\n        var _block$heading_3$text;\n\n        jsx.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n          children: (_block$heading_3$text = block.heading_3.text[0]) === null || _block$heading_3$text === void 0 ? void 0 : _block$heading_3$text.text.content\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 18\n        }, this));\n      }\n    });\n    return jsx;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: getPageDisplay()\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 10\n  }, this);\n}\nasync function getStaticProps() {\n  const notion = new _notionhq_client__WEBPACK_IMPORTED_MODULE_1__.Client({\n    auth: process.env.NOTION_API_KEY\n  });\n  const blockId = '47c2c837e61b48d9962bbc2132aa23bd';\n  const response = await notion.blocks.children.list({\n    block_id: blockId,\n    page_size: 50\n  });\n  console.log(response);\n  return {\n    props: {\n      data: response\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8wMS8uL3BhZ2VzL2Fib3V0LmpzPzI2ZWMiXSwibmFtZXMiOlsiQWJvdXQiLCJkYXRhIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInJlc3VsdHMiLCJnZXRQYWdlRGlzcGxheSIsImpzeCIsImZvckVhY2giLCJibG9jayIsInR5cGUiLCJwdXNoIiwicGFyYWdyYXBoIiwidGV4dCIsInBsYWluX3RleHQiLCJidWxsZXRlZF9saXN0X2l0ZW0iLCJoZWFkaW5nXzEiLCJjb250ZW50IiwiaGVhZGluZ18yIiwiaGVhZGluZ18zIiwiZ2V0U3RhdGljUHJvcHMiLCJub3Rpb24iLCJDbGllbnQiLCJhdXRoIiwicHJvY2VzcyIsImVudiIsIk5PVElPTl9BUElfS0VZIiwiYmxvY2tJZCIsInJlc3BvbnNlIiwiYmxvY2tzIiwiY2hpbGRyZW4iLCJsaXN0IiwiYmxvY2tfaWQiLCJwYWdlX3NpemUiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULENBQWU7QUFBRUM7QUFBRixDQUFmLEVBQXlCO0FBQ3RDQyxrREFBUyxDQUFDLE1BQU07QUFDZEMsV0FBTyxDQUFDQyxHQUFSLENBQVlILElBQUksQ0FBQ0ksT0FBakI7QUFDRCxHQUZRLENBQVQ7O0FBSUEsUUFBTUMsY0FBYyxHQUFHLE1BQU07QUFDM0IsUUFBSUMsR0FBRyxHQUFHLEVBQVY7QUFFQU4sUUFBSSxDQUFDSSxPQUFMLENBQWFHLE9BQWIsQ0FBc0JDLEtBQUQsSUFBVztBQUU5QixVQUFJQSxLQUFLLENBQUNDLElBQU4sS0FBZSxXQUFuQixFQUFnQztBQUFBOztBQUM5QkgsV0FBRyxDQUFDSSxJQUFKLGVBQVM7QUFBQSw2Q0FBSUYsS0FBSyxDQUFDRyxTQUFOLENBQWdCQyxJQUFoQixDQUFxQixDQUFyQixDQUFKLDBEQUFJLHNCQUF5QkM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBVDtBQUNEOztBQUVELFVBQUlMLEtBQUssQ0FBQ0MsSUFBTixLQUFlLG9CQUFuQixFQUF5QztBQUFBOztBQUN2Q0gsV0FBRyxDQUFDSSxJQUFKLGVBQ0U7QUFBQSxpQ0FDRTtBQUFBLCtDQUFLRixLQUFLLENBQUNNLGtCQUFOLENBQXlCRixJQUF6QixDQUE4QixDQUE5QixDQUFMLDBEQUFLLHNCQUFrQ0M7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREY7QUFLRDs7QUFFRCxVQUFJTCxLQUFLLENBQUNDLElBQU4sS0FBZSxXQUFuQixFQUFnQztBQUFBOztBQUM5QkgsV0FBRyxDQUFDSSxJQUFKLGVBQVM7QUFBQSw2Q0FBS0YsS0FBSyxDQUFDTyxTQUFOLENBQWdCSCxJQUFoQixDQUFxQixDQUFyQixDQUFMLDBEQUFLLHNCQUF5QkEsSUFBekIsQ0FBOEJJO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVQ7QUFDRDs7QUFFRCxVQUFJUixLQUFLLENBQUNDLElBQU4sS0FBZSxXQUFuQixFQUFnQztBQUFBOztBQUM5QkgsV0FBRyxDQUFDSSxJQUFKLGVBQVM7QUFBQSw2Q0FBS0YsS0FBSyxDQUFDUyxTQUFOLENBQWdCTCxJQUFoQixDQUFxQixDQUFyQixDQUFMLDBEQUFLLHNCQUF5QkEsSUFBekIsQ0FBOEJJO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVQ7QUFDRDs7QUFFRCxVQUFJUixLQUFLLENBQUNDLElBQU4sS0FBZSxXQUFuQixFQUFnQztBQUFBOztBQUM5QkgsV0FBRyxDQUFDSSxJQUFKLGVBQVM7QUFBQSw2Q0FBS0YsS0FBSyxDQUFDVSxTQUFOLENBQWdCTixJQUFoQixDQUFxQixDQUFyQixDQUFMLDBEQUFLLHNCQUF5QkEsSUFBekIsQ0FBOEJJO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVQ7QUFDRDtBQUlGLEtBNUJEO0FBNkJBLFdBQU9WLEdBQVA7QUFDRCxHQWpDRDs7QUFtQ0Esc0JBQU87QUFBQSxjQUFNRCxjQUFjO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEO0FBRU0sZUFBZWMsY0FBZixHQUFnQztBQUNyQyxRQUFNQyxNQUFNLEdBQUcsSUFBSUMsb0RBQUosQ0FBVztBQUFFQyxRQUFJLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQztBQUFwQixHQUFYLENBQWY7QUFDQSxRQUFNQyxPQUFPLEdBQUcsa0NBQWhCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLE1BQU1QLE1BQU0sQ0FBQ1EsTUFBUCxDQUFjQyxRQUFkLENBQXVCQyxJQUF2QixDQUE0QjtBQUNqREMsWUFBUSxFQUFFTCxPQUR1QztBQUVqRE0sYUFBUyxFQUFFO0FBRnNDLEdBQTVCLENBQXZCO0FBSUE5QixTQUFPLENBQUNDLEdBQVIsQ0FBWXdCLFFBQVo7QUFFQSxTQUFPO0FBQ0xNLFNBQUssRUFBRTtBQUNMakMsVUFBSSxFQUFFMkI7QUFERDtBQURGLEdBQVA7QUFLRCIsImZpbGUiOiIuL3BhZ2VzL2Fib3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnQG5vdGlvbmhxL2NsaWVudCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KHsgZGF0YSB9KSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0YS5yZXN1bHRzKTtcbiAgfSk7XG5cbiAgY29uc3QgZ2V0UGFnZURpc3BsYXkgPSAoKSA9PiB7XG4gICAgbGV0IGpzeCA9IFtdO1xuXG4gICAgZGF0YS5yZXN1bHRzLmZvckVhY2goKGJsb2NrKSA9PiB7XG5cbiAgICAgIGlmIChibG9jay50eXBlID09PSAncGFyYWdyYXBoJykge1xuICAgICAgICBqc3gucHVzaCg8cD57YmxvY2sucGFyYWdyYXBoLnRleHRbMF0/LnBsYWluX3RleHR9PC9wPik7XG4gICAgICB9XG5cbiAgICAgIGlmIChibG9jay50eXBlID09PSAnYnVsbGV0ZWRfbGlzdF9pdGVtJykge1xuICAgICAgICBqc3gucHVzaChcbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+e2Jsb2NrLmJ1bGxldGVkX2xpc3RfaXRlbS50ZXh0WzBdPy5wbGFpbl90ZXh0fTwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJsb2NrLnR5cGUgPT09ICdoZWFkaW5nXzEnKSB7XG4gICAgICAgIGpzeC5wdXNoKDxoMT57YmxvY2suaGVhZGluZ18xLnRleHRbMF0/LnRleHQuY29udGVudH08L2gxPik7XG4gICAgICB9XG5cbiAgICAgIGlmIChibG9jay50eXBlID09PSAnaGVhZGluZ18yJykge1xuICAgICAgICBqc3gucHVzaCg8aDI+e2Jsb2NrLmhlYWRpbmdfMi50ZXh0WzBdPy50ZXh0LmNvbnRlbnR9PC9oMj4pO1xuICAgICAgfVxuXG4gICAgICBpZiAoYmxvY2sudHlwZSA9PT0gJ2hlYWRpbmdfMycpIHtcbiAgICAgICAganN4LnB1c2goPGgzPntibG9jay5oZWFkaW5nXzMudGV4dFswXT8udGV4dC5jb250ZW50fTwvaDM+KTtcbiAgICAgIH1cblxuXG5cbiAgICB9KTtcbiAgICByZXR1cm4ganN4O1xuICB9O1xuXG4gIHJldHVybiA8ZGl2PntnZXRQYWdlRGlzcGxheSgpfTwvZGl2Pjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBub3Rpb24gPSBuZXcgQ2xpZW50KHsgYXV0aDogcHJvY2Vzcy5lbnYuTk9USU9OX0FQSV9LRVkgfSk7XG4gIGNvbnN0IGJsb2NrSWQgPSAnNDdjMmM4MzdlNjFiNDhkOTk2MmJiYzIxMzJhYTIzYmQnO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG5vdGlvbi5ibG9ja3MuY2hpbGRyZW4ubGlzdCh7XG4gICAgYmxvY2tfaWQ6IGJsb2NrSWQsXG4gICAgcGFnZV9zaXplOiA1MCxcbiAgfSk7XG4gIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhOiByZXNwb25zZSxcbiAgICB9LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ }),

/***/ "@notionhq/client":
/*!***********************************!*\
  !*** external "@notionhq/client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@notionhq/client");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/about.js"));
module.exports = __webpack_exports__;

})();