"use client"
import { useState, useEffect } from "react";
import { useForm, Resolver } from "react-hook-form";
import { FiMail, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

type FormValues = {
    email: string;
};

type FormErrors = {
    email?: {
        type: string;
        message: string;
    };
};

const resolver: Resolver<FormValues> = async (values) => {
    const errors: FormErrors = {};

    if (!values.email) {
        errors.email = {
            type: "required",
            message: "This is required.",
        };
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = {
            type: "invalid",
            message: "Invalid email address.",
        };
    }

    return {
        values: Object.keys(errors).length === 0 ? values : {},
        errors,
    };
};

export default function ForgotPassword() {
    const [errorVisible, setErrorVisible] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ resolver });

    useEffect(() => {
        const timer = setTimeout(() => {
            setErrorVisible(false);
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [errorVisible]);

    const onSubmit = handleSubmit((data) => console.log(data));

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
                    <h2 className="text-2xl text-black text-center font-semibold mb-4 mt-4">Forgot Password</h2>
                    <form onSubmit={onSubmit}>
                        <div className="mb-6 relative">
                            <label htmlFor="email" className="block mb-1 font-medium text-black">
                                Email
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 text-gray-900 ${errors.email && errorVisible ? 'border-red-500' : ''
                                        } pl-10`}
                                    {...register('email')}
                                    onFocus={() => setErrorVisible(false)}
                                    onBlur={() => setErrorVisible(errors.email !== undefined)}
                                />
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <FiMail className="text-gray-600" />
                                </span>
                            </div>
                            {errors.email && errorVisible && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
                        >
                            <FiArrowRight className="inline-block mr-2" />
                            Reset Password
                        </button>
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
