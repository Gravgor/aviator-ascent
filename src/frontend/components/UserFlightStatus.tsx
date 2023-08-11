import { FiClock, FiMapPin, FiTrendingUp } from 'react-icons/fi';

export default function FlightStatusCard() {
    const ongoingFlights = [
        {
            id: 1,
            callsign: 'SWA123',
            status: 'In Progress',
            departure: 'JFK',
            arrival: 'LAX',
            flightTime: '2h 30m',
            distanceRemaining: '800 miles',
            progress: 60,
            eta: '17:45',
            aircraft: {
                model: 'Boeing 737',
                registration: 'N12345',
                type: 'Passenger',
            },
        },
        // Add more ongoing flights
    ];

    return (
        <div className="bg-white rounded-lg shadow p-6 mb-6 w-1/2">
            <h2 className="text-xl font-semibold mb-4 text-black">Your Actual Flight</h2>
            {ongoingFlights.length > 0 ? (
                <div className="grid grid-cols-2 gap-6">
                    {ongoingFlights.map((flight) => (
                        <div key={flight.id} className="bg-gray-100 rounded-lg p-4">
                            <p className="text-xs text-gray-500">{flight.callsign}</p>
                            <p className="text-lg font-semibold text-black">{flight.status}</p>
                            <p className="text-gray-500">
                                <FiMapPin className="inline mr-1" />
                                {flight.departure} to {flight.arrival}
                            </p>
                            <p className="text-gray-500">
                                <FiClock className="inline mr-1" />
                                {flight.flightTime} remaining
                            </p>
                            <div className="relative w-full h-2 bg-gray-200 rounded-full mt-1">
                                <div
                                    className="absolute left-0 top-0 h-2 bg-blue-500 rounded-full"
                                    style={{ width: `${flight.progress}%` }}
                                ></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">{flight.progress}% completed</p>
                            <p className="text-gray-500">ETA: {flight.eta}</p>
                            <p className="text-gray-500">
                                Aircraft: {flight.aircraft.model} ({flight.aircraft.registration})
                            </p>
                            <p className="text-gray-500">Type: {flight.aircraft.type}</p>
                            <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 hover:text-white mt-2 transition-colors">
                                View More
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">No ongoing flights.</p>
            )}
        </div>
    );
}
