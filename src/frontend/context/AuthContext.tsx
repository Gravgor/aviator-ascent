"use client"

import SessionProvider from "@/components/global/SessionProvider"


export type Session = {
    user: {
        username: string;
        email: string;
        firstName: string;
        lastName: string;
    }
}

export interface IAuthContext {
    children: React.ReactNode;
    session: Session;
}

export default function AuthContext({children, session}: IAuthContext) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}