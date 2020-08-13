// ===== Global Scope =====
var a = 1;
let b = 2;
const c = 3;

// ===== Inside a function =====
// function test() {
//     // Local Scope
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('Function Scope: ', a, b, c);
// }
// test();

// ===== Inside a block =====
// if (true) {
//     // Block Scope
//     var a = 4; // Although a was re-declared here, it is actually the same a in the global scope; hence, the value of a in the global scope is modified accordingly
//     let b = 5;
//     const c = 6;
//     console.log('If Scope: ', a, b, c);
// }
for(let a = 0; a < 10; a++) {
    console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c);