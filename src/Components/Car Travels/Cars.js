import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


const Cars = () => {
  const [cars, setCars] = useState([])

  useEffect(() => {
    axios.get('https://cartravel-server.onrender.com/cars')
        .then((res) => setCars(res.data))
        .catch((err) => console.error(err))
  })

    return (
        <div className="container p-5">
            <h1 className="text-center mb-4">{cars.length} Available Cars</h1>
            <div className="row">
                {
                    cars.map((car, index) => {
                        return (
                            <div key={index} className='col-md-4'>
                                <div className='card mb-2'>
                                    <div className='card-body'>
                                        <div className='d-flex justify-content-between align-items-center mb-3'>
                                        <h5 className='card-title text-danger'>{car.carName}</h5>
                                        <button className='btn btn-danger'>Register</button>
                                        </div>
                                        <p className='card-text'>{car.carModel}</p>
                                        <p className='card-text'>Price per day: ₹{car.pricePerDay}</p>
                                        <p className='card-text'>Category: {car.category}</p>
                                        <NavLink to={`/carDetails/${car.id}`}>
                                            <button className='btn btn-primary'>Know More</button>
                                        </NavLink>
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

export default Cars;