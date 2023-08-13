
import FlightMap from './Map';

export default function FlightMapCard() {
  const flights = [
    { id: 1, departure: { lat: 51.505, lng: -0.09 }, destination: { lat: 51.51, lng: -0.1 }, description: 'Flight 1' },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl text-black font-semibold mb-4">Your flights</h2>
      <div className="w-full h-64">
        <FlightMap flights={flights}/>
      </div>
    </div>
  );
}
