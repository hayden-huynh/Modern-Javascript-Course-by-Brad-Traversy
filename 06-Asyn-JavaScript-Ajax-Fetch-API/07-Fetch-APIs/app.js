// Get local text file data 
document.getElementById('button1').addEventListener('click', getText);

function getText() {
  fetch('test.txt')
    .then(res => res.text()) // Return a Promise object
    .then(data => {document.getElementById('output').innerHTML = data;})
    .catch(err => {document.getElementById('output').innerHTML = err;});
}

// Get local JSON data
document.getElementById('button2').addEventListener('click', getJson);

function getJson() {
  fetch('posts.json')
    .then(res => res.json()) // Return a Promise object
    .then(data => {
      let output = '';
      data.forEach(function(post) {
        output += `<li>${post.title}</li>`
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => {document.getElementById('output').innerHTML = err;});
}

// Get data from external API
document.getElementById('button3').addEventListener('click', getExternalApi)

function getExternalApi() {
  fetch('https://api.github.com/users')
    .then(res => res.json()) // Return a Promise object
    .then(data => {
      let output = '';
      data.forEach(function(user) {
        output += `<li>${user.login}</li>`
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => {document.getElementById('output').innerHTML = err;});
}