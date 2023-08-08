import {  getBookById } from "./api";

const refs = {
    categoriesContEl: document.querySelector('.category__list'),
    bookEl: document.querySelector('.book_cards'),
    bookCard: document.querySelector('.js-cont-for-books'),
    backdrop: document.querySelector('.backdrop'),
    modalCard: document.querySelector('.modal-book-item'),
    
}


refs.categoriesContEl.addEventListener('click', (e => { onClick(e.target.textContent) }))

refs.backdrop.addEventListener('click', (e) => {
    if (e.target.dataset.modal !== 'open') {
        return
    } else {
        refs.backdrop.classList.add("is-hidden")
    }
    
})
  

// function createCategoryMarkup(data,lastElement,categoryTitle) {
//     const titleSection = `<h2 class="js-category-title">${categoryTitle} <span class ="last-title-el">${lastElement}</span></h2>`
//     refs.bookEl.addEventListener('click', (e => {
//         if (e.target.tagName !== 'IMG') {
//             return
//         }
//         refs.backdrop.classList.remove("is-hidden"), 
//         getBookById(e.target.alt).then(data => { createMarkup(data) })
        
//  }));
//   const bookByGenre =  data.map(({ book_image, title, contributor, _id }) => `<li class = "book-by-genre" >
//             <img class ="img_book" src="${book_image}" alt="${_id}">
//             <div class = book-title>
//             <h3 class ="book-name">${title}</h3>
//             <p class ="contributor">${contributor}</p>
//             </div>
//         </li>`).join(' ')
//     const containerForBooks = `<ul class="js-cont-for-books">${bookByGenre}</ul>`
//     refs.bookEl.innerHTML = titleSection + containerForBooks;
    
// }



// Функція відмальовує карточку модального вікна 
function createMarkup(arr) {
    const { _id, list_name, title, author, description, book_image, buy_links } = arr;
    
    const bookCardHtml = ` <div data-id="${_id}" class="modal-book-card">
        <img class="modal-img" src="${book_image}" alt="${title}" />
        <div class="book-info">
        <h2 class="shop-title">${title}</h2>
        <p class="shop-category">${list_name}</p>
        <p class="shop-description">${description}</p>
        <button class="js-clear shop-dlt-btn" type="button">
        <svg class="icon-trash">
        <use href="./images/icons.svg#icon-trash"></use>
      </svg>
        </button>
        <div class="shop-wrap">
        <p class="shop-author">${author}</p>  
       <ul class ="shop-link-list">
        <a href="${buy_links[0].url}" target="_blank" rel="noreferrer noopener" class="link shop-link-amz">
        <img class="icon-shop-amz" src="./images/amazon.png" alt="${buy_links[0].name}"  />     
        </a>
        <a href="${buy_links[1].url}" target="_blank" rel="noreferrer noopener" class="link shop-link">
       <img class="icon-shop" src="./images/apple.png" alt="${buy_links[1].name}" /> 
        </a>
        <a href="${buy_links[3].url}" target="_blank" rel="noreferrer noopener" class="link shop-link">
        <img class="icon-shop" src="./images/bookshops.png" alt="${buy_links[3].name}"  /> 
        </a>
        </ul>
        </div>
        </div>
        <button type="button" class="add-book">ADD TO SHOPPING LIST</button>
  </div>`
    refs.modalCard.innerHTML = bookCardHtml;
    refs.modalCard.addEventListener('click', (e=>{console.dir(e.target.nodeName);}))
}



export { createCategoryMarkup, onClick };  

