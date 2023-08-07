// document.addEventListener("DOMContentLoaded", function () {
//   const burgerMenu = document.querySelector(".burger-mobile-header-itemu");
//   const navLinks = document.querySelector(".nav-links");

//   burgerMenu.addEventListener("click", function () {
//     navLinks.classList.toggle("active");
//   });
// });



//   document.addEventListener("DOMContentLoaded", function() {
//     var currentPage = window.location.pathname; // Получаем текущий URL-адрес

//     var menuItems = document.querySelectorAll(".burger-mobile-header-link"); // Выбираем все пункты меню

//     // Проходимся по всем пунктам меню и добавляем класс "active" к соответствующему пункту
//     menuItems.forEach(function(item) {
//       if (item.getAttribute("href") === currentPage) {
//         item.classList.add("active");
//       }
//     });
//   });


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
    } else {
        //  currentHome.classList.remove('active');
    link.classList.remove('active');
  }
});