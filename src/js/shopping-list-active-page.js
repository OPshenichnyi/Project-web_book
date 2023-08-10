
const menuLinks = document.querySelectorAll('.burger-mobile-header-link');
const currentShoppingList = document.querySelector('.burger-header-link-second');
const svgIconShoppingList = document.querySelector('.burger-menu_shopping-list');


menuLinks.forEach(link => {
   
    currentShoppingList.classList.add('active');
    svgIconShoppingList.classList.add('active');
});
