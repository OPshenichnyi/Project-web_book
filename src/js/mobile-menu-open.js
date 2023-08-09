const hiddebBurgMenu = document.querySelector('.conteiner-hidden');
 const burgerBtn = document.querySelector('.burger-button');
 const header =  document.querySelector('.header')

burgerBtn.addEventListener('click', onclickMobileMenu)

function onclickMobileMenu() {  

  if (hiddebBurgMenu.hasAttribute('hidden')) {
  

    burgerBtn.classList.add('js-icon')

      hiddebBurgMenu.hidden = false;      
      header.classList.add('js-fixed')
burgerBtn.innerHTML=`
<svg class ='js-icon-header-cross'
xmlns="http://www.w3.org/2000/svg" 
width="28" height="28" fill="none">

<path stroke="#111" stroke-linecap="round" 
stroke-linejoin="round" stroke-width="3"
d="M16 2 2 16M2 2l14 14"/>
</svg>`;


// Получаем текущую позицию прокрутки
const scrollY = window.scrollY;
// Сохраняем текущую позицию в стилях элемента body
document.body.style.position = 'fixed';
document.body.style.top = `-${scrollY}px`;
      return;        
  }


// Функция для разблокировки прокрутки

// Получаем сохраненное значение позиции прокрутки
const scrollY = parseInt(document.body.style.top, 10);
// Восстанавливаем позицию прокрутки
document.body.style.position = '';
document.body.style.top = '';
// Прокручиваем на сохраненную позицию
window.scrollTo(0, scrollY * -1);


  hiddebBurgMenu.hidden = true;
  header.classList.remove('js-fixed')
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
   };

  //  burgerBtn.removeEventListener('click', onclickMobileMenu);

