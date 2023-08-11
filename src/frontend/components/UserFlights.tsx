import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";
import { Fragment } from 'react';

export default function FlightMapCard() {
  const flights = [
    { id: 1, departure: { lat: 51.505, lng: -0.09 }, destination: { lat: 51.51, lng: -0.1 }, description: 'Flight 1' },
    // Add more flight data
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl text-black font-semibold mb-4">Your flights</h2>
      <div className="w-full h-64">
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
      </div>
    </div>
  );
}
