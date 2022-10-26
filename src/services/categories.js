import BASE_URI from '../config/config.js';
import Store from '../store/store.js';

async function getCategories() {
  const response = await fetch(`${BASE_URI}/categories`);

  if (response.ok) {
    const categories = await response.json();
    Store.setCurrentCategory(categories[0]);
    return Store.setCategories(categories);
  }

  throw new Error(response.status.text);
}

export default getCategories;
