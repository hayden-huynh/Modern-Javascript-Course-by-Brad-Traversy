// ===== Function Declaration =====
function greet(firstName = "John", lastName = "Doe") {

    // ES5 approach for setting default arg values
    // if (typeof firstName === 'undefined') {
    //     firstName = 'John';
    // } 
    // if (typeof lastName === 'undefined') {
    //     lastName = 'Doe';
    // }

    // console.log("Hello");
    return "Hello " + firstName + " " + lastName;
}

// console.log(greet("Steve", "Smith"));

// ===== Function Expressions =====
const square = function(x = 3) {
    return Math.pow(x, 2);
};
// console.log(square(7));

// ===== Immediately Invokable Function Expressions - IIFEs =====
// These functions can be declared and run at the same time
(function(name){
    console.log("Hello " + name);
})("Brad");

// ===== Property Methods =====
const todo = {
    add: function() {
        console.log("Add todo...");
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function() {
    console.log("Delete todo...");
}

todo.add();
todo.edit(22);
todo.delete();