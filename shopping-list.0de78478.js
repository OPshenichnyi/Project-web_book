(()=>{const n={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),container:document.querySelector(".js-modal-item")};function t(){n.modal.classList.toggle("is-hidden"),n.container.insertAdjacentHTML("beforeend",o(e))}n.openModalBtn.addEventListener("click",t),n.closeModalBtn.addEventListener("click",t)})();const e=JSON.parse(localStorage.getItem("checkout"))||[];function o(e){return e.map((({_id:e,title:o,author:n,description:t,book_image:a,buy_links:l})=>`\n\n    <div data-id="${e}" class="js-modal-product modal-shop-product " data-modal-open="">\n        <img class="modal-shop-img" src="${a}" alt="${o}" />\n        <div class="book-info">\n        <h2 class="modal-shop-title">${o}</h2>\n       \n        <p class="modal-shop-description">${t}</p>\n        \n        <div class="shop-wrap">\n        <p class="modal-shop-author">${n}</p>  \n       <ul class ="shop-link-list">\n        <a href="${l[0].url}" target="_blank" rel="noreferrer noopener" class="link shop-link-amz">\n        <img class="icon-shop-amz" src="./images/amazon.png" alt="${l[0].name}"  />     \n        </a>\n        <a href="${l[1].url}" target="_blank" rel="noreferrer noopener" class="link shop-link">\n       <img class="icon-shop" src="./images/apple.png" alt="${l[1].name}" /> \n        </a>\n        <a href="${l[3].url}" target="_blank" rel="noreferrer noopener" class="link shop-link">\n        <img class="icon-shop" src="./images/bookshops.png" alt="${l[3].name}"  /> \n        </a>\n        </ul>\n        \n        </div>\n        <button class="js-modal-clear modal-dlt-btn" type="button">remove from the shopping list</button>\n        <p class="modal-shop-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>\n        </div>\n  </div>`)).join("")}const n=document.querySelectorAll(".js-modal-clear");for(let e=0;e<n.length;e++)n[e].addEventListener("click",t);function t(e){if(e.preventDefault(),!e.target.classList.contains("js-modal-clear"))return;var n;const t=null!==(n=JSON.parse(localStorage.getItem("checkout")))&&void 0!==n?n:[],a=e.target.closest(".js-modal-product").dataset.id,l=t.findIndex((e=>e._id===a));t.find((({_id:e})=>e===a)),t.some((({_id:e})=>e===a)),t.splice(l,1);return localStorage.setItem("checkout",JSON.stringify(t)),window.location.href="./shopping-list.html",o(t)}
//# sourceMappingURL=shopping-list.0de78478.js.map
