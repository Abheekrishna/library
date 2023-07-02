const addBtn = document.getElementById('newBook');
const formsDiv = document.getElementById('forms');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('page');
const readInput = document.getElementById('read');
const submitBtn = document.getElementById('submit');
const year = document.getElementById('year');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close');

const cardDiv = document.getElementById('cards');

const removeBtn = document.getElementById('remove');




let myLibrary = [];

addBtn.addEventListener('click', () => {
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readInput.checked = '';
    formsDiv.style.display = 'flex';
    overlay.classList.add('overlay');
})

closeBtn.addEventListener('click', () => {
    formsDiv.style.display = 'none';
    overlay.classList.remove('overlay');
})


const render = () => {
    const cardsDiv = document.getElementById('cards');
    cardsDiv.innerHTML = '';
    for(let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEle = document.createElement('div');
        bookEle.classList.add('card');
        bookEle.innerHTML = `
        <p class="cardText title">"📕 ${book.title}"</p>
        <p class="cardText author">📝 ${book.author}</p>
        <p class="cardText page">📌 ${book.pages}</p>
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

const newYear = (new Date()).getFullYear();
year.innerText = `${newYear}`;