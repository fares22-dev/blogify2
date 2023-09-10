import React from 'react'
import Link from 'next/link';


const getBlogs = async () => {
    try {
    const res = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-store",
    });
    if (!res.ok) {
    throw new Error("Failed to fetch blogs");
    }
    return res.json ();
    } catch (error){
    console.log("Error loading blogs: ", error);
    } 
    };

export default async function page() {
    const blogs= await getBlogs()
  return (
 
 <>
{blogs && <div>
{ blogs.map((blog) =>(
<div className="p-4   my-3 flex justify-between
gap-5 items-start">
<Link style={{ textDecoration: 'none' }} href={"/blogs/"+blog._id}> 
<div className='blog-in-list'>
<h2 className="blog-title">{blog.title} </h2>
<p className='blog-snippet'>{blog.snippet}</p>
</div>
</Link>
</div>
))}
<a href="/add-blog"> <button className="add-btn"><img src="images/plus.png"/></button></a>


</div>}
    </>
  )
}
