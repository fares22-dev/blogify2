import React from 'react'
import { useRouter } from 'next/navigation'


const handle=async(id)=>{

    confirm("ARE YOU SURE ")
    if (confirm){
    fetch(`http://localhost:3000/api/blogs/${id}`,{
        method:"DELETE"
    })
    }
}

export default function DeleteBtn({id}) {
    const router=useRouter()




    const handleDelete=()=>{
        handle(id);
        router.push("/blogs")
        router.refresh()
    }
  return (
    <>
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
    </>
  )
}
