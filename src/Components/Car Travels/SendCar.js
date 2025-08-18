import React, { useState } from 'react'
import axios from 'axios';

const SendCar = () => {
    const[carName, setCarName] = useState("")
    const [carModel, setCarModel] = useState("")
    const [category, setCategory] = useState("")
    const [pricePerDay, setPricePerDay] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("https://cartravel-server.onrender.com/cars",{carName,carModel,category,pricePerDay})
        .then(() => alert("Car Details Sent"))
        .catch((err) => console.log(err))
    }
  return (
    <div className='container p-5'>
        <h2 className='text-center'>Enter Car Details</h2>
        <form onSubmit={submitHandler}>
            <div className='form-floating mb-3'>
                <input type='text' onChange={(e) => setCarName(e.target.value)} className='form-control' placeholder='' />
                <label>Enter Car Name</label>
            </div>
            <div className='form-floating mb-3'>
                <input type='text' onChange={(e) => setCarModel(e.target.value)} className='form-control' placeholder='Car Model' />
                <label>Enter Car Model</label>
            </div>
            <div className='form-floating mb-3'>
                <input type='text' onChange={(e) => setCategory(e.target.value)} className='form-control' placeholder='Car Model' />
                <label>Enter Category</label>
            </div>
            <div className='form-floating mb-3'>
                <input type='text' onChange={(e)=>setPricePerDay(e.target.value)} className='form-control' placeholder='Car Price' />
                <label>Enter Car PricePerDay</label>
            </div>
            <input type="submit" className='form-control' />
        </form>
    </div>
  )
}

export default SendCar