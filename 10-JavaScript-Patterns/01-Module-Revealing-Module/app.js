// Basic Structure

// (function() {
//   // Declare private vars and functions i.e. cannot access outside of the module
  
//   return {
//     // Declare public vars and functions
//   }
// })();

// ========== STANDARD MODULE PATTERN ==========
// Can include more execution inside the public functions
const UICtrl = (function() {
  let text = 'Hello World';

  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    }
  };
})();

UICtrl.callChangeText();
// UICtrl.changeText(); // Error 
// console.log(UICtrl.text); // Error

// ========== REVEALING MODULE PATTERN ==========
// Usually not including anything else in the public vars/funcs but rather just revealing them to be accessible
const ItemCtrl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item Added...');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    })
  }

  return {
    add: add,
    get: get
  }
})();

ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Mark'});
console.log(ItemCtrl.get(2));