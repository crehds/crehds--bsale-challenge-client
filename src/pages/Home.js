import NavBar from '../components/createNav.js';
import DomHandler from '../DomHandler.js';
import getCategoriesFromAPI from '../services/categories.js';
import Store from '../store/store.js';
import Component from '../utils/Component.js';

const main = '<div>Este es el main</div>';

function render() {
  return `<div class="home">${NavBar()}${main}</div>`;
}

async function preloadCategories() {
  if (Store.store.categories.length === 0) {
    await getCategoriesFromAPI();
    DomHandler.reload();
  }
}

const Home = Component({
  render,
  listeners: [],
  preloaders: [preloadCategories]
});

export default Home;
