import axios from 'axios';
import constants from '../../constants/api.constants';

const {openWeatherKey} = constants;
const weatherAxios = axios.create(
  {
    timeout: 60000,
    baseURL: 'http://api.openweathermap.org/data/2.5/forecast/',
    params: {appId: openWeatherKey},
  }
);

export default weatherAxios;
