//post request
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';


export const POST= async(request)=>{
    try {

        const body= await request.json()
        const {title,content}=body

        const newPost= await prisma.post.create({
           data:{
            title,
            content
           }
        })
        
        return NextResponse.json(newPost)
    } catch (error) {

        return NextResponse.json({message:"Post Error"})
        
    }
}


export const GET= async()=>{
    try {

       const posts = await prisma.post.findMany()
        
        return NextResponse.json(posts)
    } catch (error) {

        return NextResponse.json({message:"Post Error"})
        
    }
}