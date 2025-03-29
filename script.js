let myLibrary = [];
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

function Book(title,author,pages,readStatus) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}


function addBookToLibrary(book) {
    myLibrary.push(book);
}

addButton.addEventListener("click", () => {    
    if(inputTitle.value !== "" && inputAuthor.value !== "" && inputPages.value !== "" && inputReadStatus.value !== "" ){
        const newBook = new Book(inputTitle.value,inputAuthor.value,inputPages.value,
        inputReadStatus.value.charAt(0).toUpperCase()+inputReadStatus.value.slice(1));
        addBookToLibrary(newBook);

        inputTitle.value = "";
        inputAuthor.value = "";
        inputPages.value= "";
        inputReadStatus.selectedIndex = 0;
        tableBody.innerHTML = '';

        createBookTableRow();
    }
});

const theLightEaters = new Book("The Light Eaters", "Zoe Schlangar", "304", "Read");
const fermatTheorem = new Book("Fermat's Last Theorem", "Simon Singh", "456", "Read");
const aI = new Book("AI 2041", "Kai-Fu Lee", "368", "Read");
addBookToLibrary(theLightEaters);
addBookToLibrary(fermatTheorem);
addBookToLibrary(aI);


function createBookTableRow(){
    myLibrary.forEach((book,index) =>{
        const tableRow = document.createElement("tr");
        const idRow = document.createElement("td");
        idRow.textContent = index+1;
        tableRow.appendChild(idRow);

        const titleRow = document.createElement("td");
        titleRow.textContent = book.title;
        tableRow.appendChild(titleRow);

        const authorRow = document.createElement("td");
        authorRow.textContent = book.author;
        tableRow.appendChild(authorRow);

        const pagesRow = document.createElement("td");
        pagesRow.textContent = parseInt(book.pages);
        tableRow.appendChild(pagesRow);

        const readStatusRow = document.createElement("td");
        readStatusRow.textContent = book.readStatus;
        tableRow.appendChild(readStatusRow);

        const delRow = document.createElement("td");
        const dltButton = document.createElement("button");
        dltButton.classList.add("dlt");
        dltButton.textContent = "Delete";
        delRow.appendChild(dltButton);
        tableRow.appendChild(delRow);

        tableBody.appendChild(tableRow);

    });
}

function removeBookFromLibrary(book){
    myLibrary.splice(myLibrary.indexOf(book),1)
}

createBookTableRow();

