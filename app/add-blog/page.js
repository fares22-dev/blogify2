"use client"
import React, { useState,useNavigate } from 'react'
import { useRouter } from 'next/navigation'

export default function page() {


const [title,setTitle]=useState("")
const [snippet,setSnippet]=useState("")
const [body,setBody]=useState("")
const router=useRouter()




const handleSubmit= async(event)=>{
event.preventDefault();


try{
const res = await fetch("http://localhost:3000/api/blogs", {
method: "POST",
headers:{
"Content-Type":"application/json",},
body:JSON.stringify({title,snippet,body})
}

)} catch(err){console.log(`the error is ${err} `)}
router.push('/blogs')

}


  


    
  return (
    <>
    <form  onSubmit={handleSubmit} className="myform">
        <h1>What's On Your Mind ?</h1>
        <input id="title" onChange={(e)=>{setTitle(e.target.value)}} type="text" placeholder="Title" name="title"/>
        <input id="snippet" onChange={(e)=>{setSnippet(e.target.value)}} type="text" placeholder="Snippet" name="snippet"/>
        <input id="body" onChange={(e)=>{setBody(e.target.value)}} type="text" placeholder="Body" name="body" />   
        <button className="sbmt-btn" type="submit">  Add </button>   
    </form>
    </>
  )
}
