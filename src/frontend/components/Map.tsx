"use client"
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";
import { Fragment } from 'react';

type Flight = {
    id: number;
    departure: { lat: number; lng: number };
    destination: { lat: number; lng: number };
    description: string;
}

interface FlightMapProps {
    flights: Flight[];
}


export default function FlightMap({
    flights 
} : FlightMapProps) {
    return (
        <MapContainer center={[51.5, -0.09]} zoom={14} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ3JhdmdvciIsImEiOiJjbGw2bmF5ZnAwbmt0M3Fta3A2ZXlrNzlpIn0.5YZY0zUqkr5uIUiM5EhZ7g"
          />
          {flights.map((flight) => (
            <Fragment key={flight.id}>
              <Polyline positions={[flight.departure, flight.destination]} color="blue" />
              <Marker position={flight.departure}>
                <Popup>{flight.description} - Departure</Popup>
              </Marker>
              <Marker position={flight.destination}>
                <Popup>{flight.description} - Destination</Popup>
              </Marker>
            </Fragment>
          ))}
        </MapContainer>
    )
}