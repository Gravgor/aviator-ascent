import { NextResponse } from 'next/server'

export const dynamic = true

export async function POST(request: Request){
    const res = await request.json()
    const { email, password } = res
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    const data = await req.json()
    if(data.error || data.message) {
        return NextResponse.json({ok: false, message: data.message})
    } 
    return NextResponse.json({ok: true})
}