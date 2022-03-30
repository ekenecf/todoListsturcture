import './style.css';

const renderPage = document.querySelector('.renderPage');

const taskList = [
  { id: 0, description: 'go to the moon', completed: false },
  { id: 1, description: 'Eat breakfast', completed: true },
  { id: 2, description: 'Go to the gym', completed: false },
  { id: 3, description: 'Go on vacation', completed: true },
  { id: 4, description: 'Sleeping time', completed: false },
];
renderPage.innerHTML = '';
taskList.map((task) => {
  taskList.sort((a, b) => a - b);
  renderPage.innerHTML += `
    <li class="individualtasks" id= ${task.id}> <span class= "indtsk"><input type="checkbox" ${task.completed ? 'checked' : 'unchecked'}>
    <span>${task.description}</span></span><span class="fa-solid fa-ellipsis-vertical fa-lg"></span>
    </li>`;
  return task;
});
