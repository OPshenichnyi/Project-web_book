import { getCategories } from './api.js';
const categoryList = document.querySelector('.category__list');

function renderCategoryList(result) {
  categoryList.innerHTML = result
    .map(category => {
      return `

         <li class="category_list" name="${category.list_name}">

         ${category.list_name}
         </li>`;
    })
    .join('');
}

async function getDataAndRenderCategoryList() {
  try {
    const result = await getCategories();
    renderCategoryList(result.data);
  } catch (error) {
    console.log(error);
  }
}

getDataAndRenderCategoryList();
