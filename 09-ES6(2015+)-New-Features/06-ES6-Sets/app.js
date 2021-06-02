// SETS - Store unique values of any types. No values can repeat twice

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A String');
set1.add({name: 'John'});
set1.add(true);
set1.add(100); // Has no effect as there is already 100 inside
console.log(set1);

const set2 = new Set([1, true, 'string']);
console.log(set2);

// Size of set
console.log(set1.size);

// Check if value exists inside
console.log(set1.has(100));
console.log(set1.has(50 + 50));
console.log(set1.has({name: 'John'})); // Not the exact same object stored at the same place

// Delete from set
set1.delete(100);
console.log(set1);

// ========== ITERATING THROUGH SETS ==========
// for...of loop
for (let item of set1) {
  console.log(item);
}

// forEach loop
set1.forEach((value) => {
  console.log(value);
});

// ========== CONVERTING INTO ARRAY ==========
const setArr = Array.from(set1);
console.log(setArr);

