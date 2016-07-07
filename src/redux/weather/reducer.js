import * as WeatherActions from './actions';

// Reducer
// -------
export const initialState = {}
export default function (state = initialState, action) {

  switch (action.type) {
    case WeatherActions.UPDATE_ONE:
      return Object.assign({}, state, {[action.name]: action.data})

    default:
      return state
  }
}
