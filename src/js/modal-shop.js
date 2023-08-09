
  const refs = {
    
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    container: document.querySelector(".js-modal-item"),
    book: document.querySelector(".trigger"),
    list: document.querySelector(".js-list"),
   
};
  
const MODAL_LS_KEY = 'modal';
const PRODUCT_LS_KEY = 'checkout';
const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) || [];


//  ==============================                
const open = document.querySelectorAll("[data-modal-open]")

for (let i = 0; i < open.length; i++) {
     open[i].addEventListener("click", openModal);
}
 


const modalProducts = JSON.parse(localStorage.getItem(MODAL_LS_KEY)) || {};


function openModal(evt) {
if (evt.target.classList.contains('img')) {
   return;
  }
  refs.modal.classList.remove("is-hidden");
  // evt.preventDefault();
  
  const product = evt.target.closest("[data-modal-open]");
  const productId = product.dataset.id;
  const currentProduct = products.find(({ _id }) => _id === productId);
  
localStorage.setItem(MODAL_LS_KEY, JSON.stringify(currentProduct))
const modalProducts = JSON.parse(localStorage.getItem(MODAL_LS_KEY)) ?? {};
 refs.container.insertAdjacentHTML('beforeend', createModalMarkup(modalProducts));
}
  

function closeModal() {
   refs.modal.classList.add("is-hidden");
   refs.container.innerHTML = ""
  localStorage.removeItem("modal");
  }

refs.closeModalBtn.addEventListener("click", closeModal);
 

function createModalMarkup(obj) {
    return   `
    <div data-id="${obj._id}" class="js-modal-product modal-shop-product " data-modal-open="">
        
    <div class="mоdal-info-wrap">
    <img class="modal-shop-img" src="${obj.book_image}" alt="${obj.title}" />
        <div class="book-info">
        <h2 class="modal-shop-title">${obj.title}</h2>
        <p class="modal-shop-author">${obj.author}</p>
        <p class="modal-shop-description">${obj.description}</p>
      
       <ul class ="modal-shop-link-list">
        <a href="${obj.buy_links[0].url}" target="_blank" rel="noreferrer noopener" class="link modal-shop-link-amz">
        <img class="img-modal modal-icon-shop-amz" src="./images/amazon.png" alt="${obj.buy_links[0].name}"  />
        </a>
        <a href="${obj.buy_links[1].url}" target="_blank" rel="noreferrer noopener" class="link modal-shop-link">
       <img class="img-modal  modal-icon-shop" src="./images/apple.png" alt="${obj.buy_links[1].name}" />
        </a>
        <a href="${obj.buy_links[3].url}" target="_blank" rel="noreferrer noopener" class="link modal-shop-link-bsh">
        <img class="img-modal  modal-icon-shop-bsh" src="./images/bookshops.png" alt="${obj.buy_links[3].name}"  />
        </a>
        </ul>
        </div>
        </div>
        <button class="js-modal-clear modal-dlt-btn" type="button">remove from the shopping list</button>
        <p class="modal-shop-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
        
  </div>`
}
    
// =========================================================================

function handlerClearBasket(evt) {
      //  evt.preventDefault();
   

 if (!evt.target.classList.contains('js-modal-clear')) {
        return;
    }

    const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) ?? [];
 
  const product = evt.target.closest('.js-modal-product');
  console.log(product);
  
    const productId = product.dataset.id;

    const fidx= products.findIndex(option => option._id === productId);

    const currentProduct = products.find(({ _id }) => _id === productId);
    
    const deleted = products.splice(fidx, 1);

    localStorage.setItem(PRODUCT_LS_KEY, JSON.stringify(products))
  
    window.location.href = './shopping-list.html';
    
     return createMarkup(products)

    
}

refs.container.addEventListener("click", handlerClearBasket);

