const addBtn = document.getElementById('newBook');
const formsDiv = document.getElementById('forms');


let count = 1;

addBtn.addEventListener('click', () => {
    
    if(count === 1) {
        formsDiv.style.display = 'flex';
        count = 2;
    } else if(count === 2) {
        formsDiv.style.display = 'none';
        count = 1;
    }
})

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

