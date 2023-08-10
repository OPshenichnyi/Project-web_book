const menuLinks = document.querySelectorAll('.burger-mobile-header-link');
const currentHome = document.querySelector('.burger-header-link-first');


menuLinks.forEach(link => {
   
    currentHome.classList.add('active');

});