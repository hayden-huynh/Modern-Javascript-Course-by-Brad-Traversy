// ========================================================

// Set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// Set session storage item
// sessionStorage.setItem('name', 'Beth');

// Remove from storage
// localStorage.removeItem('name');

// Get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// Clear local storage
// localStorage.clear();

// console.log(name, age);

// ========================================================

taskInputButton = document.querySelector('.btn');
taskInputField = document.querySelector('#task');

taskInputButton.addEventListener('mouseup', (e) => {
  const task = document.getElementById('task').value;

  // Check if any tasks already in local storage and load them out
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  // Add new task to array of existing tasks
  tasks.push(task)

  // Persist into localStorage the array of tasks with the new task added
  localStorage.setItem('tasks', JSON.stringify(tasks));
  // alert('Task saved');
  e.preventDefault();
})

taskInputButton.addEventListener('click', (e) => {
  taskInputField.value = '';
  e.preventDefault();
})

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(element => {
  console.log(element);
});
