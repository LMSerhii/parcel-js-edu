import { items } from './module_8/data';
import { common } from './common';
import { createSearch } from '../helpers/createMarkup';
import { createModal } from '../helpers/createModal';
import { findProduct } from '../helpers/findProduct';

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');

const favoriteArr = JSON.parse(localStorage.getItem(common.FAVORITE_KEY)) ?? [];
const basketArr = JSON.parse(localStorage.getItem(common.BASKET_KEY)) ?? [];

list.addEventListener('click', onClick);

createSearch(items, list);

function onClick(e) {
  e.preventDefault();

  if (e.currentTarget === e.target) {
    return;
  }

  const product = findProduct(e, items);

  if (e.target.classList.contains('js-info')) {
    createModal(product);
  }
  if (e.target.classList.contains('js-favorite')) {
    validFavorite(product);
  }
  if (e.target.classList.contains('js-basket')) {
    validBasket(product);
  }
}

function validFavorite(product) {
  const inStorage = favoriteArr.some(({ id }) => id === product.id);

  if (inStorage) {
    return;
  }

  favoriteArr.push(product);
  localStorage.setItem(common.FAVORITE_KEY, JSON.stringify(favoriteArr));
}

function validBasket(product) {
  const inStorage = basketArr.some(({ id }) => id === product.id);

  if (inStorage) {
    return;
  }

  basketArr.push(product);
  localStorage.setItem(common.BASKET_KEY, JSON.stringify(basketArr));
}
