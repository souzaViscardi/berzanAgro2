import { MapContainer, TileLayer, Marker, Popup, useMap  } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

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
      <MapContainer  style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker position={center}>
          <Popup>
            Localização aqui!
          </Popup>
        </Marker>
        <SetViewOnLoad center={center} zoom={zoom} />

      </MapContainer>
    );
  };
  
export default Mapa;