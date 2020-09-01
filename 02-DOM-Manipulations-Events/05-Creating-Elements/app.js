// ========== Creating the li element ==========
// Create the element
const li = document.createElement('li');

// Add class
li.className = 'collection-item'

// Add ID
li.id = 'new-item'

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
// appendChild means put something into something. In this case, we put text into the li element
li.appendChild(document.createTextNode('Hello World'));

// ========== Creating the link element ==========
// Create new link element
const link = document.createElement('a');

// Add class
link.className = "delete-item secondary-content";

// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// ========== Adding elements to the document ==========
// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);
