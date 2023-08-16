"use client"
import CareerProgressionCard from '@/components/UserCarrerProgression';
import FlightStatusCard from '@/components/UserFlightStatus';
import FlightMapCard from '@/components/UserFlights';
import UserOverview from '@/components/UserOverview';
import { useAppSelector } from '@/redux/hooks';



export default function Dashboard() {
    const selector = useAppSelector((state) => state.auth);
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
