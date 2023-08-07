
const hiddebBurgMenu = document.querySelector('.conteiner-hidden');
 const burgerBtn = document.querySelector('.burger-button');

burgerBtn.addEventListener('click', function (e) {
    
    if (hiddebBurgMenu.hasAttribute('hidden')) {
        console.log(hiddebBurgMenu.hidden = false);
        

        return;        
    }
              console.log(hiddebBurgMenu.hidden = true);

     });



