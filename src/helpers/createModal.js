import * as basicLightbox from 'basiclightbox';
import { closeModal } from './closeModal';

function createModal(product) {
  const options = {
    handler: null,

    onShow(instance) {
      this.handler = closeModal.bind(instance);
      document.addEventListener('keydown', this.handler);
    },

    onClose() {
      document.removeEventListener('keydown', this.handler);
    },
  };

  const instance = basicLightbox.create(
    ` <div class="modal">
              <img src="${product.image_url}" alt="${
      product.title
    }" width="600">
              <h2>${product.title}</h2>
              <h3>Ціна: ${getPrice(product.price)}</h3>
              <p>Рейтинг: ${product.rating}</p>
              <p>Наявність: ${available(product.is_available)}</p>
              <ul>${char(product.characteristics)}</ul>
              <div>
                  <button class="js-favorite" >Add to favorite</button>
                  <button class="js-basket" >Add to basket</button>
              </div>
          </div>`,
    options
  );

  instance.show();
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

export { createModal };
