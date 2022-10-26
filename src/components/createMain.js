import { Search } from './Search.js';

const createMain = () => {
  const search = Search();
  return `<div class="main">
    ${search}
    <div class="js--list--products"></div>
  </>`;
};

export default createMain;
