const addBtn = document.getElementById('newBook');
const formsDiv = document.getElementById('forms');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('page');
const readInput = document.getElementById('read');
const submitBtn = document.getElementById('submit');


let count = 1;



let myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${title}, ${author}, ${pages}, ${read}`;
    }
}


function addBookToLibrary() {
    addBtn.addEventListener('click', () => {
        if(count === 1) {
            formsDiv.style.display = 'flex';
            count = 2;
        } else if(count === 2) {
            formsDiv.style.display = 'none';
            count = 1;
        }
    })
    
    submitBtn.addEventListener('click', () => {
        console.log(titleInput.value);
        console.log(authorInput.value);
        console.log(pagesInput.value);
        console.log(readInput.value);
    })
}

addBookToLibrary();