import React from 'react'

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

import { AddressContext } from '../../App'

import styles from './Map.module.scss'

import Points from './Points'

const MapComp = () => {

    const {setAddressValue} = React.useContext(AddressContext)


    const [currCoord, setCoord] = React.useState([59.934650, 30.370225])
    const [currZoom, setZoom] = React.useState(16)
    const mapRef = React.useRef()


    React.useEffect(() => {
        setAddressValue(Points[0].addr)
        setCoord(Points[0].coords)
    }, [])

    const onAddrClick = (point) => {
        setAddressValue(point.addr);
        setCoord(point.coords)
        setZoom(18)
        mapRef.current.setZoom(currZoom);

        
    }

    return (
        <YMaps>
        <section >
          <Map
            instanceRef={mapRef}
            className={styles.map}
            state={{
              center: currCoord, 
              zoom: currZoom,
              
            }}
            
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
          >
            {Points.map((point, index) => (
                <Placemark
                  key={index}

                  geometry={point.coords}
                  onClick={() => onAddrClick(point)}
                />
              ))}

          </Map>
        </section>
      </YMaps>
    )
}

export default MapComp