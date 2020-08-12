// if (something) {
//     do something
// } else if (something) {
//     do something
// } else {
//     do something
// }

const id = 100;

// Equal To
// Assignment returns the value that is assigned
if (id == 101) {
    console.log("Correct");
} else {
    console.log("Incorrect");
}

// Not Equal To
if (id != 101) {
    console.log("Correct");
} else {
    console.log("Incorrect");
}

// Equal To Value AND Type
if (id === 100) {
    console.log("Correct");
} else {
    console.log("Incorrect");
}

// Not Equal To Value OR Type
if (id !== 100) {
    console.log("Correct");
} else {
    console.log("Incorrect");
}

// Check If Is Defined
if (typeof id !== "undefined") {
    console.log(`The ID is ${id}`);
} else {
    console.log('NO ID');
}

// Comparison Operators: >, <, <=, >=
if (id > 200) {
    console.log("Correct");
} else {
    console.log("Incorrect");
}

// If Else 
const color = 'yellow';

if (color === 'red') {
    console.log('Color is red');
} else if (color === 'blue') {
    console.log('Color is blue');
} else {
    console.log(`Color is actually ${color}`)
}

// Logical Operators
const name = "Steve";
const age = 20;

// And &&
if (age > 0 && age <= 12) {
    console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

// Or ||
if (age < 16 || age > 65) {
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registered for the race`)
}

// Ternary Operator
console.log(id === 100 ? 'Correct' : 'Incorrect');