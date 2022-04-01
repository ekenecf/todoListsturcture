export default class Task {
  constructor(taskEntry) {
    this.taskEntry = taskEntry;
    this.completed = false;
  }

  addTask(taskList) {
    const myTask = new Task(this.taskEntry);
    taskList.push(myTask);
    localStorage.setItem('taskDetail', JSON.stringify(taskList));
  }

  static delTask(index, taskList) {
    taskList = taskList.filter((tasks, i) => index !== i);
    localStorage.setItem('taskDetail', JSON.stringify(taskList));
    window.location.reload();
  }

  static editTask(taskList, index) {
    taskList[index].taskEntry = document.getElementById(`update${index}`).value;
    localStorage.setItem('taskDetail', JSON.stringify(taskList));
  }
}