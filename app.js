const addBtn = document.getElementById('newBook');
const formsDiv = document.getElementById('forms');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('page');
const readInput = document.getElementById('read');
const submitBtn = document.getElementById('submit');

const cardDiv = document.getElementById('cards');

const removeBtn = document.getElementById('remove');


let count = 1;



let myLibrary = [];

addBtn.addEventListener('click', () => {
    if(count === 1) {
        formsDiv.style.display = 'flex';
        count = 2;
    } else if(count === 2) {
        formsDiv.style.display = 'none';
        count = 1;
    }
})

const render = () => {
    const cardsDiv = document.getElementById('cards');
    cardsDiv.innerHTML = '';
    for(let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEle = document.createElement('div');
        bookEle.classList.add('card');
        bookEle.innerHTML = `
        <p class="cardText">"📕 ${book.title}"</p>
        <p class="cardText">📝 ${book.author}</p>
        <p class="cardText">📌 ${book.pages}</p>
        <p class="cardText read" onclick="toggleRead(${i})">${book.read ? "Read" : "Not Read"}</p>
        <button id="remove" onclick="remove(${i})" class="remove">Remove</button>
        `;
        cardsDiv.appendChild(bookEle);
    }
}

const remove = (index) => {
    myLibrary.splice(index ,1)
    render();
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function () {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}

function addBookToLibrary() {
    let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked);
    myLibrary.push(newBook);
    render();
}

submitBtn.addEventListener('click',addBookToLibrary )