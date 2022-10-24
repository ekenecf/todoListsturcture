import Task from './taskclass.js';

// eslint-disable-consistent-return
const showPage = (taskList) => {
  const renderPage = document.querySelector('.renderPage');

  renderPage.innerHTML = '';
  taskList.map((task, index) => {
    const compareDateFunction = () => {
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
      console.log('date from local', +DatefromLocal[2]);

      if (+DatefromLocal[0] !== currentDate.getHours()) {
        const hourDiff = currentDate.getHours() - +DatefromLocal[0];
        return hourDiff > 1 ? `${hourDiff} hours ago` : `${hourDiff} hour ago`;
      }
      if (+DatefromLocal[1] !== currentDate.getMinutes()) {
        const minutesDiff = currentDate.getMinutes() - +DatefromLocal[1];
        return minutesDiff > 1 ? `${minutesDiff} Minutes ago` : `${minutesDiff} Minute ago`;
      }
      // if (+DatefromLocal[2] !== currentDate.getSeconds()) {
      //   const secondsDiff = currentDate.getSeconds() - +DatefromLocal[2];
      //   return secondsDiff > 1 ? `${secondsDiff} Seconds ago` : ' a Second ago';
      // }
      // window.location.reload();
      return `${currentDate.getSeconds() - +DatefromLocal[2]} seconds ago`;
    };

    renderPage.innerHTML += `
    <li class="individualtasks"><p class="created_time">createdAt ${compareDateFunction()}</p><input type="checkbox" id= "${index}" ${task.completed ? 'checked' : 'not'}>
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