"use client"

import { useRouter } from 'next/navigation';
import Image from 'next/image';

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
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">
                    Confirm Your Email Address
                </h2>
                <p>
                    Thank you for signing up! We have sent an email to
                    your provided address with a confirmation link. Please
                    check your inbox and click the link to verify your email.
                </p>
            </div>
        </div>
        </div>
    );
}
