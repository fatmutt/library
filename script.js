const myLibrary = [];

let modal = document.getElementById('modal');

let addBtn = document.getElementById('add');

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
    console.log(newBook);
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

document.querySelector('form').addEventListener('submit', function(){
    event.preventDefault();
    console.log('newBook');
    addBookToLibrary();
});



let mainGrid = document.getElementById('card-grid');

function genLibrary() {

}
