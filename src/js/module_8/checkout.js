import { common } from '../common';
import { createSearch } from '../../helpers/createMarkup';

const refs = {
  list: document.querySelector('.js-list'),
};

const storageData = JSON.parse(localStorage.getItem(common.BASKET_KEY)) ?? [];

createSearch(storageData, refs.list);
