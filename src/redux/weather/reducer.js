import * as WeatherActions from './actions';

// Reducer
// -------
export const initialState = {}
export default function (state = initialState, action) {

  switch (action.type) {
    case WeatherActions.EXAMPLE:
      return Object.assign({}, state)

    default:
      return state
  }
}
