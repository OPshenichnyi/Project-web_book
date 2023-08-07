(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    container: document.querySelector(".js-modal-item"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.container.insertAdjacentHTML('beforeend', createMarkup(products));
  }
})();


const PRODUCT_LS_KEY = 'checkout';
const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) || [];


function createMarkup(arr) {
    return arr.map(({ _id,title, author, description,book_image, buy_links}) => `

    <div data-id="${_id}" class="js-modal-product modal-shop-product " data-modal-open="">
        <img class="modal-shop-img" src="${book_image}" alt="${title}" />
        <div class="book-info">
        <h2 class="modal-shop-title">${title}</h2>
       
        <p class="modal-shop-description">${description}</p>
        
        <div class="shop-wrap">
        <p class="modal-shop-author">${author}</p>  
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
        <button class="js-modal-clear modal-dlt-btn" type="button">remove from the shopping list</button>
        <p class="modal-shop-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
        </div>
  </div>`).join('')
}

               
const clear = document.querySelectorAll('.js-modal-clear')


for (let i = 0; i < clear.length; i++) {
     clear[i].addEventListener("click", handlerClearBasket
      
     );
 }
// clear.addEventListener('click', handlerClearBasket)

function handlerClearBasket(evt) {
       evt.preventDefault();
   

 if (!evt.target.classList.contains('js-modal-clear')) {
        return;
    }

    const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) ?? [];
 
    const product = evt.target.closest('.js-modal-product');
  
    const productId = product.dataset.id;

    const fidx= products.findIndex(option => option._id === productId);

    const currentProduct = products.find(({ _id }) => _id === productId);
    
    const idx = products.some(({ _id }) => _id === productId);

    const deleted = products.splice(fidx, 1);

    localStorage.setItem(PRODUCT_LS_KEY, JSON.stringify(products))
    
    window.location.href = './shopping-list.html';
    
     return createMarkup(products)

    
}


