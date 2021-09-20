//array for the books objects
awesomeBooks = [];

// function add the name of the book and it's author to the array of objects
function add_object(title, author) { 
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  new_object = {
    name : title,
    author : author
  }
  awesomeBooks.push(new_object);
}

const addBook = document.getElementById("submit");

addBook.addEventlistener('submit',add_object(title,author));