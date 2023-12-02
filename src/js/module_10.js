import { getUsers } from './module_10/getUsers';
import { getWeather } from './module_10/getWeather';

const main = () => {
  getUsers();
  getWeather();
  const date = new Date(1701529200 * 1000);
};

main();
