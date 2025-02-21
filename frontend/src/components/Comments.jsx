import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';


const Comments = () => {

const [comment,setComment] = useState("")
const [userId,setUserId] = useState("")
const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
        
        const res = await axios.post("http://localhost:8081/api/v1/comments",{
            comment,
            recipeId:id,
            userId
        })
const data= await res.data

    } catch (error) {
        console.error("Error submitting comment:",error.message)
    }
}





  return (
    <>
<div>
<form action="">
    <label htmlFor="comment">Comment</label>
    <input type="text" name="comment" id="comment"/>
    <button type="submit">Submit</button>
</form>


</div>



    </>
  )
}

export default Comments