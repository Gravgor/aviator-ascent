import { FiDollarSign, FiTrendingUp, FiMapPin, FiAward } from 'react-icons/fi';
import Image from 'next/image';
import React from 'react';

export default function UserOverview() {

    return (
        <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Overview and Stats</h2>
            <div className="grid grid-cols-2 gap-4">
                {/* Bank Account */}
                <div className="bg-blue-500 text-white rounded-lg p-4 flex items-center">
                    <FiDollarSign className="text-2xl mr-2" />
                    <div>
                        <p className="text-xs">Bank Account</p>
                        <p className="text-lg font-semibold">$120,450</p>
                    </div>
                </div>

                {/* Reputation Level */}
                <div className="bg-green-500 text-white rounded-lg p-4 flex items-center">
                    <FiTrendingUp className="text-2xl mr-2" />
                    <div>
                        <p className="text-xs">Reputation Level</p>
                        <p className="text-lg font-semibold">Master Pilot</p>
                    </div>
                </div>

                {/* Current Rank */}
                <div className="bg-yellow-500 text-white rounded-lg p-4 flex items-center">
                    <FiMapPin className="text-2xl mr-2" />
                    <div>
                        <p className="text-xs">Current Rank</p>
                        <p className="text-lg font-semibold">Captain</p>
                    </div>
                </div>

                {/* Achievements */}
                <div className="bg-purple-500 text-white rounded-lg p-4 flex items-center">
                    <FiAward className="text-2xl mr-2" />
                    <div>
                        <p className="text-xs">Achievements</p>
                        <p className="text-lg font-semibold">12 Earned</p>
                    </div>
                </div>
            </div>

            {/* User Info */}
            <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                    <Image
                        src="/images/user-avatar.png"  // Replace with the actual image URL
                        alt="User Avatar"
                        width={48}
                        height={48}
                        className="rounded-full"
                    />
                </div>
                <div className="ml-4">
                    <p className="text-lg text-black font-semibold">John Doe</p>
                    <p className="text-gray-500">Airline: Aviator Airways</p>
                    <p className="text-gray-500">Hourly Salary: $100</p>
                </div>
            </div>

            {/* XP Slider */}
            
        </div>
    );
};
