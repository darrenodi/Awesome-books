const bookForm = document.querySelector('#book-form');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');

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

bookForm.addEventListener('submit', () => {
  const newBook = new Book(bookTitle.value, bookAuthor.value);
  newBook.add();
});

const booksList = document.querySelector('#book-list');
// let booklist = [];
// let bookHtml = '';
if (JSON.parse(localStorage.getItem('books')) == null) {
  const bookObj = { allbook: booklist };
  localStorage.setItem('books', JSON.stringify(bookObj));
} else {
  booklist = JSON.parse(localStorage.getItem('books')).allbook;
  booklist.forEach((item, index) => {
    bookHtml += `
 <p>${item.title}</p>
 <p>${item.author}</p>
 <button type="button" class="remove-btn" id="${index}">Remove</button>
 <hr>`;
  });
  booksList.innerHTML = bookHtml;
}

// const removeBtn = document.querySelectorAll('.remove-btn');

// removeBtn.forEach((item) => item.addEventListener('click', () => {
//   const removeId = parseInt(item.id, 10);
//   const obj = JSON.parse(localStorage.getItem('books'));
//   booklist = obj.allbook;
//   booklist = booklist.filter((element, index) => index !== removeId);
//   obj.allbook = booklist;
//   localStorage.setItem('books', JSON.stringify(obj));
//   window.location.reload();
// }));