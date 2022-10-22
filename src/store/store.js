// const token = sessionStorage.getItem(tokenKey) || '';
// const user = JSON.parse(sessionStorage.getItem(userKey)) || {};

const store = {
  categories: []
};

function setCategories(newCategories) {
  store.categories = newCategories;
}

export default {
  store,
  setCategories
};
