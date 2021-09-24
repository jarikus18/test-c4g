import Actions from 'store/rootActions'
import api from 'services/api'
import { ENDPOINTS } from 'constants/api'

export const getStations = () => {
  return async dispatch => {
    try {
      dispatch(Actions.stations.getStations())
      const { data } = await api.get(ENDPOINTS.stations())
      dispatch(Actions.stations.getStationsSuccess(data))
    } catch (error) {
      dispatch(Actions.stations.getStationsError(error))
    }
  }
}
