// const token = sessionStorage.getItem(tokenKey) || '';
// const user = JSON.parse(sessionStorage.getItem(userKey)) || {};

const store = {
  categories: [],
  currentCategory: {},
  productsByCategory: []
};

function setCategories(newCategories) {
  store.categories = newCategories;
}

function updateCategory(nameCategory) {
  const newCategory = store.categories.find(
    (category) => category.name === nameCategory
  );
  store.currentCategory = { ...newCategory };
  return newCategory;
}

function setCurrentCategory(category) {
  store.currentCategory = { ...category };
}

function setCurrentProduct(newProduct) {
  store.currentProduct = newProduct;
}

function setProductsByCategory(newProducts) {
  store.productsByCategory = [...newProducts];
}

export default {
  store,
  setCategories,
  setCurrentCategory,
  setCurrentProduct,
  setProductsByCategory,
  updateCategory
};
