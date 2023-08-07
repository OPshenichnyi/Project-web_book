const switcher = document.querySelector('#switch');

switcher.addEventListener('click', switchTheme);

function switchTheme() {
  const rootElement = document.documentElement;
  let data = rootElement.getAttribute('data-theme');
  let newData;

  if (data === 'light') {
    newData = 'dark';
  } else {
    newData = 'light';
  }

  rootElement.setAttribute('data-theme', newData);
}
