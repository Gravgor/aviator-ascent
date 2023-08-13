"use client"

import { useState, useEffect } from "react";
import { useForm, Resolver } from "react-hook-form";
import { FiUser, FiLock, FiArrowRight, FiMail, FiArrowLeft } from "react-icons/fi";
import Image from "next/image";
import Link from 'next/link'
import SubmitButton from "@/components/global/Button";

type FormValues = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
};

type FormErrors = {
    username?: {
        type: string;
        message: string;
    };
    email?: {
        type: string;
        message: string;
    };
    password?: {
        type: string;
        message: string;
    };
    confirmPassword?: {
        type: string;
        message: string;
    };
};

const resolver: Resolver<FormValues> = async (values) => {
    const errors: FormErrors = {};

    if (!values.username) {
        errors.username = {
            type: "required",
            message: "This is required.",
        };
    }

    if (!values.email) {
        errors.email = {
            type: "required",
            message: "This is required.",
        };
    } else if (!/^\S+@\S+$/i.test(values.email)) {
        errors.email = {
            type: "pattern",
            message: "Invalid email format.",
        };
    }

    if (!values.password) {
        errors.password = {
            type: "required",
            message: "This is required.",
        };
    } else if (values.password.length < 6) {
        errors.password = {
            type: "minLength",
            message: "Password must be at least 6 characters long.",
        };
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = {
            type: "required",
            message: "This is required.",
        };
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = {
            type: "validate",
            message: "Passwords do not match.",
        };
    }

    return {
        values: Object.keys(errors).length === 0 ? values : {},
        errors,
    };
};

export default function CreateAccount() {

    const [errorVisible, setErrorVisible] = useState(false);
    const [notificationVisible, setNotificationVisible] = useState(false);

    const [isLoading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ resolver });

    useEffect(() => {
        const timer = setTimeout(() => {
            setErrorVisible(false);
        }, 10000);

        return () => {
            clearTimeout(timer);
        };
    }, [errorVisible]);

    const onSubmit = handleSubmit(async (data) => {
        setLoading(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            throw new Error("Something went wrong.");
        } catch (error) {
            if (error instanceof Error) {
                setLoading(false);
                setNotificationVisible(true);
            }
        }
    });
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
                    <form onSubmit={onSubmit}>
                        <div className="mb-4 relative">
                            <label htmlFor="username" className="block mb-1 font-medium text-black">
                                Username
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="username"
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 text-gray-900 ${errors.username && errorVisible ? 'border-red-500' : ''
                                        } pl-10`}
                                    {...register('username')}
                                    onFocus={() => setErrorVisible(false)}
                                    onBlur={() => setErrorVisible(errors.username !== undefined)}
                                />
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <FiUser className="text-gray-600" />
                                </span>
                            </div>
                            {errors.username && errorVisible && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.username.message}
                                </p>
                            )}
                        </div>
                        <div className="mb-4 relative">
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
                        <div className="mb-4 relative">
                            <label htmlFor="password" className="block mb-1 font-medium text-black">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    id="password"
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 text-gray-900 ${errors.password && errorVisible ? 'border-red-500' : ''
                                        } pl-10`}
                                    {...register("password")}
                                    onFocus={() => setErrorVisible(false)}
                                    onBlur={() => setErrorVisible(errors.password !== undefined)}
                                />
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <FiLock className="text-gray-600" />
                                </span>
                            </div>
                            {errors.password && errorVisible && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.password?.message}
                                </p>
                            )}
                        </div>
                        <div className="mb-6 relative">
                            <label htmlFor="confirmPassword" className="block mb-1 font-medium text-black">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 text-gray-900 ${errors.confirmPassword && errorVisible ? 'border-red-500' : ''
                                        } pl-10`}
                                    {...register("confirmPassword")}
                                    onFocus={() => setErrorVisible(false)}
                                    onBlur={() => setErrorVisible(errors.confirmPassword !== undefined)}
                                />
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <FiLock className="text-gray-600" />
                                </span>
                            </div>
                            {errors.confirmPassword && errorVisible && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.confirmPassword.message}
                                </p>
                            )}
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
