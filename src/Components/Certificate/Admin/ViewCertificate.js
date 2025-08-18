import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewCertificate = () => {
    const [users,setUsers] = useState([])

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
    const [id,setId] = useState("");

    useEffect(()=>{
        axios.get(`http://localhost:4000/certificate`)
        .then((res)=>setUsers(res.data))
        .catch((err)=>console.log(err))
    })

    const deleteStudent = (userId) => {
        axios.delete(`http://localhost:4000/certificate/${userId}`)
            .then(() => alert("User Deleted"))
            .catch((err) => console.log(err));
    }

    const getOneRecord = (userId) => {
        axios.get(`http://localhost:4000/certificate/${userId}`)
            .then((res) => {
                setName(res.data.name);
                setRollno(res.data.rollno);
                setClass(res.data.class);
                setSection(res.data.section);
                setDob(res.data.dob);       
                setGender(res.data.gender);       
                setFather(res.data.fathername);
                setMother(res.data.mothername);
                setAddress(res.data.address);
                setIssuedate(res.data.certificateissuedate);         
                setId(res.data.id);
            })
            .catch((err) => console.log(err));
        }
    
    const updateService = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:4000/certificate/${id}`,{name,rollno,Class,section,dob,gender,fathername,mothername,address,certificateissuedate})
            .then(() => alert("Service Updated"))
            .catch((err) => console.log(err));
    }
  return (
    <div className='container-fluid p-5'>
            <div className='row'>
                {
                    users.map((user, index) => {
                        return (
                            <div key={index} className='col-md-4'>
                                <div className='card mb-2'>
                                    <div className='card-body text-center'>   
                                        <h2 className='card-title text-danger'>{user.name}</h2>
                                        <p className='card-text'>roll:-{user.rollno}</p>
                                        <p className='card-text'>class:-{user.class}</p>
                                        <p className='card-text'>section :-{user.section}</p>
                                        <p className='card-text'>dob:-{user.dob}</p>                
                                        <p className='card-text'>gender ={user.gender}</p>  
                                        <p className='card-text'>{user.fathername}</p>
                                        <p className='card-text'>{user.mothername}</p>
                                        <p className='card-text'>{user.address}</p> 
                                        <p className='card-text'>{user.certificateissuedate}</p>                                    
                                        <button onClick={()=>getOneRecord(user.id)} data-bs-target="#update" data-bs-toggle="modal" className='btn btn-primary me-5'>Edit</button>
                                        <button onClick={()=>deleteStudent(user.id)} className='btn btn-danger'>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className='modal' id="update">
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h2>Update Enquiries</h2>
                    </div>
                    <div className='modal-body'>
                        <form  onSubmit={updateService}  className='bg-light p-3' >
                            <div className='form-floating mb-3'>
                                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='form-control mb-3' placeholder='Enter Service Type' />
                                    <label>Enter Service Type</label>
                            </div>
                             <div className='form-floating mb-3'>
                                    <input type="text" value={rollno} onChange={(e)=>setRollno(e.target.value)} className='form-control mb-3' placeholder='Enter Description' />
                                    <label>Enter Description</label>
                            </div>
                             <div className='form-floating mb-3'>
                                    <input type="text" value={Class} onChange={(e)=>setClass(e.target.value)} className='form-control mb-3' placeholder='Enter Description' />
                                    <label>Enter Description</label>
                            </div>
                            <div className='form-floating mb-3'>
                                    <input type="text" value={section} onChange={(e)=>setSection(e.target.value)} className='form-control mb-3' placeholder='Enter Description' />
                                    <label>Enter Description</label>
                            </div>
                            <div className='form-floating mb-3'>
                                    <input type="text" value={dob} onChange={(e)=>setDob(e.target.value)} className='form-control mb-3' placeholder='Enter Description' />
                                    <label>Enter Description</label>
                            </div>
                            <div className='form-floating mb-3'>
                                    <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)} className='form-control mb-3' placeholder='Enter Description' />
                                    <label>Enter Description</label>
                            </div>
                            <div className='form-floating mb-3'>
                                    <input type="text" value={fathername} onChange={(e)=>setFather(e.target.value)} className='form-control mb-3' placeholder='Enter Description' />
                                    <label>Enter Description</label>
                            </div>
                            <div className='form-floating mb-3'>
                                    <input type="text" value={mothername} onChange={(e)=>setMother(e.target.value)} className='form-control mb-3' placeholder='Enter Description' />
                                    <label>Enter Description</label>
                            </div>
                            <div className='form-floating mb-3'>
                                    <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} className='form-control mb-3' placeholder='Enter Description' />
                                    <label>Enter Description</label>
                            </div>
                            <div className='form-floating mb-3'>
                                    <input type="text" value={certificateissuedate} onChange={(e)=>setIssuedate(e.target.value)} className='form-control mb-3' placeholder='Enter Description' />
                                    <label>Enter Description</label>
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

export default ViewCertificate