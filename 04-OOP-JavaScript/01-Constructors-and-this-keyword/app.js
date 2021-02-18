// Object Literal
// const brad = {
//   name: 'Brad',
//   age: 30
// }

// Person constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age
  this.birthday = new Date(dob);

  // Member method
  this.getAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// 'this' keyword in global scope refers to the window object
// console.log(this);

// Instantiate a new object
// const brad = new Person('Brad', 36);
// const john = new Person('John', 30);

const brad = new Person('Brad', '05/23/1981');
console.log(brad.getAge());