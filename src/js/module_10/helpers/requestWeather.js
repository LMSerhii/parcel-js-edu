import { common } from '../common';

function reqWeather(lat, lon) {
  return fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${common.API_KEY}&units=metric`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(json => {
      return json;
    })
    .catch(err => console.log(err));
}

export { reqWeather };
