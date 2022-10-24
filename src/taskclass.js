function checkdate() {
  const currentTime = new Date();
  return currentTime;
  // console.log("Time of creation", task.createdAt)
  // new Date(Date.parse(s))
}
checkdate();

export default class Task {
  constructor(taskEntry) {
    this.taskEntry = taskEntry;
    this.completed = false;
    this.index = 0;
    this.createdAt = new Date().toString().slice(4, 24);
  }

  static compareDate() {
    // fetch createdAt prop of a particular task from local storage

  }

  addTask(taskList) {
    const myTask = new Task(this.taskEntry);
    myTask.index = taskList.length;
    taskList.push(myTask);
    localStorage.setItem('taskDetail', JSON.stringify(taskList));
  }

  static delTask(index, taskList) {
    taskList = taskList.filter((tasks, i) => index !== i);
    localStorage.setItem('taskDetail', JSON.stringify(taskList));
    window.location.reload();
    taskList.forEach((taskindex, i) => {
      taskindex.index = i;
      localStorage.setItem('taskDetail', JSON.stringify(taskList));
    });
  }

  static editTask(taskList, index) {
    taskList[index].taskEntry = document.getElementById(`update${index}`).value;
    localStorage.setItem('taskDetail', JSON.stringify(taskList));
  }
}
