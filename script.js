const myLibrary = [];
const toggleButton = document.querySelector(".toggle-button"); 
const toggleForm = document.querySelector("#toggle-form");
const delButtons = document.querySelectorAll(".dlt")
const tableRow = document.querySelectorAll("tr");
const addButton = document.querySelector(".add-btn")

toggleButton.addEventListener("click", () => {
    toggleForm.classList.toggle("hidden");
    addButton.classList.toggle("hidden")
});

delButtons.forEach(button => {
    button.addEventListener("click",() =>{
        const row = button.closest("tr");
        if (row){
            row.remove();
        }
    });
});

function Book(title,author,pages,read) {
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

addButton.addEventListener("click", () => {
    
});


function addBookToLibrary(book) {
  myLibrary.push(book);
}

function removeBookFromLibrary(book){
    myLibrary.splice(myLibrary.indexOf(book),1)
}

