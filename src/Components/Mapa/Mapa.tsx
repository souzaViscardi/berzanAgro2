import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';



const Mapa: React.FC = () => {
    const position: [number, number] =  [-23.615370, -47.045270];
  
    return (
      <MapContainer center={position} zoom={10} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Localização aqui!
          </Popup>
        </Marker>
      </MapContainer>
    );
  };
  
export default Mapa;