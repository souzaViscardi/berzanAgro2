import { MapContainer, TileLayer, Marker, Popup, useMap  } from 'react-leaflet';
import {useState} from "react";
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import L from "leaflet";
import "./style.css"
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
    const [address, setAddress] = useState("")
    const center: [number, number] =  [-23.615370, -47.045270];
    const zoom: number =  10;
    const getAddressFromCoords = async (lat: number, lon: number) => {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&addressdetails=1`
      );
      const data = await response.json();
      console.log(data);
      if (data && data.address) {
        const formattedAddress = `${data.address.road}, ${data.address.city_district}, ${data.address.country}`;
        setAddress(formattedAddress);
      }
    };
    const SetViewOnLoad = ({ center, zoom }: MyMapProps) => {
      const map = useMap();
    
      useEffect(() => {
        map.setView(center, zoom);
        getAddressFromCoords(center[0], center[1]);
      }, [map, center, zoom]);
    
      return null;
    };
    return (
      <MapContainer  style={{ height: '300px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker position={center} icon={customIcon}>
          <Popup>
            <div>
              <strong>Coordenadas:</strong><br />
              Latitude: {center[0]} <br />
              Longitude: {center[1]} <br /><br />
              
              <strong>Endereço:</strong><br />
              {address ? address : 'Carregando endereço...'}
            </div>          
          </Popup>
        </Marker>
        <SetViewOnLoad center={center} zoom={zoom} />

      </MapContainer>
    );
  };
  
export default Mapa;