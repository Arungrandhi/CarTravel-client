import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AddCertificate = () => {
    const [name, setName] = useState('');
    const [rollno,setRollno] = useState('')
    const [Class,setClass] = useState("");
    const [section,setSection] = useState("");
    const [dob,setDob] = useState("");
    const [gender,setGender] = useState("");
    const [fathername,setFather] = useState("");
    const [mothername,setMother] = useState("");
    const [address,setAddress] = useState("");
    const [certificateissuedate,setIssuedate] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/certificate",{name,rollno,Class,section,dob,gender,fathername,mothername,address,certificateissuedate})
        .then(() => alert("Student Details Sent"))
        .catch((err) => console.log(err))
    }

  return (
    <div>
        <form  onSubmit={submitHandler}  className='bg-light p-3' >
                            <div className='form-floating mb-3'>
                                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='form-control mb-3' placeholder='Enter Service Type' />
                                    <label>Enter Name</label>
                            </div>
                             <div className='form-floating mb-3'>
                                    <input type="text" value={rollno} onChange={(e)=>setRollno(e.target.value)} className='form-control mb-3' placeholder='Enter Description' />
                                    <label>Enter RollNo</label>
                            </div>
                             <div className='form-floating mb-3'>
                                    <input type="text" value={Class} onChange={(e)=>setClass(e.target.value)} className='form-control mb-3' placeholder='Enter Description' />
                                    <label>Enter Class</label>
                            </div>
                            <div className='form-floating mb-3'>
                                    <input type="text" value={section} onChange={(e)=>setSection(e.target.value)} className='form-control mb-3' placeholder='Enter Description' />
                                    <label>Enter Section</label>
                            </div>
                            <div className='form-floating mb-3'>
                                    <input type="text" value={dob} onChange={(e)=>setDob(e.target.value)} className='form-control mb-3' placeholder='Enter Description' />
                                    <label>Enter Dob</label>
                            </div>
                            <div className='form-floating mb-3'>
                                    <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)} className='form-control mb-3' placeholder='Enter Description' />
                                    <label>Enter Gender</label>
                            </div>
                            <div className='form-floating mb-3'>
                                    <input type="text" value={fathername} onChange={(e)=>setFather(e.target.value)} className='form-control mb-3' placeholder='Enter Description' />
                                    <label>Enter fathername</label>
                            </div>
                            <div className='form-floating mb-3'>
                                    <input type="text" value={mothername} onChange={(e)=>setMother(e.target.value)} className='form-control mb-3' placeholder='Enter Description' />
                                    <label>Enter Mothername</label>
                            </div>
                            <div className='form-floating mb-3'>
                                    <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} className='form-control mb-3' placeholder='Enter Description' />
                                    <label>Enter Address</label>
                            </div>
                            <div className='form-floating mb-3'>
                                    <input type="text" value={certificateissuedate} onChange={(e)=>setIssuedate(e.target.value)} className='form-control mb-3' placeholder='Enter Description' />
                                    <label>Enter CertificateIssueDate</label>
                            </div>
                            <input type="submit" className='form-control'  />         
                        </form>
    </div>
  )
}

export default AddCertificate