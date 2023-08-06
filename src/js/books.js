import { getAllBooks, getBookByCategory } from './api'
import{createCategoryMarkup} from './book-by-category'
const refs = {
  categoriesContEl: document.querySelector(".categories"),
  bookEl: document.querySelector(".book_cards"),
  seeMore: document.querySelector('.js-btn-category'),
  allCategoryies: document.querySelector('.category_title')
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
        <button type="button" class="js-btn-category"id="${category}">SEE MORE</button></div>`);
  refs.bookEl.addEventListener('click', (e) => { clickSeeMore(e.target.textContent, e.target.id) });
}




function clickSeeMore(typeBtn, selectCategory) {
    if (typeBtn === 'SEE MORE') {
    getBookByCategory(selectCategory).then(data =>
      createCategoryMarkup(data, selectCategory))
      refs.bookEl.removeEventListener('click', (e) => { clickSeeMore(e.target.textContent, e.target.id)});
  }
}


refs.allCategoryies.addEventListener('click', () => cleanSectionBook())

function cleanSectionBook() {
   refs.bookEl.innerHTML = '';
   getAllBooks().then(data => createList(data))
}