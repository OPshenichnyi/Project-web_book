import { getAllBooks} from './api'
import{onClick} from './book-by-category'
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
  console.log(selectCategory)
  console.dir(refs.categoriesContEl)

  if(selectCategory ) {
    
let nameNeed = refs.categoriesContEl.children[`${selectCategory}`].id;
if (selectCategory === nameNeed) {
  const item = refs.categoriesContEl.children[`${selectCategory}`];

  item.classList.add('active');
  item.style.textTransform = 'uppercase';
console.log(item)
}

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


// Получаем ссылки на все кнопки "See More"
const seeMoreButtons = document.querySelectorAll('.js-btn-category')
console.log(seeMoreButtons);
// Получаем ссылку на список <ul>
const categoryList = document.querySelector('.category__list');

// Добавляем обработчик события на каждую кнопку "See More"
seeMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Получаем жанр из ID кнопки
    const genre = button.getAttribute('id').replace('see-more-', '');

    // Находим все элементы <li> в списке
    const liItems = categoryList.querySelectorAll('li');

    // Проходимся по всем элементам <li>
    liItems.forEach(li => {
      // Проверяем, соответствует ли текст жанру
      if (li.textContent === genre) {
        li.classList.add('active');
      } else {
        li.classList.remove('active');
      }
    });
  });
});
