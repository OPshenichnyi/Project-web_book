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



