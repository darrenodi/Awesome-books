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
    <hr>`;
});
booksList.innerHTML = bookHtml;
console.log(Book.books);

bookForm.addEventListener('submit', () => {
  const newBook = new Book(bookTitle.value, bookAuthor.value);
  newBook.add();
});

const removeBtn = document.querySelectorAll('.remove-btn');

removeBtn.forEach((item) => item.addEventListener('click', () => {
  console.log(item.id);
  const removeId = parseInt(item.id, 10);
  const obj = JSON.parse(localStorage.getItem('books'));
  console.log(obj);
  obj.filter((element, index) => index !== removeId);
  localStorage.setItem('books', JSON.stringify(obj));

  // window.location.reload();
}));