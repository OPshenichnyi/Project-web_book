const apiUrl = 'https://books-backend.p.goit.global/books';

async function getCategories() {
  try {
    const response = await fetch(`${apiUrl}/category-list`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getTopBooks() {
  try {
    const response = await fetch(`${apiUrl}/top-books`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getBooksByCategory(category) {
  try {
    const response = await fetch(`${apiUrl}/category?category=${category}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getBookById(id) {
  try {
    const response = await fetch(`${apiUrl}/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { getCategories, getTopBooks, getBooksByCategory, getBookById };
