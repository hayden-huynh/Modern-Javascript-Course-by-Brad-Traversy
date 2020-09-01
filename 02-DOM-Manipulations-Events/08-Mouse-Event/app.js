const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click Event
// clearBtn.addEventListener('click', runEvent);

// Double click
// clearBtn.addEventListener('dblclick', runEvent);

// Mouse down
// clearBtn.addEventListener('mousedown', runEvent);

// Mouse up 
// clearBtn.addEventListener('mouseup', runEvent);

// Mouse Enter: triggered whenever the cursor moves into the area of the element
// card.addEventListener("mouseenter", runEvent);

// Mouse leave
// card.addEventListener('mouseleave', runEvent);

// Mouse over: Same as mouse enter but will also triggered if the cursor moves into the area of another element inside the main element
// card.addEventListener('mouseover', runEvent);

// Mouse out: Same as mouse leave but will also triggered if the cursor moves into the area of another element inside the main element
// card.addEventListener('mouseout', runEvent);

// Mouse move: triggered whenever the cursor moves inside the area of the element
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
    e.preventDefault();
    console.log(`Event Type: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}