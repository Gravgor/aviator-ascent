"use client"
import { useState, useEffect } from "react";
import { useForm, Resolver } from "react-hook-form";
import { FiUser, FiLock, FiArrowRight, FiLink, FiLoader } from "react-icons/fi";
import Image from "next/image";
import Link from 'next/link'
import SubmitButton from "@/components/global/Button";
import { addNotification } from "@/redux/features/notificationSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { setUser } from "@/redux/features/authSlice";
import { useLoginUserMutation } from "@/redux/services/userApi";


type FormValues = {
    email: string;
    password: string;
};

type FormErrors = {
    email?: {
        type: string;
        message: string;
    };
    password?: {
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

    return {
        values: Object.keys(errors).length === 0 ? values : {},
        errors,
    };
};


export default function Authorization() {

    const [errorVisible, setErrorVisible] = useState(false);

    const [isLoading, setLoading] = useState(false);

    const [loginUser, { isLoading: isLoginLoading }] = useLoginUserMutation();

    const dispatch = useAppDispatch();

    const router = useRouter();

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


    const onSubmit = handleSubmit(async (data) => {
        setLoading(true)
        setTimeout(async () => {
            try {
              const response = await loginUser(data).unwrap();
              if (response.ok) {
                dispatch(setUser({
                  token: "token",
                }));
                router.push("/dashboard");
              } else if (!response.ok) {
                dispatch(addNotification({
                  type: "error",
                  message: response.message,
                }));
              }
            } catch (error) {
              console.log(error);
              dispatch(addNotification({
                type: "error",
                message: "There was a server error. Please try again later.",
              }));
            } finally {
              setLoading(false);
            }
          }, 1000);
        
    })

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
                    <h2 className="text-2xl text-black text-center font-semibold mb-4 mt-4">Sign In to Aviator Ascent</h2>
                    <form onSubmit={onSubmit}>
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
                                    disabled={isLoading}
                                />
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <FiUser className="text-gray-600" />
                                </span>
                            </div>
                            {errors.email && errorVisible && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                        <div className="mb-6 relative">
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
                                    disabled={isLoading}
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
                        <SubmitButton text="Sign In" isLoading={isLoading} />
                    </form>
                    <div className="flex items-center justify-between mt-4">
                        <div className="text-center">
                            <Link className="text-blue-500 hover:underline flex items-center" href="/authorization/forgot-password">
                                <FiLink className="inline-block mr-1" />
                                Forgot Password?
                            </Link>
                        </div>
                        <div className="text-center flex flex-col">
                            <Link className="text-blue-500 hover:underline flex items-center" href="/authorization/create-account" passHref>
                                <FiLink className="inline-block mr-1" />
                                Create Account
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
