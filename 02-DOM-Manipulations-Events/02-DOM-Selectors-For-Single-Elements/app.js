// If we use Single Element Selector on a class/element type that appears many times throughout the document, only the first occurrence of that class (in an element) will be accessed

// ===== Get element by id: document.getElementById() =====
console.log(document.getElementById("task-title"));

// Get things from the element
console.log(document.getElementById("task-title").id);
console.log(document.getElementById("task-title").className);

const taskTitle = document.getElementById('task-title');

// Change stylings
taskTitle.style.background = "#333";
taskTitle.style.color = "#fff";
taskTitle.style.padding = "5px";
// taskTitle.style.display = "none";

// Change content
taskTitle.textContent = "Task List";
taskTitle.innerText = "My Tasks";
taskTitle.innerHTML = "<span style='color: red'>Task List</span>";

// ===== document.querySelector(): Select the element using anything =====

console.log(document.querySelector('#task-title')); // Get by id
console.log(document.querySelector('.card-title')); // Get by class
console.log(document.querySelector('h5')); // Get by element type

document.querySelector('li').style.color = 'red'; //Only the first li is affected
document.querySelector('ul li').style.color = 'blue';

// Utilizing CSS Pseudo-classes
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'green';
document.querySelector('li:nth-child(4)').textContent = 'Hello World!';
document.querySelector('li:nth-child(odd)').style.background = '#ccc'; // Only the first odd element is affected
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4'; // Only the first even element is affected




