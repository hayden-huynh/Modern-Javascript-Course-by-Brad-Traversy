// =========== Replacing element ===========

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));
// Get the old heading
const oldHeading = document.getElementById('task-title');
// Get the parent of the heading
const cardAction = document.querySelector('.card-action');
// Replace the old heading with the new heading
cardAction.replaceChild(newHeading, oldHeading);

// ========== Remove Element ==========
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove a list item
lis[0].remove(); // Remove the first list item

// Remove child from parent
list.removeChild(lis[3]);

// ========== Classes and Attributes ==========
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
link.setAttribute('href', 'https://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;


console.log(val);