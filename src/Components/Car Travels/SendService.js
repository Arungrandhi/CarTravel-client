import axios from 'axios';
import React, { useState } from 'react'

const SendService = () => {
    const [serviceType,setServiceType] = useState("");
    const [description,setDescription] = useState("");
    const submitHandler =(e)=>{
        e.preventDefault();
        axios.post("https://cartravel-server.onrender.com/services", {serviceType,description })
        .then(()=>alert("Service Request Sent"))
        .catch((err)=>console.log(err))
    }
    
  return (
    <div className='container p-5 col-6'>
        <h2>SendService</h2> 
        <form onSubmit={submitHandler}>
            <input type="text" onChange={(e)=>setServiceType(e.target.value)} className='form-control mb-3' placeholder='Enter Service Type' />
            <input type="text" onChange={(e)=>setDescription(e.target.value)} className='form-control mb-3' placeholder='Enter Description' />
            <input type="submit" className='form-control'  />   
        </form>
    </div>
  )
}

export default SendService