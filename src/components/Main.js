import { Search } from './Search.js';
import Spinner from './Spinner.js';

const createMain = () => {
  const search = Search();
  const spinner = Spinner();
  return `<div class="main">
    ${search}
    <div class="js--list--products">${spinner}</div>
  </>`;
};

export default createMain;
