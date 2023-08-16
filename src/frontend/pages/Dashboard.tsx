"use client"
import CareerProgressionCard from '@/components/UserCarrerProgression';
import FlightStatusCard from '@/components/UserFlightStatus';
import FlightMapCard from '@/components/UserFlights';
import UserOverview from '@/components/UserOverview';
import { useAppSelector } from '@/redux/hooks';

async function getUserInfo(email: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/user/${email}`);
    const json = await response.json();
    return json;
}

export default function Dashboard() {
    const selector = useAppSelector((state) => state.auth);
    const user = getUserInfo(selector.email? selector.email : "");
    return (
        <>
                <UserOverview money={10000} reputation={0} rank='N/A' airline='N/A' achievements={0} username={`${selector.firstname} ${selector.lastname}`} salary={120}/>
                <FlightMapCard />
                <div className="flex gap-2">
                <FlightStatusCard />
                <CareerProgressionCard />
                </div>
        </>
    );
}
