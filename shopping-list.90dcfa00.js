!function(){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},t={},o=n.parcelRequired7c6;null==o&&((o=function(n){if(n in e)return e[n].exports;if(n in t){var o=t[n];delete t[n];var r={id:n,exports:{}};return e[n]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(n,e){t[n]=e},n.parcelRequired7c6=o),o.register("4WFAO",(function(n,e){var t={container:document.querySelector(".js-list"),empty:document.querySelector(".shopping-empty")},o="checkout",r=JSON.parse(localStorage.getItem(o))||[];function a(n){return n.map((function(n){var e=n._id,t=n.list_name,o=n.title,r=n.author,a=n.description,s=n.book_image,i=n.buy_links;return'\n\n    <li data-id="'.concat(e,'" class="js-product shop-product trigger" data-modal-open="">\n        <img class="shop-img" src="').concat(s,'" alt="').concat(o,'" />\n        <div class="book-info">\n        <h2 class="shop-title">').concat(o,'</h2>\n        <p class="shop-category">').concat(t,'</p>\n        <p class="shop-description">').concat(a,'</p>\n        <button class="js-clear shop-dlt-btn" type="button">\n        <svg class="js-clear icon-trash">\n        <use href="./images/icons.svg#icon-trash"></use>\n      </svg>\n        </button>\n        <div class="shop-wrap">\n        <p class="shop-author">').concat(r,'</p>  \n       <ul class ="shop-link-list">\n        <a href="').concat(i[0].url,'" target="_blank" rel="noreferrer noopener" class="img link shop-link-amz">\n        <img class="img icon-shop-amz" src="./images/amazon.png" alt="').concat(i[0].name,'"  />     \n        </a>\n        <a href="').concat(i[1].url,'" target="_blank" rel="noreferrer noopener" class="img link shop-link">\n       <img class="img icon-shop" src="./images/apple.png" alt="').concat(i[1].name,'" /> \n        </a>\n        <a href="').concat(i[3].url,'" target="_blank" rel="noreferrer noopener" class="img link shop-link">\n        <img class="img icon-shop" src="./images/bookshops.png" alt="').concat(i[3].name,'"  /> \n        </a>\n        </ul>\n        </div>\n        \n        </div>\n  </li>')})).join("")}r.length>0&&(t.empty.innerHTML=""),t.container.insertAdjacentHTML("beforeend",a(r));for(var s=document.querySelectorAll(".js-clear"),i=0;i<s.length;i++)s[i].addEventListener("click",c);function c(n){if(n.preventDefault(),n.target.classList.contains("js-clear")){var e,t=null!==(e=JSON.parse(localStorage.getItem(o)))&&void 0!==e?e:[],r=n.target.closest(".js-product").dataset.id,s=t.findIndex((function(n){return n._id===r}));t.find((function(n){return n._id===r})),t.some((function(n){return n._id===r})),t.splice(s,1);return localStorage.setItem(o,JSON.stringify(t)),window.location.href="./shopping-list.html",a(t)}}})),o("4WFAO")}();
//# sourceMappingURL=shopping-list.90dcfa00.js.map