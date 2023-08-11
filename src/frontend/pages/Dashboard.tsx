"use client"
import CareerProgressionCard from '@/components/UserCarrerProgression';
import FlightStatusCard from '@/components/UserFlightStatus';
import FlightMapCard from '@/components/UserFlights';
import UserOverview from '@/components/UserOverview';

export default function Dashboard() {
    return (
        <>
                <UserOverview />
                <FlightMapCard />
                <div className="flex gap-2">
                <FlightStatusCard />
                <CareerProgressionCard />
                </div>
        </>
    );
}
