let val;
// ===== Attributes of the document object =====
// Whole original content of the document
val = document;

// HTMLCollection of all elements in the document
val = document.all; 

// Accessing single element
val = document.all[0];

// Element count
val = document.all.length;

// Accessing head element
val = document.head;

// Accessing the doctype
val = document.doctype;

// Accesing the domain
val = document.domain;

// Accessing the URL
val = document.URL;

// Accessing the character set
val = document.characterSet;

// Accessing the content type
val = document.contentType;

// ===== Select elements without Selectors =====
// HTMLCollection of all form elements in the whole document
val = document.forms; 
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].action;

// HTMLCollection of all link elements in the whole document
val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;
val = document.links[0].classList[0];

// HTMLCollection of all image elements in the whole document
val = document.images;

// HTMLCollection of all script elements in the whole document
val = document.scripts;
val = document.scripts[2].getAttribute('src');

console.log(val);
console.log('\n\n\n');

// Transform a HTMLCollection to an Array to use forEach
let scripts = document.scripts;
let scriptsArr = Array.from(scripts);
scriptsArr.forEach(function(script) {
    console.log(script.getAttribute('src'));
})
