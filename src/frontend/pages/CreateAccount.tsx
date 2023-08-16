"use client"

import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { FiUser, FiLock, FiArrowRight, FiMail, FiArrowLeft } from "react-icons/fi";
import Image from "next/image";
import Link from 'next/link'
import SubmitButton from "@/components/global/Button";
import { useAppDispatch } from "@/redux/hooks";
import { addNotification } from "@/redux/features/notificationSlice";
import { useRouter } from "next/navigation";

type FormValues = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
};


export default function CreateAccount() {

    const [errorVisible, setErrorVisible] = useState(false);

    const [isLoading, setLoading] = useState(false);

    const dispatch = useAppDispatch();
    const router = useRouter();
    const { register, handleSubmit } = useForm<FormValues>()

    useEffect(() => {
        const timer = setTimeout(() => {
            setErrorVisible(false);
        }, 10000);

        return () => {
            clearTimeout(timer);
        };
    }, [errorVisible]);

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/auth/create-account`, {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json',
                 },
                 body: JSON.stringify(data),
             });
             const json = await response.json();
             if (!response.ok) {
                 throw new Error(json.error);
             } else {
                 setLoading(false);
                 dispatch(addNotification({
                     type: "success",
                     message: "Account created successfully! Please check your email to verify your account.",
                 }))
                 router.push('/confirm-email')
                }
         } catch (error) {
             if (error instanceof Error) {
                 setLoading(false);
                 dispatch(addNotification({
                     type: "error",
                     message: error.message,
                 }))
             }
         }

    }
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
                <div className="bg-white shadow-md rounded-md p-8 w-96 relative z-10">
                    <div className="text-center">
                        <Image
                            src="/images/authorization/logo.png"
                            alt="Aviator Ascent Logo"
                            width={120}
                            height={120}
                            className="mx-auto mb-2"
                        />
                    </div>
                    <h2 className="text-2xl text-black text-center font-semibold mb-4 mt-4">Create an Account</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4 relative">
                            <label htmlFor="username" className="block mb-1 font-medium text-black">
                                Username
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="username"
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 text-gray-900 pl-10`}
                                    {...register('username')}
                                    onFocus={() => setErrorVisible(false)}
                                />
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <FiUser className="text-gray-600" />
                                </span>
                            </div>
                            
                        </div>
                        <div className="mb-4 relative">
                            <label htmlFor="email" className="block mb-1 font-medium text-black">
                                Email
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 text-gray-900 pl-10`}
                                    {...register('email')}
                                    onFocus={() => setErrorVisible(false)}
                                />
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <FiMail className="text-gray-600" />
                                </span>
                            </div>
                            
                        </div>
                        <div className="mb-4 relative">
                            <label htmlFor="firstName" className="block mb-1 font-medium text-black">
                                First Name
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="firstName"
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 text-gray-900 pl-10`}
                                    {...register('firstName')}
                                    onFocus={() => setErrorVisible(false)}
                                   
                                />
                                {/* Add icon */}
                            </div>
                            
                        </div>

                        <div className="mb-4 relative">
                            <label htmlFor="lastName" className="block mb-1 font-medium text-black">
                                Last Name
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="lastName"
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 text-gray-900 pl-10`}
                                    {...register('lastName')}
                                    onFocus={() => setErrorVisible(false)}
                                    
                                />
                                {/* Add icon */}
                            </div>
                            
                        </div>
                        <div className="mb-4 relative">
                            <label htmlFor="password" className="block mb-1 font-medium text-black">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    id="password"
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 text-gray-900 
                                         pl-10`}
                                    {...register("password")}
                                    onFocus={() => setErrorVisible(false)}
                                    
                                />
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <FiLock className="text-gray-600" />
                                </span>
                            </div>
                            
                        </div>
                        <SubmitButton text="Create Account" isLoading={isLoading} />
                    </form>
                    <div className="text-center mt-4">
                        <Link className="text-blue-500 hover:underline flex items-center" href="/authorization" passHref>
                            <FiArrowLeft className="inline-block mr-1" />
                            Back to Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}
