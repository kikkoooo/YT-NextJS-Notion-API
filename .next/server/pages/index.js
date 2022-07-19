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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Employees; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @notionhq/client */ \"@notionhq/client\");\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_notionhq_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/hobbes/Dev/github/midbymidwest/pages/index.js\";\n\n // Initializing a client\n// export default function Employees({ results }) {\n//   useEffect(() => {\n//     console.log(results);\n//   });\n//   return <div>tae</div>;\n// }\n\nfunction Employees({\n  results\n}) {\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    console.log(results);\n  });\n\n  const getDatabaseDisplay = () => {\n    let jsx = [];\n    results.forEach(employee => {\n      jsx.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: employee.properties.Name.title[0].plain_text\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: employee.properties.Tags.select.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, this)]\n      }, employee.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this));\n    });\n    return jsx;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: getDatabaseDisplay()\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 10\n  }, this);\n}\nasync function getStaticProps() {\n  const notion = new _notionhq_client__WEBPACK_IMPORTED_MODULE_1__.Client({\n    auth: process.env.NOTION_API_KEY\n  });\n  const databaseId = \"7f8b3c1471c4478d820cc09b48773371\";\n  const response = await notion.databases.query({\n    database_id: databaseId\n  }); // console.log(response);\n\n  return {\n    props: {\n      results: response.results\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8wMS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwibmFtZXMiOlsiRW1wbG95ZWVzIiwicmVzdWx0cyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJnZXREYXRhYmFzZURpc3BsYXkiLCJqc3giLCJmb3JFYWNoIiwiZW1wbG95ZWUiLCJwdXNoIiwicHJvcGVydGllcyIsIk5hbWUiLCJ0aXRsZSIsInBsYWluX3RleHQiLCJUYWdzIiwic2VsZWN0IiwibmFtZSIsImlkIiwiZ2V0U3RhdGljUHJvcHMiLCJub3Rpb24iLCJDbGllbnQiLCJhdXRoIiwicHJvY2VzcyIsImVudiIsIk5PVElPTl9BUElfS0VZIiwiZGF0YWJhc2VJZCIsInJlc3BvbnNlIiwiZGF0YWJhc2VzIiwicXVlcnkiLCJkYXRhYmFzZV9pZCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJZSxTQUFTQSxTQUFULENBQW1CO0FBQUVDO0FBQUYsQ0FBbkIsRUFBZ0M7QUFDN0NDLGtEQUFTLENBQUMsTUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUgsT0FBWjtBQUNELEdBRlEsQ0FBVDs7QUFHQSxRQUFNSSxrQkFBa0IsR0FBRyxNQUFNO0FBQy9CLFFBQUlDLEdBQUcsR0FBRyxFQUFWO0FBQ0FMLFdBQU8sQ0FBQ00sT0FBUixDQUFpQkMsUUFBRCxJQUFjO0FBQzVCRixTQUFHLENBQUNHLElBQUosZUFDRTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLGdDQUNFO0FBQUEsb0JBQUlELFFBQVEsQ0FBQ0UsVUFBVCxDQUFvQkMsSUFBcEIsQ0FBeUJDLEtBQXpCLENBQStCLENBQS9CLEVBQWtDQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQSxvQkFBT0wsUUFBUSxDQUFDRSxVQUFULENBQW9CSSxJQUFwQixDQUF5QkMsTUFBekIsQ0FBZ0NDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQSxTQUEyQlIsUUFBUSxDQUFDUyxFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFNRCxLQVBEO0FBUUEsV0FBT1gsR0FBUDtBQUNELEdBWEQ7O0FBWUEsc0JBQU87QUFBQSxjQUFNRCxrQkFBa0I7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7QUFFTSxlQUFlYSxjQUFmLEdBQWdDO0FBQ3JDLFFBQU1DLE1BQU0sR0FBRyxJQUFJQyxvREFBSixDQUFXO0FBQUVDLFFBQUksRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDO0FBQXBCLEdBQVgsQ0FBZjtBQUNBLFFBQU1DLFVBQVUsR0FBRyxrQ0FBbkI7QUFDQSxRQUFNQyxRQUFRLEdBQUcsTUFBTVAsTUFBTSxDQUFDUSxTQUFQLENBQWlCQyxLQUFqQixDQUF1QjtBQUM1Q0MsZUFBVyxFQUFFSjtBQUQrQixHQUF2QixDQUF2QixDQUhxQyxDQU9yQzs7QUFDQSxTQUFPO0FBQ0xLLFNBQUssRUFBRTtBQUNMN0IsYUFBTyxFQUFFeUIsUUFBUSxDQUFDekI7QUFEYjtBQURGLEdBQVA7QUFLRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnQG5vdGlvbmhxL2NsaWVudCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbi8vIEluaXRpYWxpemluZyBhIGNsaWVudFxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRW1wbG95ZWVzKHsgcmVzdWx0cyB9KSB7XG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2cocmVzdWx0cyk7XG4vLyAgIH0pO1xuLy8gICByZXR1cm4gPGRpdj50YWU8L2Rpdj47XG4vLyB9XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFbXBsb3llZXMoeyByZXN1bHRzIH0pIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHRzKTtcbiAgfSk7XG4gIGNvbnN0IGdldERhdGFiYXNlRGlzcGxheSA9ICgpID0+IHtcbiAgICBsZXQganN4ID0gW107XG4gICAgcmVzdWx0cy5mb3JFYWNoKChlbXBsb3llZSkgPT4ge1xuICAgICAganN4LnB1c2goXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIGtleT17ZW1wbG95ZWUuaWR9PlxuICAgICAgICAgIDxwPntlbXBsb3llZS5wcm9wZXJ0aWVzLk5hbWUudGl0bGVbMF0ucGxhaW5fdGV4dH08L3A+XG4gICAgICAgICAgPHNwYW4+e2VtcGxveWVlLnByb3BlcnRpZXMuVGFncy5zZWxlY3QubmFtZX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9KTtcbiAgICByZXR1cm4ganN4O1xuICB9O1xuICByZXR1cm4gPGRpdj57Z2V0RGF0YWJhc2VEaXNwbGF5KCl9PC9kaXY+O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IG5vdGlvbiA9IG5ldyBDbGllbnQoeyBhdXRoOiBwcm9jZXNzLmVudi5OT1RJT05fQVBJX0tFWSB9KTtcbiAgY29uc3QgZGF0YWJhc2VJZCA9IFwiN2Y4YjNjMTQ3MWM0NDc4ZDgyMGNjMDliNDg3NzMzNzFcIjtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBub3Rpb24uZGF0YWJhc2VzLnF1ZXJ5KHtcbiAgICBkYXRhYmFzZV9pZDogZGF0YWJhc2VJZCxcbiAgfSk7XG5cbiAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICByZXN1bHRzOiByZXNwb25zZS5yZXN1bHRzLFxuICAgIH0sXG4gIH07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();