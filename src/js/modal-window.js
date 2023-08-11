import {  getBookById } from "./api";
import amazon from "../images/amazon.png";
import apple from "../images/apple.png";
import bookshops from "../images/bookshops.png";



const refs = {
    bookEl: document.querySelector('.book_cards'),
    bookCard: document.querySelector('.js-cont-for-books'),
    backdrop: document.querySelector('.backdrop'),
    modalCard: document.querySelector('.modal-book-item'),
    btnClose: document.querySelector('.modal-close-btn'),
    txtCongr: document.querySelector('.js-modal-txt')
    
}


const PRODUCT_LS_KEY = 'checkout';
let idBook = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY));
 refs.txtCongr.style.visibility = "hidden";

// Функція викликає модальне вікно дає запит на на АРІ та запускає рендер карточки


refs.modalCard.addEventListener('click', (e => {
    addBookShopList(e)
}))


function addEventlisImg() {
    refs.bookEl.addEventListener('click', (e => {
        if (e.target.tagName !== 'IMG') {
            return;
        }
        
        refs.btnClose.addEventListener('click', addIsHidden)
        
        document.addEventListener('keydown', (e)=>{addEvtEsc(e)})
        document.body.style.position = 'fixed'

        refs.backdrop.classList.remove("is-hidden");

        getBookById(e.target.alt).then(data => { createMarkup(data) });
 }));
}



// Функція додає прослуховувач на кнопку Add to shopping list
function addBookShopList(e) {

    if (e.target.nodeName !== 'BUTTON') {
                return;
    }
    
    if (e.target.textContent === 'ADD TO SHOPPING LIST') {
        e.target.textContent = 'REMOVE FROM THE SHOPPING LIST';
        
        idBook.push(e.target.id);
        localStorage.setItem(PRODUCT_LS_KEY, JSON.stringify(idBook))
        refs.txtCongr.style.visibility = "visible";
        return; 
    }

    idBook = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY));
    e.target.textContent = 'ADD TO SHOPPING LIST'
    const IdxRemove = idBook.indexOf(e.target.id);
    idBook.splice(IdxRemove);
    localStorage.setItem(PRODUCT_LS_KEY, JSON.stringify(idBook))
    refs.txtCongr.style.visibility = "hidden";
}



// Функція додає прослуховувач на backdrop та закриває модальне вікно 
refs.backdrop.addEventListener('click', (e) => {
    if (e.target.dataset.modal !== 'open') {
        return
    } else {
       addIsHidden();
    }
    
})

// Функція додає прослуховувач на клавішу Esc
function addEvtEsc(e) {
    if (e.key !== 'Escape') {
     return;
    }
    addIsHidden();
}

// Функція додає додає класс is-hidden на div backdrop
function addIsHidden() {
    refs.backdrop.classList.add("is-hidden"); 
    document.body.style.position = '';
    refs.modalCard.innerHTML = ``;
    
}

// Функція відмальовує карточку модального вікна 
function createMarkup(arr) {
    const { _id, title, author, description, book_image, buy_links } = arr;
    
    const bookCardHtml = ` <div data-id="${_id}" class="modal-book-card">
        <img class="modal-img" src="${book_image}" alt="${title}" />
        <div class="book-info">
        <h2 class="shop-title">${title}</h2>
        <p class="shop-author">${author}</p>  
        <p class="shop-description">${description}</p>
        <div class="shop-wrap">
        
        <ul class="shop-link-list">
         <li>
             <a href="${buy_links[0].url}" target="_blank" rel="noreferrer noopener" class="link shop-link-amz">
            <img class="icon-shop-amz" src="${amazon}" alt="${buy_links[0].name}" />
             </a>
         </li>
         <li>
             <a href="${buy_links[1].url}" target="_blank" rel="noreferrer noopener" class="link shop-link">
            <img class="icon-shop" src="${apple}" alt="${buy_links[1].name}" />
             </a>
         </li>
         <li>
             <a href="${buy_links[3].url}" target="_blank" rel="noreferrer noopener" class="link shop-link">
                 <img class="icon-shop" src="${bookshops}" alt="${buy_links[3].name}" />
             </a>
         </li>
        </ul>
             </div>
             </div>
             <button type="button" class="add-book" id="${_id}">ADD TO SHOPPING LIST</button>
               
       </div>`
    refs.modalCard.innerHTML = bookCardHtml;
   
}


export{addEventlisImg}
