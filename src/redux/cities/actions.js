export const ADD_CITY = 'ADD_CITY';
export const UPDATE_CITY = 'UPDATE_CITY';
export const LOADING_CITIES = 'LOADING_CITIES';

export function addCity(city) {
  return {
    type: ADD_CITY,
    city,
  };
}


export function updateCity(city, data) {
  return {
    type: UPDATE_CITY,
    city,
    data,
  };
}



// Thunk Actions
// -------------

export function getWeatherFor(cityName) {
  return dispatch => {

    // Make your weather call here

    dispatch(updateCity(cityName, data));
  }
}
