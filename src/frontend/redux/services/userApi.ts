import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = {
    id: number;
    username: string;
    email: string;
}

type LoginResponse = {
    ok: boolean;
    message?: string;
}

type RegisterResponse = {
    user: User;
    message?: string;
    error?: boolean;
}

type GetUserResponse = {
    user: User;
}

type LoginCredentials = {
    email: string;
    password: string;
}

type RegisterCredentials = {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export const userApi = createApi({
    reducerPath: "userApi",
    refetchOnFocus: true,
    refetchOnReconnect: true,
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    endpoints: (builder) => ({
        loginUser: builder.mutation<LoginResponse, LoginCredentials>({
            query: (credentials) => ({
                url: "/auth/login",
                method: "POST",
                body: credentials,
            })
        }),
        registerUser: builder.mutation<RegisterResponse, RegisterCredentials>({
            query: (credentials) => ({
                url: "/auth/register",
                method: "POST",
                body: credentials,
        })
    }),
})
})

export const { useLoginUserMutation, useRegisterUserMutation } = userApi;
