// var, let, const
// let and const are now fully supported in the browsers so we will stay away from var after this lecture

var name = 'John Doe';
console.log(name);

// ===== Re-assignment =====
name = 'Steve Smith';
console.log(name);

// ===== Initialize a var =====
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

/* ===============
* A variable name should only include: letters, numbers, _ (underscores) and $ (dollar sign)
* Variable names CANNOT start with a number
=============== */ 

// ===== Multi-word variable names =====

// Camel Case
var firstName = 'John';

// Underscore
var first_name = 'Sara';

// Pascal Case
var FirstName = 'Tom';

// ===== let (similar to var) =====
let color = 'White';
console.log(name);
name = 'Black';
console.log(name);

// ===== const (Constant) =====
// const animal; // Error: Not initialized yet 
const animal = 'Cat'; // Must be initialized at time of creation 
// animal = 'Dog'; //Cannot re-assign
console.log(animal);

// Object
// The attributes of a const object are not constant so they can change
// The object itself is the one that cannot be re-assigned
const person = {
    name: 'John',
    age: 30
}
person.name = 'Sara';
person.age = 32;
// This re-assignment will cause an error
// person = {
//     animal = 'Cat',
//     name = 'Fred'
// }
console.log(person);

// Array
// Same case as Objects i.e. contents can change but cannot be re-assigned
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);