import * as basicLightbox from 'basiclightbox';

import { items } from './js/data';

// {
//     id: 1,
//     title: 'Акумуляторний лобзик Dnipro-M DJS-200BC ULTRA (без АКБ та ЗП)',
//     image_url:
//       'https://static.dnipro-m.ua/cache/products/5021/thumb_267644.jpg',
//     rating: '4.73',
//     price: '{"price_new":4299,"price_old":5385}',
//     is_available: 'true',
//     characteristics:
//       '[{"name":"\\u041d\\u0430\\u043f\\u0440\\u0443\\u0433\\u0430 \\u0430\\u043a\\u0443\\u043c\\u0443\\u043b\\u044f\\u0442\\u043e\\u0440\\u0430","value":"20V"},{"name":"\\u0414\\u0436\\u0435\\u0440\\u0435\\u043b\\u043e \\u0436\\u0438\\u0432\\u043b\\u0435\\u043d\\u043d\\u044f","value":"\\u0410\\u043a\\u0443\\u043c\\u0443\\u043b\\u044f\\u0442\\u043e\\u0440"},{"name":"\\u041d\\u043e\\u043c\\u0456\\u043d\\u0430\\u043b\\u044c\\u043d\\u0430 \\u043f\\u043e\\u0442\\u0443\\u0436\\u043d\\u0456\\u0441\\u0442\\u044c","value":"18 \\u0412 (\\u043d\\u043e\\u043c\\u0456\\u043d\\u0430\\u043b\\u044c\\u043d\\u0435 \\u043d\\u0430\\u043f\\u0440\\u0443\\u0433\\u0430)"},{"name":"\\u041c\\u0430\\u043a\\u0441\\u0438\\u043c\\u0430\\u043b\\u044c\\u043d\\u0430 \\u043d\\u0430\\u043f\\u0440\\u0443\\u0433\\u0430","value":"20 \\u0412"}]',
//   },

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');

function createSearch(arrey) {
  const markup = arrey
    .map(
      ({ id, title, image_url }) =>
        `<li class="catalog-item js-card" data-id=${id}>
        <img src="${image_url}" alt="${title}" width="600" />
        <h2>${title}</h2>
        <p><a class="js-info" href="#">More information</a></p>
        <div>
            <button>Add to favorite</button>
            <button>Add to basket</button>
        </div>
    </li>`
    )
    .join('');

  list.innerHTML = markup;
}

list.addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();
  if (e.target.classList.contains('js-info')) {
    const { id } = e.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));
    console.log(product);
    const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`);

    instance.show();
  }
}

createSearch(items);

function findProduct(productID) {
  return items.find(({ id }) => id === productID);
}
