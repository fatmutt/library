const myLibrary = [];

let modal = document.getElementById('modal');

let addBtn = document.getElementById('add');

let cardGrid = document.getElementById('card-grid');

let closeBtn = document.getElementsByClassName('close')[0];

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

addBtn.onclick = function() {
    modal.style.display = 'block';
}


window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = 'none';
    }
}
function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(newBook);
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function bookPage() {
    let library = document.querySelector('.library');

    for(let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement('div');
        bookEl.innerHTML = `<p>${'title: '}${book.title}</p><p>${book.author}</p><p>${book.pages}</p>`
        library.appendChild(bookEl);

    }
}

document.querySelector('form').addEventListener('submit', function(){
    event.preventDefault();
    addBookToLibrary();
    modal.style.display = 'none';

    genLibrary();
    bookPage();
});



let mainGrid = document.getElementById('card-grid');

function genLibrary() {
    let lib = document.createElement('div');
    lib.classList.add('library');
    cardGrid.appendChild(lib);
}
function index(){
    myLibrary.forEach(element => {
        bookIndex = myLibrary.indexOf(element);
    });
}

index()