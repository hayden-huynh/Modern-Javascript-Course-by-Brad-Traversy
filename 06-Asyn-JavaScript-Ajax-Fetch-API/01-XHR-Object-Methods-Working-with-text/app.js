document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR object
  const xhr = new XMLHttpRequest();

  // OPEN - true for asynchronous
  xhr.open('GET', './data.txt', true);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function() {
    console.log(`readyState ${this.readyState}`);
  }

  // Specify what to do with the received data
  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(xhr.responseText);

      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  // readyState values:
  // 0: request not initialized 
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready
  // Same operation but need to check the readyState. onload is already at readyState 4
  // xhr.onreadystatechange(function() {
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(xhr.responseText);
  //   }
  // })

  xhr.onerror = function() {
    console.log('Log error...');
  }

  // To finalize everything
  xhr.send();
}