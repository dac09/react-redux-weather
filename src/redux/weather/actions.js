import weatherAxios from './weatherAxios';

// Constants
export const UPDATE_CITY = 'UPDATE_CITY';
export const UPDATE_ALL = 'UPDATE_ALL';

// @NOTE Naming convention so that in use it becomes
// e.g. weatherActions.updateCity(data)

// Actions
export function updateCity(name, data) {
  return {
    type: UPDATE_CITY,
    name,
    data,
  };
}

// Data should be in the format
// {cityName : data}
export function updateAll(data) {
  return {
    type: UPDATE_ALL,
    data,
  };
}

export function getWeatherFor(cityName) {
  return dispatch => {

    weatherAxios.get('',{ params: {q: cityName}})
      .then((response) => {
        console.info(response.data)
        if (response.data.cod === "200") {
          dispatch(updateCity(cityName, response.data));
        }
      })

  }
}
