import {getAllBooks} from './api'
const refs = {
  categoriesContEl: document.querySelector(".categories"),
  bookEl: document.querySelector(".book_cards")
}


getAllBooks().then(data => createList(data))

function createList(data) {
  data.map((e) => markupBookCart(e.list_name, e.books))
}

function markupBookCart(category, arrBook) {
  const titleSection = `<h2 class="js-name-category">${category}</h2>`;
  
  const book = arrBook.map(e => `<li class="js-item-book">
            <img class="img-book" src="${e.book_image}" alt="">
            <div class="js-title-book">
            <h3 class="js-name-book">${e.title}</h3>
            <p class="js-contributor-book">${e.contributor}</p>
            </div>
        </li>`)
    .join('')
    refs.bookEl.insertAdjacentHTML('beforeend',
        `<div class="js-container-categories">${titleSection}
        <ul class="js-list-books-category">${book}</ul>
        <button type="button" class="js-btn-category">SEE MORE</button></div>`);
}
