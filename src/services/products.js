import BASE_URI from '../config/config.js';
import Store from '../store/store.js';

async function getProductsByCategory(categoryId) {
  const response = await fetch(`${BASE_URI}/categories/${categoryId}/products`);

  if (response.ok) {
    const productsByCategory = await response.json();
    return Store.setProducts(productsByCategory);
  }

  throw new Error(response.status.text);
}

async function getProductsByName(names) {
  const response = await fetch(
    `${BASE_URI}/products/search--by--names?names=${names}`
  );

  if (response.ok) {
    const productsByNames = await response.json();
    return Store.setProducts(productsByNames);
  }

  throw new Error(response.status.text);
}

export default { getProductsByCategory, getProductsByName };
