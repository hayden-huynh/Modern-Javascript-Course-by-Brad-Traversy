const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading  = document.querySelector('h5');
const select = document.querySelector('select')

taskInput.value = ''; // Clear the input field. Run after form submit to clear form

// form.addEventListener('submit', runEvent);


/**
 * Keydown
*/
// taskInput.addEventListener('keydown', runEvent);

/**
 * Keyup
*/
// taskInput.addEventListener('keyup', runEvent);

/** 
 * Keypress
*/
// taskInput.addEventListener('keypress', runEvent);

/** 
 * Focus: Click into an input field
*/
// taskInput.addEventListener('focus', runEvent);

/** 
 * Blur: Click out of an input field
*/
// taskInput.addEventListener('blur', runEvent);

/** 
 * Cut
*/
// taskInput.addEventListener('cut', runEvent);

/** 
 * Paste
*/
// taskInput.addEventListener('paste', runEvent);

/** 
 * Input: triggered on any type of input events
*/
// taskInput.addEventListener('input', runEvent);

/** 
 * Change
*/
select.addEventListener('change', runEvent);

/**
 * runEvent function for handling form event
*/
// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);
//   console.log(taskInput.value);
//   e.preventDefault(); // Prevent html page from reloading
// }

/**
 * runEvent function for handling input element event
*/
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  console.log(e.target.value); // Log every key typed
  // heading.innerText = e.target.value;
}

