let library = [];

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBook(book){
    library.push(book)
}

function removeBook(book)
{
    library.pop(book);
}

const addBookBtn = document.getElementById('addBook');
const bookGrid = document.getElementById('mainContent');
const popUp = document.getElementById('popUp');
const addBookForm = document.getElementById('addBookForm');

const openPopUp = () => {
    console.log("ey Yo")
    popUp.classList.add('active');
}

addBookBtn.onclick = openPopUp;