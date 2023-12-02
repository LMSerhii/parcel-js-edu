import { getDirect } from './getDirect';
import { reqWeather } from './helpers/requestWeather';
import { renderWeather } from './helpers/renderWeather';

const getWeather = () => {
  const refs = {
    form: document.querySelector('.form'),
    list: document.querySelector('.js-weather-list'),
  };

  refs.form.addEventListener('submit', evt => {
    evt.preventDefault();

    const city = evt.target.elements.city.value;

    getDirect(city)
      .then(value => {
        reqWeather(value[0].lat, value[0].lon)
          .then(data => (refs.list.innerHTML = renderWeather(data)))
          .catch(err => console.log('Weather error'));
      })
      .catch(err => console.log('Direct error'));
  });
};

export { getWeather };
