import prisma from '@/app/libs/prismadb'
import { NextResponse } from 'next/server'

export const DELETE = async (request, { params }) => {
    try {
        const { id } = params;

        const deletedPost = await prisma.post.delete({
            where: {
                id: id
            }
        });

        if (!deletedPost) {
            return NextResponse.json({ message: "Post not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Post deleted" });

    } catch (error) {
        return NextResponse.json({ message: "Error deleting the post" }, { status: 500 });
    }
}



export const GET = async (request, { params }) => {
    try {
        const { id } = params;

        const post = await prisma.post.findUnique({
            where: {
                id: id
            }
        });

        if (!post) {
            return NextResponse.json({ message: "Post not found" }, { status: 404 });
        }

        return NextResponse.json(post);

    } catch (error) {
        return NextResponse.json({ message: "Error getting the post" }, { status: 500 });
    }
}


export const PATCH = async (request, { params }) => {
    try {
        const id = params.id;
        const body = await request.json(); 
        const { title, content } = body;

        const updatedPost = await prisma.post.update({
            where: { id },
            data: {
                title,
                content,
            },
        });

        if (!updatedPost) {
            return NextResponse.json({ message: "No post found for update" }, { status: 404 });
        }

        return NextResponse.json(updatedPost);
    } catch (error) {
        return NextResponse.json({ message: "Error updating the post" }, { status: 500 });
    }
}
