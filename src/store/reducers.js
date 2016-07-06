import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import cities from '../redux/cities/reducer';
import weather from '../redux/weather/reducer';

export const reducers = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    router,
    cities,
    weather,
    ...asyncReducers })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(reducers(store.asyncReducers))
}

export default reducers
