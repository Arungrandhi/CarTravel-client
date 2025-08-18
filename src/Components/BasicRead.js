import axios from 'axios';
import React, { useEffect, useState } from 'react'

const BasicRead = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => setUsers(res.data))
            .catch((err) => console.log("Failure", err))
    })
    return (
        <div className='container p-5'>
            <div className='d-flex justify-content-center mb-5'>
                <button className='btn' aria-expanded="false" aria-controls="mens" data-bs-target="#mens" data-bs-toggle="collapse"> <h1>Mens</h1></button>
                <button className='btn' aria-expanded="false" aria-controls="womens" data-bs-target="#womens" data-bs-toggle="collapse"> <h1>Womens</h1></button>
                <button className='btn' aria-expanded="false" aria-controls="electronics" data-bs-target="#electronics" data-bs-toggle="collapse"> <h1>Electronics</h1></button>
            </div>
            <div id="accordionExample">
                <div className='row collapse' id="mens" data-bs-parent="#accordionExample">
                    {
                        users.map((user, index) => {
                            if (user.category === "men's clothing")
                                return (
                                    <div key={index} className='col-md-4 mb-3'>
                                        <div className='card h-100 shadow p-3 mb-5 bg-white rounded'>
                                            <img src={user.image} alt={user.title} className='w-100 h-50 p-5 product' />
                                            <div className='card-body product'>
                                                <h2 className='text-danger product'>{user.title}</h2>
                                                <h4>Price: ${user.price}</h4>
                                                <h4>Rating: {user.rating.rate}</h4>
                                                <details>
                                                    <summary>Click For Description</summary>
                                                    <p>{user.description}</p>
                                                </details>
                                                <button className='btn btn-success'>Order Now</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                        })
                    }
                </div>
                <div className='row collapse' id="womens" data-bs-parent="#accordionExample">
                    {
                        users.map((user, index) => {
                            if (user.category === "women's clothing")
                                return (
                                    <div key={index} className='col-md-4 mb-3'>
                                        <div className='card h-100 shadow p-3 mb-5 bg-white rounded'>
                                            <img src={user.image} alt={user.title} className='w-100 h-50 p-5 product' />
                                            <div className='card-body product'>
                                                <h2 className='text-danger product'>{user.title}</h2>
                                                <h4>Price: ${user.price}</h4>
                                                <h4>Rating: {user.rating.rate}</h4>
                                                <details>
                                                    <summary>Click For Description</summary>
                                                    <p>{user.description}</p>
                                                </details>
                                                <button className='btn btn-success'>Order Now</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                        })
                    }
                </div>
                <div className='row collapse' id="electronics" data-bs-parent="#accordionExample">
                    {
                        users.map((user, index) => {
                            if (user.category === "electronics")
                                return (
                                    <div key={index} className='col-md-4 mb-3'>
                                        <div className='card h-100 shadow p-3 mb-5 bg-white rounded'>
                                            <img src={user.image} alt={user.title} className='w-100 h-50 p-5 product' />
                                            <div className='card-body product'>
                                                <h2 className='text-danger product'>{user.title}</h2>
                                                <h4>Price: ${user.price}</h4>
                                                <h4>Rating: {user.rating.rate}</h4>
                                                <details>
                                                    <summary>Click For Description</summary>
                                                    <p>{user.description}</p>
                                                </details>
                                                <button className='btn btn-success'>Order Now</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default BasicRead