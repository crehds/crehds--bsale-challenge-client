import createMain from '../components/createMain.js';
import createNavBar from '../components/createNav.js';
import ListOfProducts from '../components/ListOfProducts.js';
import { listenerForm } from '../components/Search.js';
import Spinner from '../components/Spinner.js';
import DOMHandler from '../DomHandler.js';
import LoadModule from '../LoadModule.js';
import getCategories from '../services/categories.js';
import productsService from '../services/products.js';
import Store from '../store/store.js';
import Component from '../utils/Component.js';

function render() {
  return `<div class="home">${createNavBar()}${createMain()}</div>`;
}

async function changeProducts(category) {
  const newCategory = Store.updateCategory(category);
  LoadModule(Spinner, '.js--list--products');
  await productsService.getProductsByCategory(newCategory.id);
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
  await productsService.getProductsByCategory(currentCategory.id);
  LoadModule(ListOfProducts, '.js--list--products');
}

async function preloadCategories() {
  if (Store.store.categories.length === 0) {
    await getCategories();
    preloadProducts();
    DOMHandler.reload();
  }
}

const Home = Component({
  render,
  listeners: [listenersToCategories, listenerForm],
  preloaders: [preloadCategories]
});

export default Home;
