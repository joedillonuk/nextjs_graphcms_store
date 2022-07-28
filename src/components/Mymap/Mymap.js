import { useEffect } from 'react';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import styles from './Mymap.module.scss';

import iconMarker2x from 'leaflet/dist/images/marker-icon-2x.png';
import iconMarker from 'leaflet/dist/images/marker-icon.png';
import iconMarkerShadow from 'leaflet/dist/images/marker-shadow.png';

const { TileLayer, MapContainer } = ReactLeaflet;

const position = [51.505, -0.09]

const Mymap = () => {

 

  let mapClassName = styles.map;


  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: iconMarker2x.src,
      iconUrl: iconMarker.src,
      shadowUrl: iconMarkerShadow.src
    })
  }, []);

  return (
          <div>this is Mymap</div>
    // <MapContainer center={position} zoom={12}scrollWheelZoom={false}>
    //   <TileLayer
    // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //   />
    // </MapContainer>
  )
}

export default Mymap;
