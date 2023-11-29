function createSearch(arrey, element) {
  const markup = arrey
    .map(
      ({ id, title, image_url }) =>
        `<li class="catalog-item js-card" data-id=${id}>
            <img src="${image_url}" alt="${title}" width="600" />
            <h2>${title}</h2>
            <p><a class="js-info" href="#">More information</a></p>
            <div>
                <button class="js-favorite" >Add to favorite</button>
                <button class="js-basket" >Add to basket</button>
            </div>
        </li>`
    )
    .join('');

  element.innerHTML = markup;
}

export { createSearch };
