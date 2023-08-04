const apiUrl = 'https://books-backend.p.goit.global/books';

function fetchData(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}

function getCategories() {
  return fetchData(`${apiUrl}/category-list`);
}

function getAllBooks() {
  return fetchData(`${apiUrl}/top-books`);
}

function getBookByCategory(selectedCategory) {
  return fetchData(`${apiUrl}/category?category=${selectedCategory}`);
}

function getBookById(id) {
  return fetchData(`${apiUrl}/${id}`);
}

export { getCategories, getAllBooks, getBookByCategory, getBookById };
