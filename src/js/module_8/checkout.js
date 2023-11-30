import { common } from '../common';
import { items } from './data';
import { createSearch } from '../../helpers/createMarkup';
import { createModal } from '../../helpers/createModal';
import { findProduct } from '../../helpers/findProduct';

const refs = {
  list: document.querySelector('.js-list'),
};

const storageData = JSON.parse(localStorage.getItem(common.BASKET_KEY)) ?? [];

createSearch(storageData, refs.list);

refs.list.addEventListener('click', onCloseClick);

function onCloseClick(evt) {
  if (evt.currentTarget === evt.target) {
    return;
  }

  const product = findProduct(evt, items);

  if (evt.target.classList.contains('js-close')) {
    validClose(product);
  }

  if (evt.target.classList.contains('js-info')) {
    createModal(product);
  }
}

function validClose(product) {
  const index = storageData.findIndex(({ id }) => id === product.id);
  storageData.splice(index, 1);
  localStorage.removeItem(common.BASKET_KEY);
  localStorage.setItem(common.BASKET_KEY, JSON.stringify(storageData));
  createSearch(storageData, refs.list);
}
