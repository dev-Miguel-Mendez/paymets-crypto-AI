import { NextRequest, NextResponse } from "next/server"
import { verifySession } from "./lib/session";


const protectedRoutes = ['/',]

export const middleware = async(req: NextRequest)=>{


    const path = req.nextUrl.pathname

    const session = await verifySession()

    if(!session && protectedRoutes.includes(path)){
        
        const url = new URL('/signup', req.nextUrl)
        
        return NextResponse.redirect(url)
    }
    
    return NextResponse.next()
}