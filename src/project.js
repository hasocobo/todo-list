/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
const Project = function (_title = "", ..._tasks) {
  let tasks = _tasks;
  let title = _title;

  const getTasks = () => tasks;
  const getTitle = () => title;

  const addTask = function (_task) {
    tasks.push(_task);
  };

  const removeTask = function (_task) {
    tasks = tasks.filter((e) => e !== _task);
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
  const projects = [];

  const newProject = function newProject(projectName) {
    const _project = Project(projectName);
    projects.push(_project);
    return _project;
  };

  const getProjects = () => projects;

  return {
    newProject,
    getProjects,
  };
}());

export { Project, Projects };
