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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screen */ \"./src/screen.js\");\n\n\n\n\nconst project1 = _project_js__WEBPACK_IMPORTED_MODULE_1__.Projects.newProject('Proje 1');\nproject1.addTask((0,_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Kitap oku', 'Her gün kitap oku', '', 2));\nproject1.addTask((0,_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Ders çalış', 'js çalış', '', 1));\nproject1.addTask((0,_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Dil öğren', 'Her gün dil öğren', '', 2));\n\nconst project2 = _project_js__WEBPACK_IMPORTED_MODULE_1__.Projects.newProject('Okul');\nproject2.addTask((0,_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Oyun oyna', 'Günde 1 saat oyun oynayabilirsin.', '', 1));\n\n(0,_screen__WEBPACK_IMPORTED_MODULE_2__.showProjects)(_project_js__WEBPACK_IMPORTED_MODULE_1__.Projects);\n// showTasks(project1.getTasks());\n// showTasks(project2.getTasks());\n\nproject1.addTask((0,_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Yürüyüşe çık', 'Her gün yürüyüşe çık', '', 2));\n\n(0,_screen__WEBPACK_IMPORTED_MODULE_2__.showTasks)(project1);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   Projects: () => (/* binding */ Projects)\n/* harmony export */ });\n/* eslint-disable prefer-const */\n/* eslint-disable no-restricted-syntax */\n/* eslint-disable no-console */\nconst Project = function (_title = \"\", ..._tasks) {\n  let tasks = _tasks;\n  let title = _title;\n\n  const getTasks = () => tasks;\n  const getTitle = () => title;\n\n  const addTask = function (_task) {\n    tasks.push(_task);\n  };\n\n  const removeTask = function (_task) {\n    tasks = tasks.filter((e) => e !== _task);\n  };\n\n  Project.prototype.toString = function () {};\n\n  const log = function () {\n    for (const task of tasks) {\n      console.log(\n        `Task Name: ${task.getTitle()} \\nTask Description: ${task.getDescription()} \\nTask Priority: ${task.getPriority()} \\n \\n `,\n      );\n    }\n  };\n\n  return {\n    getTasks,\n    getTitle,\n    addTask,\n    log,\n    removeTask,\n  };\n};\n\nconst Projects = (function Projects() {\n  const projects = [];\n\n  const newProject = function newProject(projectName) {\n    const _project = Project(projectName);\n    projects.push(_project);\n    return _project;\n  };\n\n  const getProjects = () => projects;\n\n  return {\n    newProject,\n    getProjects,\n  };\n}());\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/project.js?");

/***/ }),

/***/ "./src/screen.js":
/*!***********************!*\
  !*** ./src/screen.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showProjects: () => (/* binding */ showProjects),\n/* harmony export */   showTasks: () => (/* binding */ showTasks)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nconst showTasks = function (project) {\n  const taskContent = document.querySelector('.task-content');\n  const newTask = document.querySelector('#add-task');\n  while (taskContent.firstChild) {\n    taskContent.removeChild(taskContent.lastChild);\n  }\n\n  for (const _task of project.getTasks()) {\n    const task = document.createElement('div');\n    const title = document.createElement('div');\n    const iconContainer = document.createElement('div');\n    const materialIcons = document.createElement('div');\n    const h3 = document.createElement('h3');\n    const descPanel = document.createElement('div');\n\n    descPanel.classList.add('description-panel');\n    descPanel.classList.add('disabled');\n\n    taskContent.classList.add('task-content');\n\n    task.classList.add('task');\n    title.classList.add('title');\n\n    iconContainer.classList.add('icon-container');\n\n    materialIcons.classList.add('material-icons');\n    materialIcons.textContent = 'delete';\n\n    h3.textContent = _task.getTitle();\n    descPanel.textContent = _task.getDescription();\n\n    taskContent.appendChild(task);\n    task.appendChild(title);\n    task.insertAdjacentElement('afterend', descPanel);\n    title.appendChild(h3);\n    title.appendChild(iconContainer);\n    iconContainer.appendChild(materialIcons);\n\n    task.addEventListener('click', () => {\n      descPanel.classList.toggle('disabled');\n    });\n\n    iconContainer.addEventListener('click', () => {\n      project.removeTask(_task);\n      showTasks(project);\n    });\n  }\n\n  taskContent.appendChild(newTask);\n};\n\nconst showProjects = function (projects) {\n  const sideBar = document.querySelector('.sidebar');\n  const addNewButton = document.querySelector('#new-project');\n\n  while (sideBar.firstChild) {\n    sideBar.removeChild(sideBar.lastChild);\n  }\n\n  sideBar.appendChild(addNewButton);\n\n  for (const project of projects.getProjects()) {\n    const projectDOM = document.createElement('div');\n    const paddingSB = document.createElement('div');\n    const projectTitle = document.createElement('h2');\n\n    projectDOM.classList.add('project');\n    paddingSB.classList.add('padding-sb');\n\n    projectTitle.textContent = project.getTitle();\n\n    sideBar.insertBefore(projectDOM, addNewButton);\n    projectDOM.appendChild(paddingSB);\n    paddingSB.appendChild(projectTitle);\n\n    projectDOM.addEventListener('click', () => {\n      showTasks(project);\n    });\n  }\n};\n\nconst addProject = (function () {\n  const addNewButton = document.querySelector('#new-project');\n  const inputField = document.querySelector('input#add-project');\n  const confirmButton = document.querySelector('#confirm-button');\n  const cancelButton = document.querySelector('#cancel-button');\n  const projectContent = document.querySelector(\n    '#new-project .project-content',\n  );\n  const form = document.querySelector('.sidebar form');\n\n  projectContent.addEventListener('click', () => {\n    projectContent.classList.toggle('hide');\n    form.classList.toggle('hide');\n  });\n\n  confirmButton.addEventListener('click', () => {\n    _project__WEBPACK_IMPORTED_MODULE_0__.Projects.newProject(inputField.value);\n    showProjects(_project__WEBPACK_IMPORTED_MODULE_0__.Projects);\n    projectContent.classList.toggle('hide');\n    form.classList.toggle('hide');\n    inputField.value = '';\n  });\n\n  cancelButton.addEventListener('click', () => {\n    projectContent.classList.toggle('hide');\n    form.classList.toggle('hide');\n  });\n\n  // projectContent.classList.toggle('hide');\n}());\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/screen.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Task = function (\n  _title = \"\",\n  _description = \"\",\n  _dueDate = \"\",\n  _priority = 0,\n) {\n  let title = _title,\n    description = _description,\n    dueDate = _dueDate,\n    priority = _priority,\n    isComplete = false;\n\n  const changeCompletion = () => {\n    isComplete = !isComplete;\n  };\n\n  const getTitle = () => title;\n\n  const getDescription = () => description;\n\n  const getDueDate = () => dueDate;\n\n  const getPriority = () => priority;\n\n  return {\n    getTitle,\n    getDescription,\n    getDueDate,\n    getPriority,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/task.js?");

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