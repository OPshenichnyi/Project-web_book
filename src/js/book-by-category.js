
// import { getBookByCategory } from "./api";

// const refs = {
//     categoriesContEl: document.querySelector('.category__list'),
//     bookEl: document.querySelector('.book_cards')
// }

// refs.categoriesContEl.addEventListener('click', onClick)

// function onClick(evt) {

//     const selectedCategory = evt.target.textContent;
    
   
//     getBookByCategory(selectedCategory).then(data =>
       
//         createCategoryMarkup(data,selectedCategory))
// }

// function createCategoryMarkup(data,selectedCategory) {
//     const titleSection = `<h2 class="js-category-title">${selectedCategory}</h2>`;
//     console.log(titleSection);
//   const bookByGenre = data.map(({ book_image, title, contributor, _id }) => `<li class = "book-by-genre" id=${_id}>
//             <img class ="img_book" src="${book_image}" alt="">
//             <h3 class ="book-name">${title}</h3>
//             <p class ="contributor">${contributor}</p>
//         </li>`).join(' ')
//     const containerForBooks = `<ul class="js-cont-for-books">${bookByGenre}</ul>`
//     refs.bookEl.innerHTML = titleSection + containerForBooks;
// }



import { getBookByCategory } from "./api";
import Notiflix from 'notiflix';

const refs = {
    categoriesContEl: document.querySelector('.category__list'),
    bookEl: document.querySelector('.book_cards')
}

refs.categoriesContEl.addEventListener('click', onClick)

function onClick(evt) {

    const currentCategory = evt.target.textContent;
    const arrayCurrentCategory = currentCategory.split(' ')
    const lastElement = arrayCurrentCategory.pop()
    const categoryTitle = arrayCurrentCategory.join(' ')   
    
    getBookByCategory(currentCategory).then(data => {
        if (data.length > 0) {
            createCategoryMarkup(data,lastElement,categoryTitle)
        }
        else {
            Notiflix.Notify.failure('No books found in this genre')
        }
    }
       ).catch(err => console.log(err))
    }
        
        
function createCategoryMarkup(data,lastElement,categoryTitle) {
    const titleSection = `<h2 class="js-category-title">${categoryTitle} <span class ="last-title-el">${lastElement}</span></h2>`;
  const bookByGenre = data.map(({ book_image, title, contributor, _id }) => `<li class = "book-by-genre" id=${_id}>
            <img class ="img_book" src="${book_image}" alt="">
            <div class = book-title>
            <h3 class ="book-name">${title}</h3>
            <p class ="contributor">${contributor}</p>
            </div>
        </li>`).join(' ')
    const containerForBooks = `<ul class="js-cont-for-books">${bookByGenre}</ul>`
    refs.bookEl.innerHTML = titleSection + containerForBooks;
}
