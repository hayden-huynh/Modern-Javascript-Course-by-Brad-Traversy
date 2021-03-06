// String
const name1 = 'Jeff';

const name2 = new String('Jeff');
name2.foo = "bar";

// Number
const num1 = 5;

const num2 = new Number(5);

// Boolean
const bool1 = true;

const bool2 = new Boolean(true);

// Function 
const getSum1 = function(x, y) {
  return x + y;
}

const getSum2 = new Function('x', 'y', 'return x + y');
// console.log(getSum2(1, 5));

// Object
const john1 = {name: 'John'};

const john2 = new Object({name: 'John'});

// Array
const arr1 = [1, 2, 3, 4];

const arr2 = new Array(1, 2, 3, 4);

// Regular expressions
const re1 = /\w+/;

const re2 = new RegExp('\\w+'); //Backslash needs escaping