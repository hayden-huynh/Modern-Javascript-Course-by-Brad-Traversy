let re;
re = /hello/; // Regular Express Literal - A pattern to be matched against
re = /hello/i; // i flag - case insensitive
// re = /hello/g; // g flag - global i.e. looks for all available matching instances

// console.log(re);
// console.log(re.source);

// exec() - Return results in an array or null if there is no matching
const result = re.exec("hello world"); // Returns the array [the matching string, index: starting index, input: input argument]
console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// test() - Returns true or false. Checks if there are any matches
const result = re.test('Hello'); 
console.log(result);

// match() - Return results in an array or null if there is no matching
const str = "Hello There";
const result = str.match(re);
console.log(result);

// search() - Returns index of the first match or -1 if there is no matching
const str = "Hello There";
const result = str.search(re);
console.log(result);

// replace() - Returns a new string with matches replaced by the second argument
const str = "Hello There";
const newStr = str.replace(re, "Hi");
console.log(newString);