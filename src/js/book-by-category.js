
import { getBookByCategory } from "./api";

const refs = {
    categoriesContEl: document.querySelector('.category__list'),
    bookEl: document.querySelector('.book_cards')
}

refs.categoriesContEl.addEventListener('click', onClick)

function onClick(evt) {

    const selectedCategory = evt.target.textContent;
    
   
    getBookByCategory(selectedCategory).then(data =>
      
        createCategoryMarkup(data,selectedCategory))
}

function createCategoryMarkup(data,selectedCategory) {
    const titleSection = `<h2 class="js-category-title">${selectedCategory}</h2>`;
    console.log(titleSection);
  const bookByGenre = data.map(({ book_image, title, contributor }) => `<li class = "book-by-genre">
            <img class ="img_book" src="${book_image}" alt="">
            <h3 class ="book-name">${title}</h3>
            <p class ="contributor">${contributor}</p>
        </li>`).join(' ')
    const containerForBooks = `<ul class="js-cont-for-books">${bookByGenre}</ul>`
    refs.bookEl.innerHTML = titleSection + containerForBooks;
}



