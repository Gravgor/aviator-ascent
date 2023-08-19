import NotLoggedIn from "@/components/NotLoggedIn";
import Sidebar from "@/components/Sidebar";


async function getSession() {
    const response = await fetch(`${process.env.NEXT_DEVELOPMENT_API_URL}/api/session`);
    const session = await response.json();
    return session;
}

export default async function Layout({
    children,
} : {
    children: React.ReactNode
}) {
    const session = await getSession();
    
    if(!session.ok) {
        return (
            <div className="flex bg-gray-100">
                <NotLoggedIn />
            </div>
        );
    } else {
        return (
            <div className="flex bg-gray-100">
                <Sidebar />
                <main className="flex-grow bg-gray-100 p-8">
                    {children}
                </main>
            </div>
        );
    }
}