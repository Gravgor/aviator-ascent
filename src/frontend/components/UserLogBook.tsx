import { FiClock, FiDollarSign, FiAirplay, FiAward } from 'react-icons/fi';

export default function UserLogbook() {
    const completedFlights = [
        {
            id: 1,
            date: '2023-08-10',
            duration: '2h 30m',
            earnings: '$500',
            aircraft: 'Boeing 737',
            flightType: 'Passenger',
        },
        {
            id: 2,
            date: '2023-08-12',
            duration: '1h 45m',
            earnings: '$350',
            aircraft: 'Airbus A320',
            flightType: 'Passenger',
        },
        {
            id: 3,
            date: '2023-08-15',
            duration: '3h 10m',
            earnings: '$600',
            aircraft: 'Embraer E190',
            flightType: 'Cargo',
        },
        // Add more completed flight data
    ];
    

    return (
        <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-black">Flight History</h2>
            {completedFlights.length > 0 ? (
                <div>
                    {completedFlights.map((flight) => (
                        <div key={flight.id} className="mb-4">
                            <p className="text-xs text-gray-500">{flight.date}</p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-lg font-semibold text-black">
                                        <FiAirplay className="inline mr-2" />
                                        {flight.aircraft} - {flight.flightType}
                                    </p>
                                    <p className="text-gray-500">
                                        <FiClock className="inline mr-2" />
                                        Duration: {flight.duration}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-500">
                                        <FiDollarSign className="inline mr-2" />
                                        Earnings: {flight.earnings}
                                    </p>
                                    <button className="text-blue-500 hover:underline">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">No completed flights.</p>
            )}
        </div>
    );
}
