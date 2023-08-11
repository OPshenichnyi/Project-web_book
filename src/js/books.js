import { getAllBooks} from './api'
import { onClick } from './book-by-category'
import { activateItem } from './categories';
const refs = {
  categoriesContEl: document.querySelector(".categories"),
  bookEl: document.querySelector(".book_cards"),
  seeMore: document.querySelector('.js-btn-category'),
  allCategoryies: document.querySelector('.category_title'),
  startCategory: document.querySelector('.charity-wrap'),
  categoriesContEl: document.querySelector('.category__list')
}
const test = refs.categoriesContEl.children;

console.log(...test);
  


refs.bookEl.addEventListener('click', (e) => { clickSeeMore(e) });
refs.bookEl.insertAdjacentHTML ('beforeend','<h1 class="js-category-title">Best Sellers <span class="last-title-el">Books</span></h1>');

rendeCategory()

function rendeCategory() {
  getAllBooks().then(data => createList(data))
}

function createList(data) {
  data.map((e) => markupBookCart(e.list_name, e.books))
}

function markupBookCart(category, arrBook) {
  let titleSection = `<h2 class="js-name-category">${category}</h2>`;
  
  const book = arrBook.map(e => `<li class="js-item-book">
            <img class="img_book" src="${e.book_image}" alt="${e._id}">
            <div class="js-title-book">
            <h3 class="book-name">${e.title}</h3>
            <p class="contributor">${e.contributor}</p>
            </div>
        </li>`)
    .join('')
    refs.bookEl.insertAdjacentHTML('beforeend',
        `<div class="js-container-categories">${titleSection}
        <ul class="js-list-books-category">${book}</ul>
        <button type="button" class="js-btn-category"id="${category}">SEE MORE</button></div>`);
}




function clickSeeMore(e) {
  const btnChek = e.target.textContent;
  
  const selectCategory = e.target.id;
    
  let nameNeed = refs.categoriesContEl.children[`${selectCategory}`].id;
  if (selectCategory === nameNeed) {
    const item = refs.categoriesContEl.children[`${selectCategory}`];
activateItem(item)
  
  }

  if (btnChek === 'SEE MORE') {
    onClick(selectCategory);
    scrollUpSection();
    
  }
}


function scrollUpSection() {
  refs.bookEl.scrollIntoView({ block: "start", behavior: "smooth" });
}

refs.allCategoryies.addEventListener('click', () => cleanSectionBook())

function cleanSectionBook() {
  refs.bookEl.innerHTML = '';
  refs.bookEl.insertAdjacentHTML ('beforeend','<h1 class="js-category-title">Best Sellers <span class="last-title-el">Books</span></h1>');
   rendeCategory()
}

