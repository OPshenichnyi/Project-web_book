import { getBookById } from './api';
import {  getBookById } from "./api";
import amazon from "../images/amazon.png";
import apple from "../images/apple.png";
import bookshops from "../images/bookshops.png";
import './shopping-list-active-page'
import './shopping-list-burger-open'


const elements = {
    container: document.querySelector('.js-list'),
    empty: document.querySelector('.shopping-empty'),
    removeBook:document.querySelector('.js-removeBook') 
    
}

const PRODUCT_LS_KEY = 'checkout';
const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) || [];

elements.empty.style.visibility = "visible"


elements.container.addEventListener('click', (evt => {  
    evt.preventDefault()
    console.dir(evt.target);
        if (evt.target.nodeName !== 'BUTTON'){
            if (evt.target.nodeName !== 'svg') {
                return
            }
        }
        const IdxRemove = products.indexOf(evt.target.id);
        products.splice(IdxRemove);
              
        elements.container.innerHTML = ``
        createListShoping();
    }));
 




createListShoping();

function createListShoping() {
    localStorage.setItem(PRODUCT_LS_KEY, JSON.stringify(products));
    if (products.length === 0) {
    elements.empty.style.visibility = "visible"   
        return;
    }
    elements.empty.style.visibility = "hidden"


    products.map(a => {
        getBookById(a).then(data => {
            createMarkup(data);
        });
    });
    
     
}




function createMarkup(arr) {
    const { _id, list_name, title, author, description, book_image, buy_links } = arr 
        elements.container.insertAdjacentHTML('beforeend',
        `   <li data-id="${_id}" class="js-product shop-product trigger" data-modal-open="">
        <img class="shop-img" src="${book_image}" alt="${title}" />
        <div class="book-info">
        <h2 class="shop-title">${title}</h2>
        <p class="shop-category">${list_name}</p>
        <p class="shop-description">${description}</p>

        <button class="js-removeBook shop-dlt-btn" type="button" id="${_id}">
        <svg class="js-clear icon-trash shop-dlt-btn">
        <use href="./images/icons_by_one/close.svg"></use>
        </svg>
        </button>

        <div class="shop-wrap">
        <p class="shop-author">${author}</p>  
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
  </li>`
    );
    
}













