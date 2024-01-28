const Project = function(_title = "", ..._tasks) {
    let tasks = _tasks;
    let title = _title;
    
    const getTasks = () => tasks;
    const getTitle = () => title;

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
        getTitle,
        addTask,
        log
    }
}

export default Project;