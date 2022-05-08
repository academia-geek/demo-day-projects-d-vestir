import React from 'react'
import Map, { Marker, Popup, NavigationControl, FullscreenControl, GeolocateControl } from 'react-map-gl'
import { DivMap, Logo, Ptag, Title, StyledMap } from './Mapa.Styled'

const MAP_KEY = 'pk.eyJ1IjoiYW5kcmVzbHYiLCJhIjoiY2wyajcwd3dnMDFibTNqbWs4NGtoOHI2dSJ9.qhpE3jLPqJyCTFIxHgCZGA'

const Mapa = () => {

  return (
    <>
      <StyledMap>
        <Map
          initialViewState={{
            longitude: -74.16996,
            latitude: 4.590509,
            zoom: 12,
            pitch: 50,
            unit: 'metric',
            profile: 'mapbox/driving',
            alternatives: false,
            geometries: 'geojson',
            controls: { instructions: false },
            flyTo: false
          }}

          mapStyle='mapbox://styles/andreslv/cl2j5p4hy003m14mt98xj590d'
          mapboxAccessToken={MAP_KEY}
          style={{ width: 700, height: 500 }}
          userLocation={true}
        >
          <Marker
            longitude={-74.169}
            latitude={4.590}
          >
            <div >
              <Logo src='/images/logo2.png' />
              <Ptag>📌</Ptag>
            </div>
          </Marker>

          <Popup
            role='img'
            longitude={-74.169}
            latitude={4.590}
            offset={25}
            closeButton={true}
            closeOnClick={true}
            openOnClick={true}
          >
            <DivMap>
              <Logo src='/images/logo1.png' />
              <Title>Aquí está ubicada nuestra tienda física.</Title>
              <p>Cll 56 a N 80 Oeste.</p>
              <p>Teléfono: 555 555 555</p>
            </DivMap>
          </Popup>

          <FullscreenControl />
          <NavigationControl search={true}
          />
          <GeolocateControl
            positionOptions={{
              enableHighAccuracy: true,
            }}
            trackUserLocation={true}
          />
        </Map>
      </StyledMap>
    </>
  )
}

export default Mapa

