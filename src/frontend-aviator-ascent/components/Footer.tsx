import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="fixed bottom-0 w-full bg-transparent text-gray-500 py-8">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Aviator Ascent. All rights reserved.</p>
            </div>
        </footer>
    );
}
