import NotLoggedIn from '@/components/NotLoggedIn';
import CareerProgressionCard from '@/components/UserCarrerProgression';
import FlightStatusCard from '@/components/UserFlightStatus';
import FlightMapCard from '@/components/UserFlights';
import UserOverview from '@/components/UserOverview';
import SkeletonLoading from '@/components/global/SkeletonLoading';
import { Suspense } from 'react';

async function getUser() {
    const response = await fetch('/api/user');
    if (!response.ok) {
        throw new Error("There was an error fetching the user.");
    }
    const user = await response.json();
    return user;
}


export default async function Dashboard() {
        const user = await getUser();
        return (
            <>
                <Suspense fallback={<SkeletonLoading />}>
                    <UserOverview />
                    <FlightMapCard />
                    <div className="flex gap-2">
                        <FlightStatusCard />
                        <CareerProgressionCard />
                    </div>
                </Suspense>
            </>
        );
}
