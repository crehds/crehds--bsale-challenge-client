export default {
  module: null,
  parent: null,
  load(module, parent) {
    this.module = module;
    this.parent = parent;
    // eslint-disable-next-line no-param-reassign
    parent.innerHTML = module;
    module?.addListeners();
    module?.addPreloaders();
  },
  reload() {
    this.load(this.module, this.parent);
  }
};
