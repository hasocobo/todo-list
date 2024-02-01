import { Projects } from './project';

const showTasks = function (project) {
  const taskContent = document.querySelector('.task-content');
  const newTask = document.querySelector('#add-task');
  while (taskContent.firstChild) {
    taskContent.removeChild(taskContent.lastChild);
  }

  for (const _task of project.getTasks()) {
    const task = document.createElement('div');
    const title = document.createElement('div');
    const iconContainer = document.createElement('div');
    const materialIcons = document.createElement('div');
    const h3 = document.createElement('h3');
    const descPanel = document.createElement('div');

    descPanel.classList.add('description-panel');
    descPanel.classList.add('disabled');

    taskContent.classList.add('task-content');

    task.classList.add('task');
    title.classList.add('title');

    iconContainer.classList.add('icon-container');

    materialIcons.classList.add('material-icons');
    materialIcons.textContent = 'delete';

    h3.textContent = _task.getTitle();
    descPanel.textContent = _task.getDescription();

    taskContent.appendChild(task);
    task.appendChild(title);
    task.insertAdjacentElement('afterend', descPanel);
    title.appendChild(h3);
    title.appendChild(iconContainer);
    iconContainer.appendChild(materialIcons);

    task.addEventListener('click', () => {
      descPanel.classList.toggle('disabled');
    });

    iconContainer.addEventListener('click', () => {
      project.removeTask(_task);
      showTasks(project);
    });
  }

  taskContent.appendChild(newTask);
};

const showProjects = function (projects) {
  const sideBar = document.querySelector('.sidebar');
  const addNewButton = document.querySelector('#new-project');

  while (sideBar.firstChild) {
    sideBar.removeChild(sideBar.lastChild);
  }

  sideBar.appendChild(addNewButton);

  for (const project of projects.getProjects()) {
    const projectDOM = document.createElement('div');
    const paddingSB = document.createElement('div');
    const projectTitle = document.createElement('h2');

    projectDOM.classList.add('project');
    paddingSB.classList.add('padding-sb');

    projectTitle.textContent = project.getTitle();

    sideBar.insertBefore(projectDOM, addNewButton);
    projectDOM.appendChild(paddingSB);
    paddingSB.appendChild(projectTitle);

    projectDOM.addEventListener('click', () => {
      showTasks(project);
    });
  }
};

const addProject = (function () {
  const addNewButton = document.querySelector('#new-project');
  const inputField = document.querySelector('input#add-project');
  const confirmButton = document.querySelector('#confirm-button');
  const cancelButton = document.querySelector('#cancel-button');
  const projectContent = document.querySelector(
    '#new-project .project-content',
  );
  const form = document.querySelector('.sidebar form');

  projectContent.addEventListener('click', () => {
    projectContent.classList.toggle('hide');
    form.classList.toggle('hide');
  });

  confirmButton.addEventListener('click', () => {
    Projects.newProject(inputField.value);
    showProjects(Projects);
    projectContent.classList.toggle('hide');
    form.classList.toggle('hide');
    inputField.value = '';
  });

  cancelButton.addEventListener('click', () => {
    projectContent.classList.toggle('hide');
    form.classList.toggle('hide');
  });

  // projectContent.classList.toggle('hide');
}());

export { showProjects, showTasks };
