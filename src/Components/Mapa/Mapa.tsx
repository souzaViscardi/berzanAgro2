import { MapContainer, TileLayer, Marker, Popup, useMap  } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import L from "leaflet";
const pinUrl = "/pin.png"
const customIcon = new L.Icon({
  iconUrl: pinUrl,
  iconSize: [32, 32], 
  iconAnchor: [16, 32], 
  popupAnchor: [0, -32],
});
interface MyMapProps {
    center: [number, number];
    zoom: number;
  }


const Mapa = () => {
    const center: [number, number] =  [-23.615370, -47.045270];
    const zoom: number =  10;
    const SetViewOnLoad = ({ center, zoom }: MyMapProps) => {
      const map = useMap();
    
      useEffect(() => {
        map.setView(center, zoom);
      }, [map, center, zoom]);
    
      return null;
    };
    return (
      <MapContainer  style={{ height: '300px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker position={center} icon={customIcon}>
          <Popup>
            Localização aqui!
          </Popup>
        </Marker>
        <SetViewOnLoad center={center} zoom={zoom} />

      </MapContainer>
    );
  };
  
export default Mapa;