const myLibrary = [];
const toggleButton = document.querySelector(".toggle-button"); 
const toggleForm = document.querySelector("#toggle-form");
const delButtons = document.querySelectorAll(".dlt")
const tableRow = document.querySelectorAll("tr");

toggleButton.addEventListener("click", () => {
    toggleForm.classList.toggle("hidden"); 
});

delButtons.forEach(button => {
    button.addEventListener("click",() =>{
        const row = button.closest("tr");
        if (row){
            row.remove();
        }
    });
});

/*function Book(title,author,pages,read) {
    this.id = crypto.randomUUID();
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
}


function addBookToLibrary(book) {
  myLibrary.push(book);
}
const book1 = new Book("Harry Potter I", "J K Rowling", 268, true);
const book2 = new Book("Harry Potter II", "J K Rowling", 300, false);

function removeBookFromLibrary(book){
    myLibrary.splice(myLibrary.indexOf(book),1)
}*/

