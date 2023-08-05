import { getBookByCategory } from "./api";

const refs = {
    categoriesContEl: document.querySelector('.category__list'),
    bookEl: document.querySelector('.book_container')
}

refs.categoriesContEl.addEventListener('click', onClick)

function onClick(evt) {

    const selectedCategory = evt.target.textContent;
    
    
    getBookByCategory(selectedCategory).then(data =>
      
        createCategoryMarkup(data))
}

function createCategoryMarkup(data) {
 
  const bookByGenre = data.map(({ book_image, title, contributor }) => `<li>
            <img src="${book_image}" alt="">
            <h3>${title}</h3>
            <p>${contributor}</p>
        </li>`).join(' ')
  refs.bookEl.innerHTML = bookByGenre;
}



