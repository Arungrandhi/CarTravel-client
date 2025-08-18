import React, { useContext, useEffect, useState } from 'react'
import Welcome from './Welcome';
import SendCar from '../SendCar';
import ViewCar from './ViewCar';
import ViewService from './ViewService';
import SendService from '../SendService';
import ViewEnquiry from './ViewEnquiry';
import { loginStatus } from '../../../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
    const [view, setView] = useState("")
    const [token, setToken] = useContext(loginStatus)
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://cartravel-server.onrender.com/Dashboard`, {
            headers: {
                "x-token": token
            }
        })
            .then((res) => {
                setUser(res.data)
            })
            .catch((err) => console.log(err))
    })


    const dashboardView = (() => {
        switch (view) {
            case "":
                return <Welcome />;
            case "addCar":
                return <SendCar />;
            case "viewCar":
                return <ViewCar />;
            case "addService":
                return <SendService />;
            case "viewService":
                return <ViewService />;
            case "viewEnquiries":
                return <ViewEnquiry />;
            default:
                return <h2>Welcome to the Admin Dashboard</h2>;
        }
    })
    if (token === "") {
        navigate("/admin")
    }
    else {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <aside className='col-lg-3'>
                        <h3 onClick={() => setView("")} className='text-center'>Welcome {user.name}</h3>
                        <button onClick={() => setView("addCar")}>Add Car</button>
                        <button onClick={() => setView("viewCar")}>View Car</button>
                        <button onClick={() => setView("addService")}>Add Service</button>
                        <button onClick={() => setView("viewService")}>View Service</button>
                        <button onClick={() => setView("viewEnquiries")}>View Enquiries</button>
                        <button onClick={() => setToken("")}>Logout</button>
                    </aside>
                    <div className='col-lg-9'>
                        {dashboardView()}
                    </div>
                </div>
            </div>
        )
    }
}

export default DashBoard