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

tableBody.addEventListener("click", (e) =>{
    if (e.target.classList.contains("dlt")){
       row = e.target.closest("tr");
       if(row){
        row.remove();
       }
    }

});

addButton.addEventListener("click", () => {

    function Book(title,author,pages,readStatus) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }
    
    if(inputTitle!=="" && 
        inputAuthor!=="" &&
        inputPages!=="" &&
        inputReadStatus.value!=="" ){
            const newBook = new Book(inputTitle.value,inputAuthor.value,inputPages.value,
                inputReadStatus.value.charAt(0).toUpperCase()+inputReadStatus.value.slice(1));
            myLibrary.push(newBook);
            const tableRow = document.createElement("tr");

            const idRow = document.createElement("td");
            idRow.textContent = myLibrary.length;
            tableRow.appendChild(idRow);

            const titleRow = document.createElement("td");
            titleRow.textContent = newBook.title;
            tableRow.appendChild(titleRow);

            const authorRow = document.createElement("td");
            authorRow.textContent = newBook.author;
            tableRow.appendChild(authorRow);

            const pagesRow = document.createElement("td");
            pagesRow.textContent = newBook.pages;
            tableRow.appendChild(pagesRow);

            const readStatusRow = document.createElement("td");
            readStatusRow.textContent = newBook.readStatus;
            tableRow.appendChild(readStatusRow);

            const delRow = document.createElement("td");
            const dltButton = document.createElement("button");
            dltButton.classList.add("dlt");
            dltButton.textContent = "Delete";
            delRow.appendChild(dltButton);
            tableRow.appendChild(delRow);

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

