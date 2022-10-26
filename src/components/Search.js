import LoadModule from '../LoadModule.js';
import productsServices from '../services/products.js';
import ListOfProducts from './ListOfProducts.js';

const handleProductsByName = async (event) => {
  event.preventDefault();
  const { names } = event.target;
  await productsServices.getProductsByName(names.value);
  LoadModule(ListOfProducts, '.js--list--products');
};

export const listenerForm = () => {
  const form = document.querySelector('.js--search--products');
  form.addEventListener('submit', handleProductsByName);
};

export const Search = () =>
  `<div>
    <form class="js--search--products">
      <label htmlFor="search">
        <p>nombre:</p>
        <input id="search" type="text" name="names" placeholder="Nombre del producto..."/>
      </label>
      <button type="submit">buscar</button>
    </form>
  </div>`;
