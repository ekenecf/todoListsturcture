import Task from './taskclass.js';

const showPage = (taskList) => {
  const renderPage = document.querySelector('.renderPage');

  renderPage.innerHTML = '';
  taskList.map((task, index) => {
    renderPage.innerHTML += `
    <li class="individualtasks"><input type="checkbox" id= "${index}" ${task.completed ? 'checked' : 'not'}>
    <input class="entry" id="update${index}" value ="${task.taskEntry}"><span  class="fa-solid fa-ellipsis-vertical fa-lg"></span><span><i class="fa-solid fa-pen-clip"></i></span>
    </li>`;

    const clear = document.querySelectorAll('.fa-solid.fa-ellipsis-vertical.fa-lg');
    clear.forEach((task, index) => task.addEventListener('click', () => Task.delTask(index, taskList)));
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
    const checked1 = document.querySelectorAll('input[class=checkbox]:checked');
    checked1.forEach((row) => {
      const x = row.parentNode;
      const c1 = x.querySelector('.checkbox').id;
      taskList = taskList.filter((currentlist) => currentlist.index !== Number(c1));
      localStorage.setItem('taskDetail', JSON.stringify(taskList));
    });

    taskList.forEach((taskindex, i) => {
      taskindex.index = i;
      localStorage.setItem('taskDetail', JSON.stringify(taskList));
    });
    window.location.reload();
  });
  completechecker();
};

export default showPage;
