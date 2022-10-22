import createMain from '../components/createMain.js';
import createNavBar from '../components/createNav.js';
import ListOfProducts from '../components/ListOfProducts.js';
import DOMHandler from '../DomHandler.js';
import LoadModule from '../LoadModule.js';
import getCategoriesFromAPI from '../services/categories.js';
import getProductsByCategoryFromAPI from '../services/products.js';
import Store from '../store/store.js';
import Component from '../utils/Component.js';

function render() {
  return `<div class="home">${createNavBar()}${createMain()}</div>`;
}

async function changeProducts(category) {
  const newCategory = Store.updateCategory(category);
  await getProductsByCategoryFromAPI(newCategory.id);
  LoadModule(ListOfProducts, '.js--list--products');
}

function listenersToCategories() {
  const categories = document.querySelectorAll('.navbar--list__item');
  categories.forEach((category) => {
    category.addEventListener('click', async (e) => {
      const text = e.currentTarget.firstElementChild.textContent;
      const { currentCategory } = Store.store;
      if (text === currentCategory.name) return 0;
      return changeProducts(text);
    });
  });
}

async function preloadProducts() {
  const { currentCategory } = Store.store;
  await getProductsByCategoryFromAPI(currentCategory.id);
  LoadModule(ListOfProducts, '.js--list--products');
}

async function preloadCategories() {
  if (Store.store.categories.length === 0) {
    await getCategoriesFromAPI();
    preloadProducts();
    DOMHandler.reload();
  }
}

const Home = Component({
  render,
  listeners: [listenersToCategories],
  preloaders: [preloadCategories]
});

export default Home;
