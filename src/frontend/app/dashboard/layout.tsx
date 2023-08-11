import Sidebar from "@/components/Sidebar";


export default function Layout({
    children,
} : {
    children: React.ReactNode
}) {
    return (
        <div className="flex bg-gray-100">
            <Sidebar />
            <main className="flex-grow bg-gray-100 p-8">
                {children}
            </main>
        </div>
    );
}