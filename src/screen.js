const showTasks = function(tasks) {
    const taskContent = document.querySelector('.task-content');
    while(taskContent.firstChild){
      taskContent.removeChild(taskContent.lastChild);
    }
    
    
    for (const _task of tasks) {
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
  }


}

const showProjects = function(projects) {
    const sideBar = document.querySelector('.sidebar');
    const addNewButton = document.querySelector('#new-project');

    for(const project of projects) {

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
          showTasks(project.getTasks());
        })
    }
    
    


}


export {showProjects, showTasks};


/**
 *               <div class="task-content">
 *                   <div class="task">
                    <div class="title">
                      <h3>learn russian</h3>
                      <div class="icon-container">
                        <div class="material-icons">delete</div>
                      </div>
                    </div>
                  </div>
 * 
 * 
 * 
 * 
 */