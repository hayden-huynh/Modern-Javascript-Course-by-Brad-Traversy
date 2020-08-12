const num1 = 100;
const num2 = 50;

// Simple math with numbers
// Short-hand operators like +=, -=, *=, /=, %= work fine
let val1;
val1 = num1 + num2;
val1 = num1 - num2;
val1 = num1 * num2;
val1 = num1 / num2;
val1 = num1 % num2;
console.log(val1 + "\n\n\n");

// Math Object
let val2;
val2 = Math.PI;
val2 = Math.E;
val2 = Math.round(2.4);
val2 = Math.ceil(2.3);
val2 = Math.floor(2.8);
val2 = Math.sqrt(64);
val2 = Math.abs(-3);
val2 = Math.pow(8, 2);
val2 = Math.min(2, 33, 4, 1, 55, 6, 3, -2);
val2 = Math.max(2, 33, 4, 1, 55, 6, 3, -2);
val2 = Math.random(); // Always returns a random number lower than 1
val2 = Math.floor(Math.random() * 20) + 1; // Returns a random number between 1 and 20
console.log(val2 + "\n\n\n")
