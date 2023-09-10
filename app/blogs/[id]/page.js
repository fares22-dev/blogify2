"use client"
import { getDisplayName } from 'next/dist/shared/lib/utils'
import React from 'react'
import Link from 'next/link'
import DeleteBtn from './DeleteBtn'



const getBlog=async(id) =>{
    
        const res=await fetch(`http://localhost:3000/api/blogs/${id}`,
        {next: {
            revalidate:60
        }})
        return res.json()        
 
}




export default async function page({params}) {
    const {id}=params;
    const blog=await getBlog(id)


 
  return (
    <>
        <Link href="/blogs"><button className="backbtn">Back</button></Link>
        <div className="blog-container">
           <h1 className="blog-title">{blog.blog.title}</h1>
           <p className="blog-body">{blog.blog.body}</p>
         </div> 
           <DeleteBtn id={id}/>
       </>
  )
}
