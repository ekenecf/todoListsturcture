import './style.css';
import Task from './taskclass.js';
import showPage from './renderTask.js';

const addBtn = document.querySelector('.fa-solid.fa-plus.fa-lg');

let taskList = [];
const listInput = document.getElementById('listInput');
taskList = JSON.parse(localStorage.getItem('taskDetail')) || [];
showPage(taskList);

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const putTask = new Task(listInput.value);
  putTask.addTask(taskList);

  listInput.value = '';
  showPage(taskList);
});

const edit = document.querySelectorAll('.fa-solid.fa-pen-clip');
edit.forEach((edits, index) => edits.addEventListener('click', () => Task.editTask(taskList, index)));