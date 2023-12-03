import { getUsers } from './module_10/getUsers';
import { getWeather } from './module_10/getWeather';
import { slimSelected } from './module_10/slimSelect';

const main = () => {
  getUsers();
  getWeather();
  slimSelected();
};

main();
