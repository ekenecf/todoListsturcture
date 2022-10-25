export default class Task {
  constructor(taskEntry) {
    this.taskEntry = taskEntry;
    this.completed = false;
    this.index = 0;
    this.createdAt = new Date().toString().slice(4, 24);
  }

  static compareDateFunction(task) {
    const currentDate = new Date();
    const splitcreatedAt = task.createdAt.split(' ');

    if (+splitcreatedAt[2] !== currentDate.getFullYear()) {
      const yearDiff = currentDate.getFullYear() - +splitcreatedAt[2];
      return yearDiff > 1 ? `${yearDiff} Years ago` : `${yearDiff} Year ago`;
    }
    const dateOfMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (dateOfMonth.indexOf(splitcreatedAt[0]) !== currentDate.getMonth()) {
      const dateDifference = currentDate.getMonth() - dateOfMonth.indexOf(splitcreatedAt[0]);
      return dateDifference > 1 ? `${dateDifference} Months ago` : `${dateDifference} Month ago`;
    }
    if (+splitcreatedAt[1] !== currentDate.getDate()) {
      const dayDiff = currentDate.getDate() - +splitcreatedAt[1];
      return dayDiff > 1 ? `${dayDiff} days ago` : `${dayDiff} day ago`;
    }
    const DatefromLocal = splitcreatedAt[3].split(':');
    if (+DatefromLocal[0] !== currentDate.getHours()) {
      const hourDiff = currentDate.getHours() - +DatefromLocal[0];
      return hourDiff > 1 ? `${hourDiff} hours ago` : `${hourDiff} hour ago`;
    }
    if (+DatefromLocal[1] !== currentDate.getMinutes()) {
      const minutesDiff = currentDate.getMinutes() - +DatefromLocal[1];
      return minutesDiff > 1 ? `${minutesDiff} Minutes ago` : `${minutesDiff} Minute ago`;
    }
    const secondsDiff = currentDate.getSeconds() - +DatefromLocal[2];
    return secondsDiff > 1 ? `${secondsDiff} Seconds ago` : ' a Second ago';
  };

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
