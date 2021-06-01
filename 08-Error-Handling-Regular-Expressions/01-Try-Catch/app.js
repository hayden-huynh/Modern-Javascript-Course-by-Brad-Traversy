const user = {
  email: 'jdoe@gmail.com'
};

try {
  // ReferenceError - myFunction does not exist
  myFunction();

  // TypeError
  null.myFunction();

  // SyntaxError
  eval('Hello World');

  // URIError
  decodeURIComponent('%');

  // User-defined Error
  if (!user.email) {
    // throw "User has no name";
    throw new SyntaxError('User has no name');
  }
} catch (e) {
  console.log(e);
  console.log(e.name); // Name of the error
  console.log(e.message); // Message attached with the error object
  console.log(e instanceof ReferenceError); // Check the type of the error
} finally {
  // finally block always runs regardless of there being an error or not
  console.log("finally block");
}

// Try - Catch can handle errors without stopping code execution
console.log("Program continues...");
