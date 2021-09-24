import { Map } from 'components/Map'
import { PROGRESS_TYPE } from 'constants/progressType'

const Customers = ({ list, progress }) => {
  if (progress !== PROGRESS_TYPE.SUCCESS) {
    return null
  }

  return (
    <Map
      id="map"
      list={list}
      progress={progress}
      options={{
        center: { lat: 0, lng: 0 },
        zoom: 5,
      }}
    />
  )
}

export default Customers
