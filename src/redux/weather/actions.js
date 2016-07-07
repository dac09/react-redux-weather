import weatherAxios from './weatherAxios';

// Constants
export const UPDATE_ONE = 'UPDATE_ONE';
export const UPDATE_ALL = 'UPDATE_ALL';

// @NOTE Naming convention so that in use it becomes
// e.g. weatherActions.updateOne(data)

// Actions
export function updateOne(name, data) {
  return {
    type: UPDATE_ONE,
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
  console.info('called weather')
  return dispatch => {
    weatherAxios.get('',{ params: {q: cityName}})
      .then((response) => {
        console.info(response.data)
        if (response.data.cod === "200") {
          dispatch(updateOne(cityName, response.data));
        }
      })

  }
}
