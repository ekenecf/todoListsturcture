import Task from './taskclass.js';

const showPage = (taskList) => {
  const renderPage = document.querySelector('.renderPage');

  renderPage.innerHTML = '';
  taskList.map((task, index) => {
    renderPage.innerHTML += `
    <li class="individualtasks"><input type="checkbox" class="checkbox"  id= "${index}">
    <input class="entry" id="update${index}" value ="${task.taskEntry}"><span  class="fa-solid fa-ellipsis-vertical fa-lg"></span><span><i class="fa-solid fa-pen-clip"></i></span>
    </li>`;

    const clear = document.querySelectorAll('.fa-solid.fa-ellipsis-vertical.fa-lg');
    clear.forEach((task, index) => task.addEventListener('click', () => Task.delTask(index, taskList)));
    return taskList;
  });
  const clear = document.querySelector('.clear');

  clear.addEventListener('click', () => {
    const checked1 = document.querySelectorAll('input[class=checkbox]');
    if (checked1 === true) {
      Task.delTask(taskList);
    }
  });
};
export default showPage;
