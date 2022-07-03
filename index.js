let library = [];


const addBookBtn = document.getElementById('addBook');
const bookGrid = document.getElementById('mainContent');
const popUp = document.getElementById('popUp');
const addBookForm = document.getElementById('addBookForm');
const cardDisplay = document.getElementById('cardDisplay');

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function displayLibrary(){
    library.forEach(addBookDom)
}

let firstBook = new Book('Atomic Habits', 'James Clear', 306, false);
library.push(firstBook);
displayLibrary();


function addBook(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get('title');
    const author = formData.get('author');
    const pages = formData.get('pages');
    const isRead = (formData.get('isRead') ? true : false);

    const newBook = new Book(title, author, pages, isRead);

    addBookDom(newBook);
    closePopUp();
    console.log(newBook);
}

function removeBook(book)
{
    library.pop(book);
}

function addBookDom(book)
{
    const bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
    bookCard.setAttribute("id", book.title);

    const title = document.createElement('h2');
    title.textContent = book.title;

    const author = document.createElement('p');
    author.textContent = book.author;

    const pages = document.createElement('p');
    pages.textContent = book.pages;

    const bookBtns = document.createElement('div');
    bookBtns.classList.add('bookBtns');

    const isRead = document.createElement('button');
    isRead.textContent = (book.isRead ? 'Read' : 'Not Read');
    isRead.classList.add('isReadBtn');
    isRead.setAttribute('id', (book.isRead ? 'isRead' : 'notRead'));

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList = 'removeBookBtn';
    removeBtn.setAttribute('name' , book.title);

    bookBtns.appendChild(isRead);
    bookBtns.appendChild(removeBtn);

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(bookBtns);

    cardDisplay.appendChild(bookCard);
}


const openPopUp = () => {
    popUp.classList.add('active');
}

const closePopUp = () => {
    addBookForm.reset();
    popUp.classList.remove('active');
}

addBookBtn.onclick = openPopUp;
addBookForm.onsubmit = addBook;