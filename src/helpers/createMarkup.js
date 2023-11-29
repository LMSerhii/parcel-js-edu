function createSearch(arrey, element) {
  let markup = null;
  if (arrey.length) {
    markup = arrey
      .map(
        ({ id, title, image_url }) =>
          `<li class="catalog-item js-card" data-id=${id}>
                <img src="${image_url}" alt="${title}" width="600" />
                <h2>${title}</h2>
                <p><a class="js-info" href="#">More information</a></p>
                <div>
                    <button class="js-favorite" >Add to favorite</button>
                    <button class="js-basket" >Add to basket</button>
                    <button class="js-close" >X</button>
                </div>
            </li>`
      )
      .join('');
  } else {
    markup = `<img src="https://assets.materialup.com/uploads/874a163f-e28c-48f0-bc4f-68349595527c/preview.jpg" alt="404" width="900" />`;
  }

  element.innerHTML = markup;
}

export { createSearch };
