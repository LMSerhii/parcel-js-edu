import * as basicLightbox from 'basiclightbox';

import { items } from './module_8/data';
import { common } from './common';
import { createSearch } from '../helpers/createMarkup';

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');

const favoriteArr = JSON.parse(localStorage.getItem(common.FAVORITE_KEY)) ?? [];
const basketArr = JSON.parse(localStorage.getItem(common.BASKET_KEY)) ?? [];

list.addEventListener('click', onClick);

createSearch(items, list);

function onClick(e) {
  e.preventDefault();

  validInfo(e);
  validFavorive(e);
  validBasket(e);
}

function validInfo(evt) {
  if (evt.target.classList.contains('js-info')) {
    const { title, image_url, rating, price, is_available, characteristics } =
      findProduct(evt);

    const instance = basicLightbox.create(
      ` <div class="modal">
            <img src="${image_url}" alt="${title}" width="600">
            <h2>${title}</h2>
            <h3>Ціна: ${getPrice(price)}</h3>
            <p>Рейтинг: ${rating}</p>
            <p>Наявність: ${available(is_available)}</p>
            <ul>${char(characteristics)}</ul>
            <div>
                <button class="js-favorite" >Add to favorite</button>
                <button class="js-basket" >Add to basket</button>
            </div>
        </div>`,
      {
        onShow: instance => {
          list.addEventListener('keydown', handleElement);
        },

        onClose: instance => {
          list.removeEventListener('keydown', handleElement);
        },
      }
    );

    instance.show();
  }
}

function validFavorive(evt) {
  if (evt.target.classList.contains('js-favorite')) {
    const product = findProduct(evt);
    const inStorage = favoriteArr.some(({ id }) => id === product.id);

    if (inStorage) {
      return;
    }

    favoriteArr.push(product);
    localStorage.setItem(common.FAVORITE_KEY, JSON.stringify(favoriteArr));
  }
}

function validBasket(evt) {
  if (evt.target.classList.contains('js-basket')) {
    const product = findProduct(evt);

    const inStorage = basketArr.some(({ id }) => id === product.id);

    if (inStorage) {
      return;
    }

    basketArr.push(product);
    localStorage.setItem(common.BASKET_KEY, JSON.stringify(basketArr));
  }
}

function handleElement(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}

function available(el) {
  return el === 'true' ? 'В наявності' : 'Немає в наявності';
}

function char(el) {
  let markup = '';
  JSON.parse(el).forEach(({ name, value }) => {
    markup += `<li>${name}: ${value}</li>`;
  });
  return markup;
}

function getPrice(el) {
  const { price_new, price_old } = JSON.parse(el);
  return `<span>${price_old}грн </span> ${price_new}грн`;
}

function findProduct(evt) {
  const productID = Number(evt.target.closest('.js-card').dataset.id);
  return items.find(({ id }) => id === productID);
}
