// ===== document.getElementsByClassName: Returns a HTMLCollection of all elements that have the specified class =====
// const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[0]);

// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// Get all elements with given class name that are sub-elements of another element 
// const listItems = document.querySelector('ul').getElementsByClassName("collection-item");
// console.log(listItems);

// ===== document.getElementsByTagName =====
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// ===== Convert HTMLCollection into Array to use Array functions =====
// lis = Array.from(lis);
// lis.reverse();

// console.log(lis);

// lis.forEach(function(li, index) {
//     console.log(li.className);
//     // li.textContent = "Hello";
//     li.textContent = `${index}: Hello`;
// })

// ===== document.querySelectorAll: Returns a NodeList that can use Array functions without the need to convert like HTMLCollection =====
const nodeList = document.querySelectorAll('ul.collection li.collection-item');

nodeList.forEach(function(item, index) {
    item.textContent = `${index}: Hello`;
})  

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index) {
    li.style.background  = '#ccc';
});

for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = "#f4f4f4";
} 

console.log(nodeList);

