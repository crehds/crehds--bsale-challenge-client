import Store from '../store/store.js';
import Component from '../utils/Component.js';

function createProducts(products) {
  return products.reduce((memo, item) => {
    let tmp = memo;
    tmp += `<div>${item.name}</div>`;
    return tmp;
  }, '');
}

function createListOfProduct(productsList) {
  return createProducts(productsList);
}

function render() {
  const { productsByCategory } = Store.store;
  return createListOfProduct(productsByCategory);
}

export default Component({
  render,
  listeners: [],
  preloaders: []
});
