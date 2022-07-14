import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Form } from '../Form';

const containerStyle = {
  width: '100%',
  height: '993px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const Map = () => {
  //   const ref = React.useRef(null);
  //   const [map, setMap] = React.useState();

  //   React.useEffect(() => {
  //     if (ref.current && !map) {
  //       setMap(new window.google.maps.Map(ref.current, {}));
  //     }
  //   }, [ref, map]);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDDjKmqNKlJK_yPLw7j46sWuaq-R_5LGfs'
  });

  //   const [map, setMap] = React.useState(null);

  //   const onLoad = React.useCallback(function callback(map) {
  //     const bounds = new window.google.maps.LatLngBounds(center);
  //     map.fitBounds(bounds);
  //     setMap(map);
  //   }, []);

  //   const onUnmount = React.useCallback(function callback(map) {
  //     setMap(null);
  //   }, []);

  return isLoaded ? (
    <section className="map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        //   onLoad={onLoad}
        //   onUnmount={onUnmount}
      >
        {' '}
      </GoogleMap>
      <Form />
    </section>
  ) : (
    <p>map</p>
  );
};

export { Map };
