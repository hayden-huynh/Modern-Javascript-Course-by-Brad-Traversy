// ========== Type Conversion ==========

// Number to String
let val1;
val1 = String(555);
val1 = String(4+4);
console.log(val1);
console.log(typeof val1);
console.log(val1.length + "\n\n\n");

// Bool to String
let val2;
val2 = String(true);
console.log(val2);
console.log(typeof val2);
console.log(val2.length + "\n\n\n");

// Date to String
let val3;
val3 = String(new Date());
console.log(val3);
console.log(typeof val3);
console.log(val3.length + "\n\n\n");

// Array to String
let val4;
val4 = String([1, 2, 3, 4]);
console.log(val4);
console.log(typeof val4);
console.log(val4.length + "\n\n\n");

// toString() method
let val5;
// val5 = (5).toString();
val5 = (true).toString();
console.log(val5);
console.log(typeof val5);
console.log(val5.length + "\n\n\n");

// Numerical String to Number
let val6;
val6 = Number('5.1234');
console.log(val6);
console.log(typeof val6);
console.log(val6.toFixed(2) + "\n\n\n"); // toFixed(): set number of digits after decimal point

// Bool to Number
let val7;
val7 = Number(true);
console.log(val7);
console.log(typeof val7);
console.log(val7.toFixed(2) + "\n\n\n");

let val8;
val8 = Number(false);
console.log(val8);
console.log(typeof val8);
console.log(val8.toFixed(2) + "\n\n\n");

// Null to Number
let val9;
val9 = Number(null);
console.log(val9);
console.log(typeof val9);
console.log(val9.toFixed(2) + "\n\n\n");

// Non-numerical String to Number
let val10;
// val10 = Number('hello');
val10 = Number([1, 2, 3]);
console.log(val10);
console.log(typeof val10);
console.log(val10.toFixed(2) + "\n\n\n");

// parseInt and parseFloat
let val11;
val11 = parseInt('100');
console.log(val11);
console.log(typeof val11);
console.log(val11.toFixed(2) + "\n\n\n");

let val12;
val12 = parseFloat('100.75');
console.log(val12);
console.log(typeof val12);
console.log(val12.toFixed(2) + "\n\n\n");

// ========== Type Coercion ==========
// JavaScript automatically converts the types of variables as we perfom operations on them

const var1 = String(5);
const var2 = 6;
const sum = var1 + var2;
console.log(sum);
console.log(typeof sum);

