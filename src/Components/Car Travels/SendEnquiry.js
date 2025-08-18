import axios from 'axios';
import React, { useState } from 'react'

const SendEnquiry = () => {
    const [name,setName]= useState("");
    const [mobile,setMobile]= useState("");
    const [email,setEmail]= useState("");
    const submitHandler =(e)=>{
        e.preventDefault();
        axios.post("https://cartravel-server.onrender.com/enquires",{name,mobile,email})
        .then(()=>alert("sent"))
        .catch((err)=>console.log(err))
    }
  return (
    <div>
        <h3>SendEnquiry</h3>
        <form onSubmit={submitHandler} className='bg-light p-3' >
           <div className='form-floating mb-3'>
                <input type='text' className='form-control' placeholder='name' onChange={(e)=>setName(e.target.value)}/ >
                <label>Enter name</label>
           </div>
           <div className='form-floating mb-3'>
                <input type='text' className='form-control' placeholder='name' onChange={(e)=>setMobile(e.target.value)}/ >
                <label>Mobile Number</label>
           </div>
           <div className='form-floating mb-3'>
               <input type='text' className='form-control' placeholder='name' onChange={(e)=>setEmail(e.target.value)}/ >
                <label>Email</label>
           </div>
           <input type="submit" className='form-control'  />         
        </form>
    </div>
  )
}

export default SendEnquiry