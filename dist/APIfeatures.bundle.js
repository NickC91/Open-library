/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*******************************!*\
  !*** ./src/js/APIfeatures.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBooks": () => (/* binding */ getBooks),
/* harmony export */   "getDescriptions": () => (/* binding */ getDescriptions)
/* harmony export */ });
let load = document.getElementById('loader')

const getBooks = async (param) => {
    try {
        load.classList.remove('hide-loader')
        const req = await axios.get(`https://openlibrary.org/subjects/${param}.json`)
        const res = req.data
        load.classList.add('hide-loader')
        return res
    } catch (err) {
        console.log(err.message)
    }
}

const getDescriptions = async (param) => {
    try {
        const req = await axios.get(`https://openlibrary.org${param}.json`)
        const res = [req.data.title, req.data.description]
        return res
    } catch (err) {
        console.log(err.message)
    }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVBJZmVhdHVyZXMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSx3RUFBd0UsTUFBTTtBQUM5RTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsOERBQThELE1BQU07QUFDcEU7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW5saWJyYXJ5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29wZW5saWJyYXJ5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vcGVubGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29wZW5saWJyYXJ5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb3BlbmxpYnJhcnkvLi9zcmMvanMvQVBJZmVhdHVyZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJsZXQgbG9hZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEJvb2tzID0gYXN5bmMgKHBhcmFtKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxvYWQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1sb2FkZXInKVxyXG4gICAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9vcGVubGlicmFyeS5vcmcvc3ViamVjdHMvJHtwYXJhbX0uanNvbmApXHJcbiAgICAgICAgY29uc3QgcmVzID0gcmVxLmRhdGFcclxuICAgICAgICBsb2FkLmNsYXNzTGlzdC5hZGQoJ2hpZGUtbG9hZGVyJylcclxuICAgICAgICByZXR1cm4gcmVzXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldERlc2NyaXB0aW9ucyA9IGFzeW5jIChwYXJhbSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXEgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vb3BlbmxpYnJhcnkub3JnJHtwYXJhbX0uanNvbmApXHJcbiAgICAgICAgY29uc3QgcmVzID0gW3JlcS5kYXRhLnRpdGxlLCByZXEuZGF0YS5kZXNjcmlwdGlvbl1cclxuICAgICAgICByZXR1cm4gcmVzXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSlcclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==