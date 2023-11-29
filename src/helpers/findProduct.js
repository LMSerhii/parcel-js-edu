function findProduct(evt, data) {
  const productID = Number(evt.target.closest('.js-card').dataset.id);
  return data.find(({ id }) => id === productID);
}

export { findProduct };
