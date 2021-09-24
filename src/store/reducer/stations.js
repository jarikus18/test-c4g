import { createActionCreators, createReducerFunction, ImmerReducer } from 'immer-reducer'

import { PROGRESS_TYPE } from 'constants/progressType'

export class stationsReducer extends ImmerReducer {
  getStations() {
    this.draftState = {
      progress: PROGRESS_TYPE.WORK,
    }
  }

  getStationsSuccess(data) {
    this.draftState = {
      progress: PROGRESS_TYPE.SUCCESS,
      count: data.count,
      list: data.stations,
    }
  }

  getStationsError(error) {
    this.draftState = {
      error,
      progress: PROGRESS_TYPE.ERROR,
    }
  }
}

export const stations = createReducerFunction(stationsReducer, {
  progress: PROGRESS_TYPE.IDLE,
})

export const AccountActions = createActionCreators(stationsReducer)
export default AccountActions
