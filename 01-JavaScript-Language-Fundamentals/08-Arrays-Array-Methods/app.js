// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5]; // Literal
const numbers2 = new Array(22, 45 ,33, 76, 54); // Constructor
const fruit = ['Apples', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

let val;

// Get Array Length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers);

// Get a single value
val = numbers[2];
val = numbers[0];

// Modify array element
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(36);

// ===== Mutating the array =====

// // Add to the end
// numbers.push(250);

// // Add to the front
// numbers.unshift(120);

// // Take off from end
// numbers.pop();

// // Take off from front
// numbers.shift();

// // Splice values: start (param1), number of element to delete (parem2)
// numbers.splice(1,3);

// // Reverse 
// numbers.reverse();

// // Concatenate array
// val = numbers.concat(numbers2);

// // Sorting arrays
// val = fruit.sort();
// val = numbers.sort();

// // compare() function
// // Ascending
// val = numbers.sort(function(x, y) {
//     return x - y;
// })
// // Descending
// val = numbers.sort(function(x, y) {
//     return y - x;
// })

// Find
function under50(num) {
    return num < 50;
}

val = numbers.find(under50); // Returns the first value that makes the function return true

console.log(numbers);
console.log(val);