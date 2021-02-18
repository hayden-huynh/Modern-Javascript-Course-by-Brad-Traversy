// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Instantiate UI Object
const ui = new UI();

UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list');

  //Create tr element
  const row = document.createElement('tr');
  
  // Insert columns
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `
  list.appendChild(row);  
}

// Clear Form Fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Show Alert
UI.prototype.showAlert = function(message, className) {
  // Create div
  const div = document.createElement('div');

  // Add classes
  div.className = `alert ${className}`;

  // Add test
  div.appendChild(document.createTextNode(message));

  // Get parent and insert alert div
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  container.insertBefore(div, form);

  // Alert disappear after some time
  setTimeout(function() {
    document.querySelector('.alert').remove();
  }, 1700);
}

// Delete Book
UI.prototype.deleteBook = function(target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}

// Event Listener for Add Book
document.getElementById('book-form').addEventListener('submit', function(e) {
  
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  // Validate
  if (title === '' || author === '' || isbn === '') {
    // Error alert  
    ui.showAlert('Please fill in all fields', 'error')

  } else {
    // Instantiate Book
    const book = new Book(title, author, isbn);

    // Add book to list
    ui.addBookToList(book);

    // Success alert
    ui.showAlert('Book Added!', 'success')

    // Clear form fields
    ui.clearFields();
  }

  e.preventDefault();
})

// Event Listener for Delete
document.getElementById('book-list').addEventListener('click', function(e) {
  ui.deleteBook(e.target);

  ui.showAlert('Book Removed!', 'success');

  e.preventDefault();
})