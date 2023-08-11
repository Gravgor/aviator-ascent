"use client"
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

const airlinesData = [
  { id: 1, name: 'Aviator Airways', openPositions: 5, rating: 4.5, callsign: 'AVA', logo: '/airlines/aviator-airways.png' },
  { id: 2, name: 'Skyline Airlines', openPositions: 3, rating: 3.8, callsign: 'SLA', logo: '/airlines/skyline-airlines.png' },
  { id: 3, name: 'AirWings International', openPositions: 8, rating: 4.2, callsign: 'AWI', logo: '/airlines/airwings-international.png' },
  // Add more airline data
];

export default function UserJobMarket() {
  const [searchQuery, setSearchQuery] = useState('');
  const [minRating, setMinRating] = useState(0); // Minimum rating filter
  const [maxRating, setMaxRating] = useState(5); // Maximum rating filter

  const filteredAirlines = airlinesData.filter(airline =>
    airline.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    airline.rating >= minRating &&
    airline.rating <= maxRating
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-black">Job Market</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search for airlines..."
          className="w-full p-2 border rounded-l-md focus:outline-none text-black"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600">
          <FiSearch />
        </button>
      </div>
      <div className="mb-4">
        <label className="text-gray-500">Filter by Rating:</label>
        <input
          type="range"
          min="0"
          max="5"
          step="0.1"
          value={minRating}
          onChange={e => setMinRating(parseFloat(e.target.value))}
        />
        <input
          type="range"
          min="0"
          max="5"
          step="0.1"
          value={maxRating}
          onChange={e => setMaxRating(parseFloat(e.target.value))}
        />
      </div>
      {filteredAirlines.length > 0 ? (
        <div className="grid grid-cols-2 gap-4">
          {filteredAirlines.map(airline => (
            <div
              key={airline.id}
              className="bg-white p-4 shadow-md rounded-md flex justify-between items-center"
            >
              <div className="flex items-center">
                <Image
                  src={airline.logo}
                  alt={`${airline.name} Logo`}
                  className="w-10 h-10 rounded-full mr-4"
                    width={40}
                    height={40}
                />
                <div>
                  <h2 className="text-lg font-semibold text-black">{airline.name}</h2>
                  <div className="flex items-center">
                    <p className="text-gray-500">Rating:</p>
                    {Array.from({ length: Math.floor(airline.rating) }).map((_, index) => (
                      <FaStar key={index} className="text-yellow-500 mx-1" />
                    ))}
                  </div>
                  <p className="text-gray-500">Callsign: {airline.callsign}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2">
                  Apply
                </button>
                <button className="text-blue-500 hover:underline">Details</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No matching airlines found.</p>
      )}
    </div>
  );
}

