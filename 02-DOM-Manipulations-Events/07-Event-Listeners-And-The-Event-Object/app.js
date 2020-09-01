// ========== Un-named Function ==========
// document.querySelector('.clear-tasks').addEventListener('click', function(e) {
//     console.log('Hello World'); // "Hello World" appears then disappears real quick because the page is re-directed somewhere else. In this case, "href" is empty so the page is reloaded.

//     // e is an Event Object passed to the function
//     // preventDefault: prevent the default behavior from happening
//     e.preventDefault();
// }) 

// ========== Named Function ==========
document.querySelector('.clear-tasks').addEventListener('click', onClick)

function onClick(e) {
    // console.log('Hello World'); 
    
    e.preventDefault();

    let val;
    
    // Event target element
    val = e; // The Event Object
    val = e.target; // The element which the event is linked to
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;
    e.target.innerText = "Hello";

    // Event type
    val = e.type;

    // Timestamp
    val = e.timeStamp;

    // Coords event relative to the window
    val = e.clientY; // position on y axis
    val = e.clientX; // position on x axis

    // Coords event relative to the element i.e. the spot at which the cursor clicks
    // val = e.offsetY;
    val = e.offsetX;

    console.log(val);
}