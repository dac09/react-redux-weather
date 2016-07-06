import * as <%= pascalEntityName %>Actions from './actions';

// Reducer
// -------
//
export const initialState = {}
export default function (state = initialState, action) {

  switch (action.type) {
    case <%= pascalEntityName %>Actions.EXAMPLE:
      return Object.assign(state)

    default:
      return state
  }
}
