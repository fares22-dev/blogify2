import Blog from '@/models/blog'
import connectMongoDB from '@/libs/mongodb.js'
import { NextResponse } from 'next/server'

export async function POST(request){
console.log('i got to post')
const {title,snippet,body}=await request.json()
await connectMongoDB()
await Blog.create({title,snippet,body})
return NextResponse.json({message:"BLOG CREATED"})
}

export async function GET() {
    await connectMongoDB ( ) ;
    const blogs= await Blog.find().sort({ createdAt: -1 }); 
    return NextResponse.json(blogs);

}
    export async function DELETE (request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB ( ) ;
    await Blog.findByIdAndDelete(id);
    return NextResponse.json({ message: "Blog deleted" }, { status: 200 });
    }