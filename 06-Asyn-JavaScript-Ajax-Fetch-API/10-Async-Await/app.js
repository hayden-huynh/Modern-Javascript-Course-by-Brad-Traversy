// Adding async keyword makes the function automatically return a Promise 
// async function myFunc() {
//   // return 'Hello';

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = true;
//   if (!error) {
//     const res = await promise; // await keyword: Wait until the promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }
// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

async function getUsers() {
  // await the response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed once the promise is resolved
  const data = await response.json();

  return data
}

getUsers().then(users => console.log(users));