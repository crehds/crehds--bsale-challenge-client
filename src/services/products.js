import BASE_URI from '../config/config.js';
import Store from '../store/store.js';

async function getProductsByCategoryFromAPI(categoryId) {
  const response = await fetch(`${BASE_URI}/categories/${categoryId}/products`);

  if (response.ok) {
    const productsByCategory = await response.json();
    return Store.setProductsByCategory(productsByCategory);
  }

  throw new Error(response.status.text);
}

export default getProductsByCategoryFromAPI;
