const Task = function (
  _title = "",
  _description = "",
  _dueDate = "",
  _priority = 0,
) {
  let title = _title,
    description = _description,
    dueDate = _dueDate,
    priority = _priority,
    isComplete = false;

  const changeCompletion = () => {
    isComplete = !isComplete;
  };

  const getTitle = () => title;

  const getDescription = () => description;

  const getDueDate = () => dueDate;

  const getPriority = () => priority;

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
  };
};

export default Task;
