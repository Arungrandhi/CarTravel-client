import React, { use, useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginStatus } from '../../../App';
import axios from 'axios';
const Login = () => {
    const [details, setDetails] = useState({})
    const [token,setToken] = useContext(loginStatus)
    const navigate = useNavigate();
    

    const changeData = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(details);

        axios.post(`https://cartravel-server.onrender.com/login`, details)
        .then((res)=>{
            console.log(res.data)
            alert("Login Successfull")
            setToken(res.data.token)
        })
        .catch((err) => {
            console.log(err)
            alert("Login Not Successfull")
         })
        if(token){
            navigate("/Dashboard")
        }



        // no need now

        // const { username, password } = details;
        // if (username === "admin" && password === "12345") {
        //     setLogin(true)
        //     navigate("/Dashboard");
        // }
        // else {
        //     alert("Invalid Credentials");
        // }
    }

    return (
        <div className='container-fluid p-5'>
            <div className='col-lg-6 p-5 shadow mx-auto mt-5 text-center'>
                <h1>Admin Login</h1>
                <form onSubmit={submitHandler}>
                    <input type="text" onChange={changeData} className="form-control mb-3" name="email" placeholder='Email Address' />
                    <input type="password" onChange={changeData} className="form-control mb-3" name="password" placeholder='Password' />
                    <input type="submit" className="btn btn-success  form-control" />
                </form>
            </div>
        </div>
    )
}

export default Login