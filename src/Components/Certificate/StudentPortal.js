import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'

const StudentPortal = () => {

    const [users, setUsers] = useState([])
    const [id, setId] = useState("")  // input from user
    const [filteredUser, setFilteredUser] = useState([]);

    useEffect(() => {
        // Example API call
        axios.get("http://localhost:4000/certificate")
            .then(res => setUsers(res.data))
            .catch(err => console.error(err));
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        const result = users.filter(user => user.id === id);
        setFilteredUser(result);
    };

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     axios.get(`http://localhost:4000/certificate/${id}`)
    //     .then((res)=>{
    //        const result = Array.isArray(res.data) ? res.data : [res.data];
    //        setUsers(result);
    //     })
    //     .catch((err)=>alert("Id not Found"))
    // }

    return (
        <div className='container-fluid p-5'>
            <h1 className='text-center mb-5'><span className='stu'>StudentPortal</span></h1>
            <form onSubmit={submitHandler} className='form w-50 mx-auto mb-5'>
                <div className='form-floating mb-3'>
                    <input type="text" value={id} onChange={(e) => setId(e.target.value)} className='form-control mb-3' placeholder='Enter Description' />
                    <label>Enter Student Id</label>
                </div>
                <button type="submit" className='form-control'> Submit</button>
            </form>
            <div className='row'>
                {
                    filteredUser.map((user, index) => {
                        return (
                            <div key={index} className='col-md-4 mx-auto'>
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
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default StudentPortal