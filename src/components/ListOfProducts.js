import Store from '../store/store.js';
import Component from '../utils/Component.js';

const DEFAULT_IMAGE = '../src/assets/images/default-image.jpg';

function createProducts(products) {
  return products.reduce((memo, item) => {
    let tmp = memo;
    tmp += `<div class="product-card">
              <figure class="product-image">
                <img src=${item.url_image || DEFAULT_IMAGE} />
              </figure>
              <p>${item.name}</p>
              <p>${item.price}</p>
            </div>`;
    return tmp;
  }, '');
}

function createListOfProduct(productsList) {
  return createProducts(productsList);
}

function render() {
  const { products } = Store.store;
  return createListOfProduct(products);
}

export default Component({
  render,
  listeners: [],
  preloaders: []
});
