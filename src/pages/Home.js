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

function listenersToCategories() {
  const categories = document.querySelectorAll('.navbar--list__item');
  categories.forEach((category) => {
    category.addEventListener('click', async (e) =>
      console.log(e.currentTarget)
    );
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
