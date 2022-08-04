import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import IconMarker from '../../assets/icons/pin.svg';
import { Form } from '../Form';
import './Contacts.scss';

const Contacts = () => {
  const LeafIcon = L.Icon.extend({
    options: {}
  });

  const greenIcon = new LeafIcon({
    iconUrl: IconMarker
  });

  return (
    <section className="map">
      <MapContainer center={[25.7979707, -80.2000594]} zoom={13} scrollWheelZoom={false}>
        <TileLayer url="https://api.mapbox.com/styles/v1/marry27/cl62aul88006u15mut9zl4bit/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFycnkyNyIsImEiOiJjbDYyYXlhcjgwZXh3M2Rwbm83Z2RsNmphIn0.agN1SyPcIZJm0_GBHUThcA" />
        <Marker icon={greenIcon} position={[25.7979707, -80.2000594]} />
      </MapContainer>
      <Form />
    </section>
  );
};

export { Contacts };
