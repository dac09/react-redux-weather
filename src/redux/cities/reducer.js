import * as cityActions from './actions';

export const initialState = {
}

export default function (state = initialState, action) {
  switch (action.type) {
    case cityActions.ADD_CITY:
      // @TODO: Validate if city is valid
      return Object.assign({}, state, {[action.city]: {}})

    case cityActions.UPDATE_CITY:
      return Object.assign({}, state, {[action.city]: action.data})

    case cityActions.REMOVE_CITY:
      const newState = Object.assign({}, state);
      // Use reflect so that no try catch block
      Reflect.deleteProperty(newState, action.city);
      return newState;

    default:
      return state;
  }
}
