import { common } from '../common';
import { items } from './data';
import { createSearch } from '../../helpers/createMarkup';
import { createModal } from '../../helpers/createModal';
import { findProduct } from '../../helpers/findProduct';

const list = document.querySelector('.js-list');

const storageData = JSON.parse(localStorage.getItem(common.FAVORITE_KEY)) ?? [];

createSearch(storageData, list);

list.addEventListener('click', onCloseClick);

function onCloseClick(evt) {
  const product = findProduct(evt, items);

  if (evt.target.classList.contains('js-close')) {
    validClose(product);
  }

  if (evt.target.classList.contains('js-info')) {
    createModal(product, list);
  }
}

function validClose(product) {
  const index = storageData.findIndex(({ id }) => id === product.id);
  storageData.splice(index, 1);
  localStorage.removeItem(common.FAVORITE_KEY);
  localStorage.setItem(common.FAVORITE_KEY, JSON.stringify(storageData));
  createSearch(storageData, list);
}
