import Store from '../store/store.js';
import Component from '../utils/Component.js';
import Empty from './Empty.js';

const DEFAULT_IMAGE = '../src/assets/images/default-image.jpg';

function isProductWithDiscount(discount, price) {
  const formatPrice = new Intl.NumberFormat('ch-CH', {
    style: 'currency',
    currency: 'CLP'
  }).format(price);
  if (discount) {
    const discountNumber = Math.round((price * discount) / 100);
    const priceWithDiscount = price - discountNumber;
    const formatPriceWithDiscount = new Intl.NumberFormat('ch-CH', {
      style: 'currency',
      currency: 'CLP'
    }).format(priceWithDiscount);
    return `<div class="prices">
      <p>${formatPrice}</p>
      <p>${formatPriceWithDiscount}</p>
    </div>`;
  }

  return `<p>${formatPrice}</p>`;
}

function createProducts(products) {
  return products.reduce((memo, item) => {
    let tmp = memo;
    tmp += `<div class="product-card">
              <figure class="product-image">
                <img src=${item.url_image || DEFAULT_IMAGE} />
              </figure>
              <p>${item.name}</p>
              ${isProductWithDiscount(item.discount, item.price)}
            </div>`;
    return tmp;
  }, '');
}

function createListOfProduct(productsList) {
  return createProducts(productsList);
}

function render() {
  const { products } = Store.store;
  if (products.length === 0) {
    return Empty();
  }
  return createListOfProduct(products);
}

export default Component({
  render,
  listeners: [],
  preloaders: []
});
