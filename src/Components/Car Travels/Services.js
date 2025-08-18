import React, { useEffect, useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import SendService from './SendService'
import ViewService from './Admin/ViewService'
import axios from 'axios'


const Services = () => {
    const [service, setService] = useState([])
    
      useEffect(() => {
        axios.get('https://cartravel-server.onrender.com/services')
            .then((res) => setService(res.data))
            .catch((err) => console.error(err))
      })
    return (
        <div className='container-fluid p-5'>
            <h1 className="text-center mb-4">{service.length} Available Services</h1>
            <div className='row'>
                {
                    service.map((service, index) => {
                        return (
                            <div key={index} className='col-md-4 mb-3'>
                                <div className='card h-100'>
                                    <div className='card-body'>
                                        <h3>{service.serviceType}</h3>
                                        <p>{service.description}</p>
                                        <NavLink className="nav-link" to="/cars"> <button className='btn btn-success'>Book Now</button></NavLink>
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

export default Services