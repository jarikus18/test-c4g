import classes from './Map.module.scss'
import { useEffect } from 'react'

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY

export const Map = props => {
  const onScriptLoad = () => {
    const mapId = document.getElementById(props.id)
    const map = new window.google.maps.Map(mapId, props.options)
    const bound = new window.google.maps.LatLngBounds()

    props?.list?.map(({ location, address }) => {
      const [lng, lat] = location?.coordinates || []
      const marker = new window.google.maps.Marker({
        position: { lat, lng },
        map,
        label: {
          text: address[0],
          color: '#ffffff',
          fontSize: '18px',
        },
      })
      bound.extend(marker.position)
    })

    map.fitBounds(bound)
  }

  useEffect(() => {
    if (window.google) {
      onScriptLoad()
      return
    }

    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.src = `https://maps.google.com/maps/api/js?key=${API_KEY}`
    const x = document.getElementsByTagName('script')[0]
    x.parentNode.insertBefore(s, x)

    s.addEventListener('load', () => {
      onScriptLoad()
    })
  }, [])

  return <div className={classes.map} id={props.id} />
}
