"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
    const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <Image
        src="/images/notfound.png"
        alt="404 Not Found"
        width={400}
        height={400}
      />
      <h1 className="text-4xl font-bold mt-4 text-black">Page Not Found</h1>
      <p className="text-gray-600 mt-2">
        Sorry, the page you&rsquo;re looking for doesn&rsquo;t exist.
      </p>
      <button className="flex items-center mt-4 text-blue-500 hover:underline" onClick={(e) => {
            e.preventDefault();
            router.back();
      }}>
          <FiArrowLeft className="mr-1" /> Go back to page you came from
      </button>
    </div>
  );
}
