import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewEnquiry = () => {
    const[enquiries,setEnq]= useState([])
    const [name,setName]= useState("");
    const [mobile,setMobile]= useState("");
    const [email,setEmail]= useState("");
    const [id,setId]= useState("")
    useEffect(()=>{
        axios.get("https://cartravel-server.onrender.com/enquires")
        .then((res)=>setEnq(res.data))
        .catch((err)=>console.log(err))
    })

    const deleteEnquiry=(enquiryid)=>{
        axios.delete(`https://cartravel-server.onrender.com/enquires/${enquiryid}`)
        .then(()=>alert("Enquiry Deleted"))
        .catch((err)=>console.log(err))
    }

    const getOneRecord=(enquiryid)=>{
        axios.get(`https://cartravel-server.onrender.com/enquires/${enquiryid}`)
        .then((res)=>{
            setName(res.data.name)
            setMobile(res.data.mobile)
            setEmail(res.data.email)
            setId(res.data._id)
        })
        .catch((err)=>console.log(err))
    } 

    const updateEnquiry=(e)=>{
        e.preventDefault();
        axios.put(`https://cartravel-server.onrender.com/enquires/${id}`,{name,mobile,email})
        .then((res)=> alert(" Enquiry Updated"))
        .catch((err)=>console.log(err))
    }


  return (
    <div className='container p-5'>
       <h2>ViewEnquiry</h2> 
       <table className='table table-bordered'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                enquiries.map((enquiry,index)=>{
                   return ( 
                    <tr key={index}> 
                        <td>{enquiry.name}</td>
                        <td>{enquiry.mobile}</td>
                        <td>{enquiry.email}</td>
                        <td>
                             <button onClick={()=>getOneRecord(enquiry._id)} className='btn btn-primary me-3' data-bs-target="#update" data-bs-toggle="modal">Edit</button>
                             <button onClick={()=>deleteEnquiry(enquiry._id)} className='btn btn-danger'>Delete</button>
                        </td>
                   </tr>
                   )  
                })
            }
        </tbody>
       </table>

        <div className='modal' id="update">
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h2>Update Enquiries</h2>
                    </div>
                    <div className='modal-body'>
                        <form  onSubmit={updateEnquiry}  className='bg-light p-3' >
                            <div className='form-floating mb-3'>
                                    <input type='text' className='form-control' value={name} placeholder='name' onChange={(e)=>setName(e.target.value)}/ >
                                    <label>Enter name</label>
                            </div>
                            <div className='form-floating mb-3'>
                                    <input type='text' className='form-control' value={mobile} placeholder='name' onChange={(e)=>setMobile(e.target.value)}/ >
                                    <label>Mobile Number</label>
                            </div>
                            <div className='form-floating mb-3'>
                                <input type='text' className='form-control'value={email} placeholder='name' onChange={(e)=>setEmail(e.target.value)}/ >
                                    <label>Email</label>
                            </div>
                            <input type="submit" className='form-control'  />         
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewEnquiry