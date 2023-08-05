import { getCategories } from './api.js';

getCategories()
  .then(data => createMarkupCategory(data))
  .catch(error => console.error('Error fetching categories:', error));

function createMarkupCategory(data) {
  const categoryEL = data
    .map(
      ({ list_name }) =>
        `<li class="category_list" name="${list_name}">${list_name}</li>`
    )
    .join(' ');
  categoryList.insertAdjacentHTML('beforeend', categoryEL);
}

const categoryList = document.querySelector('.category__list');
const categoryTitle = document.querySelector('.category_title');
let activeItem = null;

function activateItem(listItem) {
  if (activeItem) {
    activeItem.style.textTransform = 'none';
    activeItem.classList.remove('active');
  }

  listItem.style.textTransform = 'uppercase';
  listItem.classList.add('active');
  activeItem = listItem;
}

categoryList.addEventListener('click', function (event) {
  const listItem = event.target;
  if (listItem.classList.contains('category_list')) {
    activateItem(listItem);
  }
});

categoryTitle.addEventListener('click', function () {
  activateItem(categoryTitle);
});

/*function renderCategoryList(result) {
  categoryList.innerHTML = result
    .map(category => {
      return `
         <li class="category_list" name="${category.list_name}">
         ${category.list_name}
         </li>`;
    })
    .join('');
}*/

/*async function getDataAndRenderCategoryList() {
  try {
    const result = await getCategories();
    renderCategoryList(result);
  } catch (error) {
    console.log(error);
  }
}

getDataAndRenderCategoryList();*/
