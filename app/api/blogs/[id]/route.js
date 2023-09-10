import connectMongoDB from "@/libs/mongodb";
import Blog from "@/models/blog";
import { NextResponse} from "next/server";

export async function PUT(request, { params }) {
const {id} = params;
const { newTitle: title, newSnippet: snippet,newBody:body} = await request.json ();
await connectMongoDB ( ) ;
await Blog.findByIdAndUpdate (id, { title, snippet,body});
return NextResponse.json({ message: "Blog updated" }, { status: 200 });
}


export async function GET(request, { params }) {
    const {id} = params;
    await connectMongoDB ();
    const blog = await Blog.findOne({ _id: id });
    return NextResponse.json({ blog }, { status: 200 });
}

export async function DELETE(request, { params }) {
    const {id} = params;
    await connectMongoDB ();
    const blog = await Blog.findByIdAndDelete(id);
    return NextResponse.json({ message:"THE BLOG WAS DELETED" }, { status: 200 });
}