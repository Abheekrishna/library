const addBtn = document.getElementById('newBook');
const formsDiv = document.getElementById('forms');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('page');
const readInput = document.getElementById('read');
const submitBtn = document.getElementById('submit');

const cardsDiv = document.getElementById('cards');
const cardDiv = document.getElementById('card');


let count = 1;



let myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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

        
        submitBtn.addEventListener('click', () => {
            const bookCard = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.value);
            console.log(bookCard);
            const title = document.createElement('p');
            const author = document.createElement('p');
            const page = document.createElement('p');
            const read = document.createElement('p');

            cardsDiv.style.display = 'grid';
            title.classList.add('cardText');
            author.classList.add('cardText');
            page.classList.add('cardText');
            read.classList.add('cardText');

            title.innerText = `${bookCard.title}`;
            author.innerText = `${bookCard.author}`;
            page.innerText = `${bookCard.pages}`;
            read.innerText = `${bookCard.read}`

            cardDiv.appendChild(title);
            cardDiv.appendChild(author);
            cardDiv.appendChild(page);
            cardDiv.appendChild(read);

        })
    })
}

addBookToLibrary();