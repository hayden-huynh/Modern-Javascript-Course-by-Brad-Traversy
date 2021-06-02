// Destructuring Array Literals
let a, b;
[a, b] = [100, 200];
console.log(a, b);

// Expand operator ...
[a, b, ...remaining] = [1, 2, 3, 4, 5];
console.log(a, b, remaining);

// Destructuring Object Literals - Extract specific properties from object
({a, b} = {a: 1, b: 2, c: 3, d: 4, e: 5});
console.log(a, b);
({a, b, ...remaining} = {a: 1, b: 2, c: 3, d: 4, e: 5});
console.log(a, b, remaining);

// Array Destructuring - Brad's example
const people = ['John', 'Beth', 'Mike'];
const [person1, person2, person3] = people;
console.log(person1, person2, person3);

// Parse array returned from function
// function getPeople() {
//   return ['John', 'Beth', 'Mike'];
// }
// let [person1, person2, person3] = getPeople();
// console.log(person1, person2, person3);

// Object Destructuring - Brad's example
const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello: function() {
    console.log('Hello');
  }
}

// Old ES5
// const name = person.name, age = person.age, city  = person.city;

// New ES6
const {name, age, city, sayHello} = person;
console.log(name, age, city);
sayHello();
