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

function addBook(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get('title');
    const author = formData.get('author');
    const pages = formData.get('pages');
    const isRead = formData.get('isRead');

    const newBook = new Book(title, author, pages, isRead);

    addBookForm.reset();
    addBookDom(newBook);
    closePopUp();
}

function removeBook(book)
{
    library.pop(book);
}

function addBookDom(book)
{
    const bookCard = document.createElement('div')
    bookCard.classList.add('bookCard');
    bookCard.setAttribute("id", book.title)
    cardDisplay.appendChild(bookCard);
}


const openPopUp = () => {
    popUp.classList.add('active');
}

const closePopUp = () => {
    popUp.classList.remove('active');
}

addBookBtn.onclick = openPopUp;
addBookForm.onsubmit = addBook;