/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
const Project = function (_title = '', ..._tasks) {
  let tasks = _tasks;
  let title = _title;

  const getTasks = () => tasks;
  const getTitle = () => title;

  const addTask = function (_task) {
    tasks.push(_task);
    Projects.saveStorage();
  };

  const removeTask = function (_task) {
    tasks = tasks.filter((e) => e !== _task);
    Projects.saveStorage();
  };

  Project.prototype.toString = function () {};

  const log = function () {
    for (const task of tasks) {
      console.log(
        `Task Name: ${task.getTitle()} \nTask Description: ${task.getDescription()} \nTask Priority: ${task.getPriority()} \n \n `,
      );
    }
  };

  return {
    getTasks,
    getTitle,
    addTask,
    log,
    removeTask,
  };
};

const Projects = (function Projects() {
  let projects = [];
  let projectsStorage = [];

 /* const checkStorage = (() => {
    projectsStorage = JSON.parse(localStorage.getItem('projects'));
  })();

  const loadStorage = () => {
    projects = projectsStorage;
  };

  if (projectsStorage != null) {
    loadStorage();
  }*/

  const saveStorage = () => {
    localStorage.clear();
    for (const project of projects) {
      let projectStorage = [];
      for (const task of project.getTasks()) {
        projectStorage.push(JSON.stringify(task));
      }
      projectsStorage.push(JSON.stringify(projectStorage));
    }
    localStorage.setItem('projects', JSON.stringify(projectsStorage));
  };

  const getProjects = () => projects;

  const newProject = function newProject(projectName) {
    const _project = Project(projectName);
    projects.push(_project);
    saveStorage();
    return _project;
  };

  return {
    newProject,
    getProjects,
    saveStorage,
  };
}());

export { Project, Projects };
