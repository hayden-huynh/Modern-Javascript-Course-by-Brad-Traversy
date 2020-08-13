let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item');

val = listItem;
val = list;

// ===== Get Child nodes (as a NodeList) of an element =====
// The returned NodeList contains a child of type text. These are the line breaks between the li element.
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;

val = list.childNodes[1].nodeType;
/* Different node types
* 1 - Element
* 2 - Attribute (deprecated)
* 3 - Text node
* 8 - Comment
* 9 - Document itself
* 10 - Doctype
*/

// ===== Get children element nodes (as a HTMLCollection). This will ignore the text nodes =====
val = list.children;
val = list.children[0];
list.children[1].textContent = "Hello";

// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// Get the first child from the .childNodes NodeList
val = list.firstChild;

// Get the first child from the .children HTMLCollection
val = list.firstElementChild;

// Get the last child from the .childNodes NodeList
val = list.lastChild;

// Get the last child from the .children HTMLCollection
val = list.lastElementChild;

// Count the number of children element
val = list.childElementCount;

// ===== Get Parent Node =====
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement; // Get parent of parent

// ===== Get next/previous sibling =====
// Next node in the .childNodes NodeList
val = listItem.nextSibling;

// Next element in the .children HTMLCollection
val = listItem.nextElementSibling;

// Previous node in the .childNodes NodeList
val = listItem.previousSibling;

// Previous element in the .children HTMLCollection
val = listItem.previousElementSibling;


console.log(val);