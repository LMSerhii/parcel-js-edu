import { common } from './common';

const getDirect = city => {
  return fetch(
    common.BASE_DIRECT_URL + `direct?q=${city}&appid=${common.API_KEY}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(json => {
      return json;
    })
    .catch(err => console.log(err));
};

export { getDirect };
