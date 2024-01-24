const Project = function(..._tasks) {
    let tasks = _tasks;

    const getTasks = function() {
        return tasks;
    }

    const addTask = function(_task) {
        tasks.push(_task);
    }

    Project.prototype.toString = function() {

    }

    const log = function() {
        for(const task of tasks) {
            console.log(`Task Name: ${task.getTitle()} \nTask Description: ${task.getDescription()} \nTask Priority: ${task.getPriority()} \n \n `)
        }
    }

    return {
        getTasks,
        addTask,
        log
    }
}

export default Project;