const sym1 = Symbol();
const sym2 = Symbol('sym2');

console.log(sym1);
console.log(sym2);
console.log(typeof sym2);

// Each symbol is unique -> Good use for identifier
console.log(Symbol() === Symbol()); //false
console.log(Symbol('123') === Symbol('123')); // false
console.log(`Hello ${String(sym1)}`);
console.log(`Hello ${sym1.toString()}`);

// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {}

myObj[KEY1] = 'Prop1'; // Use the symbol as the name of the property
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

console.log(myObj);
console.log(myObj[KEY1]);
console.log(myObj[KEY2]);

// Symbols are not iterable in for...in loop
for (let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
}

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));