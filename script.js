const myLibrary = [];

function Book(title,author,pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.readStatus = function(){
    if (this.read === true) {
        return "I read!";
  }else{
    return "I haven't read yet!";
  }
}

const book1 = Book("Harry Potter I", "J K Rowling", 268, true);


function addBookToLibrary() {
  myLibrary.push(book1);
  return myLibrary;
}

console.log(addBookToLibrary())
