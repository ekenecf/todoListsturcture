import Task from './taskclass.js';

const showPage = (taskList) => {
  const renderPage = document.querySelector('.renderPage');

  renderPage.innerHTML = '';
  taskList.map((task, index) => {
    renderPage.innerHTML += `
    <li class="individualtasks"><p class="created_time">created ${Task.compareDateFunction(task)}</p><input type="checkbox" id= "${index}" ${task.completed ? 'checked' : 'not'}>
    <input class="entry" id="update${index}" value ="${task.taskEntry}"><i class="fa fa-trash" aria-hidden="true"></i>
    <span><i class="fa-solid fa-pen-clip"></i></span>
    </li>`;

    const clear = document.querySelectorAll('.fa-trash');
    clear.forEach((task, index) => task.addEventListener('click', () => Task.delTask(index, taskList)));
    const edit = document.querySelectorAll('.fa-solid.fa-pen-clip');
    edit.forEach((edits, index) => edits.addEventListener('click', () => Task.editTask(taskList, index)));
    return taskList;
  });

  const completechecker = () => {
    const checked1 = document.querySelectorAll('input[type=checkbox]');

    checked1.forEach((e) => {
      e.addEventListener('change', () => {
        if (e.checked === true) {
          taskList[e.id].completed = true;
        } else {
          taskList[e.id].completed = false;
        }
        localStorage.setItem('taskDetail', JSON.stringify(taskList));
      });
    });
  };

  const clearAll = document.querySelector('.clear');
  clearAll.addEventListener('click', () => {
    taskList = taskList.filter((t) => !t.completed);
    localStorage.setItem('taskDetail', JSON.stringify(taskList));
    window.location.reload();

    taskList.forEach((taskindex, i) => {
      taskindex.index = i;
      localStorage.setItem('taskDetail', JSON.stringify(taskList));
    });
    window.location.reload();
  });
  completechecker();
};
export default showPage;

// Add created time as property to Taskclass
// when page refreshes fetch createdAt time from local storage
// Pass created time as input to function
// Convert