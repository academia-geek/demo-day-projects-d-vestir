import React, { useState, useEffect } from 'react'
import * as ReactLeaflet from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { storeLocation } from './Stores'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { DivMap, Logo, Title, StyledMap, Stores } from './Mapa.Styled'

import L from 'leaflet'
import iconMarker2x from 'leaflet/dist/images/marker-icon-2x.png'
import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconMarkerShadow from 'leaflet/dist/images/marker-shadow.png'

import center from '@turf/center'
import { points } from '@turf/helpers'
const { MapContainer, useMap, TileLayer, Marker, Popup } = ReactLeaflet;

const features = points(storeLocation.map(({ location }) => {
  return [location.latitude, location.longitude]
}));

const [defaultLatitude, defaultLongitude] = center(features)?.geometry.coordinates;

const Mapa = () => {

  const [activeStore, setActiveStore] = useState();
  console.log('activeStore', activeStore);

  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: iconMarker2x,
      iconUrl: iconMarker,
      shadowUrl: iconMarkerShadow,
    }) 
  }, []) 

  
  const MapEffect = () => {
    const map = useMap() 
    // console.log(map)

    useEffect(() => {

      if (!activeStore) return;
      const { location } = storeLocation.find(({ id }) => id === activeStore)
      map.setView([location.latitude, location.longitude], 14)

      // eslint-disable-next-line
    }, [activeStore]) 
    return null;
  }


  return (
    <>
      <StyledMap>

        <Stores>
          <ul>
            <h2>Tiendas</h2>
            {storeLocation.map(location => {

              function handleOnClick() {
                setActiveStore(location.id)
              }
              return (

                <li key={location.id}>
                  <Title>{location.name}</Title>
                  <p>{location.address}</p>
                  <p>{location.phone}</p>
                  <button onClick={handleOnClick}>
                    Ver en el mapa
                  </button>
                  <a href={`https://www.google.es/maps/dir//${location.location.latitude},${location.location.longitude}/@${location.location.latitude},${location.location.longitude},12z/`} target='_blank' rel="noreferrer" >
                    Calcular distancia -
                    <FaExternalLinkAlt />
                  </a>
                  <hr />
                </li>
              )
            }
            )}
          </ul>
        </Stores>


        <MapContainer center={[defaultLatitude, defaultLongitude]} zoom={4} scrollWheelZoom={false} style={{ width: '100%', height: '100%' }}>
          <>
            <MapEffect />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {storeLocation.map(location => {
              const { latitude, longitude } = location.location;
              return (

                <Marker position={[latitude, longitude]} key={location.id}>
                  <Popup>
                    <DivMap>
                      <Logo src='/images/logo1.png' />
                      <Title>{location.name}</Title>
                      <p>{location.address}</p>
                      <p>{location.phone}</p>
                    </DivMap>
                  </Popup>
                </Marker>
              )
            })}
          </>
        </MapContainer>
      </StyledMap>
    </>
  )
}

export default Mapa

