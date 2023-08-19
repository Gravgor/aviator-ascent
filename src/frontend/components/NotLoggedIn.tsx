"use client"
import { useRouter } from "next/navigation";


export default function NotLoggedIn() {

    const router = useRouter();

    const handleGoBack = () => {
        router.push('/authorization/login');
    };

    return (
        <div className="flex items-center justify-center mx-auto min-h-screen bg-gray-100">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h1 className="text-2xl font-semibold mb-4 text-black">Access Denied</h1>
            <p className="text-lg text-gray-600 mb-6">
              You can&rsquo;t be here because you are not logged in.
            </p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              onClick={handleGoBack}
            >
              Go Back to Login
            </button>
          </div>
        </div>
      );
}