import { getBookById } from './api';
import {  getBookById } from "./api";
import amazon from "../images/amazon.png";
import apple from "../images/apple.png";
import bookshops from "../images/bookshops.png";
import './shopping-list-active-page'
import './shopping-list-burger-open'
import './switcher'


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
        <img class="shop-img basket" src="${book_image}" alt="${title}" />
        <div class="book-info basket">
        <h2 class="shop-title basket">${title}</h2>
        <p class="shop-category basket">${list_name}</p>
        <p class="shop-description basket">${description}</p>

        <button class="js-removeBook shop-dlt-btn" type="button" id="${_id}">
        <svg class="js-clear icon-trash shop-dlt-btn" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M8.25 2.75H13.75M2.75 5.5H19.25M17.4167 5.5L16.7738 15.1427C16.6774 16.5894 16.6291 17.3128 16.3167 17.8613C16.0416 18.3441 15.6266 18.7323 15.1265 18.9747C14.5585 19.25 13.8335 19.25 12.3836 19.25H9.61643C8.1665 19.25 7.44153 19.25 6.87348 18.9747C6.37336 18.7323 5.95841 18.3441 5.68332 17.8613C5.37085 17.3128 5.32263 16.5894 5.22618 15.1427L4.58333 5.5M9.16667 9.625V14.2083M12.8333 9.625V14.2083"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        
        </button>

        <div class="shop-wrap basket">
        <p class="shop-author basket">${author}</p>  
       <ul class="shop-link-list basket">
         <li>
             <a href="${buy_links[0].url}" target="_blank" rel="noreferrer noopener" class="link shop-link-amz">
            <img class="icon-shop-amz basket" src="${amazon}" alt="${buy_links[0].name}" />
             </a>
         </li>
         <li>
             <a href="${buy_links[1].url}" target="_blank" rel="noreferrer noopener" class="link shop-link">
            <img class="icon-shop basket" src="${apple}" alt="${buy_links[1].name}" />
             </a>
         </li>
         <li>
             <a href="${buy_links[3].url}" target="_blank" rel="noreferrer noopener" class="link shop-link">
                 <img class="icon-shop basket" src="${bookshops}" alt="${buy_links[3].name}" />
             </a>
         </li>
        </ul>
        </div>
        
        </div>
  </li>`
    );
    
}













