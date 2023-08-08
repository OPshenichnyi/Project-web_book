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








const hiddebBurgMenu = document.querySelector('.conteiner-hidden');
 const burgerBtn = document.querySelector('.burger-button');


burgerBtn.addEventListener('click', function () {
    
    if (hiddebBurgMenu.hasAttribute('hidden')) {
        hiddebBurgMenu.hidden = false;

        



burgerBtn.innerHTML=`
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
<path stroke="#111" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M16 2 2 16M2 2l14 14"/>
</svg>`;

        return;        
    }

    burgerBtn.innerHTML=`
    <svg
    class ='js-icon-burger'
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="none"
    >
      <path
        stroke="#111"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19.833 11.667H3.5M24.5 7h-21M24.5 16.333h-21M19.833 21H3.5"
      />
    </svg>`;

        hiddebBurgMenu.hidden = true;

     })

   


     // Получаем текущий путь страницы (например, /about.html)
const currentPath = window.location.pathname;

// Получаем все ссылки в меню
const menuLinks = document.querySelectorAll('.burger-mobile-header-link');
const currentHome = document.querySelector('.burger-header-link-first')
// Проходим по ссылкам и добавляем класс "active" к текущей странице
menuLinks.forEach(link => {
   
    currentHome.classList.add('active');
    if (link.getAttribute('href') === currentPath) {
        currentHome.classList.remove('active');
    link.classList.add('active');
    } 
  
});

export { createMarkup };