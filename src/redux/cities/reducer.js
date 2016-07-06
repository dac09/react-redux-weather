import * as cityActions from './actions';

export const initialState = {
  list: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case cityActions.ADD_CITY:
      //@TODO: Validate if city is valid
      return Object.assign({}, state, {list: [...state.list, action.city]})

    default:
      return state;
  }
}
