const switcher = document.querySelector('#switch');

switcher.addEventListener('change', isChange);
switcher.addEventListener('click', themeSwitch);

function isChange() {
  if (switcher.checked) {
    localStorage.setItem('checkbox', 'checked');
  } else {
    localStorage.setItem('checkbox', 'unchecked');
  }
}

function themeSwitch() {
  const isCheck = switcher.checked;
  const currentTheme = document.documentElement;
  const theme = currentTheme.getAttribute('data-theme');
  let newTheme;

  if (theme === 'light' && isCheck) {
    newTheme = 'dark';
  } else if (theme === 'dark' && !isCheck) {
    newTheme = 'light';
  } else {
    return;
  }
  currentTheme.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

function setTheme() {
  const deviceTheme = localStorage.getItem('theme');
  const currentTheme = document.documentElement;
  currentTheme.setAttribute('data-theme', deviceTheme);
  switcher.checked = deviceTheme === 'dark';
}
// test text
window.addEventListener('load', setTheme);
