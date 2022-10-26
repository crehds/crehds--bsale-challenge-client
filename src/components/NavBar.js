import Store from '../store/store.js';

const logo = '../src/assets/images/logo.webp';

const createItems = (items) =>
  items.reduce((acc, item) => {
    let tmp = acc;
    tmp += `<li class="navbar--list__item heading-x--small" data-main-content=${item.name}>
      <p>${item.name}</p>
     </li>`;
    return tmp;
  }, '');

const createList = (list) => {
  const items = createItems(list);
  return `<ul class="navbar--list">${items}</ul>`;
};

const NavBar = () => {
  const { categories } = Store.store;
  const list = createList(categories);
  return `<nav class="navbar">
      <div class="logo--nav__container">
        <figure class="logo-nav">
          <img src=${logo} />
        </figure>
        <h2 class="heading-small">Bsale shop<h3>
      </div>
      ${list}
    </nav>`;
};

export default NavBar;
