import DOMHandler from './DomHandler.js';

const defaultRoot = '#root';

export default function LoadModule(module, selectorParent = defaultRoot) {
  const parent = document.querySelector(selectorParent);
  return DOMHandler.load(module(), parent);
}
