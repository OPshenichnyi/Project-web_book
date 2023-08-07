const elements = {
    container: document.querySelector('.js-list'),
    empty:document.querySelector('.shopping-empty')
    
}

const PRODUCT_LS_KEY = 'checkout';
const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) || [];


if(products.length>0){
    elements.empty.innerHTML = ""
}

elements.container.insertAdjacentHTML('beforeend', createMarkup(products));

function createMarkup(arr) {
    return arr.map(({ _id, list_name,title, author, description,book_image, buy_links}) => `

    <li data-id="${_id}" class="js-product shop-product">
        <img class="shop-img" src="${book_image}" alt="${title}" />
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
  </li>`).join('')
}

                
                
const clear = document.querySelectorAll('.js-clear')
console.log(clear);

for (let i = 0; i < clear.length; i++) {
     clear[i].addEventListener("click", handlerClearBasket
      
     );
 }
// clear.addEventListener('click', handlerClearBasket)

function handlerClearBasket(evt) {
       evt.preventDefault();
   

 if (!evt.target.classList.contains('js-clear')) {
        return;
    }

    const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) ?? [];
 
    const product = evt.target.closest('.js-product');
  
    const productId = product.dataset.id;

    const fidx= products.findIndex(option => option._id === productId);

    const currentProduct = products.find(({ _id }) => _id === productId);
    
    const idx = products.some(({ _id }) => _id === productId);

    const deleted = products.splice(fidx, 1);

    localStorage.setItem(PRODUCT_LS_KEY, JSON.stringify(products))
    
    window.location.href = './shopping-list.html';
    
     return createMarkup(products)

    
}

const mobileMenu = document.querySelector('.shop-charity');

if (window.innerWidth > 1280) {
    mobileMenu.classList.remove('visually-hidden');
} else {
    mobileMenu.classList.add('visually-hidden');
}

// // if(window.innerWidth > 1280) {
// //             const mobileMenu = document.querySelector('.shop-charity');
// //             mobileMenu.classList.remove('visually-hidden');
// //         }

// (() => {
//   const mobileMenu = document.querySelector('.shop-charity');

//   window.matchMedia('(min-width: 1280px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('visually-hidden');
    
   
//   });
    
//     window.matchMedia('(min-width: 375px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.add('visually-hidden');
    
   
//   });
// })();

