const myLibrary = [];
const toggleButton = document.querySelector(".toggle-button"); 
const toggleForm = document.querySelector("#toggle-form");
const delButtons = document.querySelectorAll(".dlt")
const tableRow = document.querySelectorAll("tr");
const addButton = document.querySelector(".add-btn");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputReadStatus = document.querySelector("#read");
const tableBody = document.querySelector("tbody")

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

addButton.addEventListener("click", () => {

    function Book(title,author,pages,readStatus) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }
    
    if(inputTitle!=="" || 
        inputAuthor!=="" ||
        inputPages!=="" ||
        inputReadStatus.value!=="" ){
            const newBook = new Book(inputTitle.value,inputAuthor.value,inputPages.value,
                inputReadStatus.value.charAt(0).toUpperCase()+inputReadStatus.value.slice(1));
            myLibrary.push(newBook);
            const tableRow = document.createElement("tr");
            tableRow.innerHTML = `
            <td>${myLibrary.length+3}</td>
            <td>${newBook.title}</td>
            <td>${newBook.author}</td>
            <td>${newBook.pages}</td>
            <td>${newBook.readStatus}</td>
            <td><button class="dlt">Delete</button></td>
            `;
            tableBody.appendChild(tableRow);
            inputTitle.value = "";
            inputAuthor.value = "";
            inputPages.value= "";
            inputReadStatus.checked = false;
        }
});


function addBookToLibrary(book) {
  myLibrary.push(book);
}

function removeBookFromLibrary(book){
    myLibrary.splice(myLibrary.indexOf(book),1)
}

