const renderWeather = data => {
  const timezone = data.city.timezone;
  const weatherList = data.list;

  const markup = weatherList
    .map(element => {
      const date = new Date(element.dt * 1000).toUTCString();
      const temp = element.main.temp;
      const description = element.weather[0].description;
      const icon = element.weather[0].icon;
      return `
    <li class="weather__item">
      <img src="${icon}" alt="weather-icon" class="weather__img">
      <p class="weather__date">${date}</p>
      <p class="weather__temp">${temp}℃</p>
      <p class="weather__description">${description}</p>
  </li>`;
    })
    .join('');

  return markup;
};

export { renderWeather };
