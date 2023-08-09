
// Получаем текущий путь страницы (например, /about.html)
const currentPath = window.location.pathname;

// Получаем все ссылки в меню
const menuLinks = document.querySelectorAll('.burger-mobile-header-link');
const currentHome = document.querySelector('.burger-header-link-first')
// Проходим по ссылкам и добавляем класс "active" к текущей странице


menuLinks.forEach(link => {
   
    currentHome.classList.add('active');

});