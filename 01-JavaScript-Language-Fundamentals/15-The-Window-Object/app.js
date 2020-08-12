// Window Methods / Objects / Properties

// ===== Alert =====
// window.alert('Hello World!');

// ===== Prompt =====
// const input = prompt();
// alert(input);

// ===== Confirm =====
// if (confirm("Are you sure?")) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// ===== Window Dimensions / Location Info =====
let val;
// Outer height and width
val = window.outerHeight;
val = window.outerWidth;

// Outer height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search; // Returns the queries starting from the question mark in the URL e.g. "?id=1&name=Brad&member=standard"

// Redirect
// window.location.href = "https://www.google.com";

// Reload
// window.location.reload(); // Will keep on reloading constantly

// History Object: Negative int to go back or positive int to go forward the according number of sites
// window.history.go(-2);
val = window.history.length;

// Navigator Object: The browser itself
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val)


