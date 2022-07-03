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
    library.push(newBook);
    closePopUp();
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
    author.textContent = `By ${book.author}`;

    const pages = document.createElement('p');
    pages.textContent = `${book.pages} pages`;

    const bookBtns = document.createElement('div');
    bookBtns.classList.add('bookBtns');

    const isRead = document.createElement('button');
    isRead.textContent = (book.isRead ? 'Read' : 'Not Read');
    isRead.classList.add('isReadBtn');
    isRead.classList.add('btn');
    isRead.classList.add(book.isRead ? 'isRead' : 'notRead');
    isRead.onclick = () => updateBook(book.title);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList = 'removeBookBtn';
    removeBtn.classList.add('btn');
    removeBtn.setAttribute('name' , book.title);
    removeBtn.onclick = () => removeBook(book.title);

    bookBtns.appendChild(isRead);
    bookBtns.appendChild(removeBtn);

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(bookBtns);

    cardDisplay.appendChild(bookCard);
}

function updateBook(title){
    const book = library.find(book => book.title === title);
    book.isRead = (book.isRead ? false : true);
    updateBookDom(book);
}

function updateBookDom(book) {
    const toUpdate = document.getElementById(book.title);
    const isRead = toUpdate.querySelector('.isReadBtn');
    isRead.textContent = (book.isRead ? 'Read' : 'Not Read')
    if(book.isRead)
    {
        isRead.classList.remove('notRead');
        isRead.classList.add('isRead');
    } else {
        isRead.classList.remove('isRead');
        isRead.classList.add('notRead');
    }
}

function removeBook(title){
    const book = library.find(book => book.title === title);
    removeBookDom(book);
    library = library.filter(book => book.title != title);
}

function removeBookDom(book) {
    const toRemove = document.getElementById(book.title);
    toRemove.remove();
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