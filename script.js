const booksList = document.querySelector("#book-list");
let booklist = [];
let bookHtml = "";
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
    })
    booksList.innerHTML = bookHtml;

}

const bookForm = document.querySelector("#book-form");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");

bookForm.addEventListener('submit', () => {
    let newBook = {
        title: bookTitle.value,
        author: bookAuthor.value
    };

    let obj = JSON.parse(localStorage.getItem('books'));

    obj.allbook.push(newBook);

    booklist = obj.allbook;

    localStorage.setItem("books", JSON.stringify(obj));
})

const removeBtn = document.querySelectorAll(".remove-btn");

removeBtn.forEach((item) => item.addEventListener('click', () => {
    let removeBookId = parseInt(item.id);
    let obj = JSON.parse(localStorage.getItem('books'));
    booklist = obj.allbook;
    booklist = booklist.filter((element, index) => index !== removeBookId);
    obj.allbook = booklist;
    localStorage.setItem("books", JSON.stringify(obj));
    window.location.reload()
}));
