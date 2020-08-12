const firstName = "William";
const lastName = "Johnson";
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = "Brad ";
val += 'Traversy';

val = "Hello, my name is " + firstName + " and I am " + age;

// Escaping
val = 'That\'s awesome, I can\'t wait.'

// Length
val = firstName.length;

// concat Function
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Accessing Array Element
val = firstName[0];

// indexOf(): Get the index value of a char inside the string
// If the char is not found, -1 is returned
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l'); // Traverse from right to left

// charAt(): Get the char at a particular index
val = firstName.charAt(2);

// Get last character
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice(): quite similar to substring
val = firstName.slice(0,4);
val = firstName.slice(-3); // Start from right end if negative value is given

// split(): returns an array of substrings splitted by the specified char
val = str.split(' ');
val = tags.split(',');

// replace(): searches for first param and replaces it with second param
val = str.replace('Brad' , 'Jack');

// includes(): checks if something is in the string
val = str.includes('Hello');
val = str.includes('foos');

console.log(val);