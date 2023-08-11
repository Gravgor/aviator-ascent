import Image from 'next/image';
import Link from 'next/link';
import { FiHome, FiAirplay, FiDollarSign, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';

export default function Sidebar() {
    return (
        <aside className="bg-white w-64 shadow h-screen">
            <div className="flex flex-col items-center justify-center h-[140px] mt-4">
                <Image
                    src="/images/authorization/logo.png"
                    alt="Logo"
                    width={100}
                    height={40}
                />
                <p className="text-black text-xl mt-2 mb-2">Aviator Ascent</p>
            </div>
            <nav className="mt-8 flex flex-col items-center justify-center">
                <Link className="flex items-center p-4 text-gray-700 hover:text-blue-500 transition-all" href="/dashboard">
                        <FiHome className="mr-2" /> Dashboard
                </Link>
                <Link className="flex items-center p-4 text-gray-700 hover:text-blue-500 transition-all" href="/dashboard/logbook">
                        <FiAirplay className="mr-2" /> Logbook
                </Link>
                <Link className="flex items-center p-4 text-gray-700 hover:text-blue-500 transition-all" href="/dashboard/job-market">
                        <FiUser className="mr-2" /> Job Market
                </Link>
                <Link className="flex items-center p-4 text-gray-700 hover:text-blue-500 transition-all" href="/earnings">
                        <FiDollarSign className="mr-2" /> Earnings
                </Link>
                <Link className="flex items-center p-4 text-gray-700 hover:text-blue-500 transition-all" href="/settings">
                        <FiSettings className="mr-2" /> Settings
                </Link>
                <Link className="flex items-center p-4 text-gray-700 absolute bottom-0 hover:text-blue-500 transition-all" href="/logout">
                        <FiLogOut className="mr-2" /> Logout
                </Link>
            </nav>
        </aside>
    );
}
