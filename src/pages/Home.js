import Main from '../components/Main.js';
import NavBar from '../components/NavBar.js';
import ListOfProducts from '../components/ListOfProducts.js';
import Spinner from '../components/Spinner.js';
import DOMHandler from '../DomHandler.js';
import LoadModule from '../LoadModule.js';
import getCategories from '../services/categories.js';
import productsService from '../services/products.js';
import Store from '../store/store.js';
import Component from '../utils/Component.js';
import CATEGORIES from '../utils/categories.js';

function render() {
  const navbar = NavBar();
  const main = Main();
  return `<div class="home">${navbar}${main}</div>`;
}

async function changeProducts(category) {
  const { name } = Store.updateCategory(category);
  LoadModule(Spinner, '.js--list--products');
  await productsService.getProductsByName(CATEGORIES[name]);
  LoadModule(ListOfProducts, '.js--list--products');
}

export function activeCategory(item) {
  const activeItem = document.querySelector('.navbar--list__item.active');
  if (activeItem) {
    activeItem.classList.remove('active');
  }
  if (item) {
    item.classList.add('active');
  }
}

function listenersToCategories() {
  const categories = document.querySelectorAll('.navbar--list__item');
  categories.forEach((category) => {
    category.addEventListener('click', async (e) => {
      const text = e.currentTarget.firstElementChild.textContent;
      const { currentCategory } = Store.store;
      if (text === currentCategory.name) return 0;
      activeCategory(e.currentTarget);
      return changeProducts(text);
    });
  });
}

function defaultCategory(currentCategory) {
  const categories = document.querySelectorAll('.navbar--list__item');
  const defaultItem = [...categories].find(
    (category) => category.firstElementChild.textContent === currentCategory
  );

  activeCategory(defaultItem);
}

async function preloadProducts() {
  const { currentCategory } = Store.store;
  await productsService.getProductsByCategory(currentCategory.id);
  defaultCategory(currentCategory.name);
  LoadModule(ListOfProducts, '.js--list--products');
}

async function preloadCategories() {
  if (Store.store.categories.length === 0) {
    await getCategories();
    preloadProducts();
    DOMHandler.reload();
  }
}

const handleLogo = async () => {
  LoadModule(Spinner, '.js--list--products');
  await productsService.getProductsByName({ name1: '' });
  LoadModule(ListOfProducts, '.js--list--products');
  activeCategory();
};

const listenerToLogo = () => {
  const logo = document.querySelector('.logo--nav__container');
  logo.addEventListener('click', handleLogo);
};

const handleProductsByName = async (event) => {
  event.preventDefault();
  const { names } = event.target;
  LoadModule(Spinner, '.js--list--products');
  activeCategory();
  await productsService.getProductsByName({ name1: names.value });
  LoadModule(ListOfProducts, '.js--list--products');
};

const listenerForm = () => {
  const form = document.querySelector('.js--search--products');
  form.addEventListener('submit', handleProductsByName);
};
const Home = Component({
  render,
  listeners: [listenersToCategories, listenerForm, listenerToLogo],
  preloaders: [preloadCategories]
});

export default Home;
