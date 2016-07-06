export const ADD_CITY = 'ADD_CITY';
export const REMOVE_CITY = 'REMOVE_CITY';
export const UPDATE_CITY = 'UPDATE_CITY';
export const LOADING_CITIES = 'LOADING_CITIES';

export function addCity(city) {
  return {
    type: ADD_CITY,
    city,
  };
}

export function removeCity(city) {
  return {
    type: REMOVE_CITY,
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
