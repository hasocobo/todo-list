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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screen */ \"./src/screen.js\");\n\r\n\r\n\r\n\r\nconst projects = [];\r\n\r\n\r\nconst newProject = function(projectName) {\r\n    const _project = (0,_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projectName);\r\n    projects.push(_project);\r\n    return _project;\r\n}\r\n\r\nconst project1 = newProject(\"Proje 1\");\r\nproject1.addTask((0,_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Kitap oku\", \"Her gün kitap oku\", \"\", 2));\r\nproject1.addTask((0,_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Ders çalış\", \"js çalış\", \"\", 1));\r\nproject1.addTask((0,_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Dil öğren\", \"Her gün dil öğren\", \"\", 2));\r\n\r\nconst project2 = newProject(\"Okul\");\r\nproject2.addTask((0,_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Oyun oyna\", \"Günde 1 saat oyun oynayabilirsin.\", \"\", 1));\r\n\r\nconst project3 = newProject(\"zm\");\r\nproject3.addTask((0,_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\r\nconst project4 = newProject(\"pm\");\r\n\r\n(0,_screen__WEBPACK_IMPORTED_MODULE_2__.showProjects)(projects);\r\n//showTasks(project1.getTasks());\r\n//showTasks(project2.getTasks());\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Project = function(_title = \"\", ..._tasks) {\r\n    let tasks = _tasks;\r\n    let title = _title;\r\n    \r\n    const getTasks = () => tasks;\r\n    const getTitle = () => title;\r\n\r\n    const addTask = function(_task) {\r\n        tasks.push(_task);\r\n    }\r\n\r\n\r\n    Project.prototype.toString = function() {\r\n\r\n    }\r\n\r\n    const log = function() {\r\n        for(const task of tasks) {\r\n            console.log(`Task Name: ${task.getTitle()} \\nTask Description: ${task.getDescription()} \\nTask Priority: ${task.getPriority()} \\n \\n `)\r\n        }\r\n    }\r\n\r\n    return {\r\n        getTasks,\r\n        getTitle,\r\n        addTask,\r\n        log\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://my-webpack-project/./src/project.js?");

/***/ }),

/***/ "./src/screen.js":
/*!***********************!*\
  !*** ./src/screen.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showProjects: () => (/* binding */ showProjects),\n/* harmony export */   showTasks: () => (/* binding */ showTasks)\n/* harmony export */ });\nconst showTasks = function(tasks) {\r\n    const taskContent = document.querySelector('.task-content');\r\n    while(taskContent.firstChild){\r\n      taskContent.removeChild(taskContent.lastChild);\r\n    }\r\n    \r\n    \r\n    for (const _task of tasks) {\r\n      const task = document.createElement('div');\r\n      const title = document.createElement('div');\r\n      const iconContainer = document.createElement('div');\r\n      const materialIcons = document.createElement('div');\r\n      const h3 = document.createElement('h3');\r\n      const descPanel = document.createElement('div');\r\n      \r\n      descPanel.classList.add('description-panel');\r\n      descPanel.classList.add('disabled');\r\n      \r\n      taskContent.classList.add('task-content');\r\n      \r\n      task.classList.add('task');\r\n      title.classList.add('title');\r\n      \r\n      materialIcons.classList.add('material-icons');\r\n      materialIcons.textContent = 'delete';\r\n      \r\n\r\n      h3.textContent = _task.getTitle();\r\n      descPanel.textContent = _task.getDescription();\r\n      \r\n      taskContent.appendChild(task);\r\n      task.appendChild(title);\r\n      task.insertAdjacentElement('afterend', descPanel);\r\n      title.appendChild(h3);\r\n      title.appendChild(iconContainer);\r\n      iconContainer.appendChild(materialIcons);\r\n\r\n      task.addEventListener('click', () => {\r\n        descPanel.classList.toggle('disabled');\r\n    });\r\n  }\r\n\r\n\r\n}\r\n\r\nconst showProjects = function(projects) {\r\n    const sideBar = document.querySelector('.sidebar');\r\n    const addNewButton = document.querySelector('#new-project');\r\n\r\n    for(const project of projects) {\r\n\r\n        const projectDOM = document.createElement('div');\r\n        const paddingSB = document.createElement('div');\r\n        const projectTitle = document.createElement('h2');\r\n        \r\n        projectDOM.classList.add('project');\r\n        paddingSB.classList.add('padding-sb');\r\n\r\n    \r\n        projectTitle.textContent = project.getTitle();\r\n        \r\n        sideBar.insertBefore(projectDOM, addNewButton);\r\n        projectDOM.appendChild(paddingSB);\r\n        paddingSB.appendChild(projectTitle);\r\n\r\n        projectDOM.addEventListener('click', () => {\r\n          showTasks(project.getTasks());\r\n        })\r\n    }\r\n    \r\n    \r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/**\r\n *               <div class=\"task-content\">\r\n *                   <div class=\"task\">\r\n                    <div class=\"title\">\r\n                      <h3>learn russian</h3>\r\n                      <div class=\"icon-container\">\r\n                        <div class=\"material-icons\">delete</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n * \r\n * \r\n * \r\n * \r\n */\n\n//# sourceURL=webpack://my-webpack-project/./src/screen.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Task = function(_title = \"\", _description = \"\", _dueDate = \"\", _priority = 0) {\r\n    let title = _title,\r\n        description = _description,\r\n        dueDate = _dueDate,\r\n        priority = _priority,\r\n        isComplete = false;\r\n\r\n\r\n        \r\n\r\n    const changeCompletion = () => {\r\n        isComplete = !isComplete;\r\n    }\r\n\r\n    const getTitle = () => title;\r\n\r\n    const getDescription = () => description;\r\n    \r\n    const getDueDate = () => dueDate;\r\n\r\n    const getPriority = () => priority;\r\n\r\n\r\n\r\n\r\n    return {\r\n        getTitle,\r\n        getDescription,\r\n        getDueDate,\r\n        getPriority\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://my-webpack-project/./src/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;