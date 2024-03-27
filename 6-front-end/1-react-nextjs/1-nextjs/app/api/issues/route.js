import {NextRequest, NextResponse} from "next/server"
export const GET = async (NextRequest)=>{

    return NextResponse.json({message:"This is get request"})

}

