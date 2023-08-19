import { NextResponse } from "next/server"

export async function GET(){
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/auth/session/check`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const res = await req.json()
    if(!res.ok) {
        return NextResponse.json(res)
    } else {
        return NextResponse.next()
    }
    }
