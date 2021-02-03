/** 
 * Event Bubbling: Event of an element is passed up to its
 * ancestors
 * Event delegation: Event of an element is passed down to its
 * descendants
*/

// ============ EVENT BUBBLING ============
// because the events of these classes are triggered with the same event 'click', clicking on .card-title will also trigger the events of its ancestors, despite not clicking on any of those

// document.querySelector('.card-title').addEventListener('click', function() {
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function() {
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function() {
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function() {
//   console.log('col');
// });

// ============ EVENT DELEGATION ============

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem)

function deleteItem(e) {
  // In this way, must provide full and matching class name => 
  // Breaks if some elements get their class names added something
  // if (e.target.parentElement.className === 'delete-item secondary-content') {
  //   console.log('delete item');
  // }

  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }

}