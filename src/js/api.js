function getCategories() {
  return fetch('https://books-backend.p.goit.global/books/category-list ').then(
    response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }
  );
}

function getAllBooks() {
  return fetch('https://books-backend.p.goit.global/books/top-books').then(
    response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }
  );
}

function getBookByCategory(selectedCategory) {
  return fetch(
    `https://books-backend.p.goit.global/books/category?category=${selectedCategory}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

function getBookById(id) {
  return fetch(`https://books-backend.p.goit.global/books/${id}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }
  );
}

export { getCategories, getAllBooks, getBookByCategory, getBookById };
