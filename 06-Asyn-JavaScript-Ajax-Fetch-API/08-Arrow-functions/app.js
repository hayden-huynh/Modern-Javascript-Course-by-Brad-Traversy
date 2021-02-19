// const sayHello = function() {
//   console.log('Hello');
// }

// const sayHello = () => {
//   console.log('Hello');
// }

// One-line functions do not need braces
// const sayHello = () => console.log('Hello');

// Returning something
// const sayHello = () => 'Hello';

// To return object literals, wrap them inside parentheses
// const sayHello = () => ({msg: 'Hello'});

// With parameters - Single param does not need parentheses
// const sayHello = name => console.log(`Hello ${name}`);

// sayHello('Brad'); 


const users = ['Nathan', 'John', 'William'];

// Single param no need for parenthese and single-line function body no need braces
const nameLengths = users.map(name => name.length);

console.log(nameLengths);