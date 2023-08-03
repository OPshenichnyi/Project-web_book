import axios from 'axios';

const apiUrl = 'https://books-backend.p.goit.global/books';

async function getCategories() {
  try {
    const result = await axios.get(`${apiUrl}/category-list`);
    return result;
  } catch (e) {
    return e;
  }
}

async function getTopBooks() {
  try {
    const result = await axios.get(`${apiUrl}/top-books`);
    return result;
  } catch (e) {
    return e;
  }
}

async function getBooksByCategory(category) {
  try {
    const result = await axios.get(`${apiUrl}/category?category=${category}`);
    return result;
  } catch (e) {
    return e;
  }
}
async function getBookById(id) {
  try {
    const result = await axios.get(`${apiUrl}/${id}`);
    return result;
  } catch (e) {
    return e;
  }
}

export { getCategories, getTopBooks, getBooksByCategory, getBookById };
