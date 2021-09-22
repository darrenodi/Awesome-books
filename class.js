const bookForm = document.querySelector('#book-form');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const booksList = document.querySelector('#book-list');

class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    if (id !== undefined) {
      this.id = id;
    }
  }

    static books = JSON.parse(localStorage.getItem('books')) || [];

    add() {
      Book.books.push(this);
      localStorage.setItem('books', JSON.stringify(Book.books));
    }
}

let bookHtml = '';
Book.books = JSON.parse(localStorage.getItem('books'));
Book.books.forEach((item, index) => {
  bookHtml += `
    <p>${item.title}</p>
    <p>${item.author}</p>
    <button type="button" class="remove-btn" id="${index}">Remove</button>
    <hr><br>`;
});

booksList.innerHTML = bookHtml;
bookForm.addEventListener('submit', () => {
  const newBook = new Book(bookTitle.value, bookAuthor.value);
  newBook.add();
});

const removeBtn = document.querySelectorAll('.remove-btn');

removeBtn.forEach((item) => item.addEventListener('click', () => {
  const removeId = parseInt(item.id, 10);
  let booklist = Book.books;
  booklist = booklist.filter((element, index) => index !== removeId);
  Book.books = booklist;
  localStorage.setItem('books', JSON.stringify(booklist));
  window.location.reload();
}));