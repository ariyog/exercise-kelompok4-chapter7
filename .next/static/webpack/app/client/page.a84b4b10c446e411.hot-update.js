"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/client/page",{

/***/ "(app-client)/./app/client/page.jsx":
/*!*****************************!*\
  !*** ./app/client/page.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ClientPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./result */ \"(app-client)/./app/client/result.jsx\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"(app-client)/./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"(app-client)/./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"(app-client)/./node_modules/react-bootstrap/esm/Button.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction ClientPage() {\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const onSearch = (e)=>{\n        // agar halaman ketika di klik tidak refresh\n        e.preventDefault();\n        const inputQuery = e.target[0].value;\n        setQuery(inputQuery);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            style: {\n                width: \"60%\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    style: {\n                        fontSize: \"2rem\",\n                        marginBottom: \"1rem\"\n                    },\n                    children: \"Get data with Client Components\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\My DATA\\\\Kampus Merdeka\\\\MSIB 4\\\\Binar\\\\chapter-7\\\\exercise-kelompok4-chapter7\\\\app\\\\client\\\\page.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    onSubmit: onSearch,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Group, {\n                        className: \"d-flex align-items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Control, {\n                                className: \"rounded-start\",\n                                placeholder: \"Masukkan limit data\",\n                                style: {\n                                    width: \"30%\",\n                                    outline: \"none\",\n                                    border: \"2px solid #2E8B57\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\My DATA\\\\Kampus Merdeka\\\\MSIB 4\\\\Binar\\\\chapter-7\\\\exercise-kelompok4-chapter7\\\\app\\\\client\\\\page.jsx\",\n                                lineNumber: 23,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                variant: \"success\",\n                                className: \"rounded-end\",\n                                style: {\n                                    marginLeft: \"0.1rem\",\n                                    width: \"8%\"\n                                },\n                                type: \"submit\",\n                                children: \"Cari\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\My DATA\\\\Kampus Merdeka\\\\MSIB 4\\\\Binar\\\\chapter-7\\\\exercise-kelompok4-chapter7\\\\app\\\\client\\\\page.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\My DATA\\\\Kampus Merdeka\\\\MSIB 4\\\\Binar\\\\chapter-7\\\\exercise-kelompok4-chapter7\\\\app\\\\client\\\\page.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\My DATA\\\\Kampus Merdeka\\\\MSIB 4\\\\Binar\\\\chapter-7\\\\exercise-kelompok4-chapter7\\\\app\\\\client\\\\page.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"D:\\\\My DATA\\\\Kampus Merdeka\\\\MSIB 4\\\\Binar\\\\chapter-7\\\\exercise-kelompok4-chapter7\\\\app\\\\client\\\\page.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, this),\n                query && query !== \"0\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_result__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    query: query\n                }, void 0, false, {\n                    fileName: \"D:\\\\My DATA\\\\Kampus Merdeka\\\\MSIB 4\\\\Binar\\\\chapter-7\\\\exercise-kelompok4-chapter7\\\\app\\\\client\\\\page.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Tidak ada data\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\My DATA\\\\Kampus Merdeka\\\\MSIB 4\\\\Binar\\\\chapter-7\\\\exercise-kelompok4-chapter7\\\\app\\\\client\\\\page.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\My DATA\\\\Kampus Merdeka\\\\MSIB 4\\\\Binar\\\\chapter-7\\\\exercise-kelompok4-chapter7\\\\app\\\\client\\\\page.jsx\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\My DATA\\\\Kampus Merdeka\\\\MSIB 4\\\\Binar\\\\chapter-7\\\\exercise-kelompok4-chapter7\\\\app\\\\client\\\\page.jsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n_s(ClientPage, \"HYX2QbDDdTtlu7GfoQbAPZOIM6k=\");\n_c = ClientPage;\nvar _c;\n$RefreshReg$(_c, \"ClientPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NsaWVudC9wYWdlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ0s7QUFDYTtBQUUzQyxTQUFTTSxhQUFhOztJQUNqQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFFbkMsTUFBTVEsV0FBVyxDQUFDQyxJQUFNO1FBQ3BCLDRDQUE0QztRQUM1Q0EsRUFBRUMsY0FBYztRQUNoQixNQUFNQyxhQUFhRixFQUFFRyxNQUFNLENBQUMsRUFBRSxDQUFDQyxLQUFLO1FBQ3BDTixTQUFTSTtJQUNiO0lBRUEscUJBQ0ksOERBQUNHO2tCQUNHLDRFQUFDWix1REFBU0E7WUFBQ2EsT0FBTztnQkFBRUMsT0FBTztZQUFNOzs4QkFDN0IsOERBQUNDO29CQUFHRixPQUFPO3dCQUFFRyxVQUFVO3dCQUFRQyxjQUFjO29CQUFPOzhCQUFHOzs7Ozs7OEJBRXZELDhEQUFDaEIsdURBQUlBO29CQUFDaUIsVUFBVVo7OEJBQ1osNEVBQUNMLDZEQUFVO3dCQUFDbUIsV0FBVTs7MENBQ2xCLDhEQUFDbkIsK0RBQVk7Z0NBQUNtQixXQUFVO2dDQUFnQkUsYUFBWTtnQ0FBc0JULE9BQU87b0NBQUVDLE9BQU87b0NBQU9TLFNBQVM7b0NBQVFDLFFBQVE7Z0NBQW9COzs7Ozs7MENBQzlJLDhEQUFDdEIsdURBQU1BO2dDQUFDdUIsU0FBUTtnQ0FBVUwsV0FBVTtnQ0FBY1AsT0FBTztvQ0FBRWEsWUFBWTtvQ0FBVVosT0FBTztnQ0FBSztnQ0FBR2EsTUFBSzswQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBTXRILDhEQUFDQzs7Ozs7Z0JBR0N4QixTQUFTQSxVQUFVLG9CQUM3Qiw4REFBQ0wsK0NBQXFCQTtvQkFBQ0ssT0FBT0E7Ozs7O3lDQUU5Qiw4REFBQ3lCOzhCQUFFOzs7Ozt3QkFDSjs7Ozs7Ozs7Ozs7O0FBSVAsQ0FBQztHQW5DdUIxQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY2xpZW50L3BhZ2UuanN4PzhhNzUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVzdWx0Q2xpZW50Q29tcG9uZW50IGZyb20gXCIuL3Jlc3VsdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEZvcm0sIEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsaWVudFBhZ2UoKSB7XHJcbiAgICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IG9uU2VhcmNoID0gKGUpID0+IHtcclxuICAgICAgICAvLyBhZ2FyIGhhbGFtYW4ga2V0aWthIGRpIGtsaWsgdGlkYWsgcmVmcmVzaFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBpbnB1dFF1ZXJ5ID0gZS50YXJnZXRbMF0udmFsdWU7XHJcbiAgICAgICAgc2V0UXVlcnkoaW5wdXRRdWVyeSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENvbnRhaW5lciBzdHlsZT17eyB3aWR0aDogXCI2MCVcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIsIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIgfX0+R2V0IGRhdGEgd2l0aCBDbGllbnQgQ29tcG9uZW50czwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU2VhcmNofT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgY2xhc3NOYW1lPVwicm91bmRlZC1zdGFydFwiIHBsYWNlaG9sZGVyPVwiTWFzdWtrYW4gbGltaXQgZGF0YVwiIHN0eWxlPXt7IHdpZHRoOiBcIjMwJVwiLCBvdXRsaW5lOiBcIm5vbmVcIiwgYm9yZGVyOiBcIjJweCBzb2xpZCAjMkU4QjU3XCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic3VjY2Vzc1wiIGNsYXNzTmFtZT1cInJvdW5kZWQtZW5kXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIwLjFyZW1cIiwgd2lkdGg6IFwiOCVcIiB9fSB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYXJpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7Lyoge3F1ZXJ5ICYmIDxSZXN1bHRDbGllbnRDb21wb25lbnQgcXVlcnk9e3F1ZXJ5fSAvPn0gKi99XHJcbiAgICAgICAgICAgICAgICAge3F1ZXJ5ICYmIHF1ZXJ5ICE9PSBcIjBcIiA/IChcclxuICAgICAgICA8UmVzdWx0Q2xpZW50Q29tcG9uZW50IHF1ZXJ5PXtxdWVyeX0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cD5UaWRhayBhZGEgZGF0YTwvcD5cclxuICAgICAgKX1cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUmVzdWx0Q2xpZW50Q29tcG9uZW50IiwiQ29udGFpbmVyIiwiRm9ybSIsIkJ1dHRvbiIsIkNsaWVudFBhZ2UiLCJxdWVyeSIsInNldFF1ZXJ5Iiwib25TZWFyY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dFF1ZXJ5IiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiaDIiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsIm9uU3VibWl0IiwiR3JvdXAiLCJjbGFzc05hbWUiLCJDb250cm9sIiwicGxhY2Vob2xkZXIiLCJvdXRsaW5lIiwiYm9yZGVyIiwidmFyaWFudCIsIm1hcmdpbkxlZnQiLCJ0eXBlIiwiYnIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/client/page.jsx\n"));

/***/ })

});