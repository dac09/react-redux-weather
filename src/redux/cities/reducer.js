import * as cityActions from './actions';

export const initialState = {
}

export default function (state = initialState, action) {
  switch (action.type) {
    case cityActions.ADD_CITY:
      //@TODO: Validate if city is valid
      return Object.assign({}, state, {[action.city]: {}})

    case cityActions.REMOVE_CITY:
    // Use reflect so that no try catch block
      return Object.assign({}, Reflect.deleteProperty(state, action.city))

    default:
      return state;
  }
}
