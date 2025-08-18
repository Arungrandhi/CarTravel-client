import React, { useEffect, useState } from 'react'
import SendEnquiry from './Car Travels/SendEnquiry'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'

const CarDetails = () => {
    const { id } = useParams()
    const [car, setCars] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:4000/cars/${id}`)
            .then((res) => setCars(res.data))
            .catch((err) => console.log(err))
    })
    return (
        <div className='container-fluid p-5 row'>
            <div className='col-lg-8'>
                <div className='card mb-2'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center mb-3'>
                            <h5 className='card-title text-danger'>{car.carName}</h5>
                            <button className='btn btn-danger'>Register</button>
                        </div>
                        <p className='card-text'>{car.carModel}</p>
                        <p className='card-text'>Price per day: ₹{car.pricePerDay}</p>
                        <p className='card-text'>Category: {car.category}</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-4'>
                <SendEnquiry />
            </div>
        </div>
    )
}

export default CarDetails