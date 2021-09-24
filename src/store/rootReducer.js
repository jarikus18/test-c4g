import { combineReducers } from 'redux'

import { stations } from './reducer/stations'

const rootReducer = {
  stations,
}

export default combineReducers(rootReducer)
