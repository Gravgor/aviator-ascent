"use client"
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function ConfirmEmail() {
    const router = useRouter();

    return (
        <div className="relative min-h-screen">
            <Image
                src="/images/authorization/cockpit.png"
                alt="Cockpit Background"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="flex items-center justify-center min-h-screen relative">
                <div className='bg-white rounded-lg shadow-lg p-8 max-w-sm w-full space-y-4'>
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold mb-4 text-black">
                            Confirm Your Email Address
                        </h2>
                        <p className='text-black'>
                            Thank you for signing up! We have sent an email to
                            your provided address with a confirmation link. Please
                            check your inbox and click the link to verify your email.
                        </p>
                    </div>
                    <div className="text-center">
                        <button
                            className="text-blue-500 hover:underline"
                            onClick={() => {
                                // Perform any action you want when the button is clicked
                                // For example, redirect the user to a dashboard or profile page
                                router.push('/dashboard');
                            }}
                        >
                            I have already confirmed
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
